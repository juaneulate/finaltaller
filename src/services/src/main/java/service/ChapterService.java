package service;

import dao.ChapterDao;
import entity.ChapterEntity;

import javax.inject.Inject;
import javax.inject.Named;
import javax.transaction.Transactional;
import java.io.Serializable;
import java.util.List;
import java.util.Optional;

@Named
public class ChapterService implements Serializable {

    @Inject
    private ChapterDao chapterDao;

    public List<ChapterEntity> findAll() {
        return chapterDao.findAll();
    }

    @Transactional
    public ChapterEntity save(ChapterEntity chapter) {
        return chapterDao.merge(chapter);
    }

    @Transactional
    public void remove(ChapterEntity chapter) {
        chapterDao.remove(chapter);
    }

    @Transactional
    public void deleteAll(List<ChapterEntity> listToDelete) {
        for (ChapterEntity chapter : listToDelete) {
            remove(chapter);
        }
    }

    public Optional<ChapterEntity> getById(long id) {
        return chapterDao.getById(id);
    }

    public List<ChapterEntity> findAllByCourseId(long courseId) {
        return chapterDao.findAllByCourseId(courseId);
    }

}
