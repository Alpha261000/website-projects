/* ==============================
   ALL INDIAN FOODS – script.js
   ============================== */

// ---- FOOD DATA ----
const foods = [
  // ---- NORTH INDIAN ----
  {
    id: 1, name: "Butter Chicken", region: "north", regionLabel: "North Indian",
    state: "Punjab", course: "Main Course", veg: false,
    emoji: "🍗",
    img: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=500&auto=format",
    desc: "Tender chicken simmered in a rich, creamy tomato-butter gravy with aromatic spices. One of India's most beloved curries, born in the dhabas of Delhi.",
    tags: ["Curry", "Creamy", "Popular"],
    ingredients: ["Chicken", "Butter", "Tomato", "Cream", "Garam Masala", "Kasuri Methi", "Cardamom"]
  },
  {
    id: 2, name: "Dal Makhani", region: "north", regionLabel: "North Indian",
    state: "Punjab", course: "Main Course", veg: true,
    emoji: "🫘",
    img: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=500&auto=format",
    desc: "Whole black lentils slow-cooked overnight with butter, cream and tomatoes. A Punjabi classic that gets better the longer it cooks.",
    tags: ["Veg", "Lentils", "Comfort Food"],
    ingredients: ["Black Lentils", "Kidney Beans", "Butter", "Cream", "Tomato", "Onion"]
  },
  {
    id: 3, name: "Biryani (Hyderabadi)", region: "north", regionLabel: "Hyderabad",
    state: "Telangana", course: "Main Course", veg: false,
    emoji: "🍚",
    img: "https://images.unsplash.com/photo-1563379091339-03246be36b05?w=500&auto=format",
    desc: "Fragrant basmati rice layered with spiced meat, saffron, fried onions and fresh herbs. The crown jewel of Hyderabad's royal cuisine.",
    tags: ["Rice", "Dum-cooked", "Royal"],
    ingredients: ["Basmati Rice", "Mutton/Chicken", "Saffron", "Fried Onions", "Mint", "Rose Water"]
  },
  {
    id: 4, name: "Chole Bhature", region: "north", regionLabel: "North Indian",
    state: "Delhi / Punjab", course: "Breakfast / Main", veg: true,
    emoji: "🫔",
    img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&auto=format",
    desc: "Spicy chickpea curry served with deep-fried, pillowy leavened bread. A iconic Delhi street food and weekend family favourite.",
    tags: ["Veg", "Street Food", "Fried"],
    ingredients: ["Chickpeas", "Refined Flour", "Onion", "Tomato", "Chole Masala", "Yogurt"]
  },
  {
    id: 5, name: "Sarson da Saag", region: "north", regionLabel: "North Indian",
    state: "Punjab", course: "Main Course", veg: true,
    emoji: "🥬",
    img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500&auto=format",
    desc: "A vibrant winter dish of mustard and spinach greens slow-cooked with maize flour, served with makki di roti and a dollop of white butter.",
    tags: ["Veg", "Seasonal", "Rustic"],
    ingredients: ["Mustard Leaves", "Spinach", "Maize Flour", "Ginger", "Garlic", "White Butter"]
  },
  {
    id: 6, name: "Rajma Chawal", region: "north", regionLabel: "North Indian",
    state: "North India", course: "Main Course", veg: true,
    emoji: "🍱",
    img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500&auto=format",
    desc: "Hearty red kidney beans in a spiced onion-tomato gravy served over steamed rice. The ultimate North Indian comfort food.",
    tags: ["Veg", "Comfort Food", "Home-style"],
    ingredients: ["Kidney Beans", "Rice", "Onion", "Tomato", "Coriander", "Cumin"]
  },
  {
    id: 7, name: "Paneer Tikka", region: "north", regionLabel: "North Indian",
    state: "Punjab", course: "Appetizer", veg: true,
    emoji: "🧀",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&auto=format",
    desc: "Cubes of cottage cheese marinated in spiced yogurt, skewered and char-grilled in a tandoor. Smoky, spicy, and absolutely irresistible.",
    tags: ["Veg", "Tandoor", "Starter"],
    ingredients: ["Paneer", "Yogurt", "Bell Peppers", "Tandoori Masala", "Chaat Masala", "Lemon"]
  },
  {
    id: 8, name: "Rogan Josh", region: "north", regionLabel: "Kashmiri",
    state: "Jammu & Kashmir", course: "Main Course", veg: false,
    emoji: "🍖",
    img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&auto=format",
    desc: "A slow-cooked Kashmiri mutton curry with Kashmiri red chilies and whole spices, known for its brilliant red colour and aromatic depth.",
    tags: ["Mutton", "Kashmiri", "Slow Cooked"],
    ingredients: ["Mutton", "Kashmiri Chili", "Fennel", "Cardamom", "Cloves", "Yogurt"]
  },

  // ---- SOUTH INDIAN ----
  {
    id: 9, name: "Masala Dosa", region: "south", regionLabel: "South Indian",
    state: "Karnataka", course: "Breakfast", veg: true,
    emoji: "🥞",
    img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500&auto=format",
    desc: "Crispy golden crepe made from fermented rice and lentil batter, filled with spiced potato filling. Served with coconut chutney and sambar.",
    tags: ["Veg", "Crispy", "Fermented"],
    ingredients: ["Rice", "Urad Dal", "Potatoes", "Mustard Seeds", "Curry Leaves", "Coconut"]
  },
  {
    id: 10, name: "Idli Sambar", region: "south", regionLabel: "South Indian",
    state: "Tamil Nadu", course: "Breakfast", veg: true,
    emoji: "🍽️",
    img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&auto=format",
    desc: "Soft steamed rice cakes dunked in a tamarind-based vegetable lentil soup (sambar) with coconut chutney. A nutritious South Indian staple.",
    tags: ["Veg", "Steamed", "Healthy"],
    ingredients: ["Rice", "Urad Dal", "Toor Dal", "Tamarind", "Drumstick", "Coconut"]
  },
  {
    id: 11, name: "Kerala Fish Curry", region: "south", regionLabel: "South Indian",
    state: "Kerala", course: "Main Course", veg: false,
    emoji: "🐟",
    img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&auto=format",
    desc: "Fish cooked in a tangy coconut milk-based curry with raw mango and Kudampuli (Gambooge). Bold, fiery and coastal.",
    tags: ["Fish", "Coconut", "Spicy"],
    ingredients: ["Fish", "Coconut Milk", "Kudampuli", "Raw Mango", "Chili", "Curry Leaves"]
  },
  {
    id: 12, name: "Medu Vada", region: "south", regionLabel: "South Indian",
    state: "Tamil Nadu / Karnataka", course: "Breakfast / Snack", veg: true,
    emoji: "🍩",
    img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&auto=format",
    desc: "Crispy, doughnut-shaped fritters made from ground urad dal batter, deep-fried to perfection. Served with sambar and chutney.",
    tags: ["Veg", "Fried", "Crispy"],
    ingredients: ["Urad Dal", "Pepper", "Curry Leaves", "Ginger", "Coconut Chutney"]
  },
  {
    id: 13, name: "Pongal", region: "south", regionLabel: "South Indian",
    state: "Tamil Nadu", course: "Breakfast", veg: true,
    emoji: "🍲",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format",
    desc: "Creamy rice and lentil porridge seasoned with black pepper, cumin, ginger and ghee. A festival food and daily comfort eaten across Tamil Nadu.",
    tags: ["Veg", "Ghee", "Festival"],
    ingredients: ["Rice", "Moong Dal", "Pepper", "Cumin", "Ginger", "Ghee", "Cashews"]
  },
  {
    id: 14, name: "Hyderabadi Haleem", region: "south", regionLabel: "Hyderabadi",
    state: "Telangana", course: "Main Course", veg: false,
    emoji: "🥣",
    img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&auto=format",
    desc: "A slow-cooked porridge of wheat, barley, and mutton with aromatic spices. A Ramadan speciality with a rich, deep umami flavour.",
    tags: ["Mutton", "Slow Cooked", "Ramadan"],
    ingredients: ["Mutton", "Wheat", "Barley", "Fried Onions", "Mint", "Lemon", "Garam Masala"]
  },
  {
    id: 15, name: "Appam", region: "south", regionLabel: "South Indian",
    state: "Kerala", course: "Breakfast", veg: true,
    emoji: "🍳",
    img: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=500&auto=format",
    desc: "Soft lacy rice hoppers with crispy edges and a thick, fluffy centre. Traditionally served with coconut milk stew or egg curry.",
    tags: ["Veg", "Fermented", "Kerala"],
    ingredients: ["Rice", "Coconut Milk", "Yeast", "Sugar"]
  },

  // ---- EAST INDIAN ----
  {
    id: 16, name: "Macher Jhol", region: "east", regionLabel: "East Indian",
    state: "West Bengal", course: "Main Course", veg: false,
    emoji: "🐠",
    img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&auto=format",
    desc: "Delicate Bengali fish curry with turmeric, mustard oil, tomatoes and potatoes. Light, aromatic and an everyday staple in every Bengali household.",
    tags: ["Fish", "Bengali", "Light"],
    ingredients: ["Rohu Fish", "Mustard Oil", "Turmeric", "Tomato", "Potato", "Green Chili"]
  },
  {
    id: 17, name: "Rasgulla", region: "east", regionLabel: "East Indian",
    state: "West Bengal / Odisha", course: "Dessert", veg: true,
    emoji: "⚪",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&auto=format",
    desc: "Soft, spongy cottage cheese balls cooked in light sugar syrup. Light, airy and delicate – one of Bengal's greatest culinary gifts to the world.",
    tags: ["Veg", "Sweet", "Famous"],
    ingredients: ["Chena (Cottage Cheese)", "Sugar Syrup", "Cardamom"]
  },
  {
    id: 18, name: "Litti Chokha", region: "east", regionLabel: "East Indian",
    state: "Bihar", course: "Main Course", veg: true,
    emoji: "🧆",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format",
    desc: "Whole-wheat dough balls stuffed with roasted sattu, baked over coals and served with fire-roasted eggplant and potato mash. Bihar's pride.",
    tags: ["Veg", "Baked", "Traditional"],
    ingredients: ["Whole Wheat", "Sattu", "Mustard Oil", "Eggplant", "Tomato", "Potato"]
  },
  {
    id: 19, name: "Mishti Doi", region: "east", regionLabel: "East Indian",
    state: "West Bengal", course: "Dessert", veg: true,
    emoji: "🍮",
    img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500&auto=format",
    desc: "Sweet yogurt made from caramelised sugar (nolen gur) and reduced milk, set in earthen pots. Creamy, caramel-flavoured and uniquely Bengali.",
    tags: ["Veg", "Sweet", "Yogurt"],
    ingredients: ["Full Fat Milk", "Nolen Gur (Palm Jaggery)", "Yogurt Starter"]
  },
  {
    id: 20, name: "Pitha (Assamese)", region: "east", regionLabel: "East Indian",
    state: "Assam", course: "Snack / Dessert", veg: true,
    emoji: "🥐",
    img: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=500&auto=format",
    desc: "Handmade rice cakes stuffed with sesame, coconut and jaggery. Made during Bihu festival — a symbol of Assamese culture and harvest.",
    tags: ["Veg", "Festival", "Rice"],
    ingredients: ["Rice Flour", "Sesame", "Coconut", "Jaggery"]
  },

  // ---- WEST INDIAN ----
  {
    id: 21, name: "Vada Pav", region: "west", regionLabel: "West Indian",
    state: "Maharashtra", course: "Street Food", veg: true,
    emoji: "🍔",
    img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&auto=format",
    desc: "Mumbai's iconic street burger – a spiced potato fritter (vada) in a soft bread roll (pav) slathered with chutneys. The heartbeat of Mumbai.",
    tags: ["Veg", "Street Food", "Mumbai"],
    ingredients: ["Potato", "Pav", "Besan", "Mustard Seeds", "Green Chutney", "Garlic Chutney"]
  },
  {
    id: 22, name: "Pav Bhaji", region: "west", regionLabel: "West Indian",
    state: "Maharashtra", course: "Street Food / Main", veg: true,
    emoji: "🍲",
    img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&auto=format",
    desc: "A tangy mashed vegetable curry cooked on a flat tava with a mountain of butter, served with toasted pav rolls. Mumbai street magic.",
    tags: ["Veg", "Buttery", "Iconic"],
    ingredients: ["Mixed Vegetables", "Pav", "Butter", "Pav Bhaji Masala", "Tomato", "Onion"]
  },
  {
    id: 23, name: "Dhokla", region: "west", regionLabel: "West Indian",
    state: "Gujarat", course: "Snack / Breakfast", veg: true,
    emoji: "🟡",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format",
    desc: "Soft, spongy, steamed chickpea flour cakes tempered with mustard seeds, curry leaves and green chilies. Gujarat's beloved tangy snack.",
    tags: ["Veg", "Steamed", "Gujarat"],
    ingredients: ["Besan", "Yogurt", "Lemon", "Green Chili", "Mustard Seeds", "Curry Leaves"]
  },
  {
    id: 24, name: "Goan Fish Curry", region: "west", regionLabel: "West Indian",
    state: "Goa", course: "Main Course", veg: false,
    emoji: "🐡",
    img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&auto=format",
    desc: "Fresh fish in a fiery red coconut curry with Kashmiri chilies and kokum. Bold, tannic and tropical — the taste of Goa's coast.",
    tags: ["Fish", "Coconut", "Goa"],
    ingredients: ["Fish", "Coconut", "Kashmiri Chili", "Kokum", "Coriander", "Cumin"]
  },
  {
    id: 25, name: "Thepla", region: "west", regionLabel: "West Indian",
    state: "Gujarat", course: "Breakfast / Snack", veg: true,
    emoji: "🫓",
    img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500&auto=format",
    desc: "Spiced flatbreads made with whole wheat flour, fenugreek leaves and yogurt. A Gujarati travel staple that stays fresh for days!",
    tags: ["Veg", "Flatbread", "Gujarat"],
    ingredients: ["Whole Wheat", "Fenugreek Leaves", "Yogurt", "Turmeric", "Ajwain", "Oil"]
  },
  {
    id: 26, name: "Misal Pav", region: "west", regionLabel: "West Indian",
    state: "Maharashtra", course: "Breakfast / Main", veg: true,
    emoji: "🌶️",
    img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&auto=format",
    desc: "Spicy sprouted moth beans curry topped with crunchy farsan, onions, lemon and served with pav. Kolhapur's fiery breakfast staple.",
    tags: ["Veg", "Spicy", "Maharashtra"],
    ingredients: ["Moth Beans", "Farsan", "Onion", "Tomato", "Pav", "Misal Masala"]
  },

  // ---- STREET FOOD ----
  {
    id: 27, name: "Pani Puri", region: "street", regionLabel: "Street Food",
    state: "Pan-India", course: "Snack", veg: true,
    emoji: "💧",
    img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&auto=format",
    desc: "Hollow crispy puris filled with spiced mashed potato and dunked in chilled tangy mint-tamarind water. India's most loved street snack.",
    tags: ["Veg", "Tangy", "Iconic"],
    ingredients: ["Semolina Puris", "Mint Water", "Tamarind", "Potato", "Chana", "Boondi"]
  },
  {
    id: 28, name: "Samosa", region: "street", regionLabel: "Street Food",
    state: "North India", course: "Snack", veg: true,
    emoji: "🔺",
    img: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=500&auto=format",
    desc: "Golden, triangular fried pastry filled with spiced potatoes and peas. Perhaps the most universally recognised Indian snack.",
    tags: ["Veg", "Fried", "Classic"],
    ingredients: ["Maida", "Potato", "Peas", "Coriander", "Cumin", "Chili"]
  },
  {
    id: 29, name: "Bhel Puri", region: "street", regionLabel: "Street Food",
    state: "Mumbai / Pan-India", course: "Snack", veg: true,
    emoji: "🥗",
    img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500&auto=format",
    desc: "A light, crunchy mixture of puffed rice, sev, onions, tomatoes, coriander and tangy chutneys. Mumbai's signature beach snack.",
    tags: ["Veg", "Crunchy", "Mumbai"],
    ingredients: ["Puffed Rice", "Sev", "Onion", "Tomato", "Tamarind Chutney", "Mint Chutney"]
  },
  {
    id: 30, name: "Kathi Roll", region: "street", regionLabel: "Street Food",
    state: "Kolkata", course: "Snack / Lunch", veg: false,
    emoji: "🌯",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&auto=format",
    desc: "A flaky paratha wrapped around juicy kebab strips, onions and chutney. Born in Kolkata's Nizam restaurant, now loved nationwide.",
    tags: ["Non-Veg", "Wrap", "Kolkata"],
    ingredients: ["Paratha", "Chicken/Mutton", "Onion", "Green Chutney", "Lemon", "Chaat Masala"]
  },
  {
    id: 31, name: "Aloo Tikki", region: "street", regionLabel: "Street Food",
    state: "North India", course: "Snack", veg: true,
    emoji: "🥔",
    img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&auto=format",
    desc: "Crispy pan-fried potato patties topped with chana, yogurt, tamarind chutney and sev. A North Indian chaat staple.",
    tags: ["Veg", "Chaat", "Crispy"],
    ingredients: ["Potato", "Chana", "Yogurt", "Tamarind Chutney", "Sev", "Spices"]
  },
  {
    id: 32, name: "Dahi Puri", region: "street", regionLabel: "Street Food",
    state: "Mumbai", course: "Snack", veg: true,
    emoji: "🫙",
    img: "https://images.unsplash.com/photo-1506368551677-99c96e5e4bbb?w=500&auto=format",
    desc: "Crispy puris topped with mashed potatoes, sweet yogurt, tamarind chutney, and crunchy sev. A refreshing Mumbai chaat classic.",
    tags: ["Veg", "Cool", "Yogurt"],
    ingredients: ["Puris", "Yogurt", "Potato", "Chana", "Tamarind Chutney", "Sev"]
  },

  // ---- DESSERTS ----
  {
    id: 33, name: "Gulab Jamun", region: "dessert", regionLabel: "Dessert",
    state: "Pan-India", course: "Dessert", veg: true,
    emoji: "🟤",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&auto=format",
    desc: "Soft, spongy fried milk-solid dumplings soaked in rose-cardamom sugar syrup. India's most loved mithai — served at every celebration.",
    tags: ["Veg", "Sweet", "Festival"],
    ingredients: ["Khoya", "Maida", "Sugar Syrup", "Rose Water", "Cardamom"]
  },
  {
    id: 34, name: "Jalebi", region: "dessert", regionLabel: "Dessert",
    state: "Pan-India", course: "Dessert / Breakfast", veg: true,
    emoji: "🌀",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&auto=format",
    desc: "Crispy spiral fritters made from fermented batter, dipped in saffron sugar syrup. Best eaten hot, with rabri or curd.",
    tags: ["Veg", "Crispy", "Syrupy"],
    ingredients: ["Maida", "Yogurt", "Sugar Syrup", "Saffron", "Ghee"]
  },
  {
    id: 35, name: "Kheer", region: "dessert", regionLabel: "Dessert",
    state: "Pan-India", course: "Dessert", veg: true,
    emoji: "🍚",
    img: "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?w=500&auto=format",
    desc: "Creamy rice pudding slow-cooked in whole milk with sugar, cardamom, saffron and topped with almonds and pistachios. A timeless classic.",
    tags: ["Veg", "Creamy", "Festive"],
    ingredients: ["Rice", "Full Fat Milk", "Sugar", "Cardamom", "Saffron", "Nuts"]
  },
  {
    id: 36, name: "Gajar ka Halwa", region: "dessert", regionLabel: "Dessert",
    state: "Punjab / North India", course: "Dessert", veg: true,
    emoji: "🥕",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&auto=format",
    desc: "Grated carrots slow-cooked in milk, ghee, and sugar until jammy and rich. A winter speciality best served warm with a scoop of ice cream.",
    tags: ["Veg", "Winter", "Warm"],
    ingredients: ["Red Carrots", "Milk", "Sugar", "Ghee", "Cardamom", "Khoya", "Nuts"]
  },
  {
    id: 37, name: "Motichoor Ladoo", region: "dessert", regionLabel: "Dessert",
    state: "Rajasthan / North India", course: "Dessert", veg: true,
    emoji: "🟠",
    img: "https://images.unsplash.com/photo-1566843972142-a7fcb70de55a?w=500&auto=format",
    desc: "Small, melt-in-mouth boondi balls bound together with saffron sugar syrup into a round ladoo. Made for all auspicious occasions.",
    tags: ["Veg", "Festive", "Sweet"],
    ingredients: ["Besan", "Sugar Syrup", "Ghee", "Cardamom", "Saffron", "Pistachios"]
  },
  {
    id: 38, name: "Kulfi", region: "dessert", regionLabel: "Dessert",
    state: "Pan-India", course: "Dessert", veg: true,
    emoji: "🍦",
    img: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=500&auto=format",
    desc: "India's original frozen dessert — dense, slow-frozen milk with cardamom, saffron, and pistachios. Creamier and richer than ice cream.",
    tags: ["Veg", "Frozen", "Creamy"],
    ingredients: ["Full Fat Milk", "Sugar", "Cardamom", "Saffron", "Pistachios", "Rose Water"]
  },

  // ---- BEVERAGES ----
  {
    id: 39, name: "Masala Chai", region: "beverage", regionLabel: "Beverage",
    state: "Pan-India", course: "Beverage", veg: true,
    emoji: "☕",
    img: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?w=500&auto=format",
    desc: "Milky black tea brewed with ginger, cardamom, cloves, cinnamon and black pepper. The soul of India in a cup, shared from Kashmir to Kanyakumari.",
    tags: ["Hot", "Aromatic", "Daily"],
    ingredients: ["Black Tea", "Milk", "Ginger", "Cardamom", "Cloves", "Cinnamon", "Black Pepper"]
  },
  {
    id: 40, name: "Mango Lassi", region: "beverage", regionLabel: "Beverage",
    state: "Punjab / Pan-India", course: "Beverage", veg: true,
    emoji: "🥭",
    img: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=500&auto=format",
    desc: "Thick, creamy blended yogurt drink with Alphonso mango pulp, cardamom and a pinch of saffron. Sweet, cooling and addictive.",
    tags: ["Cold", "Sweet", "Summer"],
    ingredients: ["Yogurt", "Mango Pulp", "Sugar", "Cardamom", "Saffron"]
  },
  {
    id: 41, name: "Filter Coffee", region: "beverage", regionLabel: "Beverage",
    state: "Tamil Nadu / Karnataka", course: "Beverage", veg: true,
    emoji: "☕",
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&auto=format",
    desc: "Strong chicory-blended coffee, brewed through a brass filter and served foamy by pouring between tumbler and dabarah. South India's ritual.",
    tags: ["Hot", "Strong", "South Indian"],
    ingredients: ["Robusta Coffee", "Chicory", "Boiled Milk", "Sugar"]
  },
  {
    id: 42, name: "Thandai", region: "beverage", regionLabel: "Beverage",
    state: "Rajasthan / Uttar Pradesh", course: "Beverage", veg: true,
    emoji: "🥛",
    img: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=500&auto=format",
    desc: "A chilled, spiced milk drink made with almonds, rose petals, cardamom, fennel and saffron. The drink of Holi and Shivratri.",
    tags: ["Cold", "Festival", "Spiced"],
    ingredients: ["Milk", "Almonds", "Rose Petals", "Cardamom", "Fennel", "Saffron", "Pepper"]
  },
  {
    id: 43, name: "Nimbu Pani", region: "beverage", regionLabel: "Beverage",
    state: "Pan-India", course: "Beverage", veg: true,
    emoji: "🍋",
    img: "https://images.unsplash.com/photo-1523371054106-bbf80586c54b?w=500&auto=format",
    desc: "India's beloved lemonade — fresh lime juice with black salt, cumin, mint and cold water. The simplest and most refreshing summer drink.",
    tags: ["Cold", "Refreshing", "Summer"],
    ingredients: ["Lime Juice", "Water", "Black Salt", "Cumin", "Mint", "Sugar"]
  },
  {
    id: 44, name: "Aam Panna", region: "beverage", regionLabel: "Beverage",
    state: "Pan-India", course: "Beverage", veg: true,
    emoji: "🟢",
    img: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=500&auto=format",
    desc: "Raw mango drink blended with mint, black salt, roasted cumin and jaggery. Cooling, tangy and the best summer heat-buster.",
    tags: ["Cold", "Tangy", "Summer"],
    ingredients: ["Raw Mango", "Mint", "Jaggery", "Black Salt", "Roasted Cumin"]
  }
];

