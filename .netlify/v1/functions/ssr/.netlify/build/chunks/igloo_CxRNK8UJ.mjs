const igloo = new Proxy({"src":"/_astro/igloo.O0UknhYi.png","width":1024,"height":1024,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/254428/PersonalProjects/portfolio/src/assets/igloo.png";
							}
							
							return target[name];
						}
					});

export { igloo as default };
