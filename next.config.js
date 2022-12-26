/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/redirect-permanent",
        destination: "/random-apis",
        permanent: true,
      },
      {
        source: "/redirect-temporary",
        destination: "/banks",
        permanent: false,
      },
    ]
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
