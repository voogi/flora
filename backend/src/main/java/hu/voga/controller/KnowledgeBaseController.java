package hu.voga.controller;

import hu.voga.entity.KnowledgeBase;
import hu.voga.entity.News;
import hu.voga.service.KnowledgeBaseService;
import hu.voga.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by GGyuri on 2017. 02. 20..
 */
@RestController
@RequestMapping("/api/knowledge")
public class KnowledgeBaseController {

    @Autowired
    private KnowledgeBaseService knowledgeBaseService;

    @RequestMapping(value = "",  method = RequestMethod.POST)
    public KnowledgeBase saveKnowledge(@RequestBody KnowledgeBase knowledgeBase) {
        return knowledgeBaseService.save(knowledgeBase);
    }

    @RequestMapping(value = "",  method = RequestMethod.PUT)
    public KnowledgeBase updateKnowledgeBase(@RequestBody KnowledgeBase knowledgeBase) {
        return knowledgeBaseService.save(knowledgeBase);
    }

    @RequestMapping(value = "{id}",  method = RequestMethod.DELETE)
    public void deleteKnowledge(@PathVariable("id") Long id) {
        knowledgeBaseService.delete(id);
    }


    @RequestMapping("{id}")
    public KnowledgeBase findKnowledge(@PathVariable("id") Long id) {
        return knowledgeBaseService.findOne(id);
    }

    @RequestMapping("")
    public List<KnowledgeBase> allKnowledge() {
        return knowledgeBaseService.findAll();
    }
}
