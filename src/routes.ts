import { CACHE_ASSETS } from './cache'
import { Router } from '@layer0/core/router'
import shoppingFlowRouteHandler from './shoppingFlowRouteHandler'

export default new Router()

  // Home page
  .match('/', shoppingFlowRouteHandler)
  .match('/home', shoppingFlowRouteHandler)

  // PLP pages
  .match('/new/:path*', shoppingFlowRouteHandler)

  // PDP pages
  .match('/bath/bath-bombs/:path*', shoppingFlowRouteHandler)
  .match('/extras/knot-wraps/:path*', shoppingFlowRouteHandler)
  .match('/fragrances/perfume-library/:path*', shoppingFlowRouteHandler)
  .match('/shower/shower-gels/:path*', shoppingFlowRouteHandler)
  .match('/gifts/all-gift-sets/:path*', shoppingFlowRouteHandler)

  // Example route for cacheable assets
  .match('/images/:path*', ({ cache, proxy }) => {
    cache(CACHE_ASSETS)
    return proxy('origin')
  })
  //cache for images in /dw/image/v2 path
  .match('/dw/image/v2', ({ cache, proxy }) => {
    cache(CACHE_ASSETS)
    return proxy('origin')
  })

  // Layer0: Service Worker and Browser.js
  .match('/service-worker.js', ({ serviceWorker }) =>
    serviceWorker('dist/service-worker.js')
  )
  .match('/main.js', ({ serveStatic, cache }) => {
    cache(CACHE_ASSETS)
    return serveStatic('dist/browser.js')
  })

  // Fallback route for all other requests
  .fallback(({ proxy }) => {
    proxy('origin')
  })
