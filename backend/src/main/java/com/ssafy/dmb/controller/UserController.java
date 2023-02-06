package com.ssafy.dmb.controller;

import com.ssafy.dmb.dto.record.RecordDto;
import com.ssafy.dmb.dto.record.RecordResponseDto;
import com.ssafy.dmb.dto.user.UserDto;
import com.ssafy.dmb.service.S3Service;
import com.ssafy.dmb.service.UserService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/user")
public class UserController {

    private final S3Service s3Service;

    private final UserService userService;

    @PostMapping()
    public String saveUser(@RequestPart MultipartFile multipartFile
            , @RequestPart UserDto userDto) throws IOException {

        String url = s3Service.upload(multipartFile, "dearmybucket", "dmb");

        userService.saveUser(url, userDto);
        return url;
    }

    @GetMapping("/detail")
    public List<RecordResponseDto> getUserDetail(@RequestParam("dayId") Long dayId, @RequestParam("planId") Long planId ) throws IOException {
        return recordService.getDayRecordList(dayId, planId);
    }

    @DeleteMapping()
    public void deleteUser(@RequestParam("recordId") Long recordId) throws IOException {
        recordService.deleteRecord(recordId);
    }

    @PutMapping()
    public void changeUserInfo(@RequestParam("recordId") Long recordId, @RequestParam("recordText") String recordText) throws IOException {
        recordService.changeRecordText(recordId, recordText);
    }

}
