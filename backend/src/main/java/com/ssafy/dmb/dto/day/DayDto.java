package com.ssafy.dmb.dto.day;

import com.ssafy.dmb.domain.plan.Day;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class DayDto {
    private Long dayId;

    private Long planId;

    private List<PlaceResponseDto> places;

    public DayDto(Day day){
        this.dayId = day.getId();
        this.planId = day.getPlan().getId();
        this.places = day.getPlaces().stream()
                .map(d->new PlaceResponseDto(d))
                .collect(Collectors.toList());
    }

}
