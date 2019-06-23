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
@Table(name = EntityPath.CHAPTER)
public class ChapterEntity implements Serializable {

    @Id
    @GeneratedValue(generator = EntityPath.CHAPTER_GENERATOR, strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = EntityPath.CHAPTER_GENERATOR, sequenceName = EntityPath.CHAPTER_SEQUENCE, allocationSize = 1)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.EAGER, cascade = {CascadeType.ALL})
    @JoinColumn(name = "id_course", foreignKey = @ForeignKey(name = "FK_chapter_course"))
    private CourseEntity courseEntity;

    @JsonIgnore
    @Transient
    public static ChapterEntity build(String name, String description, CourseEntity courseEntity) {
        return ChapterEntity.builder().name(name).description(description).courseEntity(courseEntity).build();
    }

    @JsonIgnore
    @Transient
    public boolean isNew() {
        return id == 0;
    }

}
