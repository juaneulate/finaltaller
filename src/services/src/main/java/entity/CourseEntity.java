package entity;

import entity.config.EntityPath;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.codehaus.jackson.annotate.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;

@Data
@EqualsAndHashCode(of = {"id"})
@Entity
@Table(name = EntityPath.COURSE)
public class CourseEntity implements Serializable {

    @Id
    @GeneratedValue(generator = EntityPath.COURSE_GENERATOR, strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = EntityPath.COURSE_GENERATOR, sequenceName = EntityPath.COURSE_SEQUENCE, allocationSize = 1)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "level")
    private Integer level;

    @ManyToOne
    @JoinColumn(name = "id_topic", nullable = false, foreignKey = @ForeignKey(name = "FK_course_topic"))
    @JsonIgnore
    private TopicEntity topic;

    @JsonIgnore
    @Transient
    public boolean isNew() {
        return id == 0;
    }

}
