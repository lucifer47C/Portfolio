import {
  Code,
  Cloud,
  Server,
  Linkedin,
  Github,
  Mail,
  Phone,
  type LucideIcon,
  Book,
  Git,
  GitBranch,
  Container,
  Shield,
  Gamepad2,
  Award,
  Terminal,
} from "lucide-react";
import { PlaceHolderImages } from "./placeholder-images";
import { AwsIcon, AzureIcon, DockerIcon, KubernetesIcon, LinuxIcon, MysqlIcon, PythonIcon, TerraformIcon, AndroidIcon } from "@/components/icons";

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#internships", label: "Internships" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
  { href: "https://example.com", label: "Terminal", icon: Terminal, external: true },
];

export const SOCIAL_LINKS: {
  name: string;
  url: string;
  icon: LucideIcon;
  value: string;
}[] = [
  {
    name: "Email",
    url: "mailto:steveyadav.2002newdelhi@gmail.com",
    icon: Mail,
    value: "steveyadav.2002newdelhi@gmail.com",
  },
  {
    name: "Phone",
    url: "tel:+919891157854",
    icon: Phone,
    value: "+91 98911 57854",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/steve-yadav",
    icon: Linkedin,
    value: "linkedin.com/in/steve-yadav",
  },
  {
    name: "GitHub",
    url: "https://github.com/lucifer47C",
    icon: Github,
    value: "github.com/lucifer47C",
  },
  {
    name: "Medium",
    url: "https://medium.com/@steveyadav.2002newdelhi",
    icon: Book,
    value: "medium.com/@steveyadav.2002newdelhi",
  },
];

const getImageUrl = (id: string) => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  return image
    ? { url: image.imageUrl, hint: image.imageHint }
    : { url: "https://picsum.photos/seed/placeholder/600/400", hint: "placeholder" };
};

export const about = {
  name: "Steve Yadav",
  tagline: "Cloud and DevOps Engineer",
  introduction:
    "I’m a Cloud and DevOps Engineer with hands-on experience in AWS and Azure, specializing in building scalable, secure, and reliable application deployments. My expertise includes CI/CD pipelines, Docker, Kubernetes, and infrastructure automation, backed by an AWS Solutions Architect certification.\n\nBeyond engineering reliable cloud systems, I’m deeply interested in the future of AI and quantum computing and how these technologies will transform cloud security and performance. My goal is to keep pushing boundaries by combining strong cloud foundations with forward-looking innovation.",
};

