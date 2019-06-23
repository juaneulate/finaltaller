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
@Table(name = EntityPath.LOGIN)
public class LoginEntity implements Serializable {

    @Id
    @GeneratedValue(generator = EntityPath.LOGIN_GENERATOR, strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = EntityPath.LOGIN_GENERATOR, sequenceName = EntityPath.LOGIN_SEQUENCE, allocationSize = 1)
    private long id;

    @Column(name = "login", nullable = false)
    private String login;

    @Column(name = "password", nullable = false)
    private String password;

    @ManyToOne(fetch = FetchType.LAZY, cascade = {CascadeType.ALL})
    @JoinColumn(name = "idstudent")
    private StudentEntity studentEntity;

    @JsonIgnore
    @Transient
    public static LoginEntity build(String login, String password, StudentEntity studentEntity) {
        return LoginEntity.builder().login(login).password(password).studentEntity(studentEntity).build();
    }

    @JsonIgnore
    @Transient
    public boolean isNew() {
        return id == 0;
    }

}
