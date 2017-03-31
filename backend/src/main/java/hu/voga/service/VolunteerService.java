package hu.voga.service;

import hu.voga.dao.VolunteerRepository;
import hu.voga.entity.Volunteer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by GGyuri on 2017. 02. 20..
 */
@Service
public class VolunteerService {

    @Autowired
    private VolunteerRepository volunteerRepository;

    public Volunteer save(Volunteer volunteer){
        return volunteerRepository.save(volunteer);
    }

    public List<Volunteer> findAll(){
        return (List<Volunteer>) volunteerRepository.findAll();
    }

}
