import Link from "next/link";
import { Phone, ArrowRight } from "@/components/ui/icons";
import { site } from "@/lib/content/site";

/** Spec §15: sticky bottom Call/Quote bar on mobile for one-tap conversion. */
export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-px border-t border-white/10 bg-navy lg:hidden">
      <a
        href={`tel:${site.phonePrimary.replace(/\s/g, "")}`}
        className="flex items-center justify-center gap-2 py-4 text-sm font-semibold text-white"
      >
        <Phone className="h-4 w-4 text-gold" /> Call
      </a>
      <Link
        href="/quote"
        className="flex items-center justify-center gap-2 bg-gold py-4 text-sm font-semibold text-navy"
      >
        Get a Quote <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
