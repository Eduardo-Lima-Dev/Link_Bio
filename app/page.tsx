"use client"

import { Globe, Github, Linkedin, Instagram, Twitter, Music, Download } from "lucide-react";
import Image from "next/image";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";

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
        <div className="flex items-center bg-black/20 p-6 rounded-2xl backdrop-blur-sm">
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

          <Image
            src="/assets/logo.png"
            alt="Logo"
            width={50}
            height={50}
            className="rounded-lg"
          />
        </div>

        {/* Bio Description */}
        <div className="bg-black/40 p-[2px] rounded-2xl bg-gradient-to-r from-purple-600/50 to-purple-400/50 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
          <div className="bg-black/40 p-6 rounded-2xl">
            <p className="text-zinc-300 text-center leading-relaxed">
              Sou apaixonado por música, café e Linux, e estou sempre em busca de aprender coisas novas e dar uma força para a comunidade tech. No TikTok, compartilho minha jornada de desenvolvimento com muita diversão e dicas práticas, ajudando outros devs a explorar esse universo incrível do código. Vem se juntar a essa aventura cheia de criatividade, aprendizado e, claro, muitas xícaras de café!
            </p>
          </div>
        </div>

        {/* Social Media Grid */}
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
            href="https://instagram.com/lima_ofc" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-black/20 backdrop-blur-sm p-8 rounded-2xl flex flex-col items-center justify-center gap-4 hover:bg-purple-600/20 transition-colors group"
          >
            <Instagram className="w-12 h-12 group-hover:text-purple-400 transition-colors" />
            <span className="text-lg font-medium">Instagram Pessoal</span>
          </a>
        </div>

        {/* Portfolio Link */}
        <div className="bg-black/40 p-[2px] rounded-2xl bg-gradient-to-r from-purple-600/50 to-purple-400/50 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
          <a 
            href="https://portfolio-eduardo-dev.vercel.app" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 bg-black/40 p-6 rounded-2xl hover:bg-purple-600/20 transition"
          >
            <Globe className="w-8 h-8" />
            <span className="text-lg font-medium text-center">Meu Portfolio</span>
          </a>
        </div>

        {/* CV Download Link */}
        <div className="bg-black/40 p-[2px] rounded-2xl bg-gradient-to-r from-purple-600/50 to-purple-400/50 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
          <a 
            href="/eduardo-cv.pdf" 
            download
            className="flex flex-col items-center gap-3 bg-black/40 p-6 rounded-2xl hover:bg-purple-600/20 transition"
          >
            <Download className="w-8 h-8" />
            <span className="text-lg font-medium text-center">Download CV</span>
          </a>
        </div>

        {/* Seção da Playlist */}
        <div className="bg-black/40 p-6 rounded-2xl">
          <div className="flex items-center gap-2 mb-4">
            <Music className="w-5 h-5 text-purple-400" />
            <p className="text-zinc-400">Minha Playlist</p>
          </div>
          <iframe
            src="https://open.spotify.com/embed/playlist/2VX8TM56VBfOWN48CjfAH5?si=eS5RhwgHTxepU7m_JZce5Q&pi=tIvUgLB0Q0ySw"
            width="100%"
            height="380"
            frameBorder="0"
            allowTransparency={true}
            allow="encrypted-media"
          ></iframe>
        </div>
      </main>
    </>
  );
}
