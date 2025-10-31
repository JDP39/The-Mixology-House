const cocktailData = [
  {
    Cocktail_ID: 1,
    name: "Aperol Spritz",
    image: "Images/Cocktails/aperol-spritz.png",
    baseSpirit: "Prosecco",
    ingredients: ["90 ml Prosecco", "60 ml Aperol", "30 ml Soda Water"],
    method: "Build Prosecco, Aperol, and soda water in a large wine glass over ice. Gently stir to combine. Garnish with an orange slice.",
    description: "This vibrant Italian aperitivo is the undisputed champion of sundowners, famous for its bright orange hue and refreshing, bittersweet flavour. It perfectly combines the zest of prosecco with the herbal complexity of Aperol, topped with a dash of sparkling soda water. Served in a large wine glass filled with ice, it is incredibly easy to prepare and enjoy. Its low ABV makes it ideal for day-drinking or as a palate-opener before a meal. The Aperol Spritz embodies effortless, continental elegance and a sunny, relaxed atmosphere."
  },
  {
    Cocktail_ID: 2,
    name: "Caipirinha",
    image: "Images/Cocktails/caipirnha.png",
    baseSpirit: "Cachaça",
    ingredients: ["60 ml Cachaça", "1 Lime (cut into wedges)", "2 tsp Granulated Sugar"],
    method: "Place lime wedges and sugar in an Old Fashioned glass. Muddle well to extract the lime juice and oil and dissolve the sugar. Add cachaça and fill the glass with ice. Stir well. (Some prefer crushed ice).",
    description: "The national drink of Brazil, the Caipirinha is a powerful yet simple mixture built on Cachaça, a sugarcane spirit. Its flavour profile is intensely fresh, relying on the essential oils and juice muddled directly from fresh lime wedges. The sugar is crucial, not only for sweetness but for physically breaking down the lime during the muddling process. Served over ice, this invigorating cocktail is a perfect balance of potent spirit, tartness, and sugarcane sweetness. It is a bold, refreshing taste of tropical South America."
  },
  {
    Cocktail_ID: 3,
    name: "Cobra's Fang",
    image: "Images/Cocktails/cobras-fang.png",
    baseSpirit: "Rum",
    ingredients: ["45 ml Aged Rum", "15 ml Overproof Rum", "15 ml Falernum", "15 ml Lime Juice", "15 ml Orange Juice", "15 ml Passion Fruit Syrup (or Fassionola)", "1 Dash Angostura Bitters", "1 Dash Absinthe"],
    method: "Add all ingredients to a shaker with ice. Shake well until chilled. Strain into a chilled glass (often a coupe or tiki mug). Garnish with a citrus peel or mint.",
    description: "The Cobra's Fang is a complex, high-octane classic from the golden age of Tiki, featuring two distinct types of rum. Its intricate structure is defined by multiple fruit juices, a blend of liqueurs like Falernum, and just a hint of Absinthe for an herbal lift. This cocktail is a testament to sophisticated Tiki mixology, packing layers of flavour into a deceptively smooth drink. The combination of citrus, spice, and multiple rums delivers a powerful, tropical punch. It's an adventurous and deeply rewarding journey into exotic flavour."
  },
  {
    Cocktail_ID: 4,
    name: "Cosmopolitan",
    image: "Images/Cocktails/cosmopolitan.png",
    baseSpirit: "Vodka",
    ingredients: ["45 ml Citrus Vodka", "30 ml Cointreau or Triple Sec", "15 ml Fresh Lime Juice", "15 ml Cranberry Juice"],
    method: "Combine all ingredients in a cocktail shaker with ice. Shake well until thoroughly chilled. Double strain into a chilled coupe or martini glass. Garnish with a lime twist or flamed orange peel.",
    description: "Recognizable by its signature pink-red hue, the Cosmopolitan is a modern classic that remains incredibly popular worldwide. It is essentially a sophisticated vodka-based sour, balancing the spirit with the orange notes of Cointreau and fresh lime juice. The crucial ingredient is the small measure of cranberry juice, which provides the iconic colour and a subtle tartness. Always served 'up' in a martini glass, the Cosmo is sleek, stylish, and perfect for an evening out. Its clean, tart flavour is both refreshing and celebratory."
  },
  {
    Cocktail_ID: 5,
    name: "Dark 'n' Stormy",
    image: "Images/Cocktails/dark-n-stormy.png",
    baseSpirit: "Rum",
    ingredients: ["60 ml Dark Rum (Gosling's Black Seal is traditional)", "120-150 ml Ginger Beer", "15 ml Fresh Lime Juice (Optional)"],
    method: "Fill a highball glass with ice. Add ginger beer and lime juice (if using). Gently float the dark rum on top. Garnish with a lime wedge.",
    description: "Hailing from Bermuda, the Dark 'n' Stormy is a simple, highball-style cocktail with a legally protected name requiring Gosling's Black Seal rum. It is a deceptively easy drink to make, featuring the dark, rich molasses and spice notes of the rum against the fiery kick of ginger beer. The rum is traditionally floated on top to create the 'stormy' dark layer hovering over the bubbly 'cloud' of ginger beer. It is a deeply flavourful, spicy, and incredibly refreshing long drink, often improved by a small squeeze of fresh lime. The contrast between the two main ingredients makes it a timeless classic."
  },
  {
    Cocktail_ID: 6,
    name: "Death Star",
    image: "Images/Cocktails/death-star.png",
    baseSpirit: "Multiple Spirits",
    ingredients: ["30 ml Tequila", "30 ml Spiced Rum", "30 ml Triple Sec", "15 ml Lime Juice", "15 ml Lemon Juice", "60 ml Ginger Beer"],
    method: "Add tequila, spiced rum, triple sec, and citrus juices to a rocks glass over ice. Stir for about 30 seconds. Top with ginger beer and stir briefly again. (Recipe varies widely).",
    description: "The Death Star is a strong, multi-spirit concoction known for its powerful, boozy kick and complex flavour profile. This particular recipe combines two distinct base spirits, Tequila and Spiced Rum, creating a warming, spicy foundation. The balance is provided by a mix of lime and lemon juices, alongside the orange notes of Triple Sec. Finally, a topping of ginger beer adds effervescence and a welcome, spicy dryness to the finish. It's a fun, modern drink that delivers a high alcohol content and a memorable blend of citrus and spice."
  },
  {
    Cocktail_ID: 7,
    name: "Dry Martini",
    image: "Images/Cocktails/dry-martini.png",
    baseSpirit: "Gin",
    ingredients: ["75 ml Gin", "15 ml Dry Vermouth"],
    method: "Stir gin and dry vermouth with ice until well-chilled (stirring is preferred for clarity). Strain into a chilled coupe or martini glass. Garnish with an olive or a lemon twist.",
    description: "Often called the 'King of Cocktails,' the Dry Martini is a benchmark of simplicity, sophistication, and pure flavour. It is a powerful, spirit-forward drink based almost entirely on gin, with only a small measure of dry vermouth to soften its edge. The key to a great Martini lies in the temperature and dilution, which is why it's nearly always stirred, not shaken. The choice of garnish—a twist of lemon or a few briny olives—fundamentally changes the experience. This elegant cocktail is a refined classic for those who appreciate the true taste of their spirit."
  },
  {
    Cocktail_ID: 8,
    name: "French 75",
    image: "Images/Cocktails/French-75.png",
    baseSpirit: "Gin",
    ingredients: ["30 ml Gin","15 ml Fresh Lemon Juice", "15 ml Simple Syrup", "90 ml Champagne or Dry Sparkling Wine"],
    method: "Combine gin, lemon juice, and simple syrup in a shaker with ice. Shake well. Strain into a tall, thin glass (like a champagne flute or Collins glass). Top with chilled Champagne. Garnish with a lemon twist.",
    description: "Named after the French 75mm field gun, this cocktail delivers a surprisingly powerful kick beneath a bubbly, elegant facade. It perfectly marries a Gin-based sour—made with lemon juice and simple syrup—with the delicate effervescence of Champagne. The initial shake with ice ensures the base ingredients are perfectly chilled and balanced before being lengthened. Served in a flute, its refreshing, citrusy taste makes it a sophisticated choice for celebrations or brunch. The French 75 is a beautifully balanced blend of power and grace."
  },
  {
    Cocktail_ID: 9,
    name: "Grave Digger",
    image: "Images/Cocktails/grave-digger.png",
    baseSpirit: "Whiskey",
    ingredients: ["45 ml Whiskey or Bourbon", "30 ml Coffee Liqueur", "60 ml Coca-Cola or Club Soda"],
    method: "Build whiskey and coffee liqueur in an Old Fashioned glass over ice. Top with Coca-Cola or Club Soda. Gently stir. (Recipe varies widely, often includes a whiskey base).",
    description: "The Grave Digger is a dark, comforting cocktail with a distinct flavour of coffee and spirit, designed for a late-night setting. It uses a warming whiskey base, typically Bourbon or Rye, complemented by the rich, bittersweet notes of coffee liqueur. The drink is then topped with a choice of mixer, either the sugary spice of cola or the simple fizz of soda water. This combination creates a heavy, flavourful drink that feels deep and mysterious. It's a simple, buildable cocktail for those who enjoy a bittersweet, spirit-forward profile."
  },
  {
    Cocktail_ID: 10,
    name: "Italian Espresso Martini",
    image: "Images/Cocktails/italian-espresso-martini.png",
    baseSpirit: "Vodka",
    ingredients: ["45 ml Vodka", "30 ml Coffee Liqueur", "30 ml Fresh Espresso", "15 ml Simple Syrup"],
    method: "Combine all ingredients in a shaker with ice. Shake vigorously until a thick layer of foam forms. Double strain into a chilled coupe or martini glass. Garnish with three coffee beans.",
    description: "This variant of the Espresso Martini is a rich, invigorating post-dinner cocktail that has become a global phenomenon. It is an elevated blend of smooth vodka, coffee liqueur, and a shot of fresh, strong espresso. The secret to its signature appeal is the aggressive shake, which creates a velvety, thick layer of foam, or *crema*, on top. The Italian version often features a hint more coffee or a specific liqueur to accentuate the bittersweet flavour. It is the perfect liquid dessert for coffee and spirit lovers."
  },
  {
    Cocktail_ID: 11,
    name: "Mai Tai",
    image: "Images/Cocktails/mai-tai.png",
    baseSpirit: "Rum",
    ingredients: ["30 ml Aged Jamaican Rum", "30 ml Rhum Agricole or Aged Martinique Rum", "22.5 ml Fresh Lime Juice", "15 ml Orgeat Syrup", "15 ml Dry Curaçao or Orange Liqueur"],
    method: "Combine all ingredients in a shaker with crushed ice. Shake briefly to chill. Pour (unstrained) into a rocks glass. Garnish with a mint sprig and a lime shell.",
    description: "The Mai Tai, a legendary Tiki cocktail, is a complex masterpiece of flavour, famously named after the Tahitian phrase for 'Out of this world! The best!'. It derives its depth from a mandatory blend of two distinct types of rum, providing a rich, multi-layered base. The unique nutty and floral notes of Orgeat syrup are balanced by the sharpness of fresh lime juice and the bitter orange of Curaçao. Served over crushed ice, it is an intense, fruity, yet spirit-forward tropical drink. It stands as a pinnacle of balance in the often-sweet world of Tiki cocktails."
  },
  {
    Cocktail_ID: 12,
    name: "Manhattan",
    image: "Images/Cocktails/manhattan.png",
    baseSpirit: "Whiskey",
    ingredients: ["60 ml Rye or Bourbon Whiskey", "30 ml Sweet Vermouth", "2 Dashes Angostura Bitters"],
    method: "Combine all ingredients in a mixing glass with ice. Stir until well-chilled. Strain into a chilled coupe or martini glass. Garnish with a brandied cherry.",
    description: "One of the oldest and most respected cocktails, the Manhattan is an elegant, spirit-forward drink that is the definition of a classic. It features a simple but powerful trio of ingredients: whiskey (Rye being traditional), sweet vermouth, and a dash of aromatic bitters. The cocktail's character is shaped entirely by the quality of its components and the skill of the bartender's stirring technique. Served chilled and 'up,' it presents a beautiful balance of spice, sweetness, and the rich notes of the base spirit. The Manhattan is a warming, complex, and iconic pre-dinner sipper."
  },
  {
    Cocktail_ID: 13,
    name: "Mojito",
    image: "Images/Cocktails/mojito.png",
    baseSpirit: "Rum",
    ingredients: ["60 ml White Rum", "30 ml Fresh Lime Juice", "22.5 ml Simple Syrup", "8-10 Fresh Mint Leaves", "Splash of Soda Water"],
    method: "Gently muddle mint leaves and simple syrup in a highball glass. Add lime juice and rum. Fill glass with crushed ice. Top with soda water and gently stir. Garnish with a mint sprig and lime wedge.",
    description: "Hailing from Cuba, the Mojito is a brilliantly refreshing highball cocktail defined by the aromatic lift of fresh mint. The key is to gently *muddle* the mint with sugar and lime, releasing the oils without tearing the leaves and introducing bitterness. White rum forms the base, which is then topped with crushed ice and a splash of sparkling soda water. Its profile is a perfect contrast of sweet, tart, herbal, and bubbly elements. The Mojito is the quintessential summertime drink, delivering vibrant freshness in every sip."
  },
  {
    Cocktail_ID: 14,
    name: "Negroni",
    image: "Images/Cocktails/negroni.png",
    baseSpirit: "Gin",
    ingredients: ["30 ml Gin", "30 ml Campari", "30 ml Sweet Vermouth"],
    method: "Combine all ingredients in an Old Fashioned glass over a large ice cube. Stir until well-chilled and properly diluted. Garnish with an orange peel or slice.",
    description: "The Negroni is a sophisticated Italian aperitivo, famous for its simple 1:1:1 ratio that creates a powerhouse of bittersweet flavour. It masterfully balances the juniper notes of Gin with the bittersweet, herbal intensity of Campari and the rich, spiced body of Sweet Vermouth. Served over a single large ice cube, this cocktail is stirred, not shaken, to achieve the perfect icy dilution without clouding the clarity. Its deep red hue and complex herbal taste make it an acquired taste and a darling of the bartending world. The Negroni is the ultimate complex pre-dinner palate cleanser."
  },
  {
    Cocktail_ID: 15,
    name: "Old Fashioned",
    image: "Images/Cocktails/old-fashioned.png",
    baseSpirit: "Whiskey",
    ingredients: ["60 ml Whiskey (Bourbon or Rye)", "1 Sugar Cube (or 15 ml Simple Syrup)", "2-3 Dashes Angostura Bitters", "Splash of Water or Club Soda"],
    method: "Muddle sugar and bitters with a splash of water (or simple syrup if using) in a rocks glass. Add whiskey and a large ice cube. Stir until well-chilled. Garnish with an orange twist.",
    description: "The Old Fashioned is arguably the original cocktail, defined by the simple recipe that gave it its name. It is a spirit-forward, comforting drink that highlights the complex flavour of the base whiskey, typically Bourbon or Rye. The sugar cube and bitters are muddled together to create a spiced, slightly sweet base for the spirit to sit upon. Served over a large chunk of ice, the cocktail is slowly stirred to achieve perfect dilution. This timeless classic is warm, complex, and a true test of a bartender's technique."
  },
  {
    Cocktail_ID: 16,
    name: "Paloma",
    image: "Images/Cocktails/paloma.png",
    baseSpirit: "Tequila",
    ingredients: ["60 ml Tequila Blanco", "15 ml Fresh Lime Juice", "120 ml Grapefruit Soda (e.g., Squirt, Jarritos)"],
    method: "Rim a highball glass with salt (optional). Add tequila and lime juice to the glass with ice. Top with grapefruit soda. Gently stir. Garnish with a lime wedge or grapefruit slice.",
    description: "Meaning 'dove' in Spanish, the Paloma is one of Mexico's most popular cocktails, favoured over the Margarita in many regions. It's a simple, highball-style drink built on Tequila Blanco, which pairs beautifully with the bittersweet citrus of grapefruit soda. The addition of fresh lime juice is essential to brighten the flavour and ensure a sharp, refreshing profile. Served in a tall glass, often with a salted rim, the Paloma is bubbly, crisp, and incredibly easy to drink. It's the perfect light, zesty alternative to a standard Tequila soda."
  },
  {
    Cocktail_ID: 17,
    name: "Pina Colada",
    image: "Images/Cocktails/pina-colada.png",
    baseSpirit: "Rum",
    ingredients: ["60 ml White Rum", "30 ml Cream of Coconut", "120 ml Pineapple Juice"],
    method: "Combine rum, cream of coconut, and pineapple juice with crushed ice in a blender. Blend until smooth. Pour into a chilled glass (e.g., Hurricane or Poco Grande). Garnish with a pineapple wedge and a cherry.",
    description: "The quintessential tropical escape in a glass, the Piña Colada is a creamy, sweet cocktail officially recognized as the national drink of Puerto Rico. Its signature rich texture comes from the perfect emulsification of white rum with thick cream of coconut and tangy pineapple juice. Although sometimes served over ice, it is most famous in its blended, frosty form, delivering a thick, dessert-like consistency. The combination of coconut and pineapple is an irresistible and decadent taste of the Caribbean. It's the ultimate vacation-in-a-glass cocktail."
  },
  {
    Cocktail_ID: 18,
    name: "Rum Punch",
    image: "Images/Cocktails/rum-punch.png",
    baseSpirit: "Rum",
    ingredients: ["30 ml Dark Rum", "30 ml Light Rum", "30 ml Orange Juice", "30 ml Pineapple Juice", "15 ml Lime Juice", "15 ml Grenadine"],
    method: "Combine all ingredients in a shaker with ice. Shake well until chilled. Strain into a glass (e.g., Hurricane or Highball) filled with fresh ice. Garnish with an orange slice and a cherry. (Proportions vary wildly).",
    description: "Rum Punch is a broad category of sweet, fruit-forward cocktails designed to be easily batched and enjoyed at parties. This particular recipe follows the classic structure of *'One of Sour, Two of Sweet, Three of Strong, Four of Weak,'* adapting it with two types of rum for a deeper flavour. The liquid strength is complemented by a medley of fruit juices like orange and pineapple, balanced by a dash of tart lime. The grenadine adds sweetness, colour, and a classic, vibrant tropical look. It’s an accessible, crowd-pleasing cocktail full of vibrant, sunny flavour."
  },
  {
    Cocktail_ID: 19,
    name: "Sex on the Beach",
    image: "Images/Cocktails/Sex-on-the-Beach.png",
    baseSpirit: "Vodka",
    ingredients: ["45 ml Vodka", "22.5 ml Peach Schnapps", "45 ml Cranberry Juice", "45 ml Orange Juice"],
    method: "Build all ingredients in a highball glass filled with ice. Gently stir to combine. Garnish with an orange slice or a cherry.",
    description: "A popular, accessible cocktail from the 1980s, the Sex on the Beach is a vibrant, easy-drinking mix of sweet fruit flavours. Vodka provides a neutral base, allowing the tropical blend of juices to dominate the taste profile. The distinct flavour of peach schnapps adds a floral, fruity sweetness that separates it from other highballs. The cranberry and orange juices give it a beautiful, layered gradient of colour resembling a sunset. It is a sweet, refreshing, and simple-to-make party favourite."
  },
  {
    Cocktail_ID: 20,
    name: "Sidecar",
    image: "Images/Cocktails/sCocktail_IDe-by-sCocktail_IDecar.png",
    baseSpirit: "Brandy",
    ingredients: ["45 ml Cognac (Brandy)", "30 ml Triple Sec (or Cointreau)", "22.5 ml Fresh Lemon Juice"],
    method: "Sugar-rim a chilled coupe or martini glass (optional). Combine all ingredients in a shaker with ice. Shake well until chilled. Double strain into the prepared glass. Garnish with a lemon twist.",
    description: "The Sidecar is a highly regarded classic from the post-WWI era, standing as one of the best examples of a perfectly balanced sour cocktail. Its base is the refined complexity of Cognac (Brandy), which gives it a rich, barrel-aged depth. This is perfectly complemented by the bright citrus of fresh lemon juice and the sweet orange liqueur of Triple Sec or Cointreau. It is typically served 'up' in a sugar-rimmed glass, which offers a lovely contrast to the tart liquid. This refined and elegant cocktail is a beautiful harmony of sweet, sour, and strong."
  },
  {
    Cocktail_ID: 21,
    name: "Strawberry Daiquiri",
    image: "Images/Cocktails/strawberry-daquiri.png",
    baseSpirit: "Rum",
    ingredients: ["60 ml Light Rum", "30 ml Fresh Lime Juice", "15 ml Simple Syrup", "4-5 Fresh or Frozen Strawberries"],
    method: "Combine all ingredients in a blender with 1 cup of ice. Blend until smooth and frosty. Pour into a chilled glass (e.g., coupe or hurricane). Garnish with a strawberry slice.",
    description: "This frozen version transforms the classic Daiquiri into a thick, fruity, and highly popular sweet cocktail. It uses the foundational Daiquiri structure of rum, lime, and sugar, but adds a generous portion of fresh or frozen strawberries for flavour and texture. The cocktail is heavily diluted and chilled through the blending process, creating a frosty, smooth consistency. It's a sweet, summery, and refreshing drink, best enjoyed on a hot day. The bright red colour and intense berry flavour make it an irresistible indulgence."
  },
  {
    Cocktail_ID: 22,
    name: "Tequila Mockingbird",
    image: "Images/Cocktails/tequila-mockingbird.png",
    baseSpirit: "Tequila",
    ingredients: ["60 ml Tequila Blanco", "30 ml Fresh Lime Juice", "22.5 ml Agave Syrup", "2-3 Slices of Jalapeño (optional)"],
    method: "Combine tequila, lime juice, and agave syrup (and jalapeño slices if using) in a shaker with ice. Shake well. Double strain into a rocks glass over fresh ice. Garnish with a lime wedge. (The recipe for this is highly variable).",
    description: "The Tequila Mockingbird is a spicy, tart, and invigorating cocktail that is essentially a variation on a classic Margarita. It uses Tequila Blanco and fresh lime juice, but swaps traditional orange liqueur for the natural sweetness of Agave syrup. The defining feature is the optional addition of jalapeño slices, which are muddled or shaken to infuse a pleasant, lingering warmth. This cocktail is a fantastic choice for those who enjoy a bit of heat and complexity in their drink. It's a modern, zesty, and highly customizable sour."
  },
  {
    Cocktail_ID: 23,
    name: "Tequila Sunrise",
    image: "Images/Cocktails/tequila-sunrise.png",
    baseSpirit: "Tequila",
    ingredients: ["60 ml Tequila Blanco", "120 ml Orange Juice", "15 ml Grenadine"],
    method: "Pour tequila and orange juice into a highball glass filled with ice. Slowly pour the grenadine down the side of the glass, allowing it to sink to the bottom. Do not stir. Garnish with an orange slice and a cherry.",
    description: "Famous for its vibrant, multi-layered appearance, the Tequila Sunrise is a simple, buildable cocktail that captures the colours of its namesake. It combines a base of Tequila Blanco with the simple sweetness of orange juice, a combination that is easy to drink. The iconic visual is achieved by slowly pouring the heavy grenadine down the side, allowing it to settle at the bottom and create a beautiful red gradient. Served in a tall glass, it is a sweet, refreshing, and festive party favourite. It remains an enduring symbol of 1970s cocktail culture."
  },
  {
    Cocktail_ID: 24,
    name: "Test Pilot",
    image: "Images/Cocktails/test-pilot.png",
    baseSpirit: "Rum",
    ingredients: ["45 ml Lightly Aged Rum", "22.5 ml Dark Rum", "15 ml Fresh Lime Juice", "15 ml Falernum", "15 ml Cointreau or Orange Liqueur", "1 Dash Angostura Bitters", "4 Drops Pernod or Absinthe"],
    method: "Combine all ingredients in a shaker with ice. Shake well until chilled. Double strain into a chilled coupe or tiki glass. Garnish with a lime wheel or a mint sprig.",
    description: "The Test Pilot is a powerful, deep-cut classic from the Tiki cocktail revival, created to evoke the feeling of high adventure. It uses a strong, two-rum base, blending the lighter and darker varieties for a complex foundation. Like many Tiki drinks, it achieves its unique profile through the use of specialty liqueurs like Falernum and a hint of anise from Absinthe. The result is a highly aromatic, tart, and potent cocktail with a blend of sweet spice and sharp citrus. It is a challenging but deeply rewarding drink for serious rum and Tiki enthusiasts."
  },
  {
    Cocktail_ID: 25,
    name: "Tom Collins",
    image: "Images/Cocktails/tom-collins.png",
    baseSpirit: "Gin",
    ingredients: ["60 ml Gin (Old Tom Gin is traditional)", "30 ml Fresh Lemon Juice", "15 ml Simple Syrup", "120 ml Club Soda"],
    method: "Combine gin, lemon juice, and simple syrup in a shaker with ice. Shake well. Strain into a chilled Collins glass over fresh ice. Top with club soda. Garnish with a lemon slice and a cherry.",
    description: "A true classic from the sour family, the Tom Collins is essentially a Gin-based lemonade lengthened with carbonation. It combines Gin, fresh lemon juice, and simple syrup, a trio that creates a perfectly balanced sweet and sour base. Historically, it was made with Old Tom Gin, which lends a slightly sweeter, maltier profile than modern London Dry. Topped with club soda, it's a light, bubbly, and incredibly refreshing long drink. The Tom Collins is a sophisticated, clean, and endlessly quaffable choice for any occasion."
  },
  {
    Cocktail_ID: 26,
    name: "Ube Colada",
    image: "Images/Cocktails/ube-colada.png",
    baseSpirit: "Rum",
    ingredients: ["60 ml Light Rum", "45 ml Cream of Coconut", "45 ml Pineapple Juice", "15 ml Ube Halaya (Ube Jam) or Ube Syrup"],
    method: "Combine all ingredients with crushed ice in a blender. Blend until smooth. Pour into a chilled glass. Garnish with a pineapple wedge and a cherry. (Recipe is a contemporary twist on a Piña Colada).",
    description: "The Ube Colada is a stunning, contemporary twist on the classic Piña Colada, incorporating the unique flavour and vibrant colour of Ube. Ube, a purple yam from the Philippines, gives the drink a gorgeous lavender hue and a subtle, vanilla-like earthiness. This flavour profile melds beautifully with the tropical cream of coconut and the tartness of the pineapple juice. Served blended and frosty, it maintains the smooth, dessert-like texture of its inspiration. This visually striking cocktail is a modern exploration of tropical flavour combinations."
  },
  {
    Cocktail_ID: 27,
    name: "Vodka Martini",
    image: "Images/Cocktails/vodka-martini.png",
    baseSpirit: "Vodka",
    ingredients: ["75 ml Vodka", "15 ml Dry Vermouth"],
    method: "Combine vodka and dry vermouth in a mixing glass with ice. Stir until well-chilled. Strain into a chilled coupe or martini glass. Garnish with an olive or a lemon twist.",
    description: "The Vodka Martini is the sleeker, more neutral cousin of the Gin Martini, achieving its popularity largely through modern culture and cinema. It is a spirit-forward cocktail, where the subtle, clean notes of high-quality vodka are softened by a small measure of dry vermouth. Because vodka has less inherent flavour than gin, it is often served very cold and with less vermouth to emphasize the spirit's purity. Like all Martinis, it is stirred to maintain its clear, icy appearance. The choice of garnish—olive or twist—is crucial to defining its final character, from 'wet' to 'dirty.'"
  },
  {
    Cocktail_ID: 28,
    name: "Whiskey Sour",
    image: "Images/Cocktails/whiskey-sour.png",
    baseSpirit: "Whiskey",
    ingredients: ["60 ml Bourbon or Rye Whiskey", "30 ml Fresh Lemon Juice", "22.5 ml Simple Syrup", "1 Egg White (Optional)"],
    method: "Combine all ingredients in a shaker without ice and shake vigorously (dry shake). Add ice and shake again until well-chilled. Double strain into a rocks glass over a large ice cube. Garnish with a lemon slice and a cherry.",
    description: "The Whiskey Sour is one of the oldest and most beloved cocktail templates, offering a perfect balance between a strong spirit and tart citrus. Its basic formula is simple: whiskey, lemon juice, and sweetener, creating an invigorating and highly palatable drink. The optional but traditional egg white adds a luxurious, foamy head and a silky texture to the cocktail, a process achieved through a 'dry shake.' The result is a smooth, sophisticated, and perfectly balanced sour. It is a fantastic introduction to whiskey-based cocktails."
  },
  {
    Cocktail_ID: 29,
    name: "Zombie",
    image: "Images/Cocktails/zombie-cocktail.png",
    baseSpirit: "Rum",
    ingredients: ["45 ml Gold Rum", "45 ml Dark Rum", "30 ml High-Proof Rum", "22.5 ml Fresh Lime Juice", "15 ml Falernum", "15 ml Donn's Mix (Grapefruit Juice & Cinnamon Syrup)", "1 Dash Angostura Bitters", "6 Drops Grenadine"],
    method: "Combine all ingredients in a shaker with ice. Shake well until chilled. Strain into a highball glass or tiki mug filled with crushed ice. Garnish with a mint sprig and/or fruit. (Recipe is complex and highly variable).",
    description: "The Zombie is a legendary, potent Tiki masterpiece created in the 1930s by Donn Beach, famous for its powerful combination of multiple rums. The recipe is intentionally complex and guarded, often containing a mixture of gold, dark, and high-proof rum to deliver a serious punch. Its intricate flavour profile includes a blend of exotic ingredients like Falernum and Donn's Mix, balancing spice, grapefruit, and strong spirit. Historically, its consumption was limited to two per person due to its strength. The Zombie is the ultimate classic Tiki adventure: complex, fruity, and dangerously strong."
  }
]

