/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
   assetPrefix: '/landing/',
   rewrites(){
      return[
        {
          source:'/landing/_next/:path*', destination: '/_next/:path*'
        }
      ]
   },
   images: {
    domains: ['temp-public-bucket-for-test.s3.ap-south-1.amazonaws.com','dev-landing-pages-bucket.s3.ap-south-1.amazonaws.com','prod-landing-pages-bucket.s3.ap-south-1.amazonaws.com'],
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'temp-public-bucket-for-test.s3.ap-south-1.amazonaws.com'
  //     },
  //   ],
  // },
};

export default nextConfig;
