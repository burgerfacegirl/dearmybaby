package com.ssafy.dmb.domain.record;

import com.ssafy.dmb.domain.location.Coordinate;
import com.ssafy.dmb.domain.plan.Day;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Record {
    @Id @GeneratedValue
    @Column(name = "record_id")
    private Long id;

    // day_id
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    @JoinColumn(name = "day_id")
    private Day day;

    private int record_type;

    private String record_file;

    private String record_text;

    private String file_url;

    @OneToMany(mappedBy = "record", cascade = CascadeType.ALL)
    private List<Comment> comments = new ArrayList<>();

    // 위도
    @Embedded
    private Coordinate recordCoordinate;
    @Column(columnDefinition = "DATETIME default now()")
    private LocalDateTime record_date;

    @Builder
    public Record(String file_url, String record_file, String record_text, int record_type, Day day, Coordinate recordCoordinate) {
        this.file_url = file_url;
        this.record_file = record_file;
        this.record_text = record_text;
        this.record_type = record_type;
        this.day = day;
        this.recordCoordinate = recordCoordinate;
    }
    // 경도

}
