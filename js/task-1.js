const categories = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
  const h2 = category.querySelector('h2').textContent;
  const li = category.querySelectorAll('ul li').length;
  console.log(`Category: ${h2}`);
  console.log(`Elements: ${li}`);
})
