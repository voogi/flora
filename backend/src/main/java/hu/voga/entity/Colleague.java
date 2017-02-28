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
@Table(name = "colleague")
public final class Colleague {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Basic
    @Column(name = "name", nullable = false)
    private String name;

    @Basic
    @Column(name = "description", nullable = true)
    private String description;

    @Basic
    @Column(name = "phone", nullable = true)
    private String phone;

    @Basic
    @Column(name = "email", nullable = true)
    private String email;

    @Basic
    @Column(name = "image", nullable = true)
    private String image;

    @Basic
    @Column(name = "active", nullable = false)
    private Boolean active;

}
