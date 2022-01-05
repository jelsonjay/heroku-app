const data = {
	categories: [
		{ name: 'Vegetarian', image: '/images/vegetarian.png' },
		{ name: 'Breakfast Menu', image: '/images/breakfast-2.png' },
		{ name: 'Burgers', image: '/images/burger.png' },
		{ name: 'Desserts', image: '/images/desserts-cream-1.png' }
	],
	products: [
		{
			category: 'Vegetarian',
			name: 'Coca-Cola',
			calorie: 120,
			price: 190,
			image: '/images/sandwich-vegetarian.png'
		},
		{
			category: 'Vegetarian',
			name: 'Vanill Shake',
			price: 155,
			calorie: 360,
			image: '/images/sandwich-vegetarian.png'
		},
		{
			category: 'Desserts',
			name: 'Hot Chocolate',
			price: 220,
			calorie: 170,
			image: '/images/frozen-dessert.png'
		},
		{
			category: 'Breakfast',
			name: 'Bacon & Biscuit',
			price: 159,
			calorie: 90,
			image: '/images/breakfast-1.png'
		},
		{
			category: 'Breakfast',
			name: 'Blueberry Muffin',
			price: 150,
			calorie: 120,
			image: '/images/breakfast-1.png'
		},
		{
			category: 'Breakfast',
			name: 'Big Breakfast',
			price: 200,
			calorie: 430,
			image: '/images/breakfast-2.png'
		},
		{
			category: 'Burgers',
			name: 'Big Mac',
			price: 5.99,
			calorie: 200,
			image: '/images/burger-3.png'
		},
		{
			category: 'Burgers',
			name: 'Hamburger',
			price: 250,
			calorie: 410,
			image: '/images/burger-3.png'
		},
		{
			category: 'Burgers',
			name: 'McDouble',
			price: 300,
			calorie: 320,
			image: '/images/burger-4.png'
		},
		{
			category: 'Desserts',
			name: 'McDouble',
			price: 170,
			calorie: 320,
			image: '/images/frozen-dessert.png'
		}
	]
};
module.exports = data;
