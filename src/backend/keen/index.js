const Keen = require('keen-tracking');

const client = new Keen({
	projectId: process.env.KEEN_PROJECT_ID,
	writeKey: process.env.KEEN_WRITE_KEY
});

exports.logQuery = (type, query) => {
	if (process.env.NODE_ENV === 'dev') return;

	return ;
};
