import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderSlot, a as renderComponent } from '../chunks/astro/server_DLzdKqjW.mjs';
import 'kleur/colors';
import { c as cn, $ as $$Button, a as $$BaseLayout } from '../chunks/Button_DpUAPX6e.mjs';
import 'clsx';
import '../chunks/_astro_content_CFWnWWQu.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_C9j9EbvN.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$4 = createAstro("https://soorajts.vercel.app/");
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Section;
  const { class: className, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(cn(className, "flex flex-col gap-y-5 md:flex-row md:gap-y-0"), "class")}> <div class="text-xl font-semibold md:w-1/3"> <h2>${title}</h2> </div> <div class="flex flex-col gap-y-3 md:w-2/3"> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "/Users/254428/PersonalProjects/portfolio/src/components/Section.astro", void 0);

const $$Astro$3 = createAstro("https://soorajts.vercel.app/");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Card;
  const {
    as: Tag = "div",
    class: className,
    href,
    heading,
    subheading,
    date,
    imagePath,
    altText,
    imageClass
  } = Astro2.props;
  const images = /* #__PURE__ */ Object.assign({"/src/assets/Retro-Geo.png": () => import('../chunks/Retro-Geo_BdhypxbI.mjs'),"/src/assets/genesis.png": () => import('../chunks/genesis_DGQWQW1X.mjs'),"/src/assets/igloo.png": () => import('../chunks/igloo_CxRNK8UJ.mjs'),"/src/assets/profile.jpg": () => Promise.resolve().then(() => profile),"/src/assets/seamless-start.png": () => import('../chunks/seamless-start_CqjVHqtr.mjs'),"/src/assets/simmi-foundation.png": () => import('../chunks/simmi-foundation_Cm2KNX4Y.mjs'),"/src/assets/strollby.png": () => import('../chunks/strollby_BN8u4XH7.mjs'),"/src/assets/strollby_bg.png": () => import('../chunks/strollby_bg_CXH72tiz.mjs'),"/src/assets/strollby_logo.png": () => import('../chunks/strollby_logo_JcCbb-is.mjs'),"/src/assets/strollby_logo.svg": () => import('../chunks/strollby_logo_CEOLuV43.mjs'),"/src/assets/tkmce.png": () => import('../chunks/tkmce_CVRKHU1P.mjs')});
  if (imagePath) {
    if (!images[imagePath])
      throw new Error(`"${imagePath}" does not exist in glob: "src/assets/*.{jpeg,jpg,png,gif}"`);
  }
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class": cn(
    className,
    "relative rounded-2xl border border-border bg-primary-foreground px-5 py-3",
    href && "transition-all hover:border-foreground/25 hover:shadow-sm"
  ), "href": href }, { "default": ($$result2) => renderTemplate`${imagePath && renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": images[imagePath](), "alt": altText, "class": cn("mb-3 md:absolute md:mb-0", imageClass), "loading": "eager" })}`}${maybeRenderHead()}<div class="flex flex-col gap-y-1.5"> <div class="flex flex-col gap-y-0.5"> <h1 class="text-lg font-medium">${heading}</h1> <h2 class="text-muted-foreground">${subheading}</h2> <h2 class="text-muted-foreground">${date}</h2> </div> ${renderSlot($$result2, $$slots["default"])} </div> ` })}`;
}, "/Users/254428/PersonalProjects/portfolio/src/components/Card.astro", void 0);

const $$Astro$2 = createAstro("https://soorajts.vercel.app/");
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const {
    as: Tag = "a",
    class: className,
    href,
    heading,
    subheading,
    imagePath,
    altText
  } = Astro2.props;
  const images = /* #__PURE__ */ Object.assign({"/src/assets/Retro-Geo.png": () => import('../chunks/Retro-Geo_BdhypxbI.mjs'),"/src/assets/genesis.png": () => import('../chunks/genesis_DGQWQW1X.mjs'),"/src/assets/igloo.png": () => import('../chunks/igloo_CxRNK8UJ.mjs'),"/src/assets/profile.jpg": () => Promise.resolve().then(() => profile),"/src/assets/seamless-start.png": () => import('../chunks/seamless-start_CqjVHqtr.mjs'),"/src/assets/simmi-foundation.png": () => import('../chunks/simmi-foundation_Cm2KNX4Y.mjs'),"/src/assets/strollby.png": () => import('../chunks/strollby_BN8u4XH7.mjs'),"/src/assets/strollby_bg.png": () => import('../chunks/strollby_bg_CXH72tiz.mjs'),"/src/assets/strollby_logo.png": () => import('../chunks/strollby_logo_JcCbb-is.mjs'),"/src/assets/strollby_logo.svg": () => import('../chunks/strollby_logo_CEOLuV43.mjs'),"/src/assets/tkmce.png": () => import('../chunks/tkmce_CVRKHU1P.mjs')});
  if (!images[imagePath])
    throw new Error(`"${imagePath}" does not exist in glob: "src/assets/*.{jpeg,jpg,png,gif}"`);
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class": cn(
    className,
    "flex flex-col gap-y-3 rounded-2xl border border-border bg-primary-foreground ",
    href && "transition-all hover:border-foreground/25 hover:shadow-sm"
  ), "href": href }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Image", $$Image, { "src": images[imagePath](), "alt": altText, "class": "h-48 w-full rounded-2xl rounded-bl-none rounded-br-none object-cover", "loading": "eager" })} ${maybeRenderHead()}<div class="flex flex-col gap-y-0.5 px-5 py-4"> <h1 class="text-lg font-medium">${heading}</h1> <h2 class="text-muted-foreground">${subheading}</h2> </div> ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/Users/254428/PersonalProjects/portfolio/src/components/ProjectCard.astro", void 0);

