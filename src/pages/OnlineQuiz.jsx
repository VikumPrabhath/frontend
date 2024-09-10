import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './OnlineQuiz.module.css';
import bookmark from '../assets/bookmark.png';
import bookmarkFilled from '../assets/bookmark-filled.png';
import timerIcon from '../assets/timer.png';
import timerFilledIcon from '../assets/timer-filled.png';
import Header from "../component/Header.jsx";
import Footer from "../component/Footer.jsx";

function OnlineQuiz() {
    const [seconds, setSeconds] = useState(120);
    const [fillHeight, setFillHeight] = useState('100%');
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [questionData, setQuestionData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch the initial question
        fetchQuestion(currentQuestion);
    }, [currentQuestion]);

    useEffect(() => {
        const storedBookmarkStatus = localStorage.getItem('isBookmarked');
        if (storedBookmarkStatus !== null) {
            setIsBookmarked(JSON.parse(storedBookmarkStatus));
        }
    }, []);

    const updateTimer = () => {
        if (!isPaused) {
            setSeconds(prevSeconds => prevSeconds - 1);
        }
    };

    useEffect(() => {
        if (seconds > 0 && !isPaused) {
            const timer = setInterval(updateTimer, 1000);
            return () => clearInterval(timer);
        } else if (seconds === 0 && currentQuestion < 11) {
            goToNextQuestion();
        } else if (seconds === 0 && currentQuestion === 11) {
            setSeconds(0);
        }
    }, [seconds, isPaused, currentQuestion]);

    useEffect(() => {
        const percentage = (seconds / 120) * 100;
        setFillHeight(`${100 - percentage}%`);
    }, [seconds]);

    const handleBookmarkClick = () => {
        const newBookmarkState = !isBookmarked;
        setIsBookmarked(newBookmarkState);
        localStorage.setItem('isBookmarked', JSON.stringify(newBookmarkState));
    };

    const formatTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const remainingSeconds = secs % 60;
        return `${minutes}:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`;
    };

    const fetchQuestion = async (subject, lesson) => {
        try {
            const response = await fetch(`/quiz/bySubjectAndLesson/science/living-tissues`);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const contentType = response.headers.get('Content-Type');
            if (!contentType || !contentType.includes('application/json')) {
                throw new Error('Expected JSON but received something else');
            }

            const data = await response.json();
            setQuestionData(data);

            }catch (error) {
            console.error('Failed to fetch question data:', error);
            // Optionally, set an error state to display a user-friendly message
        }
    };


    const goToNextQuestion = () => {
        const nextQuestionId = currentQuestion < 11 ? currentQuestion + 1 : 1;
        setCurrentQuestion(nextQuestionId);
        setSeconds(120); // Reset timer to 120 seconds
    };

    const goToPreviousQuestion = () => {
        const prevQuestionId = currentQuestion > 1 ? currentQuestion - 1 : 11;
        setCurrentQuestion(prevQuestionId);
        setSeconds(120);
    };

    const toggleTimer = () => {
        setIsPaused(prevIsPaused => !prevIsPaused);
    };

    const handleSubmit = () => {
        console.log('Quiz submitted!');
        navigate('/result');
    };

    return (
        <div>
            <Header />
            <header>
                <h1>Online Quiz</h1>
            </header>
            <div className={styles.container}>
                <div className={styles.numberOfQuis}>
                    {currentQuestion} / 11
                </div>
                <div className={styles.box}>
                    <div
                        className={styles.waterFill}
                        style={{ height: fillHeight }}
                    />
                    <p className={styles.timer}>
                        {formatTime(seconds)}
                    </p>
                </div>
                <ul className={styles.bookmarkList}>
                    <li onClick={handleBookmarkClick}>
                        <img
                            src={isBookmarked ? bookmarkFilled : bookmark}
                            alt={isBookmarked ? "Remove Bookmark" : "Add Bookmark"}
                            className={styles.bookmark}
                        />
                    </li>
                </ul>
            </div>

            <div className={styles.questionContainer}>
                <button
                    className={styles.prev}
                    onClick={goToPreviousQuestion}
                    disabled={isPaused}
                >
                    &lt; Prev
                </button>
                <div className={styles.quezBox}>
                    <p>{questionData ? questionData.question : 'Loading question...'}</p>
                </div>
                <button
                    className={styles.next}
                    onClick={goToNextQuestion}
                    disabled={isPaused}
                >
                    Next &gt;
                </button>
            </div>

            <div className={styles.answerContainer}>
                <div className={styles.answer}>
                    <div className={styles.left}>
                        {questionData && questionData.answers.filter(a => a.side === 'left').map((answer, index) => (
                            <button
                                key={index}
                                className={styles[`answer${answer.number}`]}
                                disabled={isPaused}
                            >
                                {answer.number}. {answer.text}
                            </button>
                        ))}
                    </div>

                    <div className={styles.right}>
                        {questionData && questionData.answers.filter(a => a.side === 'right').map((answer, index) => (
                            <button
                                key={index}
                                className={styles[`answer${answer.number}`]}
                                disabled={isPaused}
                            >
                                {answer.number}. {answer.text}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.quizSetting}>
                <button onClick={toggleTimer} className={styles.timerButton}>
                    <img
                        src={isPaused ? timerFilledIcon : timerIcon}
                        alt={isPaused ? "Resume Timer" : "Stop Timer"}
                        className={styles.timerControlIcon}
                    />
                </button>
                <button
                    className={styles.submitButton}
                    onClick={handleSubmit}
                    disabled={isPaused}
                >
                    Submit
                </button>
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    );
}

export default OnlineQuiz;
