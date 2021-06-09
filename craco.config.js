// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@base': path.resolve(__dirname, 'src/base/'),
      '@layouts': path.resolve(__dirname, 'src/layouts/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@views': path.resolve(__dirname, 'src/views/'),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^@assets(.*)$': '<rootDir>/src/assets$1',
        '^@base(.*)$': '<rootDir>/src/base$1',
        '^@layouts(.*)$': '<rootDir>/src/layouts$1',
        '^@styles(.*)$': '<rootDir>/src/styles$1',
        '^@utils(.*)$': '<rootDir>/src/utils$1',
        '^@views(.*)$': '<rootDir>/src/views$1',
      },
    },
  },
};
