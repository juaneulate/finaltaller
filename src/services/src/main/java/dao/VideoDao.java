package dao;

import entity.VideoEntity;

import javax.persistence.TypedQuery;
import java.util.List;

public class VideoDao extends BaseDaoImpl {

    public List<VideoEntity> findAllByCourseId(long courseId) {
        String hql = "SELECT ve " +
                " FROM VideoEntity ve " +
                " WHERE ve.id_course.id=:courseId ";
        TypedQuery<VideoEntity> query = em.createQuery(hql, VideoEntity.class);
        query.setParameter("courseId", courseId);
        return query.getResultList();
    }

}
