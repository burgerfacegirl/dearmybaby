package com.ssafy.dmb.controller;

import com.ssafy.dmb.dto.recommend.TourResponseDto;
import com.ssafy.dmb.repository.TourRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/location")
@RequiredArgsConstructor
public class FestivalController {

    private final TourRepository locationRepository;

    private final LocationServiceImpl locationService;

    @GetMapping("/{regionId}")
    @ResponseBody
    public ResponseEntity<List<TourResponseDto.Response>> getLocationList(@PathVariable("regionId") Long regionId) {
        return ResponseEntity.status(HttpStatus.OK).body(locationService.getLocationList(regionId));
    }





}
