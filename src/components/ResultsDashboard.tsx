import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Trophy, 
  Target, 
  TrendingUp, 
  Users, 
  MessageSquare, 
  Download,
  Share2,
  Star,
  Lightbulb,
  CheckCircle
} from 'lucide-react';
import { 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar, 
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';

interface ResultsDashboardProps {
  answers: Record<string, any>;
}

export const ResultsDashboard = ({ answers }: ResultsDashboardProps) => {
  // Calculate scores based on answers (simplified for demo)
  const calculateScores = () => {
    const answerCount = Object.keys(answers).length;
    const baseScore = Math.min(100, (answerCount / 20) * 85 + Math.random() * 15);
    
    return {
      overall: Math.round(baseScore),
      clarity: Math.round(baseScore + Math.random() * 10 - 5),
      toneAwareness: Math.round(baseScore + Math.random() * 10 - 5),
      empathy: Math.round(baseScore + Math.random() * 10 - 5),
      conflictNavigation: Math.round(baseScore + Math.random() * 10 - 5),
      followThrough: Math.round(baseScore + Math.random() * 10 - 5),
    };
  };

  const scores = calculateScores();
  
  const getFeedbackStyle = (score: number) => {
    if (score >= 85) return "Empathic Leader";
    if (score >= 70) return "Supportive Challenger";
    if (score >= 55) return "Diplomatic Clarifier";
    return "Developing Communicator";
  };

  const getTier = (score: number) => {
    if (score >= 85) return { label: "Confident Feedback Giver", color: "text-accent" };
    if (score >= 65) return { label: "In Progress", color: "text-primary" };
    return { label: "Feedback Growth Zone", color: "text-destructive" };
  };

  const coachData = [
    { subject: 'Clarity', score: scores.clarity, fullMark: 100 },
    { subject: 'Openness', score: scores.toneAwareness, fullMark: 100 },
    { subject: 'Alignment', score: scores.empathy, fullMark: 100 },
    { subject: 'Conflict Nav', score: scores.conflictNavigation, fullMark: 100 },
    { subject: 'Harmony', score: scores.followThrough, fullMark: 100 },
  ];

  const subScoreData = [
    { name: 'Clarity', score: scores.clarity },
    { name: 'Tone', score: scores.toneAwareness },
    { name: 'Empathy', score: scores.empathy },
    { name: 'Conflict', score: scores.conflictNavigation },
    { name: 'Follow-up', score: scores.followThrough },
  ];

  const tier = getTier(scores.overall);
  const style = getFeedbackStyle(scores.overall);

  const growthPlan = [
    {
      week: "Week 1-2",
      focus: "SBI Framework Practice",
      description: "Master the Situation-Behavior-Impact structure for clear feedback delivery"
    },
    {
      week: "Week 3-4", 
      focus: "Tone Calibration",
      description: "Practice digital feedback and develop tone awareness techniques"
    },
    {
      week: "Week 5-6",
      focus: "Conflict Navigation",
      description: "Learn to handle defensive reactions and build psychological safety"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/50 p-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
            <Trophy className="w-10 h-10 text-white" />
          </div>
          <Badge variant="secondary" className="mb-4">
            ✅ ASSESSMENT COMPLETE
          </Badge>
          <h1 className="text-4xl font-bold mb-2">Your Feedback Profile</h1>
          <p className="text-xl text-muted-foreground">
            Collaboration & Communication Intelligence Results
          </p>
        </motion.div>

        {/* Overall Score */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="text-center shadow-assessment-card">
            <CardHeader>
              <CardTitle className="text-2xl">Overall CCI Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {scores.overall}
                </div>
                <Badge variant="outline" className={`text-lg px-4 py-2 ${tier.color}`}>
                  {tier.label}
                </Badge>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Your Feedback Style</h3>
                  <Badge className="text-lg px-6 py-2 bg-gradient-to-r from-primary to-accent text-white">
                    {style}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* COACH Radar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  COACH Framework Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={coachData}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="subject" className="text-sm" />
                      <PolarRadiusAxis 
                        angle={90} 
                        domain={[0, 100]} 
                        tickCount={6}
                        className="text-xs"
                      />
                      <Radar
                        name="Score"
                        dataKey="score"
                        stroke="hsl(var(--primary))"
                        fill="hsl(var(--primary))"
                        fillOpacity={0.3}
                        strokeWidth={2}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Detailed Scores */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  Detailed Breakdown
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={subScoreData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" className="text-sm" />
                      <YAxis domain={[0, 100]} className="text-sm" />
                      <Tooltip />
                      <Bar 
                        dataKey="score" 
                        fill="hsl(var(--primary))"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Strengths & Areas for Growth */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-accent">
                  <Star className="w-5 h-5" />
                  Your Strengths
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {scores.clarity >= 75 && (
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                      <div>
                        <div className="font-medium">Clear Communication</div>
                        <div className="text-sm text-muted-foreground">
                          You excel at delivering feedback in clear, understandable terms
                        </div>
                      </div>
                    </div>
                  )}
                  {scores.empathy >= 75 && (
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                      <div>
                        <div className="font-medium">Empathic Approach</div>
                        <div className="text-sm text-muted-foreground">
                          You consider others' feelings and perspectives when giving feedback
                        </div>
                      </div>
                    </div>
                  )}
                  {scores.followThrough >= 75 && (
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                      <div>
                        <div className="font-medium">Strong Follow-through</div>
                        <div className="text-sm text-muted-foreground">
                          You consistently follow up to ensure feedback leads to improvement
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Lightbulb className="w-5 h-5" />
                  Growth Opportunities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(scores)
                    .filter(([key, score]) => key !== 'overall' && score < 75)
                    .slice(0, 2)
                    .map(([area, score]) => (
                      <div key={area} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium capitalize">
                            {area.replace(/([A-Z])/g, ' $1').trim()}
                          </span>
                          <span className="text-sm text-muted-foreground">{score}/100</span>
                        </div>
                        <Progress value={score} className="h-2" />
                      </div>
                    ))}
                  
                  <div className="pt-2 border-t">
                    <p className="text-sm text-muted-foreground">
                      Focus on these areas to enhance your feedback effectiveness
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Growth Plan */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Your 6-Week Growth Plan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {growthPlan.map((phase, index) => (
                  <div key={index} className="space-y-3">
                    <Badge variant="outline" className="w-fit">
                      {phase.week}
                    </Badge>
                    <h4 className="font-semibold">{phase.focus}</h4>
                    <p className="text-sm text-muted-foreground">{phase.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-white">
            <Download className="w-4 h-4 mr-2" />
            Download Report
          </Button>
          <Button size="lg" variant="outline">
            <Share2 className="w-4 h-4 mr-2" />
            Share Results
          </Button>
          <Button size="lg" variant="secondary">
            <Users className="w-4 h-4 mr-2" />
            Team Analysis
          </Button>
        </motion.div>
      </div>
    </div>
  );
};