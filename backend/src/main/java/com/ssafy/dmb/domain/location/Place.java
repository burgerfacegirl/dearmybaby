package com.ssafy.dmb.domain.location;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Getter
@Setter
public class Place {

    @Id @GeneratedValue
    @Column(name = "place_id")
    private Long id;

    private int placeOrder;

}
