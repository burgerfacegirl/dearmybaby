package com.ssafy.dmb.dto.day;

import com.ssafy.dmb.domain.location.LocationType;
import com.ssafy.dmb.domain.location.Place;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
public class PlaceResponseDto {

    private int placeOrder;

    private String placeName;

    private LocationType placeType;

    private String placeLatitude;

    private String placeLongitude;

    private String placeAddress;

    private Long dayId;

    public PlaceResponseDto(Place place) {
        this.placeOrder = place.getPlaceOrder();
        this.placeName = place.getPlaceName();
        this.placeLatitude = place.getPlaceLatitude();
        this.placeLongitude = place.getPlaceLongitude();
        this.placeAddress = place.getPlaceAddress();
        this.placeType = place.getPlaceType();
        this.dayId = place.getDay().getId();
    }

    public Place toEntity() {
        return new Place(placeOrder, placeName, placeType, placeLatitude, placeLongitude, placeAddress);
    }
}
