System.config({
  baseURL: "/",
  transpiler: false,
  packages: {
  	source: {
  		format: 'register',
  		defaultExtension: 'js'
  	},
  	"node_modules/twitter-node-client": {
		format: 'cjs',
		defaultExtension: 'js'
  	},
  	"node_modules/twitter-node-client/node_modules": {
		format: 'cjs',
		defaultExtension: 'js'
  	}
  },
  map: {
  	oauth: 'node_modules/twitter-node-client/node_modules/oauth/index.js',
  	qs: 'node_modules/twitter-node-client/node_modules/qs/lib/index.js'
  }
});
