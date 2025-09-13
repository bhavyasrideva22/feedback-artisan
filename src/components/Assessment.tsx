import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, MessageSquare, Users, Brain, Target, ArrowRight } from 'lucide-react';
import { AssessmentQuestion } from './AssessmentQuestion';
import { ResultsDashboard } from './ResultsDashboard';
import { assessmentData } from '@/data/assessmentData';

interface AssessmentState {
  currentSection: number;
  currentQuestion: number;
  answers: Record<string, any>;
  isComplete: boolean;
}

export const Assessment = () => {
  const [state, setState] = useState<AssessmentState>({
    currentSection: 0,
    currentQuestion: 0,
    answers: {},
    isComplete: false,
  });

  const [showIntro, setShowIntro] = useState(true);

  const totalQuestions = assessmentData.sections.reduce(
    (total, section) => total + section.questions.length,
    0
  );

  const currentProgress = Object.keys(state.answers).length;
  const progressPercentage = (currentProgress / totalQuestions) * 100;

  const handleAnswer = (questionId: string, answer: any) => {
    setState(prev => ({
      ...prev,
      answers: { ...prev.answers, [questionId]: answer }
    }));
  };

  const nextQuestion = () => {
    const currentSection = assessmentData.sections[state.currentSection];
    
    if (state.currentQuestion < currentSection.questions.length - 1) {
      setState(prev => ({ ...prev, currentQuestion: prev.currentQuestion + 1 }));
    } else if (state.currentSection < assessmentData.sections.length - 1) {
      setState(prev => ({ 
        ...prev, 
        currentSection: prev.currentSection + 1,
        currentQuestion: 0 
      }));
    } else {
      setState(prev => ({ ...prev, isComplete: true }));
    }
  };

  const startAssessment = () => {
    setShowIntro(false);
  };

  if (showIntro) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/50 p-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-8 h-8 text-primary-foreground" />
            </div>
            <Badge variant="secondary" className="mb-4">
              ✅ ASSESSMENT
            </Badge>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Giving Constructive Feedback
            </h1>
            <p className="text-xl text-muted-foreground mb-2">
              Collaboration & Communication Intelligence (CCI)
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-primary" />
                  Introduction
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  Giving feedback is one of the most essential—and often avoided—forms of communication 
                  in both professional and personal life. Constructive feedback, when done right, drives 
                  clarity, trust, and performance. When mishandled, it can damage relationships, trigger 
                  defensiveness, and erode team cohesion.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This assessment helps you explore your Collaboration & Communication Intelligence through 
                  the specific lens of how you give feedback: your clarity, tone, empathy, timing, and 
                  approach in high-stakes or routine settings.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid md:grid-cols-2 gap-6 mb-8"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Target className="w-5 h-5 text-accent" />
                  What You'll Discover
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    Your unique Feedback Style
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    Team communication fit assessment
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    Personalized growth recommendations
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    COACH framework analysis
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Users className="w-5 h-5 text-primary" />
                  Assessment Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium">~25 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Questions:</span>
                    <span className="font-medium">{totalQuestions} questions</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sections:</span>
                    <span className="font-medium">{assessmentData.sections.length} parts</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Format:</span>
                    <span className="font-medium">Interactive scenarios</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <Button 
              size="lg" 
              onClick={startAssessment}
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white px-8 py-6 text-lg"
            >
              Start Assessment
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Your responses are private and will be used only to generate your personalized results.
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  if (state.isComplete) {
    return <ResultsDashboard answers={state.answers} />;
  }

  const currentSection = assessmentData.sections[state.currentSection];
  const currentQuestionData = currentSection.questions[state.currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Progress Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <Badge variant="outline" className="mb-2">
                {currentSection.title}
              </Badge>
              <h2 className="text-2xl font-bold">{currentSection.description}</h2>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground">
                Question {currentProgress + 1} of {totalQuestions}
              </div>
              <div className="text-2xl font-bold text-primary">
                {Math.round(progressPercentage)}%
              </div>
            </div>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </motion.div>

        {/* Question */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${state.currentSection}-${state.currentQuestion}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <AssessmentQuestion
              question={currentQuestionData}
              onAnswer={handleAnswer}
              onNext={nextQuestion}
              currentAnswer={state.answers[currentQuestionData.id]}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};