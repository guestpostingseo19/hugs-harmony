import { Link } from "@tanstack/react-router";
import { MapPin, Phone, MessageCircle, Star } from "lucide-react";
import { business, telLink, waLink } from "@/lib/business";
import logo from "@/assets/logo.asset.json";

export function Footer() {
  return (
    <footer className="relative mt-24 bg-ink text-cream">
      <div className="hairline h-px w-full" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="" className="h-12 w-12 rounded-full ring-1 ring-gold/50" />
            <div>
              <div className="font-serif text-2xl">Ruby Jewellers</div>
              <div className="text-[11px] uppercase tracking-[0.25em] text-cream/60">
                Because It&apos;s Special
              </div>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-cream/70">
            A trusted family jeweller in the heart of Main Bazar, Chichawatni.
            Crafted pieces, honest prices, and a lifetime of service.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-2">
            <div className="flex text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>
            <span className="text-xs tracking-wider text-cream/80">
              {business.rating.toFixed(1)} · {business.reviewCount} Google Reviews
            </span>
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.28em] text-gold/80">Explore</h4>
          <ul className="mt-5 space-y-3 text-sm text-cream/80">
            <li><Link to="/" className="hover:text-gold transition">Home</Link></li>
            <li><Link to="/menu" className="hover:text-gold transition">Collections</Link></li>
            <li><Link to="/about" className="hover:text-gold transition">About Us</Link></li>
            <li><Link to="/visit" className="hover:text-gold transition">Visit Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.28em] text-gold/80">Visit &amp; Contact</h4>
          <ul className="mt-5 space-y-4 text-sm text-cream/80">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{business.address.street}<br />{business.address.city}, {business.address.postalCode}</span>
            </li>
            {business.phones.map((p) => (
              <li key={p.number} className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href={telLink(p.number)} className="hover:text-gold transition">{p.display}</a>
              </li>
            ))}
            <li className="flex gap-3">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={waLink()} target="_blank" rel="noreferrer" className="hover:text-gold transition">
                WhatsApp us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <div>© {new Date().getFullYear()} Ruby Jewellers · Main Bazar, Chichawatni</div>
          <div className="tracking-widest uppercase">Crafted with care</div>
        </div>
      </div>
    </footer>
  );
}
