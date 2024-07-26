import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";

export const revalidate = 60;
export default async function ProjectsPage() {
  const projects = [
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
