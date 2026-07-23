import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Star, Phone, MessageCircle, MapPin, Sparkles, ShieldCheck, Gem, HeartHandshake, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { business, telLink, waLink } from "@/lib/business";
import storefrontNight from "@/assets/storefront-night.asset.json";
import storefrontDay from "@/assets/storefront-day.asset.json";
import interiorWide from "@/assets/interior-wide.asset.json";
import interiorNecklace from "@/assets/interior-necklace.asset.json";
import earrings from "@/assets/earrings.asset.json";
import ring from "@/assets/ring.asset.json";
import storefrontSign from "@/assets/storefront-sign.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ruby Jewellers — Premium Jeweller in Main Bazar, Chichawatni" },
      { name: "description", content: "Ruby Jewellers is a trusted family jeweller in Main Bazar, Chichawatni offering exquisite gold, bridal, and traditional jewellery. Visit our showroom or call today." },
      { property: "og:title", content: "Ruby Jewellers — Premium Jeweller in Chichawatni" },
      { property: "og:description", content: "Handcrafted gold and bridal jewellery in Main Bazar, Chichawatni. Rated 5.0 on Google." },
      { property: "og:image", content: storefrontNight.url },
      { name: "twitter:image", content: storefrontNight.url },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const categories = [
  { name: "Bridal Jewellery", img: interiorNecklace.url, tag: "Signature" },
  { name: "Gold Necklaces", img: interiorWide.url, tag: "22K & 24K" },
  { name: "Earrings", img: earrings.url, tag: "Handcrafted" },
  { name: "Rings", img: ring.url, tag: "Bespoke" },
];

const reviews = [
  { quote: "Excellent designs and very reasonable pricing. The whole family was made to feel welcome.", author: "Google Review" },
  { quote: "Beautiful jewellery and honest people — a jeweller you can truly trust.", author: "Google Review" },
  { quote: "Bought my wife's bridal set here. Craftsmanship is exceptional and the service was warm and unhurried.", author: "Google Review" },
];

