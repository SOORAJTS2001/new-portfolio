const strollby_bg = new Proxy({"src":"/_astro/strollby_bg.Bn4Ej3NK.png","width":180,"height":180,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/254428/PersonalProjects/portfolio/src/assets/strollby_bg.png";
							}
							
							return target[name];
						}
					});

export { strollby_bg as default };
