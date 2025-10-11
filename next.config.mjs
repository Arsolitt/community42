/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [new URL("https://2bd68006-07cc-41e0-b208-54fa518ebd8e.selstorage.ru/**")]
  },
  output: "standalone",
  reactStrictMode: true,
  compress: false,
};

export default nextConfig;
