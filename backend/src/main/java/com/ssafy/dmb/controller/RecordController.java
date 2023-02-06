package com.ssafy.dmb.controller;

import com.ssafy.dmb.dto.record.RecordDetailResponseDto;
import com.ssafy.dmb.dto.record.RecordDto;
import com.ssafy.dmb.dto.record.RecordResponseDto;
import com.ssafy.dmb.service.RecordService;
import com.ssafy.dmb.service.S3Service;
import io.swagger.annotations.ApiOperation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RequiredArgsConstructor
@RestController
@Tag(name = "Record", description = "record API 입니다.")
@RequestMapping("/api/record")
public class RecordController {
    private final RecordService recordService;
    private final S3Service s3Service;

    @ApiOperation(value = "여행 기록 저장", notes = "여행 기록을 저장한다.")
    @PostMapping()
    public String saveRecord(@RequestPart MultipartFile multipartFile
            , @RequestPart RecordDto recordDto) throws IOException {

        String url = s3Service.upload(multipartFile, "dearmybucket", "dmb");

        recordService.saveRecord(url, recordDto);
        return url;
    }

    @ApiOperation(value = "날짜별 여행 기록 전체 조회", notes = "<strong> dayId </strong>를 통해 날짜별 여행 기록을 전체 조회한다.")
    @GetMapping("/day")
    public List<RecordResponseDto> getDayRecordList(@RequestParam("dayId") Long dayId, @RequestParam("planId") Long planId ) throws IOException {
        return recordService.getDayRecordList(dayId, planId);
    }

    @ApiOperation(value = "계획별 여행 기록 전체 조회", notes = "<strong> planId </strong>를 통해 계획별 여행 기록을 전체 조회한다.")
    @GetMapping("/plan")
    public List<RecordResponseDto> getPlanRecordList(@RequestParam("planId") Long planId) throws IOException {
        return recordService.getPlanRecordList(planId);
    }

    @ApiOperation(value = "여행 기록 단일 조회", notes = "<strong> recordId </strong>를 통해 여행 기록을 단일 조회한다.")
    @GetMapping("/detail")
    public RecordDetailResponseDto getRecord(@RequestParam("recordId") Long recordId) throws IOException {
        return recordService.getRecord(recordId);
    }

    @ApiOperation(value = "여행 기록 삭제", notes = "<strong> recordId </strong>를 통해 여행 기록을 삭제한다.")
    @DeleteMapping()
    public void deleteRecord(@RequestParam("recordId") Long recordId) throws IOException {
        recordService.deleteRecord(recordId);
    }

    @ApiOperation(value = "기록 내용 수정", notes = "<strong> recordId </strong>를 통해 여행 기록을 수정한다.")
    @PutMapping()
    public void changeRecordText(@RequestParam("recordId") Long recordId, @RequestParam("recordText") String recordText) throws IOException {
        recordService.changeRecordText(recordId, recordText);
    }

}
