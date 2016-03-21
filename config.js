System.config({
  baseURL: "/",
  paths: {
  },
  packages: {
  	source: {
  		format: 'register',
  		defaultExtension: 'js'
  	},
	'node_modules/noauth': {
		format: 'cjs',
		defaultExtension: 'js'
	}
  },
  map: {
  	'noauth': 'node_modules/noauth/lib/index.js',
	'util': 'node_modules/util/util.js'
  }
});
