// src/components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <Link href="/" className="font-bold text-xl">MyPortfolio</Link>
        <div>
          <Link href="/about" className="px-4">About</Link>
          <Link href="/projects" className="px-4">Projects</Link>
          <Link href="/contact" className="px-4">Contact</Link>
        </div>
      </nav>
    </header>
  );
}