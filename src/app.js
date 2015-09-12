export class App {
	configureRouter(config, router) {
		this.router = router;

		config.map([
			{
				route: ["", "people"],
				moduleId: "people",
				title: "People",
				nav: true
			},
			{
				route: "about",
				moduleId: "about",
				title: "About",
				nav: true
			},
			{
				route: "github",
				moduleId: "github",
				title: "github",
				nav: true
			}
		]);
	}
}