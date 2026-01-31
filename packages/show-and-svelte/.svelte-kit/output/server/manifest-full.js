export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.svg","presentation.css","presentation.js","you-are-here.png"]),
	mimeTypes: {".svg":"image/svg+xml",".css":"text/css",".js":"text/javascript",".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.CFhvVXL8.js",app:"_app/immutable/entry/app.BJkG4cdi.js",imports:["_app/immutable/entry/start.CFhvVXL8.js","_app/immutable/chunks/DjecmZD7.js","_app/immutable/chunks/Bb3yDY_8.js","_app/immutable/chunks/avp9AfXS.js","_app/immutable/entry/app.BJkG4cdi.js","_app/immutable/chunks/Bb3yDY_8.js","_app/immutable/chunks/3FIXkHLy.js","_app/immutable/chunks/D4CxSySD.js","_app/immutable/chunks/bhMCKKB8.js","_app/immutable/chunks/avp9AfXS.js","_app/immutable/chunks/DBYUX2yS.js","_app/immutable/chunks/1hXbowTx.js","_app/immutable/chunks/DI86ad0J.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
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
			},
			{
				id: "/presentations/create-raw-snippet",
				pattern: /^\/presentations\/create-raw-snippet\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/presentations/magic-move",
				pattern: /^\/presentations\/magic-move\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/tutorial-0.0.3",
				pattern: /^\/tutorial-0\.0\.3\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
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
