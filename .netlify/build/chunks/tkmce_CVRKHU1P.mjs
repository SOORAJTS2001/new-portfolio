const tkmce = new Proxy({"src":"/_astro/tkmce.BRpQExHu.png","width":400,"height":400,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/254428/PersonalProjects/portfolio/src/assets/tkmce.png";
							}
							
							return target[name];
						}
					});

export { tkmce as default };
