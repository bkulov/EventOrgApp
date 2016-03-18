System.config({
  baseURL: "/",
  transpiler: false,
  packages: {
  	source: {
  		format: 'register',
  		defaultExtension: 'js'
  	}
  },
  map: {
  	twitter: 'node_modules/twitter/lib/twitter.js',
  	lodash: 'node_modules/lodash/lodash.js'
  },
  meta: {
  	twitter: {
  		format: 'cjs',
  		defaultExtension: 'js'
  	},
  	lodash: { format: 'amd' }
  }
});
