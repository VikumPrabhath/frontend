package com.EduLink.OnlineQuiz.data;

import jakarta.persistence.*;

@Entity
@Table(name = "ol_english_mediam")
public class Quiz {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "quiz_id")
    private int quiz_id;

    @Column(name = "subject")
    private String subject;

    @Column(name = "lession")
    private String lession;

    @Lob  // Add this annotation to handle large text content
    @Column(name = "question", columnDefinition = "TEXT")
    private String question;

    @Column(name = "answer_1")
    private String answer_1;

    @Column(name = "answer_2")
    private String answer_2;

    @Column(name = "answer_3")
    private String answer_3;

    @Column(name = "answer_4")
    private String answer_4;

    @Column(name = "answer_5")
    private String answer_5;

    @Column(name = "correct_answer")
    private int correct_answer;

    // Getters and Setters
    public int getQuiz_id() {
        return quiz_id;
    }

    public void setQuiz_id(int quiz_id) {
        this.quiz_id = quiz_id;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getLession() {
        return lession;
    }

    public void setLession(String lession) {
        this.lession = lession;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getAnswer_1() {
        return answer_1;
    }

    public void setAnswer_1(String answer_1) {
        this.answer_1 = answer_1;
    }

    public String getAnswer_2() {
        return answer_2;
    }

    public void setAnswer_2(String answer_2) {
        this.answer_2 = answer_2;
    }

    public String getAnswer_3() {
        return answer_3;
    }

    public void setAnswer_3(String answer_3) {
        this.answer_3 = answer_3;
    }

    public String getAnswer_4() {
        return answer_4;
    }

    public void setAnswer_4(String answer_4) {
        this.answer_4 = answer_4;
    }

    public String getAnswer_5() {
        return answer_5;
    }

    public void setAnswer_5(String answer_5) {
        this.answer_5 = answer_5;
    }

    public int getCorrect_answer() {
        return correct_answer;
    }

    public void setCorrect_answer(int correct_answer) {
        this.correct_answer = correct_answer;
    }
}
