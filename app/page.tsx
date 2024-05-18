import OpenAIAssistant from "@/app/ui/openai-assistant";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="m-4">
        <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl">
          Get to know <span className="text-blue-600 font-bold">Kashi.</span>
        </h1>
        <div className="flex justify-center text-xs gap-3 my-2 text-white ">
          <p className="border bg-sky-400 rounded-sm border-black p-1">
            Mobile Development
          </p>
          <p className="border bg-sky-400 rounded-sm border-black p-1">
            Web/3 Development
          </p>
          <p className="border bg-sky-400 rounded-sm border-black p-1">
            Artificial Intelligence
          </p>
        </div>
        <div className="mt-8 mb-3 text-normal font-normal text-cyan-950">
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
