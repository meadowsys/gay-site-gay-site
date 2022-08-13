import { object, string, number } from "zod";

const gallery_id = 19691;

const derpi_response_validator = object({
	images: object({
		id: number().refine(Number.isInteger),
		representations: object({
			large: string().url()
		})
	}).array()
});

export type Image = { image: string, source: string };

const fallback_image_urls: Array<Image> = [
	{ image: "https://derpicdn.net/img/2022/5/2/2857401/large.png", source: "https://derpibooru.org/2857401" }
];

let images: Array<Image> | undefined = undefined;

const promise = fetch(`https://derpibooru.org/api/v1/json/search/images?q=${encodeURIComponent(`gallery_id:${gallery_id}`)}`)
	.then(r => r.json())
	.then(images => derpi_response_validator.parse(images))
	.then(({ images }) => images.map<Image>(image => ({
		image: image.representations.large,
		source: `https://derpibooru.org/${image.id}`
	})))
	.then(_images => images = _images)
	.catch(() => { /** noop, fail silently */ });

function rand_from_array<T>(arr: Array<T>): T {
	return arr[Math.floor(Math.random() * arr.length)];
}

export async function use_random_bg_image() {
	await promise;
	return images ? rand_from_array(images) : rand_from_array(fallback_image_urls);
}
