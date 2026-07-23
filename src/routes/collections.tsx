import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { waLink } from "@/lib/business";
import interiorNecklace from "@/assets/interior-necklace.asset.json";
import interiorWide from "@/assets/interior-wide.asset.json";
import earrings from "@/assets/earrings.asset.json";
import ring from "@/assets/ring.asset.json";
import storefrontDay from "@/assets/storefront-day.asset.json";
import storefrontNight from "@/assets/storefront-night.asset.json";
import interiorFounder from "@/assets/interior-founder.asset.json";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections — Ruby Jewellers, Chichawatni" },
      { name: "description", content: "Explore Ruby Jewellers' collections — bridal sets, gold necklaces, rings, earrings, bangles and bespoke designs. Visit our showroom in Main Bazar, Chichawatni." },
      { property: "og:title", content: "Collections — Ruby Jewellers" },
      { property: "og:description", content: "Bridal, gold, and bespoke jewellery collections in Chichawatni." },
      { property: "og:image", content: interiorWide.url },
      { name: "twitter:image", content: interiorWide.url },
      { property: "og:url", content: "/collections" },
    ],
    links: [{ rel: "canonical", href: "/collections" }],
  }),
  component: MenuPage,
});

const collections = [
  { name: "Bridal Jewellery", tag: "Signature", img: interiorNecklace.url, desc: "Complete sets designed to make the day unforgettable — necklaces, earrings, tikkas and more." },
  { name: "Gold Necklaces", tag: "22K & 24K", img: interiorWide.url, desc: "Handcrafted necklaces in 22K and 24K gold — from delicate chains to statement pieces." },
  { name: "Earrings", tag: "Everyday to Occasion", img: earrings.url, desc: "Studs, jhumkas, danglers and chandbaalis in classical and modern silhouettes." },
  { name: "Rings", tag: "Bespoke", img: ring.url, desc: "Engagement, wedding, and everyday rings crafted around the stones you love." },
  { name: "Bangles & Bracelets", tag: "Traditional", img: storefrontDay.url, desc: "Kadhas, kangans, kaley and modern bracelets in bold and refined designs." },
  { name: "Pendant Sets", tag: "Signature", img: interiorNecklace.url, desc: "Beautifully finished pendants paired with matching chains and earrings." },
  { name: "Traditional Designs", tag: "Heritage", img: storefrontNight.url, desc: "Timeless motifs — meenakari, jadau, and filigree work rooted in South Asian craft." },
  { name: "Modern Designs", tag: "Contemporary", img: ring.url, desc: "Minimal, architectural pieces for the everyday modern woman." },
  { name: "Custom Jewellery", tag: "Made for you", img: interiorFounder.url, desc: "Bring a memory, a sketch or an heirloom — our team will bring it to life." },
];

function MenuPage() {
  return (
    <>
      <section className="relative pt-40 pb-16 bg-background">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.3em] text-gold-deep">Our Collections</div>
            <h1 className="mt-5 font-serif text-5xl leading-tight sm:text-7xl">
              A world of jewellery,<br />
              <span className="gold-text italic">under one roof.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
              We don&apos;t sell online — but there&apos;s so much more to see in person.
              Browse a few of the categories waiting for you at our showroom.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {collections.map((c, i) => (
              <Reveal key={c.name} delay={(i % 3) * 0.08}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img src={c.img} alt={c.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                    <div className="absolute left-5 top-5 rounded-full border border-cream/30 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-cream backdrop-blur">
                      {c.tag}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-serif text-2xl">{c.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                    <a
                      href={waLink(`Hi Ruby Jewellers, I'd like to see your ${c.name} collection.`)}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-2 self-start text-xs uppercase tracking-[0.25em] text-foreground"
                    >
                      Inquire on WhatsApp
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-cream">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
          <div className="text-[11px] uppercase tracking-[0.3em] text-gold">Bespoke enquiries</div>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl">Looking for something specific?</h2>
          <p className="mt-4 max-w-2xl text-cream/70">
            Tell us what you have in mind — a bridal set, an anniversary piece, or a redesign of a family heirloom. We&apos;ll walk you through the options.
          </p>
          <a href={waLink()} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm text-ink hover:bg-gold-soft transition">
            <MessageCircle className="h-4 w-4" /> Start a conversation
          </a>
        </div>
      </section>
    </>
  );
}
