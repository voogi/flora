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
@Table(name = "knowledge_base")
public final class KnowledgeBase {

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
    @Column(name = "creator", nullable = false)
    private String creator;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "date", nullable = true)
    private Date date;

    @Basic
    @Column(name = "active", nullable = false)
    private Boolean active;

}
