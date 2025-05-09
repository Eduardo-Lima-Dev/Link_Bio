"use client"

import { Globe, Github, Linkedin, Instagram, Music, Download } from "lucide-react";
import Image from "next/image";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { 
  SiTypescript, 
  SiJavascript, 
  SiKotlin, 
  SiFlutter, 
  SiNodedotjs, 
  SiNextdotjs, 
  SiReact, 
  SiTailwindcss,
  SiTiktok
} from '@icons-pack/react-simple-icons';
import { motion } from "framer-motion";

const technologies = [
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiKotlin, name: "Kotlin" },
  { icon: SiFlutter, name: "Flutter" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiReact, name: "React" },
  { icon: SiTailwindcss, name: "Tailwind" }
];

export default function Home() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#000",
            },
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: "#a855f7",
            },
            links: {
              color: "#a855f7",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
            },
            opacity: {
              value: 0.5,
            },
            size: {
              value: { min: 1, max: 3 },
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
          },
        }}
      />
      <main className="relative z-10 min-h-screen p-4 max-w-2xl mx-auto space-y-6">
        {/* Profile Header */}
        <div className="flex items-center bg-black/20 px-8 py-6 rounded-2xl backdrop-blur-sm">
          <div className="rounded-2xl p-[2px] bg-gradient-to-r from-purple-600/50 to-purple-400/50 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
            <Image
              src="/assets/eduardo.jpg"
              alt="Profile"
              width={64}
              height={64}
              className="rounded-xl object-cover"
            />
          </div>
          
          <div className="flex-1 flex justify-center">
            <div className="text-center">
              <h1 className="text-2xl font-bold">Eduardo Dev</h1>
              <p className="text-zinc-400">Desenvolvedor Web & Mobile</p>
            </div>
          </div>

          <div className="rounded-2xl p-[2px] bg-gradient-to-r">
            <Image
              src="/assets/logo.png"
              alt="Logo"
              width={80}
              height={80}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-black/20 backdrop-blur-sm px-8 py-6 rounded-2xl overflow-hidden">
          <motion.div 
            className="flex"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                duration: 20,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              },
            }}
          >
            {/* Primeira sequência */}
            <div className="flex gap-12 mr-12">
              {technologies.map((Tech, index) => (
                <div key={index} className="flex flex-col items-center gap-2 min-w-[80px]">
                  <Tech.icon size={24} className="text-purple-400" />
                  <span className="text-sm text-zinc-400 whitespace-nowrap">{Tech.name}</span>
                </div>
              ))}
            </div>
            {/* Segunda sequência para loop contínuo */}
            <div className="flex gap-12">
              {technologies.map((Tech, index) => (
                <div key={`repeat-${index}`} className="flex flex-col items-center gap-2 min-w-[80px]">
                  <Tech.icon size={24} className="text-purple-400" />
                  <span className="text-sm text-zinc-400 whitespace-nowrap">{Tech.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="bg-black/40 p-[2px] rounded-2xl bg-gradient-to-r from-purple-600/50 to-purple-400/50 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
          <div className="bg-black/40 px-8 py-6 rounded-2xl">
            <p className="text-zinc-300 text-center leading-relaxed">
              Sou apaixonado por música, café e Linux, e estou sempre em busca de aprender coisas novas e dar uma força para a comunidade tech. No TikTok, compartilho minha jornada de desenvolvimento com muita diversão e dicas práticas, ajudando outros devs a explorar esse universo incrível do código. Vem se juntar a essa aventura cheia de criatividade, aprendizado e, claro, muitas xícaras de café!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <a 
            href="https://github.com/Eduardo-Lima-Dev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray/20 backdrop-blur-sm p-8 rounded-2xl flex flex-col items-center justify-center gap-4 hover:bg-purple-600/20 transition-colors group"
          >
            <Github className="w-12 h-12 group-hover:text-purple-400 transition-colors" />
            <span className="text-lg font-medium">GitHub</span>
          </a>
          <a 
            href="https://linkedin.com/in/luiz-eduardo12" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-black/20 backdrop-blur-sm p-8 rounded-2xl flex flex-col items-center justify-center gap-4 hover:bg-purple-600/20 transition-colors group"
          >
            <Linkedin className="w-12 h-12 group-hover:text-purple-400 transition-colors" />
            <span className="text-lg font-medium">LinkedIn</span>
          </a>
          <a 
            href="https://www.instagram.com/eduard0.dev/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-black/20 backdrop-blur-sm p-8 rounded-2xl flex flex-col items-center justify-center gap-4 hover:bg-purple-600/20 transition-colors group"
          >
            <Instagram className="w-12 h-12 group-hover:text-purple-400 transition-colors" />
            <span className="text-lg font-medium">Instagram</span>
          </a>
          <a 
            href="https://www.tiktok.com/@um.simples.dev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-black/20 backdrop-blur-sm p-8 rounded-2xl flex flex-col items-center justify-center gap-4 hover:bg-purple-600/20 transition-colors group"
          >
            <SiTiktok className="w-12 h-12 group-hover:text-purple-400 transition-colors" />
            <span className="text-lg font-medium">TikTok</span>
          </a>
        </div>

        <div className="bg-black/40 p-[2px] rounded-2xl bg-gradient-to-r from-purple-600/50 to-purple-400/50 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
          <a 
            href="https://portfolio-eduardo-dev.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 bg-black/40 p-6 rounded-2xl hover:bg-purple-600/20 transition"
          >
            <Globe className="w-8 h-8" />
            <span className="text-lg font-medium text-center">Meu Portfolio</span>
          </a>
        </div>

        <div className="bg-black/40 p-[2px] rounded-2xl bg-gradient-to-r from-purple-600/50 to-purple-400/50 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
          <a 
            href="/eduardo-cv.pdf" 
            download="eduardo-cv.pdf"
            className="flex flex-col items-center gap-3 bg-black/40 p-6 rounded-2xl hover:bg-purple-600/20 transition"
          >
            <Download className="w-8 h-8" />
            <span className="text-lg font-medium text-center">Download CV</span>
          </a>
        </div>

        <div className="bg-black/40 rounded-2xl">
          <div className="p-6 rounded-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Music className="w-5 h-5 text-purple-400" />
              <p className="text-zinc-400">Minha Playlist</p>
            </div>
            <iframe
              src="https://open.spotify.com/embed/playlist/2VX8TM56VBfOWN48CjfAH5?theme=0&si=eS5RhwgHTxepU7m_JZce5Q&pi=tIvUgLB0Q0ySw"
              width="100%"
              height="380"
              frameBorder="0"
              allowTransparency={true}
              allow="encrypted-media"
              style={{ borderRadius: '12px', margin: '0 -24px', width: 'calc(100% + 48px)' }}
            ></iframe>
          </div>
        </div>
      </main>
    </>
  );
}
