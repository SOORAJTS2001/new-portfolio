const strollby_logo = new Proxy({"src":"/_astro/strollby_logo.CSsF_a5k.png","width":43,"height":38,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/254428/PersonalProjects/portfolio/src/assets/strollby_logo.png";
							}
							
							return target[name];
						}
					});

export { strollby_logo as default };
