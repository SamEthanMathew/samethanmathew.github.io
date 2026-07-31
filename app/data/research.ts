/** Research page content — statement, problem statements, current + past work. */

export interface ResearchEntry {
  title: string;
  lab: string;
  advisor?: string;
  period: string;
  summary: string;
  tags: string[];
  status?: string;
  links?: { label: string; href: string }[];
}

export const researchInterest =
  "I work on robot learning — making learned policies reliable enough to act in the real world. My work sits where world models, vision-language models, and uncertainty meet: how a robot can tell when its own understanding is wrong and repair it before it fails.";

/** The questions driving the work. */
export const problemStatements = [
  "How can a robot know when it doesn't know — detecting that a learned policy is about to fail, before it does?",
  "How should a robot repair its own understanding online, adapting its world model from a handful of failed interactions instead of retraining from scratch?",
  "Can vision-language models supply the priors that make this adaptation sample-efficient and general across tasks and embodiments?",
];

export const currentResearch: ResearchEntry[] = [
  {
    title: "FixIt",
    lab: "CMU Robotics Institute — R-PAD Lab",
    advisor: "Prof. David Held",
    period: "Dec 2025 — Present",
    summary:
      "FixIt studies how a robot can fix its own mistakes. I'm combining supervised fine-tuning (SFT) and reinforcement learning (RL) over vision-language models and world models so a policy can recognize failure, reason about what went wrong, and repair its plan on the fly.",
    tags: ["SFT", "RL", "VLMs", "World Models"],
    status: "In progress · fuller write-up coming soon.",
  },
];

export const pastResearch: ResearchEntry[] = [
  {
    title: "Active Learning for Tool-Use World Models",
    lab: "CMU Robotics Institute — R-PAD Lab",
    period: "2026",
    summary:
      "The dual-role uncertainty strategy at the core of an uncertainty-guided world-model adaptation method for robotic tool use. A five-model diffusion ensemble plays two roles: it selects the most informative vision-language-model plans to execute during training, and it gates unreliable plans at test time — letting the system adapt an action-conditioned world model from only ~20 plans per task. On a real Franka Panda arm this doubled manipulation success while cutting the physical trials required roughly tenfold.",
    tags: [
      "Active Learning",
      "Uncertainty Estimation",
      "World Models",
      "VLM Planning",
      "Diffusion Models",
      "Franka Panda",
    ],
    status:
      "“Uncertainty-Guided Adaptation of World Models from VLM Plans for Robotic Tool Use” — submitted to CoRL 2026 (under review).",
  },
  {
    title: "Graph-Based Planning for Moving-Target TSP",
    lab: "CMU Robotics Institute — Biorobotics Lab",
    period: "Aug 2025 — Dec 2025",
    summary:
      "Graph-based path planning for Moving-Target Traveling Salesman Problems. Built and benchmarked RRT*, A*, and related sampling and search planners on top of OMPL to route an agent through sequences of moving targets from start to goal, studying how planner choice trades path optimality against planning time.",
    tags: ["OMPL", "RRT*", "A*", "Path Planning", "C++", "Python"],
  },
];
