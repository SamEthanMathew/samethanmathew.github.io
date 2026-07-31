/** Experience entries, newest first (by start date). Edit freely. */

export interface Experience {
  /** Short label shown in the sticky index on the left. */
  short: string;
  company: string;
  position: string;
  start: string;
  end: string;
  description: string;
  skills: string[];
}

export const experiences: Experience[] = [
  {
    short: "OpenDroids",
    company: "OpenDroids",
    position: "Robotics Simulation Engineer",
    start: "May 2026",
    end: "Aug 2026",
    description:
      "Ported the R2D3 dual-arm mobile manipulator into NVIDIA Isaac Sim and built the Python control SDK that drives it, giving the team a reliable simulation-first workflow for testing manipulation behaviors before hardware.",
    skills: ["NVIDIA Isaac Sim", "Python", "ROS2", "URDF", "Simulation"],
  },
  {
    short: "R-PAD Lab",
    company: "CMU Robotics Institute — R-PAD Lab",
    position: "Undergraduate Researcher",
    start: "Dec 2025",
    end: "Present",
    description:
      "Uncertainty-guided world-model adaptation for robotic tool use under Prof. David Held. Built the pipeline that lets a policy recognize when its own predictions are about to fail and adapt online — validated on a real Franka Panda arm. Paper submitted to CoRL 2026.",
    skills: ["PyTorch", "World Models", "Franka Panda", "Robot Learning", "Python"],
  },
  {
    short: "ScottyLabs",
    company: "ScottyLabs — Labrador Incubator",
    position: "Head of AI",
    start: "Aug 2025",
    end: "Present",
    description:
      "Lead AI mentorship for the Labrador Incubator, helping student teams take projects from idea to something that actually runs — scoping models, unblocking builds, and reviewing what ships.",
    skills: ["Mentorship", "LLMs", "Product", "Leadership"],
  },
  {
    short: "Biorobotics Lab",
    company: "CMU Robotics Institute — Biorobotics Lab",
    position: "Undergraduate Researcher",
    start: "Aug 2025",
    end: "Dec 2025",
    description:
      "Graph-based path planning for Moving-Target Traveling Salesman Problems at the Biorobotics Lab. Built and benchmarked RRT*, A*, and related sampling and search planners on top of OMPL to route an agent through sequences of moving targets from start to goal, studying how planner choice trades path optimality against planning time.",
    skills: ["OMPL", "RRT*", "A*", "Path Planning", "C++", "Python"],
  },
  {
    short: "Solo Tech",
    company: "Solo Tech",
    position: "AI Engineer",
    start: "May 2025",
    end: "Aug 2025",
    description:
      "Built a speech-to-ROS2 pipeline that turns free-form speech into structured robot commands through generalized reasoning — letting many different robots be controlled with plain text. Paired YOLO-World open-vocabulary perception with LLM / SLM / VLM reasoning to ground instructions in the scene, and validated the system on an SO-101 robot arm.",
    skills: ["YOLO-World", "ROS2", "LLMs", "VLMs", "SLMs", "SO-101 Arm", "Python"],
  },
];
