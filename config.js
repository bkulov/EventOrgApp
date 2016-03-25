System.config({
  baseURL: "/",
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
  },
  packages: {
  	source: {
  		format: 'register',
  		defaultExtension: 'js'
  	},
  	'node_modules/codebird': {
  		//format: 'amd',
  		defaultExtension: 'js'
  	}
  },
  map: {
  	'codebird': 'node_modules/codebird/codebird.js',
  	'json': 'node_modules/systemjs-plugin-json/json.js'
  },
  meta: {
  	'*.json': { loader: 'json' }
  }
});
