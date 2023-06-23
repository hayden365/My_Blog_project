import { createClient, type ClientConfig } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const config: ClientConfig = {
	projectId: "6n5ee0tc",
	dataset: "production",
	useCdn: false,
	apiVersion: "2023-05-10",
	token: process.env.SANITY_SECRET_TOKEN,
};

export const client = createClient(config);

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
	return builder.image(source).width(800).url();
}

export const assetsURL = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/assets/images/${process.env.SANITY_DATASET}`;
