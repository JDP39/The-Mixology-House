const equipmentList = [
/*----------Mixing tools----------*/
{id: 1, name:"Boston Shaker", image:"Images/Tools/boston-shaker.png", desc:"A two-piece shaker consisting of a metal tin and a glass, used for mixing cocktails by shaking.", tool_type:"Mixing"},
{id: 2, name:"Cobbler Shaker", image:"Images/Tools/cobbler-shaker.png", desc:"A three-piece shaker with a built-in strainer and cap, ideal for home bartenders.", tool_type:"Mixing"},
{id: 3, name:"Mixing Glass", image:"Images/Tools/mixing-glass.png", desc:"A sturdy glass used for stirring cocktails with ice before straining.", tool_type:"Mixing"},
{id: 4, name:"Bar Spoon", image:"Images/Tools/bar-spoon.png", desc:"A long, twisted-handled spoon used for stirring and layering cocktails.", tool_type:"Mixing"},

/*----------Measuring tools----------*/
{id: 5, name:"Jigger", image:"Images/Tools/jigger.png", desc:"A double-sided measuring tool for accurately pouring spirits and mixers.", tool_type:"Measuring"},
{id: 6, name:"Pour Spout", image:"Images/Tools/pour-spout.png", desc:"A metal or plastic spout fitted to a bottle for consistent and controlled pouring.", tool_type:"Measuring"},

/*----------Straining tools----------*/
{id: 7, name:"Hawthorne Strainer", image:"Images/Tools/hawthorne-strainer.png", desc:"A metal strainer with a spring coil, used to filter ice and fruit pulp from mixed drinks.", tool_type:"Straining"},
{id: 8, name:"Fine Mesh Strainer", image:"Images/Tools/fine-mesh-strainer.png", desc:"Used alongside other strainers to remove tiny ice shards and pulp for a smooth drink.", tool_type:"Straining"},
{id: 9, name:"Julep Strainer", image:"Images/Tools/julep-strainer.png", desc:"A bowl-shaped strainer used mainly for stirred cocktails like martinis or Manhattans.", tool_type:"Straining"},

/*----------Perpetration tools----------*/
{id: 10, name:"Muddler", image:"Images/Tools/muddler.png", desc:"A tool used to mash fruits, herbs, and spices at the bottom of a glass to release flavor.", tool_type:"Preparation"},
{id: 11, name:"Citrus Zester", image:"Images/Tools/zester.png", desc:"Used to create fine zest from citrus peels for garnishing cocktails.", tool_type:"Preparation"},
{id: 12, name:"Citrus Juicer", image:"Images/Tools/citrus-juicus.png", desc:"Extracts juice from lemons, limes, and oranges efficiently.", tool_type:"Preparation"},
{id: 13, name:"Cutting Board", image:"Images/Tools/cutting-board.png", desc:"A surface used for safely slicing fruit and garnishes.", tool_type:"Preparation"},

/*----------Serving tools----------*/
{id: 14, name:"Ice Tongs", image:"Images/Tools/ice-tongs.png", desc:"Used for picking up and placing ice cubes hygienically.", tool_type:"Serving"},
{id: 15, name:"parasol", image:"Images/Tools/parasol.png", desc:"Used for skewering garnishes while looking like an umbrella.", tool_type:"Serving"}
];

// Function to create the HTML for a single equipment card
function createEquipmentCard(equipment) { 
    return `
        <div class="equipment-card"> 
            <img src="${equipment.image}" alt="${equipment.name}"/>
            <h3>${equipment.name}</h3> 
            <p>${equipment.desc}</p> 
        </div>`;
}

// Generate the HTML for all equipment items
let allCardsHTML = '';
equipmentList.forEach(equipment => {
    allCardsHTML += createEquipmentCard(equipment);
});

// Insert into the DOM when ready and only if the container exists
function renderEquipmentList() {
    const container = document.getElementById('equipmentList');
    if (container) {
        container.innerHTML = allCardsHTML;
    } else {
        // Optional: log a helpful message instead of throwing an error
        console.warn('Element with id "equipmentList" not found; equipment list not rendered.');
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderEquipmentList);
} else {
    renderEquipmentList();
}