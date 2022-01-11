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
  build : {
    bundle: true,
    sourcemap: false,
    minify: true,
    target: 'es2017',
    //entrypoints: ["src/assets/scripts/Main.js", "src/assets/scripts/Home.js", "src/assets/scripts/City.js", "src/assets/scripts/sw.js", "src/assets/scripts/Servise.js"]
  },
  packageOptions:{},
  devOptions:{},
  buildOptions:{
    out: "snowpack-dist",
  }
}
