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
@Table(name = EntityPath.PURCHASE)
public class PurchaseEntity implements Serializable {

    @Id
    @GeneratedValue(generator = EntityPath.PURCHASE_GENERATOR, strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = EntityPath.PURCHASE_GENERATOR, sequenceName = EntityPath.PURCHASE_SEQUENCE, allocationSize = 1)
    private long id;

    @ManyToOne
    @JoinColumn(name = "id_student", nullable = false, foreignKey = @ForeignKey(name = "FK_purchase_student"))
    @JsonIgnore
    private StudentEntity student;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "purchase_date", nullable = false)
    private Date purchaseDate;

    @ManyToOne
    @JoinColumn(name = "id_topic", nullable = false, foreignKey = @ForeignKey(name = "FK_purchase_topic"))
    @JsonIgnore
    private TopicEntity topic;

    @JsonIgnore
    @Transient
    public boolean isNew() {
        return id == 0;
    }

}
