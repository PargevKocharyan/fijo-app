import Image from "next/image";
import Link from "next/link";
import { readUserSession } from "../auth/actions";
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
  MenuIcon,
  User2Icon,
} from "lucide-react";
import CandidateAvatar from "../auth/candidate-avatar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import EmployerSheet from "../auth/sheets/employer-sheet";
import CandidateSheet from "../auth/sheets/candidate-sheet";

// Navigation links
const links = [
  { href: "/jobs", label: "Jobs" },
  { href: "/companies", label: "Companies" },
  { href: "/about", label: "About" },
  { href: "/contact_us", label: "Contact Us" },
];

async function Header({ activeLink }: { activeLink?: string }) {
  // Read user session
  const userSession = await readUserSession();

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

        <nav className="items-center hidden gap-8 font-semibold md:flex">
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

        <div className="gap-5">
          {userSession.data.session?.user.user_metadata?.type === "employer" ? (
            <>
              <div className="hidden gap-5 md:flex">
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
              {/* Burger menu for small Screens */}
              <EmployerSheet name="Google Inc." />
            </>
          ) : userSession.data.session?.user.user_metadata?.type ===
            "candidate" ? (
            <>
              <div className="hidden gap-5 md:flex">
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
              <CandidateSheet name="John Doe" />
            </>
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
