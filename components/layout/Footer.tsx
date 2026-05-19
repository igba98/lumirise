import Image from "next/image";
import Link from "next/link";
import { Logo } from "./Logo";
import { ArrowRight, Phone, Mail, MapPin, Chat } from "@/components/ui/icons";
import { footerColumns, site } from "@/lib/content/site";
import { images } from "@/lib/images";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      <Image
        src={images.goldenHour}
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-[0.07]"
      />
      <div className="absolute inset-0 bg-navy/80" />

      <div className="container-x relative py-20">
        {/* Top block */}
        <div className="flex flex-col gap-8 border-b border-white/10 pb-14 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-xl text-3xl font-extrabold leading-tight md:text-4xl">
            We keep the region&apos;s cargo moving.{" "}
            <span className="text-gold">Safely. Reliably. On time.</span>
          </h2>
          <form className="flex w-full max-w-md items-center gap-2 rounded-full border border-white/20 bg-white/5 p-1.5">
            <input
              type="email"
              required
              placeholder="Your email address"
              aria-label="Email address"
              className="w-full bg-transparent px-5 text-sm text-white outline-none placeholder:text-white/40"
            />
            <button
              type="submit"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-navy transition-colors hover:bg-gold-bright"
            >
              Subscribe <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>

        {/* Four columns */}
        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo tone="light" />
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.15em] text-gold">
              {site.tagline}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              {site.description}
            </p>
          </div>

          <FooterCol title="Pages" links={footerColumns.pages} />
          <FooterCol title="Services" links={footerColumns.services} />

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white/50">
              Get in Touch
            </h3>
            <ul className="mt-6 space-y-4 text-sm text-white/70">
              <li>
                <a
                  href={`tel:${site.phonePrimary.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 hover:text-gold"
                >
                  <Phone className="h-4 w-4 text-gold" /> {site.phonePrimary}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 hover:text-gold"
                >
                  <Mail className="h-4 w-4 text-gold" /> {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>
                  {site.address.line1}
                  <br />
                  {site.address.city}
                </span>
              </li>
              <li>
                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  className="flex items-center gap-3 hover:text-gold"
                >
                  <Chat className="h-4 w-4 text-gold" /> WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name} · {site.address.city}
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white/50">
        {title}
      </h3>
      <ul className="mt-6 space-y-3 text-sm text-white/70">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="transition-colors hover:text-gold">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
