const nextConfig = {
    distDir: 'build',
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(mp4|webm)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'static/videos', // Output directory for the video files
              publicPath: '/next/static/videos', // Public path to access the videos from the browser
            },
          },
        ],
      });
  
      return config;
    },
  };
  
  module.exports = nextConfig;