// ---- DOM READY ----
document.addEventListener('DOMContentLoaded', () => {
  renderCards(foods);
  setupFilters();
  setupSearch();
  setupNavScroll();
  setupModal();
  setupCuisineBands();
  animateStats();
});

// ---- RENDER CARDS ----
function renderCards(data) {
  const grid = document.getElementById('foodGrid');
  const noResults = document.getElementById('noResults');
  grid.innerHTML = '';

  if (data.length === 0) {
    noResults.style.display = 'flex';
    noResults.style.flexDirection = 'column';
    noResults.style.alignItems = 'center';
    return;
  }
  noResults.style.display = 'none';

  data.forEach((food, i) => {
    const card = document.createElement('div');
    card.className = 'food-card';
    card.dataset.id = food.id;
    card.style.animationDelay = `${i * 0.04}s`;

    const vegClass = food.veg ? 'veg' : 'non-veg';
    const imgHtml = `<img src="${food.img}" alt="${food.name}" loading="lazy"
      onerror="this.parentElement.innerHTML='<div class=\\'card-emoji-placeholder\\'>${food.emoji}</div>'" />`;
    const tagsHtml = food.tags.map(t => `<span class="tag">${t}</span>`).join('');

    card.innerHTML = `
      <div class="card-img-wrap">
        ${imgHtml}
        <div class="card-veg-badge ${vegClass}"></div>
        <span class="card-region-tag">${food.regionLabel}</span>
      </div>
      <div class="card-body">
        <h3>${food.name}</h3>
        <p>${food.desc}</p>
        <div class="card-tags">${tagsHtml}</div>
      </div>`;
    card.addEventListener('click', () => openModal(food));
    grid.appendChild(card);
  });
}

