export function configure(aurelia) {
	aurelia.use.standardConfiguration();
	aurelia.start().then(x => x.setRoot());
}