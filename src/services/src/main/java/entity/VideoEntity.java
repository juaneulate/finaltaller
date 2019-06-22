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
@Table(name = EntityPath.VIDEO)
public class VideoEntity implements Serializable {

    @Id
    @GeneratedValue(generator = EntityPath.VIDEO_GENERATOR, strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = EntityPath.VIDEO_GENERATOR, sequenceName = EntityPath.VIDEO_SEQUENCE, allocationSize = 1)
    private long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "dir", nullable = false, columnDefinition = "TEXT")
    private String dir;

    @JsonIgnore
    @Transient
    public static VideoEntity build(String name, String dir) {
        return VideoEntity.builder().name(name).dir(dir).build();
    }

    @JsonIgnore
    @Transient
    public boolean isNew() {
        return id == 0;
    }

}
