import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
function Header() {
  return (
    <div className="bg-white">
      <header className="container h-[35px] mx-auto flex items-center justify-between pt-8">
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
          <Link href="/jobs" className="hover:text-accent">
            Jobs
          </Link>
          <Link href="/companies" className="hover:text-accent">
            Companies
          </Link>
          <Link href="/about" className="hover:text-accent">
            About
          </Link>
          <Link href="/contact-us" className="hover:text-accent">
            Contact Us
          </Link>
        </nav>
        <div className="flex gap-5">
          <button className="font-semibold hover:text-accent">
            Sign up / Log in
          </button>
          {/* <Button>Post a job</Button> */}
        </div>
      </header>
    </div>
  );
}

export default Header;
