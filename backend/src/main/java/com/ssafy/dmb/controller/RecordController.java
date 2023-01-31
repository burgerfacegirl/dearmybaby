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
    public String imageUpload(@RequestParam("data") MultipartFile multipartFile) throws IOException {
        return s3UploaderService.upload(multipartFile, "dearmybucket", "image");
    }

    @PostMapping("/video")
    public String videoUpload(@RequestParam("data") MultipartFile multipartFile) throws IOException {
        return s3UploaderService.upload(multipartFile, "dearmybucket", "video");
    }

}
