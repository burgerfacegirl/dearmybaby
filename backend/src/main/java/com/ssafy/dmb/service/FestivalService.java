package com.ssafy.dmb.service;

import com.ssafy.dmb.repository.FestivalRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class FestivalService {
    private final FestivalRepository festivalRepository;

    private final Logger LOGGER = LoggerFactory.getLogger(FestivalService.class);

}
