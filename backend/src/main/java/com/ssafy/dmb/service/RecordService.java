package com.ssafy.dmb.service;

import com.ssafy.dmb.dto.RecordDto;
import com.ssafy.dmb.dto.RecordResponseDto;

import java.util.List;

public interface RecordService {
    List<RecordResponseDto> getDayRecordList(Long dayId);

    List<RecordResponseDto> getPlanRecordList(Long planId);

    RecordResponseDto getRecord(RecordDto recordDto);

    RecordResponseDto saveRecord(String url, RecordDto recordDto);

    void deleteRecord(Long recordId);
}
