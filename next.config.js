/** @type {import('next').NextConfig} */
/*
const nextConfig = {
    images : {
        domains : [  "localhost:1337" ] ,
    }
};
*/
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'localhost',
          port: '1337',
          pathname: '/uploads/**',
        },
        {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/**',

        },
      ],
    },
  }

//module.exports = nextConfig
