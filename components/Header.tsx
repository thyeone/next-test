import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  return (
    <header className="flex justify-center align-middle mx-auto my-0 w-1/2 bg-black text-white px-0 py-[20px]">
      <ul className="flex align-middle gap-[20px]">
        <li className="text-[21px]">
          <Link href="/" className="cursor-pointer">
            <span className={router.pathname === "/" ? "text-[red]" : ""}>
              Home
            </span>
          </Link>
        </li>
        <li className="text-[21px]">
          <Link href="/about" className="cursor-pointer">
            <span className={router.pathname === "/about" ? "text-[red]" : ""}>
              About
            </span>
          </Link>
        </li>
      </ul>
    </header>
  );
}
