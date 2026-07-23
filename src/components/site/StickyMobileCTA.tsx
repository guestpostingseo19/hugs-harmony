import { Phone, MessageCircle, MapPin } from "lucide-react";
import { business, telLink, waLink } from "@/lib/business";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-3 bottom-3 z-40 md:hidden">
      <div className="grid grid-cols-3 gap-2 rounded-2xl border border-border/70 bg-background/90 p-2 shadow-2xl backdrop-blur-xl">
        <a href={telLink(business.phones[0].number)} className="flex flex-col items-center gap-1 rounded-xl bg-ink py-2.5 text-cream">
          <Phone className="h-4 w-4 text-gold" />
          <span className="text-[10px] uppercase tracking-widest">Call</span>
        </a>
        <a href={waLink()} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 rounded-xl bg-gold py-2.5 text-ink">
          <MessageCircle className="h-4 w-4" />
          <span className="text-[10px] uppercase tracking-widest font-medium">WhatsApp</span>
        </a>
        <a href={business.directionsUrl} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 rounded-xl bg-ink py-2.5 text-cream">
          <MapPin className="h-4 w-4 text-gold" />
          <span className="text-[10px] uppercase tracking-widest">Directions</span>
        </a>
      </div>
    </div>
  );
}
