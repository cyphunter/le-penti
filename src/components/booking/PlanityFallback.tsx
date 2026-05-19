import { ExternalLink, Calendar, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/lib/site";
import { services, formatPrice, formatDuration } from "@/lib/services";

/**
 * Affiché tant que la clé API Planity n'est pas en variable d'env.
 * Permet de livrer le site et brancher la réservation en ligne plus tard.
 */
export function PlanityFallback() {
  return (
    <Container className="py-12">
      <Reveal>
        <div className="border border-ink bg-paper px-8 py-12 lg:px-14 lg:py-16">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-ink">
            <Sparkles className="size-3.5" aria-hidden />
            Réservation Planity
          </div>
          <h2 className="mt-6 font-display text-[clamp(2rem,1.5rem+3vw,4rem)] tracking-tighter leading-[0.92] text-balance">
            Réservez en quelques secondes,
            <br />
            <span className="italic">24 h&nbsp;/&nbsp;24</span>.
          </h2>
          <p className="mt-6 max-w-xl text-ink/70 leading-relaxed text-pretty">
            Choisissez votre prestation, votre coiffeur et votre créneau directement sur Planity. La confirmation arrive immédiatement par email.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <LinkButton href={site.social.planity} external withArrow size="lg">
              Réserver sur Planity
            </LinkButton>
            {site.contact.phone && (
              <LinkButton href={`tel:${site.contact.phone}`} variant="secondary" size="lg">
                Appeler le salon
              </LinkButton>
            )}
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-ink/15">
            <div className="flex items-start gap-3">
              <Calendar className="size-5 text-ink mt-0.5" aria-hidden />
              <div>
                <h3 className="font-medium text-sm">Disponibilités en direct</h3>
                <p className="text-xs text-mute mt-1">Créneaux mis à jour instantanément.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ExternalLink className="size-5 text-ink mt-0.5" aria-hidden />
              <div>
                <h3 className="font-medium text-sm">Confirmation immédiate</h3>
                <p className="text-xs text-mute mt-1">Email dès la validation du créneau.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Sparkles className="size-5 text-ink mt-0.5" aria-hidden />
              <div>
                <h3 className="font-medium text-sm">Sans frais</h3>
                <p className="text-xs text-mute mt-1">Service de réservation gratuit.</p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={150}>
        <div className="mt-16">
          <h3 className="font-display text-2xl tracking-tight">Aperçu de la carte</h3>
          <ul className="mt-6 divide-y divide-ink/15 border-y border-ink/15">
            {services.map((service) => (
              <li key={service.slug} className="flex items-baseline justify-between gap-6 py-4">
                <span className="font-medium">{service.name}</span>
                <span className="flex items-baseline gap-4 text-sm">
                  <span className="text-mute tabular-nums">{formatDuration(service.durationMinutes)}</span>
                  <span className="font-display italic text-xl tabular-nums">
                    {formatPrice(service.priceEuros)}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Container>
  );
}
