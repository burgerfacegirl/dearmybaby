package com.ssafy.dmb.dto.user;

import com.ssafy.dmb.domain.plan.Plan;
import com.ssafy.dmb.domain.user.Family;
import com.ssafy.dmb.domain.user.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class MemberDetailResponseDto {

    private Long memberNo;

    private String memberName;

    private String memberEmail;

    private String memberId;

    private String memberImg;

    private Plan plan;

    private Long familyId;

    public MemberDetailResponseDto(Member member, Plan plan, Family family){
        this.memberNo = member.getNo();
        this.memberId = member.getMemberId();
        this.memberName = member.getMemberName();
        this.memberEmail = member.getMemberEmail();
        this.memberImg = member.getMemberImg();
        this.plan = plan;
        this.familyId = family.getId();
    }

}
