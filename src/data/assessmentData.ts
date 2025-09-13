export const assessmentData = {
  title: "Giving Constructive Feedback - Collaboration & Communication Intelligence",
  sections: [
    {
      id: "communication",
      title: "Communication Intelligence",
      description: "How you communicate feedback effectively",
      questions: [
        {
          id: "clarity_scenario",
          type: "scenario" as const,
          question: "How would you address work that doesn't meet expectations?",
          scenario: "A teammate delivers work below expectations. The project deadline is approaching, and you need to provide feedback that leads to improvement.",
          options: [
            {
              id: "a",
              text: "This isn't what we agreed on. We need to fix it.",
              value: 2
            },
            {
              id: "b", 
              text: "I noticed some differences from our original plan—can we go over them?",
              value: 4
            },
            {
              id: "c",
              text: "Just redo it. I don't think this works.",
              value: 1
            },
            {
              id: "d",
              text: "You tried hard, but the result's off track. Let's align on next steps.",
              value: 5
            }
          ]
        },
        {
          id: "listening_check",
          type: "likert" as const,
          question: "How often do you verify your understanding before giving feedback?",
          statement: "Before giving feedback, I check my understanding of the situation.",
          scaleMin: 1,
          scaleMax: 5,
          scaleLabels: ["Never", "Rarely", "Sometimes", "Often", "Always"]
        },
        {
          id: "tone_judgment",
          type: "tone-judgment" as const,
          question: "Evaluate the tone of this feedback message:",
          statement: "You really missed the mark here.",
          options: [
            { id: "a", text: "Motivating", value: 1 },
            { id: "b", text: "Harsh", value: 4 },
            { id: "c", text: "Honest but direct", value: 3 },
            { id: "d", text: "Demoralizing", value: 5 }
          ]
        },
        {
          id: "feedback_comfort",
          type: "likert" as const,
          question: "How comfortable are you discussing difficult feedback topics?",
          statement: "I feel confident addressing performance issues directly with colleagues.",
          scaleMin: 1,
          scaleMax: 5,
          scaleLabels: ["Very Uncomfortable", "Uncomfortable", "Neutral", "Comfortable", "Very Comfortable"]
        },
        {
          id: "clarity_examples",
          type: "likert" as const,
          question: "How often do you use specific examples when giving feedback?",
          statement: "I use concrete examples to explain what needs to change.",
          scaleMin: 1,
          scaleMax: 5,
          scaleLabels: ["Never", "Rarely", "Sometimes", "Often", "Always"]
        }
      ]
    },
    {
      id: "collaboration",
      title: "Collaboration Intelligence", 
      description: "How your feedback builds team effectiveness",
      questions: [
        {
          id: "defensive_reaction",
          type: "scenario" as const,
          question: "How do you handle defensive reactions to your feedback?",
          scenario: "A teammate reacts defensively to your feedback, becoming visibly upset and pushing back on your suggestions.",
          options: [
            {
              id: "a",
              text: "Repeat your point more assertively",
              value: 2
            },
            {
              id: "b",
              text: "Apologize for giving the feedback", 
              value: 1
            },
            {
              id: "c",
              text: "Ask them what part felt unfair or hard to hear",
              value: 5
            },
            {
              id: "d",
              text: "Move on and avoid giving feedback again",
              value: 1
            }
          ]
        },
        {
          id: "team_focus",
          type: "likert" as const,
          question: "How well do you frame feedback around team goals?",
          statement: "When I give feedback, I focus on how it helps the whole team improve.",
          scaleMin: 1,
          scaleMax: 5,
          scaleLabels: ["Never", "Rarely", "Sometimes", "Often", "Always"]
        },
        {
          id: "trust_building",
          type: "likert" as const,
          question: "How effectively does your feedback build trust?",
          statement: "My feedback strengthens rather than damages working relationships.",
          scaleMin: 1,
          scaleMax: 5,
          scaleLabels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
        },
        {
          id: "conflict_navigation",
          type: "likert" as const,
          question: "How well do you navigate disagreement during feedback conversations?", 
          statement: "I can give critical feedback without creating lasting conflict.",
          scaleMin: 1,
          scaleMax: 5,
          scaleLabels: ["Not at all", "Poorly", "Adequately", "Well", "Exceptionally"]
        },
        {
          id: "adaptation",
          type: "likert" as const,
          question: "How well do you adapt your feedback style to different people?",
          statement: "I adjust my feedback approach based on each person's communication style.",
          scaleMin: 1,
          scaleMax: 5,
          scaleLabels: ["Never", "Rarely", "Sometimes", "Often", "Always"]
        }
      ]
    },
    {
      id: "contextual",
      title: "Contextual Intelligence",
      description: "How you adapt feedback across different situations",
      questions: [
        {
          id: "digital_feedback",
          type: "likert" as const,
          question: "How effective are you at giving feedback in digital formats?",
          statement: "In team chats, I know how to give critical input without sounding rude.",
          scaleMin: 1,
          scaleMax: 5,
          scaleLabels: ["Never", "Rarely", "Sometimes", "Often", "Always"]
        },
        {
          id: "group_settings",
          type: "scenario" as const,
          question: "How do you give feedback in group meetings?",
          scenario: "During a team meeting, you notice a colleague's presentation has several factual errors that could mislead the group.",
          options: [
            {
              id: "a",
              text: "Point out the errors immediately to correct the record",
              value: 2
            },
            {
              id: "b",
              text: "Wait until after the meeting to discuss privately",
              value: 4
            },
            {
              id: "c",
              text: "Ask clarifying questions to let them self-correct",
              value: 5
            },
            {
              id: "d", 
              text: "Say nothing to avoid embarrassing them",
              value: 1
            }
          ]
        },
        {
          id: "timing_awareness",
          type: "likert" as const,
          question: "How well do you time your feedback?",
          statement: "I consider timing and context before delivering feedback.",
          scaleMin: 1,
          scaleMax: 5,
          scaleLabels: ["Never", "Rarely", "Sometimes", "Often", "Always"]
        },
        {
          id: "emotional_state",
          type: "likert" as const,
          question: "How well do you read emotional cues before giving feedback?",
          statement: "I assess someone's emotional state before delivering critical feedback.",
          scaleMin: 1,
          scaleMax: 5,
          scaleLabels: ["Never", "Rarely", "Sometimes", "Often", "Always"]
        }
      ]
    },
    {
      id: "coach_framework",
      title: "COACH Framework",
      description: "Comprehensive feedback assessment using the COACH model",
      questions: [
        {
          id: "coach_clarity",
          type: "likert" as const,
          question: "Clarity & Comprehension: How clearly do you frame feedback?",
          statement: "I use specific examples and clear language when giving feedback.",
          scaleMin: 1,
          scaleMax: 5,
          scaleLabels: ["Never", "Rarely", "Sometimes", "Often", "Always"]
        },
        {
          id: "coach_openness", 
          type: "likert" as const,
          question: "Openness & Feedback: How receptive are you to dialogue after giving feedback?",
          statement: "I ask others how my feedback landed with them.",
          scaleMin: 1,
          scaleMax: 5,
          scaleLabels: ["Never", "Rarely", "Sometimes", "Often", "Always"]
        },
        {
          id: "coach_alignment",
          type: "likert" as const,
          question: "Alignment & Empathy: How sensitive are you to emotions and timing?",
          statement: "I consider the other person's emotional state and workload before giving feedback.",
          scaleMin: 1,
          scaleMax: 5,
          scaleLabels: ["Never", "Rarely", "Sometimes", "Often", "Always"]
        },
        {
          id: "coach_conflict",
          type: "scenario" as const,
          question: "Conflict Navigation: How do you handle emotionally charged feedback moments?",
          scenario: "A team member becomes visibly frustrated when you point out repeated mistakes in their work.",
          options: [
            {
              id: "a",
              text: "Continue with the feedback as planned",
              value: 2
            },
            {
              id: "b",
              text: "Pause and acknowledge their frustration first",
              value: 5
            },
            {
              id: "c",
              text: "End the conversation and try again later",
              value: 3
            },
            {
              id: "d",
              text: "Soften the feedback to avoid more upset",
              value: 2
            }
          ]
        },
        {
          id: "coach_harmony",
          type: "likert" as const,
          question: "Harmony & Follow-Through: How well do you follow up after giving feedback?",
          statement: "I follow up to see if feedback led to improvement and offer additional support.",
          scaleMin: 1,
          scaleMax: 5,
          scaleLabels: ["Never", "Rarely", "Sometimes", "Often", "Always"]
        }
      ]
    }
  ]
};