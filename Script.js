/*-----Age Verification----------*/
document.addEventListener('DOMContentLoaded', function() {
    const yearSelect = document.getElementById('year');
    if (yearSelect) {
        const currentYear = new Date().getFullYear();
        const startYear = currentYear;
        const endYear = startYear - 100;
        for (let i = startYear; i >= endYear; i--) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            yearSelect.appendChild(option);
        }
    }

    const ageForm = document.getElementById('ageForm');
    if (ageForm) {
        ageForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const dayInput = document.getElementById('day');
            const monthInput = document.getElementById('month');
            const yearInput = document.getElementById('year');
            const messageBox = document.getElementById('messageBox');
            
            const day = parseInt(dayInput.value, 10);
            const month = parseInt(monthInput.value, 10) - 1; 
            const year = parseInt(yearInput.value, 10);

            const today = new Date();
            const minAge = 18; 

            if (isNaN(day) || isNaN(month) || isNaN(year)) {
                messageBox.style.display = 'block';
                messageBox.className = 'mt-6 text-sm p-4 rounded-lg bg-red-100 text-red-700 block';
                messageBox.textContent = 'Please enter a valid date in all fields.';
                return;
            }
            
            const birthdate = new Date(year, month, day);

            let age = today.getFullYear() - birthdate.getFullYear();
            const m = today.getMonth() - birthdate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
                age--;
            }
          
            if (age >= minAge) {
                setTimeout(function() {
                    window.location.href = 'Main.html';
                }, 100);
            } else {
                messageBox.className = 'mt-6 text-sm p-4 rounded-lg bg-red-100 text-red-700 block';
                messageBox.textContent = 'Sorry, you must be ' + minAge + ' or older to view this content.';
            }
        });
    }
});

/*----------Cocktail Cards----------*/
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
        card.innerHTML = `<div onclick="openpg('${item.id}')">
            <img src="${item.image}" alt="${item.name}" style="max-width:80px;vertical-align:middle;margin-right:10px;">
            <strong>${item.name}</strong><br>
            <span>${item.desc}</span></div>
        `;
        container.appendChild(card);
    });
}

function openpg(id) {
    localStorage.setItem('selectedCocktailId', id);
    //alert("Selected Cocktail ID: " + id);
    window.location.href = `cocktail-page.html`;
}


