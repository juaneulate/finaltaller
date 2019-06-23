package dao;

import entity.ChapterEntity;
import entity.VideoEntity;

import javax.persistence.TypedQuery;
import java.util.List;
import java.util.Optional;

public class VideoDao extends BaseDaoImpl {

    public List<VideoEntity> findAllByChapterId(long chapterId) {
        String hql = "SELECT cc.videoEntity " +
                " FROM ChapterVideoEntity cc " +
                "  where cc.chapter.id = :chapterId";
        TypedQuery<VideoEntity> query = em.createQuery(hql, VideoEntity.class);
        query.setParameter("courseId", chapterId);
        return query.getResultList();
    }

}
