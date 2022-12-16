import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import macrosPlugin from 'vite-plugin-babel-macros';

const srcPath = path.resolve(__dirname, 'src');
const resolvedSrcPath = path.resolve(srcPath);

export default defineConfig({
  define: {
    'process.env': {},
    Buffer: {},
    //styled components
  },
  resolve: {
    alias: {
      src: path.resolve('src/'),
      components: path.resolve('src/components/'),
      pages: path.resolve('src/pages/'),
      utils: path.resolve('src/utils/'),
      assets: path.resolve('src/assets/'),
      styles: path.resolve('src/styles/'),
      hooks: path.resolve('src/hooks/'),
      context: path.resolve('src/context/'),
      services: path.resolve('src/services/'),
      store: path.resolve('src/store/'),
      types: path.resolve('src/types/'),
      config: path.resolve('src/config/'),
      constants: path.resolve('src/constants/'),
      apis: path.resolve('src/apis/'),
      routes: path.resolve('src/routes/'),
      translations: path.resolve('src/translations/'),
      helpers: path.resolve('src/helpers/'),
      tests: path.resolve('src/tests/'),
      mocks: path.resolve('src/mocks/'),
      fixtures: path.resolve('src/fixtures/'),
      public: path.resolve('public/'),
      utlis: path.resolve('src/utlis/'),
      layouts: path.resolve('src/layouts/'),
      // redux: path.resolve('src/redux/'),
    },
  },

  plugins: [react(), macrosPlugin()],
});
