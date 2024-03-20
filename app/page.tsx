import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import Image from "next/image";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Praneetha
      </h1>

     <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
<div className="my-8 md:my-16 text-center animate-fade-in flex flex-col md:flex-row items-center">
  <Image
    className="rounded-full border-4 border-solid border-white shadow-lg hover:scale-150 transition-transform duration-300 transform-gpu hover:-rotate-6 hover:shadow-xl hover:grayscale-50 hover:brightness-110 hover:border-transparent transition-all mx-auto mt-0 mb-4 md:mr-2 mb-0"
    src="/cropped.png"
    width={120}
    height={120}
    alt="Picture of the author"
  />
  <h2 className="text-sm text-zinc-500 flex justify-center max-w-xs md:max-w-md">
    Hey there, I'm PraneethaChandraPrakash, your friendly neighborhood code ninja. 💻
    By day, I'm crafting digital marvels, fueled by endless cups of coffee ☕️ and a sprinkle of coding magic. ✨
    But when the pixels dim, you'll find me diving into gripping crime thrillers 📚, plotting my next hackathon heist 🕵️‍♀️, and exploring the culinary world 🍽️.<br/>
    Whether I'm coding or cooking, I'm always on the hunt for the perfect blend - whether it's lines of code or flavors in a dish. 🍳
    Look no further! I'm your trusted digital ally. 💪 Bring your innovation and ambition; every project with me is a thrilling adventure! 🚀
  </h2>
</div>

    </div>
  );
}
