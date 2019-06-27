package entity.config;

public class EntityPath {
    //region BaseRest Services

    public static final String GENERATOR = "generator";
    public static final String SEPARATOR = "_";
    public static final String SEQUENCE = "seq";

    //endregion


    public static final String CHAPTER = "chapter";
    public static final String CHAPTER_GENERATOR = GENERATOR + SEPARATOR + CHAPTER;
    public static final String CHAPTER_SEQUENCE = CHAPTER + SEPARATOR + SEQUENCE;

    public static final String CHAPTER_VIDEO = "chapter_video";
    public static final String CHAPTER_VIDEO_GENERATOR = GENERATOR + SEPARATOR + CHAPTER_VIDEO;
    public static final String CHAPTER_VIDEO_SEQUENCE = CHAPTER_VIDEO + SEPARATOR + SEQUENCE;

    public static final String COMMENT = "comment";
    public static final String COMMENT_GENERATOR = GENERATOR + SEPARATOR + COMMENT;
    public static final String COMMENT_SEQUENCE = COMMENT + SEPARATOR + SEQUENCE;

    public static final String COURSE = "course";
    public static final String COURSE_GENERATOR = GENERATOR + SEPARATOR + COURSE;
    public static final String COURSE_SEQUENCE = COURSE + SEPARATOR + SEQUENCE;

    public static final String LOGIN = "login";
    public static final String LOGIN_GENERATOR = GENERATOR + SEPARATOR + LOGIN;
    public static final String LOGIN_SEQUENCE = LOGIN + SEPARATOR + SEQUENCE;

    public static final String PROGRESS = "progress";
    public static final String PROGRESS_GENERATOR = GENERATOR + SEPARATOR + PROGRESS;
    public static final String PROGRESS_SEQUENCE = PROGRESS + SEPARATOR + SEQUENCE;

    public static final String PURCHASE = "purchase";
    public static final String PURCHASE_GENERATOR = GENERATOR + SEPARATOR + PURCHASE;
    public static final String PURCHASE_SEQUENCE = PURCHASE + SEPARATOR + SEQUENCE;

    public static final String QUESTION = "question";
    public static final String QUESTION_GENERATOR = GENERATOR + SEPARATOR + QUESTION;
    public static final String QUESTION_SEQUENCE = QUESTION + SEPARATOR + SEQUENCE;

    public static final String SCORE = "score";
    public static final String SCORE_GENERATOR = GENERATOR + SEPARATOR + SCORE;
    public static final String SCORE_SEQUENCE = SCORE + SEPARATOR + SEQUENCE;

    public static final String STUDENT = "student";
    public static final String STUDENT_GENERATOR = GENERATOR + SEPARATOR + STUDENT;
    public static final String STUDENT_SEQUENCE = STUDENT + SEPARATOR + SEQUENCE;

    public static final String TEST = "test";
    public static final String TEST_GENERATOR = GENERATOR + SEPARATOR + TEST;
    public static final String TEST_SEQUENCE = TEST + SEPARATOR + SEQUENCE;
    public static final String TOPIC = "topic";

    public static final String TOPIC_GENERATOR = GENERATOR + SEPARATOR + TOPIC;
    public static final String TOPIC_SEQUENCE = TOPIC + SEPARATOR + SEQUENCE;

    public static final String VIDEO = "video";
    public static final String VIDEO_GENERATOR = GENERATOR + SEPARATOR + VIDEO;
    public static final String VIDEO_SEQUENCE = VIDEO + SEPARATOR + SEQUENCE;

}
