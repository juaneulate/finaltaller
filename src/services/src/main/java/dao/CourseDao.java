package dao;

import entity.CourseEntity;
import entity.TopicEntity;
import entity.QuestionEntity;

import javax.inject.Named;
import javax.persistence.TypedQuery;
import java.util.List;
import java.util.Optional;

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

    public List<CourseEntity>  getCourseListByTopic(long topicId) {
        String hql = "SELECT cc " +
                " FROM CourseEntity cc " +
                " WHERE cc.id_topic.id=:topicId ";
        TypedQuery<CourseEntity> query = em.createQuery(hql, CourseEntity.class);
        query.setParameter("topicId", topicId);
        return query.getResultList();
    }

    public List<CourseEntity>  getCourseListByTopicList(List <String> topicList) {
        String hql_topic = "SELECT te.id " +
                " FROM TopicEntity te " +
                " WHERE te.name in:topicList ";

        TypedQuery<TopicEntity> topick_query = em.createQuery(hql_topic, TopicEntity.class);
        topick_query.setParameter("topicList", topicList);

        String hql = "SELECT cc " +
                " FROM CourseEntity cc " +
                " WHERE cc.id_topic.name in:topicIds ";
        TypedQuery<CourseEntity> query = em.createQuery(hql, CourseEntity.class);
        query.setParameter("topicIds", topick_query.getResultList());
        return query.getResultList();
    }


}
