package com.ssafy.dmb.service;

import com.ssafy.dmb.dto.RecordDto;
import com.ssafy.dmb.dto.RecordResponseDto;

import java.util.List;

public interface RecordService {
    List<RecordResponseDto> getRecord(Long dayId);
    RecordResponseDto getRecordDetail(RecordDto recordDto);
    RecordResponseDto saveRecord(RecordDto recordDto);
    void deleteRecord(Long recordId);
}
