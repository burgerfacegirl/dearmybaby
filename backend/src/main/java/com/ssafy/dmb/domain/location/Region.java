package com.ssafy.dmb.domain.location;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Getter
@Setter
public class Region {

    @Id @GeneratedValue
    @Column(name = "region_id")
    private Long id;

    private String regionName;

    @Embedded
    private Coordinate regionCoordinate;
}
