'use client'
import Image from "next/image";
import { Button } from "./components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import profile from '@/src/app/assets/photos/nhacvphoto.jpg'
import { FaTelegram } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  
  const handleTelegramRedirect = () => {
    const telegramUsername = 'Naing_Htet_Aung_Dev';
    window.open(`https://t.me/${telegramUsername}`, '_blank');
  };

  const handleRedirectGithub = () => {
    router.push("https://github.com/Naihtetaung")
  }

  return (
    <section className="flex items-center justify-center px-4 sm:px-6 lg:px-8"> 
      <div className="max-w-7xl mx-auto">
        <div className="text-center flex flex-col items-center space-y-8 animate-fade-in">
        <Image src={profile} alt="Naing Htet Aung" height={300} width={300}
              className="bg-primary object-cover w-60 h-60 rounded-full border border-3 border-black"
            />
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-gray-400">Hello, I'm</span>
              <span className="block bg-gradient-to-r from-white via-primary to-black bg-clip-text text-transparent">
                Frontend Developer
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Crafting beautiful, responsive web experiences with modern technologies.
              Passionate about clean code and innovative design.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-black text-white hover:bg-gray-200 hover:text-black transition-all duration-300 transform hover:scale-105 group"
              onClick={handleRedirectGithub}
            >
              View My Work
              <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gray-600 text-primary hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
              onClick={handleTelegramRedirect}
            >
              Contact
              <FaTelegram/>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
