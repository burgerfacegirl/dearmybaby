package com.ssafy.dmb;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
@RequiredArgsConstructor
public class FileUploadService {
    private final AmazonS3ResourceStorage amazonS3ResourceStorage;

    public FileDetailDto save(MultipartFile multipartFile) {
        FileDetailDto fileDetailDto = FileDetailDto.multipartOf(multipartFile);
        amazonS3ResourceStorage.store(fileDetailDto.getPath(), multipartFile);
        return fileDetailDto;
    }
}