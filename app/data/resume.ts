/** Resume content — drives both the /resume page and the generated PDF. */

export interface ResumeEntry {
  title: string;
  org?: string;
  meta: string; // date / location line, right-aligned
  bullets: string[];
}

export const resume = {
  name: "Sam Ethan Mathew",
  contacts: [
    { label: "samethanmathew.work@gmail.com", href: "mailto:samethanmathew.work@gmail.com" },
    { label: "(669) 269-5144", href: "tel:+16692695144" },
    { label: "github.com/SamEthanMathew", href: "https://github.com/SamEthanMathew" },
    { label: "linkedin.com/in/sam-mathew", href: "https://linkedin.com/in/sam-mathew" },
  ],
  education: {
    school: "Carnegie Mellon University",
    meta: "Pittsburgh, PA · May 2028",
    degree: "B.S. in Statistics & Machine Learning, Minor in Artificial Intelligence",
    coursework:
      "Operating Systems Concepts, Data Structures, Principles of Imperative Computation, Linear Algebra, Probability & Random Processes, Optimization, Deep Learning, Applied Machine Learning, Discrete Mathematics",
    honors:
      "MIT Hard Mode (1 of 100 global invitees), CMU ProdHacks (1st Place), Jane Street Estimathon (1st Place)",
  },
  experience: [
    {
      title: "Robotics Learning Researcher",
      org: "OpenDroids",
      meta: "San Francisco, CA · May 2026 — Present",
      bullets: [
        "Ported the R2D3 dual-arm mobile manipulator from Gazebo into NVIDIA Isaac Sim 6.0, rebuilding its full URDF/USD model with PhysX drives, so the team could run high-fidelity contact and whole-body experiments in sim before touching hardware.",
        "Built a Python control SDK for the ported robot, integrating Lula inverse kinematics, motion planning, and real-time collision checking behind one clean interface that runs a complete navigate, grasp, and place mission from a single reusable API call.",
      ],
    },
    {
      title: "Robot Learning Researcher",
      org: "CMU Robotics Institute, R-PAD Lab (advised by Prof. David Held)",
      meta: "Pittsburgh, PA · Jan 2026 — Present",
      bullets: [
        "Lifted tool-use success from 9% to 100% on a real Franka Panda arm, proven over 20 held-out trials on hardware with no sim-to-real transfer, by adapting a learned action-conditioned diffusion world model online from the outcomes it observed.",
        "Cut the physical interaction needed to learn a new tool tenfold while doubling success, by using epistemic uncertainty from a five-model diffusion ensemble to decide which vision-language model plans were worth executing on the real robot arm.",
      ],
    },
    {
      title: "Systems & Data Infrastructure Engineering Intern",
      org: "Solo Tech",
      meta: "Remote · May 2025 — Aug 2025",
      bullets: [
        "Cut real-time telemetry latency by 35% and log-processing runtime by 60%, by rewriting the services in low-latency C++ and Python and adding automated signal-quality checks that caught corrupt data early, before it could reach the production pipeline.",
        "Shipped releases 50% more often across a full summer of production deployments, by building Docker containerization and C++ unit-test CI/CD pipelines that caught broken builds automatically and blocked them from merging before review.",
      ],
    },
  ] as ResumeEntry[],
  projects: [
    {
      title: "Real-Time Voice-Controlled Robot Agent",
      org: "C++, Python, ROS2, Linux",
      meta: "Aug 2025",
      bullets: [
        "Converted a spoken command into physical motion in under 250 milliseconds, timed in live tests on real robot hardware, by building a C++ and Python control pipeline that maps recognized intent onto a structured, validated motion command.",
        "Ran one shared control interface across two different robot platforms with zero code changes, by validating every command against explicit safety limits and a deterministic fail-safe fallback path before the controller could command any motion.",
      ],
    },
    {
      title: "Multi-Threaded Concurrent Storage Engine",
      org: "C++20, Linux, POSIX",
      meta: "Jan 2026",
      bullets: [
        "Cut worst-case (P99) write latency by 45% under heavy multithreaded load, by engineering a concurrent LSM-tree storage engine in C++20 with lock-free write buffers, memory-mapped file I/O, and Bloom-filter key lookups on the read path.",
        "Debugged a write-throughput ceiling nobody could explain, by profiling the live system on Linux with perf and eBPF kernel traces, tracing it to disk-page allocation logic and clearing it with a thread-safe, fully retuned buffer pool manager.",
      ],
    },
    {
      title: "AI Code-Search Engine (Sweep-AI)",
      org: "C++, Python, Tree-sitter",
      meta: "Jan 2026",
      bullets: [
        "Dropped median code-symbol lookup from 24ms to 7ms while raising recall to 80.6%, by rebuilding a coding assistant's search layer in C++ around a Tree-sitter parser and compact 50-token summaries of every function and type in the repository.",
        "Shrank the context sent to the model 12×, from 30K to 2.5K tokens, and cut wrong-file retrievals by over 30 percentage points, by adding sub-millisecond intent classification across six task types and a strict, enforced per-query token budget.",
      ],
    },
  ] as ResumeEntry[],
  publications: [
    {
      title:
        "Uncertainty-Guided Adaptation of World Models from VLM Plans for Robotic Tool Use",
      org: "Submitted to the 10th Conference on Robot Learning (CoRL 2026) — Under review",
      meta: "CoRL 2026",
      bullets: [
        "Doubled real-world manipulation success while cutting the physical trials required tenfold, by pairing a vision-language planner with a learned action-conditioned world model that predicts each plan's outcome before the arm ever executes it on hardware.",
        "Designed the dual-role uncertainty strategy at the core of the method, by having a five-model diffusion ensemble both select informative plans for training and gate unreliable plans at execution, adapting the world model from about 20 plans per task.",
      ],
    },
  ] as ResumeEntry[],
  leadership: [
    {
      title: "Head of AI, ScottyLabs (Labrador Incubator)",
      org: "Carnegie Mellon University",
      meta: "2025 — Present",
      bullets: [
        "Set the technical direction for a student-run software organization's AI arm, running design and code reviews for every team inside its Labrador incubator and translating hard engineering trade-offs into clear terms a non-specialist can act on.",
      ],
    },
  ] as ResumeEntry[],
  skills: [
    { group: "Languages", items: "Python, C++ (C++14/17/20), C, CUDA, Java, SQL, Go" },
    {
      group: "Robotics & ML",
      items:
        "PyTorch, Diffusion Models, World Models, Vision-Language Models, Reinforcement Learning, ROS2, NVIDIA Isaac Sim, Gazebo, URDF/USD, Inverse Kinematics, Motion Planning, State Estimation, Franka Panda",
    },
    {
      group: "Systems",
      items:
        "Linux, Multithreading, Lock-Free Concurrency, Real-Time IPC, Debugging & Profiling (perf, eBPF), Git, CI/CD, Docker, Unit Testing",
    },
    { group: "Math", items: "Linear Algebra, Optimization, Probability" },
  ],
};
