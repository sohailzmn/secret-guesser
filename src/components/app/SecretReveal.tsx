import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

interface SecretRevealProps {
  secret: string;
  onReset: () => void;
  accuracy: number;
}

export function SecretReveal({ secret, onReset, accuracy }: SecretRevealProps) {
  const [revealed, setRevealed] = useState(false);
  const [typedSecret, setTypedSecret] = useState('');
  
  useEffect(() => {
    if (revealed) {
      let i = 0;
      const interval = setInterval(() => {
        if (i <= secret.length) {
          setTypedSecret(secret.substring(0, i));
          i++;
        } else {
          clearInterval(interval);
        }
      }, 30);
      
      return () => clearInterval(interval);
    }
  }, [revealed, secret]);
  
  // Get accuracy color
  const getAccuracyColor = () => {
    if (accuracy >= 80) return 'from-green-500 to-emerald-500';
    if (accuracy >= 60) return 'from-yellow-500 to-amber-500';
    return 'from-orange-500 to-red-500';
  };
  
  return (
    <Card className="w-full mx-auto backdrop-blur-sm bg-white/10 border-white/20 shadow-xl">
      <CardHeader className="space-y-2 md:space-y-4 md:px-8 md:pt-8 lg:px-12 lg:pt-12">
        <div className="flex items-center justify-center mb-2 md:mb-4">
          <span className="text-2xl md:text-4xl lg:text-5xl animate-float">🔮</span>
        </div>
        <CardTitle className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white">Your Secret Revealed</CardTitle>
        <CardDescription className="text-center text-white/80 md:text-lg lg:text-xl max-w-3xl mx-auto">
          Based on your answers, I've uncovered something about you...
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6 md:gap-8 lg:gap-10 md:px-8 lg:px-12">
        {!revealed ? (
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full bg-white/10 flex items-center justify-center mb-4 md:mb-6 lg:mb-8 animate-pulse">
              <span className="text-4xl md:text-5xl lg:text-6xl">🧠</span>
            </div>
            <Button 
              variant="default" 
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-lg md:text-xl lg:text-2xl py-6 md:py-8 px-8 md:px-12 lg:px-16 shadow-lg button-hover-effect"
              onClick={() => setRevealed(true)}
            >
              Reveal My Secret
            </Button>
          </div>
        ) : (
          <div className="md:grid md:grid-cols-5 lg:grid-cols-7 md:gap-6 lg:gap-8">
            <div className="p-6 md:p-8 lg:p-10 bg-white/5 rounded-lg border border-white/10 shadow-inner md:col-span-3 lg:col-span-4">
              <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium leading-relaxed text-white">
                {typedSecret}
                {typedSecret.length < secret.length && <span className="animate-pulse">|</span>}
              </p>
            </div>
            
            <div className="mt-6 md:mt-0 space-y-4 md:space-y-6 lg:space-y-8 md:col-span-2 lg:col-span-3">
              <div className="p-6 md:p-8 lg:p-10 bg-white/5 rounded-lg border border-white/10">
                <div className="space-y-2 md:space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm md:text-base lg:text-lg font-medium text-white/80">Accuracy</span>
                    <span className="text-sm md:text-base lg:text-lg font-bold text-white">{accuracy}%</span>
                  </div>
                  <div className="h-3 md:h-4 lg:h-5 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${getAccuracyColor()}`}
                      style={{ width: `${accuracy}%` }}
                    />
                  </div>
                  <p className="text-sm md:text-base lg:text-lg text-white/60 italic mt-2 md:mt-4">
                    {accuracy > 80 
                      ? "Scary accurate, right? The AI knows..." 
                      : accuracy > 60 
                        ? "Getting close to your truth..." 
                        : "Just a glimpse of what might be..."}
                  </p>
                </div>
              </div>
              
              <div className="p-6 md:p-8 lg:p-10 bg-white/5 rounded-lg border border-white/10">
                <h3 className="text-white font-medium mb-2 md:text-lg lg:text-xl">How did we know?</h3>
                <p className="text-white/70 text-sm md:text-base lg:text-lg">
                  Our AI analyzes patterns in your answers to reveal insights about your personality
                  and hidden traits that even you might not be fully aware of.
                </p>
                <p className="text-white/70 text-sm md:text-base lg:text-lg mt-2 hidden md:block">
                  The combination of your responses creates a unique psychological profile that allows us to make surprisingly accurate predictions.
                </p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between md:px-8 lg:px-12 md:pb-8 lg:pb-12">
        {revealed && (
          <div className="w-full space-y-4 md:space-y-6">
            <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-2xl mx-auto">
              <Button 
                variant="outline" 
                onClick={onReset}
                className="bg-white/5 hover:bg-white/10 border-white/10 text-white md:text-lg lg:text-xl md:py-4 lg:py-6 button-hover-effect"
              >
                Try Again
              </Button>
              <Button 
                variant="outline"
                className="bg-white/5 hover:bg-white/10 border-white/10 text-white md:text-lg lg:text-xl md:py-4 lg:py-6 button-hover-effect"
                onClick={() => {
                  const text = `Secret Guesser just exposed me: "${secret}" - ${accuracy}% accurate! 😱 Try it yourself!`;
                  if (navigator.share) {
                    navigator.share({
                      title: 'My Secret Revealed',
                      text: text,
                      url: window.location.href,
                    });
                  } else {
                    navigator.clipboard.writeText(text);
                    alert('Copied to clipboard! Share it with your friends!');
                  }
                }}
              >
                Share This
              </Button>
            </div>
            <CardDescription className="text-sm md:text-base lg:text-lg text-center text-white/60 max-w-2xl mx-auto">
              {accuracy > 75 
                ? "Scary, right? How did I know?" 
                : accuracy > 50 
                  ? "Am I getting close?" 
                  : "Not quite right? Try again for a better guess!"}
            </CardDescription>
          </div>
        )}
      </CardFooter>
    </Card>
  );
} 