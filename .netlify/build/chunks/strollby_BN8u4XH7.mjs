const strollby = new Proxy({"src":"/_astro/strollby.DsNG342l.png","width":82,"height":76,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/254428/PersonalProjects/portfolio/src/assets/strollby.png";
							}
							
							return target[name];
						}
					});

export { strollby as default };
