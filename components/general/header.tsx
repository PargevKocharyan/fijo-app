import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
function Header() {
  return (
    <header className="container h-[35px] mx-auto flex items-center justify-between mt-8">
      <Image
        src="/img/logo.svg"
        alt="logo"
        width={28}
        height={26}
        className="cursor-pointer"
      />
      <nav className="flex items-center gap-8 font-semibold">
        <Link href="/jobs" className="hover:underline">
          Jobs
        </Link>
        <Link href="/companies" className="hover:underline">
          Companies
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/contact-us" className="hover:underline">
          Contact Us
        </Link>
      </nav>
      <div className="flex gap-5">
        <Button variant="ghost">Sign up / Log in</Button>
        <Button>Post a job</Button>
      </div>
    </header>
  );
}

export default Header;
