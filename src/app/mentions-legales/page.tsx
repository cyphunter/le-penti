import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section, Eyebrow } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Mentions légales",
  description: `Mentions légales du site ${site.name}.`,
  path: "/mentions-legales",
  noIndex: true,
});

export default function MentionsLegalesPage() {
  return (
    <Section className="pt-40 pb-24">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>Mentions légales</Eyebrow>
          <h1 className="mt-6 font-display text-[clamp(2.25rem,1.5rem+3vw,4rem)] tracking-tight leading-[0.95]">
            Informations <span className="italic">légales</span>.
          </h1>

          <div className="prose-content mt-12 space-y-12 text-ink/80 leading-relaxed">
            <section>
              <h2 className="font-display text-2xl tracking-tight text-ink mb-4">Éditeur du site</h2>
              <ul className="space-y-1.5">
                <li>
                  <strong className="text-ink">Raison sociale :</strong> {site.name}
                </li>
                <li>
                  <strong className="text-ink">Forme juridique :</strong> [À compléter — ex. EURL, SARL, EI]
                </li>
                <li>
                  <strong className="text-ink">Adresse :</strong> {site.address.street},{" "}
                  {site.address.postalCode} {site.address.city}
                </li>
                <li>
                  <strong className="text-ink">SIRET :</strong> [À compléter]
                </li>
                <li>
                  <strong className="text-ink">Téléphone :</strong>{" "}
                  {site.contact.phone || "[À compléter]"}
                </li>
                <li>
                  <strong className="text-ink">Email :</strong>{" "}
                  {site.contact.email || "[À compléter]"}
                </li>
                <li>
                  <strong className="text-ink">Responsable de la publication :</strong> [À compléter]
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl tracking-tight text-ink mb-4">Hébergement</h2>
              <p>
                Ce site est hébergé par <strong className="text-ink">Vercel Inc.</strong>, 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.{" "}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink underline hover:underline underline-offset-4"
                >
                  vercel.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl tracking-tight text-ink mb-4">Propriété intellectuelle</h2>
              <p>
                L&apos;ensemble des contenus présents sur ce site (textes, images, graphismes, logos, vidéos) sont la propriété exclusive de {site.name} ou de leurs auteurs respectifs. Toute reproduction, représentation, modification, publication, transmission, dénaturation, totale ou partielle du site ou de son contenu est strictement interdite sans autorisation écrite préalable.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl tracking-tight text-ink mb-4">Données personnelles</h2>
              <p>
                Aucune donnée personnelle n&apos;est collectée par ce site. La prise de rendez-vous est gérée par notre partenaire{" "}
                <a
                  href={site.social.planity}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink underline hover:underline underline-offset-4"
                >
                  Planity
                </a>
                , dont la politique de confidentialité s&apos;applique pour toute réservation effectuée via leur plateforme.
              </p>
              <p className="mt-4">
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression et d&apos;opposition aux données vous concernant. Pour exercer ce droit, contactez-nous à l&apos;adresse indiquée ci-dessus.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl tracking-tight text-ink mb-4">Cookies & mesure d&apos;audience</h2>
              <p>
                Ce site utilise Vercel Analytics et Vercel Speed Insights pour mesurer la fréquentation et les performances de manière anonyme. Aucun cookie de suivi publicitaire n&apos;est déposé. Aucune donnée n&apos;est partagée avec des tiers à des fins commerciales.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl tracking-tight text-ink mb-4">Crédits</h2>
              <p>
                Conception et développement : [À compléter]. Photographies : [À compléter]. Polices : Fraunces &amp; Inter Tight (Google Fonts, licence SIL Open Font).
              </p>
            </section>
          </div>
        </div>
      </Container>
    </Section>
  );
}
