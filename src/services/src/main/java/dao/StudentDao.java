package dao;

import entity.StudentEntity;


import javax.inject.Named;
import javax.persistence.TypedQuery;
import java.util.List;
import java.util.Optional;

@Named
public class StudentDao extends BaseDaoImpl {

    public List<StudentEntity> getPersonList() {
        String hql = "SELECT ue " +
                " FROM StudentEntity ue ";
        TypedQuery<StudentEntity> query = em.createQuery(hql, StudentEntity.class);
        return query.getResultList();
    }


    public Optional<StudentEntity> getStudentById(long studentId) {
        String hql = "SELECT ue " +
                " FROM StudentEntity ue" +
                " where ue.studentId = :studentId ";
        TypedQuery<StudentEntity> query = em.createQuery(hql, StudentEntity.class);
        query.setParameter("studentId", studentId);

        List<StudentEntity> resultList = query.getResultList();
        return resultList.isEmpty() ? Optional.empty() : Optional.of(resultList.get(0));
    }
}
