import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { IconCircle } from "@/components/ui/IconCircle";
import { Phone, Mail, MapPin, Chat, ArrowRight } from "@/components/ui/icons";
import { PageHero } from "@/components/sections/shared/PageHero";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { CTABand } from "@/components/sections/shared/CTABand";
import { site } from "@/lib/content/site";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact Lumirise | Get a Transport Quote | Dar es Salaam, Tanzania",
  description:
    "Get a quote within 24 hours. Call +255 762 361 374 or email info@lumirise.co.tz. Tanzania's trusted transport partner.",
};

const tel = `tel:${site.phonePrimary.replace(/\s/g, "")}`;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title={
          <>
            Let&apos;s move <span className="text-gold">your cargo.</span>
          </>
        }
        sub="We'd love to partner with you. Reach out for a quote, a question, or a conversation about your logistics needs."
        image={images.goldenHour}
        alt="Lumirise trucks at golden hour"
      />

      {/* Contact details + map */}
      <Section bg="white">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-stretch">
          <Reveal>
            <div className="space-y-7">
              <ContactRow icon={Phone} title="Phone">
                {site.phones.map((p) => (
                  <a
                    key={p}
                    href={`tel:${p.replace(/\s/g, "")}`}
                    className="block hover:text-gold"
                  >
                    {p}
                  </a>
                ))}
              </ContactRow>
              <ContactRow icon={Mail} title="Email">
                <a
                  href={`mailto:${site.email}`}
                  className="hover:text-gold"
                >
                  {site.email}
                </a>
              </ContactRow>
              <ContactRow icon={MapPin} title="Address">
                {site.address.line1}
                <br />
                {site.address.city}
                <br />
                {site.address.poBox}
              </ContactRow>
              <ContactRow icon={Chat} title="Business Hours">
                {site.hours}
                <span className="text-muted"> (to confirm)</span>
              </ContactRow>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="h-full min-h-80 overflow-hidden rounded-[var(--radius-card)] border border-divider">
              <iframe
                title="Lumirise office location — Dar es Salaam"
                src="https://www.google.com/maps?q=Buza,+Dar+es+Salaam,+Tanzania&output=embed"
                className="h-full min-h-80 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Contact form */}
      <Section bg="cream">
        <SectionHeading
          eyebrow="SEND A MESSAGE"
          title="Tell us how we can help."
          max="max-w-2xl"
        />
        <Reveal className="mt-12">
          <ContactForm />
        </Reveal>
      </Section>

      {/* Quick channels */}
      <Section bg="white">
        <SectionHeading
          eyebrow="QUICK CHANNELS"
          title="Reach us the way that suits you."
          max="max-w-2xl"
        />
        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          <ChannelTile
            icon={Phone}
            title="Call Us"
            body="Fastest response. Click to call."
            href={tel}
            cta="Call now"
          />
          <ChannelTile
            icon={Chat}
            title="WhatsApp"
            body="Message us on WhatsApp Business."
            href={`https://wa.me/${site.whatsapp}`}
            cta="Open WhatsApp"
          />
          <ChannelTile
            icon={Mail}
            title="Email"
            body="Detailed inquiries welcome."
            href={`mailto:${site.email}`}
            cta="Send email"
          />
        </Stagger>
      </Section>

      <CTABand headline="Safe. Reliable. On Time. — Tanzania's Trusted Transport Partner." />
    </>
  );
}

function ContactRow({
  icon,
  title,
  children,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-5">
      <IconCircle icon={icon} />
      <div>
        <h3 className="text-sm font-bold uppercase tracking-wide text-gold">
          {title}
        </h3>
        <div className="mt-2 text-lg font-semibold text-navy">{children}</div>
      </div>
    </div>
  );
}

function ChannelTile({
  icon: Icon,
  title,
  body,
  href,
  cta,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  body: string;
  href: string;
  cta: string;
}) {
  return (
    <StaggerItem className="h-full">
      <a
        href={href}
        className="group flex h-full flex-col rounded-[var(--radius-card)] border border-divider bg-cream p-8 transition-colors hover:border-gold/50"
      >
        <IconCircle icon={Icon} />
        <h3 className="mt-5 text-xl font-bold text-navy">{title}</h3>
        <p className="mt-2 flex-1 text-muted">{body}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold">
          {cta}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </a>
    </StaggerItem>
  );
}
