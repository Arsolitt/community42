/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [new URL("https://a4112309-27c2-439e-8511-25552ebd8118.selstorage.ru/**")],
    qualities: [90, 100],
  },
  output: "standalone",
  reactStrictMode: true,
  compress: false,
};

export default nextConfig;
