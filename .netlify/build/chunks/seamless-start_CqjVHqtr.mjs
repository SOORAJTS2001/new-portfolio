const seamlessStart = new Proxy({"src":"/_astro/seamless-start.BBUGic4M.png","width":1024,"height":1024,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/254428/PersonalProjects/portfolio/src/assets/seamless-start.png";
							}
							
							return target[name];
						}
					});

export { seamlessStart as default };
