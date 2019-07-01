package entity;

import entity.config.EntityPath;
import lombok.*;
import org.codehaus.jackson.annotate.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;


@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = {"id"})
@Entity
@Table(name = EntityPath.COURSE)
public class CourseEntity implements Serializable {

    @Id
    @GeneratedValue(generator = EntityPath.COURSE_GENERATOR, strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = EntityPath.COURSE_GENERATOR, sequenceName = EntityPath.COURSE_SEQUENCE, allocationSize = 1)
    @Column(name = "id_course", nullable = false)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "level")
    private Integer level;

    @Column(name = "premium", nullable = false)
    private Boolean premium;

    @ManyToOne(fetch = FetchType.EAGER, cascade = {CascadeType.ALL})
    @JoinColumn(name = "id_topic", nullable = false, foreignKey = @ForeignKey(name = "FK_course_topic"))
    private TopicEntity id_topic;

    @JsonIgnore
    @Transient
    public static CourseEntity build(String name, String description, Integer level, boolean premium, TopicEntity id_topic) {
        return CourseEntity.builder().name(name).description(description).level(level).premium(premium).id_topic(id_topic).build();
    }

    @JsonIgnore
    @Transient
    public boolean isNew() {
        return id == 0;
    }

}
