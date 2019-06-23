package dao;

import entity.QuestionEntity;
import entity.StudentEntity;

import javax.inject.Named;
import javax.persistence.TypedQuery;
import java.util.List;
import java.util.Optional;

@Named
public class QuestionDao extends BaseDaoImpl {

    public List<QuestionEntity> getQuestionList() {
        String hql = "SELECT ue " +
                " FROM QuestionEntity ue " +
                " ORDER BY rand() ";
        TypedQuery<QuestionEntity> query = em.createQuery(hql, QuestionEntity.class).setMaxResults(4);
        return query.getResultList();
    }



}
