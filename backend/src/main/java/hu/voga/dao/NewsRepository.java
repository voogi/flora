package hu.voga.dao;

import hu.voga.entity.News;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by GGyuri on 2017. 02. 20..
 */
@Repository
public interface NewsRepository extends PagingAndSortingRepository<News, Long> {

    List<News> findByActive(Boolean active);
}
