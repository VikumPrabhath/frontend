package com.EduLink.OnlineQuiz.data;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import org.springframework.stereotype.Repository;

// Repository interface for the Quiz entity
@Repository
public interface QuizRepository extends JpaRepository<Quiz,Long> {
    // Query method to find quizzes by subject and lesson
    List<Quiz> findBySubjectAndLession(String subject, String lesson);
}
