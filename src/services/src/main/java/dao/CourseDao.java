package dao;

import entity.CourseEntity;
import entity.QuestionEntity;

import javax.inject.Named;
import javax.persistence.TypedQuery;
import java.util.List;

@Named
public class CourseDao extends BaseDaoImpl {


    public List<CourseEntity> getCourseListFree() {
        String hql = "SELECT ue " +
                " FROM CourseEntity ue " +
                " WHERE ue.premium = false ";
        TypedQuery<CourseEntity> query = em.createQuery(hql, CourseEntity.class);
        return query.getResultList();
    }
    public List<CourseEntity> getCourseListPremium() {
        String hql = "SELECT ue " +
                " FROM CourseEntity ue " +
                " WHERE ue.premium = true ";
        TypedQuery<CourseEntity> query = em.createQuery(hql, CourseEntity.class);
        return query.getResultList();
    }
    public List<CourseEntity> getCourseList() {
        String hql = "SELECT ue " +
                " FROM CourseEntity ue ";
        TypedQuery<CourseEntity> query = em.createQuery(hql, CourseEntity.class);
        return query.getResultList();
    }


}
