export const profile = {
	name: 'Adolfo Venega Gonzalez',
	shortName: 'Adolfo Venega',
	title: 'Desarrollador de software',
	location: 'Asunción, Paraguay',
	tagline:
		'Construyo software con foco en backend, calidad y operación diaria: de Laravel y Docker hasta QA y sistemas.',
	summary:
		'Desarrollador de software en Paraguay con experiencia full stack, análisis QA y administración de sistemas. Combino entrega de producto con disciplina operativa aprendida en soporte TI y entornos empresariales.',
	links: {
		linkedin: 'https://www.linkedin.com/in/adolfo-venega/',
		github: 'https://github.com/avenega',
		semingenieria: 'https://semingenieria.com.py',
	},
	experience: [
		{
			role: 'Software Developer',
			company: 'Innit',
			companyUrl: 'https://www.linkedin.com/company/innitpy',
			location: 'Asunción, Paraguay',
			start: '2025-04',
			end: null,
			highlights: [
				'Desarrollo de software en equipo de ingeniería.',
				'Participación en la entrega de productos para clientes de la región.',
			],
		},
		{
			role: 'Programador full stack',
			company: 'Inmobiliaria del Este S.A.',
			companyUrl: 'https://www.linkedin.com/company/inmobiliaria-del-este-s-a',
			location: 'Asunción, Paraguay',
			start: '2021-03',
			end: '2025-03',
			highlights: [
				'Backend, QA Analyst, gestión de proyectos y prácticas Agile.',
				'Soporte técnico TI y administración de sistemas en un entorno inmobiliario en producción.',
				'Trabajo transversal entre desarrollo, calidad y operación.',
			],
		},
		{
			role: 'Pasantía — NOC y Soporte Técnico',
			company: 'RIEDER & CIA',
			companyUrl: null,
			location: 'Paraguay',
			start: '2016-12',
			end: '2017-02',
			highlights: [
				'Help desk y configuración de routers para despliegues domiciliarios.',
				'Monitoreo y control en área NOC.',
			],
		},
	],
	education: [
		{
			school: 'Universidad Americana',
			degree: 'Ingeniería en Informática',
			detail: '2019–2025 · En proceso de tesis',
		},
		{
			school: 'Dr. Juan M. Frutos',
			degree: 'Bachiller Técnico en Informática',
			detail: 'Educación media técnica',
		},
	],
	skills: [
		'Laravel',
		'Livewire',
		'Docker',
		'QA',
		'SQL',
		'Java',
		'Linux',
		'Redes',
		'Active Directory',
		'Agile',
	],
	courses: [
		'CCNA1: Introducción a las redes (UCSA / Cisco NetAcad)',
		'Aspectos básicos de la asistencia técnica (Google / Coursera)',
		'Los bits y bytes de las redes informáticas (Google / Coursera)',
		'Administración de sistemas y servicios de infraestructura de TI (Google / Coursera)',
		'Sistemas operativos y tú: convertirse en un usuario avanzado (Google / Coursera)',
		'Intro to Cybersecurity (Cisco Networking Academy)',
		'Linux Unhatched (Cisco Networking Academy)',
	],
	projects: [
		{
			name: 'SEM Ingeniería',
			description:
				'Sitio corporativo con Astro y un CMS nativo sobre Cloudflare Workers, D1 y admin React.',
			url: 'https://semingenieria.com.py',
			repo: 'https://github.com/avenega/semingenieria',
			tags: ['Astro', 'Cloudflare Workers', 'D1', 'TypeScript'],
		},
	],
} as const;

export type Profile = typeof profile;
