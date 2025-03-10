import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DLzdKqjW.mjs';
import 'kleur/colors';
import { $ as $$Button, a as $$BaseLayout } from '../chunks/Button_DpUAPX6e.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const meta = {
    description: "Not found",
    title: "404"
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$BaseLayout, { "meta": meta }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="px-4 py-10 text-center sm:px-6 lg:px-8"> <h1 class="block text-7xl font-bold sm:text-9xl">404</h1> <p class="mt-3 text-muted-foreground">Oops, something went wrong.</p> <p class="">Sorry, we couldn't find your page.</p> ${renderComponent($$result2, "Button", $$Button, { "title": "Back to home", "href": "/", "style": "button", "class": "mt-5" }, { "icon-after": ($$result3) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" class="-scale-x-100"> <path fill="currentColor" d="m6.921 12.5l5.792 5.792L12 19l-7-7l7-7l.713.708L6.921 11.5H19v1z"></path> </svg>` })} </div> ` })}`;
}, "/Users/254428/PersonalProjects/portfolio/src/pages/404.astro", void 0);

const $$file = "/Users/254428/PersonalProjects/portfolio/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