// --- JAVASCRIPT LOGIC TO RENDER DATA ---

function getCocktailById(id) {
  let Cocktail_ID = localStorage.getItem("selectedCocktailId");
  //alert("id = " + Cocktail_ID );
  let cocktail=cocktailData.find(cocktail => cocktail.Cocktail_ID == Cocktail_ID);
  console.log(cocktail.name);
  let cocktailpg = `<h1 id="txtE">${cocktail.name}</h1> 
        <h2 align="center">Base Spirit: <strong>${cocktail.baseSpirit}</strong></h2><br>
        <div class="cocktail-table">
            <table>
                <tbody>
                    <tr>
                        <td><img id="cocktail-image" class="cocktail-image" src="${cocktail.image}"></td>
                        <td><ul>
                            <button onclick="addToFavorites(item)">Add to Favorites</button>
                            <p id="txt2">Ingredients:</p>
                                <li>${cocktail.ingredients}</li>
                        </ul> <br><br>
                        <p id="txt2">Instructions:</p>
                        <ol>
                          <li>${cocktail.method}</li>
                        </ol>
                        </td>           
                    </tr>

                    <tr>
                        <td><p>${cocktail.description}</p></td>`
      document.getElementById("cocktailDetailContainer").innerHTML = cocktailpg;
}

