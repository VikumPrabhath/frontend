package com.EduLink.OnlineQuiz.controller;

import com.EduLink.OnlineQuiz.data.Quiz;
import com.EduLink.OnlineQuiz.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import java.util.List;

@RestController
@RequestMapping("/quiz")
@CrossOrigin(origins = "*")
public class QuizController
{
    @Autowired
    private QuizService quizService;

    @GetMapping(path = "/all")
    public List<Quiz> getAllQuizzes()
    {
        return quizService.getAllQuiz();
    }

    // New method to get quizzes by subject and lesson
    @GetMapping(path = "/bySubjectAndLesson/{subject}/{lesson}")
    public List<Quiz> getQuizzesBySubjectAndLesson(@PathVariable String subject, @PathVariable String lesson) {
        return quizService.getQuizzesBySubjectAndLesson(subject, lesson);
    }
}
