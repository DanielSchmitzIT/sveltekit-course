import { Configuration } from '../swagger';


export const GetBlogConfig = function(session) {
	return new Configuration({
		basePath: 'http://localhost:5000',
		accessToken: session.blogAccessToken
	});
};