function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink text-cream">
        <motion.div style={{ y }} className="absolute inset-0">
          <img
            src={storefrontNight.url}
            alt="Ruby Jewellers illuminated storefront at night in Main Bazar, Chichawatni"
            className="h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink" />
        </motion.div>

        <motion.div style={{ opacity }} className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 pt-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="inline-flex items-center gap-3 rounded-full border border-gold/40 bg-white/5 px-5 py-2 backdrop-blur-md"
          >
            <div className="flex text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>
            <span className="text-[11px] uppercase tracking-[0.28em] text-cream/80">
              5.0 · 18 Google Reviews
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.15 }}
            className="mt-8 font-serif text-5xl leading-[1.05] sm:text-7xl md:text-8xl"
          >
            Timeless jewellery,<br />
            <span className="gold-text italic">crafted with heart.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-cream/75 sm:text-lg"
          >
            Ruby Jewellers is a family-run atelier in the heart of Main Bazar, Chichawatni —
            where every piece is chosen with care and every visit feels personal.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <Link to="/visit" className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-ink transition hover:bg-gold-soft">
              Visit our showroom
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <a href={telLink(business.phones[0].number)} className="inline-flex items-center gap-2 rounded-full border border-cream/25 bg-white/5 px-6 py-3.5 text-sm text-cream backdrop-blur-md transition hover:bg-white/10">
              <Phone className="h-4 w-4 text-gold" /> Call now
            </a>
            <a href={waLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-cream/25 bg-white/5 px-6 py-3.5 text-sm text-cream backdrop-blur-md transition hover:bg-white/10">
              <MessageCircle className="h-4 w-4 text-gold" /> WhatsApp
            </a>
          </motion.div>
        </motion.div>

        <div className="absolute inset-x-0 bottom-6 z-10 flex justify-center">
          <div className="hairline h-px w-40" />
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="relative border-b border-border/60 bg-background py-10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 sm:grid-cols-4">
          {[
            { icon: Gem, label: "Certified gold & stones" },
            { icon: ShieldCheck, label: "Trusted family jeweller" },
            { icon: Sparkles, label: "Bespoke design service" },
            { icon: HeartHandshake, label: "Warm, personal service" },
          ].map(({ icon: Icon, label }, i) => (
            <Reveal key={label} delay={i * 0.08}>
              <div className="flex flex-col items-center text-center gap-2">
                <Icon className="h-5 w-5 text-gold" />
                <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">{label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="relative bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex flex-col items-end justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-xl">
                <div className="text-[11px] uppercase tracking-[0.3em] text-gold-deep">Featured Collections</div>
                <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-6xl">
                  Curated for the moments that matter.
                </h2>
              </div>
              <Link to="/menu" className="group inline-flex items-center gap-2 text-sm tracking-wider uppercase text-foreground">
                Explore all
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.08}>
                <Link to="/menu" className="group relative block overflow-hidden rounded-2xl bg-muted">
                  <div className="aspect-[3/4] w-full overflow-hidden">
                    <img
                      src={c.img}
                      alt={c.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                  <div className="absolute inset-x-5 bottom-5 flex items-end justify-between text-cream">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.28em] text-gold">{c.tag}</div>
                      <div className="mt-1 font-serif text-2xl">{c.name}</div>
                    </div>
                    <ArrowUpRight className="h-5 w-5 opacity-70 transition-all group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="relative bg-cream py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl">
                <img src={interiorWide.url} alt="Ruby Jewellers showroom interior" className="aspect-[4/5] w-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-gold/40 bg-background p-5 shadow-2xl sm:block">
                <div className="text-[10px] uppercase tracking-[0.28em] text-gold-deep">Since a lifetime</div>
                <div className="mt-1 font-serif text-2xl">A family you can trust.</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <div className="text-[11px] uppercase tracking-[0.3em] text-gold-deep">Why Ruby Jewellers</div>
              <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
                Craftsmanship you can feel. Service that stays with you.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
                From the first hello to the final unveiling, our promise is simple —
                honest quality, thoughtful design, and prices that make sense. We
                spend our time on the details so you can spend yours on the moments.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { t: "Purity guaranteed", d: "Every gramme, every piece — assured." },
                  { t: "Bespoke design", d: "Bring an idea, leave with an heirloom." },
                  { t: "Bridal specialists", d: "Sets tailored to your celebration." },
                  { t: "Lifetime aftercare", d: "Cleaning, polishing, gentle repair." },
                ].map((x) => (
                  <div key={x.t} className="rounded-xl border border-border/60 bg-background p-5">
                    <div className="font-serif text-lg">{x.t}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{x.d}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="relative bg-ink py-24 text-cream sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex flex-col items-center text-center">
              <div className="flex text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <div className="mt-3 text-[11px] uppercase tracking-[0.3em] text-cream/60">
                5.0 · 18 Google Reviews
              </div>
              <h2 className="mt-6 max-w-3xl font-serif text-4xl leading-tight sm:text-6xl">
                Words from our customers.
              </h2>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {reviews.map((r, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <figure className="flex h-full flex-col justify-between rounded-2xl border border-cream/10 bg-white/[0.03] p-8 backdrop-blur">
                  <blockquote className="font-serif text-xl leading-relaxed">
                    &ldquo;{r.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 flex items-center justify-between text-[11px] uppercase tracking-[0.25em] text-cream/60">
                    <span>{r.author}</span>
                    <span className="text-gold">★ 5.0</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-12 flex justify-center">
              <a
                href="https://www.google.com/search?q=Ruby+Jewellers+Chichawatni+reviews"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-6 py-3 text-sm tracking-wider uppercase text-cream transition hover:bg-gold hover:text-ink"
              >
                Read more reviews <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* GALLERY */}
      <section className="relative bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-center">
              <div className="text-[11px] uppercase tracking-[0.3em] text-gold-deep">Inside the showroom</div>
              <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-6xl">A closer look.</h2>
            </div>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            {[storefrontDay, interiorWide, interiorNecklace, storefrontSign, earrings, ring, storefrontNight, storefrontDay].map((img, i) => (
              <Reveal key={i} delay={(i % 4) * 0.08}>
                <div className={`overflow-hidden rounded-xl ${i % 5 === 0 ? "aspect-[3/4]" : "aspect-square"}`}>
                  <img src={img.url} alt="Ruby Jewellers gallery" loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 hover:scale-110" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MAP + CTA */}
      <section className="relative bg-cream py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border/60 shadow-xl">
              <iframe
                src={business.mapEmbed}
                title="Ruby Jewellers location"
                loading="lazy"
                className="h-[420px] w-full"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <div className="text-[11px] uppercase tracking-[0.3em] text-gold-deep">Find us</div>
              <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">Main Bazar, Chichawatni.</h2>
              <p className="mt-4 text-muted-foreground">
                Step in for a chai and let us show you something you&apos;ll love.
                We&apos;re easy to find — right along Main Bazar in Block 8.
              </p>
              <div className="mt-8 space-y-3 text-sm">
                <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-gold" /> {business.address.street}, {business.address.city}</div>
                <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-gold" /> {business.phones[0].display}</div>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={business.directionsUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm text-cream hover:bg-ink/90 transition">
                  <MapPin className="h-4 w-4 text-gold" /> Get directions
                </a>
                <a href={waLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-sm text-ink hover:bg-ink hover:text-cream transition">
                  <MessageCircle className="h-4 w-4" /> WhatsApp us
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
