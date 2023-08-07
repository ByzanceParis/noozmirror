import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/NoozMirror.ts',
  output: {
    dir: 'bundle',
    format: 'iife',
    name:'NoozMirror'
  },
  plugins: [typescript()]
};
