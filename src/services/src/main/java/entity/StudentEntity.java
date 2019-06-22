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
@Table(name = EntityPath.STUDENT)
public class StudentEntity implements Serializable {

    @Id
    @GeneratedValue(generator = EntityPath.STUDENT_GENERATOR, strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = EntityPath.STUDENT_GENERATOR, sequenceName = EntityPath.STUDENT_SEQUENCE, allocationSize = 1)
    private long id;

    @Column(name = "full_name", length = 100, nullable = false)
    private String fullName;

    @ManyToOne
    @JoinColumn(name = "id_login", nullable = false, foreignKey = @ForeignKey(name = "FK_student_login"))
    @JsonIgnore
    private LoginEntity login;


    @JsonIgnore
    @Transient
    public static StudentEntity build(String fullName) {
        return StudentEntity.builder().fullName(fullName).build();
    }

    @JsonIgnore
    @Transient
    public boolean isNew() {
        return id == 0;
    }

}
