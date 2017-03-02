package hu.voga.service;

import hu.voga.dao.EventRepository;
import hu.voga.dao.NewsRepository;
import hu.voga.entity.Event;
import hu.voga.entity.News;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by GGyuri on 2017. 02. 20..
 */
@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository;

    public Event save(Event event){
        return eventRepository.save(event);
    }

    public void delete(Long id){
        eventRepository.delete(id);
    }


    public Event findOne(Long id){
        return eventRepository.findOne(id);
    }

    public List<Event> findAll(){
        return (List<Event>) eventRepository.findAll();
    }

}