const $$Astro$1 = createAstro("https://soorajts.vercel.app/");
const $$Label = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Label;
  const { class: className, as: Tag = "div", title, href, ...props } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class": cn(
    className,
    "flex flex-row items-center justify-center gap-x-2",
    href && "hover:opacity-75 transition-all"
  ), "href": href, ...props }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["icon"])} ${maybeRenderHead()}<p>${title}</p> ` })}`;
}, "/Users/254428/PersonalProjects/portfolio/src/components/Label.astro", void 0);

const $$Astro = createAstro("https://soorajts.vercel.app/");
const $$SkillLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SkillLayout;
  const { title, skills } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-y-2 md:flex-row md:gap-x-5 md:gap-y-0"> <h3 class="w-1/5 font-medium">${title}</h3> <div class="flex w-4/5 flex-row flex-wrap gap-x-4 gap-y-2"> ${skills.map((skill) => renderTemplate`${renderComponent($$result, "Button", $$Button, { "as": "button", "title": skill, "style": "pill" })}`)} </div> </div>`;
}, "/Users/254428/PersonalProjects/portfolio/src/components/SkillLayout.astro", void 0);

const profile_photo = new Proxy({"src":"/_astro/profile.Crp2vbme.jpg","width":2246,"height":3008,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/254428/PersonalProjects/portfolio/src/assets/profile.jpg";
							}
							
							return target[name];
						}
					});

