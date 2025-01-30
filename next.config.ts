// next.config.js
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuración de Internacionalización (i18n)
  i18n: {
    locales: ['ja'],          // Define solo japonés como locale
    defaultLocale: 'ja',      // Establece japonés como el locale predeterminado
  },
  
  // Otras configuraciones pueden ir aquí
  // Por ejemplo, si usas imágenes, fuentes personalizadas, etc.
  // image: {
  //   domains: ['example.com'],
  // },
};

export default nextConfig;