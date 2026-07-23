import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, MessageCircle, Clock, Car, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { business, telLink, waLink } from "@/lib/business";
import storefrontDay from "@/assets/storefront-day.asset.json";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit Ruby Jewellers — Main Bazar, Chichawatni" },
      { name: "description", content: "Visit Ruby Jewellers in Main Bazar, Block 8, Chichawatni. Get directions, call us, or message us on WhatsApp — we'd love to welcome you in." },
      { property: "og:title", content: "Visit Ruby Jewellers in Chichawatni" },
      { property: "og:description", content: "Our showroom is on Main Bazar, Block 8, Chichawatni. Directions, phone and WhatsApp inside." },
      { property: "og:image", content: storefrontDay.url },
      { name: "twitter:image", content: storefrontDay.url },
      { property: "og:url", content: "/visit" },
    ],
    links: [{ rel: "canonical", href: "/visit" }],
  }),
  component: Visit,
});

function Visit() {
  return (
    <>
      <section className="relative pt-40 pb-16 bg-background">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.3em] text-gold-deep">Visit Us</div>
            <h1 className="mt-5 font-serif text-5xl leading-tight sm:text-7xl">
              We&apos;d love to<br /><span className="gold-text italic">meet you in person.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
              Come and see our collections in the light they deserve. Our doors are open in the heart of Main Bazar, Chichawatni.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-8">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border/60 shadow-2xl">
              <iframe
                src={business.mapEmbed}
                title="Ruby Jewellers on Google Maps"
                loading="lazy"
                className="h-[520px] w-full"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-3">
          <Reveal>
            <div className="rounded-2xl border border-border/60 bg-card p-8">
              <MapPin className="h-6 w-6 text-gold" />
              <h3 className="mt-4 font-serif text-2xl">Our address</h3>
              <p className="mt-2 text-muted-foreground">
                {business.address.street}<br />
                {business.address.city}, {business.address.postalCode}<br />
                {business.address.country}
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Plus code: {business.address.plusCode}
              </p>
              <a href={business.directionsUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em]">
                Get directions <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-2xl border border-border/60 bg-card p-8">
              <Phone className="h-6 w-6 text-gold" />
              <h3 className="mt-4 font-serif text-2xl">Call or message</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {business.phones.map((p) => (
                  <li key={p.number}>
                    <a href={telLink(p.number)} className="hover:text-gold-deep transition">{p.display}</a>
                  </li>
                ))}
              </ul>
              <a href={waLink()} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm text-ink hover:bg-gold-soft transition">
                <MessageCircle className="h-4 w-4" /> WhatsApp us
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="rounded-2xl border border-border/60 bg-card p-8">
              <Clock className="h-6 w-6 text-gold" />
              <h3 className="mt-4 font-serif text-2xl">Business hours</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Our timings vary — please call ahead to confirm before you visit.
                We&apos;re happy to open specially by appointment.
              </p>
              <div className="mt-6 flex items-start gap-3 text-sm text-muted-foreground">
                <Car className="mt-0.5 h-4 w-4 text-gold" />
                <span>Street parking available along Main Bazar. Ask us for the closest spot.</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl bg-ink text-cream lg:grid-cols-2">
          <div className="p-10 sm:p-14">
            <div className="text-[11px] uppercase tracking-[0.3em] text-gold">A warm welcome awaits</div>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">Step in for a chai.</h2>
            <p className="mt-4 text-cream/70">
              Whether you&apos;re shopping for a wedding or simply want to see something beautiful,
              our team is here to help — no pressure, no rush.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={business.directionsUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm text-ink hover:bg-gold-soft transition">
                <MapPin className="h-4 w-4" /> Directions
              </a>
              <a href={telLink(business.phones[0].number)} className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-6 py-3 text-sm text-cream hover:bg-white/10 transition">
                <Phone className="h-4 w-4 text-gold" /> Call now
              </a>
            </div>
          </div>
          <div className="relative min-h-[280px] lg:min-h-full">
            <img src={storefrontDay.url} alt="Ruby Jewellers storefront on Main Bazar" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>
      </section>
    </>
  );
}
