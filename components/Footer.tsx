// components/Footer.js
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="border border-t-slate-200 flex flex-col items-center justify-between px-8 md:px-16 py-8 lg:flex-row">
        <Link href="/">
          <div className="flex gap-1 align-middle h-full">
            <div className="translate-y-[.1rem]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
              </svg>
            </div>
            <Link href="/">
              <h2 className="font-[700] text-3xl tracking-tighter">Imagics</h2>
            </Link>
          </div>
        </Link>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-6 lg:gap-6 lg:mt-0">
          <Link href="/" className="text-sm text-gray-600 transition-colors duration-300">
              How It Works
          </Link>

          <Link href="/features" className="text-sm text-gray-600 transition-colors duration-300">
              Pricing
          </Link>

          <Link href="/pricing" className="text-sm text-gray-600 transition-colors duration-300">
              FAQs
          </Link>
        </div>

        <p className="mt-6 text-sm text-gray-500 lg:mt-0 dark:text-gray-400">© Copyright 2023 Imagics.</p>
      </div>
    </footer>
  );
};