// SORT FUNCTION
document.getElementById("sort-criteria")?.addEventListener("change", function() {
    const criteria = this.value;
    const container = document.getElementById("itemList");
    if (!container) return;

    let sortedItems = [...itemLists];
    switch(criteria) {
        case "name-asc":
            sortedItems.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case "name-desc":
            sortedItems.sort((b, a) => a.name.localeCompare(b.name));
            break; // Added break statement
        case "base-asc":
            sortedItems.sort((a, b) => a.spirit.localeCompare(b.spirit));
            break;
        case "base-desc":
            sortedItems.sort((a, b) => b.spirit.localeCompare(a.spirit));
            break;
        default:
            break;
    }

    container.innerHTML = "";
    sortedItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'item-card';
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}" style="max-width:80px;vertical-align:middle;margin-right:10px;">
            <strong>${item.name}</strong><br>
            <span>${item.desc}</span>
        `;
        container.appendChild(card);
    });
});



const itemLists = [
    {id: 1, name:"Aperol Spritz", image:"Images/Cocktails/aperol-spritz.png", desc:"A refreshing Italian aperitif cocktail with Aperol, prosecco, and soda water.", spirit:"Other"},
    {id: 2, name:"Caipirinha", image:"Images/Cocktails/caipirnha.png", desc:"Brazil's national cocktail, made with cachaça, lime, and sugar.", spirit:"Other"},
    {id: 3, name:"Cobra's Fang", image:"Images/Cocktails/cobras-fang.png", desc:"A potent tiki cocktail with rum, fruit juices, and exotic flavors.", spirit:"Rum"},
    {id: 4, name:"Cosmopolitan", image:"Images/Cocktails/cosmopolitan.png", desc:"A stylish cocktail made with vodka, triple sec, cranberry juice, and lime.", spirit:"Vodka"},
    {id: 5, name:"Dark 'n' Stormy", image:"Images/Cocktails/dark-n-stormy.png", desc:"A classic dark rum cocktail with ginger beer and lime.", spirit:"Rum"},
    {id: 6, name:"Death Star", image:"Images/Cocktails/death-star.png", desc:"A powerful mixed drink with multiple spirits and a strong kick.", spirit:"Other"},
    {id: 7, name:"Dry Martini", image:"Images/Cocktails/dry-martini.png", desc:"A classic gin and vermouth cocktail, garnished with an olive.", spirit:"Gin"},
    {id: 8, name:"French 75", image:"Images/Cocktails/French-75.png", desc:"A sparkling cocktail with gin, lemon juice, sugar, and champagne.", spirit:"Gin"},
    {id: 9, name:"Grave Digger", image:"Images/Cocktails/grave-digger.png", desc:"A bold cocktail typically made with whiskey and complementary mixers.", spirit:"Whiskey"},
    {id: 10, name:"Italian Espresso Martini", image:"Images/Cocktails/italian-espresso-martini.png", desc:"A coffee-flavored cocktail with vodka, coffee liqueur, and espresso.", spirit:"Vodka"},
    {id: 11, name:"Mai Tai", image:"Images/Cocktails/mai-tai.png", desc:"A tropical rum cocktail with lime, orgeat, and orange liqueur.", spirit:"Rum"},
    {id: 12, name:"Manhattan", image:"Images/Cocktails/manhattan.png", desc:"A classic whiskey cocktail with sweet vermouth and bitters.", spirit:"Whiskey"},
    {id: 13, name:"Mojito", image:"Images/Cocktails/mojito.png", desc:"A refreshing cocktail made with white rum, fresh lime juice, mint leaves, sugar, and soda water.", spirit:"Rum"},
    {id: 14, name:"Negroni", image:"Images/Cocktails/negroni.png", desc:"A bitter Italian cocktail with gin, Campari, and sweet vermouth.", spirit:"Gin"},
    {id: 15, name:"Old Fashioned", image:"Images/Cocktails/old-fashioned.png", desc:"A classic whiskey cocktail with sugar, bitters, and a twist of citrus.", spirit:"Whiskey"},
    {id: 16, name:"Paloma", image:"Images/Cocktails/paloma.png", desc:"A tequila-based cocktail with grapefruit soda and lime.", spirit:"Tequila"},
    {id: 17, name:"Pina Colada", image:"Images/Cocktails/pina-colada.png", desc:"A tropical cocktail with rum, coconut cream, and pineapple juice.", spirit:"Rum"},
    {id: 18, name:"Rum Punch", image:"Images/Cocktails/rum-punch.png", desc:"A fruity and flavorful punch made with rum and tropical juices.", spirit:"Rum"},
    {id: 19, name:"Sex on the Beach", image:"Images/Cocktails/Sex-on-the-Beach.png", desc:"A sweet and fruity vodka cocktail with peach schnapps and orange juice.", spirit:"Vodka"},
    {id: 20, name:"Sidecar", image:"Images/Cocktails/side-by-sidecar.png", desc:"A classic cocktail with brandy, triple sec, and lemon juice.", spirit:"Other"},
    {id: 21, name:"Strawberry Daiquiri", image:"Images/Cocktails/strawberry-daquiri.png", desc:"A frozen cocktail with rum, strawberries, lime, and sugar.", spirit:"Rum"},
    {id: 22, name:"Tequila Mockingbird", image:"Images/Cocktails/tequila-mockingbird.png", desc:"A tequila cocktail with fruit juices and a hint of sweetness.", spirit:"Tequila"},
    {id: 23, name:"Tequila Sunrise", image:"Images/Cocktails/tequila-sunrise.png", desc:"A visually stunning cocktail with tequila, orange juice, and grenadine.", spirit:"Tequila"},
    {id: 24, name:"Test Pilot", image:"Images/Cocktails/test-pilot.png", desc:"A classic tiki cocktail with rum, lime, and falernum.", spirit:"Rum"},
    {id: 25, name:"Tom Collins", image:"Images/Cocktails/tom-collins.png", desc:"A gin cocktail with lemon juice, sugar, and soda water.", spirit:"Gin"},
    {id: 26, name:"Ube Colada", image:"Images/Cocktails/ube-colada.png", desc:"A twist on the classic pina colada using ube (purple yam) for flavor and color.", spirit:"Rum"},
    {id: 27, name:"Vodka Martini", image:"Images/Cocktails/vodka-martini.png", desc:"A clean, strong cocktail made with vodka and dry vermouth.", spirit:"Vodka"},
    {id: 28, name:"Whiskey Sour", image:"Images/Cocktails/whiskey-sour.png", desc:"A balanced cocktail with whiskey, lemon juice, and sugar.", spirit:"Whiskey"},
    {id: 29, name:"Zombie", image:"Images/Cocktails/zombie-cocktail.png", desc:"A tiki cocktail with multiple rums, fruit juices, and strong flavors.", spirit:"Rum"}
];

const itemListDiv = document.getElementById('itemList');
if (itemListDiv && typeof itemLists !== 'undefined' && itemLists.length > 0) {
    itemListDiv.innerHTML = '';
    itemLists.forEach(item => {
        const card = document.createElement('div');
        card.className = 'item-card';
        card.addEventListener('click', function() {
            openpg(item.id);
        });
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}" style="max-width:80px;vertical-align:middle;margin-right:10px;">
            <strong>${item.name}</strong><br>
            <span>${item.desc}</span>
        `;
        itemListDiv.appendChild(card);
    });
}




