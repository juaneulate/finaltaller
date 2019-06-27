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
@Table(name = EntityPath.TEST)
public class TestEntity implements Serializable {

    @Id
    @GeneratedValue(generator = EntityPath.TEST_GENERATOR, strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = EntityPath.TEST_GENERATOR, sequenceName = EntityPath.TEST_SEQUENCE, allocationSize = 1)
    private long id;

    @Column(name = "question_quantity", nullable = false)
    private Integer questionQuantity;

    @Column(name = "is_initial", nullable = false)
    private Boolean isInitial;

    @ManyToOne
    @JoinColumn(name = "id_video", nullable = false, foreignKey = @ForeignKey(name = "FK_test_video"))
    @JsonIgnore
    private VideoEntity video;

    @JsonIgnore
    @Transient
    public static TestEntity build(Integer questionQuantity) {
        return TestEntity.builder().questionQuantity(questionQuantity).build();
    }

    @JsonIgnore
    @Transient
    public boolean isNew() {
        return id == 0;
    }

}
