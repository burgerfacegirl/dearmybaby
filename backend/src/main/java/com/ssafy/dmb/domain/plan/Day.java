package com.ssafy.dmb.domain.plan;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDate;

@Getter
@Setter
public class Day {

    @Id @GeneratedValue
    @Column(name = "day_id")
    private Long id;

    private LocalDate dayDate;


}
