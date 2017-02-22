package hu.voga.controller;

import hu.voga.entity.News;
import hu.voga.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by GGyuri on 2017. 02. 20..
 */
@RestController
@RequestMapping("/api/news")
public class NewsController {

    @Autowired
    private NewsService newsService;

    @RequestMapping(value = "",  method = RequestMethod.POST)
    public News saveNews(@RequestBody News news) {
        return newsService.save(news);
    }

    @RequestMapping(value = "",  method = RequestMethod.PUT)
    public News updateNews(@RequestBody News news) {
        return newsService.save(news);
    }

    @RequestMapping("{id}")
    public News findNews(@PathVariable("id") Long id) {
        return newsService.findOne(id);
    }

    @RequestMapping("")
    public List<News> allNews() {
        return newsService.findAll();
    }
}
