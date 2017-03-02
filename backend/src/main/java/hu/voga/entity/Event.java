package hu.voga.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
@Accessors(chain = true)
@Table(name = "event")
public final class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Basic
    @Column(name = "title", nullable = false)
    private String title;

    @Basic
    @Column(name = "description", nullable = true)
    private String description;

    @Basic
    @Column(name = "address", nullable = true)
    private String address;

    @Basic
    @Column(name = "image", nullable = true)
    private String image;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "date", nullable = true)
    private Date date;


}
