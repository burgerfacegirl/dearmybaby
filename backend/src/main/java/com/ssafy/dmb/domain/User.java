package com.ssafy.dmb.domain;

import com.ssafy.dmb.domain.location.Coordinate;
import com.ssafy.dmb.domain.plan.Day;
import com.ssafy.dmb.domain.record.Comment;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter @Setter
@Entity
public class User {

    @Id @GeneratedValue
    @Column(name = "user_no")
    private Long no;

    @Column(nullable = false)
    private String userName;

    @Column(nullable = false)
    private String userEmail;

    @Column(nullable = false)
    private String userPassword;

    @Column(nullable = false)
    private String userId;

    private String userImg;

    @OneToMany(mappedBy = "user", cascade = CascadeType.PERSIST)
    private List<FamilyUser> familyUser = new ArrayList<>();

    @OneToMany(mappedBy = "record", cascade = CascadeType.ALL)
    private List<Comment> comments = new ArrayList<>();

    @Builder
    public Record(String fileUrl, String recordFile, String recordText, int recordType, Day day, Coordinate recordCoordinate) {
        this.fileUrl = fileUrl;
        this.recordFile = recordFile;
        this.recordText = recordText;
        this.recordType = recordType;
        this.day = day;
        this.recordCoordinate = recordCoordinate;
    }
}
