import React, { useState, useEffect } from 'react';
import { Welcome } from './components/app/Welcome';
import { QuestionCard } from './components/app/QuestionCard';
import { SecretReveal } from './components/app/SecretReveal';
import { questions, secretGuesses, Question } from './data/questions';

// Number of questions to ask before revealing the secret
const QUESTIONS_TO_ASK = 10;

type GameState = 'welcome' | 'questioning' | 'reveal';

interface Answer {
  questionId: string;
  answer: string;
}

function App() {
  const [gameState, setGameState] = useState<GameState>('welcome');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [secretGuess, setSecretGuess] = useState('');
  const [accuracy, setAccuracy] = useState(0);
  
  // Initialize the game by selecting questions
  useEffect(() => {
    if (gameState === 'questioning' && selectedQuestions.length === 0) {
      const casual = questions.filter(q => q.type === 'casual');
      const personal = questions.filter(q => q.type === 'personal');
      const deep = questions.filter(q => q.type === 'deep');
      
      // Randomly select questions from each category
      const selected = [
        ...shuffleArray(casual).slice(0, 4),
        ...shuffleArray(personal).slice(0, 3),
        ...shuffleArray(deep).slice(0, 3)
      ];
      
      // Shuffle the final array to mix question types
      setSelectedQuestions(shuffleArray(selected));
    }
  }, [gameState]);
  
  // Handle starting the game
  const handleStart = () => {
    setGameState('questioning');
    setCurrentQuestionIndex(0);
    setAnswers([]);
  };
  
  // Handle answering a question
  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers([...answers, { questionId, answer }]);
    
    if (currentQuestionIndex < selectedQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Generate a secret guess based on answers
      generateSecretGuess();
      setGameState('reveal');
    }
  };
  
  // Generate a secret guess based on the answers
  const generateSecretGuess = () => {
    // In a real app, this would use more sophisticated logic
    // For now, we'll use a simple algorithm that picks a random secret
    // but weights it based on the "deep" questions
    
    // Calculate a "depth score" based on answers to deep questions
    const deepQuestionIds = selectedQuestions
      .filter(q => q.type === 'deep')
      .map(q => q.id);
      
    const deepAnswers = answers.filter(a => 
      deepQuestionIds.includes(a.questionId) && 
      !a.answer.includes('prefer not to say')
    );
    
    // The more deep questions answered, the higher the accuracy
    const baseAccuracy = 50 + (deepAnswers.length * 10);
    
    // Add some randomness
    const randomFactor = Math.floor(Math.random() * 20) - 10;
    const finalAccuracy = Math.min(98, Math.max(30, baseAccuracy + randomFactor));
    
    setAccuracy(finalAccuracy);
    
    // Select a random secret guess
    const randomIndex = Math.floor(Math.random() * secretGuesses.length);
    setSecretGuess(secretGuesses[randomIndex]);
  };
  
  // Reset the game
  const handleReset = () => {
    setGameState('welcome');
    setCurrentQuestionIndex(0);
    setSelectedQuestions([]);
    setAnswers([]);
  };
  
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden relative">
      {/* Decorative elements for desktop */}
      <div className="fixed top-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="fixed bottom-20 right-20 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl"></div>
      <div className="fixed top-1/3 right-1/4 w-24 h-24 bg-pink-500/20 rounded-full blur-3xl"></div>
      
      {/* Desktop-only decorative elements */}
      <div className="hidden lg:block fixed -top-20 -left-20 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-float"></div>
      <div className="hidden lg:block fixed -bottom-40 -right-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="hidden lg:block fixed top-1/4 -right-10 w-40 h-40 bg-pink-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      {/* Additional decorative elements for ultra-wide screens */}
      <div className="hidden xl:block fixed top-1/3 -left-40 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      <div className="hidden xl:block fixed bottom-1/4 -right-40 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2.5s' }}></div>
      
      {/* Main content container - full width with proper centering */}
      <div className="w-full h-full flex flex-col items-center justify-center p-4 md:p-8 z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 w-full">
          <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold text-white mb-2 drop-shadow-lg">
            Secret Guesser
          </h1>
          <p className="text-white/80 text-lg md:text-xl xl:text-2xl mx-auto">
            {gameState === 'welcome' 
              ? "Answer a few questions and I'll reveal your deepest secret" 
              : gameState === 'questioning' 
                ? `Question ${currentQuestionIndex + 1} of ${QUESTIONS_TO_ASK}` 
                : "Your secret has been revealed"}
          </p>
        </div>
        
        {/* Main content area - centered with responsive width */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-md md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
            {gameState === 'welcome' && (
              <Welcome onStart={handleStart} />
            )}
            
            {gameState === 'questioning' && selectedQuestions.length > 0 && (
              <div className="space-y-4 w-full">
                <div className="w-full bg-white/10 h-2 md:h-3 rounded-full overflow-hidden backdrop-blur-sm">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-600 to-indigo-600" 
                    style={{ 
                      width: `${((currentQuestionIndex + 1) / QUESTIONS_TO_ASK) * 100}%` 
                    }}
                  />
                </div>
                
                <QuestionCard 
                  question={selectedQuestions[currentQuestionIndex]} 
                  onAnswer={handleAnswer}
                  isLast={currentQuestionIndex === selectedQuestions.length - 1}
                />
              </div>
            )}
            
            {gameState === 'reveal' && (
              <SecretReveal 
                secret={secretGuess} 
                onReset={handleReset}
                accuracy={accuracy}
              />
            )}
          </div>
        </div>
      </div>
      
      <footer className="w-full text-center text-sm md:text-base text-white/60 py-6 z-10">
        <p>Secret Guesser &copy; {new Date().getFullYear()}</p>
        <p className="mt-1">For entertainment purposes only. No actual mind reading involved.</p>
      </footer>
    </div>
  );
}

// Helper function to shuffle an array
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export default App; 