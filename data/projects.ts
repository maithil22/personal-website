export type ProjectCategory = "Systems" | "AI/ML" | "Full-Stack";

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: ProjectCategory;
  links: {
    github?: string;
    paper?: string;
    demo?: string;
  };
}

export const projects: Project[] = [
  // ── Systems ─────────────────────────────────────────────────────────────────
  {
    id: "alps-scheduler",
    title: "ALPS Serverless Scheduler via Google ghOSt",
    description:
      "Custom implementation of the ALPS (Adaptive Learning, Priority Scheduler) policy using the Google ghOSt userspace framework on CloudLab (Intel Xeon Gold). Mixed-workload microbenchmarking revealed a critical 'blind spot' where I/O-bound tasks induce starvation for CPU-bound functions, increasing their tail latency by 15% vs. Linux CFS baseline.",
    tags: ["Systems", "Scheduling", "C++", "ghOSt", "CloudLab", "Linux"],
    category: "Systems",
    links: {
      paper:
        "https://drive.google.com/file/d/19-yoaXYyRrKn8xAtCDP5N8HJaWXGrBb6/view?usp=drive_link",
    },
  },
  {
    id: "ebpf-cfs-analysis",
    title: "eBPF-Driven Analysis of Linux CFS",
    description:
      "Low-latency kernel instrumentation using eBPF/bpftrace to directly trace pick_next_task_fair() in the Linux Completely Fair Scheduler. Validated CFS proportional fairness by measuring vruntime differentials across three priority levels, confirming that the highest-priority process (nice -15) received the longest time slices.",
    tags: ["Linux", "eBPF", "bpftrace", "Kernel", "Systems", "C"],
    category: "Systems",
    links: {},
  },

  // ── AI/ML ────────────────────────────────────────────────────────────────────
  {
    id: "salesforce-2fa-hackathon",
    title: "CV-Based 2FA System — Salesforce Hackathon Winner",
    description:
      "Won the Salesforce Intern Hackathon by building a computer vision-based two-factor authentication system in Python using OpenCV and TensorFlow, eliminating reliance on external hardware or mobile tokens. Engineered a facial recognition module with reflected light-based liveness detection to mitigate deepfake and photo spoofing attacks.",
    tags: ["Python", "OpenCV", "TensorFlow", "Computer Vision", "Security"],
    category: "AI/ML",
    links: {
      demo: "https://drive.google.com/file/d/19IU5DIvpNQktDLeBlNklmGnFKgcGm2Ei/view?usp=sharing",
    },
  },
  {
    id: "leaf-disease-detection",
    title: "CNN Leaf Disease Detection with CLAHE",
    description:
      "Enhanced plant leaf disease classification by applying CLAHE on the luminance channel (OpenCV) for better feature extraction. Trained Keras models on the augmented PlantVillage dataset (38 classes), benchmarking against a modified VGG-16 with CLAHE and segmentation. Achieved 98.5% accuracy, comparable to AlexNet.",
    tags: ["Python", "Keras", "OpenCV", "CNN", "CLAHE", "Computer Vision"],
    category: "AI/ML",
    links: {
      paper:
        "https://drive.google.com/file/d/1NfUtjMJ2xLereFxBjWSBYTnUjVWt2WAf/view?usp=sharing",
      github: "https://github.com/maithil22/leaf_disease_detection",
    },
  },
  {
    id: "fake-news-gnn",
    title: "Fake News Detection via Geometric Deep Learning",
    description:
      "Graph Neural Network to classify news as fake or real based on its propagation structure in a social network, independent of URL content. Demonstrated that propagation-based approaches complement content-based methods, enabling accurate detection after ~7 hours of spread. Achieved 91.7% ROC AUC on the Kaggle Twitter dataset.",
    tags: ["Python", "GNN", "Graph ML", "PyTorch", "NLP", "Social Networks"],
    category: "AI/ML",
    links: {},
  },

  // ── Full-Stack ───────────────────────────────────────────────────────────────
  {
    id: "personal-portfolio",
    title: "Personal Portfolio Website",
    description:
      "High-performance portfolio built with Next.js 15 App Router, TypeScript, and Tailwind CSS. Features a filterable project gallery aggregating work across Systems, AI/ML, and Full-Stack domains, with Framer Motion animations and a dark-first design system.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "Full-Stack",
    links: {
      github: "https://github.com/maithil22",
    },
  },
];
