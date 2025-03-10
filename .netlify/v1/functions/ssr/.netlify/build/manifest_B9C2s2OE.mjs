import 'cookie';
import 'kleur/colors';
import './chunks/astro/server_DLzdKqjW.mjs';
import 'clsx';
import 'html-escaper';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/254428/PersonalProjects/portfolio/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.DFwqf4PB.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_astro/ec.dy9ns.js","pattern":"^\\/_astro\\/ec\\.dy9ns\\.js$","segments":[[{"content":"_astro","dynamic":false,"spread":false}],[{"content":"ec.dy9ns.js","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro-expressive-code/routes/scripts.ts","pathname":"/_astro/ec.dy9ns.js","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.DFwqf4PB.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_astro/ec.v6sg1.css","pattern":"^\\/_astro\\/ec\\.v6sg1\\.css$","segments":[[{"content":"_astro","dynamic":false,"spread":false}],[{"content":"ec.v6sg1.css","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro-expressive-code/routes/styles.ts","pathname":"/_astro/ec.v6sg1.css","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.DFwqf4PB.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BkSZLX8a.js"},{"type":"external","value":"/_astro/page.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.ColD-8kk.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.DFwqf4PB.js"}],"styles":[],"routeData":{"route":"/projects","isIndex":true,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/index.astro","pathname":"/projects","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.DFwqf4PB.js"}],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BkSZLX8a.js"},{"type":"external","value":"/_astro/page.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.ColD-8kk.css"}],"routeData":{"route":"/tags","isIndex":true,"type":"page","pattern":"^\\/tags\\/?$","segments":[[{"content":"tags","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tags/index.astro","pathname":"/tags","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BkSZLX8a.js"},{"type":"external","value":"/_astro/page.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.ColD-8kk.css"}],"routeData":{"route":"/tools","isIndex":true,"type":"page","pattern":"^\\/tools\\/?$","segments":[[{"content":"tools","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tools/index.astro","pathname":"/tools","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BkSZLX8a.js"},{"type":"external","value":"/_astro/page.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.ColD-8kk.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://soorajts.vercel.app/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/254428/PersonalProjects/portfolio/src/pages/blog/[slug].astro",{"propagation":"in-tree","containsHead":true}],["/Users/254428/PersonalProjects/portfolio/src/pages/404.astro",{"propagation":"in-tree","containsHead":true}],["/Users/254428/PersonalProjects/portfolio/src/pages/blog/[...page].astro",{"propagation":"in-tree","containsHead":true}],["/Users/254428/PersonalProjects/portfolio/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["/Users/254428/PersonalProjects/portfolio/src/pages/tags/index.astro",{"propagation":"in-tree","containsHead":true}],["/Users/254428/PersonalProjects/portfolio/src/pages/tools/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/254428/PersonalProjects/portfolio/src/utils/post.ts",{"propagation":"in-tree","containsHead":false}],["/Users/254428/PersonalProjects/portfolio/src/utils/index.ts",{"propagation":"in-tree","containsHead":false}],["/Users/254428/PersonalProjects/portfolio/src/components/Button.astro",{"propagation":"in-tree","containsHead":false}],["/Users/254428/PersonalProjects/portfolio/src/components/SkillLayout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/254428/PersonalProjects/portfolio/src/layouts/BlogPost.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/404@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/tags/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/tools/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/254428/PersonalProjects/portfolio/src/components/Card.astro",{"propagation":"in-tree","containsHead":false}],["/Users/254428/PersonalProjects/portfolio/src/components/FormattedDate.astro",{"propagation":"in-tree","containsHead":false}],["/Users/254428/PersonalProjects/portfolio/src/components/blog/Hero.astro",{"propagation":"in-tree","containsHead":false}],["/Users/254428/PersonalProjects/portfolio/src/components/blog/PostPreview.astro",{"propagation":"in-tree","containsHead":false}],["/Users/254428/PersonalProjects/portfolio/src/components/Label.astro",{"propagation":"in-tree","containsHead":false}],["/Users/254428/PersonalProjects/portfolio/src/components/ProjectCard.astro",{"propagation":"in-tree","containsHead":false}],["/Users/254428/PersonalProjects/portfolio/src/components/Section.astro",{"propagation":"in-tree","containsHead":false}],["/Users/254428/PersonalProjects/portfolio/src/components/ToolSection.astro",{"propagation":"in-tree","containsHead":false}],["/Users/254428/PersonalProjects/portfolio/src/components/blog/TOC.astro",{"propagation":"in-tree","containsHead":false}],["/Users/254428/PersonalProjects/portfolio/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:node_modules/astro-expressive-code/routes/scripts@_@ts":"pages/_astro/ec.dy9ns.js.astro.mjs","\u0000@astro-page:node_modules/astro-expressive-code/routes/styles@_@ts":"pages/_astro/ec.v6sg1.css.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"pages/blog/_slug_.astro.mjs","\u0000@astro-page:src/pages/blog/[...page]@_@astro":"pages/blog/_---page_.astro.mjs","\u0000@astro-page:src/pages/projects/index@_@astro":"pages/projects.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/tags/index@_@astro":"pages/tags.astro.mjs","\u0000@astro-page:src/pages/tools/index@_@astro":"pages/tools.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_B9C2s2OE.mjs","/Users/254428/PersonalProjects/portfolio/src/content/post/devlog-1/index.md?astroContentCollectionEntry=true":"chunks/index_UGxuLK4U.mjs","/Users/254428/PersonalProjects/portfolio/src/content/post/devlog-1/index.md?astroPropagatedAssets":"chunks/index_C_qQBt28.mjs","/Users/254428/PersonalProjects/portfolio/src/assets/Retro-Geo.png":"chunks/Retro-Geo_BdhypxbI.mjs","/Users/254428/PersonalProjects/portfolio/src/assets/genesis.png":"chunks/genesis_DGQWQW1X.mjs","/Users/254428/PersonalProjects/portfolio/src/assets/igloo.png":"chunks/igloo_CxRNK8UJ.mjs","/Users/254428/PersonalProjects/portfolio/src/assets/seamless-start.png":"chunks/seamless-start_CqjVHqtr.mjs","/Users/254428/PersonalProjects/portfolio/src/assets/simmi-foundation.png":"chunks/simmi-foundation_Cm2KNX4Y.mjs","/Users/254428/PersonalProjects/portfolio/src/assets/strollby.png":"chunks/strollby_BN8u4XH7.mjs","/Users/254428/PersonalProjects/portfolio/src/assets/strollby_bg.png":"chunks/strollby_bg_CXH72tiz.mjs","/Users/254428/PersonalProjects/portfolio/src/assets/strollby_logo.png":"chunks/strollby_logo_JcCbb-is.mjs","/Users/254428/PersonalProjects/portfolio/src/assets/strollby_logo.svg":"chunks/strollby_logo_CEOLuV43.mjs","/Users/254428/PersonalProjects/portfolio/src/assets/tkmce.png":"chunks/tkmce_CVRKHU1P.mjs","/Users/254428/PersonalProjects/portfolio/src/content/post/devlog-1/index.md":"chunks/index_DAgntTVp.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.Cle9tR6y.js","/astro/hoisted.js?q=1":"_astro/hoisted.BkSZLX8a.js","astro:scripts/page.js":"_astro/page.DFwqf4PB.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/profile.Crp2vbme.jpg","/_astro/strollby.DsNG342l.png","/_astro/strollby_bg.Bn4Ej3NK.png","/_astro/strollby_logo.CSsF_a5k.png","/_astro/igloo.O0UknhYi.png","/_astro/simmi-foundation.C7s9FaXK.png","/_astro/strollby_logo.BG34f05e.svg","/_astro/seamless-start.BBUGic4M.png","/_astro/Retro-Geo.Co--0nUK.png","/_astro/tkmce.BRpQExHu.png","/_astro/genesis.CNgPcJyU.png","/_astro/_slug_.ColD-8kk.css","/social-card.png","/_astro/hoisted.BkSZLX8a.js","/_astro/hoisted.Cle9tR6y.js","/_astro/page.DFwqf4PB.js","/fonts/Satoshi-Variable.ttf","/fonts/Satoshi-VariableItalic.ttf","/favicon/android-chrome-192x192.png","/favicon/android-chrome-512x512.png","/favicon/apple-touch-icon.png","/favicon/favicon-16x16.png","/favicon/favicon-32x32.png","/favicon/favicon.ico","/favicon/site.webmanifest","/images/image.png","/_astro/page.DFwqf4PB.js"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false,"serverIslandNameMap":[],"experimentalEnvGetSecretEnabled":false});

export { manifest };
