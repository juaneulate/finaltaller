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
@Table(name = EntityPath.SCORE)
public class ScoreEntity implements Serializable {

    @Id
    @GeneratedValue(generator = EntityPath.SCORE_GENERATOR, strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = EntityPath.SCORE_GENERATOR, sequenceName = EntityPath.SCORE_SEQUENCE, allocationSize = 1)
    private long id;

    @Column(name = "score")
    private Long score;

    @Column(name = "approve")
    private Boolean approve;

    @ManyToOne
    @JoinColumn(name = "id_question", nullable = false, foreignKey = @ForeignKey(name = "FK_score_question"))
    @JsonIgnore
    private QuestionEntity question;

    @JsonIgnore
    @Transient
    public boolean isNew() {
        return id == 0;
    }

}
