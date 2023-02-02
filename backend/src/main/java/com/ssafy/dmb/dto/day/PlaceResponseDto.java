package com.ssafy.dmb.dto.day;

import com.ssafy.dmb.domain.location.Place;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class PlaceResponseDto {
    private Long placeId;

    private int placeOrder;

    private String placeName;

    private String placeLatitude;

    private String placeLongitude;

    private String placeAddress;

    public PlaceResponseDto(Place place){
        this.placeId = place.getId();
        this.placeOrder = place.getPlaceOrder();
        this.placeName = place.getPlaceName();
        this.placeLatitude = place.getPlaceLatitude();
        this.placeLongitude = place.getPlaceLongitude();
        this.placeAddress = place.getPlaceAddress();
    }
}
