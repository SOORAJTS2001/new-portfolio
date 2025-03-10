const strollby_logo = new Proxy({"src":"/_astro/strollby_logo.BG34f05e.svg","width":43,"height":38,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/254428/PersonalProjects/portfolio/src/assets/strollby_logo.svg";
							}
							
							return target[name];
						}
					});

export { strollby_logo as default };
