package hu.voga.controller;

import hu.voga.entity.Event;
import hu.voga.entity.News;
import hu.voga.service.EventService;
import hu.voga.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by GGyuri on 2017. 02. 20..
 */
@RestController
@RequestMapping("/api/event")
public class EventController {

    @Autowired
    private EventService eventService;

    @RequestMapping(value = "",  method = RequestMethod.POST)
    public Event saveEvent(@RequestBody Event event) {
        return eventService.save(event);
    }

    @RequestMapping(value = "",  method = RequestMethod.PUT)
    public Event updateEvent(@RequestBody Event event) {
        return eventService.save(event);
    }

    @RequestMapping(value = "{id}",  method = RequestMethod.DELETE)
    public void deleteEvent(@PathVariable("id") Long id) {
        eventService.delete(id);
    }


    @RequestMapping("{id}")
    public Event findEvent(@PathVariable("id") Long id) {
        return eventService.findOne(id);
    }

    @RequestMapping("")
    public List<Event> allEvent() {
        return eventService.findAll();
    }
}
