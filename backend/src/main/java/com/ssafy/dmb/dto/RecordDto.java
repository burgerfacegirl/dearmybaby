package com.ssafy.dmb.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class RecordDto {

    // S3 UploadId
    private String uploadId;
    // 서버에서 생성한 파일 이름
    private String fileName;
    // 이미지, 영상과 함께 오는 text
    private String text;
    // 이미지, 영상 저장 url
    private String url;
}
