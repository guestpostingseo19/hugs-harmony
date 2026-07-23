import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.asset.json";
import { business, telLink } from "@/lib/business";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/visit", label: "Visit Us" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-5 sm:px-8">
        <Link to="/" className="flex items-center gap-3 min-w-0">
          <img
            src={logo.url}
            alt="Ruby Jewellers"
            className="h-10 w-10 shrink-0 rounded-full ring-1 ring-gold/40 object-cover"
          />
          <div className="min-w-0 leading-tight">
            <div className="font-serif text-lg tracking-wide truncate">Ruby Jewellers</div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground truncate">
              Chichawatni
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex justify-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="group relative text-sm tracking-wide text-foreground/80 hover:text-foreground transition"
              activeProps={{ className: "text-foreground" }}
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2">
          <a
            href={telLink(business.phones[0].number)}
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-gold/40 bg-background/60 px-4 py-2 text-xs tracking-widest uppercase text-foreground hover:bg-gold hover:text-ink transition"
          >
            <Phone className="h-3.5 w-3.5" /> Call
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden rounded-full border border-border/70 p-2 bg-background/70 backdrop-blur"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mx-5 mt-3 rounded-2xl border border-border/70 bg-background/95 backdrop-blur-xl p-2 shadow-xl">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 rounded-xl text-sm hover:bg-muted transition"
              activeProps={{ className: "bg-muted" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