window.onload = getCocktailById();
console.log("Loaded cocktail detail page");





/*
// Get the selected cocktail ID from local storage
let cocktailId = localStorage.getItem("selectedCocktailId");

// Find the selected cocktail in the cocktailData array
let selectedCocktail = cocktailData.find(cocktail => cocktail.Cocktail_ID == cocktailId);

// Function to display the cocktail detail
function displayCocktailDetail(cocktail) {
  let ingredientsList = cocktail.ingredients.map(ing => `<li>${ing}</li>`).join('');
  
  let cocktailDetail = `
    <div class="cocktail-detail-card">
      <h2>${cocktail.name}</h2>
      <img src="${cocktail.image}" alt="${cocktail.name}" class="cocktail-image">
      <div class="cocktail-info">
        <h3>Base Spirit: ${cocktail.baseSpirit}</h3>
        <h3>Ingredients:</h3>
        <ul>${ingredientsList}</ul>
        <h3>Method:</h3>
        <p>${cocktail.method}</p>
        <h3>Description:</h3>
        <p>${cocktail.description}</p>
      </div>
    </div>
  `;
  
  return cocktailDetail;
}

// Display the cocktail detail in the container
const container = document.getElementById('cocktailDetailContainer');
if (container && selectedCocktail) {
  container.innerHTML = displayCocktailDetail(selectedCocktail);
} else {
  console.error('Container not found or cocktail not selected');
}
*/






