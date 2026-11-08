"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/icons";

const NAV_ITEMS = [
  { href: "/services", label: "Услуги" },
  { href: "/cases", label: "Кейсы" },
  { href: "/articles", label: "Статьи" },
  { href: "/knowledge", label: "База знаний" },
];

function LogoMark() {
  return (
    <svg viewBox="0 0 36 36" className="h-9 w-9" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="34" height="34" rx="9" stroke="url(#logo-stroke)" strokeWidth="1.2" />
      <path d="M10 12.5 18 18l8-5.5M10 23.5 18 18l8 5.5" stroke="#C8838B" strokeWidth="1" strokeOpacity="0.45" strokeLinecap="round" />
      <circle cx="10" cy="12.5" r="2" fill="#C8838B" />
      <circle cx="10" cy="23.5" r="2" fill="#C8838B" fillOpacity="0.55" />
      <circle cx="26" cy="12.5" r="2" fill="#C8838B" fillOpacity="0.55" />
      <circle cx="26" cy="23.5" r="2" fill="#C8838B" />
      <circle cx="18" cy="18" r="2.6" fill="#C8838B" />
      <defs>
        <linearGradient id="logo-stroke" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C8838B" stopOpacity="0.65" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0.12" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    const base = href.split("#")[0];
    if (base === "/" || base === "") {
      return false;
    }
    return pathname === base || pathname.startsWith(`${base}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-graphite/80 backdrop-blur-xl">
      <div className="shell flex h-[72px] items-center justify-between gap-6">
        <Link href="/" className="group flex items-center gap-3" aria-label="AI consulting — на главную">
          <span className="transition duration-300 group-hover:drop-shadow-[0_0_12px_rgba(200,131,139,0.55)]">
            <LogoMark />
          </span>
          <span className="text-[15px] font-bold tracking-[0.18em] text-white">AI consulting</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Основная навигация">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors duration-200 ${
                  active ? "text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute inset-x-4 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-wine to-transparent" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link href="/services#contact" className="btn-primary !px-5 !py-2.5 text-[13px]">
            Обсудить проект
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-wine/40 hover:text-wine-soft lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {isOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div id="mobile-menu" className="border-t border-white/[0.06] bg-graphite/95 lg:hidden">
          <nav className="shell flex flex-col py-4" aria-label="Мобильная навигация">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-white/[0.05] py-4 text-base text-slate-300 transition hover:text-wine-soft"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/services#contact" onClick={() => setIsOpen(false)} className="btn-primary mt-5 w-full">
              Обсудить проект
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
