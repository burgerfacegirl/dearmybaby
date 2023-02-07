package com.ssafy.dmb.controller;

import com.ssafy.dmb.dto.login.MemberLoginRequestDto;
import com.ssafy.dmb.dto.login.TokenInfo;
import com.ssafy.dmb.dto.user.MemberDto;
import com.ssafy.dmb.dto.user.MemberResponseDto;
import com.ssafy.dmb.service.MemberService;
import com.ssafy.dmb.service.S3Service;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RequiredArgsConstructor
@RestController
@Tag(name = "Member", description = "Member API 입니다.")
@Transactional
@RequestMapping("/api/member")
public class MemberController {

    private final S3Service s3Service;

    private final MemberService memberService;

    @PostMapping()
    @Operation(summary = "회원가입", description = "<strong> Id, Email, Img, Password, Name </strong>을 통해 회원가입한다.")
    public String saveMember(@RequestPart MultipartFile multipartFile
            , @RequestPart MemberDto memberDto) throws IOException {

        String url = s3Service.upload(multipartFile, "dearmybucket", "dmb");

        memberService.saveMember(url, memberDto);
        return url;
    }

    @PostMapping("/check/{memberId}")
    @Operation(summary = "아이디 중복 체크", description = "<strong> memberId </strong>를 통해 Id 중복체크한다.")
    public boolean checkUserId(@PathVariable String memberId) throws IOException {
        return  memberService.checkMemberId(memberId);
    }

    @GetMapping("/detail/{memberId}")
    @Operation(summary = "회원 정보 조회", description = "<strong> memberID </strong>를 통해 회원 정보를 조회한다.")
    public ResponseEntity<MemberResponseDto> getPlanDetail(@PathVariable ("memberId") String memberId){
        return ResponseEntity.status(HttpStatus.OK).body(memberService.getMemberDetail(memberId));
    }

    @DeleteMapping("/{memberId}")
    @Operation(summary = "회원 탈퇴", description = "<strong> memberID </strong>를 통해 회원 탈퇴한다.")
    public void deleteUser(@PathVariable("memberId") String memberId) throws IOException {
        memberService.deleteMember(memberId);
    }

    @PutMapping()
    @Operation(summary = "회원 정보 수정", description = "<strong> memberDto</strong>를 통해 회원정보를 수정한다.")
    public void changeUserInfo(@RequestBody MemberDto memberDto) throws IOException {
        memberService.changeMemberInfo(memberDto);
    }

    @PostMapping("/login")
    public HttpServletResponse login(@RequestBody MemberLoginRequestDto memberLoginRequestDto, HttpServletResponse httpServletResponse) {
        String memberId = memberLoginRequestDto.getMemberId();
        String password = memberLoginRequestDto.getPassword();
        TokenInfo tokenInfo = memberService.login(memberId, password);

        String accesstoken = tokenInfo.getGrantType() + tokenInfo.getAccessToken(); // 얘는 헤더에?
        String refreshToken = tokenInfo.getRefreshToken(); // 얘는 쿠키로 and DB저장

        Cookie cookie = new Cookie("refresh-token", refreshToken);
        // expires in 7 days
        cookie.setMaxAge(7*86400000);

        // optional properties
        cookie.setSecure(true);
        cookie.setHttpOnly(true);
        cookie.setPath("/");

        // add cookie to response
        httpServletResponse.addCookie(cookie);
        httpServletResponse.addHeader("access-token", accesstoken);

        //db저장 코드 refreshtoken 유효기간 설정하는거랑, 저장할때 기존꺼 지우고 저장하는거 추가해야함
        memberService.changeMemberRefreshToken(memberId, refreshToken);

        return httpServletResponse;
    }

}
