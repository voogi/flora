package hu.voga.dao;

import hu.voga.entity.News;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by GGyuri on 2017. 02. 20..
 */
@Repository
public interface NewsRepository extends PagingAndSortingRepository<News, Long> {
}
