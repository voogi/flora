package hu.voga.controller;


import hu.voga.entity.Subscriber;
import hu.voga.service.NewsletterService;
import hu.voga.util.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by GGyuri on 2017. 02. 25..
 */
@RestController
@RequestMapping("/api/newsletter")
public class NewsletterController {

    @Autowired
    private NewsletterService newsletterService;


    @GetMapping()
    public List<Subscriber> getAllSubscriber() {
        return newsletterService.findAll();
    }

    @PostMapping()
    public Subscriber subscribe(@RequestBody Subscriber sub) {
        return this.newsletterService.save(sub);
    }
}
