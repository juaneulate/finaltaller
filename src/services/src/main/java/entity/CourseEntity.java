package entity;

import entity.config.EntityPath;
import lombok.*;
import org.codehaus.jackson.annotate.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;


@Data
@EqualsAndHashCode(of = {"id_course"})
@Entity
@Builder
@Table(name = EntityPath.COURSE)
public class CourseEntity implements Serializable {

    @Id
    @GeneratedValue(generator = EntityPath.COURSE_GENERATOR, strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = EntityPath.COURSE_GENERATOR, sequenceName = EntityPath.COURSE_SEQUENCE, allocationSize = 1)
    private long id_course;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "level")
    private Integer level;

    @Column(name = "premium", nullable = false)
    private Boolean premium;

    @ManyToOne
    @JoinColumn(name = "id_topic", nullable = false, foreignKey = @ForeignKey(name = "FK_course_topic"))
    @JsonIgnore
    private TopicEntity id_topic;

    @JsonIgnore
    @Transient
    public static CourseEntity build(String name, String description, Integer level, boolean premium, TopicEntity id_topic) {
        return CourseEntity.builder().name(name).description(description).level(level).premium(premium).id_topic(id_topic).build();
    }

    @JsonIgnore
    @Transient
    public boolean isNew() {
        return id_course == 0;
    }

}
