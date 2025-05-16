import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";

export const revalidate = 60;
export default async function ProjectsPage() {
  const projects = [
{
      key: 17,
      title: "What's in my fridge?",
      description: 
        "What’s in My Fridge? is an AI-powered app that analyzes food photos to detect spoilage and estimate shelf life, helping users reduce waste and make smarter food choices.",      date: 1678742400000,
      views: 7,
      image: "/fridge.png",
      githubUrl: "https://github.com/Praneetha35/whats-in-my-fridge",
      stacks: ["Python", "Typescript", "Next.js", "Flask", "MongoDB", "OpenAI"],
    },
    {
      key: 16,
      title: "Medication Verification System",
      description: 
        "Medicine Verification System uses YOLOv11m for accurate real-time detection and classification of medication vials, improving safety and reducing human error. A robust pipeline—featuring YOLOv8 for data collection and Roboflow for annotation—ensures high performance on small-object detection in real-world settings.",
      date: 1678742400000,
      views: 7,
      image: "/vial.png",
      githubUrl: "https://github.com/Praneetha35/medication-verification-system",
      stacks: ["Python", "Numpy", "OpenCV", "YOLOv11m"],
    },
    {
      key: 15,
      title: "Flight Delay Prediction and Analysis",
      description: 
        "This project analyzes 7.2 million flight records from 2018 to explore flight performance metrics such as delays, cancellations, and diversions. The analysis utilizes R and various libraries for data manipulation, visualization, exploratory data analysis (EDA), and predictive modeling to identify trends in flight performance.",
      date: 1678742400000,
      views: 7,
      image: "/flight-prediction.png",
      githubUrl: "https://github.com/Praneetha35/flight_delay_prediction_and_analysis",
      stacks: ["R", "dplyr", "ggplot2", "caret", "pROC", "corrplot"],
    },
    {
      key: 14,
      title: "Credit Card Fraud Detection",
      description: 
        "This project applies the k-Nearest Neighbors (k-NN) algorithm to detect fraudulent credit card transactions. It explores the use of k-NN on a high-dimensional, imbalanced dataset, aiming to build a model that can accurately identify fraudulent transactions while minimizing both false positives and false negatives.",
      date: 1678742400000,
      views: 7,
      image: "/credit-card-fraud-detection.png",
      githubUrl: "https://github.com/Praneetha35/credit_card_fraud_detection_in_transaction_data_using_KNN",
      stacks: ["Python", "scikit-learn", "pandas", "NumPy", "matplotlib", "seaborn"],
    },
    {
      key: 13,
      title: "Health Hive",
      description: 
        "HealthHive is a social wellness app that connects users with health partners to set goals, track progress, and stay motivated. Featuring BeeFriend AI for personalized support and a gamified tree-growing system, it makes health journeys fun, accountable, and engaging.",
      date: 1678742400000,
      views: 7,
      image: "/health-hive.png",
      githubUrl: "https://github.com/Praneetha35/health-hive",
      stacks: ["TypeScript", "Next.js", "MongoDB Atlas", "Groq SDK", "llama3", "Material-UI"],
    },
    {
      key: 12,
      title: "Financial Sentiment Analysis",
      description: 
        "This project fine-tunes BERT for financial sentiment analysis using a combined FiQA and Financial PhraseBank dataset. It achieves 73% accuracy in classifying positive, negative, and neutral sentiments, showcasing its effectiveness in interpreting financial text for better investment insights and decision-making.",
      date: 1678742400000,
      views: 7,
      image: "/fin-bert.png",
      githubUrl: "https://github.com/Praneetha35/financial_sentiment_analysis",
      stacks: ["Python", "TensorFlow", "Pandas", "Scikit-learn"],

    },
    {
      key: 11,
      title: "Mindcraft",
      description: 
        "MindCraft is an AI-powered flashcard tool that helps students and lifelong learners effortlessly generate and organize study material. With smart flashcard creation and intuitive organization, MindCraft simplifies complex topics into digestible insights—now with seamless payment support for premium features via secure Stripe integration.",
      date: 1678742400000,
      views: 7,
      image: "/mindcraft.png",
      githubUrl: "https://github.com/Praneetha35/mindcraft",
      stacks: ["Next.js", "TypeScript", "Stripe", "OpenAI", "Material UI", "Firebase"],

    },
    {
      key: 10,
      title: "Med Assist",
      description: 
        "Med Assist is a focused emergency chatbot that delivers trusted, real-time guidance in a calm and reassuring tone. Designed solely to support users during stressful situations, it avoids distractions and speaks with clarity, empathy, and purpose.",
      date: 1678742400000,
      views: 7,
      image: "/med-assist.png",
      githubUrl: "https://github.com/Praneetha35/med-assist",
      stacks: ["Next.js", "TypeScript", "OpenAI", "Material UI", "Firebase"],

    },
    {
      key: 9,
      title: "Pantry Pal",
      description:
        "PantryPal is a Next.js app that uses GPT-4o and Firebase to track pantry items, auto-add groceries via image recognition, and suggest recipes based on available ingredients.",
      date: 1678742400000,
      views: 7,
      image: "/pantry-pal.png",
      githubUrl: "https://github.com/Praneetha35/pantry-pal",
      stacks: ["Next.js", "Firebase", "JavaScript", "OpenAI", "Material UI", "Vercel"],
    },
    {
      key: 8,
      title: "npm-form-checker",
      description:
        "form-checker is an easy-to-use form validation library that supports both synchronous and asynchronous validations, designed for seamless integration with React.",
      date: 1678742400000,
      views: 7,
      image: "/npm.jpeg",
      githubUrl: "https://github.com/Praneetha35/npm-form-checker",
      stacks: ["React", "npm-package", "Node JS"],
    },
    {
      key: 1,
      title: "Market Research Analysis Tool",
      description:
        "Contributed to a Market Research Analysis tool streamlines federal acquisition decision-making by leveraging technology for market research, vendor identification, and small business goal fulfillment",
      date: 1678742400000,
      views: 5,
      image: "/market-research.jpeg",
      stacks: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Elasticsearch",
        "Bootstrap",
      ],
    },
    {
      key: 2,
      title: "NFT Marketplace",
      description:
        "Contributed to building an NFT Marketplace right from scratch, focusing on full-stack development, smart contract creation, and integrations like automated notifications via Mailgun, enhancing user experience and reducing missed auction events",
      date: 1678742400000,
      views: 5,
      image: "/nft-image.jpg",
      stacks: [
        "React",
        "Nest.js",
        "MongoDB",
        "OpenZepplin",
        "Solidity",
        "IPFS",
        "jquery",
      ],
    },
    {
      key: 3,
      title: "BidVerse",
      description:
        "BidVerse is a Polygon based web3 platform revolutionizing hiring: seamlessly connecting companies with deserving candidates",
      date: 1678742400000,
      views: 5,
      image: "/bidverse.jpg",
      githubUrl: "https://github.com/Praneetha35/BidVerse",
      stacks: ["React", "Arweave", "OpenZepplin", "Solidity"],
    },
    {
      key: 4,
      title: "PixelPython",
      description: "PixelPython is a classic snake game using Pygame library",
      date: 1678742400000,
      views: 3,
      image: "/snake-game.jpg",
      githubUrl: "https://github.com/Praneetha35/pixel-python",
      stacks: ["Python", "PyGame"],
    },
    {
      key: 5,
      title: "SecureSign",
      description:
        "A web3 PDF uploader with IPFS storage and blockchain integration for cryptographic verification, ensuring secure file management",
      date: 1678742400000,
      views: 8,
      image: "/secure-sign.png",
      stacks: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Solidity",
        "OpenZepplin",
      ],
    },
    {
      key: 6,
      title: "My Digital Showcase",
      description:
        "I crafted a digital showcase - my portfolio website - to flaunt my projects and skills, because let's face it, my work deserves its own stage!",
      date: 1678742400000,
      views: 5,
      image: "/portfolio.png",
      githubUrl: "https://github.com/Praneetha35/my-digital-showcase",
      stacks: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      key: 7,
      title: "SkyWatch",
      description:
        "SkyWatch is a dynamic React JS weather app showcasing temperature, region, and local time display",
      date: 1678742400000,
      views: 7,
      image: "/weather.jpg",
      githubUrl: "https://github.com/Praneetha35/sky-watch",
      stacks: ["React"],
    },
  ];

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Some of the projects are from work and some are on my own time.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">
            {projects
              .filter((_, i) => i % 3 === 0)
              .map((project) => (
                <Card key={project.key}>
                  <Article project={project} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {projects
              .filter((_, i) => i % 3 === 1)
              .map((project) => (
                <Card key={project.key}>
                  <Article project={project} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {projects
              .filter((_, i) => i % 3 === 2)
              .map((project) => (
                <Card key={project.key}>
                  <Article project={project} />
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
