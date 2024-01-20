import Image from "next/image";
import Link from "next/link";
import { readUserSession } from "../auth/actions";
import LogoutDialog from "../auth/logout-dialog";
import LoginDialog from "../auth/login-dialog";
import { Button } from "../ui/button";

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
          {
            // Navigation links
            links.map(({ href, label }, idx) => (
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
            ))
          }
        </nav>
        <div className="flex gap-5">
          {session.session?.user.user_metadata.type === "employer" ? (
            <div className="flex gap-5">
              <LogoutDialog />
              <Button>Post a job</Button>
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