/*-----Favorite Functionality-----*/
function displayItemDetail(item){
  const likes = item.likes ?? 0;
  const dislikes = item.dislikes ?? 0;
  const ingredientsHtml = Array.isArray(item.ingredients)
    ? item.ingredients.map(ing => `<li>${ing}</li>`).join('')
    : (item.ingredients || '');

  // Store the item data as a JSON string for the onclick handler
  const itemJson = JSON.stringify(item).replace(/'/g, "\\'");

  return `
    <div class="item-detail-card">  
      <h2>${item.name}</h2>
      <p>ID: ${item.Cocktail_ID}</p>
      <p>Base Spirit: ${item.baseSpirit}</p>

      <h3>Ingredients</h3>
      <ul>${ingredientsHtml}</ul>

      <h3>Method</h3>
      <p>${item.method}</p>

      <img src="${item.image}" alt="${item.name}" style="height:250px;">

      <h3>Description</h3>
      <p>${item.description}</p>

      <p>Likes: ${likes} &nbsp; Dislikes: ${dislikes}</p>
      <button onclick="likeItem(${item.Cocktail_ID})">Like</button>
      <button onclick="dislikeItem(${item.Cocktail_ID})">Dislike</button>
      <button onclick='addToFavorites(${itemJson})'>⭐ Add to Favorites</button>
    </div>
  `;
}