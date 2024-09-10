package com.EduLink.OnlineQuiz.service;

import com.EduLink.OnlineQuiz.data.Quiz;
import com.EduLink.OnlineQuiz.data.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;


@Service
public class QuizService
{
    @Autowired
    private QuizRepository quizRepository;

    public List<Quiz> getAllQuiz()
    {
        return quizRepository.findAll();
    }

    // Method to find quizzes by subject and lesson
    public List<Quiz> getQuizzesBySubjectAndLesson(String subject, String lesson) {
        return quizRepository.findBySubjectAndLession(subject, lesson);
    }
}
