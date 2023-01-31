package com.ssafy.dmb.controller;

import com.ssafy.dmb.service.RecordServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RequiredArgsConstructor
@RestController
@RequestMapping("/record")
public class RecordController {
    private final RecordServiceImpl s3UploaderService;

    @PostMapping("/image")
    public String imageUpload(@RequestParam("data") MultipartFile multipartFile
            , @RequestParam("content") String content) throws IOException {

        String URL = s3UploaderService.upload(multipartFile, "dearmybucket", "image");
        // content와 URL 을 DB에 저장하는 service 코드와 repo method가 필요하다.

        return "ok";
    }

    @PostMapping("/video")
    public String videoUpload(@RequestParam("data") MultipartFile multipartFile) throws IOException {
        return s3UploaderService.upload(multipartFile, "dearmybucket", "video");
    }

    @DeleteMapping()
    public void deleteRecord(@RequestParam("recordId") Long recordId) throws IOException {
        
    }

}
