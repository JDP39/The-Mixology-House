/*--------Cocktail of the day--------*/
const cocktails = [
    {id: 1, name:"Aperol Spritz", image:"Images/Cocktails/aperol-spritz.png", desc:"A refreshing Italian aperitif cocktail with Aperol, prosecco, and soda water.", ingredients:"Aperol, Prosecco, Soda Water, Orange Slice", fact:"The Aperol Spritz originated in northern Italy and became a global icon for aperitivo culture."},

    {id: 2, name:"Caipirinha", image:"Images/Cocktails/caipirnha.png", desc:"Brazil's national cocktail, made with cachaça, lime, and sugar.", ingredients:"Cachaça, Lime, Sugar, Ice", fact:"The Caipirinha was originally created as a remedy for the Spanish flu — with garlic and honey added!"},

    {id: 3, name:"Cobra's Fang", image:"Images/Cocktails/cobras-fang.png", desc:"A potent tiki cocktail with rum, fruit juices, and exotic flavors.", ingredients:"Dark Rum, Light Rum, Lime Juice, Orange Juice, Falernum, Grenadine, Bitters", fact:"The Cobra’s Fang was invented by tiki legend Donn Beach in the 1930s and was once served with a paper cobra garnish."},

    {id: 4, name:"Cosmopolitan", image:"Images/Cocktails/cosmopolitan.png", desc:"A stylish cocktail made with vodka, triple sec, cranberry juice, and lime.", ingredients:"Vodka, Triple Sec, Cranberry Juice, Lime Juice", fact:"The Cosmopolitan became famous in the 1990s thanks to ‘Sex and the City.’"},

    {id: 5, name:"Dark 'n' Stormy", image:"Images/Cocktails/dark-n-stormy.png", desc:"A classic dark rum cocktail with ginger beer and lime.", ingredients:"Dark Rum, Ginger Beer, Lime Juice", fact:"The Dark 'n' Stormy is trademarked — it can only be made with Gosling’s Black Seal Rum!"},

    {id: 6, name:"Death Star", image:"Images/Cocktails/death-star.png", desc:"A powerful mixed drink with multiple spirits and a strong kick.", ingredients:"Vodka, Rum, Gin, Tequila, Triple Sec, Cola, Lime", fact:"This fan-favorite Star Wars-inspired cocktail packs enough punch to destroy planets — or your evening!"},

    {id: 7, name:"Dry Martini", image:"Images/Cocktails/dry-martini.png", desc:"A classic gin and vermouth cocktail, garnished with an olive.", ingredients:"Gin, Dry Vermouth, Olive or Lemon Twist", fact:"Winston Churchill famously liked his martinis so dry he’d ‘just glance at the vermouth bottle.’"},

    {id: 8, name:"French 75", image:"Images/Cocktails/French-75.png", desc:"A sparkling cocktail with gin, lemon juice, sugar, and champagne.", ingredients:"Gin, Lemon Juice, Simple Syrup, Champagne", fact:"The French 75 is named after a World War I field gun — because it ‘packs a punch.’"},

    {id: 9, name:"Grave Digger", image:"Images/Cocktails/grave-digger.png", desc:"A bold cocktail typically made with whiskey and complementary mixers.", ingredients:"Whiskey, Hard Cider, Ginger Ale, Ice", fact:"The Grave Digger often appears as a Halloween special, symbolizing dark and bold flavors."},

    {id: 10, name:"Italian Espresso Martini", image:"Images/Cocktails/italian-espresso-martini.png", desc:"A coffee-flavored cocktail with vodka, coffee liqueur, and espresso.", ingredients:"Vodka, Coffee Liqueur, Espresso, Sugar Syrup", fact:"The Espresso Martini was created in the 1980s when a model asked for a drink that would ‘wake me up, then f*** me up.’"},

    {id: 11, name:"Mai Tai", image:"Images/Cocktails/mai-tai.png", desc:"A tropical rum cocktail with lime, orgeat, and orange liqueur.", ingredients:"Light Rum, Dark Rum, Lime Juice, Orange Curaçao, Orgeat Syrup", fact:"The Mai Tai was created in 1944 by Trader Vic and became a symbol of tiki culture."},

    {id: 12, name:"Manhattan", image:"Images/Cocktails/manhattan.png", desc:"A classic whiskey cocktail with sweet vermouth and bitters.", ingredients:"Whiskey, Sweet Vermouth, Angostura Bitters, Cherry", fact:"The Manhattan was supposedly invented at the Manhattan Club in New York in the 1870s."},

    {id: 13, name:"Mojito", image:"Images/Cocktails/mojito.png", desc:"A refreshing cocktail made with white rum, fresh lime juice, mint leaves, sugar, and soda water.", ingredients:"White Rum, Lime Juice, Mint Leaves, Sugar, Soda Water", fact:"The Mojito was a favorite of Ernest Hemingway, who enjoyed it at La Bodeguita del Medio in Havana."},

    {id: 14, name:"Negroni", image:"Images/Cocktails/negroni.png", desc:"A bitter Italian cocktail with gin, Campari, and sweet vermouth.", ingredients:"Gin, Campari, Sweet Vermouth, Orange Peel", fact:"The Negroni was invented when Count Negroni asked for gin instead of soda in his Americano."},

    {id: 15, name:"Old Fashioned", image:"Images/Cocktails/old-fashioned.png", desc:"A classic whiskey cocktail with sugar, bitters, and a twist of citrus.", ingredients:"Whiskey, Sugar, Bitters, Orange Peel", fact:"The Old Fashioned is one of the world’s oldest cocktails — dating back to the early 1800s."},

    {id: 16, name:"Paloma", image:"Images/Cocktails/paloma.png", desc:"A tequila-based cocktail with grapefruit soda and lime.", ingredients:"Tequila, Grapefruit Soda, Lime Juice, Salt", fact:"The Paloma is the most popular tequila drink in Mexico, even more than the Margarita!"},

    {id: 17, name:"Pina Colada", image:"Images/Cocktails/pina-colada.png", desc:"A tropical cocktail with rum, coconut cream, and pineapple juice.", ingredients:"White Rum, Coconut Cream, Pineapple Juice, Ice", fact:"The Piña Colada was created in Puerto Rico in 1954 and became the island’s official drink."},

    {id: 18, name:"Rum Punch", image:"Images/Cocktails/rum-punch.png", desc:"A fruity and flavorful punch made with rum and tropical juices.", ingredients:"Rum, Pineapple Juice, Orange Juice, Grenadine, Lime Juice", fact:"Rum Punch follows the old Caribbean rhyme: ‘One of sour, two of sweet, three of strong, four of weak.’"},

    {id: 19, name:"Sex on the Beach", image:"Images/Cocktails/Sex-on-the-Beach.png", desc:"A sweet and fruity vodka cocktail with peach schnapps and orange juice.", ingredients:"Vodka, Peach Schnapps, Orange Juice, Cranberry Juice", fact:"This cheekily named cocktail became famous during the 1980s spring break culture in Florida."},

    {id: 20, name:"Sidecar", image:"Images/Cocktails/side-by-sidecar.png", desc:"A classic cocktail with brandy, triple sec, and lemon juice.", ingredients:"Brandy, Triple Sec, Lemon Juice, Sugar Rim", fact:"The Sidecar likely originated in Paris after World War I — named after the motorcycle attachment."},

    {id: 21, name:"Strawberry Daiquiri", image:"Images/Cocktails/strawberry-daquiri.png", desc:"A frozen cocktail with rum, strawberries, lime, and sugar.", ingredients:"White Rum, Strawberries, Lime Juice, Sugar Syrup, Ice", fact:"The Daiquiri originated in Cuba, named after a small village near Santiago de Cuba."},

    {id: 22, name:"Tequila Mockingbird", image:"Images/Cocktails/tequila-mockingbird.png", desc:"A tequila cocktail with fruit juices and a hint of sweetness.", ingredients:"Tequila, Watermelon Liqueur, Lime Juice, Triple Sec", fact:"A playful nod to the novel ‘To Kill a Mockingbird,’ this cocktail was first created in the 1960s."},

    {id: 23, name:"Tequila Sunrise", image:"Images/Cocktails/tequila-sunrise.png", desc:"A visually stunning cocktail with tequila, orange juice, and grenadine.", ingredients:"Tequila, Orange Juice, Grenadine, Ice", fact:"The Tequila Sunrise became a rock ‘n’ roll icon after being popularized by The Rolling Stones."},

    {id: 24, name:"Test Pilot", image:"Images/Cocktails/test-pilot.png", desc:"A classic tiki cocktail with rum, lime, and falernum.", ingredients:"Light Rum, Dark Rum, Lime Juice, Falernum, Bitters, Cointreau", fact:"The Test Pilot is a tiki classic from Don the Beachcomber’s 1940s menu, inspiring many other tiki drinks."},

    {id: 25, name:"Tom Collins", image:"Images/Cocktails/tom-collins.png", desc:"A gin cocktail with lemon juice, sugar, and soda water.", ingredients:"Gin, Lemon Juice, Sugar Syrup, Soda Water, Lemon Slice", fact:"The Tom Collins gained fame in 1874 thanks to the ‘Tom Collins Hoax,’ a running joke in New York bars."},

    {id: 26, name:"Ube Colada", image:"Images/Cocktails/ube-colada.png", desc:"A twist on the classic pina colada using ube (purple yam) for flavor and color.", ingredients:"White Rum, Ube Extract, Coconut Cream, Pineapple Juice, Ice", fact:"Ube Coladas combine Filipino flavors with Caribbean vibes, making for a vibrant fusion cocktail."},

    {id: 27, name:"Vodka Martini", image:"Images/Cocktails/vodka-martini.png", desc:"A clean, strong cocktail made with vodka and dry vermouth.", ingredients:"Vodka, Dry Vermouth, Olive or Lemon Twist", fact:"The Vodka Martini became iconic thanks to James Bond’s ‘shaken, not stirred’ preference."},

    {id: 28, name:"Whiskey Sour", image:"Images/Cocktails/whiskey-sour.png", desc:"A balanced cocktail with whiskey, lemon juice, and sugar.", ingredients:"Whiskey, Lemon Juice, Sugar Syrup, Egg White (optional)", fact:"The Whiskey Sour dates back to the 1860s and is one of the first recorded sour-style cocktails."},

    {id: 29, name:"Zombie", image:"Images/Cocktails/zombie-cocktail.png", desc:"A tiki cocktail with multiple rums, fruit juices, and strong flavors.", ingredients:"Light Rum, Dark Rum, Overproof Rum, Lime Juice, Passionfruit Syrup, Grenadine, Bitters", fact:"The Zombie was created in 1934 by Donn Beach and was limited to two per customer because of its strength."}

];

function showCocktailOfTheDay() {
  // Pick based on the day of year
  const today = new Date();
  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
  
   const index = dayOfYear % cocktails.length;
  const cocktail = cocktails[index];

  const cotdDiv = document.getElementById("cotdContent");
  cotdDiv.innerHTML = `
    <img src="${cocktail.image}" alt="${cocktail.name}">
    <h3>${cocktail.name}</h3>
    <p>${cocktail.desc}</p>
    <h3><em>Fun fact:</em></h3><p> ${cocktail.fact}</p>
    <h3><em>Ingredients:</em></h3><p> ${cocktail.ingredients}</p>
  `;
}

showCocktailOfTheDay();

    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (slides.length > 0) {
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1}
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex-1].style.display = "block";
            dots[slideIndex-1].className += " active";
            setTimeout(showSlides, 3000); // Change image every 3 seconds
        }
    }
; 