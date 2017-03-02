package hu.voga.dao;

import hu.voga.entity.Event;
import hu.voga.entity.News;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by GGyuri on 2017. 02. 20..
 */
@Repository
public interface EventRepository extends PagingAndSortingRepository<Event, Long> {
}
