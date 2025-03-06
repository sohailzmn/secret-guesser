import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Question } from '../../data/questions';

interface QuestionCardProps {
  question: Question;
  onAnswer: (questionId: string, answer: string) => void;
  isLast: boolean;
}

export function QuestionCard({ question, onAnswer, isLast }: QuestionCardProps) {
  // Get icon and color based on question type
  const getTypeDetails = () => {
    switch(question.type) {
      case 'casual':
        return { 
          label: 'Just a casual question...', 
          color: 'from-blue-400 to-cyan-400',
          icon: '☀️'
        };
      case 'personal':
        return { 
          label: 'Getting a bit more personal...', 
          color: 'from-amber-400 to-orange-400',
          icon: '🔍'
        };
      case 'deep':
        return { 
          label: 'Hmm, interesting...', 
          color: 'from-purple-400 to-pink-400',
          icon: '🧠'
        };
    }
  };
  
  const { label, color, icon } = getTypeDetails();
  
  return (
    <Card className="w-full mx-auto backdrop-blur-sm bg-white/10 border-white/20 shadow-xl">
      <CardHeader className="md:px-8 md:pt-8 lg:px-12 lg:pt-12">
        <div className="flex items-center justify-between mb-2 md:mb-4">
          <span className="text-xl md:text-2xl lg:text-3xl">{icon}</span>
          <CardDescription className="text-white/70 md:text-base lg:text-lg">
            {label}
          </CardDescription>
        </div>
        <CardTitle className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white">{question.text}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-3 md:gap-4 lg:gap-6 md:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
          {question.options?.map((option, index) => (
            <Button
              key={option}
              variant="outline"
              className="justify-start text-left h-auto py-4 px-5 md:py-5 md:px-6 lg:py-6 lg:px-8 bg-white/5 hover:bg-white/10 border-white/10 text-white transition-all hover:translate-x-1 button-hover-effect"
              onClick={() => onAnswer(question.id, option)}
            >
              <span className={`inline-block w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 mr-3 rounded-full bg-gradient-to-r ${color} flex items-center justify-center text-xs md:text-sm lg:text-base font-bold`}>
                {index + 1}
              </span>
              <span className="md:text-lg lg:text-xl">{option}</span>
            </Button>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between md:px-8 lg:px-12 md:pb-8 lg:pb-12">
        <CardDescription className="text-sm md:text-base lg:text-lg text-white/60">
          {isLast ? "Last question before the reveal..." : "Your secret is getting clearer..."}
        </CardDescription>
      </CardFooter>
    </Card>
  );
} 