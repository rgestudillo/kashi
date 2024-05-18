"use client";

import OpenAIAssistant from "@/app/ui/openai-assistant";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="m-4">
        <motion.div
          initial={{
            y: 25,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.25,
            ease: "easeInOut",
          }}
          className="flex justify-center text-xs gap-3 text-white "
        >
          <a
            className="border bg-blue-950 hover:bg-blue-500 rounded-sm border-black p-1"
            href="/projects?category=mobile"
          >
            Mobile Development
          </a>
          <a
            className="border bg-blue-950 hover:bg-blue-500 rounded-sm border-black p-1"
            href="/projects?category=web"
          >
            Web/3 Development
          </a>
          <a
            className="border bg-blue-950 hover:bg-blue-500 rounded-sm border-black p-1"
            href="/projects?category=ai"
          >
            Artificial Intelligence
          </a>
        </motion.div>
        <motion.div
          initial={{
            y: 25,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.25,
            ease: "easeInOut",
          }}
          className="relative mb-6  mt-3 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl"
        >
          Get to know <span className="text-blue-600 font-bold">Kashi.</span>
        </motion.div>
        <motion.p
          initial={{
            y: 25,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.25,
            delay: 0.5,
            ease: "easeInOut",
          }}
          className="mb-6"
        >
          Welcome to my{" "}
          <span className="text-blue-600 font-bold">AI-powered</span> portfolio!
          I&apos;m excited to share my journey with you.{" "}
          <span className="text-blue-600 font-bold">
            Ask me anything below!
          </span>
        </motion.p>
        <motion.div
          initial={{
            y: 25,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.25,
            delay: 0.75,
            ease: "easeInOut",
          }}
          className=""
        >
          <div className="flex justify-center items-center space-x-4 mb-4">
            <Link
              className="alternative_contact"
              href="mailto:rgestudillo@up.edu.ph"
            >
              <button className="bg-blue-700 hover:bg-blue-500 active:scale-95 duration-200 text-white font-semibold py-2 px-4 rounded">
                Email Me
              </button>
            </Link>
            <Link
              href="https://kashi-2ewc.vercel.app/Kashi-resume.pdf"
              target="_blank"
            >
              <button className="bg-blue-950  hover:bg-blue-500  text-white font-semibold py-2 px-4 rounded">
                Download Resume
              </button>
            </Link>
          </div>
          <OpenAIAssistant
            assistantId="asst_MWl01HX1hs6v95dqP8unt30y"
            greeting="I am a helpful chat assistant. How can I help you?"
          />
        </motion.div>
      </div>
    </main>
  );
}
