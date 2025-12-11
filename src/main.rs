#[cfg(not(feature = "ssr"))]
fn main() {
	panic!("exploded");
}

#[cfg(feature = "ssr")]
#[actix_web::main]
async fn main() -> std::io::Result<()> {
	use leptos::prelude::*;

	// use actix_files::Files;
	use leptos_meta::MetaTags;
	use leptos_actix::LeptosRoutes as _;
	use gay_site_gay_site::App;

	let conf = leptos::config::get_configuration(None).unwrap();
	let site_addr = conf.leptos_options.site_addr;

	actix_web::HttpServer::new(move || {
		let routes = leptos_actix::generate_route_list(App);
		let leptos_options = &conf.leptos_options;
		// let site_root = leptos_options.site_root

		println!("listening on {site_addr}");

		actix_web::App::new()
			.leptos_routes(routes, {
				let leptos_options = leptos_options.clone();

				move || view! {
					<!DOCTYPE html>
					<html>
						<head>
							<meta charset="utf-8" />
							<meta name="viewport" content="width=device-width, initial-scale=1" />
							<AutoReload options=leptos_options.clone() />
							<HydrationScripts options=leptos_options.clone() />
							<MetaTags />
						</head>

						<body>
							<App />
						</body>
					</html>
				}
			})
	})
		.bind(&site_addr)?
		.run()
		.await
}
