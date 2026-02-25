
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://ngawangchoeying.github.io/gya/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 9111, hash: '202a430b9c71471e0efc8d6557c84d0e882b153ddcf7cfca29d12dd837e56f28', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1037, hash: '2c874dc7bc55ffa815e2b3ee27826d2f0188559fdafbc2a895e8ee90ee4d360e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-AE2LPKDR.css': {size: 37454, hash: 'DO3wl/HHxA8', text: () => import('./assets-chunks/styles-AE2LPKDR_css.mjs').then(m => m.default)}
  },
};
