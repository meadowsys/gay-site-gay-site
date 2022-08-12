import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	telemetry: false,
	target: "static",
	ssr: false,
	vite: {
		define: {
			"__production__": JSON.stringify(process.env["NODE_ENV"] === "production")
		},
		build: {
			minify: "terser",
			terserOptions: {
				compress: {
					passes: 3
				}
			}
		}
	},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {}
		}
	},
	typescript: {
		shim: false,
		strict: true,
		typeCheck: "build",
		tsConfig: {
			compilerOptions: {
				newLine: "lf",
				forceConsistentCasingInFileNames: true,
				noImplicitAny: true,
				strictNullChecks: true,
				strictFunctionTypes: true,
				strictBindCallApply: true,
				strictPropertyInitialization: true,
				noImplicitThis: true,
				useUnknownInCatchVariables: true,
				alwaysStrict: true,
				exactOptionalPropertyTypes: true,
				noImplicitReturns: true,
				noFallthroughCasesInSwitch: true,
				noImplicitOverride: true,
				noPropertyAccessFromIndexSignature: true,
				// oh for goodness sake nuxt
				// skipLibCheck: false
			}
		}
	}
});
