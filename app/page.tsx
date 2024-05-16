import OpenAIAssistant from "@/app/ui/openai-assistant";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  MailCheck,
  Mail,
  Send,
} from "lucide-react";

export default function Home() {
  return (
    <main>
      <div className="mx-auto mb-12 max-w-lg text-center mt-12">
        <div className="m-4">
          <h1 className="mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl">
            Kashi&apos;s AI-Powered Portfolio
          </h1>
          <div className="mb-6 text-normal font-normal text-gray-500">
            Welcome to my AI-powered portfolio! I&apos;m excited to share my
            journey with you. Feel free to explore and learn more about me and
            my work.
          </div>
          <div className="flex justify-center items-center space-x-4">
            <Link
              className="alternative_contact"
              href="mailto:rgestudillo@up.edu.ph"
            >
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                Email Me
              </button>
            </Link>
            <Link href="/Kashi-resume.pdf " target="_blank">
              <button className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded">
                Download Resume
              </button>
            </Link>
            <ul className="flex gap-2">
              <li className="social_icon">
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/kashi-estudillo/"
                >
                  <Linkedin />
                </Link>
              </li>
              <li className="social_icon">
                <Link target="_blank" href="https://github.com/rgestudillo">
                  <Github />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <OpenAIAssistant
          assistantId="asst_MWl01HX1hs6v95dqP8unt30y"
          greeting="I am a helpful chat assistant. How can I help you?"
        />
      </div>
    </main>
  );
}
