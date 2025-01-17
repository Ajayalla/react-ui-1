import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';

import pkg from './package.json';

export default defineConfig({
  input: './index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {}), 'react/jsx-runtime'],
  plugins: [typescript()],
});
