import Image from "next/image";
import Link from "next/link";
import { readUserSession } from "../auth/actions";
import LogoutDialog from "../auth/logout-dialog";
import LoginDialog from "../auth/login-dialog";
import { Button } from "../ui/button";
import EmployerAvatar from "../auth/employer-avatar";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  ArrowBigDown,
  ArrowBigDownIcon,
  ArrowDownIcon,
  ChevronDown,
  Globe2Icon,
  User2Icon,
} from "lucide-react";
import CandidateAvatar from "../auth/candidate-avatar";

// Navigation links
const links = [
  { href: "/jobs", label: "Jobs" },
  { href: "/companies", label: "Companies" },
  { href: "/about", label: "About" },
  { href: "/contact_us", label: "Contact Us" },
];

async function Header({ activeLink }: { activeLink?: string }) {
  // Read user session
  const { data: session, error } = await readUserSession();

  console.log(session.session?.user.user_metadata?.type);
  return (
    <div className="bg-white">
      <header className="container flex items-center justify-between h-full pt-8 mx-auto">
        <Link href="/">
          <Image
            src="/img/Logo.svg"
            alt="logo"
            width={28}
            height={26}
            className="cursor-pointer"
          />
        </Link>

        <nav className="flex items-center gap-8 font-semibold">
          {/* Navigation links */}
          {links.map(({ href, label }, idx) => (
            <Link
              className={
                activeLink === label
                  ? `text-accent`
                  : "text-foreground hover:text-accent"
              }
              key={idx}
              href={href}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex gap-5">
          {session.session?.user.user_metadata?.type === "employer" ? (
            <div className="flex gap-5">
              <EmployerAvatar>
                <Avatar className="border-2 border-foreground">
                  <AvatarImage src="" alt="@shadcn" />
                  <AvatarFallback>
                    <Globe2Icon size={24} />
                  </AvatarFallback>
                </Avatar>
              </EmployerAvatar>
              <Button>Post a job</Button>
            </div>
          ) : session.session?.user.user_metadata?.type === "candidate" ? (
            <div className="flex gap-5">
              <CandidateAvatar>
                <Avatar className="border-2 border-foreground">
                  <AvatarImage src="" alt="@shadcn" />
                  <AvatarFallback>
                    <User2Icon size={24} />
                  </AvatarFallback>
                </Avatar>
              </CandidateAvatar>
              <Button>Update CV</Button>
            </div>
          ) : (
            <LoginDialog>
              <Button variant="ghost">Sign up / Log in</Button>
            </LoginDialog>
          )}
        </div>
      </header>
    </div>
  );
}

export default Header;
