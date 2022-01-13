const sveltePreprocess =  require('svelte-preprocess');

// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount : {
    public: "/dist",
    src: "/"
  },
  plugins :[
    ['@snowpack/plugin-react-refresh'],
    '@snowpack/plugin-vue',
    ['@snowpack/plugin-svelte', { preprocess: sveltePreprocess() }],
    ['@snowpack/plugin-typescript', { args: "--project ./tsconfig.json" }],
    ['@snowpack/plugin-sass', {
      compilerOptions: {
        style: "compressed",
      }
    }],
  ],
  optimize : {
    bundle: true,
    sourcemap: false,
    minify: true,
    target: 'es2017',
    entrypoints: ["src/app.ts"]
  },
  packageOptions:{},
  devOptions:{},
  buildOptions:{
    out: "snowpack-dist",
  }
}
