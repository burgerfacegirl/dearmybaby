package com.ssafy.dmb.domain.plan;

import com.ssafy.dmb.domain.location.Place;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
public class Day {

    @Id @GeneratedValue
    @Column(name = "day_id")
    private Long id;

    private LocalDate dayDate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "plan_id")
    private Plan plan;

    @OneToMany(mappedBy = "place", cascade = CascadeType.ALL)
    private List<Place> places = new ArrayList<>();

}
