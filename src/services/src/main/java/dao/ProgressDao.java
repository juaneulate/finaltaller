package dao;

import entity.ProgressEntity;

import javax.inject.Named;
import javax.persistence.TypedQuery;
import java.util.List;
import java.util.Optional;

@Named
public class ProgressDao extends BaseDaoImpl {

    public List<ProgressEntity> getProgressList() {
        String hql = "SELECT ue " +
                " FROM ProgressEntity ue ";
        TypedQuery<ProgressEntity> query = em.createQuery(hql, ProgressEntity.class);
        return query.getResultList();
    }

//    public List<ProgressEntity> getOwnerList() {
//        String hql = "SELECT ue " +
//                " FROM ProgressEntity ue" +
//                " where ue.personType = true ";
//        TypedQuery<ProgressEntity> query = em.createQuery(hql, ProgressEntity.class);
//        return query.getResultList();
//    }
//
//    public List<ProgressEntity> getArrendataryList() {
//        String hql = "SELECT ue " +
//                " FROM ProgressEntity ue" +
//                " where ue.personType = false ";
//        TypedQuery<ProgressEntity> query = em.createQuery(hql, ProgressEntity.class);
//        return query.getResultList();
//    }
//
//    public Optional<ProgressEntity> getPersonById(long personId) {
//        String hql = "SELECT ue " +
//                " FROM ProgressEntity ue" +
//                " where ue.personId = :personId ";
//        TypedQuery<ProgressEntity> query = em.createQuery(hql, ProgressEntity.class);
//        query.setParameter("personId", personId);
//
//        List<ProgressEntity> resultList = query.getResultList();
//        return resultList.isEmpty() ? Optional.empty() : Optional.of(resultList.get(0));
//    }


}
