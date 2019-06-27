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
@Table(name = EntityPath.QUESTION)
public class QuestionEntity implements Serializable {

    @Id
    @GeneratedValue(generator = EntityPath.QUESTION_GENERATOR, strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = EntityPath.QUESTION_GENERATOR, sequenceName = EntityPath.QUESTION_SEQUENCE, allocationSize = 1)
    private long id;

    @ManyToOne
    @JoinColumn(name = "id_test", nullable = false, foreignKey = @ForeignKey(name = "FK_question_test"))
    @JsonIgnore
    private TestEntity test;

    @Column(name = "question", nullable = false, columnDefinition = "TEXT")
    private String question;

    @Column(name = "answer", nullable = false, columnDefinition = "TEXT")
    private String answer;

    @JsonIgnore
    @Transient
    public boolean isNew() {
        return id == 0;
    }

}
