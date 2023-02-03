package com.ssafy.dmb.service;

import com.ssafy.dmb.domain.location.Region;
import com.ssafy.dmb.domain.location.Tour;
import com.ssafy.dmb.dto.recommend.TourDetailResponseDto;
import com.ssafy.dmb.dto.recommend.TourResponseDto;
import com.ssafy.dmb.repository.TourRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class TourService {
    private final TourRepository tourRepository;

    private final Logger LOGGER = LoggerFactory.getLogger(TourService.class);

    public List<TourResponseDto> getRecommendTourList(Long familyId) {

        List<TourResponseDto.Response> locationDtoList = locationList.stream()
                .map(l -> new TourResponseDto.Response(l))
                .collect(Collectors.toList());

    }

    public TourDetailResponseDto getRecommendTourDetail(Long tourId) {
        LOGGER.info("[getRecommendTourList] input tourId: {}", tourId);
        Tour tourDetial = tourRepository.findById(tourId).get();

        //생성자 사용 entity to DTO

        return locationDtoList;
    }
}
