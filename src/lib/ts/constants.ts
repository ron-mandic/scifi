const TOPICS = [
	{
		name: 'Communication',
		images: ['/images/t0-0.jpg', '/images/t0-1.jpg', '/images/t0-2.jpg', '/images/t0-3.jpg']
	},
	{
		name: 'Construction',
		images: ['/images/t1-0.jpg', '/images/t1-1.jpg', '/images/t1-2.jpg', '/images/t1-3.jpg']
	},
	{
		name: 'Education',
		images: ['/images/t2-0.jpg', '/images/t2-1.jpg', '/images/t2-2.jpg', '/images/t2-3.jpg']
	},
	{
		name: 'Harvest',
		images: ['/images/t3-0.jpg', '/images/t3-1.jpg', '/images/t3-2.jpg', '/images/t3-3.jpg']
	},
	{
		name: 'Cleaning',
		images: ['/images/t4-0.jpg', '/images/t4-1.jpg', '/images/t4-2.jpg', '/images/t4-3.jpg']
	},
	{
		name: 'Chickenfarm',
		images: ['/images/t5-0.jpg', '/images/t5-1.jpg', '/images/t5-2.jpg', '/images/t5-3.jpg']
	},
	{
		name: 'Mailman',
		images: ['/images/t6-0.jpg', '/images/t6-1.jpg', '/images/t6-2.jpg', '/images/t6-3.jpg']
	},
	{
		name: 'Entertainment',
		images: ['/images/t7-0.jpg', '/images/t7-1.jpg', '/images/t7-2.jpg', '/images/t7-3.jpg']
	},
	{
		name: 'Train',
		images: ['/images/t8-0.jpg', '/images/t8-1.jpg', '/images/t8-2.jpg', '/images/t8-3.jpg']
	},
	{
		name: 'Parade',
		images: ['/images/t9-0.jpg', '/images/t9-1.jpg', '/images/t9-2.jpg', '/images/t9-3.jpg']
	},
	{
		name: 'Living on Ice and Snow',
		images: ['/images/t10-0.jpg', '/images/t10-1.jpg', '/images/t10-2.jpg', '/images/t10-3.jpg']
	},
	{
		name: 'Speedboat',
		images: ['/images/t11-0.jpg', '/images/t11-1.jpg', '/images/t11-2.jpg', '/images/t11-3.jpg']
	},
	{
		name: 'Observing the stars',
		images: ['/images/t12-0.jpg', '/images/t12-1.jpg', '/images/t12-2.jpg', '/images/t12-3.jpg']
	},
	{
		name: 'Drone',
		images: ['/images/t13-0.jpg', '/images/t13-1.jpg', '/images/t13-2.jpg', '/images/t13-3.jpg']
	}
];

const TOPICS_BY_EXPR = {
	'0-0&0-1': {
		name: 'Communication',
		text: '',
		images: ['/images/t0-0.jpg', '/images/t0-1.jpg', '/images/t0-2.jpg', '/images/t0-3.jpg']
	},
	'1-0&1-1': {
		name: 'Construction',
		text: '',
		images: ['/images/t1-0.jpg', '/images/t1-1.jpg', '/images/t1-2.jpg', '/images/t1-3.jpg']
	},
	'2-0&2-1': {
		name: 'Education',
		text: 'A century ago, people envisioned futuristic chicken farms with advanced hatching machines. These devices would efficiently incubate eggs, and healthy chicks would emerge on the other side. The chickens would then live freely outdoors, maintaining a natural lifestyle.',
		images: ['/images/t2-0.jpg', '/images/t2-1.jpg', '/images/t2-2.jpg', '/images/t2-3.jpg']
	},
	'3-0&3-1': {
		name: 'Harvest',
		text: '',
		images: ['/images/t3-0.jpg', '/images/t3-1.jpg', '/images/t3-2.jpg', '/images/t3-3.jpg']
	},
	'4-0&4-1': {
		name: 'Cleaning',
		text: '',
		images: ['/images/t4-0.jpg', '/images/t4-1.jpg', '/images/t4-2.jpg', '/images/t4-3.jpg']
	},
	'5-0&5-1': {
		name: 'Chickenfarm',
		text: '',
		images: ['/images/t5-0.jpg', '/images/t5-1.jpg', '/images/t5-2.jpg', '/images/t5-3.jpg']
	},
	'6-0&6-1': {
		name: 'Mailman',
		text: '',
		images: ['/images/t6-0.jpg', '/images/t6-1.jpg', '/images/t6-2.jpg', '/images/t6-3.jpg']
	},
	'7-0&7-1': {
		name: 'Entertainment',
		text: '',
		images: ['/images/t7-0.jpg', '/images/t7-1.jpg', '/images/t7-2.jpg', '/images/t7-3.jpg']
	},
	'8-0&8-1': {
		name: 'Train',
		text: '',
		images: ['/images/t8-0.jpg', '/images/t8-1.jpg', '/images/t8-2.jpg', '/images/t8-3.jpg']
	},
	'9-0&9-1': {
		name: 'Parade',
		text: '',
		images: ['/images/t9-0.jpg', '/images/t9-1.jpg', '/images/t9-2.jpg', '/images/t9-3.jpg']
	},
	'10-0&10-1': {
		name: 'Living on Ice and Snow',
		text: 'A hundred years ago, the idea of living on ice and snow involved innovative machines capable of traversing icy landscapes and specially designed clothing to withstand extreme cold. These visions included futuristic vehicles and gear to facilitate exploration and habitation in polar regions.',
		images: ['/images/t10-0.jpg', '/images/t10-1.jpg', '/images/t10-2.jpg', '/images/t10-3.jpg']
	},
	'11-0&11-1': {
		name: 'Speedboat',
		text: '',
		images: ['/images/t11-0.jpg', '/images/t11-1.jpg', '/images/t11-2.jpg', '/images/t11-3.jpg']
	},
	'12-0&12-1': {
		name: 'Observing the stars',
		text: '',
		images: ['/images/t12-0.jpg', '/images/t12-1.jpg', '/images/t12-2.jpg', '/images/t12-3.jpg']
	},
	'13-0&13-1': {
		name: 'Drone',
		text: '',
		images: ['/images/t13-0.jpg', '/images/t13-1.jpg', '/images/t13-2.jpg', '/images/t13-3.jpg']
	}
};

export { TOPICS, TOPICS_BY_EXPR };
