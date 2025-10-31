// SEARCH FUNCTION
function displayFilteredItems() {
    const keyword = (document.getElementById("searchInput")?.value || "").trim().toLowerCase();
    const container = document.getElementById("itemList");
    if (!container) return;

    const filtered = itemLists.filter(item => {
    if (!keyword) return true;
    return (
        item.name.toLowerCase().includes(keyword) ||
        (item.desc && item.desc.toLowerCase().includes(keyword)) ||
        (item.spirit && item.spirit.toLowerCase().includes(keyword))
        );
    });

    container.innerHTML = "";
    if (filtered.length === 0) {
        container.innerHTML = '<p class="mt-4 text-sm text-gray-500">No results found.</p>';
        return;
    }

    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = 'item-card';
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}" style="max-width:80px;vertical-align:middle;margin-right:10px;">
            <strong>${item.name}</strong><br>
            <span>${item.desc}</span>
        `;
        container.appendChild(card);
    });
}