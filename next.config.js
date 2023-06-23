/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		domains: ["cdn.sanity.io"],
	},
};

const withMDX = require("@next/mdx")({
	options: {
		remarkPlugins: [],
		rehypePlugins: [],
		// If you use `MDXProvider`, uncomment the following line.
		// providerImportSource: "@mdx-js/react",
	},
});

module.exports = withMDX(nextConfig);
