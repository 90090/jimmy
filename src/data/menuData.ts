// Menu content for Breakfast and Lunch. Edit prices/items here — every menu page renders from this file.
export interface Addition { name: string; price?: string }
export interface MenuItem { name: string; price?: string; description?: string; additions?: Addition[] }
export interface MenuColumn { title?: string; subtitle?: string; items: MenuItem[] }
export interface MenuSection { title: string; description?: string; items?: MenuItem[]; columns?: MenuColumn[] }

export const menuData: { breakfast: MenuSection[]; lunch: MenuSection[] } = {
  "breakfast": [
    {
      "title": "Eggs",
      "columns": [
        {
          "items": [
            {
              "name": "Two Eggs, Any Style",
              "price": "$5.99"
            },
            {
              "name": "One Egg, Any Style",
              "price": "$4.79",
              "additions": [
                {
                  "name": "Each Additional Egg",
                  "price": "+ $1.49"
                },
                {
                  "name": "Egg Whites",
                  "price": "+ $0.99"
                },
                {
                  "name": "Substitute Fruit Cup Instead of Home Fries/Hashbrowns",
                  "price": "+ $2.99"
                }
              ]
            },
            {
              "name": "French Connection",
              "price": "$7.99",
              "description": "Two scrambled eggs and american cheese served on a grilled croissant with homefries or shredded hashbrowns"
            }
          ]
        },
        {
          "items": [
            {
              "name": "Special #1",
              "price": "$13.49",
              "description": "Two eggs, with your choice of ham, bacon or sausage and your choice of two pancakes, two french toast or a Belgian waffle with homefries or shredded hashbrowns and toast"
            },
            {
              "name": "Special #2",
              "price": "$14.49",
              "description": "Two eggs, with shaved steak and your choice of two pancakes, two french toast or a Belgian waffle with homefries or shredded hashbrowns and toast"
            }
          ]
        }
      ]
    },
    {
      "title": "Starters",
      "items": [
        {
          "name": "Muffin",
          "price": "$3.25"
        },
        {
          "name": "Fruit Cup",
          "price": "$5.25"
        },
        {
          "name": "Fruit Bowl",
          "price": "$6.75"
        },
        {
          "name": "Oatmeal Cup",
          "price": "$2.50"
        },
        {
          "name": "Oatmeal Bowl",
          "price": "$3.50"
        }
      ]
    },
    {
      "title": "Overstuffed Omelettes",
      "description": "served with homefries or shredded hashbrowns and toast",
      "items": [
        {
          "name": "Plain Omelette",
          "price": "$7.99",
          "additions": [
            {
              "name": "Add your choice of three - American, Swiss, or Cheddar Cheese, Broccoli, Spinach, Tomato, Peppers, Onions, or Mushrooms",
              "price": "$10.99"
            }
          ]
        },
        {
          "name": "Cheese Omelette",
          "price": "$8.79",
          "description": "American, Swiss, Cheddar or Feta Cheese",
          "additions": [
            {
              "name": "Add Ham, Bacon or Sausage",
              "price": "+ $1.70"
            },
            {
              "name": "Add Italian Sausage or Canadian Bacon",
              "price": "+ $2.00"
            }
          ]
        },
        {
          "name": "Western Omelette",
          "price": "$10.99",
          "description": "Ham, Peppers, Onion & Cheese"
        },
        {
          "name": "Nick's Omelette",
          "price": "$10.79",
          "description": "Corned Beef Hash & Cheese"
        },
        {
          "name": "Ligi's Omelette",
          "price": "$11.99",
          "description": "Ham, Bacon, Sausage & Cheese"
        },
        {
          "name": "Philly Steak Omelette",
          "price": "$12.49",
          "description": "Steak, Mushrooms, Peppers, Onions & Cheese"
        },
        {
          "name": "Cheese Omelette",
          "price": "$9.49",
          "description": "Broccoli or Spinach"
        },
        {
          "name": "Pastrami and Swiss Cheese Omelette",
          "price": "$10.59"
        },
        {
          "name": "Italian Omelette",
          "price": "$12.99",
          "description": "Italian Sausage, Peppers, Onion & Mozzarella Cheese"
        },
        {
          "name": "Florentine Omelette",
          "price": "$10.75",
          "description": "Spinach, Mushroom, Onion & American Cheese"
        },
        {
          "name": "Chili Cheddar Cheese Omelette",
          "price": "$10.89",
          "description": "Housemade Chili and Cheddar Cheese"
        }
      ]
    },
    {
      "title": "Sandwiches",
      "description": "Two egg sandwich served on your choice of a hard roll, Portuguese roll or wrap",
      "items": [
        {
          "name": "Egg Sandwich",
          "price": "$4.89"
        },
        {
          "name": "Egg and Cheese Sandwich",
          "price": "$5.79",
          "additions": [
            {
              "name": "Add Ham, Bacon or Sausage Patty",
              "price": "+ $1.00"
            },
            {
              "name": "Add Pastrami, Italian Sausage or Canadian Bacon",
              "price": "+ $2.00"
            },
            {
              "name": "Add Shaved Steak",
              "price": "+ $2.10"
            }
          ]
        },
        {
          "name": "Western Sandwich",
          "price": "$7.79",
          "description": "Ham, Peppers, Onion & Cheese"
        },
        {
          "name": "Scrambled Egg Wrap",
          "price": "$9.99",
          "description": "Served With Homefries or Shredded Hasbrowns, your choice of three veggies and cheese",
          "additions": [
            {
              "name": "Add Ham, Bacon, or Sausage",
              "price": "+ $1.00"
            }
          ]
        }
      ]
    },
    {
      "title": "French Toast",
      "description": "Add blueberries or strawberries + $2.25",
      "items": [
        {
          "name": "Texas Style French Toast",
          "price": "$4.89",
          "description": "Two slices, served with syrup and butter",
          "additions": [
            {
              "name": "Three Slices",
              "price": "+ $1.00"
            }
          ]
        },
        {
          "name": "French Toast and Eggs",
          "price": "$7.79",
          "description": "Two slices of Texas French Toast served with two eggs"
        },
        {
          "name": "Cinnamon Raisin French Toast",
          "price": "$5.39",
          "description": "Two slices, served with syrup and butter",
          "additions": [
            {
              "name": "Three Slices",
              "price": "+ $1.00"
            }
          ]
        },
        {
          "name": "Cinnamon Raisin French Toast and Eggs",
          "price": "$8.39",
          "description": "Two slices, with two eggs"
        }
      ]
    },
    {
      "title": "Pancakes",
      "description": "Add blueberries or strawberries + $2.25",
      "items": [
        {
          "name": "Pancakes",
          "price": "$4.89",
          "description": "Two pancakes, served with syrup and butter",
          "additions": [
            {
              "name": "Three pancakes",
              "price": "+ $1.00"
            }
          ]
        },
        {
          "name": "Pancakes and Eggs",
          "price": "$7.79",
          "description": "Two pancakes served with two eggs"
        },
        {
          "name": "Chocolate Chip Pancakes",
          "price": "$5.89",
          "description": "Two pancakes, served with syrup and butter",
          "additions": [
            {
              "name": "Three pancakes",
              "price": "+ $1.00"
            }
          ]
        }
      ]
    },
    {
      "title": "Belgian Waffles",
      "description": "Add blueberries or strawberries + $2.25",
      "items": [
        {
          "name": "Belgian Waffle",
          "price": "$5.89",
          "description": "Served with syrup and butter"
        },
        {
          "name": "Belgian Waffle With Egg and Bacon",
          "price": "$9.69",
          "description": "Served with one egg and two slices of bacon"
        },
        {
          "name": "Belgian Waffle With Ice Cream and Whipped Cream",
          "price": "$8.25",
          "description": "One scoop of vanilla or chocolate"
        }
      ]
    },
    {
      "title": "Sides",
      "columns": [
        {
          "items": [
            {
              "name": "Ham, Bacon, Sausage Links or Patties",
              "price": "$4.69"
            },
            {
              "name": "Canadian Bacon",
              "price": "$4.89"
            },
            {
              "name": "Italian Sausage",
              "price": "$4.99"
            },
            {
              "name": "Corned Beef Hash",
              "price": "$4.99"
            },
            {
              "name": "Shaved Steak",
              "price": "$5.99"
            },
            {
              "name": "Home Fries or Shredded Hash Brown",
              "price": "$3.25"
            },
            {
              "name": "Toast",
              "price": "$1.79",
              "description": "wheat, white or rye"
            }
          ]
        },
        {
          "items": [
            {
              "name": "Gluten Free Toast",
              "price": "$4.25"
            },
            {
              "name": "Italian Toast",
              "price": "$1.99"
            },
            {
              "name": "12 Grain Toast",
              "price": "$2.09"
            },
            {
              "name": "Cinnamon Raisin Toast",
              "price": "$2.09"
            },
            {
              "name": "Portuguese, Ciabatta or Hard Roll",
              "price": "$2.09"
            },
            {
              "name": "Croissant",
              "price": "$3.25"
            },
            {
              "name": "English Muffin",
              "price": "$2.25"
            },
            {
              "name": "Bagel with Cream Cheese",
              "price": "$3.75"
            }
          ]
        }
      ]
    },
    {
      "title": "Kid's Menu",
      "description": "Served with choice of small juice or milk",
      "items": [
        {
          "name": "Two Pancakes",
          "price": "$6.89"
        },
        {
          "name": "Two Chocolate Chip Pancakes",
          "price": "$7.89"
        },
        {
          "name": "Two French Toast",
          "price": "$6.89"
        }
      ]
    }
  ],
  "lunch": [
    {
      "title": "",
      "columns": [
        {
          "items": [
            {
              "name": "Fried Mozzarella Sticks",
              "price": "$6.99",
              "description": "served with marinara sauce"
            },
            {
              "name": "Chicken Nuggets",
              "price": "(6) $4.49 (10) $6.99"
            },
            {
              "name": "Chicken Fingers",
              "price": "(4) $7.49"
            },
            {
              "name": "Cheese Fries with Bacon Bits",
              "price": "$6.99",
              "description": "Served with sour cream"
            },
            {
              "name": "Fried Dough",
              "price": "$4.79"
            },
            {
              "name": "Chili Supreme",
              "price": "$5.99",
              "description": "Homemade chili topped with cheddar cheese"
            },
            {
              "name": "Chili Cheese Fries",
              "price": "$6.99",
              "description": "Served with sour cream"
            }
          ],
          "title": "Appetizers"
        },
        {
          "items": [
            {
              "name": "Chili",
              "price": "(Cup) $4.49 (Bowl) $5.49"
            },
            {
              "name": "New England Clam Chowder",
              "price": "(Cup) $3.99 (Bowl) $4.99"
            },
            {
              "name": "Soup Of The Day",
              "price": "(Cup) $3.29 (Bowl) $4.29"
            }
          ],
          "title": "Soups"
        }
      ]
    },
    {
      "title": "Salads",
      "items": [
        {
          "name": "House Salad",
          "price": "$4.79",
          "additions": [
            {
              "name": "Add turkey, ham, grilled chicken or tuna",
              "price": "+ $4.00"
            }
          ]
        },
        {
          "name": "Chef’s Salad",
          "price": "$9.49",
          "description": "Ham, Turkey, Swiss Cheese & Egg"
        },
        {
          "name": "Grilled Chicken Salad",
          "price": "$9.79",
          "description": "Marinated Grilled Chicken Breast With Swiss Cheese"
        },
        {
          "name": "Caesar Salad",
          "price": "$6.49",
          "description": "Romaine Lettuce, Grated Parmesan Cheese & Croutons",
          "additions": [
            {
              "name": "Add Chicken",
              "price": "+ $3.30"
            }
          ]
        },
        {
          "name": "Taco Salad",
          "price": "$10.25",
          "description": "Tossed Salad in a Crispy Taco Shell Topped with Chili, Cheddar Cheese and Sour Cream"
        },
        {
          "name": "Rancher Salad",
          "price": "$11.25",
          "description": "Tossed Salad in a Crispy Taco Shell Topped with Grilled Chicken, Cheddar Cheese & Ranch"
        },
        {
          "name": "Black Forest Salad",
          "price": "$10.25",
          "description": "Tossed Salad in a Crispy Taco Shell Topped with Ham, Mozzarella Cheese, Red Peppers & Honey Mustard Dressing"
        },
        {
          "name": "California Salad",
          "price": "$10.49",
          "description": "Tossed Salad in a Crispy Taco Shell Topped with Grilled Chicken, Red Peppers & Thousand Island Dressing"
        }
      ]
    },
    {
      "title": "Blue Plate Specials",
      "items": [
        {
          "name": "Roasted Turkey",
          "price": "$10.99",
          "description": "Thinly Sliced Turkey Served with Potatoes, Vegetables & Gravy"
        },
        {
          "name": "Roast Beef",
          "price": "$11.99",
          "description": "Thinly Sliced Roast Beef Served with Potatoes, Vegetables & Brown Gravy"
        },
        {
          "name": "Chicken Fingers",
          "price": "$10.29",
          "description": "Served with French Fries and Cole Slaw"
        },
        {
          "name": "Hot Open Roast Beef",
          "price": "$9.99",
          "description": "Sliced Roast Beef on White Bread, Brown Gravy & Mashed Potatoes"
        },
        {
          "name": "Hot Open Turkey",
          "price": "$8.99",
          "description": "Sliced Turkey on White Bread, Brown Gravy & Mashed Potatoes"
        }
      ]
    },
    {
      "title": "",
      "columns": [
        {
          "items": [
            {
              "name": "Burger Delight",
              "price": "$10.99",
              "description": "4 oz. Ground beef served with a house salad or cole slaw and cottage cheese"
            },
            {
              "name": "Tuna Delight",
              "price": "$9.79",
              "description": "A scoop of tuna served with a house salad or cole slaw and cottage cheese"
            }
          ],
          "title": "Lite Platters"
        },
        {
          "items": [
            {
              "name": "Fish'N'Chips",
              "price": "$18.99"
            },
            {
              "name": "Clam Strips",
              "price": "$16.99"
            },
            {
              "name": "Clam Roll",
              "price": "$14.99"
            },
            {
              "name": "Fried Shrimp",
              "price": "$13.79"
            },
            {
              "name": "Fish Sandwich",
              "price": "$14.99"
            },
            {
              "name": "Fried Shrimp Roll",
              "price": "$12.79"
            }
          ],
          "title": "Fried Seafood Platters",
          "subtitle": "Fresh From Tony's Seafood"
        }
      ]
    },
    {
      "title": "Sandwiches & Grinders",
      "description": "Make it a platter with fries and coleslaw + $3.90",
      "items": [
        {
          "name": "Sweet Italian Sausage",
          "price": "$8.99",
          "description": "Grilled Italian Sausage with Grilled Peppers and Onions"
        },
        {
          "name": "Philly Cheese Steak",
          "price": "$9.99",
          "description": "Served with Grilled Peppers, Onions and Cheddar Cheese"
        },
        {
          "name": "Crispy Chicken",
          "price": "$7.99",
          "description": "Served with Lettuce, Tomato and Cheese"
        },
        {
          "name": "Grilled Chicken",
          "price": "$8.25",
          "description": "Marinated Grilled Chicken served with Lettuce and Tomato"
        },
        {
          "name": "Cajun Chicken",
          "price": "$8.69",
          "description": "Marinated Grilled Chicken served with Grilled Peppers and Onions"
        },
        {
          "name": "Chicken Parmesan",
          "price": "$8.99"
        },
        {
          "name": "Meatball Parmesan",
          "price": "$7.99"
        },
        {
          "name": "Meatball, Sausage Pepper And Cheese",
          "price": "$12.99"
        },
        {
          "name": "Pepper and Egg",
          "price": "$5.99"
        },
        {
          "name": "Bacon, Lettuce, Tomato",
          "price": "$5.89"
        },
        {
          "name": "Tuna Salad",
          "price": "$5.49",
          "description": "Served with Lettuce and Tomato, Add Cheese + $.50"
        },
        {
          "name": "Ham & Cheese",
          "price": "$7.39",
          "description": "Served with Lettuce and Tomato"
        },
        {
          "name": "Turkey & Cheese",
          "price": "$6.99",
          "description": "Served with Lettuce and Tomato"
        },
        {
          "name": "Roast Beef & Cheese",
          "price": "$8.25",
          "description": "Served with Lettuce and Tomato"
        },
        {
          "name": "Shaved Steak & Cheese",
          "price": "$7.99",
          "description": "Served with Lettuce and Tomato"
        },
        {
          "name": "Ham, Turkey & Cheese",
          "price": "$8.39",
          "description": "Served with Lettuce and Tomato"
        },
        {
          "name": "American Combo",
          "price": "$11.99",
          "description": "Served with Ham, Turkey, Roast Beef, Cheese, Lettuce and Tomato"
        }
      ]
    },
    {
      "title": "Hot Dogs and Hamburgers",
      "description": "Make it a platter with fries and coleslaw + $3.99",
      "columns": [
        {
          "items": [
            {
              "name": "All American Foot Long Hot Dog",
              "price": "$4.39",
              "additions": [
                {
                  "name": "Add Cheese",
                  "price": "+ $.50"
                },
                {
                  "name": "Add Chili",
                  "price": "+ $1.00"
                },
                {
                  "name": "Add Chili & Cheese",
                  "price": "+ $1.50"
                },
                {
                  "name": "Add Bacon & Cheese",
                  "price": "+ $2.50"
                }
              ]
            },
            {
              "name": "Italian Dog",
              "price": "$5.49",
              "description": "Grilled Peppers & Onions"
            },
            {
              "name": "Swiss Dog",
              "price": "$5.49",
              "description": "Swiss Cheese & Mushrooms"
            },
            {
              "name": "Irish Dog",
              "price": "$8.25",
              "description": "Pastrami & Sauerkraut"
            }
          ],
          "title": "Foot Long Hot Dogs"
        },
        {
          "items": [
            {
              "name": "Black Angus",
              "price": "$7.59",
              "description": "Add Cheese + $.70"
            },
            {
              "name": "Bacon Cheeseburger",
              "price": "$9.99"
            },
            {
              "name": "Cajun Burger",
              "price": "$7.99"
            },
            {
              "name": "Double Hamburger",
              "price": "$10.25"
            },
            {
              "name": "Double Cheeseburger",
              "price": "$11.25"
            },
            {
              "name": "Double Bacon Cheeseburger",
              "price": "$12.99"
            }
          ],
          "title": "Hamburgers",
          "subtitle": "Served on a Ciabatta Roll with Lettuce and Tomato"
        }
      ]
    },
    {
      "title": "Club Sandwiches",
      "description": "Served with fries and coleslaw with lettuce, tomato and bacon on your choice of wheat,white or rye bread",
      "items": [
        {
          "name": "Tuna Salad",
          "price": "$9.99"
        },
        {
          "name": "B.L.T",
          "price": "$9.99"
        },
        {
          "name": "Hamburger",
          "price": "$11.99",
          "description": "Add Cheese + $.50"
        },
        {
          "name": "Turkey",
          "price": "$10.99"
        },
        {
          "name": "Ham & Cheese",
          "price": "$10.49"
        },
        {
          "name": "Roast Beef",
          "price": "$11.29"
        },
        {
          "name": "Grilled Chicken",
          "price": "$10.99"
        },
        {
          "name": "Turkey & Ham",
          "price": "$11.99"
        },
        {
          "name": "Steak & Cheese",
          "price": "$12.49"
        }
      ]
    },
    {
      "title": "Melts",
      "description": "Make it a platter with Fries and Coleslaw + $3.99",
      "items": [
        {
          "name": "Grilled Cheese",
          "price": "$4.39",
          "description": "Choice of American, Swiss or Cheddar"
        },
        {
          "name": "Tuna",
          "price": "$6.49"
        },
        {
          "name": "Grilled Reuben",
          "price": "$7.25",
          "description": "Grilled Corned Beef, Swiss Cheese, Thousand Island and Sauerkraut on Rye"
        },
        {
          "name": "Roast Beef & Cheddar",
          "price": "$8.99",
          "description": "Served with Horseradish Sauce"
        },
        {
          "name": "Monte Cristo",
          "price": "$6.99",
          "description": "Ham and Swiss Cheese on Texas Toast"
        },
        {
          "name": "Pastrami & Swiss",
          "price": "$7.79",
          "description": "Served with Grilled Onions"
        },
        {
          "name": "Pilgrim Melt",
          "price": "$7.99",
          "description": "Turkey, Swiss Cheese & Cranberry Sauce"
        },
        {
          "name": "Patty Melt",
          "price": "$8.99",
          "description": "Hamburger on Rye with Grilled Onions & Swiss Cheese"
        }
      ]
    },
    {
      "title": "Wraps",
      "description": "Served with Fries and Coleslaw",
      "items": [
        {
          "name": "Cajun Chicken",
          "price": "$11.99",
          "description": "Marinated Grilled Chicken served with Grilled Peppers and Onions"
        },
        {
          "name": "Crispy Chicken",
          "price": "$10.99",
          "description": "Fried Chicken Strips with Lettuce, Tomato & Honey Mustard Dressing"
        },
        {
          "name": "Buffalo Chicken",
          "price": "$11.25",
          "description": "Fried Boneless Buffalo Chicken with Lettuce, Tomato and Blue Cheese"
        },
        {
          "name": "Caesar Chicken",
          "price": "$10.29",
          "description": "Grilled Chicken with Lettuce and Caesar Dressing"
        },
        {
          "name": "Turkey B.L.T",
          "price": "$10.79",
          "description": "Cheese, Bacon, Lettuce and Tomato"
        },
        {
          "name": "Turkey & Cheddar Cheese",
          "price": "$10.59",
          "description": "Lettuce Tomato and Honey Mustard Dressing"
        },
        {
          "name": "Philly Cheese Steak",
          "price": "$11.79",
          "description": "Grilled Shaved Steak with Cheddar Cheese, Grilled Peppers and Onions"
        }
      ]
    },
    {
      "title": "",
      "columns": [
        {
          "items": [
            {
              "name": "French Fries",
              "price": "$3.69"
            },
            {
              "name": "Curly Fries",
              "price": "$3.89"
            },
            {
              "name": "Onion Rings",
              "price": "$4.89"
            },
            {
              "name": "Mashed Potatoes with Gravy",
              "price": "$3.89"
            },
            {
              "name": "Vegetable of the Day",
              "price": "$2.59"
            },
            {
              "name": "Cottage Cheese",
              "price": "$2.49"
            },
            {
              "name": "Coleslaw",
              "price": "$2.49"
            },
            {
              "name": "Chili",
              "price": "$2.99"
            }
          ],
          "title": "Sides"
        },
        {
          "items": [
            {
              "name": "Cheeseburger"
            },
            {
              "name": "Chicken Fingers"
            },
            {
              "name": "Chicken Nuggets"
            },
            {
              "name": "Hamburger"
            },
            {
              "name": "Foot Long Hot Dog"
            },
            {
              "name": "Grilled Cheese"
            },
            {
              "name": "Pasta & Meatballs"
            },
            {
              "name": "Fried Dough"
            }
          ],
          "title": "Kids Menu",
          "subtitle": "Includes French Fries and a Small Drink — $7.99"
        }
      ]
    },
    {
      "title": "",
      "columns": [
        {
          "items": [
            {
              "name": "One Scoop",
              "price": "$2.50"
            },
            {
              "name": "Two Scoops",
              "price": "$3.99",
              "additions": [
                {
                  "name": "Add Whipped Cream",
                  "price": "+ $1.25"
                }
              ]
            }
          ],
          "title": "Ice Cream",
          "subtitle": "Vanilla, Chocolate or Strawberry"
        },
        {
          "items": [
            {
              "name": "Chocolate, Vanilla or Strawberry",
              "price": "$5.99"
            },
            {
              "name": "Root Beer Float",
              "price": "$6.99"
            },
            {
              "name": "Black Cow",
              "price": "$6.99",
              "description": "Chocolate Ice Cream & Coke"
            }
          ],
          "title": "Milkshakes",
          "subtitle": "One Size"
        }
      ]
    },
    {
      "title": "Additions",
      "description": "Each addition $1.25",
      "columns": [
        {
          "items": [
            {
              "name": "Feta Cheese"
            },
            {
              "name": "Mozzarella Cheese"
            },
            {
              "name": "Lettuce"
            },
            {
              "name": "Honey"
            },
            {
              "name": "Salsa"
            },
            {
              "name": "Salad Dressing"
            },
            {
              "name": "Chili"
            }
          ]
        },
        {
          "items": [
            {
              "name": "Cheese (American, Cheddar, Swiss)"
            },
            {
              "name": "Grilled Peppers"
            },
            {
              "name": "Tomato"
            },
            {
              "name": "Roasted Red Peppers"
            },
            {
              "name": "Sour Cream"
            },
            {
              "name": "Grilled Onions"
            },
            {
              "name": "Peanut Butter"
            }
          ]
        }
      ]
    },
    {
      "title": "Beverages",
      "columns": [
        {
          "items": [
            {
              "name": "Coffee/Tea",
              "price": "$2.79"
            },
            {
              "name": "16 oz. Ice Coffee",
              "price": "$2.99"
            },
            {
              "name": "Fountain Drinks",
              "price": "$3.29",
              "description": "Coke products, Unsweetened iced tea, Lemonade"
            },
            {
              "name": "Juice",
              "price": "(S) $2.25 (L) $2.69",
              "description": "Orange, Apple, Tomato, Cranberry, Grapefruit"
            }
          ]
        },
        {
          "items": [
            {
              "name": "Herbal Teas",
              "price": "$3.79",
              "description": "Ask for selection"
            },
            {
              "name": "Hot Chocolate with Whipped Cream",
              "price": "$2.79"
            },
            {
              "name": "Milk",
              "price": "(S) $2.59 (L) $2.79"
            },
            {
              "name": "Chocolate Milk",
              "price": "(S) $2.79 (L) $2.99"
            }
          ]
        }
      ]
    }
  ]
};
