/* jshint esversion: 11 */
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcssflexbugsfixes = require('postcss-flexbugs-fixes');

const mode = process.env.NODE_ENV;
const dev = mode === 'development';

const config = {
	plugins: [
		autoprefixer({
			cascade: true
		}),
		!dev &&
			cssnano({
				preset: 'advanced'
			}),
		postcssflexbugsfixes()
	]
};

module.exports = config;
