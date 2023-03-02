const itemRefs = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${itemRefs.length}`);

itemRefs.forEach((ref) => {
	const categoryName = ref.querySelector('h2');
	const categoryElements = ref.querySelectorAll('li');
	console.log(`Category: ${categoryName.textContent}\nElements: ${categoryElements.length}`);
});
