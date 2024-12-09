module.exports = (data) => {
	const computed = Object.fromEntries(
		Object.entries(data)
			.filter((e) => e[0].startsWith('eleventyComputed'))
			.map((e) => [e[0].replace('eleventyComputed.', ''), e[1]]),
	);

	if ('eleventyComputed' in computed) {
		const entry = Object.entries(computed.eleventyComputed);
		for (const e of entry) {
			computed[e[0]] = computed[[e[1]]];
		}
	}

	return computed;
};
