const withTM = require("next-transpile-modules")(["@my/shared"]);

const getConfig = () => {
	const config = {
		webpack(config, options) {
			if (!options.isServer) {
				config.resolve.alias["@sentry/node"] = "@sentry/browser";
			}
			return config;
		},
	};
	if (process.env.ENABLE_PROXY) {
		config.rewrites =
			async () => [
				{
					source: "/api/:path*",
					destination: `http://localhost:8080/api/:path*`,
				},
			];
	}

	return config;
};

module.exports = withTM(getConfig());
