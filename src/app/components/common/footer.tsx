'use client'
import Link from "next/link";
import * as React from "react";
import { cn } from "../../lib/utils";
import { GitHubLogoIcon, TwitterLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "../ui/button";
import { SiGmail } from "react-icons/si";
import { FaViber } from "react-icons/fa";

// Hardcoded social links
const SocialLinks = [
  {
    icon: GitHubLogoIcon,
    link: "https://github.com/Naihtetaung",
  },
  {
    icon: TwitterLogoIcon,
    link: "https://twitter.com/yourusername",
  },
  {
    icon: FaViber,
    link: "viber://add?number=+959774689938"
  },
  {
    icon: LinkedInLogoIcon,
    link: "www.linkedin.com/in/naing-htet-aung-816846376",
  },
  {
    icon: SiGmail,
    link: "https://mail.google.com/mail/?view=cm&to=nganai2000@gmail.com",
  }
];


export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="container flex items-center justify-center gap-8 mt-10 py-10 md:h-24">
        {SocialLinks.map((item, ind) => (
            <Link
              key={ind}
              href={item?.link}
              target="_blank"
              className={cn(
                buttonVariants({
                  variant: "ghost",
                  size: "sm",
                }),
                "h-10 w-10 p-2"
              )}
            >
              <item.icon className="h-5 w-5" />
            </Link>
        ))}
      </div>
    </footer>
  );
}