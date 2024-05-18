import OpenAIAssistant from "@/app/ui/openai-assistant";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="m-4">
        <h1 className="mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl">
          Get to Know Kashi.
        </h1>

        <div className="mb-6 text-normal font-normal text-cyan-950">
          Welcome to my{" "}
          <span className="text-blue-600 font-bold">AI-powered</span> portfolio!
          I&apos;m excited to share my journey with you.{" "}
          <span className="text-blue-600 font-bold">
            Ask me anything below!
          </span>
        </div>

        <div className="flex justify-center items-center space-x-4">
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
            <button className="bg-blue-700 hover:bg-blue-500  text-white font-semibold py-2 px-4 rounded">
              Download Resume
            </button>
          </Link>
        </div>
      </div>
      <OpenAIAssistant
        assistantId="asst_MWl01HX1hs6v95dqP8unt30y"
        greeting="I am a helpful chat assistant. How can I help you?"
      />
    </main>
  );
}
