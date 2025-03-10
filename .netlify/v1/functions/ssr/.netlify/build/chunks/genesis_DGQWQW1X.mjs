const genesis = new Proxy({"src":"/_astro/genesis.CNgPcJyU.png","width":1024,"height":1024,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/254428/PersonalProjects/portfolio/src/assets/genesis.png";
							}
							
							return target[name];
						}
					});

export { genesis as default };
