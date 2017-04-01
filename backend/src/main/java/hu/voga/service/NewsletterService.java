package hu.voga.service;

import hu.voga.dao.NewsletterRepository;
import hu.voga.entity.Subscriber;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by GGyuri on 2017. 02. 20..
 */
@Service
public class NewsletterService {

    @Autowired
    private NewsletterRepository newsletterRepository;

    public Subscriber save(Subscriber subscriber){
        return newsletterRepository.save(subscriber);
    }

    public Subscriber findOne(Long id){
        return newsletterRepository.findOne(id);
    }

    public List<Subscriber> findAll(){
        return (List<Subscriber>) newsletterRepository.findAll();
    }

    public String getAllEmail(){
        List<String> emails = ((List<Subscriber>) newsletterRepository.findAll())
                .stream()
                .map(Subscriber::getEmail)
                .collect(Collectors.toList());
        return String.join(",", emails);
    }

    public void delete(Long id){
        newsletterRepository.delete(id);
    }

}
