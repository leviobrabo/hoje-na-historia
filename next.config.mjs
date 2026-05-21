/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
      { protocol: 'https', hostname: '*.wikimedia.org' },
      { protocol: 'https', hostname: 'static.historiadomundo.com.br' },
      { protocol: 'https', hostname: 'cdn-blog.superprof.com' },
      { protocol: 'https', hostname: '*.wikipedia.org' },
      { protocol: 'https', hostname: '*.wp.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
};

export default nextConfig;
