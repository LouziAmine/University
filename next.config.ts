import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Mode Strict de React pour détecter des problèmes pendant le développement
  reactStrictMode: true,

  // Configuration des images pour next/image
  images: {
    // Formats d'image supportés (optimisation pour la performance)
    formats: ["image/webp", "image/avif"],
    // Domaines externes autorisés pour les images (si vous utilisez des images externes)
    domains: [], // Exemple : ["example.com", "another-domain.com"]
  },

  // Configuration ESLint (optionnel)
  eslint: {
    // Ignorer les erreurs ESLint pendant les builds (désactive les vérifications ESLint pendant `next build`)
    ignoreDuringBuilds: true,
  },

  // Configuration pour les fichiers statiques (optionnel)
  // Si vous avez des fichiers statiques dans le dossier `public`, cette partie est déjà gérée par défaut
};

export default nextConfig;
