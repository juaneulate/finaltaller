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
@EqualsAndHashCode(of = {"id_video"})
@Entity
@Table(name = EntityPath.VIDEO)
public class VideoEntity implements Serializable {

    @Id
    @GeneratedValue(generator = EntityPath.VIDEO_GENERATOR, strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = EntityPath.VIDEO_GENERATOR, sequenceName = EntityPath.VIDEO_SEQUENCE, allocationSize = 1)
    private long id_video;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "dir", nullable = false, columnDefinition = "TEXT")
    private String dir;

    @ManyToOne
    @JoinColumn(name = "id_course", nullable = false, foreignKey = @ForeignKey(name = "video_course_id_course_fk"))
    @JsonIgnore
    private CourseEntity id_course;

    @JsonIgnore
    @Transient
    public static VideoEntity build(String name, String dir, CourseEntity id_course) {
        return VideoEntity.builder().name(name).dir(dir).id_course(id_course).build();
    }

    @JsonIgnore
    @Transient
    public boolean isNew() {
        return id_video == 0;
    }

}
