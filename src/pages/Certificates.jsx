import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, X, ExternalLink } from "lucide-react";
import PageTransition from "../components/common/PageTransition";
import SectionTitle from "../components/common/SectionTitle";
import Card from "../components/common/Card";
import Button from "../components/common/Button";
import {
  certificates as certificateData,
  certificateCategories,
} from "../data/portfolio";

const Certificates = () => {
  const [filter, setFilter] = useState("all");
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = certificateData;

  const categories = certificateCategories;

  const filteredCertificates =
    filter === "all"
      ? certificates
      : certificates.filter((cert) => cert.category === filter);

  return (
    <PageTransition>
      <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Certificates & Awards"
            subtitle="Professional certifications and recognitions"
          />

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={filter === cat.id ? "primary" : "secondary"}
                onClick={() => setFilter(cat.id)}
              >
                {cat.label}
              </Button>
            ))}
          </div>

          {/* Certificates Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredCertificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card
                  glow
                  hover
                  onClick={() => setSelectedCert(cert)}
                  className="h-full cursor-pointer group"
                >
                  {/* Certificate Image */}
                  <div className="relative h-48 -m-6 mb-4 overflow-hidden rounded-t-2xl">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/50 to-transparent opacity-60" />
                    <div className="absolute top-4 right-4">
                      <Award className="w-8 h-8 text-neon-blue" />
                    </div>
                  </div>

                  {/* Certificate Info */}
                  <h3 className="text-lg font-bold mb-2 group-hover:text-neon-blue transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-1">{cert.issuer}</p>
                  <p className="text-xs text-gray-500 mb-4">{cert.date}</p>

                  <Button variant="secondary" size="sm" className="w-full">
                    View Certificate
                  </Button>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Certificate Modal */}
          <AnimatePresence>
            {selectedCert && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCert(null)}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                  className="glass rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center space-x-3">
                      <Award className="w-8 h-8 text-neon-blue" />
                      <h2 className="text-3xl font-bold gradient-text">
                        {selectedCert.title}
                      </h2>
                    </div>
                    <button
                      onClick={() => setSelectedCert(null)}
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="w-full h-64 object-cover rounded-xl mb-6"
                  />

                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-sm text-gray-400">Issued by</p>
                      <p className="text-lg font-semibold">
                        {selectedCert.issuer}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Date</p>
                      <p className="text-lg font-semibold">
                        {selectedCert.date}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Description</p>
                      <p className="text-gray-300">
                        {selectedCert.description}
                      </p>
                    </div>
                  </div>

                  <a
                    href={selectedCert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="primary"
                      icon={ExternalLink}
                      className="w-full"
                    >
                      View Credential
                    </Button>
                  </a>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </PageTransition>
  );
};

export default Certificates;
