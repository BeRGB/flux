export type TimelineEntry = {
	year: number;
	items: string[];
};

export const timeline: TimelineEntry[] = [
	{ year: 2014, items: ['FLUX was founded'] },
	{ year: 2015, items: ['Launched FLUX Delta'] },
	{ year: 2016, items: ['Honoured with International Design Awards'] },
	{ year: 2017, items: ['Launched FLUX Delta+'] },
	{
		year: 2018,
		items: ['Launched Beambox 40 W CO₂ laser cutter', 'Launched Beambox Pro 50 W CO₂ laser cutter'],
	},
	{ year: 2019, items: ['Unveiled Beamo — the world’s smallest CO₂ laser cutter'] },
	{
		year: 2020,
		items: [
			'Expanded distribution in the US, Europe, Japan, and Australia',
			'Introduced Beam Air laser cutter air filter',
		],
	},
	{
		year: 2021,
		items: ['Reached 100+ local resellers globally', 'Launched HEXA 60 W CO₂ laser cutter'],
	},
	{ year: 2023, items: ['Launched Ador — the world’s first colour printing laser cutter'] },
	{ year: 2024, items: ['Released Beam Air Pro filtration for professional laser cutters'] },
];
