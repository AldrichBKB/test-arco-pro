import { mergeConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import baseConfig from './vite.config.base';

export default mergeConfig(
  {
    mode: 'development',
    server: {
      host: true,
      port: '3000',
      open: true,
      fs: {
        strict: true,
      },
      // return axios.get('http://git.mabangerp.com:2280/api/v4/groups/217/projects',{headers:{'PRIVATE-TOKEN':'422Wo-DwQPZ4_3xVLN78'}})
      proxy: {
        '/api': {
          target: 'http://git.mabangerp.com:2280',
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    plugins: [
      eslint({
        cache: false,
        include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue'],
        exclude: ['node_modules'],
      }),
    ],
  },
  baseConfig
);
