/** Projects, with category tags for the filter and skills for hover-highlighting. */

export const CATEGORIES = [
  "All",
  "AI/ML",
  "Robotics",
  "Quant",
  "Data Science",
  "SWE",
] as const;

export type Category = (typeof CATEGORIES)[number];
export type ProjectCategory = Exclude<Category, "All">;

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  categories: ProjectCategory[];
  /** One-line summary shown while collapsed. */
  blurb: string;
  /** Full write-up shown when expanded. */
  description: string;
  skills: string[];
  links: ProjectLink[];
  award?: string;
  /** True for private repos — shown with a "Private repository" note instead of a link. */
  privateRepo?: boolean;
}

const GH = "https://github.com/SamEthanMathew";

export const projects: Project[] = [
  // ---------------- AI / ML ----------------
  {
    title: "FieldOps — Multi-Agent MCI Command System",
    categories: ["AI/ML", "SWE"],
    award: "Most Ambitious — CMU AI Agents Hackathon 2026",
    blurb: "Six concurrent agents coordinating a mass-casualty response through a shared blackboard.",
    description:
      "Six concurrent agents (Triage, Hospital Intel, Logistics, Overwatch, Orchestrator, Pre-Notification) coordinate through a shared blackboard state rather than direct calls, simulating a Pittsburgh bridge collapse. Benchmarked against a naive dispatcher: transport match score 0.964 vs 0.679, hospital-load Gini 0.179 vs 0.833. RAG over START/JumpStart/ICS protocol docs, graceful LLM degradation to deterministic fallbacks, and human-in-the-loop approval gating.",
    skills: ["Multi-Agent", "RAG", "LlamaIndex", "FastAPI", "Python", "React"],
    links: [{ label: "GitHub", href: `${GH}/fieldops` }],
  },
  {
    title: "SiteSafe — On-Device OSHA Violation Detector",
    categories: ["AI/ML"],
    award: "Gemma 4 Good Hackathon — Global Resilience Track",
    blurb: "Fine-tuned Gemma 4 for OSHA hazard detection from job-site photos, fully offline.",
    description:
      "Fine-tuned Gemma 4 E4B for OSHA “Fatal Four” hazard detection from job-site photos, running fully offline with CFR-cited violations and corrective actions. LoRA fine-tuning with Unsloth, on-device deployment via Ollama, and function calling against a SQLite knowledge base, with confidence calibration under edge/offline constraints.",
    skills: ["VLM Fine-Tuning", "LoRA", "Unsloth", "Ollama", "On-Device", "Python"],
    links: [{ label: "GitHub", href: `${GH}/sitesafe` }],
  },
  {
    title: "Sweep AI — Context Retrieval Optimization",
    categories: ["AI/ML", "SWE"],
    blurb: "Rebuilt a code-assistant's retrieval pipeline: 60× context efficiency, p50 latency 24ms → 7ms.",
    description:
      "Rebuilt the retrieval pipeline in a fork of Sweep AI, replacing a ~30K-token raw file dump with a four-stage intent-aware pipeline returning ~2.5K tokens. Measured on 30 queries: 60× context efficiency, wrong-file rate down 30.7 pp, p50 latency 24ms → 7ms. Tree-sitter AST parsing across 8 languages, symbol indexing, NL-to-identifier fuzzy matching, and per-intent token budgets.",
    skills: ["Tree-sitter", "RAG", "Retrieval Eval", "Intent Classification", "Python", "TypeScript"],
    links: [{ label: "GitHub", href: `${GH}/Sweep-AI-Context-Optimization` }],
  },
  {
    title: "Pebble — Local-First Windows AI Assistant",
    categories: ["AI/ML", "SWE"],
    blurb: "Taskbar-resident agent for calendar, email, and class schedule with a tiered autonomy layer.",
    description:
      "Taskbar-resident agent reading calendar, email, and class schedule; proposes briefings, triage, and study plans. Every outbound action passes an autonomy layer with first-time approval and an append-only audit log. OAuth across Gmail, Calendar, Canvas, GitHub, Notion, and Slack; provenance-marked persistent memory; multi-backend LLM abstraction; PyInstaller packaging.",
    skills: ["Agentic Planning", "OAuth", "Multi-LLM", "PyInstaller", "Python"],
    links: [
      { label: "Site", href: "https://samethanmathew.github.io/Pebble" },
      { label: "GitHub", href: `${GH}/Pebble` },
    ],
  },
  {
    title: "Donna — Offline Multimodal Voice Assistant (Jetson)",
    categories: ["AI/ML", "Robotics"],
    blurb: "Fully offline voice assistant for NVIDIA Jetson — wake word, STT, TTS, LLM, and face recognition.",
    description:
      "Fully offline voice assistant for NVIDIA Jetson: wake word, STT, TTS, LLM, face recognition, and a web UI with animated eyes and token-by-token streaming. Whisper.cpp STT, Piper TTS, Ollama local inference, person registration, semantic memory retrieval, and WebSocket streaming tuned for embedded compute.",
    skills: ["Whisper.cpp", "Piper TTS", "Ollama", "Edge / Jetson", "WebSockets", "Python"],
    links: [{ label: "GitHub", href: `${GH}/Donna` }],
  },
  {
    title: "manim — PDF → 3Blue1Brown-Style Video Pipeline",
    categories: ["AI/ML", "SWE"],
    blurb: "Turns a math PDF into a narrated, animated explainer video, scene by scene.",
    description:
      "Extracts math from a PDF, plans a curriculum, writes a script, generates Manim code per scene (RAG'd against the real 3b1b repo), renders in a sandbox, and stitches to MP4. LLM code generation with AST safety validation, sandboxed untrusted execution via modal.Sandbox, RAG over a code corpus, and a distributed Vercel + Supabase + Modal pipeline with BYOK encryption at rest.",
    skills: ["LLM Codegen", "Sandboxed Exec", "RAG", "Modal", "Supabase", "Python"],
    links: [{ label: "GitHub", href: `${GH}/manim` }],
  },
  {
    title: "AutoApply — Autonomous Application Pipeline",
    categories: ["AI/ML"],
    privateRepo: true,
    blurb: "Ingests internship postings and generates tailored LaTeX resumes + cover letters for one-key approval.",
    description:
      "Polls the cvrve Summer 2027 internships repo, generates tailored LaTeX PDF resumes and cover letters, and surfaces them in a TUI / Streamlit hub for one-keypress approval. End-to-end LLM automation (ingest → filter → research → tailor → render) with DeepSeek + Tavily integration, programmatic LaTeX generation, and a human-approval workflow.",
    skills: ["LLM Automation", "LaTeX", "TUI", "DeepSeek", "Python"],
    links: [],
  },
  {
    title: "PokerAI — Competition Research Codebase",
    categories: ["AI/ML"],
    blurb: "Full-stack agent for a non-standard Hold'em variant — from Monte Carlo play to solver + meta-learning stacks.",
    description:
      "Full-stack codebase for a non-standard Hold'em variant (27-card deck, 5 hole cards, mandatory revealed discard-to-2): a Gym-style environment, tournament runner, HTTP bot API, and many bot generations from tight Monte Carlo play to hybrid solver + meta-learning stacks. Game-theoretic agent design under imperfect information with self-play opponent pools and disciplined experiment archiving.",
    skills: ["Game Theory", "Monte Carlo", "RL", "Self-Play", "PyTorch", "Python"],
    links: [{ label: "GitHub", href: `${GH}/PokerAI-Hackathon-2026` }],
  },
  {
    title: "FixIt — Learned Simulation for 3D Object Repair",
    categories: ["AI/ML", "Robotics"],
    privateRepo: true,
    blurb: "Research workspace training LMs to repair 3D objects via search and backtracking.",
    description:
      "Research workspace built on the CVPR 2022 Fixing Malfunctional Objects codebase (Hong et al., MIT CSAIL) — the base for a Text-FixIt / FixIt RL direction training language models to repair 3D objects via search and backtracking. Point-cloud deep learning (PointNet++ instance segmentation, FlowNet3D scene flow), learned physical dynamics prediction, Hungarian matching, and CUDA extension builds.",
    skills: ["Point Cloud DL", "PointNet++", "Learned Dynamics", "CUDA", "C++", "Python"],
    links: [],
  },

  // ---------------- Robotics ----------------
  {
    title: "LOLA — Autonomous 3D-Mapping Rover",
    categories: ["Robotics"],
    award: "Build18 2026 — built in one week",
    blurb: "$150 mecanum rover that explores a room and reconstructs it in 3D from RGB video only.",
    description:
      "A $150 mecanum-drive rover on a Raspberry Pi 4 that autonomously explores a room and reconstructs it in 3D from RGB video only — no depth camera. LiDAR SLAM with point-to-line ICP (SVD closed-form pose solve), RRT path planning, autonomous exploration, CUT3R RGB-only 3D reconstruction, an onboard/offboard compute split, and 3D-printed mounts — all integrated under $150.",
    skills: ["LiDAR SLAM", "PL-ICP", "RRT", "3D Reconstruction", "Raspberry Pi", "Python"],
    links: [{ label: "GitHub", href: `${GH}/LOLA_Autonomous-3D-Mapping-Robot` }],
  },
  {
    title: "DubinsCar-Research — Sampling-Based Planning Under Curvature",
    categories: ["Robotics"],
    privateRepo: true,
    blurb: "Dubins ABIT* with custom samplers, procedural maps, and a batch comparison harness.",
    description:
      "A Dubins ABIT* implementation with custom edge and line samplers, procedural map generation, a batch comparison harness, and rigid-body dynamics. Asymptotically optimal sampling-based planning under nonholonomic (Dubins) constraints, with benchmark map generation and batch experiment tooling.",
    skills: ["ABIT*", "Dubins Curves", "Sampling-Based Planning", "CMake", "Python"],
    links: [],
  },
  {
    title: "mtvg_TSP — Bounded-Suboptimal Dubins TSP",
    categories: ["Robotics", "Data Science"],
    blurb: "Reproduction and extension of the WAFR 2024 Bounded-Suboptimal Dubins TSP paper.",
    description:
      "Reproduction and extension of the WAFR 2024 paper Bounded-Suboptimal Algorithms for the Dubins TSP (arXiv:2409.09852). Reimplemented the core algorithms, built A* and MT-TSP baselines, and ran reproducibility experiments across benchmark instances.",
    skills: ["Dubins TSP", "Bounded-Suboptimal Search", "A*", "Benchmarking", "Python"],
    links: [{ label: "GitHub", href: `${GH}/mtvg_TSP` }],
  },
  {
    title: "FTC-Autonomous — Pedro Pathing Tooling",
    categories: ["Robotics"],
    blurb: "Voltage-normalized characterization, an offline simulator, and auto-tuning on top of Pedro Pathing.",
    description:
      "Non-forking additions on top of Pedro Pathing v2.1.2: voltage-normalized characterization, a dynamics-accurate offline simulator that runs the unmodified follower headlessly, an auto-tuning optimizer, logging/replay, and vision-fused localization. Clean library extension without forking, with JUnit tests and a Gradle multi-module build.",
    skills: ["Control Systems", "Simulation", "Sensor Fusion", "Java", "JUnit"],
    links: [{ label: "GitHub", href: `${GH}/FTC-Autonomous` }],
  },
  {
    title: "speech-to-ros2 — Voice Control for LeRobot SO100",
    categories: ["Robotics", "AI/ML"],
    blurb: "Speech commands → ROS2 motion commands for a 5-DOF LeRobot SO100 arm.",
    description:
      "Maps speech commands to ROS2 motion commands for a 5-DOF LeRobot SO100 arm. ROS2 node and launch-file architecture, speech-recognition integration, natural-language-to-motion command mapping, and a colcon/CMake workspace.",
    skills: ["ROS2", "Speech Recognition", "Manipulator Control", "C++", "Python"],
    links: [{ label: "GitHub", href: `${GH}/speech-to-ros2` }],
  },
  {
    title: "LOLAv2 — RealSense Depth Tooling",
    categories: ["Robotics"],
    blurb: "Depth-camera tools and a 3D point-cloud visualizer for the Intel RealSense L515.",
    description:
      "Depth-camera tools and a 3D point-cloud visualizer for the Intel RealSense L515: pyrealsense2 pipeline configuration, depth-stream handling, point-cloud visualization, and driver/SDK version debugging.",
    skills: ["RealSense", "Point Cloud", "Depth Sensing", "Python"],
    links: [{ label: "GitHub", href: `${GH}/LOLAv2` }],
  },
  {
    title: "RedRobot — Embedded Robot Control",
    categories: ["Robotics", "SWE"],
    blurb: "Raspberry Pi Pico firmware with RF24 radio control.",
    description:
      "Raspberry Pi Pico firmware with RF24 radio control: embedded C++, microcontroller programming, RF radio protocols, and serial communication with cross-platform driver setup.",
    skills: ["Embedded C++", "Raspberry Pi Pico", "RF Radio", "Serial"],
    links: [{ label: "GitHub", href: `${GH}/RedRobot_TeamSwag25` }],
  },
  {
    title: "A* — From-Scratch Pathfinding",
    categories: ["Robotics"],
    blurb: "A* with pluggable heuristics and NetworkX parity checks.",
    description:
      "An A* implementation with pluggable heuristics (zero/Dijkstra, Manhattan, Octile, Euclidean), a generic neighbor API, and NetworkX parity checks — graph search from first principles with correctness verified against a reference implementation.",
    skills: ["A*", "Graph Search", "Heuristics", "NetworkX", "Python"],
    links: [{ label: "GitHub", href: `${GH}/A-Algorithm` }],
  },

  // ---------------- Quant ----------------
  {
    title: "Iris / Apex — Multi-Agent Trading Research System",
    categories: ["Quant", "AI/ML"],
    privateRepo: true,
    blurb: "Three generations of a paper-trading stack: mean reversion, momentum, microstructure, regime, risk, execution.",
    description:
      "Three generations (apex, apex_v3, agency) of a paper-trading research stack with specialized agents — mean reversion, momentum, microstructure, volatility, catalyst, regime detection, risk, portfolio construction, and execution — plus a backtester, an edge registry, and drift/safety monitoring. LLM-as-decision-engine architecture over Alpaca market data.",
    skills: ["Alpha Research", "Multi-Agent", "Backtesting", "Risk Management", "Alpaca", "Python"],
    links: [],
  },
  {
    title: "Kalshi Weather Bot — Prediction Market Trading",
    categories: ["Quant"],
    privateRepo: true,
    blurb: "Live Kalshi weather-market bot with bracket scoring, exposure limits, and heavy test coverage.",
    description:
      "A live Kalshi weather-market bot: bracket scoring, edge signals, entry bands, exit logic, exposure limits, liquidity checks, momentum, series discovery, and paper-trading metrics — with substantial unit-test coverage across strategy, exposure, liquidity, momentum, and position-state modules. Probabilistic bracket pricing and liquidity-aware execution, validated on paper before capital.",
    skills: ["Prediction Markets", "Signal Construction", "Position Sizing", "Testing", "Python"],
    links: [],
  },
  {
    title: "IMC Prosperity IV — Competition Research Workspace",
    categories: ["Quant"],
    privateRepo: true,
    blurb: "Market-making research with fast and conservative (pessimistic) fill-simulation backtest modes.",
    description:
      "An src/-layout research workspace: data loading, replay, backtests, strategies, and submission helpers, with two backtest modes — fast, and conservative (pessimistic passive fills with volume caps, Bernoulli skip, print-confirmation indexing). Realistic fill simulation and submission parity between backtest and live, with uv reproducibility and Ruff + pytest + pre-commit tooling.",
    skills: ["Market Making", "Backtesting", "Fill Modeling", "pytest", "Python"],
    links: [],
  },
  {
    title: "Prosperity Match Visualizer",
    categories: ["Quant", "SWE"],
    blurb: "Browser-based replay and PnL analysis for Prosperity IV match exports.",
    description:
      "Browser-based replay and analysis for Prosperity IV match exports — equity curves, product replay, and trade inspection — with an optional Node API that runs a Rust backtester. Financial data visualization, client-side processing of large match archives, PnL attribution, and polyglot service integration (TS ↔ Node ↔ Rust ↔ Python).",
    skills: ["Data Viz", "PnL Attribution", "React", "TypeScript", "Rust"],
    links: [
      { label: "Live", href: "https://prosperity-match-viz.vercel.app" },
      { label: "GitHub", href: `${GH}/prosperity-match-viz` },
    ],
  },
  {
    title: "UPROCalc — Leveraged ETF Price Prediction",
    categories: ["Quant", "Data Science"],
    privateRepo: true,
    blurb: "Production-shaped ML pipeline for leveraged-ETF prediction, with drift and data-quality monitoring.",
    description:
      "A production-shaped ML pipeline: ingest (market/macro/news) → feature builders → bucket model → calibration → evaluate → predict, with Prefect-style flows, a FastAPI service, a dashboard, and monitoring for data quality and model drift. Financial feature engineering across heterogeneous sources, probability calibration, and volatility-drag modeling with real MLOps.",
    skills: ["Feature Engineering", "Calibration", "MLOps", "Drift Detection", "FastAPI", "Python"],
    links: [],
  },
  {
    title: "Orbit Wars — Kaggle Competition Agent",
    categories: ["Quant", "AI/ML"],
    privateRepo: true,
    blurb: "Competitive RL/heuristic agent with anchor pools, competitive intel, and versioned postmortems.",
    description:
      "A competitive RL/heuristic agent with an autoloop harness, episode digests, opponent anchor pools from top ladder bots, competitive-intel docs, and versioned postmortems (V4, V37). Self-play and anchor-based evaluation, systematic opponent analysis, and disciplined local-vs-ladder discrepancy debugging under a live leaderboard.",
    skills: ["Competitive RL", "Self-Play", "Opponent Modeling", "Python"],
    links: [],
  },

  // ---------------- Data Science ----------------
  {
    title: "Live Match Win Probability (CMU 98-504)",
    categories: ["Data Science"],
    privateRepo: true,
    blurb: "In-play tennis win-probability modeling on the Match Charting Project dataset.",
    description:
      "Live tennis win-probability modeling on the Match Charting Project dataset, with a feature-report notebook, an experiments module, and a model-comparison runner. Sequential feature engineering from point-by-point data, model-comparison methodology, and reproducible notebooks generated from scripts with Quarto reporting.",
    skills: ["In-Play Modeling", "Feature Engineering", "Model Comparison", "Quarto", "Python"],
    links: [],
  },
  {
    title: "CMU Dining Waste Audit Tracker",
    categories: ["Data Science", "SWE"],
    blurb: "A deployed system for CMU Dining sustainability reps — weekly waste audits, scoring, and a public leaderboard.",
    description:
      "A production system for CMU Dining sustainability reps: weekly waste-segregation audits across locations with a private scoring engine and a public tier-based leaderboard, location-extensible without code changes. Scoring-engine design, Recharts visualization, and a Postgres schema with row-level security — with real users in production.",
    skills: ["Scoring Engine", "Postgres RLS", "Recharts", "TypeScript"],
    links: [{ label: "GitHub", href: `${GH}/dining-audit-tracker` }],
  },

  // ---------------- SWE ----------------
  {
    title: "plonky3-crypto — ZK Cryptographic Gadgets",
    categories: ["SWE"],
    privateRepo: true,
    blurb: "Port of JumpCrypto's plonky2-crypto from gate-based PLONK to trace-based STARK/AIR.",
    description:
      "A port of JumpCrypto's plonky2-crypto from Plonky2 (gate-based PLONK) to Plonky3 (trace-based STARK/AIR) — a fundamentally different proof backend, not a syntax translation. SHA-256, Keccak-256, Poseidon2, BigUint arithmetic, HMAC, ChaCha20, and Merkle inclusion proofs, with a working double_sha256 example reproducing the original's fixture.",
    skills: ["Rust", "STARK / AIR", "ZK Circuits", "Cryptography", "BigInt"],
    links: [],
  },
  {
    title: "Confess — Anonymous Confession App",
    categories: ["SWE"],
    privateRepo: true,
    blurb: "Full-stack Next.js app with custom auth, realtime subscriptions, and privacy-by-design.",
    description:
      "A full-stack Next.js 15 / React 19 app with custom auth (bcrypt), real-time subscriptions, Postgres row-level security, and a mobile-first, privacy-by-design architecture.",
    skills: ["Next.js", "Supabase", "Postgres RLS", "Realtime", "TypeScript"],
    links: [],
  },
  {
    title: "BizGrow — Gamified AI Micro-Loan Incubator",
    categories: ["SWE", "AI/ML"],
    award: "HackCMU",
    blurb: "Quests → XP → loan eligibility, with explainable scoring and admin review.",
    description:
      "A gamified micro-loan platform: XP, levels, and leaderboards feed an explainable 0–100 eligibility score, with LLM generation guarded by safe fallback templating, i18n/localization, admin review dashboards, and email-OTP auth on Next.js 14 + Supabase.",
    skills: ["Next.js", "TypeScript", "Supabase", "Gamification", "LLM"],
    links: [
      { label: "Live", href: "https://bizgrow-psi.vercel.app/" },
      { label: "GitHub", href: `${GH}/bizgrow` },
    ],
  },
  {
    title: "PulseQuest — Haptics-First Maze Game",
    categories: ["SWE"],
    blurb: "A ~26KB accessible maze driven by native phone vibration and procedural audio.",
    description:
      "An accessibility-oriented maze exploration driven by native phone vibration and procedural audio, at ~26KB total, with a Capacitor iOS build for Taptic Engine access. Web Audio API procedural sound synthesis, native haptics, and aggressive payload optimization for non-visual play.",
    skills: ["Web Audio API", "Capacitor", "Haptics", "iOS", "JavaScript"],
    links: [{ label: "GitHub", href: `${GH}/PulseQuest` }],
  },
];
