import { profile } from '../../src/data/profile';

const payload = {
	name: profile.name,
	title: profile.title,
	location: profile.location,
	tagline: profile.tagline,
	links: profile.links,
	skills: profile.skills,
	projects: profile.projects,
	experience: profile.experience.map((job) => ({
		role: job.role,
		company: job.company,
		start: job.start,
		end: job.end,
	})),
};

export const onRequest: PagesFunction = async (context) => {
	if (context.request.method !== 'GET' && context.request.method !== 'HEAD') {
		return new Response('Method Not Allowed', {
			status: 405,
			headers: { Allow: 'GET, HEAD' },
		});
	}

	const body = context.request.method === 'HEAD' ? null : JSON.stringify(payload);

	return new Response(body, {
		status: 200,
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			'Cache-Control': 'public, max-age=300',
		},
	});
};
