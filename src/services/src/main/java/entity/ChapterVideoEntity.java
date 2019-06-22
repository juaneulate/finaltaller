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
@Table(name = EntityPath.CHAPTER_VIDEO)
public class ChapterVideoEntity implements Serializable {

    @Id
    @GeneratedValue(generator = EntityPath.CHAPTER_VIDEO_GENERATOR, strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = EntityPath.CHAPTER_VIDEO_GENERATOR, sequenceName = EntityPath.CHAPTER_VIDEO_SEQUENCE, allocationSize = 1)
    private long id;

    @ManyToOne(fetch = FetchType.EAGER, cascade = {CascadeType.ALL})
    @JoinColumn(name = "id_chapter", foreignKey = @ForeignKey(name = "FK_chapter_video_chapter"))
    private ChapterEntity chapter;

    @ManyToOne(fetch = FetchType.EAGER, cascade = {CascadeType.ALL})
    @JoinColumn(name = "id_video", foreignKey = @ForeignKey(name = "FK_chapter_video_video"))
    private VideoEntity video;

    @JsonIgnore
    @Transient
    public boolean isNew() {
        return id == 0;
    }
}
