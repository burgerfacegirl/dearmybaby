package com.ssafy.dmb.controller;

import com.ssafy.dmb.dto.RecordDto;
import com.ssafy.dmb.dto.RecordResponseDto;
import com.ssafy.dmb.service.RecordServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/record")
public class RecordController {
    private final RecordServiceImpl recordService;

    @PostMapping("/image")
    public String imageUpload(@RequestParam("data") MultipartFile multipartFile
            , @RequestParam("recorded") RecordDto recordDto) throws IOException {

        String url = recordService.upload(multipartFile, "dearmybucket", "image");
        // content와 URL 을 DB에 저장하는 service 코드와 repo method가 필요하다.
        recordService.saveRecord(url, recordDto);
        return "ok";
    }

    @PostMapping("/video")
    public String videoUpload(@RequestParam("data") MultipartFile multipartFile) throws IOException {
        return recordService.upload(multipartFile, "dearmybucket", "video");
    }

    @GetMapping("/day")
    public List<RecordResponseDto> getDayRecordList(@RequestParam("dayId") Long dayId) throws IOException {
        return recordService.getDayRecordList(dayId);
    }

    @GetMapping("/plan")
    public List<RecordResponseDto> getPlanRecordList(@RequestParam("planId") Long planId) throws IOException {
        return recordService.getPlanRecordList(planId);
    }



    @DeleteMapping()
    public void deleteRecord(@RequestParam("recordId") Long recordId) throws IOException {
        recordService.deleteRecord(recordId);
    }

}
