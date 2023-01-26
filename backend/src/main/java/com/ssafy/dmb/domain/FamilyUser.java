package com.ssafy.dmb.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter @Setter
public class FamilyUser {

    @Id @GeneratedValue
    @Column(name = "family_user_no")
    private Long no;

    @ManyToOne(fetch= FetchType.LAZY)
    @JoinColumn(name = "family_no")
    private Family family;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_no")
    private User user;

    @Enumerated(EnumType.ORDINAL)
    private Role role;

}
