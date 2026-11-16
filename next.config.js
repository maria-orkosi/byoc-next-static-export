/** @type {import('next').NextConfig} */
// Sample 2 — output: 'export' means `next build` writes the whole site to out/: a static frontend, no server.
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
};
module.exports = nextConfig;
