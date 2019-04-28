import babel from 'rollup-plugin-babel';
import cjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { uglify } from 'rollup-plugin-uglify';
import run from 'rollup-plugin-run';
import serve from 'rollup-plugin-serve'
import pkg from './package.json'
import fs from 'fs';
import { fsizeSync, rmdirsSync } from 'nodejs-fs-utils';
import boxen from 'boxen';
import chalk from 'chalk';

const production = !process.env.ROLLUP_WATCH;
const development = process.env.ROLLUP_WATCH;
const RUN = process.env.RUN;

// Default options
const devServerOptions = {
  verbose: false,
  contentBase: ['dist'],
  host: 'localhost',
	port: 8080,
  headers: {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Range',
  }
};


const boxOptions = {
	borderColor: "gray",
	padding: 1,
	borderStyle: "round",
}

const logger = () => {
	return {
		writeBundle(bundle) {
			
			const bundleSize = parseFloat(Math.round(fsizeSync(pkg.files[0])) / 1024).toFixed(2);			
			const filesPaths = [];
			const extensionRegex = /\.[0-9a-z]+$/i;
				
			const items = fs.readdirSync(pkg.files[0]);

			for (var i=0; i<items.length; i++) {
				const extension = items[i].match(extensionRegex)[0];		

				if (extension === '.js') {
					filesPaths.push(chalk.white.bold('js:     ')+chalk.white(`${items[i]}`));
				}
				else if (extension === '.css') {
					filesPaths.push(chalk.white.bold('css:    ')+chalk.white(`${items[i]}`));
				}
			}			

			if (development) {
				const devContent = [
					chalk.green.bold('FOR PLUGIN MANAGER:'),
					chalk.white.bold('port:   ')+chalk.white(devServerOptions.port),
					...filesPaths,
				];

				console.log(boxen(devContent.join("\n"), boxOptions));
			}

			if (production) {
				const productionContent = [
					chalk.green.bold('PUBLISHING INFO'),
					...filesPaths,
					chalk.white.bold('size:   ') + chalk.white(`${bundleSize}KB`) + chalk.gray(' (Keep it under 100KB)'),
					chalk.white.bold('guide:  ') + chalk.white('https://docs.figmaplus.com/#/developerGuide/publish'),
				];

				console.log(boxen(productionContent.join("\n"), boxOptions));
			}

		}
	}
}

const distCleaner = () => {
	return {
		buildStart () {
			rmdirsSync(pkg.files[0], { skipErrors: true });
		}
	}
}

export default [
	// browser-friendly UMD build
	{
		input: 'src/index.js',
		output: {
			name: pkg.name,
			file: `${pkg.files[0]}/${pkg.name}.js`,
			format: 'umd'
		},
		plugins: [
			distCleaner(),
			resolve(),
      babel({runtimeHelpers: true,}),
      cjs(),
			development && RUN && run(), // Dev mode: run the bundle to see output in console/terminal
			development && serve(devServerOptions), // Dev Serve mode: serve  bundle
			production && uglify(), // Production: uglify bundle,
			logger()
    ],
	},
];