"use client";
import Link from "next/link";
import { VscColorMode } from "react-icons/vsc";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-32 py-8 shadow-md">
      <ul className="flex gap-28 text-base">
        <li>
          <Link href={"/sobre"}>SOBRE</Link>
        </li>
        <li>
          <Link href={"/"}>OBSERVATÓRIO</Link>
        </li>
        <li>
          <Link href={"/equipe"}>EQUIPE</Link>
        </li>
        <li>
          <Link href={"/parcerias"}>PARCERIAS</Link>
        </li>
      </ul>

      {/* <div className="flex items-center gap-4 border-[2px] border-black rounded-xl px-2 py-1">
        <p className="text-sm">ACESSIBILIDADE</p>
        <button>A+</button>
        <button>A-</button>
        <button>
          <VscColorMode />
        </button>
      </div> */}
    </header>
  );
}
