package com.ssafy.dmb.dto.user;

import com.ssafy.dmb.domain.plan.Plan;
import com.ssafy.dmb.domain.user.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

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

    private Plan closetPlan;

    private Plan currentPlan;

    private List<Long> familyIdList;

    public MemberDetailResponseDto(Member member, Plan closetPlan, Plan currentPlan,List<Long> familyIdList){
        this.memberNo = member.getNo();
        this.memberId = member.getMemberId();
        this.memberName = member.getMemberName();
        this.memberEmail = member.getMemberEmail();
        this.memberImg = member.getMemberImg();
        this.currentPlan = currentPlan;
        this.closetPlan = closetPlan;
        this.familyIdList = familyIdList;
    }

}
