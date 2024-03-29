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
    @Column(name = "id_student", nullable = false)
    private long id;

    @Column(name = "full_name", length = 100, nullable = false)
    private String fullName;

    @Column(name = "age", nullable = false)
    private int age;

    @ManyToOne(fetch = FetchType.LAZY, cascade = {CascadeType.ALL})
    @JoinColumn(name = "id_login", nullable = false, foreignKey = @ForeignKey(name = "FK_student_login"))
    @JsonIgnore
    private LoginEntity loginEntity;


    @JsonIgnore
    @Transient
    public static StudentEntity build(String fullName, int age, LoginEntity loginEntity) {
        return StudentEntity.builder().fullName(fullName).age(age).loginEntity(loginEntity).build();
    }

    @JsonIgnore
    @Transient
    public boolean isNew() {
        return id == 0;
    }

}
