const image_urls = [
	"https://derpicdn.net/img/2022/7/24/2913704/large.png"
];

export function use_random_bg_image() {
	return image_urls[Math.floor(Math.random() * image_urls.length)];
}
