import { profile } from '../../src/data/profile';

const payload = {
	name: profile.name,
	title: profile.title,
	location: profile.location,
	tagline: profile.tagline,
	summary: profile.summary,
	links: profile.links,
	skills: profile.skills,
	projects: profile.projects.map((project) => ({
		name: project.name,
		description: project.description,
		url: project.url,
		repo: project.repo,
		tags: project.tags,
	})),
	experience: profile.experience.map((job) => ({
		role: job.role,
		company: job.company,
		start: job.start,
		end: job.end,
		highlights: job.highlights,
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