// ---- FILTER LOGIC ----
let currentFilter = 'all';
let currentSearch = '';

function filterFoods(regionFilter) {
  currentFilter = regionFilter;
  // sync pills
  document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
  const pill = document.getElementById(`pill-${regionFilter}`);
  if (pill) pill.classList.add('active');
  // sync cuisine cards
  document.querySelectorAll('.cuisine-card').forEach(c => c.classList.remove('active'));
  const band = document.querySelector(`.cuisine-card[data-filter="${regionFilter}"]`);
  if (band) band.classList.add('active');
  applyFilters();
  document.getElementById('explore').scrollIntoView({ behavior: 'smooth' });
}

function applyFilters() {
  let result = foods;
  if (currentFilter !== 'all') {
    result = result.filter(f => f.region === currentFilter);
  }
  if (currentSearch.trim() !== '') {
    const q = currentSearch.toLowerCase();
    result = result.filter(f =>
      f.name.toLowerCase().includes(q) ||
      f.desc.toLowerCase().includes(q) ||
      f.tags.some(t => t.toLowerCase().includes(q)) ||
      f.state.toLowerCase().includes(q) ||
      f.regionLabel.toLowerCase().includes(q) ||
      f.ingredients.some(i => i.toLowerCase().includes(q))
    );
  }
  renderCards(result);
}

