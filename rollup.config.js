import { uglify } from "rollup-plugin-uglify";
import replace from 'rollup-plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy'
import svelte from 'rollup-plugin-svelte';
import autoPreprocess from 'svelte-preprocess';

import vue from 'rollup-plugin-vue'

import typescript from '@rollup/plugin-typescript';

export default {
    input: 'src/app.ts',
    output: {
      dir: 'rollup-dist',
      format: 'es',
    },
    plugins: [
        copy({
            targets: [{src : 'src/index.html' ,  dest : 'rollup-dist'}]
        }),
        svelte({
            preprocess: autoPreprocess()
        }),
        vue(/* options */)
        ,
        typescript(),
        commonjs(),
        babel({ babelHelpers: 'bundled' }),
        nodeResolve(),
        replace({
            'process.env.NODE_ENV': JSON.stringify( 'production' )
		}),
        uglify(),
    ]
  };