const simmiFoundation = new Proxy({"src":"/_astro/simmi-foundation.C7s9FaXK.png","width":1200,"height":1200,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/254428/PersonalProjects/portfolio/src/assets/simmi-foundation.png";
							}
							
							return target[name];
						}
					});

export { simmiFoundation as default };
