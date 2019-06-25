import path from 'path';
// import axios from 'axios';

export default {
  getRoutes: async () => {
    return [
      { path: '/' },
    ];
  },
  plugins: [
    require.resolve('react-static-plugin-styled-components'),
    require.resolve('react-static-plugin-sass'),
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
};