function setupFilters() {
  document.querySelectorAll('.pill').forEach(pill => {
    pill.addEventListener('click', () => {
      filterFoods(pill.dataset.filter);
    });
  });
}

function setupCuisineBands() {
  document.querySelectorAll('.cuisine-card').forEach(card => {
    card.addEventListener('click', () => filterFoods(card.dataset.filter));
  });
}

// ---- SEARCH ----
function setupSearch() {
  const input = document.getElementById('searchInput');
  const btn = document.getElementById('searchBtn');

  function doSearch() {
    currentSearch = input.value;
    applyFilters();
    document.getElementById('explore').scrollIntoView({ behavior: 'smooth' });
  }

  btn.addEventListener('click', doSearch);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') doSearch(); });
  input.addEventListener('input', () => {
    currentSearch = input.value;
    applyFilters();
  });
}

// ---- NAVBAR SCROLL ----
function setupNavScroll() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  }, { passive: true });
}

// ---- ANIMATE STATS ----
function animateStats() {
  const statNums = document.querySelectorAll('.stat-num');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target, 10);
        let current = 0;
        const step = Math.ceil(target / 40);
        const timer = setInterval(() => {
          current = Math.min(current + step, target);
          el.textContent = current + (target >= 100 ? '+' : '');
          if (current >= target) clearInterval(timer);
        }, 40);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  statNums.forEach(el => observer.observe(el));
}

