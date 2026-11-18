export const profile = {
	name: 'Adolfo Venega Gonzalez',
	shortName: 'Adolfo Venega',
	title: 'Desarrollador full stack',
	location: 'Asunción, Paraguay',
	tagline:
		'Diseño y mantengo ERPs, APIs y apps móviles con Laravel, Cloudflare y React Native: de facturación electrónica a operación en Kubernetes.',
	summary:
		'Desarrollador full stack en Paraguay con foco en producto empresarial. En Innit trabajo sobre una familia de ERPs Laravel (contabilidad, ventas, caja, comisiones, mapas), facturación electrónica SIFEN, apps móviles con Expo/NFC y despliegues Docker/Kubernetes. Antes combiné desarrollo backend, QA y administración de sistemas en Inmobiliaria del Este. También construyo productos propios: finanzas personales, paneles en Cloudflare Workers y sitios con Astro.',
	links: {
		linkedin: 'https://www.linkedin.com/in/adolfo-venega/',
		github: 'https://github.com/avenega',
		semingenieria: 'https://semingenieria.com.py',
		portfolio: 'https://adolfo-venega.pages.dev',
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
				'Desarrollo y mantenimiento de ERPs multi-cliente en Laravel + Livewire (ventas, clientes, contabilidad, caja, presupuestos, comisiones y reportes).',
				'Integración de facturación electrónica paraguaya con el SDK SIFEN en entornos de producción.',
				'Apps móviles con React Native/Expo: grabación NFC de activos (Emcesa) y paneles operativos conectados a APIs Sanctum.',
				'Operación con Docker, Helm y Kubernetes (ingress, WAF/ModSecurity, CI/CD en GitLab) para varios dominios de clientes.',
				'APIs, realtime (Reverb/Echo), colas Horizon, Octane y almacenamiento en Azure Blob.',
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
				'Backend y full stack sobre sistemas inmobiliarios: lotes, clientes, operaciones y paneles internos.',
				'QA Analyst, gestión de proyectos y prácticas Agile en un entorno de producción continua.',
				'Soporte técnico TI y administración de sistemas (Active Directory, redes, Office 365/Exchange, AS400, bases de datos).',
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
		'Filament',
		'PHP',
		'MySQL',
		'Redis',
		'Docker',
		'Kubernetes',
		'Helm',
		'GitLab CI',
		'React Native',
		'Expo',
		'TypeScript',
		'React',
		'Astro',
		'Cloudflare Workers',
		'D1',
		'SIFEN',
		'NFC',
		'Sanctum',
		'Horizon',
		'Octane',
		'Alpine.js',
		'QA',
		'Linux',
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
				'Sitio corporativo con Astro y CMS nativo sobre Cloudflare Workers, D1, R2, Turnstile y admin React.',
			url: 'https://semingenieria.com.py',
			repo: 'https://github.com/avenega/semingenieria',
			tags: ['Astro', 'Cloudflare Workers', 'D1', 'R2', 'React'],
		},
		{
			name: 'ERPs Laravel multi-cliente',
			description:
				'Familia de ERPs empresariales (Innit, Aguape, Becca, Margraf, Tix, Innsight, Tobiano e inmobiliario) con módulos de ventas, contabilidad, caja, comisiones, mapas Leaflet y facturación electrónica SIFEN. Despliegue con Docker, Helm y Kubernetes.',
			url: null,
			repo: null,
			tags: ['Laravel', 'Livewire', 'SIFEN', 'Docker', 'Kubernetes', 'MySQL'],
		},
		{
			name: 'Emcesa — NFC móvil + API',
			description:
				'App React Native/Expo para grabar etiquetas NFC de heladeras, con biometría y avance operativo, respaldada por API Laravel 13 + Sanctum e importación de maestro Excel.',
			url: null,
			repo: null,
			tags: ['React Native', 'Expo', 'NFC', 'Laravel', 'Sanctum'],
		},
		{
			name: 'Budget',
			description:
				'App de finanzas personales (Expo) con ingresos/egresos, deudas, obligaciones, presupuestos multidivisa PYG/USD y API Laravel con login Google.',
			url: null,
			repo: 'https://github.com/avenega/budget',
			tags: ['Expo', 'React Native', 'Laravel', 'MySQL', 'Google Auth'],
		},
		{
			name: 'Portafolio personal',
			description:
				'Sitio Astro estático en Cloudflare Pages con Functions para cabeceras de seguridad y API de perfil.',
			url: 'https://adolfo-venega.pages.dev',
			repo: 'https://github.com/avenega/adolfovenega',
			tags: ['Astro', 'Cloudflare Pages', 'TypeScript'],
		},
	],
} as const;

export type Profile = typeof profile;
