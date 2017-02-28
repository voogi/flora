package hu.voga.service;

import hu.voga.dao.KnowledgeBaseRepository;
import hu.voga.dao.NewsRepository;
import hu.voga.entity.KnowledgeBase;
import hu.voga.entity.News;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by GGyuri on 2017. 02. 20..
 */
@Service
public class KnowledgeBaseService {

    @Autowired
    private KnowledgeBaseRepository knowledgeBaseRepository;

    public KnowledgeBase save(KnowledgeBase knowledgeBase){
        knowledgeBase.setActive(true);
        return knowledgeBaseRepository.save(knowledgeBase);
    }

    public void delete(Long id){
        knowledgeBaseRepository.delete(id);
    }


    public KnowledgeBase findOne(Long id){
        return knowledgeBaseRepository.findOne(id);
    }

    public List<KnowledgeBase> findAll(){
        return (List<KnowledgeBase>) knowledgeBaseRepository.findAll();
    }

}
