package com.ssafy.dmb.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter @Setter
public class S3UploadDto {

    // S3 UploadId
    private String uploadId;
    // 서버에서 생성한 파일 이름
    private String fileName;
    // 이미지, 영상과 함께 오는 text
    private String text;
    public S3UploadDto(String uploadId, String fileName, String text) {
        this.uploadId = uploadId;
        this.fileName = fileName;
        this.text = text;
    }
}
