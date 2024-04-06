//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  webpack: (config) => {
    config.externals = [
      ...(config.externals || []),
      'bigint',
      'node-gyp-build',
    ];
    return config;
  },
  nx: {
    svgr: false,
  },
  experimental: {
    serverActions: true,
  }, // Adding experimental.serverActions option
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
