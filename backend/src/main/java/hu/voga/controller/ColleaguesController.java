package hu.voga.controller;

import hu.voga.entity.Colleague;
import hu.voga.entity.News;
import hu.voga.service.ColleagueService;
import hu.voga.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by GGyuri on 2017. 02. 20..
 */
@RestController
@RequestMapping("/api/colleague")
public class ColleaguesController {

    @Autowired
    private ColleagueService colleagueService;

    @RequestMapping(value = "",  method = RequestMethod.POST)
    public Colleague saveColleague(@RequestBody Colleague colleague) {
        return colleagueService.save(colleague);
    }

    @RequestMapping(value = "",  method = RequestMethod.PUT)
    public Colleague updateColleague(@RequestBody Colleague colleague) {
        return colleagueService.save(colleague);
    }

    @RequestMapping(value = "{id}",  method = RequestMethod.DELETE)
    public void deleteColleague(@PathVariable("id") Long id) {
        colleagueService.delete(id);
    }


    @RequestMapping("{id}")
    public Colleague findColleague(@PathVariable("id") Long id) {
        return colleagueService.findOne(id);
    }

    @RequestMapping("")
    public List<Colleague> allColleagues() {
        return colleagueService.findAll();
    }
}
