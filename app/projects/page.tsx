import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Eye } from "lucide-react";

export const revalidate = 60;
export default async function ProjectsPage() {

  const mockProjects = [
    {
      key: 1,
      title: "Market Research Analysis Tool",
      description:
        "Contributed to a Market Research Analysis tool streamlines federal acquisition decision-making by leveraging technology for market research, vendor identification, and small business goal fulfillment",
      date: 1678742400000,
      views: 5,
    },
    {
      key: 2,
      title: "NFT Marketplace",
      description:
        "Contributed to building an NFT Marketplace right from scratch, focusing on full-stack development, smart contract creation, and integrations like automated notifications via Mailgun, enhancing user experience and reducing missed auction events",
      date: 1678742400000,
      views: 5,
    },
    {
      key: 3,
      title: "BidVerse",
      description:
        "BidVerse is a Polygon based web3 platform revolutionizing hiring: seamlessly connecting companies with deserving candidates",
      date: 1678742400000,
      views: 5,
    },
    {
      key: 4,
      title: "My Digital Showcase",
      description:
        "I crafted a digital showcase - my portfolio website - to flaunt my projects and skills, because let's face it, my work deserves its own stage!",
      date: 1678742400000,
      views: 5,
    },
    {
      key:5,
      title: "SecureSign",
      description:
        "A web3 PDF uploader with IPFS storage and blockchain integration for cryptographic verification, ensuring secure file management",
      date: 1678742400000,
      views: 8,
    },
    {
      key: 6,
      title: "PixelPython",
      description:
        "PixelPython is a classic snake game using Pygame library",
      date: 1678742400000,
      views: 3,
    },
    {
      key: 7,
      title: "SkyWatch",
      description:
        "SkyWatch is a dynamic React JS weather app showcasing temperature, region, and local time display",
      date: 1678742400000,
      views: 7,
    }
  ];
  // const views = (
  //   await redis.mget<number[]>(
  //     ...allProjects.map((p) => ["pageviews", "projects", p.slug].join(":"))
  //   )
  // ).reduce((acc, v, i) => {
  //   acc[allProjects[i].slug] = v ?? 0;
  //   return acc;
  // }, {} as Record<string, number>);

  const featured = mockProjects.find((project) => project.key === 1)!;
  const top2 = mockProjects.find((project) => project.key === 2)!;
  const top3 = mockProjects.find((project) => project.key === 3)!;
  const sorted = mockProjects
    // .filter((p) => p.published)
    .filter(
      (project) =>
        project.key !== featured.key &&
        project.key !== top2.key &&
        project.key !== top3.key
    )
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime()
    );

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
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <Card>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  {/* <div className="text-xs text-zinc-100">
                    {featured.date ? (
                      <time dateTime={new Date(featured.date).toISOString()}>
                        {Intl.DateTimeFormat(undefined, {
                          dateStyle: "medium",
                        }).format(new Date(featured.date))}
                      </time>
                    ) : (
                      <span>SOON</span>
                    )}
                  </div> */}
                  {/* <span className="flex items-center gap-1 text-xs text-zinc-500">
                    <Eye className="w-4 h-4" />{" "}
                    {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                      featured.views
                    )}
                  </span> */}
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  {featured.title}
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {featured.description}
                </p>
                {/* <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div> */}
              </article>
          </Card>

          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            {[top2, top3].map((project, k) => (
              <Card key={k}>
                <Article project={project} views={project.views} />
              </Card>
            ))}
          </div>
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 0)
              .map((project) => (
                <Card key={project.key}>
                  <Article project={project} views={project.views} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 1)
              .map((project) => (
                <Card key={project.key}>
                  <Article project={project} views={project.views} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 2)
              .map((project) => (
                <Card key={project.key}>
                  <Article project={project} views={project.views} />
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