const profile = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: profile_photo
}, Symbol.toStringTag, { value: 'Module' }));

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const machine_learning = ["LangChain", "TensorFlow", "OpenCV", "RAG", "ChromaDB", "FAISS"];
  const backend = ["Python", "C++", "FastAPI", "Pandas", "REST API", "GrapQL", "MongoDB", "SQL"];
  const others = ["Git", "Google Cloud", "Docker"];
  return renderTemplate`${renderComponent($$result, "PageLayout", $$BaseLayout, { "meta": { title: "Home" } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex w-full flex-col gap-y-10"> <section class="flex flex-col items-center gap-y-7"> ${renderComponent($$result2, "Image", $$Image, { "src": profile_photo, "alt": "profile photo", "class": "h-28 w-auto  rounded-full object-cover object-left  bg-[#FFBE98]", "loading": "eager" })} <div class="flex flex-col items-center gap-y-4"> <h1 class="text-3xl">Sooraj <b>T S</b></h1> <div class="flex"> <a href="https://github.com/SOORAJTS2001" class="flex flex-row items-center gap-x-3 rounded-3xl border border-input px-4 py-2 text-sm shadow-sm transition-all hover:shadow-md"> <span class="relative flex items-center justify-center"> <span class="absolute inline-flex h-2 w-2 animate-ping rounded-full border border-green-400 bg-green-400 opacity-75"></span> <span class="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span> </span> <p class="font-medium">GitHub</p> </a>
&nbsp;
				&nbsp;
<a href="https://github.com/SOORAJTS2001" class="flex flex-row items-center gap-x-3 rounded-3xl border border-input px-4 py-2 text-sm shadow-sm transition-all hover:shadow-md"> <span class="relative flex items-center justify-center"> <span class="absolute inline-flex h-2 w-2 animate-ping rounded-full border border-green-400 bg-green-400 opacity-75"></span> <span class="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span> </span> <p class="font-medium">Resume</p> </a> </div> <div class="flex flex-wrap justify-center gap-x-7 gap-y-3"> ${renderComponent($$result2, "Label", $$Label, { "title": "Software Engineer" }, { "icon": ($$result3) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5"><path fill="currentColor" d="M4.615 20q-.69 0-1.152-.462Q3 19.075 3 18.385v-9.77q0-.69.463-1.152Q3.925 7 4.615 7H9V5.615q0-.69.463-1.152Q9.925 4 10.615 4h2.77q.69 0 1.153.463q.462.462.462 1.152V7h4.385q.69 0 1.152.463q.463.462.463 1.152v9.77q0 .69-.462 1.152q-.463.463-1.153.463zm0-1h14.77q.23 0 .423-.192q.192-.193.192-.423v-9.77q0-.23-.192-.423Q19.615 8 19.385 8H4.615q-.23 0-.423.192Q4 8.385 4 8.615v9.77q0 .23.192.423q.193.192.423.192M10 7h4V5.615q0-.23-.192-.423Q13.615 5 13.385 5h-2.77q-.23 0-.423.192q-.192.193-.192.423zM4 19V8z"></path></svg>` })} ${renderComponent($$result2, "Label", $$Label, { "title": "Kochin" }, { "icon": ($$result3) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5"><path fill="currentColor" d="M12.003 11.73q.668 0 1.14-.475q.472-.475.472-1.143t-.475-1.14q-.476-.472-1.143-.472t-1.14.476q-.472.475-.472 1.143t.475 1.14q.476.472 1.143.472M12 19.677q2.82-2.454 4.458-4.991q1.638-2.538 1.638-4.39q0-2.744-1.737-4.53T12 3.981q-2.621 0-4.359 1.785t-1.737 4.53q0 1.852 1.638 4.39q1.639 2.537 4.458 4.99m0 1.343q-3.525-3.117-5.31-5.814q-1.786-2.697-1.786-4.909q0-3.173 2.066-5.234Q9.037 3 12 3t5.03 2.062q2.066 2.061 2.066 5.234q0 2.212-1.785 4.909q-1.786 2.697-5.311 5.814m0-10.904"></path></svg>` })} ${renderComponent($$result2, "Label", $$Label, { "title": "Connect on Linkedin", "as": "a", "href": "https://in.linkedin.com/in/sooraj-t-s-58b9001a9", "target": "_blank" }, { "icon": ($$result3) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="h-5 w-5 text-foreground/75"><path fill="currentColor" d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"></path></svg>` })} </div> </div> </section> ${renderComponent($$result2, "Section", $$Section, { "title": "About" }, { "default": ($$result3) => renderTemplate` <p class="text-muted-foreground">
Hi, I'm <strong><span class="text-red-300">Sooraj</span></strong>, a passionate problem solver, currently working as a <strong><span class="text-red-300">Product Engineer</span></strong> at <strong><span class="text-red-300">Strollby Inc</span></strong>.
				I have completed my undergraduate in Electrical and Electronics Engineering from <strong><span class="text-red-300">TKM College of Engineering</span></strong>.
				I love to work on complex problems and make solutions for a better world.
</p> ` })} ${renderComponent($$result2, "Section", $$Section, { "title": "Skills" }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "SkillLayout", $$SkillLayout, { "title": "Machine Learning", "skills": machine_learning })} ${renderComponent($$result3, "SkillLayout", $$SkillLayout, { "title": "Backend", "skills": backend })} ${renderComponent($$result3, "SkillLayout", $$SkillLayout, { "title": "Others", "skills": others })} ` })} <!-- {
			allPostsByDate.length > 0 && (
				<Section title='Posts'>
					<ul class='flex flex-col gap-y-2'>
						{allPostsByDate.map((p) => (
							<li class='flex flex-col gap-x-2 sm:flex-row'>
								<PostPreview post={p} />
							</li>
						))}
					</ul>
				</Section>
			)
		} --> ${renderComponent($$result2, "Section", $$Section, { "title": "Experience" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Card", $$Card, { "heading": "Product Engineering", "subheading": "Product Engineer @ Strollby Inc", "date": "July 2023 - Present", "imagePath": "/src/assets/strollby_logo.svg", "altText": "Strollby", "imageClass": "h-12 w-auto md:-left-16" }, { "default": ($$result4) => renderTemplate` <ul class="ml-4 list-disc text-muted-foreground"> <li> Managed and implemented ingestion of <strong><span class="text-red-300">4 million</span></strong> hotels record into MongoDB, improving performance by <strong><span class="text-red-300">40 %</span></strong> </li> <li>Developed locations microservice from scratch with a sub <strong><span class="text-red-300">80 ms</span></strong> response time</li> <li>Made a <strong><span class="text-red-300">Retrieval-Augmented Generation (RAG)</span></strong> powered knowledge base application for the team</li> </ul> ` })} ${renderComponent($$result3, "Card", $$Card, { "heading": "Internship", "subheading": "Backend Developer @ Simmi Foundation", "date": "Feb 2023 - Jul 2023", "imagePath": "/src/assets/simmi-foundation.png", "altText": "E4K", "imageClass": "h-12 w-auto md:-left-16" }, { "default": ($$result4) => renderTemplate` <ul class="ml-4 list-disc text-muted-foreground"> <li>Deployed a web application on a virtual machine (VM) and optimized server configurations for performance and security</li> <li><strong><span class="text-red-300">Optimized database queries</span></strong>, reducing execution time and improving overall efficiency</li> <li>Debugged and <strong><span class="text-red-300">resolved critical issues in both backend APIs and frontend integrations</span></strong>, enhancing system stability</li> </ul> ` })} ` })} ${renderComponent($$result2, "Section", $$Section, { "title": "Education" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Card", $$Card, { "heading": "Bachelor of Technology - Electrical and Electronics Engineering", "subheading": "TKM College Of Engineering, Kerala", "date": "Aug 2019 - Jul 2023", "imagePath": "/src/assets/tkmce.png", "altText": "SJSU", "imageClass": "h-12 w-auto md:-left-16" }, { "default": ($$result4) => renderTemplate` <ul class="ml-4 list-disc text-muted-foreground"> <li><b>CGPA: 9.1/10</b> </li> <li><strong><span class="text-red-300">Minor Degree in Machine Learning</span></strong></li> <ul> <li>- Pothole Detection & Mapping using Deep Learning and Computer Vision</li> <li>- Engineered a lightweight real-time indoor navigation system using Computer Vision, featuring a user-friendly web interface.</li> <li>- Developed an Automated Page Scroller using OpenCV that detects hand gestures to enable hands-free scrolling for an enhanced reading experience.</li> </ul> </ul> ` })} ` })} ${renderComponent($$result2, "Section", $$Section, { "title": "Awards and Honours" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Card", $$Card, {}, { "default": ($$result4) => renderTemplate` <ul class="ml-4 list-disc text-muted-foreground"> <li>Awarded the <strong><span class="text-red-300">UST super star award</span></strong> </li> <li>Speaker at Trivandrum Python Community</li> <li><strong><span class="text-red-300">Course Topper 2023 - Introduction To Java - NPTEL IIT Kharagpur</span></strong></li> <li>Runner Up for National Level Hackathon Navonmesh 2021, 200 + teams participated</li> <li>Winner of Hackathons WiE by FISAT, Latency 2.0 by TKMCE</li> </ul> ` })} ` })} ${renderComponent($$result2, "Section", $$Section, { "title": "Projects" }, { "default": ($$result3) => renderTemplate` <div class="flex flex-col gap-y-5 sm:flex-row sm:gap-x-5 sm:gap-y-5"> ${renderComponent($$result3, "ProjectCard", $$ProjectCard, { "href": "https://github.com/SOORAJTS2001/igloo", "heading": "Igloo", "subheading": "A modern, responsive web application for managing and searching through various document formats with real-time search using RAG", "imagePath": "/src/assets/igloo.png", "altText": "landing!", "class": "w-full sm:w-1/2" })} ${renderComponent($$result3, "ProjectCard", $$ProjectCard, { "href": "", "heading": "Seamless Start", "subheading": "Created a chatbot interface utilizing vector database (ChromaDB) and RAG to deliver in-depth internal company insights, showcased at UST D3 2024", "imagePath": "/src/assets/seamless-start.png", "altText": "softbody!", "class": "w-full sm:w-1/2" })} </div> <div class="flex flex-col gap-y-5 sm:flex-row sm:gap-x-5 sm:gap-y-5"> ${renderComponent($$result3, "ProjectCard", $$ProjectCard, { "href": "https://github.com/SOORAJTS2001/RetroGeo", "heading": "RetroGeo", "subheading": "Our reverse geocoding library is a high-performance, offline solution that processes geographical coordinates to retrieve full addresses, including country, state, and city", "imagePath": "/src/assets/Retro-Geo.png", "altText": "CHAOS!", "class": "w-full sm:w-1/2" })} ${renderComponent($$result3, "ProjectCard", $$ProjectCard, { "href": "https://ricedust.itch.io/a-life-well-lived", "heading": "Genesis", "subheading": "Engineered a VR visualization system that converts voice prompts into 3D images using stable diffusion, enhancing immersive content creation, presented at UST D3 2023", "imagePath": "/src/assets/genesis.png", "altText": "emotional storytelling!", "class": "w-full sm:w-1/2" })} </div> ` })} </div> ` })}`;
}, "/Users/254428/PersonalProjects/portfolio/src/pages/index.astro", void 0);

const $$file = "/Users/254428/PersonalProjects/portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
