package rest;


import dao.CourseDao;
import dao.QuestionDao;
import entity.CourseEntity;
import entity.QuestionEntity;
import lombok.extern.jbosslog.JBossLog;
import rest.configuration.path.RestPath;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.io.Serializable;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;
import java.util.Properties;

@Path(RestPath.REST_COURSE)
@Produces({MediaType.APPLICATION_JSON})
@Consumes({MediaType.APPLICATION_JSON})
@JBossLog
public class CourseRest implements Serializable {


    @Inject
    private CourseDao courseDao;

    @GET
    @Path(RestPath.GET_COURSE_BY_TOPICS)
    public Response restGetCourseTopicList(@QueryParam(RestPath.TOPIC_LIST) List<String> topicList) {
        try {
            //
            List<CourseEntity> courseByTopicList = courseDao.getCourseListByTopicList(topicList);
            return Response.ok(courseByTopicList).build();
        } catch (Exception e) {
//           log.error(e);
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(e.getMessage()).build();
        }
    }

    @GET
    @Path(RestPath.GET_COURSE_TOPIC)
    public Response restGetCourseTopic(@QueryParam(RestPath.TOPIC_ID) long topicId) {
        try {
            //
            List<CourseEntity> courseByTopic = courseDao.getCourseListByTopic(topicId);

            return Response.ok(courseByTopic).build();


        } catch (Exception e) {
//           log.error(e);
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(e.getMessage()).build();
        }
    }
    @GET
    @Path(RestPath.GET_COURSE)
    public Response restGetCourseById(@QueryParam(RestPath.COURSE_ID) long courseId) {
        try {
            //
            List<CourseEntity> courseByTopic = courseDao.getCourseListByCourse(courseId);

            return Response.ok(courseByTopic).build();


        } catch (Exception e) {
//           log.error(e);
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(e.getMessage()).build();
        }
    }


    @GET
    @Path(RestPath.GET_COURSE_FREE)
    public Response restGetCourseFree() {
        try {
            log.info("restGetCourseFree");
            List<CourseEntity> courseListFree = courseDao.getCourseListFree();
            return Response.ok(courseListFree).build();
        } catch (Exception e) {
            // log.error(e);
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(e.getMessage()).build();
        }
    }

    @GET
    @Path(RestPath.GET_COURSE_PREMIUM)
    public Response restGetCoursePremium() {
        try {
            List<CourseEntity> courseListFree = courseDao.getCourseListPremium();
            return Response.ok(courseListFree).build();
        } catch (Exception e) {
            // log.error(e);
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(e.getMessage()).build();
        }
    }

    @GET
    @Path(RestPath.LIST)
    public Response restGetCourseList() {
        try {
            List<CourseEntity> courseListFree = courseDao.getCourseList();
            return Response.ok(courseListFree).build();
        } catch (Exception e) {
            // log.error(e);
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(e.getMessage()).build();
        }
    }

}
