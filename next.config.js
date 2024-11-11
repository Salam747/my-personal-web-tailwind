/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(woff(2)?|ttf|eot|otf)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 1000, // Inline files smaller than 1kB
            name: '[name].[ext]',
            outputPath: 'fonts/',
            publicPath: '/_next/static/fonts/',
            esModule: false,
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