export const projects: {
  title: string;
  year: string;
  description: string;
  technologies: string[];
  links: {
    label: string;
    href: string;
    icon: LucideIcon;
  }[];
  image: { url: string; hint: string };
}[] = [
  {
    title: "DevOps QR Code",
    year: "2025",
    description: "The goal is to get hands-on with DevOps practices like containerization, CI/CD and monitoring.",
    technologies: ["CI/CD", "Docker", "AWS", "Terraform", "Kubernetes", "DevOps", "Git/Github", "Python", "FastAPI"],
    links: [
      { label: "GitHub", href: "https://github.com/lucifer47C/DevOps-Practice", icon: Github },
      { label: "Medium", href: "#", icon: Book },
    ],
    image: getImageUrl("project-devops-qr"),
  },
  {
    title: "TrackNClassify",
    year: "2024",
    description:
      "A multilayered authentication system reducing unauthorized access by 80%, with QR code and RFID integration. Deployed on the cloud with 99% uptime and IoT components.",
    technologies: ["MERN Stack", "MongoDB", "Express.js", "React", "Node.js", "IoT", "Team Project"],
    links: [
      { label: "GitHub", href: "https://github.com/lucifer47C/TrackNClassify-Major", icon: Github },
      { label: "Medium", href: "#", icon: Book },
    ],
    image: getImageUrl("project-secure-vault"),
  },
  {
    title: "FitZee",
    year: "2024",
    description:
      "An Android app for BMI calculation and meal calorie estimation through image recognition. Features a user interface created with Java and XML.",
    technologies: ["Android Studio", "Java", "XML", "Firebase", "Team Project"],
    links: [
      { label: "GitHub", href: "https://github.com/lucifer47C/FitZee-Minor", icon: Github },
      { label: "Medium", href: "#", icon: Book },
    ],
    image: getImageUrl("project-devops-pipeline"),
  },
  {
    title: "Cloud Security and Management",
    year: "2024",
    description:
      "A university assignment focusing on cloud security principles and infrastructure management using modern DevOps tools.",
    technologies: ["Docker", "AWS", "Cloud", "Terraform", "Kubernetes"],
    links: [
      { label: "GitHub", href: "#", icon: Github },
      { label: "Medium", href: "#", icon: Book },
    ],
    image: getImageUrl("project-cloud-orchestrator"),
  },
  {
    title: "Cloud Resume Challenge",
    year: "2022",
    description:
      "The main goal is to get hands-on with some cloud technologies like Lambda, IAM etc.",
    technologies: ["Docker", "AWS", "Cloud", "Terraform", "GitHub Actions"],
    links: [
      { label: "GitHub", href: "https://github.com/lucifer47C/The-Cloud-Resume-Challenge", icon: Github },
      { label: "Medium", href: "https://medium.com/@steveyadav.2002newdelhi/how-i-built-my-cloud-resume-challenge-on-aws-with-terraform-ci-cd-and-a-serverless-visitor-f64cf7a5414d", icon: Book },
    ],
    image: getImageUrl("project-cloud-orchestrator"),
  },
  {
    title: "Raspberry Pi NAS",
    year: "2023",
    description:
      "An experiment turning a Raspberry Pi into a Network Attached Storage (NAS) using OpenMediaVault for private cloud storage with scalable file sharing.",
    technologies: ["Raspberry Pi", "OpenMediaVault", "NAS"],
    links: [
        { label: "GitHub", href: "#", icon: Github },
        { label: "Medium", href: "https://medium.com/@steveyadav.2002newdelhi/how-i-turned-a-raspberry-pi-into-a-nas-for-better-and-cheaper-file-sharing-1f7ee962aa1f", icon: Book },
    ],
    image: getImageUrl("project-nebula-racer"),
  },
];

export const internships: {
  company: string;
  role: string;
  duration: string;
  achievements: string[];
}[] = [
  {
    company: "IBM",
    role: "Project Intern",
    duration: "June 2024 – Jul 2024",
    achievements: [
      "Built a web application to implement a disaster recovery solution, ensuring data availability and resilience.",
      "Achieved 100% deployment on AWS using services like S3, EC2, CloudWatch, and RDS.",
      "Engineered the solution for 0% human intervention for disaster recovery.",
    ],
  },
  {
    company: "DRDO",
    role: "Trainee Intern",
    duration: "June 2024 – Jul 2024",
    achievements: [
      "Dived into Quantum Computing, exploring IBM Quantum Simulator and Qiskit.",
      "Implemented quantum circuits and algorithms like Shor's and Grover's search algorithm.",
      "Learned about various quantum algorithms and their applications.",
    ],
  },
  {
    company: "Hara Jeevan",
    role: "Intern",
    duration: "June 2022 – Jul 2022",
    achievements: [
      "Managed 100% of their website: harajeevan.org.",
      "Manually migrated the entire website without the help of any plugins.",
      "Worked with WordPress, MySQL, HTML, CSS, etc.",
    ],
  },
];

type Skill = {
  name: string;
  level: "Expert" | "Advanced" | "Intermediate";
};

export const skills: {
  category: string;
  icon: LucideIcon;
  list: Skill[];
}[] = [
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    list: [
      { name: "AWS", level: "Advanced" },
      { name: "Azure", level: "Intermediate" },
      { name: "Docker", level: "Expert" },
      { name: "Terraform", level: "Intermediate" },
      { name: "Kubernetes", level: "Advanced" },
      { name: "Git/GitHub", level: "Expert" },
    ],
  },
  {
    category: "Programming",
    icon: Code,
    list: [
      { name: "Python", level: "Expert" },
      { name: "Java", level: "Advanced" },
      { name: "MySQL", level: "Advanced" },
      { name: "Android", level: "Intermediate" },
      { name: "Linux", level: "Advanced" },
    ],
  },
];
