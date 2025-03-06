import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

interface WelcomeProps {
  onStart: () => void;
}

export function Welcome({ onStart }: WelcomeProps) {
  return (
    <Card className="w-full mx-auto backdrop-blur-sm bg-white/10 border-white/20 shadow-xl">
      <CardHeader className="space-y-2 md:space-y-4 md:px-8 md:pt-8 lg:px-12 lg:pt-12">
        <CardTitle className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
          Discover Your Secret
        </CardTitle>
        <CardDescription className="text-lg md:text-xl lg:text-2xl text-center text-white max-w-3xl mx-auto">
          I can guess your deepest secret with just a few questions...
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 md:space-y-8 lg:space-y-12 md:px-8 lg:px-12">
        <p className="text-white/80 md:text-lg lg:text-xl md:text-center md:max-w-3xl lg:max-w-4xl md:mx-auto">
          Answer a series of seemingly innocent questions, and I'll reveal something 
          about you that you might not want others to know. Are you brave enough to try?
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          <div className="bg-white/10 p-4 md:p-6 lg:p-8 rounded-lg space-y-2 border border-white/10 md:transform md:hover:scale-105 transition-transform duration-300">
            <p className="text-sm md:text-base lg:text-lg font-medium text-white flex items-center">
              <span className="mr-2 text-lg md:text-xl lg:text-2xl">🔍</span>
              How it works:
            </p>
            <ul className="text-sm md:text-base lg:text-lg space-y-2 list-disc pl-5 text-white/80">
              <li>Answer 10 simple questions honestly</li>
              <li>Questions start casual but get more personal</li>
              <li>My AI will analyze your pattern of answers</li>
              <li>I'll reveal a secret about you</li>
            </ul>
          </div>
          
          <div className="bg-white/10 p-4 md:p-6 lg:p-8 rounded-lg space-y-2 border border-white/10 md:transform md:hover:scale-105 transition-transform duration-300">
            <p className="text-sm md:text-base lg:text-lg font-medium text-white flex items-center">
              <span className="mr-2 text-lg md:text-xl lg:text-2xl">💬</span>
              What people say:
            </p>
            <div className="space-y-2 text-white/80">
              <p className="text-sm md:text-base lg:text-lg italic">"It was scary accurate! How did it know?!"</p>
              <p className="text-sm md:text-base lg:text-lg italic">"I couldn't believe what it revealed about me."</p>
              <p className="text-sm md:text-base lg:text-lg italic">"Shared it with all my friends. We were shocked!"</p>
            </div>
          </div>
          
          <div className="bg-white/10 p-4 md:p-6 lg:p-8 rounded-lg space-y-2 border border-white/10 md:transform md:hover:scale-105 transition-transform duration-300 md:col-span-2 lg:col-span-1">
            <p className="text-sm md:text-base lg:text-lg font-medium text-white flex items-center">
              <span className="mr-2 text-lg md:text-xl lg:text-2xl">🔮</span>
              The Science Behind It:
            </p>
            <div className="space-y-2 text-white/80">
              <p className="text-sm md:text-base lg:text-lg">Our advanced AI uses psychological profiling techniques to analyze your answers and identify patterns that reveal hidden aspects of your personality.</p>
              <p className="text-sm md:text-base lg:text-lg hidden md:block">The more questions you answer, the more accurate our prediction becomes.</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white/5 p-6 md:p-8 lg:p-10 rounded-lg border border-white/10">
          <div className="text-center">
            <div className="text-3xl md:text-4xl mb-2">🧠</div>
            <h3 className="text-white font-medium mb-1 md:text-lg lg:text-xl">AI-Powered</h3>
            <p className="text-white/70 text-sm md:text-base">Advanced pattern recognition technology</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl mb-2">🔒</div>
            <h3 className="text-white font-medium mb-1 md:text-lg lg:text-xl">Private</h3>
            <p className="text-white/70 text-sm md:text-base">Your answers stay on your device</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl mb-2">🎮</div>
            <h3 className="text-white font-medium mb-1 md:text-lg lg:text-xl">Fun</h3>
            <p className="text-white/70 text-sm md:text-base">Entertaining and surprisingly accurate</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="md:px-8 lg:px-12 md:pb-8 lg:pb-12">
        <Button 
          onClick={onStart} 
          className="w-full text-lg md:text-xl lg:text-2xl py-6 md:py-8 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg button-hover-effect"
        >
          Reveal My Secret
        </Button>
      </CardFooter>
    </Card>
  );
} 