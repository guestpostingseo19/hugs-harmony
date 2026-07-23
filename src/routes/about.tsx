import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { Star, Sparkles, Gem, HeartHandshake, ShieldCheck } from "lucide-react";
import interiorFounder from "@/assets/interior-founder.asset.json";
import interiorWide from "@/assets/interior-wide.asset.json";
import interiorNecklace from "@/assets/interior-necklace.asset.json";
import storefrontNight from "@/assets/storefront-night.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Ruby Jewellers — A Family Jeweller in Chichawatni" },
      { name: "description", content: "Ruby Jewellers is a family jewellery house in Main Bazar, Chichawatni — known for craftsmanship, honest pricing, and warm, personal service." },
      { property: "og:title", content: "About Ruby Jewellers" },
      { property: "og:description", content: "A family jeweller in Main Bazar, Chichawatni — crafted pieces and honest service." },
      { property: "og:image", content: interiorFounder.url },
      { name: "twitter:image", content: interiorFounder.url },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="relative pt-40 pb-20 bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <Reveal>
            <div>
              <div className="text-[11px] uppercase tracking-[0.3em] text-gold-deep">Our Story</div>
              <h1 className="mt-5 font-serif text-5xl leading-[1.05] sm:text-7xl">
                Jewellery is personal.<br /><span className="gold-text italic">So is our craft.</span>
              </h1>
              <p className="mt-6 max-w-xl text-muted-foreground">
                Ruby Jewellers began with a simple belief — that a jewellery shop should feel
                like family. Today, we welcome brides, gift-givers, collectors and neighbours
                to a showroom in the heart of Main Bazar, Chichawatni, where every piece
                carries our promise of quality and every visit ends with a smile.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-3xl">
              <img src={interiorFounder.url} alt="Ruby Jewellers founder portrait inside the showroom" className="aspect-[4/5] w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-3">
          {[
            { icon: Gem, title: "Our craft", body: "We work with reputable karigars whose hands have shaped gold for decades. Every finish is inspected before it earns its place in our showcase." },
            { icon: ShieldCheck, title: "Our promise", body: "Assured purity, transparent weights, and pricing that respects the day&apos;s market. What you see is what you take home." },
            { icon: HeartHandshake, title: "Our people", body: "We don&apos;t rush a decision. Our team takes the time to understand your occasion and help you find a piece you&apos;ll love wearing." },
          ].map((v, i) => (
            <Reveal key={v.title} delay={i * 0.1}>
              <div>
                <v.icon className="h-6 w-6 text-gold-deep" />
                <h3 className="mt-4 font-serif text-2xl">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground" dangerouslySetInnerHTML={{ __html: v.body }} />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3">
          {[interiorWide, interiorNecklace, storefrontNight].map((img, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className={`overflow-hidden rounded-2xl ${i === 1 ? "md:translate-y-10" : ""}`}>
                <img src={img.url} alt="Ruby Jewellers showroom" loading="lazy" className="aspect-[4/5] w-full object-cover" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ink py-24 text-cream">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="flex justify-center text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <div className="mt-3 text-[11px] uppercase tracking-[0.3em] text-cream/60">
            5.0 · 18 Google Reviews
          </div>
          <h2 className="mt-6 font-serif text-4xl sm:text-5xl leading-tight">
            &ldquo;Excellent designs, good prices, and the friendliest people.&rdquo;
          </h2>
          <p className="mt-4 text-sm uppercase tracking-[0.25em] text-cream/60">— a recurring theme in our reviews</p>
          <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-gold/40 px-5 py-2 text-xs uppercase tracking-[0.25em] text-cream/80">
            <Sparkles className="h-3.5 w-3.5 text-gold" /> Trusted by families in Chichawatni
          </div>
        </div>
      </section>
    </>
  );
}
