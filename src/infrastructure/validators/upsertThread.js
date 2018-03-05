export default {
	characterId: {
		async: (value, ctx, input, cb) => {
			cb(value != null);
		}
	}
};
