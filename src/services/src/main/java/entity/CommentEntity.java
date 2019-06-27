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
@Table(name = EntityPath.COMMENT)
public class CommentEntity implements Serializable {

    @Id
    @GeneratedValue(generator = EntityPath.COMMENT_GENERATOR, strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = EntityPath.COMMENT_GENERATOR, sequenceName = EntityPath.COMMENT_SEQUENCE, allocationSize = 1)
    private long id;

    @Column(name = "comment")
    private String comment;

    @ManyToOne
    @JoinColumn(name = "id_video", nullable = false, foreignKey = @ForeignKey(name = "FK_comment_video"))
    @JsonIgnore
    private VideoEntity video;

    @ManyToOne
    @JoinColumn(name = "id_student", nullable = false, foreignKey = @ForeignKey(name = "FK_comment_student"))
    @JsonIgnore
    private StudentEntity student;

    @JsonIgnore
    @Transient
    public boolean isNew() {
        return id == 0;
    }

}
