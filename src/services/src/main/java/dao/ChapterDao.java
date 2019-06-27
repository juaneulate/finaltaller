package dao;

import entity.ChapterEntity;

import javax.persistence.TypedQuery;
import java.util.List;
import java.util.Optional;

public class ChapterDao extends BaseDaoImpl {

    public List<ChapterEntity> findAll() {
        String hql = "SELECT cc " +
                " FROM ChapterEntity cc ";
        TypedQuery<ChapterEntity> query = em.createQuery(hql, ChapterEntity.class);
        return query.getResultList();
    }

    public Optional<ChapterEntity> getById(long id) {
        String hql = "SELECT cc " +
                " FROM ChapterEntity cc " +
                " WHERE cc.id=:id ";
        TypedQuery<ChapterEntity> query = em.createQuery(hql, ChapterEntity.class);
        query.setParameter("id", id);
        List<ChapterEntity> resultList = query.getResultList();
        return resultList.isEmpty() ? Optional.empty() : Optional.of(resultList.get(0));
    }

    public List<ChapterEntity> findAllByCourseId(long courseId) {
        String hql = "SELECT cc " +
                " FROM ChapterEntity cc " +
                "  where cc.course.id = :courseId";
        TypedQuery<ChapterEntity> query = em.createQuery(hql, ChapterEntity.class);
        query.setParameter("courseId", courseId);
        return query.getResultList();
    }

}
