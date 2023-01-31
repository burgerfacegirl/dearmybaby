package com.ssafy.dmb.dto;

import com.ssafy.dmb.domain.location.Coordinate;
import com.ssafy.dmb.domain.record.Record;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class RecordResponseDto {
    // record pk
    private Long recordId;
    // 몇일차껀지
    private Long dayId;
    // 서버에서 생성한 파일 이름
    private String fileName;
    // 위도
    private String latitude;
    // 경도
    private String longitude;
    // 파일 타입
    private int type;
    // 저장 url
    private String url;
    // record 시간
    private LocalDateTime recordTime;

    public RecordResponseDto(Record record){
        recordId = record.getId();
        dayId = record.getDay().getId();
        fileName = record.getRecord_file();
        type = record.getRecord_type();
        url = record.getFile_url();
        recordTime = record.getRecord_date();

        Coordinate coordinate = record.getRecordCoordinate();
        latitude = coordinate.getLatitude();
        longitude = coordinate.getLongitude();
    }
}
