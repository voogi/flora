package hu.voga.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

/**
 * Created by lofut on 2017. 03. 20..
 */
@Entity
@Getter
@Setter
@Table(name = "subscribers")
public class Subscriber {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Basic
    @Column(name = "email", nullable = false)
    private String email;

}
