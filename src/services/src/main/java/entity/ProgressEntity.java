package entity;

import entity.config.EntityPath;
import lombok.*;
import org.codehaus.jackson.annotate.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = {"id"})
@Entity
@Table(name = EntityPath.PROGRESS)
public class ProgressEntity implements Serializable {

    @Id
    @GeneratedValue(generator = EntityPath.PROGRESS_GENERATOR, strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = EntityPath.PROGRESS_GENERATOR, sequenceName = EntityPath.PROGRESS_SEQUENCE, allocationSize = 1)
    private long id;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "date", nullable = false)
    private Date date;

    @ManyToOne
    @JoinColumn(name = "id_course", nullable = false, foreignKey = @ForeignKey(name = "FK_progress_course"))
    @JsonIgnore
    private CourseEntity course;

    @ManyToOne
    @JoinColumn(name = "id_video", nullable = false, foreignKey = @ForeignKey(name = "FK_progress_video"))
    @JsonIgnore
    private VideoEntity video;

    @ManyToOne
    @JoinColumn(name = "id_question", nullable = false, foreignKey = @ForeignKey(name = "FK_progress_question"))
    @JsonIgnore
    private QuestionEntity question;

    @ManyToOne
    @JoinColumn(name = "id_score", nullable = false, foreignKey = @ForeignKey(name = "FK_progress_score"))
    @JsonIgnore
    private ScoreEntity score;

    @ManyToOne
    @JoinColumn(name = "id_topic", nullable = false, foreignKey = @ForeignKey(name = "FK_progress_topic"))
    @JsonIgnore
    private TopicEntity topic;

    @ManyToOne
    @JoinColumn(name = "id_student", nullable = false, foreignKey = @ForeignKey(name = "FK_progress_student"))
    @JsonIgnore
    private StudentEntity student;

    @ManyToOne
    @JoinColumn(name = "id_chapter", nullable = false, foreignKey = @ForeignKey(name = "FK_progress_chapter"))
    @JsonIgnore
    private ChapterEntity chapter;

    @JsonIgnore
    @Transient
    public boolean isNew() {
        return id == 0;
    }

}
