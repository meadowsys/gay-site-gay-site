use leptos::prelude::*;
use leptos_meta::{ Stylesheet, Title };
use leptos_router::path;
use leptos_router::components::{ Route, Router, Routes };

#[cfg(feature = "hydrate")]
#[wasm_bindgen::prelude::wasm_bindgen]
pub fn hydrate() {
	std::panic::set_hook(Box::new(console_error_panic_hook::hook));
	leptos::mount::hydrate_body(App);
}

#[component]
pub fn App() -> impl IntoView {
	leptos_meta::provide_meta_context();

	view! {
		<Stylesheet id="leptos" href="/_/gay-site-gay-site.css" />
		<Title text="meadowsys' gay site" />

		<Router>
			<main>
				<Routes fallback=move || "not found lol">
					<Route path=path!("/") view=Home />
				</Routes>
			</main>
		</Router>
	}
}

#[component]
fn Home() -> impl IntoView {
	view! { "h" }
}
