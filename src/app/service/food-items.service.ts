import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodItemsService {

  allFoods: any = [
    {
      id: 1,
      name: 'Chicken Spicey Pizza',
      cookTime: '10-20',
      price: 10,
      favorite: false,
      origins: ['Italy'],
      stars: 1,
      imageUrl: '/assets/food- (1).jpg',
      tags: ['FastFood', 'Pizza', 'Lunch'],
      desc: "Fire up your taste buds with this fiery and flavorful pizza.The zesty tomato sauce, gooey cheese, and tender chicken are topped with a generous sprinkle of fiery spices that will make your mouth sing.With each cheesy, spicy bite, you'll be transported to flavor town, where every slice is a slice of pure pizza paradise!",
      ings: "¾ cup pizza sauce(180 mL)\n" +
        " 1 ½ tablespoons Frank's Red Hot Original, plus more for drizzling\n" +
        "1 tablespoon olive oil\n" +
        "1 ½ teaspoons cornmeal" +
        "1 lb pizza dough(455 g)" +
        "1 ½ cups shredded mozzarella cheese(150 g)" +
        "1 ½ cups shredded chicken(190 g)" +
        "3 pieces bacon, torn into ½-inch (1 1/4 cm) pieces" +
        "1 small handful fresh baby spinach" +
        "¾ cup cherry tomato(150 g), halved" +
        "2 tablespoons red onion, minced" +
        "ranch dressing, for drizzling",
      prep: "1.Preheat oven to 450ºF (230ºC)." +
        "2.In a small bowl, whisk together pizza sauce with Frank’s Red Hot Original. Set aside." +
        "3.Drizzle a 12-inch (30 ½ cm) cast iron skillet with olive oil. Use your hand or a paper towel to evenly coat the pan with oil. Sprinkle pan with cornmeal." +
        "4.Press pizza dough into the pan so that it covers the whole surface evenly." +
        "5.Spread spicy pizza sauce on the dough. Top with mozzarella, chicken, and bacon. Scatter spinach, cherry tomatoes, and red onion on top." +
        "6.Bake pizza for 14–16 minutes until edges are browned and crisp." +
        "7.Remove from oven and let cool for 5 minutes, then drizzle with Frank’s Red Hot Original and ranch dressing. Slice and serve." +
        "8.Enjoy!"


    },
    {
      id: 2,
      name: 'Pizza Pepperoni',
      cookTime: '20-30',
      price: 20,
      favorite: false,
      origins: ['Italy', 'East-China'],
      stars: 2,
      imageUrl: '/assets/food- (2).jpg',
      tags: ['FastFood', 'Pizza', 'Lunch'],
      desc: "Pepperoni is characteristically soft, slightly smoky, and bright red in color. Thinly sliced pepperoni is a popular pizza topping in American pizzerias. Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients baked at a high temperature, traditionally in a wood-fired oven. A small pizza is sometimes called a pizzetta.",
      ings: "16 ounces pizza dough,store-bought or homemade(I like this no-knead version,though note that this recipe makes enough dough for 2 pizzas)\n" +
        "1/2 cup pizza sauce (see below)\n" +
        "18 to 20 slices pepperoni\n" +
        "12 ounces mozzarella cheese, grated\n" +
        "1/2 teaspoon ground black pepper\n" +
        "1 teaspoon fresh oregano, optional\n" +
        "Flour for rolling and shaping dough\n\n" +
        "For the Quick Pizza Sauce:\n\n" +

        "1/2 cup tomato sauce (no salt)\n" +
        "1/2 teaspoon kosher salt\n" +
        "1/2 teaspoon ground black pepper\n" +
        "1/2 teaspoon granulated garlic\n" +
        "1/2 teaspoon granulated onion\n" +
        "1/4 teaspoon red pepper flakes\n" +
        "1 teaspoon olive oil\n",
      prep: "Preheat the oven:\n" +
        "Preheat oven to 500°F. If you are using a pizza stone, preheat it in the oven for at least 20 minutes so it is nice and hot as well.\n" + "Make the sauce:\n" + "If you are using my sauce recipe, stir together the ingredients. The sauce recipe makes just enough for one large pizza. You can easily double it if you are making more than one pizza.\n" + "Make homemade pizza sauce for easy pepperoni pizza\n" + "Roll out the dough:\n" +
        "Roll out dough on a lightly floured surface. If it's hard to roll, let it rest for 5 minutes so it can come to room temperature. For a large pizza, I like to roll my dough into about a 14-inch diameter circle.\n" + "Two balls of homemade pizza dough\n" +
        "Add the toppings:\n" + "Transfer the dough to a lightly dusted pizza peel. Alternatively, fit it into a large cast-iron.\n" + "Add sauce in a light layer all over the pizza, leaving about 1/4-inch crust around the edges. Chop half of the pepperoni and sprinkle it over the sauce. Top the pizza with grated cheese and the rest of the pepperoni. Season with black pepper.\n" +
        "Homemade Pizza Dough and Sauce\n" + "Put slices of pepperoni under the cheese layer on your homemade pepperoni pizza\n" + "Assembling homemade pepperoni pizza\n" + "Cook the pizza:\n" +
        "If you're using a pizza stone, carefully slide pizza into the center of the preheated pizza stone. Cook for 6 minutes, then rotate the pizza halfway so it cooks evenly. Cook for another 6-8 minutes, or until the crust is golden brown and charred in spots.\n" +
        "If you're using a skillet, press the dough into a cast iron skillet and add toppings. Place the skillet over a high heat burner for 2 minutes to get it preheated and get the crust cooking right away. Then transfer to a 500 ̊F oven and bake for 10 to 12 minutes, or until the crust is golden brown.\n" + "Slice and serve:\n" + "Use pizza peel to slide pizza out onto a cutting board. Let the pizza rest for a minute and slice into pieces. Season with fresh oregano (optional). Serve while warm with a side salad.",


    },
    {
      id: 3,
      name: 'Chicken-Wrap',
      cookTime: '10-15',
      price: 5,
      favorite: false,
      origins: ['Belgium', 'France', 'India'],
      stars: 3,
      imageUrl: '/assets/food- (9).jpg',
      tags: ['FastFood', 'Pizza', 'Lunch'],
      desc: "This healthy homemade chicken wrap recipe makes the best lunch or light dinner. The crispy tortilla, pan-seared chicken, spicy ranch, and crisp, fresh vegetable combination are sure to become a regular in your kitchen!",
      ings: "Sauce:\n\n" +
        "½ cup mayonnaise\n" +
        "¼ cup finely chopped seedless cucumber\n" +
        "1 tablespoon honey\n" +
        "½ teaspoon cayenne pepper\n" +
        "ground black pepper to taste\n\n" +
        "Wraps:\n\n" +
        "2 tablespoons olive oil\n" +
        "1 ½ pounds skinless, boneless chicken breast halves - cut into thin strips\n" +
        "1 cup thick and chunky salsa\n" +
        "1 tablespoon honey\n" +
        "½ teaspoon cayenne pepper\n" +
        "8 (10 inch) flour tortillas\n" +
        "1 (10 ounce) bag baby spinach leaves",
      prep: "Step 1:\n" + "Make the sauce: Mix mayonnaise, cucumber, honey, cayenne pepper, and black pepper together in a bowl until smooth. Cover and refrigerate until needed.\n" +
        "Step 2:\n" + "Make the wraps: Heat olive oil in a skillet on medium-high heat. Add chicken strips; cook and stir until they start to turn golden and are no longer pink in the middle, about 8 minutes. Stir in salsa, honey, and cayenne pepper. Reduce the heat to medium-low; simmer, stirring occasionally, until flavors have blended, about 5 minutes.\n" +
        "Step 3:\n" + "Stack tortillas, 4 at a time, in a microwave oven and heat until warm and pliable, 20 to 30 seconds per batch.\n" +
        "Step 4:\n" + "Spread each tortilla with 1 tablespoon mayonnaise-cucumber sauce, top with a layer of spinach, and arrange about 1/2 cup of the chicken mixture on top.\n" +
        "Step 5:\n" + "Fold the bottom of each tortilla up about 2 inches, and start rolling from the right side. When wrap is halfway rolled, fold the top of the tortilla down, enclosing the filling, and continue rolling to make a tight, compact cylinder.",


    },
    {
      id: 4,
      name: 'Hamburger',
      cookTime: '15-20',
      price: 2,
      favorite: false,
      origins: ['Germany', 'US'],
      stars: 1,
      imageUrl: '/assets/food- (10).jpg',
      tags: ['FastFood', 'Pizza', 'Lunch'],
      desc: "A hamburger is a type of sandwich that involves a ground beef patty served between two halves of a round bun. Most of the time the meat is grilled or cooked in a hot skillet, though some recipes call for it to be baked.",
      ings: "1 ½ pounds lean ground beef\n" + "½ onion, finely chopped\n" + "½ cup shredded Colby Jack or Cheddar cheese\n" + "1 egg 1 (1 ounce) envelope dry onion soup mix\n" + "1 clove garlic, minced\n" + "1 tablespoon garlic powder\n" + "1 teaspoon soy sauce\n" + "1 teaspoon Worcestershire sauce\n" + "1 teaspoon dried parsley\n" + "1 teaspoon dried basil\n" + "1 teaspoon dried oregano\n" + "½ teaspoon crushed dried rosemary\n" + "salt and pepper to taste",
      prep: "Step 1:\n" + "Preheat an outdoor grill for high heat and lightly oil the grate.\n" +

        "Step 2:\n" + "Meanwhile, combine ground beef, onion, cheese, egg, onion soup mix, minced garlic, garlic powder, soy sauce, Worcestershire sauce, parsley, basil, oregano, rosemary, salt, and pepper in a large bowl. Use your hands to form the mixture into 4 patties.\n" +

        "Step 3:\n" + "Cook patties on the preheated grill until no longer pink in the center and the juices run clear, about 4 to 5 minutes per side. An instant-read thermometer inserted into the center should read at least 165 degrees F (74 degrees C).",


    },
    {
      id: 5,
      name: 'Chicken Soup',
      cookTime: '40-50',
      price: 11,
      favorite: false,
      origins: ['India', 'Asia'],
      stars: 3,
      imageUrl: '/assets/food- (5).jpg',
      tags: ['FastFood', 'Pizza', 'Lunch'],
      desc: "Chicken soup is a soup made from chicken, simmered in water, usually with various other ingredients. The classic chicken soup consists of a clear chicken broth, often with pieces of chicken or vegetables; common additions are pasta, noodles, dumplings, or grains such as rice and barley.",
      ings: "Chicken: This homemade chicken soup starts with a 3-pound whole chicken.\n" +
        "Vegetables: You'll need carrots, celery, and an onion.\n" +
        "Seasonings: Simply season the soup with salt, pepper, and chicken bouillon granules (if you want).",
      prep: "You'll find the full, step-by-step recipe below — but here's a brief overview of what you can expect when you make this easy chicken soup:\n" +

        "1. Make the stock by boiling the chicken and veggies until the meat is falling off the bone.\n" +
        "2. Remove the chicken and cut into pieces (discard skin and bones).\n" +
        "3. Strain the vegetables (reserving the stock) and cut into pieces. Rinse the pot.\n" +
        "4. Return everything to the pot. Heat the soup through and season to taste.\n" +

        "Optional: If you want chicken noodle soup, add cooked noodles to the pot just before serving.",

    },
    {
      id: 6,
      name: "Carla's Sausage Cheese Balls",
      cookTime: '40-50',
      price: 9,
      favorite: false,
      origins: ['Persia', 'Middle-East-China'],
      stars: 1,
      imageUrl: '/assets/food- (6).jpg',
      tags: ['FastFood', 'Pizza', 'Lunch'],
      desc: "Cheese balls are traditionally made with two kinds of cheese – cream cheese (or another soft cheese like quark cheese, mascarpone or ricotta) and a grated semi-soft or semi-firm cheese like cheddar, colby cheese, monterey jack cheese, or muenster.",
      ings: "1 (16 ounce) package bulk mild pork sausage\n" + "1 (16 ounce) package bulk hot pork sausage\n" + "1 (8 ounce) package shredded sharp Cheddar cheese\n" + "2 cups biscuit baking mix (such as Bisquick®)",
      prep: "Step 1:\n" + "Preheat oven to 400 degrees F (200 degrees C).\n" + "Step 2:\n" + "Line a baking sheet with aluminum foil.\n" +
        "Step 3:\n" + "Mix mild sausage and hot sausage in a large bowl until evenly blended.\n" +
        "Step 4:\n" + "Stir Cheddar cheese into sausage mixture.\n" +
        "Step 5:\n" + "Mix biscuit baking mix into sausage mixture about 1/2 cup at a time until baking mix is moist.\n" +
        "Step 6:\n" + "Roll meat mixture into 1 1/4- to 1 1/2-inch balls.\n" +
        "Step 7:\n" + "Arrange meatballs on prepared baking sheet.\n" +
        "Step 8:\n" + "Bake in the preheated oven until meatballs are no longer pink in the center and cheese is browned, about 20 minutes.",


    },
    {
      id: 7,
      name: 'Raspberry Pink Velvet Cake',
      cookTime: '10-15',
      price: 5,
      favorite: false,
      origins: ['India'],
      stars: 1,
      imageUrl: '/assets/food-15 (3).jpg',
      tags: ['FastFood', 'Pizza', 'Lunch'],
      desc: "Red velvet cake tastes like very mild cocoa with a slightly tart edge. The cream cheese frosting is the most forward flavor. Perhaps even more important than the taste is the texture: smooth, soft, tender and light with creamy icing.",
      ings: "3 c. cake flour, spooned and leveled, plus more for pans" +
        "1 tbsp. baking powder" +
        "1/2 tsp. Kosher salt" +
        "1 c. (2 sticks) unsalted butter, at room temperature" +
        "2 c. granulated sugar" +
        "4 c. fresh raspberries, divided, plus more for decorating" +
        "4 large eggs" +
        "2 tsp. pure vanilla extract" +
        "3/4 c. Buttermilk" +
        "3 drops pink food coloring, optional" +
        "3 tbsp. seedless raspberry preserves" +
        "meringue kisses and edible flowers, for decorating\n" +
        "Raspberry Cream Cheese Frosting\n" +
        "1/2 c. (1 stick) unsalted butter, at room temperature" +
        "4 oz. cream cheese, at room temperature" +
        "1/4 c. fresh raspberries" +
        "1 tsp. pure vanilla extract" +
        "1/2 tsp. Kosher salt" +
        "3 c. confectioners’ sugar",
      prep: "Step 1:\n" +
        "Preheat oven to 350°F. Make the cake: Grease and flour 3 (8-inch) cake pans. Whisk together flour, baking powder, and salt in a bowl.\n" +
        "Step 2:\n" +
        "Beat butter and sugar on medium speed with an electric mixer until light and creamy, 1 to 2 minutes. Add 1 cup raspberries, and beat until smooth, 15 to 20 seconds. Add eggs, one at a time, beating until blended after each addition (mixture will look curdled). Beat in vanilla. Reduce mixer speed to low and beat in flour mixture and buttermilk alternately, beginning and ending with flour mixture, just until flour is incorporated. Mix in food coloring, if desired. Divide batter among prepared pans.\n" +
        "Step 3:\n" +
        "Bake until a wooden pick inserted in center comes out clean, 23 to 25 minutes. Cool in pans on wire racks 10 minutes, then invert onto wire racks to cool completely.\n" +
        "Step 4:\n" +
        "Make the frosting: Beat butter and cream cheese on medium speed with an electric mixer until creamy, 1 to 2 minutes. Beat in raspberries, vanilla, and salt, until raspberries are broken down, 15 to 20 seconds. Reduce mixer speed to low and gradually add confectioners’ sugar until blended and smooth after each addition, 45 seconds to 1 minute.\n" +
        "Step 5:\n" +
        "Assemble the cake: Toss together preserves and remaining 3 cups raspberries in a bowl. Place one layer on a cake plate and top with 1/2 of the preserve mixture; repeat one more time. Top with remaining cake layer. Frost top and sides of cake with frosting. Decorate with meringue kisses, edible flowers, and raspberries.\n ",


    },
    {
      id: 8,
      name: 'Prawn,Chilli and Lime Soup',
      cookTime: '10-15',
      price: 5,
      favorite: false,
      origins: ['India'],
      stars: 3,
      imageUrl: '/assets/food-14 (4).jpeg',
      tags: ['FastFood', 'Pizza', 'Lunch'],
      desc: "This Thai prawn soup is made with fragrant herbs and it is spicy too. The basic stock consists of galangal, lemon grass, lime leaves!",
      ings: "8-10 bird’s eye chillies, chopped\n" +
        "4-5 large garlic cloves, peeled\n" +
        "500ml good quality chicken stock\n" +
        "200g large sustainable king prawns, peeled, preferably tail on\n" +
        "4-5 tbsp lime juice\n" +
        "4-5 tbsp nam pla (fish sauce)\n" +
        "Handful freshly chopped coriander to garnish",
      prep: "Step 1:\n" + "Pound the chillies and garlic in a pestle and mortar to a fine paste (you can use a small food processor or Nutribullet to do this, if you like).\n" +
        "Step 2:\n" + "Bring the stock to a simmer in a medium saucepan. Add the chilli and garlic paste, then bring back to the boil. Simmer for 1-2 minutes, then add the prawns and bring back to the boil for 2-3 minutes until the prawns are pink and just cooked.\n" +
        "Step 3:\n" + "Remove the pan from the heat, then add the lime juice and fish sauce. Taste and add more of each as needed. Divide among bowls and garnish with fresh coriander to serve."


    },
    {
      id: 9,
      name: 'Peanut Butter Banana PanCake',
      cookTime: '10-15',
      price: 5,
      favorite: false,
      origins: ['Italy', 'East-China'],
      stars: 3,
      imageUrl: '/assets/food-14 (1).jpg',
      tags: ['FastFood', 'Pizza', 'Lunch'],
      desc: "A pancake (or hotcake, griddlecake, or flapjack) is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter and cooked on a hot surface such as a griddle or frying pan, often frying with oil or butter. It is a type of batter bread!",
      ings: "1 ½ cups all-purpose flour\n" +
        "2 tablespoons baking powder\n" +
        "1 tablespoon white sugar\n" +
        "½ teaspoon salt\n" +
        "1 ¼ cups milk\n" +
        "1 ripe banana, mashed\n" +
        "⅓ cup smooth peanut butter\n" +
        "1 large egg\n" +
        "1 tablespoon canola oil\n" +
        "1 teaspoon vanilla extract",
      prep: "Step 1:\n" + "Preheat a griddle over medium heat.\n" + "Step 2:\n" + "Whisk together flour, baking powder, sugar, and salt in a large bowl. Combine milk, mashed banana, peanut butter, egg, oil, and vanilla in a separate bowl; pour into flour mixture and whisk until batter is thoroughly mixed.\n" +

        "Step 3:\n" + "Ladle batter in 1/4 cup portions onto the preheated griddle and cook until tiny air bubbles form on the top, 2 to 5 minutes; flip and continue cooking until the bottoms are browned, 2 to 3 minutes. Remove pancakes to a plate and cover to keep warm. Repeat with remaining batter.",


    },
    {
      id: 10,
      name: 'Chicken Tortilla Soup',
      cookTime: '10-15',
      price: 5,
      favorite: false,
      origins: ['India'],
      stars: 3,
      imageUrl: '/assets/food-14 (3).jpg',
      tags: ['FastFood', 'Pizza', 'Lunch'],
      desc: "Chicken tortilla soup actually is an authentic Mexican dish. The traditional soup is made with chicken broth, tomatoes, garlic, onion, chiles, and fried tortilla strips. There are also variations of the soup, like ones that include beans!",
      ings: "1 tablespoon olive oil\n" + "1 medium onion, chopped\n" + "3 cloves garlic, minced\n" +
        "1 (28 ounce) can crushed tomatoes\n" +
        "1 (10.5 ounce) can condensed chicken broth\n" +
        "1 ¼ cups water\n" +
        "2 teaspoons chili powder\n" +
        "1 teaspoon dried oregano\n" +
        "1 (15 ounce) can black beans, rinsed and drained\n" +
        "2 large boneless chicken breast halves, cooked and cut into bite-sized pieces\n" +
        "1 cup whole corn kernels, cooked\n" +
        "1 cup white hominy\n" +
        "1 (4 ounce) can chopped green chile peppers\n" +
        "¼ cup chopped fresh cilantro\n" +
        "½ cup crushed tortilla chips, or to taste\n" +
        "2 medium avocados, sliced, or to taste\n" +
        "½ cup shredded Monterey Jack cheese, or to taste\n" +
        "2 tablespoons chopped green onions, or to taste",
      prep: "Step 1:\n" + "Gather all ingredients.\n" +

        "Step 2:\n" + "Overhead of tortilla soup ingredients in various bowls and measuring cups. Heat oil in a stockpot over medium heat. Add onion and garlic; saute until soft, about 5 minutes. Stir in chili powder and oregano.\n" +

        "Step 3:\n" + "Overhead of garlic and onions being cooked in a pot. Stir in crushed tomatoes, condensed broth, and water; bring to a boil. Reduce heat and simmer for 5 to 10 minutes.\n" +

        "Step 4:\n" + "Overhead of crushed tomatos and broth cooking in a large pot. Stir in black beans, cooked chicken, corn, hominy, chile peppers, and cilantro. Simmer for 10 minutes.\n" +

        "Step 5:\n" + "Overhead of black beans, cooked chicken, and corn cooking in a tomato broth in a large pot. Ladle soup into individual serving bowls, and top with crushed tortilla chips, avocado slices, Monterey Jack cheese, and green onions.",


    },
    {
      id: 11,
      name: 'Butter Milk Fried Chicken',
      cookTime: '10-15',
      price: 5,
      favorite: false,
      origins: ['India'],
      stars: 5,
      imageUrl: '/assets/food-14 (4).jpg',
      tags: ['FastFood', 'Pizza', 'Lunch'],
      desc: "Because of its slight acidity, buttermilk has the ability to tenderize the chicken, without it becoming tough and chewy. Using buttermilk also helps the chicken go nice and flaky when you dredge it through the dry mix!",
      ings: "Buttermilk Soak\n" +
        "3 cups buttermilk\n" +
        "2 tablespoons kosher salt\n" +
        "1 tablespoon freshly ground black pepper\n" +
        "2 teaspoons cayenne pepper\n" +
        "4 pounds chicken parts, including medium chicken wings, thighs, and drumsticks\n\n" +
        "Flour Dredge:\n\n" +
        "2 cups all-purpose flour\n" +
        "1 teaspoon onion powder\n" +
        "1 teaspoon garlic powder\n" +
        "1 teaspoon kosher salt\n" +
        "1 teaspoon freshly ground black pepper\n" +
        "1/2 teaspoon cayenne pepper\n" +
        "Vegetable oil, for frying",
      prep: "Step 1:\n" +
        "Gather the ingredients.\n" +
        "Step 2:\n" +
        "Make the buttermilk soak: In a large bowl, combine the buttermilk with the salt, black pepper, and cayenne.\n" +
        "Step 3:\n" +
        "Add the chicken and stir to coat. Let stand at room temperature for 2 hours or refrigerate for 4 hours.\n" +
        "Step 4:\n" +
        "In a large, resealable plastic bag, mix the flour with the onion powder, garlic powder, salt, black pepper, and cayenne; shake to combine.\n" +
        "Step 5:\n" +
        "Set a rack on a baking sheet. Working with one piece at a time, remove the chicken from the buttermilk soak, letting the excess drip back into the bowl. Dredge the chicken in the flour mixture, pressing so it adheres all over. Transfer the coated chicken to the rack and let stand for 30 minutes.\n" +
        "Step 6:\n" +
        "In a deep skillet, heat 1 inch of the oil to 350°F. Set another rack over a baking sheet lined with paper towels. Fry the chicken in batches, maintaining the oil temperature at 315°F; turn once, until golden and an instant-read thermometer inserted in the thickest part of each piece registers 160°F, 15 to 18 minutes." +
        "Step 7:\n" +
        "Transfer the chicken to the rack and let stand for 5 minutes.\n" +
        "Step 8:\n" +
        "Enjoy warm or at room temperature."


    },
    {
      id: 12,
      name: 'Lamb Kleftiko',
      cookTime: '10-15',
      price: 5,
      favorite: false,
      origins: ['Italy', 'Belgium'],
      stars: 4,
      imageUrl: '/assets/food-14 (5).jpg',
      tags: ['FastFood', 'Pizza', 'Lunch'],
      desc: "Lamb kleftiko is a rustic, traditional Greek recipe made with slow-cooked lamb that’s first marinated in garlic, olive oil and lemon juice. This traditional recipe was originally cooked in an earth oven, a simple pit in the ground, used to trap heat and smoke!",
      ings: "1 leg of lamb, 1.2-1.5 kgs (you can always use shoulder too, or both)\n"+
      "1 bulb of garlic\n"+
      "2 lemons\n"+
      "1 bunch of oregano, fresh, chopped or 1 tbs dried oregano\n"+
      "1kg floury potatoes, such as Charlotte or Estima\n"+
      "4 bay leaves\n"+
      "175ml of white wine\n"+
      "salt\n"+
      "pepper\n"+
      "olive oil",
      prep: "Step 1:\n"+"The day before cooking, take a small paring knife and make approximately 15-16 incisions into the flesh of the lamb. Smash the garlic bulb with the palm of your hand and peel the garlic gloves. Slice each clove in half and then insert each sliver into the incisions\n"+
      "Step 2:\n"+
      "Season generously with salt, pepper and oregano and place into a freezer bag. Drizzle a good amount of olive oil into the bag along with juice from one lemon and shake and rub all over. Leave overnight in the fridge\n"+
      "Step 3:\n"+
      "The next day, preheat your oven to 140°C/gas mark\n"+
      "Step 4:\n"+
      "Remove the meat from the fridge and allow it to come up to room temperature. Take a large roasting tray and line it with two lengths of strong foil, lying them over each other to create a cross. Wash the potatoes, quarter them and spread evenly on the bottom of the tray, along with the bay leaves. Place the lamb on top of the potatoes and drizzle everything with another splash of olive oil and the white wine\n"+
      "Step 5:\n"+
      "Juice and zest the second lemon and drizzle over the top of the lamb. Pull the edges of the foil together to wrap and seal, trying to leave some space above the lamb for steam to circulate\n"+
      "Step 6:\n"+
      "Place in the oven and leave to slowly braise for 5 hours, after which time the meat should be falling off the bone. Spoon a generous serving of potatoes on a plate, place the shredded lamb on top and drizzle over the tray juices. Eat with a nice Greek salad as accompaniment"


    },

    {
      id: 13,
      name: 'Pistachio Crusted Salmon',
      cookTime: '10-15',
      price: 5,
      favorite: false,
      origins: ['East-Asia'],
      stars: 5,
      imageUrl: '/assets/food-14 (7).jpeg',
      tags: ['FastFood', 'Pizza', 'Lunch'],
      desc: "Pistachio-crusted salmon is a gourmet dinner without the gourmet skills! Prepare this with a handful of ingredients in less than 20 minutes!",
      ings: "¼ cup crushed pistachios\n" +
        "2 tablespoons panko bread crumbs\n" +
        "1 tablespoon grated Parmesan cheese\n" +
        "1 tablespoon butter, melted\n" +
        "4 (6 ounce) fillets salmon with skin, center cut\n" +
        "salt and ground black pepper to taste\n" +
        "2 tablespoons olive oil\n" +
        "1 tablespoon Dijon mustard\n" +
        "4 lemon wedges",
      prep: "Step 1:\n" + "Preheat the oven to 375 degrees F (190 degrees C).\n" +
        "Step 2:\n" + "Combine pistachios, bread crumbs, Parmesan cheese, and butter in a small bowl; stir with a fork until evenly combined.\n" +
        "Step 3:\n" + "Lightly season salmon fillets with salt and pepper on both sides.\n" +
        "Step 4:\n" + "Heat olive oil in a large oven-safe skillet over medium heat. Sear salmon fillets, flesh-side down, for 2 to 3 minutes. Turn heat off and flip salmon pieces over so skin side is down.\n" +
        "Step 5:\n" + "Brush tops of salmon evenly with Dijon mustard. Top with pistachio mixture, pressing mixture down onto salmon.\n" +
        "Step 6:\n" + "Bake in the preheated oven until salmon flakes easily with a fork, 10 to 12 minutes. Serve with lemon wedges."


    },
    {
      id: 14,
      name: 'Malai Copta Paneer',
      cookTime: '10-15',
      price: 5,
      favorite: false,
      origins: ['India'],
      stars: 3,
      imageUrl: '/assets/food-14 (8).jpeg',
      tags: ['FastFood', 'Pizza', 'Lunch'],
      desc: "Malai Kofta is a delicious dish of fried balls of potato and paneer in a rich and creamy mild gravy made with sweet onions and tomatoes. This melt-in-your-mouth recipe is a labor of love, but one that is well worth it!",
      ings: "4 Large potatoes, boiled250 gms paneer (cottage cheese)50 gms maida1 tbsp Coriander Leaves, chopped3 Onions1 tbsp ginger garlic paste2 Tomatoes200 ml malai or cream2 tbsp raisins and cashew nuts50 gms cashew nuts paste1/2 tsp haldi (turmeric)1/2 tsp red chilli powder1/2 tsp kitchen king masala1 tbsp Kasturi methi (dry Fenugreek)to taste salt1 tbsp sugar",
      prep: "Refrigerate the boiled potatoes for 4 to 6 hours as this makes it easy to cook koftas.2.Mash the boiled potatoes, paneer, maida. The mix should not be too hard or too soft. Add salt, chopped coriander leaves and mix well.3.Cut the raisins and cashew nuts into very small pieces and add 1/2 tsp of sugar to the mix.4.Heat up the oil for deep frying.5.Roll out the balls from the dough you prepared and stuff the dry fruit mix in the centre.6.Fry the koftas and if they break in hot oil then dust them with dry maida before putting them in."


    },
    {
      id: 15,
      name: 'Blue Berry Pie',
      cookTime: '10-15',
      price: 5,
      favorite: false,
      origins: ['US', 'East-China', 'UK'],
      stars: 3,
      imageUrl: '/assets/food-14 (9).jpeg',
      tags: ['FastFood', 'Pizza', 'Lunch'],
      desc: "Blueberry pie is a pie with a blueberry filling. Blueberry pie is readily made because it does not require pitting or peeling of fruit. It usually has a top and bottom crust. The top crust can be circular, but the pie can also have a crumble crust or no top crust!",
      ings: "Sugar: This blueberry pie recipe starts with a cup of white sugar.\n" +
        "Cornstarch: Cornstarch thickens the blueberry pie filling, preventing runniness.\n" +
        "Cinnamon: Ground cinnamon adds subtle warmth.\n" +
        "Salt: A pinch of salt enhances the overall flavor of the blueberry pie filling, but it won't make it taste salty.\n" +
        "Blueberries: Of course, you'll need fresh blueberries! If you can't find fresh, frozen (and thawed) will work.\n" +
        "Pie crust: Use a store-bought or homemade pastry crust.\n" +
        "Butter: You'll need just a tablespoon of butter.",
      prep: "1. Sprinkle the berries with sugar, cornstarch, cinnamon, and salt.\n" +
        "2. Pour the filling into the bottom pie crust and finish with a lattice crust on top.\n" +
        "3. Bake until the filling is bubbling and the crust is golden."


    },
    {
      id: 16,
      name: 'Chilli Burger',
      cookTime: '10-15',
      price: 5,
      favorite: false,
      origins: ['Italy', 'East-China'],
      stars: 4,
      imageUrl: '/assets/food-15 (1).jpeg',
      tags: ['FastFood', 'Pizza', 'Lunch'],
      desc: "A chili burger (also known as a chili size, or simply size, stemming from 'hamburger size') is a type of hamburger.  It consists of a hamburger, with the patty topped with chili con carne.  It is often served open-faced, and sometimes the chili is served alongside the burger rather than on top. The chili may be served alone, or with cheese, onions, or occasionally tomatoes as garnishes!",
      ings: "14 1/2 Oz H‑E‑B Chili No Beans\n" +
        "1 Lb ground chuck\n" +
        "1/2 cup(s) green onions, minced\n" +
        "1 cup(s) H‑E‑B Nacho Cheese Tortilla Chips\n" +
        "8 Oz H‑E‑B Shredded Mexican Cheese\n" +
        "4 H‑E‑B Bake Shop Hamburger Buns",
      prep: "Step 1:\n" + "In a small saucepan simmer chili over low heat for 3 to 5 minutes or until hot\n" + "stirring occasionally. Set aside and keep warm.\n" +
        "Step 2:\n" + "Place ground beef and green onions in a large mixing bowl.\n" +
        "Step 3:\n" + "Using your hands, crumble nacho cheese chips over the bowl.Still using your hands, mix everything together until completely combined.Form into 4 patties and set aside.\n" +
        "Step 4:\n" + "Preheat a large non- stick pan to medium - high for 3 to 4 minutes.\n" +
        "Step 5:\n" + "Once hot, add patties and cook 3 to 4 minutes.Flip patties, cook 2 minutes then add cheese and cook an additional 2 minutes.Remove patties to a plate.\n" +
        "Step 6:\n" + "Wipe pan clean with a paper towel and reduce heat to low.Add buns and warm 2 minutes.\n" +
        "Step 7:\n" + "To assemble each burger, place patty on bottom half of bun, add 1 / 4 cup of chili then add top half of bun.Enjoy."


    },

    {
      id: 17,
      name: 'Yummy Cube Steaks',
      cookTime: '10-15',
      price: 5,
      favorite: false,
      origins: ['Italy', 'East-China'],
      stars: 5,
      imageUrl: '/assets/food-15 (2).jpeg',
      tags: ['FastFood', 'Pizza', 'Lunch'],
      desc: "This Cube Steak is a tender and juicy beef steak seared in beef broth, onion, and garlic powder, then made with the best mushroom gravy. A simple and delicious meal made in less than 30 minutes.I love to cook beef, and steak is one of my favorite ways to do that! For more simple steak recipes, try this Garlic Butter Herb Steak Bites with Potatoes, this delicious Brown Sugar Garlic Flank Steak, or these yummy Creamy Garlic Steak Bites with Mushrooms!",
      ings: "2 pounds beef cube steak\n" + "¼ cup all-purpose flour\n" +
        "1 teaspoon salt\n" +
        "¼ teaspoon pepper\n" +
        "2 tablespoons olive oil\n" +
        "1 (14.5 ounce) can canned diced tomatoes\n" +
        "1 (15 ounce) can canned tomato sauce\n" +
        "1 large onion, thinly sliced\n" +
        "1 teaspoon Italian seasoning\n" +
        "5 small zucchini, cut into 1/2 inch slices",
      prep: "Step 1:\n" + "In a large resealable plastic bag, place the cube steak, flour, salt, and pepper. Seal, and shake to coat.\n" +
        "Step 2:\n" + "Heat the olive oil in a large skillet over medium heat, and brown the cube steak. Reduce heat to low, and mix in the tomatoes, tomato sauce, onion, and Italian seasoning. Cover, and simmer at least 1 hour, stirring once.\n" +
        "Step 3:\n" + "Place the zucchini in the skillet, and coat with the tomato sauce. Continue to simmer uncovered 10 minutes, or until zucchini is tender."


    },
    {
      id: 18,
      name: 'Blackberry Cake',
      cookTime: '10-15',
      price: 5,
      favorite: false,
      origins: ['Persia', 'Middle-East-China'],
      stars: 3,
      imageUrl: '/assets/food-15 (2).jpg',
      tags: ['FastFood', 'Pizza', 'Lunch'],
      desc: "This unusual cake gets its all-natural flavor and color from an infusion of fresh blackberry purée. Whether finished with fruity whipped cream or tangy cream cheese frosting, it makes an easy summer dessert or a slightly indulgent addition to brunch!",
      ings: "Topping:\n\n ¼ cup brown sugar\n 2 tablespoons butter\n 2 cups fresh blackberries\n ¾ cup white sugar\n Cake:\n 1 cup white sugar\n ½ cup butter, softened\n 2 large eggs\n 1 ½ cups all-purpose flour\n 2 teaspoons baking powder\n ½ teaspoon salt\n ¼ cup milk",
      prep: "Step 1:\n Preheat the oven to 350 degrees F (175 degrees C). Line a baking sheet with parchment. Melt ¼ cup brown sugar and 2 tablespoons butter together in a saucepan over medium heat.\n Step 2:\n Add 2 cups fresh blackberries to the brown sugar mixture; cook and stir until the mixture bubbles, 1 to 3 minutes. Stir ¾ cup white sugar into the berries, crush the berries slightly with a fork, and continue cooking until the berries are hot and slightly broken-down, about 5 minutes more; remove from heat and pour into a 9-inch cake pan.\n Step 3:\n In a bowl, beat 1 cup white sugar and ½ cup butter together with an electric mixer until light and fluffy; beat in the eggs.Whisk 1 ½ cups all-purpose flour, 2 teaspoons baking powder, and ½ teaspoon salt together in a bowl.\n Step 4:\n Alternately stir the flour and ¼ cup milk into the butter mixture, beginning and ending with the flour mixture.\n Step 5:\n Mix vanilla into the batter. Pour the batter over the blackberry mixture in the 9-inch cake pan. Place the cake on the prepared baking sheet in case of spillage as it bakes.\n Step 6:\n Bake the cake in the preheated oven until cooked through, 35 to 40 minutes. Let the cake cool in the pan until warm but not completely cooled, about 30 minutes. Run a knife along the inside edge of the pan to separate the cake from the sides, place a cake plate over the top of the pan, and flip the pan. Lift the pan slowly to release the cake from the pan.",


    },
    {
      id: 19,
      name: 'Strawberry Delight Cake',
      cookTime: '10-15',
      price: 5,
      favorite: false,
      origins: ['India'],
      stars: 3,
      imageUrl: '/assets/food-15 (4).jpg',
      tags: ['FastFood', 'Pizza', 'Lunch'],
      desc: "Soft and tender vanilla cake filled with strawberry compote, frosted with strawberry cream, and mouth-watering strawberry jello. Adding to this luscious fest the cake is decorated with fresh and juicy strawberries!",
      ings: "1 (16.5 ounce) package strawberry cake mix\n" +
        "1 cup water\n" +
        "3 large eggs\n" +
        "⅓ cup vegetable oil\n" +
        "1 (14 ounce) can sweetened condensed milk\n" +
        "1 (16 ounce) package frozen sweetened strawberries, thawed but not drained\n" +
        "1 (12 ounce) container frozen whipped topping (such as Cool Whip®), thawed",
      prep: "Step 1:\n" +
        "Preheat the oven to 350 degrees F (175 degrees C). Grease a 9x13-inch baking dish.\n" +
        "Step 2:\n" +
        "Mix strawberry cake mix, water, eggs, and oil together in a bowl using an electric mixer on low speed. Increase speed to medium and mix batter for 2 minutes. Pour batter into the prepared baking dish.\n" +
        "Step 3:\n" +
        "Bake in the preheated oven until a toothpick inserted in the middle of the cake comes out clean, 24 to 27 minutes.\n" +
        "Step 4:\n" +
        "Poke holes all over the cake using the handle of a wooden spoon. Pour sweetened condensed milk over cake, letting it seep into the holes. Cool cake to room temperature, about 30 minutes.\n" +
        "Step 5:\n" +
        "Pour thawed strawberries over cake, letting juices seep into the holes. Cover cake with whipped topping. Refrigerate.",


    },
    {
      id: 20,
      name: 'Chilli Garlic Prawn Noodles',
      cookTime: '10-15',
      price: 5,
      favorite: false,
      origins: ['German', 'Middle-East-China'],
      stars: 2,
      imageUrl: '/assets/food-15 (5).jpg',
      tags: ['FastFood', 'Pizza', 'Lunch'],
      desc: "This trending garlic chili oil noodles is one of the most requested recipes and is extremely delicious! If you are craving spicy Chinese noodles and got 10 minutes to prepare this is the right recipe for you. This dish is vegan and vegetarian friendly and no special ingredients or equipment is needed!",
      ings: "2Red chilli flakes 1 teaspoon\n" +
        "Garlic chopped 4 teaspoons\n" +
        "Prawns (medium) shelled and deveined 8-12\n" +
        "Egg noodles boiled 1 cup\n" +
        "Salt to taste\n" +
        "Oil 3 teaspoons\n" +
        "Celery finely chopped 1 teaspoon\n" +
        "Soy sauce 1 teaspoon\n" +
        "Red chilli sauce 1 1/2 teaspoons\n" +
        "Black pepper powder 1 teaspoon\n" +
        "Vinegar 1 teaspoon\n" +
        "Spring onion greens chopped 2 stalks",
      prep: "Step 1:\n" +
        "Take prawns in a bowl. Add 1 teaspoon garlic, chilli flakes, salt and mix well.\n" +
        "Step 2:\n" +
        "Heat 1 teaspoon oil in a non-stick pan. Add prawns and sauté on high heat till they are ¾th done. Remove from heat.\n" +
        "Step 3:\n" +
        "Heat the remaining oil in a non-stick wok. Add green chillies and sauté. Add the remaining garlic and sauté till it turns light brown.\n" +
        "Step 4:\n" +
        "Add celery, mix well and sauté well. Add noodles and toss. Add soy sauce, chilli sauce, salt, black pepper powder and mix well.\n" +
        "Step 5:\n" +
        "Add prawns and toss on high heat. Add some of the spring onion greens and toss.\n" +
        "Step 6:\n" +
        "Add vinegar and toss to mix. Switch off the heat.\n" +
        "Step 7:\n" +
        "Serve hot garnished with remaining chopped spring onion greens.",


    },
    {
      id: 21,
      name: 'Beef and Rice Noodle Soup',
      cookTime: '10-15',
      price: 5,
      favorite: false,
      origins: ['Asia-East'],
      stars: 5,
      imageUrl: '/assets/food-15 (6).jpg',
      tags: ['FastFood', 'Pizza', 'Lunch'],
      desc: "Beef noodle soup is a noodle soup made of stewed or braised beef, beef broth, vegetables and noodles. It exists in various forms throughout East and Southeast Asia.!",
      ings: "1 teaspoon oil, or as needed\n" + "6 ounces round steak, thinly sliced\n" + "1 teaspoon onion powder\n" + "1 teaspoon garlic powder\n" + "¼ cup onion, chopped\n" + "1 (32 fluid ounce) container beef broth\n" + "¼ cup brown sugar\n" + "2 tablespoons soy sauce\n" + "1 teaspoon ground ginger\n" +
        "1 teaspoon sriracha hot sauce, or more to taste\n" + "1 (8 ounce) package thin rice noodles, broken into pieces\n" + "1 cup diced carrots\n" + "1 cup sliced cabbage\n" + "½ green bell pepper, sliced\n" +
        "½ red bell pepper, sliced\n" + "½ cup diced celery",
      prep: "Step 1:\n" + "Heat oil in a stock pot over medium heat and cook and stir steak until it begins to brown, about 2 minutes; season with onion powder and garlic powder. Stir chopped onion into steak mixture; cook and stir until onion is translucent, about 3 minutes.\n" +
        "Step 2:\n" + "Stir beef broth, brown sugar, soy sauce, ginger, and sriracha sauce into beef mixture; bring to a rolling boil. Reduce mixture to a simmer, and stir in rice noodles, carrots, cabbage, green bell pepper, red bell pepper, and celery; cover and simmer on low, stirring occasionally, until rice noodles are tender, about 8 minutes.",


    },
    {
      id: 22,
      name: 'Delaware Blue Crab Boil',
      cookTime: '10-15',
      price: 5,
      favorite: false,
      origins: ['Asia-East'],
      stars: 4,
      imageUrl: '/assets/food-15 (7).jpg',
      tags: ['FastFood', 'Pizza', 'Lunch'],
      desc: "Crab is one of the best possible dietary sources of protein available. It contains almost as much protein per 100 grams as meats without anywhere near the same levels of saturated fat, which is linked to an increased risk of heart disease.!",
      ings: "2 tablespoons dill seed\n" +
        "2 tablespoons mustard seed\n" +
        "2 tablespoons cumin seed\n" +
        "2 tablespoons chili powder\n" +
        "2 tablespoons paprika\n" +
        "1 tablespoon red pepper flakes\n" +
        "2 sprigs rosemary\n" +
        "10 sprigs thyme\n" +
        "3 sprigs dill\n" +
        "2 sprigs sage\n" +
        "½ bunch parsley\n" +
        "30 live, hard-shell blue crabs",
      prep: "Step 1:\n" + "Crush dill seed, mustard, and cumin in a spice grinder or with a mortar and pestle. Pour the spices into a 5 gallon stockpot; add chili powder, paprika, red pepper flakes, rosemary, thyme, dill, sage, and parsley. Fill the pot 3/4 full with water, and bring to a rolling boil over an intense flame.\n" + "Step 2:\n" + "Add blue crabs, cover the pot, and boil until all of the shells turn red, and the meat is no longer translucent, about 20 minutes. Stir the crabs occasionally as they boil to ensure even cooking.",
    },
    {
      id: 23,
      name: 'Mexican Rice with Bell Pepper',
      cookTime: '10-15',
      price: 5,
      favorite: false,
      origins: ['Asia-East'],
      stars: 4,
      imageUrl: '/assets/food-17 (1).jpg',
      tags: ['FastFood', 'Pizza', 'Lunch'],
      desc: "Complexity and Variation. Mexican cuisine is also noteworthy because of the cuisine's subtle complexity. Chili peppers bring spice and heat that lights up the mouth. Both corn and wheat tortillas provide an easy way to wrap proteins, fill them with lots of types of beans and other ingredients and bring them anywhere!",
      ings: "1 tablespoon vegetable oil\n" +
        "1 cup long grain white rice\n" +
        "1 ½ cups chicken broth\n" +
        "1 tomato, seeded and chopped\n" +
        "½ onion, finely chopped\n" +
        "½ green bell pepper, finely chopped\n" +
        "1 fresh jalapeno pepper, chopped\n" +
        "½ cup chopped fresh cilantro\n" +
        "1 cube chicken bouillon\n" +
        "1 clove garlic, halved\n" +
        "½ teaspoon ground cumin\n" +
        "salt and pepper to taste",
      prep: "Step 1:\n" + "Heat oil in a medium saucepan over medium heat. Add rice; cook and stir for 3 minutes. Pour in chicken broth and bring to a boil.\n" +

        "Step 2:\n" + "Stir in tomato, onion, bell pepper, and jalapeño. Add cilantro, bouillon, garlic, cumin, salt, and pepper; bring to a boil. Cover, reduce the heat to low, and simmer until rice is tender and all liquid has been absorbed, about 20 minutes.",


    },
    {
      id: 24,
      name: "Grandma's Strawberry Milkshake",
      cookTime: '10-15',
      price: 5,
      favorite: false,
      origins: ['Persia'],
      stars: 2,
      imageUrl: '/assets/food-17 (2).jpg',
      tags: ['FastFood', 'Pizza', 'Lunch'],
      desc: "Strawberry milkshakes are one of the most classic and nutritious drinks of all time. It has been a favorite of all of us and we cannot deny that. It is best to have strawberry in the form of milkshakes and juices because it contains Vitamin C and is a high source of potassium and magnesium!",
      ings: "4 ounces strawberries, hulled\n" +
        "1 cup milk\n" +
        "1 tablespoon honey\n" +
        "6 cubes ice",
      prep: "In a blender, combine ice cubes, strawberries, milk and honey. Blend until smooth. Pour into glass and enjoy!",


    },
    {
      id: 25,
      name: 'Flourless Fruit Cake',
      cookTime: '10-15',
      price: 5,
      favorite: false,
      origins: ['India'],
      stars: 3,
      imageUrl: '/assets/food-17 (3).jpg',
      tags: ['FastFood', 'Pizza', 'Lunch'],
      desc: "Our world-famous fruitcake now has a gluten-free alternative. Made with crunchy pecans, hand-picked pineapples, and all-natural honey, our Gluten-Free Fruitcake has good stuff baked right inside. Presliced for your snacking convenience, now is your chance to savor the flavor of our Bakery's most popular dessert, minus that pesky gluten!",
      ings: "¾ cup white sugar\n" +
        "½ cup water\n" +
        "¼ teaspoon salt\n" +
        "18 (1 ounce) squares bittersweet chocolate\n" +
        "1 cup unsalted butter\n" +
        "6 eggs",
      prep: "Step 1:\n" + "Preheat the oven to 300 degrees F (150 degrees C). Grease a 10-inch round cake pan; set aside.\n" + "Step 2:\n" + "Combine sugar, water, and salt in a small saucepan over medium heat. Stir until completely dissolved; set aside.\n" +

        "Step 3:\n" + "Melt bittersweet chocolate in a microwave-safe glass or ceramic bowl in 15-second intervals, stirring after each interval, 1 to 3 minutes. Pour chocolate into the bowl of an electric mixer.\n" +

        "Step 4:\n" + "Cut butter into pieces; beat butter, one piece at a time, into chocolate until combined. Beat in hot sugar water. Slowly beat in eggs, one at a time.\n" +

        "Step 5:\n" + "Pour batter into the prepared cake pan. Have a pan larger than the cake pan ready; put the cake pan in the larger pan and fill the larger pan with boiling water halfway up the sides of the cake pan.\n" +

        "Step 6:\n" + "Bake cake in the water bath in the preheated oven for 45 minutes. The center will still look wet. Place cake in the refrigerator until thoroughly chilled, 8 hours to overnight.\n" +

        "Step 7:\n" + "To unmold, dip the bottom of the cake pan in hot water for 10 seconds and invert onto a serving plate."


    },
  ]


  constructor() { }
}
