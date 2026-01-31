export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.svg","presentation.css","presentation.js"]),
	mimeTypes: {".svg":"image/svg+xml",".css":"text/css",".js":"text/javascript"},
	_: {
		client: {start:"_app/immutable/entry/start.MVmBDCGN.js",app:"_app/immutable/entry/app.dDggbgCK.js",imports:["_app/immutable/entry/start.MVmBDCGN.js","_app/immutable/chunks/BQAgDx-U.js","_app/immutable/chunks/B6q2sOTV.js","_app/immutable/chunks/2QFx2vPn.js","_app/immutable/entry/app.dDggbgCK.js","_app/immutable/chunks/2QFx2vPn.js","_app/immutable/chunks/B6q2sOTV.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/B396m4_O.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
