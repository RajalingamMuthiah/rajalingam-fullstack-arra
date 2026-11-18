import { Award, ExternalLink } from "lucide-react";
import PageTransition from "../components/common/PageTransition";
import SectionTitle from "../components/common/SectionTitle";
import Card from "../components/common/Card";
import { certificates } from "../data/portfolio";

const Certificates = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Certificates"
            subtitle="Professional certifications and job simulations"
          />

          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((cert) => (
              <li key={cert.id}>
                <Card glow hover={false} className="h-full flex flex-col gap-2 overflow-hidden">
                  <div className="relative h-44 -mx-6 -mt-6 mb-3 overflow-hidden">
                    {cert.image ? (
                      <img
                        src={cert.image}
                        alt={`${cert.title} certificate`}
                        loading="lazy"
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-neon-blue/20 via-neon-purple/15 to-transparent flex flex-col items-center justify-center gap-2">
                        <Award className="w-14 h-14 text-neon-blue" aria-hidden="true" />
                        <span className="text-xs uppercase tracking-widest text-gray-400">
                          {cert.issuer}
                        </span>
                      </div>
                    )}
                  </div>

                  <h2 className="text-lg font-bold">{cert.title}</h2>
                  <p className="text-sm text-gray-400">
                    {cert.issuer}
                    {cert.date && <> · {cert.date}</>}
                  </p>
                  {cert.credentialId && (
                    <p className="text-xs text-gray-500">
                      Credential ID:{" "}
                      <span className="font-mono text-gray-300">
                        {cert.credentialId}
                      </span>
                    </p>
                  )}
                  {cert.description && (
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {cert.description}
                    </p>
                  )}

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${cert.title} certificate (PDF, opens in a new tab)`}
                      className="mt-auto pt-3 inline-flex items-center gap-1.5 text-sm font-medium text-neon-blue hover:underline"
                    >
                      <ExternalLink className="w-4 h-4" aria-hidden="true" />
                      View certificate
                    </a>
                  )}
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageTransition>
  );
};

export default Certificates;
