package com.ssafy.dmb.domain.plan;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter @Setter
@Entity
public class Plan {
    @Id @GeneratedValue
    @Column(name = "plan_id")
    private Long id;

    private String planDestination;

    private LocalDate planDate;

    private int planPeriod;


}
