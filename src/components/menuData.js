const menuData = {
    "Breakfast": {
      "Eggs": {
        description: "",
        left: [
          { name: "Two Eggs, Any Style", price: "$5.25", description: ""},
          { name: "One Egg, Any Style", price: "$4.79", description: "", additions: [{ name: "Each Additional Egg", price: "+ $1.49" },{ name: "Egg Whites", price: "+ $.49" },{ name: "Substitute Fruit Cup Instead of Home Fries/Hashbrowns", price: "+ $2.99" }] },
          { name: "French Connection", price: "$7.49", description: "Two scrambled eggs and american cheese served on a grilled grilled crossant with homefies or shredded hashbrowns" }
        ],
        right: [
          { name: "Special #1", price: "$11.99", description: "Two eggs, with your choice of ham, bacon or sausage and your choice of two pancakes, two french toast or a Belgian waffle with homefries or shredded hashbrowns and toast" },
          { name: "Special #2", price: "$12.49", description: "Two eggs, with shaved steak and your choice of two pancakes, two french toast or a Belgian waffle with homefries or shredded hashbrowns and toast" }
        ]
      },
      "Starters": {
        description: "",
        items: [
          { name: "Muffin", price: "$3.25", description: "" },
          { name: "Fruit Cup", price: "$5.25", description: "" },
          { name: "Fruit Bowl", price: "$6.25", description: "" },
          { name: "Oatmeal Cup", price: "$2.50", description: "" },
          { name: "Oatmeal Bowl", price: "$3.50", description: "" },

        ]
      },
      "Overstuffed Omelettes": {
        description: "served with homefries or shredded hasbrowns and toast",
        items: [
          { name: "Plain Omelette", price: "$6.49", description: "",additions: [{ name: "Add your choice of three - American, Swiss, or Cheddar Cheese, Broccoli, Spinach, Tomato, Peppers, Onions, or Mushrooms", price: "$9.99" }]},
          { name: "Cheese Omelette", price: "$8.49", description: "American, Swiss, Cheddar or Feta Cheese",additions: [{name:"Add Ham, Bacon or Sausage",price: "+ $1.50" }, {name:"Add Italian Sausage or Canadian Bacon", price: "+ $1.79"}] },
          { name: "Western Omelette", price: "$10.49", description: "Ham, Peppers, Onion & Cheese" },
          { name: "Nick's Omelette", price: "$9.79", description: "Corned Beef Hash & Cheese" },
          { name: "Ligi's Omelette", price: "$11.99", description: "Ham, Bacon, Sausage & Cheese" },
          { name: "Philly Steak Omelette", price: "$10.99", description: "Steak, Mushrooms, Peppers, Onions & Cheese" },
          { name: "Cheese Omelette", price: "$8.99", description: "Broccoli or Spinach" },
          { name: "Pastrami and Swiss Cheese Omelette", price: "$10.49", description: "" },
          { name: "Italian Omelette", price: "$10.49", description: "Italian Sausage, Peppers, Onion & Mozzarella Cheese" },
          { name: "Florentine Omelette", price: "$10.25", description: "Spinach, Mushroom, Onion & American Cheese" },
          { name: "Chili Cheddar Cheese Omelette", price: "$9.99", description: "Housemade Chili and Cheddar Cheese" }
        ]
      },
      "Sandwiches": {
        description: "Two egg sandwich served on your choice of a hard roll, Portuguese roll or wrap",
        items: [
          { name: "Egg Sandwich", price: "$4.49", description: "" },
          { name: "Egg and Cheese Sandwich", price: "$4.99", description: "",additions: [{name:"Add Ham, Bacon or Sausage Patty",price: "+ $1.00" }, {name:"Add Pastrami, Italian Sausage or Canadian Bacon", price: "+ $1.30"}, {name:"Add Shaved Steak", price:"+ $1.80"}] },
          { name: "Western Sandwich", price: "$6.99", description: "Ham, Peppers, Onion & Cheese" },
          { name: "Scarmbled Egg Wrap", price: "$9.49", description: " Served With Homefries or Shredded Hasbrowns, your choice of three veggies and cheese", additions: [{name:"Add Ham, Bacon, or Sausage", price:"+ $1.50 "}] },
        ]
      },
      "French Toast": {
        description: "Add blueberries or strawberries + 1.99",
        items: [
          { name: "Texas Style French Toast", price: "$4.79", description: "Two slices, served with syrup and butter", additions: [{ name: "Three Slices", price: "+ $1.00" }] },
          { name: "French Toast and Eggs", price: "$7.25", description: "Two slices of Texas French Toast served with two eggs"},
          { name: "Cinnamon Raisin French Toast", price: "$5.29", description: "Two slices, served with syrup and butter", additions: [{ name: "Three Slices", price: "+ $.50" }] },
          { name: "Cinnamon Raisin French Toast and Eggs", price: "$7.49", description: "Two slices, with two eggs" },
        ]
      },
      "Pancakes": {
        description: "Add blueberries or strawberries + 1.99",
        items: [
          { name: "Pancakes", price: "$4.79", description: "Two pancakes, served with syrup and butter", additions: [{ name: "Three pancakes", price: "+ $1.00" }] },
          { name: "Pancakes and Eggs", price: "$7.25", description: "Two pancakes served with two eggs"},
          { name: "Chocolate Chip Pancakes", price: "$5.79", description: "Two pancakes, served with syrup and butter", additions: [{ name: "Three pancakes", price: "+ $1.00" }] },
        ]
      },
      "Belgian Waffles": {
        description: "Add blueberries or strawberries + 1.99",
        items: [
          { name: "Belgian Waffle", price: "$5.79", description: "Served with syrup and butter" },
          { name: "Belgian Waffle With Egg and Bacon", price: "$9.25", description: "Served with one egg and two slices of bacon" },
          { name: "Belgian Waffle With Ice Cream and Whipped Cream", price: "$7.79", description: "One scoop of vanilla or chocolate" },
        ]
      },
      "Sides": {
        description: "",
        left: [
          { name: "Ham, Bacon, Sausage Links or Patties", price: "$4.59", description: ""},
          { name: "Canadian Bacon", price: "$4.69", description: ""},
          { name: "Italian Sausage", price: "$4.89", description: ""},
          { name: "Corned Beef Hash", price: "$4.99", description: ""},
          { name: "Shaved Steak", price: "$5.99", description: ""},
          { name: "Home Fries or Shredded Hash Brown", price: "$2.99", description: ""},
          { name: "Toast", price: "$1.59", description: "wheat, white or rye"},
        ],
        right: [
          { name: "Gluten Free Toast", price: "$3.99", description: "" },
          { name: "Italian Toast", price: "$1.69", description: "" },
          { name: "12 Grain Toast", price: "$1.89", description: "" },
          { name: "Cinnamon Raisin Toast", price: "$1.89", description: "" },
          { name: "Portuguese, Ciabatta or Hard Roll", price: "$1.99", description: "" },
          { name: "Croissant", price: "$2.99", description: "" },
          { name: "English Muffin", price: "$1.59", description: "" },
          { name: "Bagel with Cream Cheese", price: "$3.50", description: "" },
        ]
      },
      "Kid's Menu": {
        description: "Served with choice of small juice or milk",
        items: [
          { name: "Two Pancakes", price: "$6.50", description: "" },
          { name: "Two Chocolate Chip Pancakes", price: "$7.49", description: "" },
          { name: "Two French Toast", price: "$6.50", description: "" },
        ]
      }
    },
    "Lunch": {
      "": {
            description: "",
            left: [
                { title: "Appetizers", subtitle: "" },
                { name: "Fried Mozzarella Sticks", price: "$6.99", description: "served with marinara sauce"},
                { name: "Chicken Nuggets", price: "(6) $4.49 (10) $6.99", description: ""},
                { name: "Chicken Fingers", price: "(4) $7.49", description: ""},
                { name: "Cheese Fries with Bacon Bits", price: "$6.99", description: "Served with sour cream"},
                { name: "Fried Dough", price: "$4.75", description: ""},
                { name: "Chili Supreme", price: "$5.99", description: "Homemade chili topped with cheddar cheese"},
                { name: "Chili Cheese Fries", price: "$6.99", description: "Served with sour cream"},
            ],
            right: [
                { title: "Soups", subtitle: "" },
                { name: "Chili", price: "(Cup) $4.49 (Bowl) 4.99", description: "" },
                { name: "New England Clam Chowder", price: "(Cup) $3.99 (Bowl) $4.49", description: "" },
                { name: "Soup Of The Day", price: "(Cup) $3.25 (Bowl) $3.99", description: "" }
            ]
            },
      "Salads": {
        description: "",
        items: [
          { name: "House Salad", price: "$4.75", description: "", additions: [{name:"Add turkey, ham, grilled chicken or tuna", price:"+ $3.75"}] },
          { name: "Chef’s Salad", price: "$9.25", description: "Ham, Turkey, Swiss Cheese & Egg" },
          { name: "Grilled Chicken Salad", price: "$9.59", description: "Marinated Grilled Chicken Breast With Swiss Cheese" },
          { name: "Caesar Salad", price: "$6.29", description: "Romaine Lettuce, Grated Parmesan Cheese & Croutons",additions: [{name:"Add Chicken", price:"+ $2.50"}] },
          { name: "Taco Salad", price: "$8.99", description: "Tossed Salad in a Crispy Taco Shell Topped with Chili, Cheddar Cheese and Sour Cream" },
          { name: "Rancher Salad", price: "$10.49", description: "Tossed Salad in a Crispy Taco Shell Topped with Grilled Chicken, Cheddar Cheese & Ranch" },
          { name: "Black Forest Salad", price: "$9.25", description: "Tossed Salad in a Crispy Taco Shell Topped with Ham, Mozzarella Cheese, Red Peppers & Honey Mustard Dressing" },
          { name: "California Salad", price: "$9.99", description: "Tossed Salad in a Crispy Taco Shell Topped with Grilled Chicken, Red Peppers & Thousand Island Dressing" },
        ]
      },
      "Blue Plate Specials": {
        description: "",
        items: [
            { name: "Roasted Turkey", price: "$8.99", description: "Thinly Slice Turkey Served with Potatoes, Vegetables & Gravy" },
            { name: "Roast Beef", price: "$9.29", description: "Thinly Slice Roast Beef Served with Potatoes, Vegetables & Brown Gravy" },
            { name: "Chicken Fingers", price: "$9.49", description: "Served with French Fries and Cole Slaw" },
            { name: "Hot Open Roast Beef", price: "$8.49", description: "Sliced Roast Beef on White Bread, Brown Gravy & Mashed Potatoes" },
            { name: "Hot Open Turkey", price: "$7.99", description: "Sliced Turkey on White Bread, Brown Gravy & Mashed Potatoes" },
            { name: "Pasta", price: "$6.75", description: "Spaghetti or Penne, served with Sauce",additions: [{name:"Add Meatballs or Italian Sausage", price:"+ $2.00"}] },
            { name: "Chicken Parmesan with Pasta", price: "$9.99", description: "" },
        ]
      },
      " ": {
        description: "",
        left: [
            { title: "Lite Platters", subtitle: "" },
            { name: "Burger Delight", price: "$8.99", description: "4 oz. Ground beef served with a house salad or cole slaw and cottage cheese"},
            { name: "Tuna Delight", price: "$8.49", description: "A scoop of tuna served with a house salad or cole slaw and cottage cheese"},
        ],
        right: [
            { title: "Fried Seafood Platters", subtitle: "Fresh From Tony's Seafood" },
            { name: "Fish'N'Chips", price: "$18.99", description: "" },
            { name: "Clam Strips", price: "$16.99", description: "" },
            { name: "Clam Roll", price: "$14.99", description: "" },
            { name: "Fried Shrimp", price: "$13.79", description: "" },
            { name: "Fish Sandwich", price: "$14.99", description: "" },
            { name: "Fried Shrimp Roll", price: "$12.79", description: "" },
        ]
        },
        "Sandwiches & Grinders": {
            description: "Make it a platter with fries and coleslaw + 3.50",
            items: [
                { name: "Sweet Italian Sausage", price: "$7.49", description: "Grilled Italian Sausage with Grilled Peppers and Onions" },
                { name: "Philly Cheese Steak", price: "$7.99", description: "Served with Grilled Peppers, Onions and Cheddar Cheese" },
                { name: "Crispy Chicken", price: "$7.29", description: "Served with Lettuce, Tomato and Cheese" },
                { name: "Grilled Chicken", price: "$7.29", description: "Marinated Grilled Chicken severed with Lettuce and Tomato" },
                { name: "Cajun Chicken", price: "$7.59", description: "Marinated Grilled Chicken severed with Grilled Peppers and Onions" },
                { name: "Chicken Parmessan", price: "$7.99", description: "" },
                { name: "Meatball Parmessan", price: "$6.79", description: "" },
                { name: "Meatball, Sausage Pepper And Cheese", price: "$8.99", description: "" },
                { name: "Pepper and Egg", price: "$5.25", description: "" },
                { name: "Bacon, Lettuce, Tomato", price: "$5.79", description: "" },
                { name: "Tuna Salad", price: "$5.49", description: "Served with Lettuce and Tomato, Add Cheese + $.50" },
                { name: "Ham & Cheese", price: "$6.25", description: "Served with Lettuce and Tomato" },
                { name: "Turkey & Cheese", price: "$7.25", description: "Served with Lettuce and Tomato" },
                { name: "Roast Beef & Cheese", price: "$7.99", description: "Served with Lettuce and Tomato" },
                { name: "Shaved Steak & Cheese", price: "$7.79", description: "Served with Lettuce and Tomato" },
                { name: "Ham, Turkey & Cheese", price: "$7.99", description: "Served with Lettuce and Tomato" },
                { name: "American Combo", price: "$10.99", description: "Served with Ham, Turkey, Roast Beef, Cheese, Lettuce and Tomato" },
            ]
        },
        "Hot Dogs and Hamburgers": {
            description: "Make it a platter with fries and coleslaw + 3.50",
            left: [
                { title: "Foot Long Hot Dogs", subtitle: "" },
                { name: "All American Foot Long Hot Dog", price: "$4.29", description: "",additions: [{name:"Add Cheese",price: "+ $.50" }, {name:"Add Chili", price: "+ $1.00"}, {name:"Add Chili & Cheese", price:"+ $1.50"},{name:"Add Bacon & Cheese", price:"+ $2.00"}] },
                { name: "Italian Dog", price: "$4.99", description: "Grilled Peppers & Onions" },
                { name: "Swiss Dog", price: "$4.99", description: "Swiss Cheese & Mushrooms" },
                { name: "Irish Dog", price: "$7.99", description: "Pastrami & Saurkraut" },
            ],
            right: [
                { title: "Hamburgers", subtitle: "Served on a Ciabatta Roll with Lettuce and Tomato" },
                { name: "Black Angus", price: "$5.99", description: "Add Cheese + $.25" },
                { name: "Jimmy's Burger", price: "$5.75", description: "Add Cheese + $.25" },
                { name: "Bacon Cheeseburger", price: "$6.75", description: "" },
                { name: "Cajun Burger", price: "$5.99", description: "" },
                { name: "Double Hamburger", price: "$8.25", description: "" },
                { name: "Double Cheeseburger", price: "$8.99", description: "" },
                { name: "Double Bacon Cheeseburger", price: "$9.99", description: "" },
            ]
        },
        "Club Sandwiches": {
            description: "Served with fries and coleslaw with lettuce, tomato and bacon on your choice of wheat,white or rye bread",
            items: [
                { name: "Tuna Salad", price: "$9.49", description: "" },
                { name: "B.L.T", price: "$9.75", description: "" },
                { name: "Hamburger", price: "$9.75", description: "Add Cheese + $.50" },
                { name: "Turkey", price: "$9.99", description: "" },
                { name: "Ham & Cheese", price: "$8.99", description: "" },
                { name: "Roast Beef", price: "$10.25", description: "" },
                { name: "Grilled Chicken", price: "$9.59", description: "" },
                { name: "Turkey & Ham", price: "$10.99", description: "" },
                { name: "Steak & Cheese", price: "$11.49", description: "" },
            ]
        },
        "Melts": {
            description: "Make it a platter with Fries and Coleslaw + 3.50",
            items: [
                { name: "Grilled Cheese", price: "$4.25", description: "Choice of American, Swiss or Cheddar" },
                { name: "Tuna", price: "$5.99", description: "" },
                { name: "Grilled Reuben", price: "$6.99", description: "Grilled Corned Beef, Swiss Cheese, Thousand Island and Sauerkraut on Rye" },
                { name: "Roast Beef & Cheddar", price: "$7.99", description: "Served with Horseradish Sauce" },
                { name: "Monte Cristo", price: "$6.79", description: "Ham and Swiss Cheese on Texas Toast" },
                { name: "Pastrami & Swiss", price: "$7.25", description: "Served with Grilled Onions" },
                { name: "Pilgrim Melt", price: "$7.49", description: "Turkey, Swiss Cheese & Cranberry Sauce" },
                { name: "Patty Melt", price: "$6.99", description: "Hamburger on Rye with Grilled Onions & Swiss Cheese" },
            ]
        },
        "Wraps": {
            description: "Served with Fries and Coleslaw",
            items: [
                { name: "Cajun Chicken", price: "$9.99", description: "Marinated Grilled Chicken severed with Grilled Peppers and Onions" },
                { name: "Crispy Chicken", price: "$9.29", description: "Fried Chicken Strips with Lettuce, Tomato & Honey Mustard Dressing" },
                { name: "Buffalo Chicken", price: "$9.79", description: "Fried Boneless Buffalo Chicken with Lettuce, Tomato and Blue Cheese" },
                { name: "Caesar Chicken", price: "$9.59", description: "Grilled Chicken with Lettuce and Caesar Dressing" },
                { name: "Turkey B.L.T", price: "$9.99", description: "Cheese, Bacon, Lettuce and Tomato" },
                { name: "Turkey & Cheddar Cheese", price: "$9.59", description: "Lettuce Tomato and Honey Mustard Dressing" },
                { name: "Philly Cheese Steak", price: "$10.99", description: "Grilled Shaved Steak with Cheddar Cheese, Grilled Peppers and Onions" },
            ]
        },
        "  ": {
            description: "",
            left: [
                { title: "Sides", subtitle: "" },
                { name: "French Fries", price: "$3.59", description: "" },
                { name: "Curley Fries", price: "$3.79", description: "" },
                { name: "Onion Rings", price: "$4.79", description: "" },
                { name: "Mashed Potatoes with Gravy", price: "$3.79", description: "" },
                { name: "Vegetable of the Day", price: "$2.59", description: "" },
                { name: "Cottage Cheese", price: "$1.99", description: "" },
                { name: "Coleslaw", price: "$1.99", description: "" },
                { name: "Chili", price: "$2.99", description: "" },
            ],
            right: [
                { title: "Kids Menu", subtitle: "Includes French Fries and a Small Drink 6.99" },
                { name: "Cheeseburger", price: "", description: "" },
                { name: "Chicken Fingers", price: "", description: "" },
                { name: "Chicken Nuggets", price: "", description: "" },
                { name: "Hamburger", price: "", description: "" },
                { name: "Foot Long Hot Dog", price: "", description: "" },
                { name: "Grilled Cheese", price: "", description: "" },
                { name: "Pasta & Meatballs", price: "", description: "" },
                { name: "Fried Dough", price: "", description: "" },
            ]
        },
        "   ": {
            description: "",
            left: [
                { title: "Ice Cream", subtitle: "Vanilla, Chocolate or Strawberry" },
                { name: "One Scoop", price: "$1.99", description: "" },
                { name: "Two Scoops", price: "$3.99", description: "", additions: [{name:"Add Whipped Cream", price:"+ $1.99"}]},
            ],
            right: [
                { title: "Milkshakes", subtitle: "One Size" },
                { name: "Chocolate, Vanilla or Strawberry", price: "$5.99", description: "" },
                { name: "Root Beer Float", price: "$6.99", description: "" },
                { name: "Black Cow", price: "$6.99", description: "Chocolate Ice Cream & Coke" },
            ]
        },
        "Additions": {
            description: "1.00",
            left: [
                { title: "", subtitle: "" },
                { name: "Feta Cheese", price: "", description: ""},
                { name: "Mozzarella Cheese", price: "", description: "" },
                { name: "Lettuce", price: "", description: "" },
                { name: "Honey", price: "", description: "" },
                { name: "Salsa", price: "", description: "" },
                { name: "Salad Dressing", price: "", description: "" },
                { name: "Chili", price: "", description: "" },
            ],
            right: [
                { title: "", subtitle: "" },
                { name: "Cheese (American, Cheddar, Swiss)", price: "", description: "" },
                { name: "Grilled Peppers", price: "", description: "" },
                { name: "Tomato", price: "", description: "" },
                { name: "Roasted Red Peppers", price: "", description: "" },
                { name: "Sour Cream", price: "", description: "" },
                { name: "Grilled Onions", price: "", description: "" },
                { name: "Peanut Butter", price: "", description: "" },
            ]
        },
        "Beverages": {
            description: "",
            left: [
                { title: "", subtitle: "" },
                { name: "Coffee/Tea", price: "$2.59", description: ""},
                { name: "16 oz. Ice Coffee", price: "$2.79", description: "" },
                { name: "Fountain Drinks", price: "$3.25", description: "Coke products, Unsweetened iced tea, Lemonade" },
                { name: "Juice", price: "(S) $1.99 (L) $2.50", description: "Orange, Apple, Tomato, Cranberry, Grapefruit" },
            ],
            right: [
                { title: "", subtitle: "" },
                { name: "Herbal Teas", price: "$3.25", description: "Ask for selection" },
                { name: "Hot Chocolate with Whipped Cream", price: "$2.50", description: "" },
                { name: "Milk", price: "(S) $2.50 (L) $2.75", description: "" },
                { name: "Chocolate Milk", price: "(S) $2.75 (L) $2.99", description: "" },
            ]
        },
    }
  };
  
  export default menuData;
  