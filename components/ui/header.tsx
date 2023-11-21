
import Image from "next/image";
import Link from "next/link";

function Header() {
    return (
        <header className="container h-[35px] flex items-center justify-between mt-8">
            <Image src="/img/logo.svg" alt="logo" width={28} height={26}/>
            <nav className="flex items-center gap-8 font-semibold">
                <Link href="/jobs">Jobs</Link>
                <Link href="/companies">Companies</Link>
                <Link href="/about">About</Link>
                <Link href="/contact-us">Contact Us</Link>
            </nav>
            <div className="flex gap-5">
                <button>Sign up / Log in</button>
                <button>Post a job</button>
            </div>
        </header>
    );
}

export default Header;
