package rest.configuration;


import com.google.gson.reflect.TypeToken;
import dao.QuestionDao;
import dao.StudentDao;
import dto.StudentLoginDto;
import entity.LoginEntity;
import entity.ProgressEntity;
import entity.QuestionEntity;
import entity.StudentEntity;
import lombok.extern.jbosslog.JBossLog;
import rest.configuration.path.RestPath;
import utils.JsonUtil;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.io.Serializable;
import java.util.List;
import java.util.Optional;

@Path(RestPath.REST_LOGIN)
@Produces({MediaType.APPLICATION_JSON})
@Consumes({MediaType.APPLICATION_JSON})
@JBossLog
public class QuestionRest implements Serializable {


    @Inject
    private QuestionDao questionDao;

    @GET
    @Path(RestPath.GET_QUESTION)
    public Response restGetQuestion() {
        try {
            List<QuestionEntity> questionList = questionDao.getQuestionList();
            return Response.ok(questionList).build();
        } catch (Exception e) {
            // log.error(e);
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(e.getMessage()).build();
        }
    }

}
