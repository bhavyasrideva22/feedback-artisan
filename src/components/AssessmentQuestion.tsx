import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Scale, CheckCircle, ArrowRight } from 'lucide-react';

interface Question {
  id: string;
  type: 'mcq' | 'likert' | 'scenario' | 'tone-judgment';
  question: string;
  description?: string;
  options?: Array<{
    id: string;
    text: string;
    value: number;
  }>;
  scenario?: string;
  statement?: string;
  scaleMin?: number;
  scaleMax?: number;
  scaleLabels?: string[];
}

interface AssessmentQuestionProps {
  question: Question;
  onAnswer: (questionId: string, answer: any) => void;
  onNext: () => void;
  currentAnswer?: any;
}

export const AssessmentQuestion = ({ 
  question, 
  onAnswer, 
  onNext, 
  currentAnswer 
}: AssessmentQuestionProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState(currentAnswer || null);

  const handleAnswerChange = (answer: any) => {
    setSelectedAnswer(answer);
    onAnswer(question.id, answer);
  };

  const getQuestionIcon = (type: string) => {
    switch (type) {
      case 'scenario':
        return <MessageCircle className="w-5 h-5 text-primary" />;
      case 'likert':
        return <Scale className="w-5 h-5 text-accent" />;
      case 'tone-judgment':
        return <CheckCircle className="w-5 h-5 text-secondary" />;
      default:
        return <MessageCircle className="w-5 h-5 text-primary" />;
    }
  };

  const getQuestionTypeLabel = (type: string) => {
    switch (type) {
      case 'scenario':
        return 'Scenario';
      case 'likert':
        return 'Agreement Scale';
      case 'tone-judgment':
        return 'Tone Assessment';
      case 'mcq':
        return 'Multiple Choice';
      default:
        return 'Question';
    }
  };

  const renderMCQOptions = () => (
    <RadioGroup value={selectedAnswer} onValueChange={handleAnswerChange}>
      <div className="space-y-3">
        {question.options?.map((option, index) => (
          <motion.div
            key={option.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-start space-x-3 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-muted/50 transition-all cursor-pointer">
              <RadioGroupItem value={option.id} id={option.id} className="mt-1" />
              <Label 
                htmlFor={option.id} 
                className="text-sm leading-relaxed cursor-pointer flex-1"
              >
                <span className="font-medium text-primary mr-2">
                  {String.fromCharCode(97 + index)})
                </span>
                {option.text}
              </Label>
            </div>
          </motion.div>
        ))}
      </div>
    </RadioGroup>
  );

  const renderLikertScale = () => {
    const scaleValue = selectedAnswer || 3;
    const labels = question.scaleLabels || ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'];
    
    return (
      <div className="space-y-6">
        {question.statement && (
          <div className="p-4 bg-muted/50 rounded-lg border-l-4 border-primary">
            <p className="font-medium text-foreground">"{question.statement}"</p>
          </div>
        )}
        
        <div className="space-y-4">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{labels[0]}</span>
            <span>{labels[labels.length - 1]}</span>
          </div>
          
          <Slider
            value={[scaleValue]}
            onValueChange={(value) => handleAnswerChange(value[0])}
            min={question.scaleMin || 1}
            max={question.scaleMax || 5}
            step={1}
            className="w-full"
          />
          
          <div className="text-center">
            <Badge variant="outline" className="text-lg px-4 py-2">
              {labels[scaleValue - 1]}
            </Badge>
          </div>
        </div>
      </div>
    );
  };

  const renderScenario = () => (
    <div className="space-y-6">
      {question.scenario && (
        <div className="p-6 bg-gradient-to-r from-muted/50 to-accent/5 rounded-lg border">
          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <MessageCircle className="w-4 h-4 text-primary" />
            Scenario
          </h4>
          <p className="text-muted-foreground leading-relaxed italic">
            {question.scenario}
          </p>
        </div>
      )}
      
      <div className="space-y-4">
        <h4 className="font-semibold text-foreground">Your response:</h4>
        {renderMCQOptions()}
      </div>
    </div>
  );

  const renderToneJudgment = () => (
    <div className="space-y-6">
      {question.statement && (
        <div className="p-4 bg-destructive/5 rounded-lg border border-destructive/20">
          <h4 className="font-semibold text-foreground mb-2">Your message:</h4>
          <p className="font-medium text-destructive">"{question.statement}"</p>
        </div>
      )}
      
      <div className="space-y-4">
        <h4 className="font-semibold text-foreground">How would this likely be perceived?</h4>
        {renderMCQOptions()}
      </div>
    </div>
  );

  const renderQuestionContent = () => {
    switch (question.type) {
      case 'scenario':
        return renderScenario();
      case 'likert':
        return renderLikertScale();
      case 'tone-judgment':
        return renderToneJudgment();
      case 'mcq':
      default:
        return renderMCQOptions();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <Card className="shadow-assessment-card hover:shadow-lg transition-shadow">
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            {getQuestionIcon(question.type)}
            <Badge variant="secondary">{getQuestionTypeLabel(question.type)}</Badge>
          </div>
          <CardTitle className="text-xl leading-relaxed">
            {question.question}
          </CardTitle>
          {question.description && (
            <p className="text-muted-foreground mt-2">{question.description}</p>
          )}
        </CardHeader>
        <CardContent className="space-y-6">
          {renderQuestionContent()}
          
          <div className="flex justify-end pt-4 border-t">
            <Button 
              onClick={onNext}
              disabled={!selectedAnswer}
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white"
            >
              Continue
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};