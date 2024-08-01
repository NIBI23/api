document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch('/api/items');
  const items = await response.json();
  
  const itemsDiv = document.getElementById('items');
  items.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.textContent = `${item.name}: $${item.price}`;
    itemsDiv.appendChild(itemDiv);
  });
});

