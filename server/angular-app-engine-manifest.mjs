
export default {
  basePath: 'https://ngawangchoeying.github.io/gya',
  allowedHosts: [],
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
