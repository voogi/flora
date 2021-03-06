package hu.voga.service;

import hu.voga.dao.NewsRepository;
import hu.voga.entity.News;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by GGyuri on 2017. 02. 20..
 */
@Service
public class NewsService {

    @Autowired
    private NewsRepository newsRepository;

    public News save(News news){
        if(null == news.getId()){
            news.setActive(true);
        }
        return newsRepository.save(news);
    }

    public void delete(Long id){
        newsRepository.delete(id);
    }

    public void activate(News news){
        news.setActive(true);
        newsRepository.save(news);
    }

    public void inActivate(News news){
        news.setActive(false);
        newsRepository.save(news);
    }


    public News findOne(Long id){
        return newsRepository.findOne(id);
    }

    public List<News> findAll(){
        return (List<News>) newsRepository.findAll();
    }

    public List<News> findAllActive(){
        return newsRepository.findByActiveOrderByOrderNoAsc(true);
    }

}
