package com.ssafy.dmb.domain.location;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
public class Location {

    @Id @GeneratedValue
    @Column(name = "location_id")
    private Long id;

    private String locationName;

    @Enumerated(EnumType.ORDINAL)
    private LocationType locationType;

    private String locationAddress;

    @Embedded
    private Coordinate locationCoordinate;

}
