import { Reveal } from "@/components/ui/Reveal";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { IconCircle } from "@/components/ui/IconCircle";
import { CheckList } from "@/components/ui/CheckList";
import { Button } from "@/components/ui/Button";
import { serviceIcons, type Service } from "@/lib/content/services";
import { serviceImage } from "@/lib/images";
import { cn } from "@/lib/cn";

/** Spec §6.2 — large alternating image / content service card. */
export function ServiceRow({
  service,
  flip,
}: {
  service: Service;
  flip: boolean;
}) {
  const Icon = serviceIcons[service.slug];
  return (
    <div className="grid gap-10 lg:grid-cols-5 lg:items-center">
      <Reveal
        className={cn("lg:col-span-2", flip && "lg:order-2")}
        delay={0.05}
      >
        <ImageFrame
          src={serviceImage[service.slug]}
          alt={service.name}
          ratio="aspect-[4/3]"
        />
      </Reveal>
      <Reveal className="lg:col-span-3">
        <div className="flex items-center gap-4">
          <IconCircle icon={Icon} />
          <h3 className="text-2xl font-extrabold text-navy md:text-3xl">
            {service.name}
          </h3>
        </div>
        <p className="mt-5 text-base leading-relaxed text-muted">
          {service.overview}
        </p>
        <CheckList
          items={service.transports}
          className="mt-6 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:space-y-0 [&>li]:mt-3"
        />
        <div className="mt-8">
          <Button href={`/services/${service.slug}`} variant="text">
            Learn more
          </Button>
        </div>
      </Reveal>
    </div>
  );
}
