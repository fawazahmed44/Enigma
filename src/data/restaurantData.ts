export interface MenuItem {
  name: string;
  price: string;
  description: string;
  dietary?: string[];
  course?: string;
  highlight?: boolean;
}

export interface MenuSection {
  category: string;
  items: MenuItem[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Restaurant' | 'Dining' | 'Food' | 'Terrace' | 'Atmosphere';
  imageUrl: string;
  caption: string;
  aspect?: string;
}

export const RESTAURANT_INFO = {
  name: "Enigma",
  subheading: "Taste of Persia",
  hotel: "Palazzo Versace Dubai",
  hotelTagline: "The Imperial Luxury of the Versace Lifestyle",
  story: "Enigma restaurant’s culinary tale continues to evolve as it features the ‘Taste of Persia’.",
  description: "Step into Enigma Persian Restaurant Dubai and embark on a culinary adventure that will tantalize your taste buds and transport you to the rich Flavors of Iran. From aromatic saffron-infused rice to succulent kebabs, our menu reflects the essence of Persian cuisine.",
  extendedStory: "Combining authentic Persian ingredients with modern culinary techniques, Enigma reinterprets ancient royal recipes for an unforgettable contemporary fine dining experience overlooking the central pool and historic Dubai Creek.",
  
  location: {
    venue: "Ground floor, West Wing",
    hotel: "Palazzo Versace Dubai",
    address: "Jaddaf Waterfront - Al Jaddaf",
    city: "Dubai",
    country: "United Arab Emirates",
    fullAddress: "Ground floor, West Wing, Palazzo Versace Dubai, Jaddaf Waterfront - Al Jaddaf, Dubai, United Arab Emirates",
    googleMapsQuery: "Enigma+Palazzo+Versace+Dubai"
  },
  
  seating: {
    indoor: 60,
    outdoor: 36,
    indoorDescription: "Opulent indoor salon featuring neoclassical Italian Versace architecture, imperial chandeliers, and marble finishing.",
    outdoorDescription: "Al fresco scenic terrace with direct panoramic vistas over the Central Mosaic Pool and Dubai Creek."
  },
  
  dressCode: {
    standard: "Smart elegant or traditional, local attire",
    note: "Gentlemen are requested to wear tailored trousers or smart jeans with collared shirts and closed shoes. Beachwear and sportswear are not permitted."
  },
  
  hours: {
    lunch: "Closed for lunch (Except Golden Journey private lunch bookings from 12:00 PM – 4:00 PM)",
    dinner: "Open daily for dinner: 6:00 PM – 11:00 PM",
    dinnerLastOrder: "10:30 PM",
    shisha: "Tuesday to Sunday on the outdoor terrace from 1:00 PM onwards",
    goldenJourneyHours: {
      lunch: "Daily lunch: 12:00 PM – 4:00 PM (Last order: 3:30 PM)",
      dinner: "Daily dinner: 6:00 PM – 11:00 PM (Last order: 10:30 PM)"
    }
  },
  
  contact: {
    phone: "+971 4 556 8888",
    email: "info@palazzoversace.ae",
    reservationEmail: "enigma@palazzoversace.ae",
    instagram: "@enigmadxb",
    instagramUrl: "https://www.instagram.com/enigmadxb",
    palazzoInstagram: "@palazzoversacedubai",
    bookingUrl: "https://www.sevenrooms.com/reservations/enigmadubai"
  },
  
  pricingPolicy: "All prices are in AED and inclusive of 7% Municipality Fee, 10% Service Charge and 5% VAT."
};

export const GOLDEN_JOURNEY_DATA = {
  title: "The Golden Journey",
  subtitle: "An Imperial 4-Course 24-Karat Gold Culinary Odyssey",
  description: "The Golden Journey is a 4-course set menu for 2 people, sharing style, incorporating touches of 24-karat gold into Enigma’s signature dishes.",
  price: "AED 1,500",
  serves: "for 2 people",
  timings: {
    lunch: "Daily lunch: 12:00 PM – 4:00 PM (Last order: 3:30 PM)",
    dinner: "Daily dinner: 6:00 PM – 11:00 PM (Last order: 10:30 PM)"
  },
  courses: [
    {
      number: "01",
      category: "START",
      title: "Traditional Persian Appetizer",
      name: "Sabzi Khordan",
      description: "A ceremonial garden platter of fresh fragrant Persian herbs, walnuts, radishes, feta and warm traditional oven-baked flatbread.",
      goldDetail: "Accented with pure edible 24k gold dust.",
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1200&auto=format&fit=crop"
    },
    {
      number: "02",
      category: "COLD STARTERS",
      title: "Royal Cold Delicacies",
      items: [
        {
          name: "Masto Laboo",
          description: "Fresh artisanal strained yogurt infused with red beetroot foam, feathered with delicate 24-karat gold leaves."
        },
        {
          name: "Salad Chupan",
          description: "Compressed sweet watermelon, watercress, candied olives, roasted walnuts, and homemade Persian sheep's cheese adorned with gold leaves."
        }
      ],
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop"
    },
    {
      number: "03",
      category: "WARM STARTERS",
      title: "Warm Imperial Entrées",
      items: [
        {
          name: "Nargesi",
          description: "Slow-melted baby spinach, silky confit potatoes, and poached golden quail eggs, sumptuously topped with 10 grams of prized Persian caviar."
        },
        {
          name: "Tachin Rice & Chicken Lollipops",
          description: "Golden crispy saffron rice cake paired with chicken lollipops, tangy sweet barberry (zereshk) chutney, and sautéed spiced spinach."
        }
      ],
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop"
    },
    {
      number: "04",
      category: "MAIN COURSE",
      title: "The Charcoal Climax",
      items: [
        {
          name: "Kabab Sultani",
          description: "Prime tender lamb loin skewer gently grilled over natural charcoal embers and meticulously hand-wrapped in luminous 24-karat gold leaves.",
          highlight: "Signature Masterpiece"
        }
      ],
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop"
    },
    {
      number: "05",
      category: "DESSERT",
      title: "The Persian Finale",
      items: [
        {
          name: "Orange Blossom Tart",
          description: "Delicate fragrant citrus tart served with ethereal golden spun clouds, wild hand-picked berries, and rose water reduction."
        }
      ],
      image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=1200&auto=format&fit=crop"
    }
  ]
};

export const MOROCCAN_POPUP_DATA = {
  title: "Moroccan À La Carte Pop-Up Menu",
  headline: "Heritage Meets Contemporary Haute Cuisine",
  description: "At Enigma, Moroccan cuisine unfolds as an art of flavour and storytelling. Curated by our renowned chefs, this menu celebrates heritage with a modern expression. Every dish is crafted with precision, elegance, and a touch of intrigue.",
  pricingNote: "All prices are inclusive of 7% Municipality Fee, 10% Service Charge and 5% VAT.",
  categories: [
    {
      category: "COLD AND HOT STARTERS",
      items: [
        {
          name: "Zaalouk",
          price: "AED 80",
          description: "A smoky Moroccan dip made with tomatoes, eggplant, garlic, olive oil, and spices. Served with chili and green oil.",
          dietary: ["Vegetarian", "Gluten-Free"]
        },
        {
          name: "Maakouda",
          price: "AED 85",
          description: "Crispy fried potato patties seasoned with garlic, herbs, and spices. Served as a snack or appetizer.",
          dietary: ["Vegetarian"]
        },
        {
          name: "Felfel Mahchi",
          price: "AED 110",
          description: "Bell peppers stuffed with a savory mix of rice, herbs, and spices. Baked until tender and flavourful, served with yogurt.",
          dietary: ["Vegetarian"]
        }
      ]
    },
    {
      category: "SOUP",
      items: [
        {
          name: "Harira Soup",
          price: "AED 60",
          description: "A traditional Moroccan soup made with tomatoes, lentils, chickpeas, beef, herbs, and spices.",
          dietary: ["Signature"]
        }
      ]
    },
    {
      category: "MAIN COURSE",
      items: [
        {
          name: "Moroccan Chicken Tagine",
          price: "AED 150",
          description: "Baby chicken, onions, garlic, olive oil, olives, spices and herbs, slowly cooked in a rich sauce.",
          dietary: ["Classic Tagine"]
        },
        {
          name: "Couscous with Lamb",
          price: "AED 165",
          description: "Steamed couscous topped with tender lamb, vegetables and Moroccan spices.",
          dietary: ["Traditional Feast"]
        },
        {
          name: "Seafood Chermoula",
          price: "AED 195",
          description: "Prawns and calamari marinated and cooked in chermoula sauce with garlic, fresh herbs, spices, lemon, 10-gram Oscietratra caviar and olive oil.",
          dietary: ["Prestige", "Caviar"]
        }
      ]
    },
    {
      category: "DESSERT",
      items: [
        {
          name: "Strawberry Kunafa Keeka",
          price: "AED 80",
          description: "Strawberry confit with crispy ashta kunafa and orange blossom sauce.",
          dietary: ["Chef Selection"]
        }
      ]
    }
  ]
};

export const TASTE_OF_PERSIA_HIGHLIGHTS: MenuItem[] = [
  {
    name: "Kabab Sultani",
    price: "AED 280",
    description: "Tender lamb loin and saffron-marinated ground minced lamb skewer char-grilled over natural coals, served with saffron basmati rice.",
    highlight: true,
    course: "Persian Grill"
  },
  {
    name: "Zereshk Polo Ba Morgh",
    price: "AED 210",
    description: "Slow-braised corn-fed chicken infused with Persian saffron sauce, topped with ruby barberries and fragrant basmati rice.",
    highlight: true,
    course: "Signature Rice"
  },
  {
    name: "Ghormeh Sabzi",
    price: "AED 195",
    description: "Quintessential Persian herb stew slowly simmered with tender prime beef cubes, red kidney beans, and sundried Persian black limes.",
    course: "Slow Cooked Stew"
  },
  {
    name: "Sabzi Khordan Sharing Platter",
    price: "AED 115",
    description: "Signature cold garden starter of tarragon, mint, radishes, spring onions, creamy feta, and freshly baked lavash from our tandoor.",
    course: "Appetizer"
  },
  {
    name: "Kashk-e Bademjan",
    price: "AED 95",
    description: "Charred smoked eggplant whipped with whey (kashk), caramelized crispy mint, and golden fried onions.",
    course: "Warm Mezze"
  },
  {
    name: "Saffron & Rosewater Bastani",
    price: "AED 75",
    description: "Traditional Persian saffron ice cream studded with frozen clotted cream chunks, pistachios, and crisp wafer petals.",
    course: "Dessert"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Versace Neoclassical Interior",
    category: "Restaurant",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop",
    caption: "The opulent dining salon situated in the West Wing of Palazzo Versace Dubai, hosting up to 60 discerning guests."
  },
  {
    id: "g2",
    title: "24-Karat Gold Kabab Sultani",
    category: "Food",
    imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop",
    caption: "The centerpiece of The Golden Journey: charcoal-grilled prime lamb loin enveloped in pure edible 24k gold leaf."
  },
  {
    id: "g3",
    title: "Dubai Creek Waterfront Terrace",
    category: "Terrace",
    imageUrl: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop",
    caption: "Outdoor al fresco seating for 36 guests offering sweeping panoramic views across the Central Pool and Dubai Creek."
  },
  {
    id: "g4",
    title: "Masto Laboo with Beetroot Foam",
    category: "Food",
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1600&auto=format&fit=crop",
    caption: "Fresh artisanal yogurt with vibrant beetroot foam and floating 24-karat gold flakes."
  },
  {
    id: "g5",
    title: "Evening Candlelit Atmosphere",
    category: "Atmosphere",
    imageUrl: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1600&auto=format&fit=crop",
    caption: "Intimate, warm illumination setting the stage for romantic dinners and refined Persian hospitality."
  },
  {
    id: "g6",
    title: "Central Pool at Sunset",
    category: "Terrace",
    imageUrl: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1600&auto=format&fit=crop",
    caption: "Palazzo Versace's signature mosaic pool reflection as evening descends over Jaddaf Waterfront."
  },
  {
    id: "g7",
    title: "Moroccan Tagine Presentation",
    category: "Food",
    imageUrl: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=1600&auto=format&fit=crop",
    caption: "Handcrafted earthenware tagine gently steaming with baby chicken, aromatic spices, and green olives."
  },
  {
    id: "g8",
    title: "Fine Persian Culinary Artistry",
    category: "Dining",
    imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1600&auto=format&fit=crop",
    caption: "Contemporary table service where centuries of Persian banquet traditions are presented with architectural finesse."
  },
  {
    id: "g9",
    title: "Palazzo Versace Grand Architecture",
    category: "Restaurant",
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop",
    caption: "Neoclassical European palace styling interwoven with Arabic luxury on the banks of Dubai Creek."
  }
];

export interface KebabItem {
  name: string;
  persianName: string;
  price: string;
  cut: string;
  charcoalMethod: string;
  description: string;
  saffronGrade: string;
  pairingNote: string;
  isSignature?: boolean;
  isSharing?: boolean;
}

export const ENIGMA_KEBABS_DATA: {
  title: string;
  subtitle: string;
  philosophy: string;
  charcoalProcess: {
    title: string;
    description: string;
  }[];
  kebabs: KebabItem[];
} = {
  title: "Artisanal Persian Kebabs",
  subtitle: "Master Charcoal Craftsmanship & Imperial Marinades",
  philosophy: "At Enigma, the Persian kebab is elevated to haute cuisine. We source ethically raised Australian Wagyu beef, milk-fed baby lamb, and corn-fed spring poultry, marinated for forty-eight hours in saffron from Khorasan, wild sumac, cold-pressed olive oil, and sweet Persian onions, before skewering on custom steel flat skewers and searing over glowing hardwood coals.",
  charcoalProcess: [
    {
      title: "Hardwood Citrus & Oak Embers",
      description: "Charcoal sourced from aged oak and citrus wood generates clean, radiant heat without acrid smoke, locking in juices while imparting an ethereal caramelization."
    },
    {
      title: "The Saffron Glazing Ritual",
      description: "During the final moments over the embers, each skewer is brushed with clarified Persian butter whipped with Super Negin saffron threads and sour lime juice."
    },
    {
      title: "Flat Sword Skewers (Sheesh)",
      description: "Wide surgical-grade stainless steel skewers conduct intense internal heat directly through the meat center while the surface chars, creating unmatched succulence."
    },
    {
      title: "Smoky Sumac & Scorched Tomatoes",
      description: "Every kebab is paired with flame-charred vine tomatoes, fresh charred hot green chilies, wild dried sumac berries, and fresh lavash bread to absorb the juices."
    }
  ],
  kebabs: [
    {
      name: "Kabab Sultani",
      persianName: "کباب سلطانی",
      price: "AED 280",
      cut: "Prime Lamb Tenderloin & Minced Lamb Flank",
      charcoalMethod: "Dual-temperature flame searing over white oak embers",
      description: "The crown jewel of Persian grilling: a harmonious union of tender butterflied lamb tenderloin (Barg) alongside a delicately spiced minced lamb skewer (Koobideh), served over aromatic saffron rice.",
      saffronGrade: "Super Negin Khorasan",
      pairingNote: "Pairs with Shiraz Reserve or Doogh infused with dried rose petals.",
      isSignature: true
    },
    {
      name: "Kabab Koobideh",
      persianName: "کباب کوبیده",
      price: "AED 185",
      cut: "Double-ground Lamb Shoulder & Beef Rib Fat",
      charcoalMethod: "Rapid rotational grilling to preserve emulsified juices",
      description: "Two succulent skewers of finely ground milk-fed lamb kneaded with grated Persian sweet onions, black pepper, and saffron water, flame-kissed to tender perfection.",
      saffronGrade: "Khorasan Royal",
      pairingNote: "Complemented by flame-scorched plum tomatoes and charred Persian peppers.",
      isSignature: true
    },
    {
      name: "Kabab Barg",
      persianName: "کباب برگ",
      price: "AED 240",
      cut: "Tenderized Milk-fed Lamb Loin Strips",
      charcoalMethod: "High-intensity quick flash searing on wide sword skewers",
      description: "Ribbons of prime milk-fed lamb loin, tenderized by hand with the back of the chef's blade, bathed in onion nectar and saffron, melting softly upon the palate.",
      saffronGrade: "Super Negin Saffron",
      pairingNote: "Exquisite with golden saffron basmati and crispy Persian potato Tahdig.",
      isSignature: false
    },
    {
      name: "Kabab Chenjeh",
      persianName: "کباب چنجه",
      price: "AED 230",
      cut: "Prime Tender Lamb Loin Cubes",
      charcoalMethod: "Slow charcoal rotation over glowing citrus charcoal",
      description: "Generous cubes of prime lamb loin marinated for 48 hours in Persian yogurt, crushed garlic, wild sumac, and cold-pressed extra virgin olive oil.",
      saffronGrade: "Sargol Persian Saffron",
      pairingNote: "Best enjoyed with Sabzi Khordan and fresh oven-baked lavash bread.",
      isSignature: false
    },
    {
      name: "Joojeh Kabab ba Zaferan",
      persianName: "جوجه کباب با زعفران",
      price: "AED 190",
      cut: "Corn-Fed Baby Chicken Breast & Thigh",
      charcoalMethod: "Crisped exterior with succulent tender core",
      description: "Tender boneless corn-fed baby chicken steeped in freshly squeezed lime juice, Greek-style strained yogurt, Spanish onions, and generous Persian saffron.",
      saffronGrade: "Imperial Khorasan",
      pairingNote: "Served with fragrant barberry rice (Zereshk Polo) and clarified saffron butter.",
      isSignature: true
    },
    {
      name: "Shishlik Lamb Chops",
      persianName: "شیشلیک شاندیز",
      price: "AED 295",
      cut: "French-trimmed Baby Lamb Rack Chops",
      charcoalMethod: "Direct hardwood searing with rosemary and onion glaze",
      description: "Inspired by the famed Shandiz region: four thick bone-in lamb cutlets marinated in pomegranate molasses, saffron, and mountain thyme, grilled until caramelized.",
      saffronGrade: "Super Negin",
      pairingNote: "Magnificent alongside Persian herb stew and charred shallots.",
      isSignature: true
    },
    {
      name: "Kabab Bakhtiari",
      persianName: "کباب بختیاری",
      price: "AED 220",
      cut: "Alternating Lamb Tenderloin & Saffron Chicken",
      charcoalMethod: "Balanced charcoal basting with saffron lemon butter",
      description: "Named after the nomadic tribes of southwest Iran: alternating morsels of saffron-infused chicken and tender lamb fillet skewered on a single grand spear.",
      saffronGrade: "Sargol Selection",
      pairingNote: "Served with Persian sumac onions and fresh garden tarragon.",
      isSignature: false
    },
    {
      name: "Mahi Kabab (Wild Sea Bass)",
      persianName: "ماهی کباب زعفرانی",
      price: "AED 245",
      cut: "Line-caught Wild Sea Bass Fillet",
      charcoalMethod: "Gentle charcoal smoke on cedar-infused iron grates",
      description: "Delicate wild sea bass medallion rubbed with Persian dried lime (limoo amani), turmeric, sweet garlic, and saffron glaze, charred lightly over charcoal.",
      saffronGrade: "Super Negin Saffron",
      pairingNote: "Accompanied by dill rice (Baghali Polo) and tangy Persian barberries.",
      isSignature: false
    },
    {
      name: "Grand Royal Persian Mixed Grill",
      persianName: "سینی کباب ملوکانه",
      price: "AED 580",
      cut: "Chef's Feast of Sultani, Joojeh, Shishlik & Chenjeh",
      charcoalMethod: "Multi-tiered charcoal presentation on heated copper brazier",
      description: "An imperial feast designed for 2 to 4 guests. Features generous portions of Kabab Koobideh, Kabab Barg, Joojeh Kabab, and Shishlik chops served over three varieties of Iranian basmati rice with Tahdig.",
      saffronGrade: "Triple Royal Saffron Selection",
      pairingNote: "Includes complimentary Sabzi Khordan and warm oven-baked flatbreads.",
      isSharing: true,
      isSignature: true
    }
  ]
};

export interface PalazzoVenue {
  id: string;
  name: string;
  tagline: string;
  cuisine: string;
  vibe: string;
  location: string;
  description: string;
  features: string[];
  hours: string;
  dressCode: string;
  imageUrl: string;
  link: string;
}

export const PALAZZO_DINING_VENUES: PalazzoVenue[] = [
  {
    id: "enigma",
    name: "Enigma",
    tagline: "Taste of Persia & Imperial Dining",
    cuisine: "Persian Fine Dining & Charcoal Grills",
    vibe: "Glamorous, Intimate, Palatial",
    location: "Ground Floor, West Wing",
    description: "The home of refined and reimagined Persian cuisine. Enigma’s culinary tale evolves through the 'Taste of Persia', featuring 24-karat gold dishes, the Moroccan pop-up, and outdoor creek terrace dining.",
    features: ["24k Gold Journey Menu", "Charcoal Persian Kebabs", "Al Fresco Creek Terrace", "Artisanal Shisha (1 PM+)"],
    hours: "Dinner: 6:00 PM – 11:00 PM daily (Terrace Shisha from 1:00 PM, Tue-Sun)",
    dressCode: "Smart elegant or traditional local attire",
    imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    link: "/taste-of-persia"
  },
  {
    id: "mosaico",
    name: "Mosaico",
    tagline: "The Heart of Palazzo Versace",
    cuisine: "All-day Lounge, High Tea & Patisserie",
    vibe: "Opulent, High Fashion, Lively",
    location: "Lobby Level, Central Court",
    description: "Residing in an opulent setting at the very heart of the hotel, Mosaico is a personal reflection of Gianni Versace’s ornate compositions. Famous for high tea, the signature 24k Golden Cappuccino, and live evening opera performances.",
    features: ["Signature Golden Cappuccino", "Versace Afternoon Tea", "Live Classical & Opera Performances", "Floor-to-Ceiling Creek Views"],
    hours: "Daily: 8:00 AM – 11:30 PM (High Tea: 10:30 AM – 7:00 PM)",
    dressCode: "Smart casual",
    imageUrl: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop",
    link: "/restaurants-and-bars"
  },
  {
    id: "giardino",
    name: "Giardino",
    tagline: "Fashion-Inspired International Haute Cuisine",
    cuisine: "International Luxury Buffet & Friday Brunch",
    vibe: "Vibrant, Tropical Versace Glamour",
    location: "Ground Floor, East Wing",
    description: "Presents marble 'terrazzo' flooring, ionic columns, and wallpaper motifs inspired by the iconic Versace jungle collection. Host to Dubai's premier weekend seafood and international brunches with live cooking stations.",
    features: ["Versace Jungle Wallpaper Motif", "World-Class Live Cooking Stations", "Award-Winning Seafood Brunches", "Outdoor Poolside Seating"],
    hours: "Breakfast: 6:30 AM – 11:00 AM | Dinner: 6:30 PM – 11:00 PM",
    dressCode: "Smart casual",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    link: "/restaurants-and-bars"
  },
  {
    id: "vanitas",
    name: "Vanitas",
    tagline: "Signature Italian Culinary Romance",
    cuisine: "Classic & Modern Italian Fine Dining",
    vibe: "Romantic, Intimate, Sophisticated",
    location: "Ground Floor, East Wing",
    description: "The charming and elegant interiors of Palazzo Versace’s signature Italian restaurant, set against the tranquil Dubai Creek, acts as the backdrop for romantic rendezvous and authentic Italian classics.",
    features: ["Handcrafted Artisan Pastas", "Authentic White Truffle Seasons", "Waterfront Creek Panorama", "Private Wine Cellar"],
    hours: "Lunch: 12:30 PM – 3:30 PM | Dinner: 7:00 PM – 11:00 PM",
    dressCode: "Smart elegant",
    imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
    link: "/restaurants-and-bars"
  },
  {
    id: "gazebo",
    name: "Gazebo",
    tagline: "Mediterranean Breeze & Shisha Lounge",
    cuisine: "Mediterranean Mezze & Shisha",
    vibe: "Relaxed, Al Fresco, Breezy",
    location: "East Wing, Facing La Piscina",
    description: "Nestled in the east wing facing the crystal blue waters of La Piscina, Gazebo is an idyllic open-air lounge where guests can sample Moroccan and Mediterranean bites accompanied by master-crafted shisha.",
    features: ["Open-air Poolside Setting", "Mediterranean Cold & Hot Mezze", "Signature Shisha Blends", "Cocktail & Mocktail Lounging"],
    hours: "Daily: 3:00 PM – 1:00 AM",
    dressCode: "Casual chic",
    imageUrl: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop",
    link: "/restaurants-and-bars"
  },
  {
    id: "q-s-bar",
    name: "Q's Bar and Lounge",
    tagline: "Quincy Jones' Living Room",
    cuisine: "Cocktails, Cigars & Gourmet Small Plates",
    vibe: "Sultry, Jazz, World-Class Live Music",
    location: "Lobby Level, West Wing",
    description: "Curated by legendary music icon Quincy Jones, Q's Bar and Lounge has established itself as Dubai's most prestigious live music destination, featuring handpicked international vocalists, plush velvet seating, and rare vintage spirits.",
    features: ["Handpicked Quincy Jones Resident Artists", "Acoustically Perfect Intimate Salon", "Rare Whiskies & Cigars", "Late-Night Fine Bites"],
    hours: "Wednesday to Sunday: 7:00 PM – 2:00 AM (Live Sets from 9:00 PM)",
    dressCode: "Smart elegant (Ages 21+ only)",
    imageUrl: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200&auto=format&fit=crop",
    link: "/restaurants-and-bars"
  },
  {
    id: "la-vita",
    name: "La Vita",
    tagline: "Chic Italian Aperitivo Bar",
    cuisine: "Italian Wines, Crafted Cocktails & Cicchetti",
    vibe: "Cosmopolitan, Polished, Warm",
    location: "Lobby Level",
    description: "A glamorous, leather-clad bar showcasing boutique Italian wines by the glass, innovative botanical mixology, and delicate aperitivo bites before or after dinner at Enigma or Vanitas.",
    features: ["Curated Italian Wine Cellar", "Innovative Craft Mixology", "Artisanal Aperitivo Cicchetti", "Intimate Leather Booths"],
    hours: "Daily: 5:00 PM – 2:00 AM",
    dressCode: "Smart casual",
    imageUrl: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1200&auto=format&fit=crop",
    link: "/restaurants-and-bars"
  },
  {
    id: "amalfi",
    name: "Amalfi",
    tagline: "Rustic Italian Poolside Trattoria",
    cuisine: "Wood-Fired Pizza, Seafood & Mediterranean",
    vibe: "Sun-drenched, Relaxed Luxury",
    location: "West Pool Area",
    description: "Located by the Olympic-sized West Pool, Amalfi serves rustic Italian fare including crispy pizzas baked in traditional wood-fired ovens, light Mediterranean salads, and refreshing frozen spritzes.",
    features: ["Authentic Wood-Fired Pizza Oven", "Poolside Service to Loungers", "Fresh Burrata & Seafood Salads", "Artisanal Italian Gelato"],
    hours: "Daily: 10:00 AM – 7:00 PM (Food service from 12:00 PM)",
    dressCode: "Resort casual",
    imageUrl: "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?q=80&w=1200&auto=format&fit=crop",
    link: "/restaurants-and-bars"
  },
  {
    id: "la-piscina",
    name: "La Piscina",
    tagline: "Waterfront Pool Club & Vibrant Beats",
    cuisine: "Poolside Sushi, Sliders & Tropical Cocktails",
    vibe: "High Energy, Sun-kissed, Glamorous",
    location: "East Pool Lagoon",
    description: "A glamorous waterfront pool oasis fringed with palm trees and cabanas, featuring a swim-up bar, poolside DJ sessions, Mediterranean bites, sushi platters, and lively weekend daytime parties.",
    features: ["Swim-Up Pool Bar", "Private VIP Daybeds & Cabanas", "Resident DJ Sessions", "Sushi & Seafood Platters"],
    hours: "Daily: 10:00 AM – 7:00 PM",
    dressCode: "Poolside glam / Swimwear with cover-ups",
    imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
    link: "/restaurants-and-bars"
  }
];

export const PALAZZO_ROOMS_DATA = {
  totalRooms: 215,
  totalResidences: 169,
  overview: "Every single piece of furniture and fabric that adorns the hotel's 215 rooms and suites, and 169 residences, is designed and tailor-made by Versace exclusively for Palazzo Versace Dubai. Each living space reflects European palace grandeur with pastel palettes of salmon, turquoise, and azure blue.",
  categories: [
    {
      name: "Deluxe Versace Room",
      size: "55 sqm",
      view: "Dubai Culture Village / Creek Views",
      features: ["Custom Versace Silk Linens", "Marble Bathtub & Rain Shower", "Carrara Marble Mosaic Floors", "Private Juliet Balcony"],
      imageUrl: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop"
    },
    {
      name: "Premier Versace Room",
      size: "60 sqm",
      view: "Panoramic Dubai Creek Views",
      features: ["Unobstructed Creek Vistas", "Walk-in Dressing Wardrobe", "Versace Parquet Flooring", "Executive Writing Desk"],
      imageUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop"
    },
    {
      name: "Junior Suite",
      size: "95 sqm",
      view: "Creek or City View with Balcony",
      features: ["Spacious Living Lounge", "Versace Home Porcelain Accents", "Bespoke Dining Area", "24-Hour Butler Service"],
      imageUrl: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1200&auto=format&fit=crop"
    },
    {
      name: "Grand Suite with Terrace",
      size: "130 sqm",
      view: "Private Expansive Creek Terrace",
      features: ["Full Al Fresco Dining Terrace", "Separate Master Bedroom & Salon", "Jacuzzi Spa Bath", "Complimentary High Tea Access"],
      imageUrl: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1200&auto=format&fit=crop"
    },
    {
      name: "Imperial Suite",
      size: "1,200 sqm",
      view: "Top Floor 180° Creek & Skyline Panorama",
      features: ["Two Storey Palatial Duplex", "Private Rooftop Pool & Solarium", "Personal Fitness Gym & Sauna", "Formal 10-Seat Versace Dining Hall"],
      imageUrl: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1200&auto=format&fit=crop"
    },
    {
      name: "Palazzo Versace Residences",
      size: "160 to 450 sqm",
      view: "Two, Three Bedroom & Penthouses",
      features: ["Full Miele Luxury Kitchens", "Private Elevator Access", "Residences Pool & Concierge", "Long & Short Term Stays"],
      imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
    }
  ]
};

export const PALAZZO_SPA_DATA = {
  name: "The Spa at Palazzo Versace",
  headline: "Holistic Wellness Cloaked in Versace Opulence",
  description: "Located on the ground floor West Wing, The Spa features 1,000 square meters of wellness sanctuary. Marble floors of granites and mosaics, turquoise wood paneling, and marine blue mosaics evoke ancient Roman thermal baths.",
  amenities: [
    {
      title: "Moroccan Hammams",
      description: "Traditional heated marble slabs for black soap exfoliation, eucalyptus steam, and rhassoul clay wraps."
    },
    {
      title: "Hydrotherapy Thermal Pools",
      description: "Vitality soaking pools with hydro-massage jets, sensory showers, and Finnish dry saunas."
    },
    {
      title: "VIP Couples Suites",
      description: "Private sanctuaries equipped with deep soaking whirlpools, private steam chambers, and side-by-side treatment beds."
    },
    {
      title: "The Spa Nail Studio & Luvion Salon",
      description: "High-fashion hair styling, couture manicures, pedicures, and beauty consultations."
    },
    {
      title: "The Gym & Personal Training",
      description: "Technogym cardio and strength equipment, kinesis machines, and private coaching with waterfront creek views."
    }
  ],
  signatureTreatments: [
    {
      name: "24-Karat Gold Facial Ritual",
      duration: "90 Minutes",
      price: "AED 1,200",
      description: "Pure gold leaf micro-infusion paired with collagen-stimulating peptides for instant youthful luminosity."
    },
    {
      name: "Royal Moroccan Rose Hammam",
      duration: "120 Minutes",
      price: "AED 1,450",
      description: "Black soap cleanse, Kessa glove purification, and fragrant rosewater botanical emulsion."
    },
    {
      name: "Deep Tissue Creek Stone Massage",
      duration: "90 Minutes",
      price: "AED 850",
      description: "Warm volcanic basalt stones soaked in sweet almond oil to dissolve deep muscle tension."
    }
  ]
};

export const PALAZZO_EVENTS_DATA = {
  headline: "Palatial Venues for Extraordinary Celebrations",
  description: "Whether hosting a high-profile diplomatic summit, a Versace-styled gala for 900 guests, or an intimate private celebration, Palazzo Versace Dubai offers unparalleled architectural splendor.",
  venues: [
    {
      name: "Gala Ballroom",
      capacity: "Up to 900 Guests",
      features: "Grand pillarless ballroom illuminated by crystal chandeliers, silk-carpeted floors, and private access to the terrace.",
      idealFor: "Weddings, Fashion Shows, State Banquets",
      imageUrl: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop"
    },
    {
      name: "Pre-Function Grand Foyer",
      capacity: "Up to 500 Guests",
      features: "Double-height ceilings, marble arches, and direct access overlooking the central mosaic swimming pool.",
      idealFor: "Cocktail Receptions & Welcome Galas",
      imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop"
    },
    {
      name: "Executive Meeting Suites (1-5)",
      capacity: "12 to 50 Delegates",
      features: "Advanced conference technology, bespoke leather Versace armchairs, and private coffee breakout lounges.",
      idealFor: "Board Meetings, Private Negotiations",
      imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
    }
  ]
};

