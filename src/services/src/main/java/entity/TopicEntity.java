package entity;

import entity.config.EntityPath;
import lombok.*;
import org.codehaus.jackson.annotate.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigInteger;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = {"id"})
@Entity
@Table(name = EntityPath.TOPIC)
public class TopicEntity implements Serializable {

    @Id
    @GeneratedValue(generator = EntityPath.TOPIC_GENERATOR, strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = EntityPath.TOPIC_GENERATOR, sequenceName = EntityPath.TOPIC_SEQUENCE, allocationSize = 1)
    @Column(name = "id_topic", nullable = false)
    private long id;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "premium", nullable = false)
    private Boolean premium;

    @Column(name = "price", nullable = false)
    private BigInteger price;

    @JsonIgnore
    @Transient
    public boolean isNew() {
        return id == 0;
    }

}
