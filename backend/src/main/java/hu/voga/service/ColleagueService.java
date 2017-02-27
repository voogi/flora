package hu.voga.service;

import hu.voga.dao.ColleagueRepository;
import hu.voga.dao.NewsRepository;
import hu.voga.entity.Colleague;
import hu.voga.entity.News;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by GGyuri on 2017. 02. 20..
 */
@Service
public class ColleagueService {

    @Autowired
    private ColleagueRepository colleagueRepository;

    public Colleague save(Colleague colleague){
        return colleagueRepository.save(colleague);
    }

    public Colleague findOne(Long id){
        return colleagueRepository.findOne(id);
    }

    public List<Colleague> findAll(){
        return (List<Colleague>) colleagueRepository.findAll();
    }

    public void delete(Long id){
        colleagueRepository.delete(id);
    }

}
