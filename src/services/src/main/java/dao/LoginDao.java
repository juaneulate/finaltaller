package dao;

import entity.LoginEntity;
import entity.ProgressEntity;
import entity.StudentEntity;

import javax.inject.Named;
import javax.persistence.TypedQuery;
import java.util.List;
import java.util.Optional;

@Named
public class LoginDao extends BaseDaoImpl {

    public Optional<LoginEntity> validateUser(String login, String password) {
        String hql = "SELECT ue " +
                " FROM LoginEntity ue " +
                " WHERE ue.login=:login and ue.password=:password ";
        TypedQuery<LoginEntity> query = em.createQuery(hql, LoginEntity.class);
        query.setParameter("login", login);
        query.setParameter("password", password);
        List<LoginEntity> resultList = query.getResultList();
        return resultList.isEmpty() ? Optional.empty() : Optional.of(resultList.get(0));
    }

    public Optional<StudentEntity> getStudentByUserName(String UserName) {
        String hql = "SELECT se " +
                " FROM StudentEntity se" +
                " WHERE se.loginEntity.login = :userName ";
        TypedQuery<StudentEntity> query = em.createQuery(hql, StudentEntity.class);
        query.setParameter("userName", UserName);

        List<StudentEntity> resultList = query.getResultList();
        return resultList.isEmpty() ? Optional.empty() : Optional.of(resultList.get(0));
    }
}
