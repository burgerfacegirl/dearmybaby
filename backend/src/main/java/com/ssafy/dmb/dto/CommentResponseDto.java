package com.ssafy.dmb.dto;

import com.ssafy.dmb.domain.record.Comment;

import java.time.LocalDateTime;

public class CommentResponseDto {
    private Long commentId;

    private Long recordId;

    private String userId;

    private String userName;

    private String commentText;

    private LocalDateTime commentDate;

    public CommentResponseDto(Comment comment){
        this.commentId = comment.getId();
        this.recordId = comment.getRecord().getId();
        this.userId = comment.getUser().getUserId();
        this.userName = comment.getUser().getUserName();
        this.commentText = comment.getCommentText();
        this.commentDate = comment.getCommentDate();
    }

    @Override
    public String toString() {
        return "CommentResponseDto{" +
                "commentId=" + commentId +
                ", recordId=" + recordId +
                ", userId='" + userId + '\'' +
                ", userName='" + userName + '\'' +
                ", commentText='" + commentText + '\'' +
                ", commentDate=" + commentDate +
                '}';
    }
}
