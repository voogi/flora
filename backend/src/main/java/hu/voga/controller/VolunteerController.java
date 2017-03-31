package hu.voga.controller;


import hu.voga.dao.VolunteerRepository;
import hu.voga.entity.Subscriber;
import hu.voga.entity.Volunteer;
import hu.voga.service.NewsletterService;
import hu.voga.service.VolunteerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by GGyuri on 2017. 02. 25..
 */
@RestController
@RequestMapping("/api/volunteer")
public class VolunteerController {

    @Autowired
    private VolunteerService volunteerService;


    @GetMapping()
    public List<Volunteer> getAllVolunteer() { return volunteerService.findAll(); }

    @PostMapping()
    public Volunteer save(@RequestBody Volunteer volunteer) {
        return this.volunteerService.save(volunteer);
    }
}
