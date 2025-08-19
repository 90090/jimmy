const menuData = {
    "Breakfast": {
      "Eggs": {
        "description": "",
        "left": [
          { "name": "Two Eggs, Any Style", "price": "$5.99", "description": "" },
          { "name": "One Egg, Any Style", "price": "$4.79", "description": "", "additions": [
            { "name": "Each Additional Egg", "price": "+ $1.49" },
            { "name": "Egg Whites", "price": "+ $0.99" },
            { "name": "Substitute Fruit Cup Instead of Home Fries/Hashbrowns", "price": "+ $2.99" }
          ]},
          { "name": "French Connection", "price": "$7.99", "description": "Two scrambled eggs and american cheese served on a grilled grilled crossant with homefies or shredded hashbrowns" }
        ],
        "right": [
          { "name": "Special #1", "price": "$13.49", "description": "Two eggs, with your choice of ham, bacon or sausage and your choice of two pancakes, two french toast or a Belgian waffle with homefries or shredded hashbrowns and toast" },
          { "name": "Special #2", "price": "$14.49", "description": "Two eggs, with shaved steak and your choice of two pancakes, two french toast or a Belgian waffle with homefries or shredded hashbrowns and toast" }
        ]
      },
      "Starters": {
        "description": "",
        "items": [
          { "name": "Muffin", "price": "$3.25", "description": "" },
          { "name": "Fruit Cup", "price": "$5.25", "description": "" },
          { "name": "Fruit Bowl", "price": "$6.75", "description": "" },
          { "name": "Oatmeal Cup", "price": "$2.50", "description": "" },
          { "name": "Oatmeal Bowl", "price": "$3.50", "description": "" }
        ]
      },
      "Overstuffed Omelettes": {
        "description": "served with homefries or shredded hasbrowns and toast",
        "items": [
          { "name": "Plain Omelette", "price": "$7.99", "description": "", "additions": [
            { "name": "Add your choice of three - American, Swiss, or Cheddar Cheese, Broccoli, Spinach, Tomato, Peppers, Onions, or Mushrooms", "price": "$10.99" }
          ]},
          { "name": "Cheese Omelette", "price": "$8.79", "description": "American, Swiss, Cheddar or Feta Cheese", "additions": [
            { "name": "Add Ham, Bacon or Sausage", "price": "+ $1.70" },
            { "name": "Add Italian Sausage or Canadian Bacon", "price": "+ $2.00" }
          ]},
          { "name": "Western Omelette", "price": "$10.99", "description": "Ham, Peppers, Onion & Cheese" },
          { "name": "Nick's Omelette", "price": "$10.79", "description": "Corned Beef Hash & Cheese" },
          { "name": "Ligi's Omelette", "price": "$11.99", "description": "Ham, Bacon, Sausage & Cheese" },
          { "name": "Philly Steak Omelette", "price": "$12.49", "description": "Steak, Mushrooms, Peppers, Onions & Cheese" },
          { "name": "Cheese Omelette", "price": "$9.49", "description": "Broccoli or Spinach" },
          { "name": "Pastrami and Swiss Cheese Omelette", "price": "$10.59", "description": "" },
          { "name": "Italian Omelette", "price": "$12.99", "description": "Italian Sausage, Peppers, Onion & Mozzarella Cheese" },
          { "name": "Florentine Omelette", "price": "$10.75", "description": "Spinach, Mushroom, Onion & American Cheese" },
          { "name": "Chili Cheddar Cheese Omelette", "price": "$10.89", "description": "Housemade Chili and Cheddar Cheese" }
        ]
      },
      "Sandwiches": {
        "description": "Two egg sandwich served on your choice of a hard roll, Portuguese roll or wrap",
        "items": [
          { "name": "Egg Sandwich", "price": "$4.89", "description": "" },
          { "name": "Egg and Cheese Sandwich", "price": "$5.79", "description": "", "additions": [
            { "name": "Add Ham, Bacon or Sausage Patty", "price": "+ $1.00" },
            { "name": "Add Pastrami, Italian Sausage or Canadian Bacon", "price": "+ $2.00" },
            { "name": "Add Shaved Steak", "price": "+ $2.10" }
          ]},
          { "name": "Western Sandwich", "price": "$7.79", "description": "Ham, Peppers, Onion & Cheese" },
          { "name": "Scarmbled Egg Wrap", "price": "$9.99", "description": " Served With Homefries or Shredded Hasbrowns, your choice of three veggies and cheese", "additions": [
            { "name": "Add Ham, Bacon, or Sausage", "price": "+ $1.00" }
          ]}
        ]
      },
      "French Toast": {
        "description": "Add blueberries or strawberries + $2.25",
        "items": [
          { "name": "Texas Style French Toast", "price": "$4.89", "description": "Two slices, served with syrup and butter", "additions": [
            { "name": "Three Slices", "price": "+ $1.00" }
          ]},
          { "name": "French Toast and Eggs", "price": "$7.79", "description": "Two slices of Texas French Toast served with two eggs" },
          { "name": "Cinnamon Raisin French Toast", "price": "$5.39", "description": "Two slices, served with syrup and butter", "additions": [
            { "name": "Three Slices", "price": "+ $1.00" }
          ]},
          { "name": "Cinnamon Raisin French Toast and Eggs", "price": "$8.39", "description": "Two slices, with two eggs" }
        ]
      },
      "Pancakes": {
        "description": "Add blueberries or strawberries + $2.25",
        "items": [
          { "name": "Pancakes", "price": "$4.89", "description": "Two pancakes, served with syrup and butter", "additions": [
            { "name": "Three pancakes", "price": "+ $1.00" }
          ]},
          { "name": "Pancakes and Eggs", "price": "$7.79", "description": "Two pancakes served with two eggs" },
          { "name": "Chocolate Chip Pancakes", "price": "$5.89", "description": "Two pancakes, served with syrup and butter", "additions": [
            { "name": "Three pancakes", "price": "+ $1.00" }
          ]}
        ]
      },
      "Belgian Waffles": {
        "description": "Add blueberries or strawberries + $2.25",
        "items": [
          { "name": "Belgian Waffle", "price": "$5.89", "description": "Served with syrup and butter" },
          { "name": "Belgian Waffle With Egg and Bacon", "price": "$9.69", "description": "Served with one egg and two slices of bacon" },
          { "name": "Belgian Waffle With Ice Cream and Whipped Cream", "price": "$8.25", "description": "One scoop of vanilla or chocolate" }
        ]
      },
      "Sides": {
        "description": "",
        "left": [
          { "name": "Ham, Bacon, Sausage Links or Patties", "price": "$4.69", "description": "" },
          { "name": "Canadian Bacon", "price": "$4.89", "description": "" },
          { "name": "Italian Sausage", "price": "$4.99", "description": "" },
          { "name": "Corned Beef Hash", "price": "$4.99", "description": "" },
          { "name": "Shaved Steak", "price": "$5.99", "description": "" },
          { "name": "Home Fries or Shredded Hash Brown", "price": "$3.25", "description": "" },
          { "name": "Toast", "price": "$1.79", "description": "wheat, white or rye" }
        ],
        "right": [
          { "name": "Gluten Free Toast", "price": "$4.25", "description": "" },
          { "name": "Italian Toast", "price": "$1.99", "description": "" },
          { "name": "12 Grain Toast", "price": "$2.09", "description": "" },
          { "name": "Cinnamon Raisin Toast", "price": "$2.09", "description": "" },
          { "name": "Portuguese, Ciabatta or Hard Roll", "price": "$2.09", "description": "" },
          { "name": "Croissant", "price": "$3.25", "description": "" },
          { "name": "English Muffin", "price": "$2.25", "description": "" },
          { "name": "Bagel with Cream Cheese", "price": "$3.75", "description": "" }
        ]
      },
      "Kid's Menu": {
        "description": "Served with choice of small juice or milk",
        "items": [
          { "name": "Two Pancakes", "price": "$6.89", "description": "" },
          { "name": "Two Chocolate Chip Pancakes", "price": "$7.89", "description": "" },
          { "name": "Two French Toast", "price": "$6.89", "description": "" }
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
                { name: "Fried Dough", price: "$4.79", description: ""},
                { name: "Chili Supreme", price: "$5.99", description: "Homemade chili topped with cheddar cheese"},
                { name: "Chili Cheese Fries", price: "$6.99", description: "Served with sour cream"},
            ],
            right: [
                { title: "Soups", subtitle: "" },
                { name: "Chili", price: "(Cup) $4.49 (Bowl) 5.49", description: "" },
                { name: "New England Clam Chowder", price: "(Cup) $3.99 (Bowl) $4.99", description: "" },
                { name: "Soup Of The Day", price: "(Cup) $3.29 (Bowl) $4.29", description: "" }
            ]
            },
      "Salads": {
        description: "",
        items: [
          { name: "House Salad", price: "$4.79", description: "", additions: [{name:"Add turkey, ham, grilled chicken or tuna", price:"+ $4.00"}] },
          { name: "Chef’s Salad", price: "$9.49", description: "Ham, Turkey, Swiss Cheese & Egg" },
          { name: "Grilled Chicken Salad", price: "$9.79", description: "Marinated Grilled Chicken Breast With Swiss Cheese" },
          { name: "Caesar Salad", price: "$6.49", description: "Romaine Lettuce, Grated Parmesan Cheese & Croutons",additions: [{name:"Add Chicken", price:"+ $3.30"}] },
          { name: "Taco Salad", price: "$10.25", description: "Tossed Salad in a Crispy Taco Shell Topped with Chili, Cheddar Cheese and Sour Cream" },
          { name: "Rancher Salad", price: "$11.25", description: "Tossed Salad in a Crispy Taco Shell Topped with Grilled Chicken, Cheddar Cheese & Ranch" },
          { name: "Black Forest Salad", price: "$10.25", description: "Tossed Salad in a Crispy Taco Shell Topped with Ham, Mozzarella Cheese, Red Peppers & Honey Mustard Dressing" },
          { name: "California Salad", price: "$10.49", description: "Tossed Salad in a Crispy Taco Shell Topped with Grilled Chicken, Red Peppers & Thousand Island Dressing" },
        ]
      },
      "Blue Plate Specials": {
        description: "",
        items: [
            { name: "Roasted Turkey", price: "$10.99", description: "Thinly Slice Turkey Served with Potatoes, Vegetables & Gravy" },
            { name: "Roast Beef", price: "$11.99", description: "Thinly Slice Roast Beef Served with Potatoes, Vegetables & Brown Gravy" },
            { name: "Chicken Fingers", price: "$10.29", description: "Served with French Fries and Cole Slaw" },
            { name: "Hot Open Roast Beef", price: "$9.99", description: "Sliced Roast Beef on White Bread, Brown Gravy & Mashed Potatoes" },
            { name: "Hot Open Turkey", price: "$8.99", description: "Sliced Turkey on White Bread, Brown Gravy & Mashed Potatoes" },
        ]
      },
      " ": {
        description: "",
        left: [
            { title: "Lite Platters", subtitle: "" },
            { name: "Burger Delight", price: "$10.99", description: "4 oz. Ground beef served with a house salad or cole slaw and cottage cheese"},
            { name: "Tuna Delight", price: "$9.79", description: "A scoop of tuna served with a house salad or cole slaw and cottage cheese"},
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
            description: "Make it a platter with fries and coleslaw + 3.90",
            items: [
                { name: "Sweet Italian Sausage", price: "$8.99", description: "Grilled Italian Sausage with Grilled Peppers and Onions" },
                { name: "Philly Cheese Steak", price: "$9.99", description: "Served with Grilled Peppers, Onions and Cheddar Cheese" },
                { name: "Crispy Chicken", price: "$7.99", description: "Served with Lettuce, Tomato and Cheese" },
                { name: "Grilled Chicken", price: "$8.25", description: "Marinated Grilled Chicken severed with Lettuce and Tomato" },
                { name: "Cajun Chicken", price: "$8.69", description: "Marinated Grilled Chicken severed with Grilled Peppers and Onions" },
                { name: "Chicken Parmessan", price: "$8.99", description: "" },
                { name: "Meatball Parmessan", price: "$7.99", description: "" },
                { name: "Meatball, Sausage Pepper And Cheese", price: "$12.99", description: "" },
                { name: "Pepper and Egg", price: "$5.99", description: "" },
                { name: "Bacon, Lettuce, Tomato", price: "$5.89", description: "" },
                { name: "Tuna Salad", price: "$5.49", description: "Served with Lettuce and Tomato, Add Cheese + $.50" },
                { name: "Ham & Cheese", price: "$7.39", description: "Served with Lettuce and Tomato" },
                { name: "Turkey & Cheese", price: "$6.99", description: "Served with Lettuce and Tomato" },
                { name: "Roast Beef & Cheese", price: "$8.25", description: "Served with Lettuce and Tomato" },
                { name: "Shaved Steak & Cheese", price: "$7.99", description: "Served with Lettuce and Tomato" },
                { name: "Ham, Turkey & Cheese", price: "$8.39", description: "Served with Lettuce and Tomato" },
                { name: "American Combo", price: "$11.99", description: "Served with Ham, Turkey, Roast Beef, Cheese, Lettuce and Tomato" },
            ]
        },
        "Hot Dogs and Hamburgers": {
            description: "Make it a platter with fries and coleslaw + 3.99",
            left: [
                { title: "Foot Long Hot Dogs", subtitle: "" },
                { name: "All American Foot Long Hot Dog", price: "$4.39", description: "",additions: [{name:"Add Cheese",price: "+ $.50" }, {name:"Add Chili", price: "+ $1.00"}, {name:"Add Chili & Cheese", price:"+ $1.50"},{name:"Add Bacon & Cheese", price:"+ $2.50"}] },
                { name: "Italian Dog", price: "$5.49", description: "Grilled Peppers & Onions" },
                { name: "Swiss Dog", price: "$5.49", description: "Swiss Cheese & Mushrooms" },
                { name: "Irish Dog", price: "$8.25", description: "Pastrami & Saurkraut" },
            ],
            right: [
                { title: "Hamburgers", subtitle: "Served on a Ciabatta Roll with Lettuce and Tomato" },
                { name: "Black Angus", price: "$7.59", description: "Add Cheese + $.70" },
                { name: "Bacon Cheeseburger", price: "$9.99", description: "" },
                { name: "Cajun Burger", price: "$7.99", description: "" },
                { name: "Double Hamburger", price: "$10.25", description: "" },
                { name: "Double Cheeseburger", price: "$11.25", description: "" },
                { name: "Double Bacon Cheeseburger", price: "$12.99", description: "" },
            ]
        },
        "Club Sandwiches": {
            description: "Served with fries and coleslaw with lettuce, tomato and bacon on your choice of wheat,white or rye bread",
            items: [
                { name: "Tuna Salad", price: "$9.99", description: "" },
                { name: "B.L.T", price: "$9.99", description: "" },
                { name: "Hamburger", price: "$11.99", description: "Add Cheese + $.50" },
                { name: "Turkey", price: "$10.99", description: "" },
                { name: "Ham & Cheese", price: "$10.49", description: "" },
                { name: "Roast Beef", price: "$11.29", description: "" },
                { name: "Grilled Chicken", price: "$10.99", description: "" },
                { name: "Turkey & Ham", price: "$11.99", description: "" },
                { name: "Steak & Cheese", price: "$12.49", description: "" },
            ]
        },
        "Melts": {
            description: "Make it a platter with Fries and Coleslaw + 3.99",
            items: [
                { name: "Grilled Cheese", price: "$4.39", description: "Choice of American, Swiss or Cheddar" },
                { name: "Tuna", price: "$6.49", description: "" },
                { name: "Grilled Reuben", price: "$7.25", description: "Grilled Corned Beef, Swiss Cheese, Thousand Island and Sauerkraut on Rye" },
                { name: "Roast Beef & Cheddar", price: "$8.99", description: "Served with Horseradish Sauce" },
                { name: "Monte Cristo", price: "$6.99", description: "Ham and Swiss Cheese on Texas Toast" },
                { name: "Pastrami & Swiss", price: "$7.79", description: "Served with Grilled Onions" },
                { name: "Pilgrim Melt", price: "$7.99", description: "Turkey, Swiss Cheese & Cranberry Sauce" },
                { name: "Patty Melt", price: "$8.99", description: "Hamburger on Rye with Grilled Onions & Swiss Cheese" },
            ]
        },
        "Wraps": {
            description: "Served with Fries and Coleslaw",
            items: [
                { name: "Cajun Chicken", price: "$11.99", description: "Marinated Grilled Chicken severed with Grilled Peppers and Onions" },
                { name: "Crispy Chicken", price: "$10.99", description: "Fried Chicken Strips with Lettuce, Tomato & Honey Mustard Dressing" },
                { name: "Buffalo Chicken", price: "$11.25", description: "Fried Boneless Buffalo Chicken with Lettuce, Tomato and Blue Cheese" },
                { name: "Caesar Chicken", price: "$10.29", description: "Grilled Chicken with Lettuce and Caesar Dressing" },
                { name: "Turkey B.L.T", price: "$10.79", description: "Cheese, Bacon, Lettuce and Tomato" },
                { name: "Turkey & Cheddar Cheese", price: "$10.59", description: "Lettuce Tomato and Honey Mustard Dressing" },
                { name: "Philly Cheese Steak", price: "$11.79", description: "Grilled Shaved Steak with Cheddar Cheese, Grilled Peppers and Onions" },
            ]
        },
        "  ": {
            description: "",
            left: [
                { title: "Sides", subtitle: "" },
                { name: "French Fries", price: "$3.69", description: "" },
                { name: "Curley Fries", price: "$3.89", description: "" },
                { name: "Onion Rings", price: "$4.89", description: "" },
                { name: "Mashed Potatoes with Gravy", price: "$3.89", description: "" },
                { name: "Vegetable of the Day", price: "$2.59", description: "" },
                { name: "Cottage Cheese", price: "$2.49", description: "" },
                { name: "Coleslaw", price: "$2.49", description: "" },
                { name: "Chili", price: "$2.99", description: "" },
            ],
            right: [
                { title: "Kids Menu", subtitle: "Includes French Fries and a Small Drink 7.99" },
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
                { name: "One Scoop", price: "$2.50", description: "" },
                { name: "Two Scoops", price: "$3.99", description: "", additions: [{name:"Add Whipped Cream", price:"+ $1.25"}]},
            ],
            right: [
                { title: "Milkshakes", subtitle: "One Size" },
                { name: "Chocolate, Vanilla or Strawberry", price: "$5.99", description: "" },
                { name: "Root Beer Float", price: "$6.99", description: "" },
                { name: "Black Cow", price: "$6.99", description: "Chocolate Ice Cream & Coke" },
            ]
        },
        "Additions": {
            description: "1.25",
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
          "description": "",
          "left": [
            { "title": "", "subtitle": "" },
            { "name": "Coffee/Tea", "price": "$2.79", "description": "" },
            { "name": "16 oz. Ice Coffee", "price": "$2.99", "description": "" },
            { "name": "Fountain Drinks", "price": "$3.29", "description": "Coke products, Unsweetened iced tea, Lemonade" },
            { "name": "Juice", "price": "(S) $2.25 (L) $2.69", "description": "Orange, Apple, Tomato, Cranberry, Grapefruit" }
          ],
          "right": [
            { "title": "", "subtitle": "" },
            { "name": "Herbal Teas", "price": "$3.79", "description": "Ask for selection" },
            { "name": "Hot Chocolate with Whipped Cream", "price": "$2.79", "description": "" },
            { "name": "Milk", "price": "(S) $2.59 (L) $2.79", "description": "" },
            { "name": "Chocolate Milk", "price": "(S) $2.79 (L) $2.99", "description": "" }
          ]
        }
    }
};

export default menuData;
  