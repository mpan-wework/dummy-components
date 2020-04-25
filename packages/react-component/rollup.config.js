import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/index.js',
  plugins: [
    resolve({
      extensions: ['.js', '.jsx'],
    }),
    babel({
      extensions: ['.js', '.jsx'],
      include: ['src/**/*'],
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              'esmodules': true
            }
          }
        ],
        [
          '@babel/preset-react'
        ],
      ],
      "plugins": []
    }),
  ],
  output: [
    {
      file: 'dist/cjs/index.js',
      format: 'cjs',
    },
    {
      file: 'dist/es/index.js',
      format: 'es',
    },
  ],
  external: ['react'],
};