// ---- MODAL ----
function setupModal() {
  const overlay = document.getElementById('modalOverlay');
  const closeBtn = document.getElementById('modalClose');
  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

function openModal(food) {
  const overlay = document.getElementById('modalOverlay');
  const imgEl = document.getElementById('modalImg');
  const vegLabel = food.veg ? '🟢 Vegetarian' : '🔴 Non-Vegetarian';

  // Image
  imgEl.src = food.img;
  imgEl.alt = food.name;
  imgEl.onerror = function() {
    imgEl.parentElement.innerHTML = `<div class="modal-emoji-placeholder">${food.emoji}</div>`;
  };

  document.getElementById('modalTag').textContent = food.regionLabel;
  document.getElementById('modalRegion').textContent = food.state;
  document.getElementById('modalTitle').textContent = food.name;
  document.getElementById('modalDesc').textContent = food.desc;
  document.getElementById('modalVeg').textContent = vegLabel;
  document.getElementById('modalCourse').textContent = `🍽️ ${food.course}`;
  document.getElementById('modalState').textContent = `📍 ${food.state}`;

  const ingredientChips = food.ingredients.map(i =>
    `<span class="ingredient-chip">${i}</span>`
  ).join('');
  document.getElementById('modalIngredients').innerHTML = `
    <h4>Key Ingredients</h4>
    <div class="ingredient-chips">${ingredientChips}</div>`;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
