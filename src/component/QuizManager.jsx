import React, { useState } from 'react';
import Timer from './Timer';
import Question from './Question';
import styles from './QuizManager.module.css';

function QuizManager() {
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [key, setKey] = useState(0); // To force re-render Timer

    const handleNextQuestion = () => {
        setCurrentQuestion(prev => prev + 1);
        setKey(prevKey => prevKey + 1); // Change key to reset the timer
    };

    const handlePrevQuestion = () => {
        if (currentQuestion > 1) {
            setCurrentQuestion(prev => prev - 1);
            setKey(prevKey => prevKey + 1); // Change key to reset the timer
        }
    };

    return (
        <div className={styles.quizContainer}>
            <Question
                currentQuestion={currentQuestion}
                onNext={handleNextQuestion}
                onPrev={handlePrevQuestion}
            />
            <Timer key={key} /> {/* Using the key prop to force re-render */}
        </div>
    );
}

export default QuizManager;
