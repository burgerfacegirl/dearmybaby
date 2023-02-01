package com.ssafy.dmb.domain.record;


import com.ssafy.dmb.domain.User;
import lombok.Getter;
import lombok.Setter;
import org.joda.time.DateTime;

import javax.persistence.*;

@Entity
@Getter @Setter
public class Comment {

    @Id @GeneratedValue
    @Column(name = "comment_id")
    private Long id;

    // FK
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    @JoinColumn(name="record_id")
    private Record record;

    // FK
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_no")
    private User user;

    @Column(nullable = false)
    private String commentText;

    @Column(columnDefinition = "DATETIME default now()")
    private DateTime commentDate;
}
