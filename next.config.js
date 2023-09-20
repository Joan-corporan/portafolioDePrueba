/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'portfolio-demo-sandy.vercel.app',
            port: '',
            pathname: '/**',
          },
        ],
      },
}

module.exports = nextConfig
