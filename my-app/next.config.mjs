/** @type {import('next').NextConfig} */
const nextConfig = {
    api: {
      bodyParser: false,
    },
    experimental: {
      serverComponentsExternalPackages: ["pdf-parse"],
    },
    
  };

export default nextConfig;
