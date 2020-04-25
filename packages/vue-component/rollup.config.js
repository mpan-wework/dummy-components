import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import vue from 'rollup-plugin-vue'

export default {
  input: 'src/index.js',
  plugins: [
    resolve({
      extensions: ['.js', '.vue'],
    }),
    babel({
      extensions: ['.js', '.vue'],
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
      ],
      plugins: []
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
  plugins: [
    vue(),
  ],
};
