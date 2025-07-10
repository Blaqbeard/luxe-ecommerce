// Sample product data
const products = {
  men: {
    featured: [
      {
        id: "m1",
        name: "Premium Slim Fit Suit",
        price: 45000,
        originalPrice: 60000,
        image: "images/slim-fit-suit.jpg", // suit
        rating: 4.5,
        reviews: 36,
        discount: 25,
        colors: ["black", "navy", "charcoal"],
        sizes: ["S", "M", "L", "XL"],
        category: "suits",
      },
      {
        id: "m2",
        name: "Casual Linen Shirt",
        price: 15000,
        originalPrice: 18000,
        image: "images/casual-linen-shirt.jpg", // shirt
        rating: 4.2,
        reviews: 28,
        discount: 17,
        colors: ["white", "beige", "light blue"],
        sizes: ["S", "M", "L"],
        category: "shirts",
      },
      {
        id: "m3",
        name: "Designer Denim Jeans",
        price: 22000,
        originalPrice: 25000,
        image: "images/designer-denim-jeans.jpg", // jeans
        rating: 4.7,
        reviews: 42,
        discount: 12,
        colors: ["blue", "black", "gray"],
        sizes: ["28", "30", "32", "34"],
        category: "pants",
      },
      {
        id: "m4",
        name: "Mens Oxford Shoes",
        price: 35000,
        originalPrice: 42000,
        image: "images/mens-oxford-shoes.jpg", // shoes
        rating: 4.8,
        reviews: 51,
        discount: 17,
        colors: ["brown", "black"],
        sizes: ["40", "41", "42", "43", "44"],
        category: "footwear",
      },
    ],
    newArrivals: [
      {
        id: "m5",
        name: "Wool Blend Overcoat",
        price: 52000,
        originalPrice: 65000,
        image: "images/wool-blend-overcoat.jpg", // overcoat
        rating: 4.6,
        reviews: 18,
        discount: 20,
        colors: ["camel", "black", "gray"],
        sizes: ["S", "M", "L", "XL"],
        category: "outerwear",
      },
      {
        id: "m6",
        name: "Silk Pocket Square Set",
        price: 8500,
        originalPrice: 12000,
        image: "images/silk-pocket-square-set.jpg", // pocket square
        rating: 4.4,
        reviews: 15,
        discount: 29,
        colors: ["multicolor"],
        sizes: ["One Size"],
        category: "accessories",
      },
      {
        id: "m7",
        name: "Cashmere Sweater",
        price: 28000,
        originalPrice: 35000,
        image: "images/cashmere-sweater-men.webp", // sweater
        rating: 4.9,
        reviews: 33,
        discount: 20,
        colors: ["navy", "gray", "burgundy"],
        sizes: ["S", "M", "L"],
        category: "outerwear",
      },
      {
        id: "m8",
        name: "Tailored Dress Pants",
        price: 19000,
        originalPrice: 23000,
        image: "images/tailored-dress-pant.jpg", // dress pants
        rating: 4.3,
        reviews: 27,
        discount: 17,
        colors: ["black", "gray", "navy"],
        sizes: ["30", "32", "34", "36"],
        category: "pants",
      },
    ],
    bestSellers: [
      {
        id: "m9",
        name: "Classic White Dress Shirt",
        price: 12000,
        originalPrice: 15000,
        image: "images/white-dress-shirt.jpg", // white shirt
        rating: 4.7,
        reviews: 89,
        discount: 20,
        colors: ["white", "light blue"],
        sizes: ["S", "M", "L", "XL"],
        category: "shirts",
      },
      {
        id: "m10",
        name: "Leather Belt",
        price: 9500,
        originalPrice: 12000,
        image: "images/leather-belt.jpg", // belt
        rating: 4.5,
        reviews: 64,
        discount: 21,
        colors: ["black", "brown"],
        sizes: ["32", "34", "36", "38"],
        category: "accessories",
      },
      {
        id: "m11",
        name: "Cotton Polo Shirt",
        price: 11000,
        originalPrice: 13000,
        image: "images/men-polo-shirt.jpg", // polo shirt
        rating: 4.6,
        reviews: 72,
        discount: 15,
        colors: ["navy", "white", "black", "green"],
        sizes: ["S", "M", "L", "XL"],
        category: "shirts",
      },
      {
        id: "m12",
        name: "Silk Tie Collection",
        price: 12500,
        originalPrice: 15000,
        image: "images/silk-tie-collection.jpg", // tie
        rating: 4.8,
        reviews: 58,
        discount: 17,
        colors: ["various"],
        sizes: ["One Size"],
        category: "accessories",
      },
    ],
    // Additional products for categories
    shirts: [
      {
        id: "ms1",
        name: "Premium Cotton Oxford Shirt",
        price: 18000,
        originalPrice: 22000,
        image: "images/white-dress-shirt.jpg",
        rating: 4.6,
        reviews: 45,
        discount: 18,
        colors: ["white", "light blue", "pink"],
        sizes: ["S", "M", "L", "XL"],
        category: "shirts",
      },
      {
        id: "ms2",
        name: "Linen Summer Shirt",
        price: 16000,
        originalPrice: 20000,
        image: "images/casual-linen-shirt.jpg",
        rating: 4.4,
        reviews: 32,
        discount: 20,
        colors: ["beige", "white", "light green"],
        sizes: ["S", "M", "L"],
        category: "shirts",
      },
      {
        id: "ms3",
        name: "Silk Business Shirt",
        price: 25000,
        originalPrice: 30000,
        image: "images/silk-business-shirt.jpg",
        rating: 4.8,
        reviews: 28,
        discount: 17,
        colors: ["white", "black", "navy"],
        sizes: ["S", "M", "L", "XL"],
        category: "shirts",
      },
      {
        id: "ms4",
        name: "Striped Formal Shirt",
        price: 14000,
        originalPrice: 18000,
        image: "images/stripped-formal-shirt.jpg",
        rating: 4.3,
        reviews: 41,
        discount: 22,
        colors: ["blue/white", "black/white"],
        sizes: ["S", "M", "L", "XL"],
        category: "shirts",
      },
    ],
    suits: [
      {
        id: "msu1",
        name: "Classic Navy Suit",
        price: 55000,
        originalPrice: 70000,
        image: "images/classic-navy-suit.jpg",
        rating: 4.9,
        reviews: 67,
        discount: 21,
        colors: ["navy", "charcoal"],
        sizes: ["S", "M", "L", "XL"],
        category: "suits",
      },
      {
        id: "msu2",
        name: "Slim Fit Black Suit",
        price: 48000,
        originalPrice: 60000,
        image: "images/slim-fit-black-suit.jpg",
        rating: 4.7,
        reviews: 53,
        discount: 20,
        colors: ["black"],
        sizes: ["S", "M", "L", "XL"],
        category: "suits",
      },
      {
        id: "msu3",
        name: "Three-Piece Gray Suit",
        price: 65000,
        originalPrice: 80000,
        image: "images/three-piece-gray-suit.jpg",
        rating: 4.8,
        reviews: 39,
        discount: 19,
        colors: ["gray", "charcoal"],
        sizes: ["S", "M", "L", "XL"],
        category: "suits",
      },
      {
        id: "msu4",
        name: "Wedding Suit Collection",
        price: 75000,
        originalPrice: 95000,
        image: "images/wedding-suit.jpg",
        rating: 4.9,
        reviews: 24,
        discount: 21,
        colors: ["black", "navy", "gray"],
        sizes: ["S", "M", "L", "XL"],
        category: "suits",
      },
    ],
    outerwear: [
      {
        id: "mo1",
        name: "Wool Blend Trench Coat",
        price: 58000,
        originalPrice: 72000,
        image: "images/wool-blend-coat.jpg",
        rating: 4.7,
        reviews: 38,
        discount: 19,
        colors: ["beige", "black", "navy"],
        sizes: ["S", "M", "L", "XL"],
        category: "outerwear",
      },
      {
        id: "mo2",
        name: "Leather Jacket",
        price: 45000,
        originalPrice: 58000,
        image: "images/leather-jacket-men.jpg",
        rating: 4.6,
        reviews: 42,
        discount: 22,
        colors: ["black", "brown"],
        sizes: ["S", "M", "L", "XL"],
        category: "outerwear",
      },
      {
        id: "mo3",
        name: "Cashmere Cardigan",
        price: 32000,
        originalPrice: 40000,
        image: "images/cashmere-sweater.jpg",
        rating: 4.8,
        reviews: 29,
        discount: 20,
        colors: ["navy", "gray", "burgundy"],
        sizes: ["S", "M", "L"],
        category: "outerwear",
      },
      {
        id: "mo4",
        name: "Winter Parka",
        price: 68000,
        originalPrice: 85000,
        image: "images/mens-winter-coat.jpg",
        rating: 4.5,
        reviews: 31,
        discount: 20,
        colors: ["black", "navy", "olive"],
        sizes: ["S", "M", "L", "XL"],
        category: "outerwear",
      },
    ],
    footwear: [
      {
        id: "mf1",
        name: "Leather Derby Shoes",
        price: 38000,
        originalPrice: 48000,
        image: "images/leather-derby-shoes.jpg",
        rating: 4.7,
        reviews: 56,
        discount: 21,
        colors: ["brown", "black"],
        sizes: ["40", "41", "42", "43", "44"],
        category: "footwear",
      },
      {
        id: "mf2",
        name: "Suede Loafers",
        price: 32000,
        originalPrice: 40000,
        image: "images/suede-loafers.webp",
        rating: 4.5,
        reviews: 43,
        discount: 20,
        colors: ["tan", "navy", "black"],
        sizes: ["40", "41", "42", "43", "44"],
        category: "footwear",
      },
      {
        id: "mf3",
        name: "Formal Oxford Shoes",
        price: 42000,
        originalPrice: 52000,
        image: "images/formal-oxford-casual.png",
        rating: 4.8,
        reviews: 48,
        discount: 19,
        colors: ["black", "brown"],
        sizes: ["40", "41", "42", "43", "44"],
        category: "footwear",
      },
      {
        id: "mf4",
        name: "Casual Sneakers",
        price: 25000,
        originalPrice: 32000,
        image: "images/sneakers.jpg",
        rating: 4.4,
        reviews: 67,
        discount: 22,
        colors: ["white", "black", "navy"],
        sizes: ["40", "41", "42", "43", "44"],
        category: "footwear",
      },
    ],
  },
  women: {
    featured: [
      {
        id: "w1",
        name: "Elegant Evening Gown",
        price: 55000,
        originalPrice: 70000,
        image: "images/evening-gown.jpg",
        rating: 4.9,
        reviews: 47,
        discount: 21,
        colors: ["black", "navy", "burgundy"],
        sizes: ["XS", "S", "M", "L"],
        category: "dresses",
      },
      {
        id: "w2",
        name: "Silk Blouse",
        price: 18000,
        originalPrice: 22000,
        image: "images/silk-blouse.jpg",
        rating: 4.7,
        reviews: 39,
        discount: 18,
        colors: ["white", "blush", "blue"],
        sizes: ["XS", "S", "M"],
        category: "tops",
      },
      {
        id: "w3",
        name: "Designer Handbag",
        price: 48000,
        originalPrice: 60000,
        image: "images/designer-handbags.jpg",
        rating: 4.8,
        reviews: 62,
        discount: 20,
        colors: ["black", "tan", "red"],
        sizes: ["One Size"],
        category: "accessories",
      },
      {
        id: "w4",
        name: "High-Waisted Trousers",
        price: 21000,
        originalPrice: 25000,
        image: "images/high-waisted-trousers.jpg",
        rating: 4.6,
        reviews: 34,
        discount: 16,
        colors: ["black", "white", "plaid"],
        sizes: ["XS", "S", "M", "L"],
        category: "pants",
      },
    ],
    newArrivals: [
      {
        id: "w5",
        name: "Cashmere Wrap Coat",
        price: 65000,
        originalPrice: 80000,
        image: "images/cashmere-wrap-coat.jpg",
        rating: 4.9,
        reviews: 23,
        discount: 19,
        colors: ["camel", "gray", "black"],
        sizes: ["S", "M", "L"],
        category: "outerwear",
      },
      {
        id: "w6",
        name: "Statement Earrings",
        price: 9500,
        originalPrice: 12000,
        image: "images/statement-earrings.jpg",
        rating: 4.8,
        reviews: 41,
        discount: 21,
        colors: ["gold", "silver"],
        sizes: ["One Size"],
        category: "accessories",
      },
      {
        id: "w7",
        name: "Linen Jumpsuit",
        price: 32000,
        originalPrice: 40000,
        image: "images/linen-jumpsuit.jpg",
        rating: 4.5,
        reviews: 29,
        discount: 20,
        colors: ["white", "black", "khaki"],
        sizes: ["XS", "S", "M"],
        category: "dresses",
      },
      {
        id: "w8",
        name: "Leather Ankle Boots",
        price: 38000,
        originalPrice: 45000,
        image: "images/leather-ankle-boots.jpg",
        rating: 4.7,
        reviews: 37,
        discount: 16,
        colors: ["black", "brown", "taupe"],
        sizes: ["36", "37", "38", "39"],
        category: "footwear",
      },
    ],
    bestSellers: [
      {
        id: "w9",
        name: "Wrap Dress",
        price: 25000,
        originalPrice: 30000,
        image: "images/wrap-dress.jpg",
        rating: 4.8,
        reviews: 94,
        discount: 17,
        colors: ["floral", "black", "navy"],
        sizes: ["XS", "S", "M", "L"],
        category: "dresses",
      },
      {
        id: "w10",
        name: "Silk Scarf",
        price: 12500,
        originalPrice: 15000,
        image: "images/silk-scarf.jpg",
        rating: 4.9,
        reviews: 78,
        discount: 17,
        colors: ["various"],
        sizes: ["One Size"],
        category: "accessories",
      },
      {
        id: "w11",
        name: "Skinny Jeans",
        price: 22000,
        originalPrice: 28000,
        image: "images/skinny-jeans.jpg",
        rating: 4.7,
        reviews: 83,
        discount: 21,
        colors: ["blue", "black", "gray"],
        sizes: ["26", "28", "30", "32"],
        category: "pants",
      },
      {
        id: "w12",
        name: "Stiletto Heels",
        price: 35000,
        originalPrice: 42000,
        image: "images/stiletto-heels.jpg",
        rating: 4.6,
        reviews: 67,
        discount: 17,
        colors: ["black", "nude", "red"],
        sizes: ["36", "37", "38", "39"],
        category: "footwear",
      },
    ],
    // Additional products for categories
    dresses: [
      {
        id: "wd1",
        name: "Cocktail Dress",
        price: 35000,
        originalPrice: 45000,
        image: "images/cocktail-dress.avif",
        rating: 4.8,
        reviews: 52,
        discount: 22,
        colors: ["black", "red", "navy"],
        sizes: ["XS", "S", "M", "L"],
        category: "dresses",
      },
      {
        id: "wd2",
        name: "Summer Maxi Dress",
        price: 28000,
        originalPrice: 35000,
        image: "images/summer-maxi.avif",
        rating: 4.6,
        reviews: 38,
        discount: 20,
        colors: ["floral", "blue", "green"],
        sizes: ["XS", "S", "M", "L"],
        category: "dresses",
      },
      {
        id: "wd3",
        name: "Office Sheath Dress",
        price: 32000,
        originalPrice: 40000,
        image: "images/office-sheath-dress.webp",
        rating: 4.7,
        reviews: 45,
        discount: 20,
        colors: ["black", "navy", "gray"],
        sizes: ["XS", "S", "M", "L"],
        category: "dresses",
      },
      {
        id: "wd4",
        name: "Boho Midi Dress",
        price: 24000,
        originalPrice: 30000,
        image: "images/boho-midi.webp",
        rating: 4.5,
        reviews: 33,
        discount: 20,
        colors: ["floral", "rust", "sage"],
        sizes: ["XS", "S", "M", "L"],
        category: "dresses",
      },
    ],
    tops: [
      {
        id: "wt1",
        name: "Silk Camisole",
        price: 16000,
        originalPrice: 20000,
        image: "images/silk-camisole.jpg",
        rating: 4.6,
        reviews: 41,
        discount: 20,
        colors: ["black", "white", "blush"],
        sizes: ["XS", "S", "M"],
        category: "tops",
      },
      {
        id: "wt2",
        name: "Cotton T-Shirt",
        price: 12000,
        originalPrice: 15000,
        image: "images/cotton-shirts-women.jpg",
        rating: 4.4,
        reviews: 67,
        discount: 20,
        colors: ["white", "black", "gray"],
        sizes: ["XS", "S", "M", "L"],
        category: "tops",
      },
      {
        id: "wt3",
        name: "Knit Sweater",
        price: 22000,
        originalPrice: 28000,
        image: "images/knit-sweater.jpg",
        rating: 4.7,
        reviews: 39,
        discount: 21,
        colors: ["cream", "navy", "burgundy"],
        sizes: ["XS", "S", "M", "L"],
        category: "tops",
      },
      {
        id: "wt4",
        name: "Lace Blouse",
        price: 19000,
        originalPrice: 24000,
        image: "images/lace-blouse.jpg",
        rating: 4.5,
        reviews: 28,
        discount: 21,
        colors: ["white", "black", "ivory"],
        sizes: ["XS", "S", "M"],
        category: "tops",
      },
    ],
    outerwear: [
      {
        id: "wo1",
        name: "Trench Coat",
        price: 58000,
        originalPrice: 72000,
        image: "images/trench-coat.webp",
        rating: 4.8,
        reviews: 44,
        discount: 19,
        colors: ["beige", "black", "navy"],
        sizes: ["S", "M", "L"],
        category: "outerwear",
      },
      {
        id: "wo2",
        name: "Leather Jacket",
        price: 42000,
        originalPrice: 55000,
        image: "images/leather-jacket-women.avif",
        rating: 4.6,
        reviews: 51,
        discount: 24,
        colors: ["black", "brown"],
        sizes: ["S", "M", "L"],
        category: "outerwear",
      },
      {
        id: "wo3",
        name: "Wool Blazer",
        price: 35000,
        originalPrice: 44000,
        image: "images/wool-blazer.webp",
        rating: 4.7,
        reviews: 36,
        discount: 20,
        colors: ["black", "navy", "gray"],
        sizes: ["S", "M", "L"],
        category: "outerwear",
      },
      {
        id: "wo4",
        name: "Denim Jacket",
        price: 28000,
        originalPrice: 35000,
        image: "images/denim-jacket.jpg",
        rating: 4.5,
        reviews: 62,
        discount: 20,
        colors: ["blue", "black", "white"],
        sizes: ["S", "M", "L"],
        category: "outerwear",
      },
    ],
    footwear: [
      {
        id: "wf1",
        name: "Leather Boots",
        price: 42000,
        originalPrice: 52000,
        image: "images/leather-boots-women.webp",
        rating: 4.7,
        reviews: 48,
        discount: 19,
        colors: ["black", "brown", "tan"],
        sizes: ["36", "37", "38", "39"],
        category: "footwear",
      },
      {
        id: "wf2",
        name: "Ballet Flats",
        price: 25000,
        originalPrice: 32000,
        image: "images/ballet-flats.webp",
        rating: 4.5,
        reviews: 73,
        discount: 22,
        colors: ["black", "nude", "red"],
        sizes: ["36", "37", "38", "39"],
        category: "footwear",
      },
      {
        id: "wf3",
        name: "Ankle Strap Heels",
        price: 38000,
        originalPrice: 48000,
        image: "images/ankle-strap.jpg",
        rating: 4.8,
        reviews: 41,
        discount: 21,
        colors: ["black", "nude", "silver"],
        sizes: ["36", "37", "38", "39"],
        category: "footwear",
      },
      {
        id: "wf4",
        name: "Sneakers",
        price: 22000,
        originalPrice: 28000,
        image: "images/leather-ankle-boots.jpg",
        rating: 4.4,
        reviews: 89,
        discount: 21,
        colors: ["white", "black", "pink"],
        sizes: ["36", "37", "38", "39"],
        category: "footwear",
      },
    ],
  },
};

// Discount products for slider
const discountProducts = [
  {
    id: "d1",
    name: "Men's Winter Coat",
    price: 38000,
    originalPrice: 50000,
    image: "images/mens-winter-coat.jpg",
    discount: 24,
    category: "men",
  },
  {
    id: "d2",
    name: "Women's Leather Bag",
    price: 42000,
    originalPrice: 60000,
    image: "images/womens-leather-bag.jpg",
    discount: 30,
    category: "women",
  },
  {
    id: "d3",
    name: "Silk Tie Collection",
    price: 12500,
    originalPrice: 15000,
    image: "images/silk-tie-collection.jpg",
    discount: 17,
    category: "men",
  },
  {
    id: "d4",
    name: "Statement Necklace",
    price: 9500,
    originalPrice: 15000,
    image: "images/statement-necklace.jpg",
    discount: 37,
    category: "women",
  },
  {
    id: "d5",
    name: "Mens Oxford Shoes",
    price: 32000,
    originalPrice: 40000,
    image: "images/mens-oxford-shoes.jpg",
    discount: 20,
    category: "men",
  },
  {
    id: "d6",
    name: "Cashmere Sweater",
    price: 28000,
    originalPrice: 35000,
    image: "images/cashmere-sweater-women.jpg",
    discount: 20,
    category: "women",
  },
];

// State management
let currentPage = "home";
let currentCategory = null;
let cart = [];
let wishlist = [];

// DOM elements
const navbar = document.getElementById("navbar");
const mainContent = document.getElementById("mainContent");
const homePage = document.getElementById("homePage");
const menPage = document.getElementById("menPage");
const womenPage = document.getElementById("womenPage");
const aboutPage = document.getElementById("aboutPage");
const contactPage = document.getElementById("contactPage");
const discountSlider = document.getElementById("discountSlider");
const menPreview = document.getElementById("menPreview");
const womenPreview = document.getElementById("womenPreview");
const menFeaturedGrid = document.getElementById("menFeaturedGrid");
const menNewArrivalsGrid = document.getElementById("menNewArrivalsGrid");
const menBestSellersGrid = document.getElementById("menBestSellersGrid");
const womenFeaturedGrid = document.getElementById("womenFeaturedGrid");
const womenNewArrivalsGrid = document.getElementById("womenNewArrivalsGrid");
const womenBestSellersGrid = document.getElementById("womenBestSellersGrid");
const cartModal = document.getElementById("cartModal");
const cartPanel = document.getElementById("cartPanel");
const cartItems = document.getElementById("cartItems");
const emptyCart = document.getElementById("emptyCart");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");
const mobileCartCount = document.getElementById("mobileCartCount");
const wishlistModal = document.getElementById("wishlistModal");
const wishlistPanel = document.getElementById("wishlistPanel");
const wishlistItems = document.getElementById("wishlistItems");
const emptyWishlist = document.getElementById("emptyWishlist");
const wishlistCount = document.getElementById("wishlistCount");
const mobileWishlistCount = document.getElementById("mobileWishlistCount");
const sizeGuideModal = document.getElementById("sizeGuideModal");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuPanel = document.getElementById("mobileMenuPanel");
const quickViewModal = document.getElementById("quickViewModal");
// const successNotification = document.getElementById("successNotification");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

// Category filtering functions
function showCategory(category, gender) {
  console.log("showCategory called:", category, gender); // Debug log
  currentCategory = category;

  // Hide all category sections first
  hideAllCategorySections();

  // Hide main product sections for the selected gender
  if (gender === "men") {
    // Hide the entire section containers, not just the grids
    const menFeaturedSection = menFeaturedGrid.closest(".mb-16");
    const menNewArrivalsSection = menNewArrivalsGrid.closest(".mb-16");
    const menBestSellersSection = document.getElementById(
      "menBestSellersSection"
    );

    if (menFeaturedSection) menFeaturedSection.classList.add("hidden");
    if (menNewArrivalsSection) menNewArrivalsSection.classList.add("hidden");
    if (menBestSellersSection) menBestSellersSection.classList.add("hidden");
  } else if (gender === "women") {
    // Hide the entire section containers, not just the grids
    const womenFeaturedSection = womenFeaturedGrid.closest(".mb-16");
    const womenNewArrivalsSection = womenNewArrivalsGrid.closest(".mb-16");
    const womenBestSellersSection = document.getElementById(
      "womenBestSellersSection"
    );

    if (womenFeaturedSection) womenFeaturedSection.classList.add("hidden");
    if (womenNewArrivalsSection)
      womenNewArrivalsSection.classList.add("hidden");
    if (womenBestSellersSection)
      womenBestSellersSection.classList.add("hidden");
  }

  // Show the selected category section
  const categorySection = document.getElementById(
    `${gender}${category.charAt(0).toUpperCase() + category.slice(1)}Section`
  );
  if (categorySection) {
    categorySection.classList.remove("hidden");
    console.log("Category section shown:", categorySection.id); // Debug log
  } else {
    console.error(
      "Category section not found:",
      `${gender}${category.charAt(0).toUpperCase() + category.slice(1)}Section`
    ); // Debug log
  }

  // Load category products
  loadCategoryProducts(category, gender);

  // Update breadcrumb or navigation
  updateCategoryNavigation(category, gender);
}

function hideAllCategorySections() {
  // Hide all men's category sections
  const menSections = [
    "menShirtsSection",
    "menSuitsSection",
    "menOuterwearSection",
    "menFootwearSection",
  ];
  menSections.forEach((sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) section.classList.add("hidden");
  });

  // Hide all women's category sections
  const womenSections = [
    "womenDressesSection",
    "womenTopsSection",
    "womenOuterwearSection",
    "womenFootwearSection",
  ];
  womenSections.forEach((sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) section.classList.add("hidden");
  });
}

function loadCategoryProducts(category, gender) {
  const categoryProducts = products[gender][category] || [];
  const categoryGrid = document.getElementById(
    `${gender}${category.charAt(0).toUpperCase() + category.slice(1)}Grid`
  );

  if (categoryGrid) {
    categoryGrid.innerHTML = "";

    // Check if createProductCard function exists
    if (typeof createProductCard === "function") {
      categoryProducts.forEach((product) => {
        categoryGrid.appendChild(createProductCard(product, gender));
      });
      console.log(`Loaded ${categoryProducts.length} products for ${category}`); // Debug log
    } else {
      console.warn(
        "createProductCard function not available yet, retrying in 100ms..."
      );
      // Retry after a short delay to allow createProductCard to be defined
      setTimeout(() => {
        if (typeof createProductCard === "function") {
          categoryProducts.forEach((product) => {
            categoryGrid.appendChild(createProductCard(product, gender));
          });
          console.log(
            `Loaded ${categoryProducts.length} products for ${category} (delayed)`
          );
        } else {
          console.error(
            "createProductCard function still not available after retry"
          );
          // Fallback: create simple product cards
          categoryProducts.forEach((product) => {
            const fallbackCard = document.createElement("div");
            fallbackCard.className = "group";
            fallbackCard.innerHTML = `
              <div class="relative overflow-hidden rounded-xl bg-gray-800 aspect-square mb-4">
                <img src="${product.image}" alt="${
              product.name
            }" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                ${
                  product.discount
                    ? `<div class="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">-${product.discount}%</div>`
                    : ""
                }
              </div>
              <h3 class="font-semibold mb-1">${product.name}</h3>
              <div class="flex items-center mb-2">
                <div class="flex text-yellow-400 text-sm">${"★".repeat(
                  Math.floor(product.rating)
                )}${"☆".repeat(5 - Math.floor(product.rating))}</div>
                <span class="text-gray-400 text-sm ml-1">(${
                  product.reviews
                })</span>
              </div>
              <div class="flex items-center justify-between mb-3">
                <div class="flex items-center">
                  <span class="text-lg font-bold">₦${product.price.toLocaleString()}</span>
                  ${
                    product.originalPrice
                      ? `<span class="text-gray-400 text-sm line-through ml-2">₦${product.originalPrice.toLocaleString()}</span>`
                      : ""
                  }
                </div>
              </div>
            `;
            categoryGrid.appendChild(fallbackCard);
          });
          console.log(
            `Loaded ${categoryProducts.length} products for ${category} (fallback)`
          );
        }
      }, 100);
    }
  } else {
    console.error(
      "Category grid not found:",
      `${gender}${category.charAt(0).toUpperCase() + category.slice(1)}Grid`
    ); // Debug log
  }
}

function updateCategoryNavigation(category, gender) {
  // Update page title or breadcrumb
  const categoryTitle = document.getElementById(`${gender}CategoryTitle`);
  if (categoryTitle) {
    const categoryNames = {
      shirts: "Shirts",
      suits: "Suits",
      outerwear: "Outerwear",
      footwear: "Footwear",
      dresses: "Dresses",
      tops: "Tops",
    };
    categoryTitle.textContent = categoryNames[category] || category;
  }
}

function showAllProducts(gender) {
  currentCategory = null;
  hideAllCategorySections();

  // Show the main product sections
  if (gender === "men") {
    // Show the entire section containers, not just the grids
    const menFeaturedSection = menFeaturedGrid.closest(".mb-16");
    const menNewArrivalsSection = menNewArrivalsGrid.closest(".mb-16");
    const menBestSellersSection = document.getElementById(
      "menBestSellersSection"
    );

    if (menFeaturedSection) menFeaturedSection.classList.remove("hidden");
    if (menNewArrivalsSection) menNewArrivalsSection.classList.remove("hidden");
    if (menBestSellersSection) menBestSellersSection.classList.remove("hidden");
    loadMenProducts();
  } else if (gender === "women") {
    // Show the entire section containers, not just the grids
    const womenFeaturedSection = womenFeaturedGrid.closest(".mb-16");
    const womenNewArrivalsSection = womenNewArrivalsGrid.closest(".mb-16");
    const womenBestSellersSection = document.getElementById(
      "womenBestSellersSection"
    );

    if (womenFeaturedSection) womenFeaturedSection.classList.remove("hidden");
    if (womenNewArrivalsSection)
      womenNewArrivalsSection.classList.remove("hidden");
    if (womenBestSellersSection)
      womenBestSellersSection.classList.remove("hidden");
    loadWomenProducts();
  }
}

// Auto-slide variables
let slideInterval;
let currentSlide = 0;

// Start auto-sliding
function startSlider() {
  slideInterval = setInterval(() => {
    navigateSlider(1); // Move to next slide
  }, 5000); // Change slide every 5 seconds
}

// Stop auto-sliding (when user hovers)
function stopSlider() {
  clearInterval(slideInterval);
}

function updateSlidesToShow() {
  const screenWidth = window.innerWidth;
  if (screenWidth < 768) return 1; // Mobile: 1 slide
  if (screenWidth < 1024) return 2; // Tablet: 2 slides
  return 3; // Desktop: 3 slides
}
// Load discount slider products
function loadDiscountSlider() {
  const discountSlider = document.getElementById("discountSlider");
  discountSlider.innerHTML = "";

  discountProducts.forEach((product) => {
    const slide = document.createElement("div");
    // Responsive widths with proper spacing
    slide.className =
      "w-[calc(100vw-3rem)] sm:w-[calc(50vw-3rem)] md:w-[calc(33.33vw-3rem)] lg:w-[calc(25vw-3rem)] xl:w-[300px] flex-shrink-0";
    slide.innerHTML = `
      <div class="bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-300 h-full mx-auto">
        <div class="relative overflow-hidden aspect-square">
          <img src="${product.image}" alt="${
      product.name
    }" class="w-full h-full object-cover">
          <div class="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
            -${product.discount}%
          </div>
        </div>
        <div class="p-4">
          <h3 class="font-semibold mb-1 truncate text-sm sm:text-base">${
            product.name
          }</h3>
          <div class="flex items-center">
            <span class="text-base sm:text-lg font-bold">₦${product.price.toLocaleString()}</span>
            <span class="text-gray-400 text-xs sm:text-sm line-through ml-2">₦${product.originalPrice.toLocaleString()}</span>
          </div>
          <button onclick="addToCart('${product.id}', '${product.category}')" 
                  class="mt-3 w-full bg-gradient-to-r from-purple-600 to-pink-600 py-2 rounded-full text-xs sm:text-sm font-semibold hover:shadow-lg transition-all duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    `;
    discountSlider.appendChild(slide);
  });

  // Initialize slider
  initSlider();
}

// Initialize slider behavior
function initSlider() {
  const slider = document.getElementById("discountSlider");
  const slides = document.querySelectorAll("#discountSlider > div");
  const prevBtn = document.getElementById("prevSlide");
  const nextBtn = document.getElementById("nextSlide");
  let currentSlide = 0;
  let autoSlideInterval;

  function updateSlider() {
    const slide = slides[0];
    if (!slide) return;

    const slideWidth = slide.offsetWidth;
    const gap = window.innerWidth >= 640 ? 16 : 12; // sm:gap-4 (16px) or gap-3 (12px)
    const translateValue = currentSlide * (slideWidth + gap);
    slider.style.transform = `translateX(-${translateValue}px)`;
  }

  function getSlidesToShow() {
    if (window.innerWidth < 640) return 1; // Mobile
    if (window.innerWidth < 768) return 2; // Small tablet
    if (window.innerWidth < 1024) return 3; // Tablet/Laptop
    return 4; // Desktop
  }

  function handleNavigation(increment) {
    const slidesToShow = getSlidesToShow();
    const maxSlide = Math.max(0, slides.length - slidesToShow);
    currentSlide = Math.max(
      0,
      Math.min(currentSlide + increment * slidesToShow, maxSlide)
    );
    updateSlider();
    resetAutoSlide();
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      const slidesToShow = getSlidesToShow();
      if (currentSlide >= slides.length - slidesToShow) {
        currentSlide = 0;
      } else {
        currentSlide += slidesToShow;
      }
      updateSlider();
    }, 5000);
  }

  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  }

  nextBtn.addEventListener("click", () => handleNavigation(1));
  prevBtn.addEventListener("click", () => handleNavigation(-1));

  // Handle window resize with debounce
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      currentSlide = 0;
      updateSlider();
    }, 200);
  });

  // Initialize
  updateSlider();
  startAutoSlide();
}

// Start slider when DOM loads
document.addEventListener("DOMContentLoaded", loadDiscountSlider);

// Contact form handler
function setupContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    showNotification("Our concierge will contact you shortly", "success");
    form.reset();
  });
}

// Initialize the page
function init() {
  // Load all product grids
  loadDiscountSlider();
  loadPreviewProducts();
  loadMenProducts();
  loadWomenProducts();

  // Start auto-sliding
  startSlider();

  // Handle window resizing (optional)
  window.addEventListener("resize", () => {
    navigateSlider(0); // Recalculate on resize
  });

  // Pause on hover
  discountSlider.addEventListener("mouseenter", stopSlider);
  discountSlider.addEventListener("mouseleave", startSlider);

  // Set up event listeners
  setupEventListeners();

  // Setup touch gestures for mobile
  setupTouchGestures();

  // Show home page by default
  showPage("home");

  // Initialize contact page
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
      };
      console.log("Form submitted:", formData);
      showNotification("Message received!", "success");
      this.reset();
    });
  }
  // Initialize contact page reference
  contactPage = document.getElementById("contactPage");
}

// Set up event listeners
function setupEventListeners() {
  // Navigation buttons
  document
    .getElementById("prevSlide")
    .addEventListener("click", () => navigateSlider(-1));
  document
    .getElementById("nextSlide")
    .addEventListener("click", () => navigateSlider(1));

  // Cart functionality
  document.getElementById("cartBtn").addEventListener("click", showCart);
  document.getElementById("mobileCartBtn").addEventListener("click", showCart);
  document.getElementById("closeCart").addEventListener("click", hideCart);

  // Wishlist functionality
  document
    .getElementById("wishlistBtn")
    .addEventListener("click", showWishlist);
  document
    .getElementById("closeWishlist")
    .addEventListener("click", hideWishlist);

  // Size guide
  document
    .getElementById("closeSizeGuide")
    .addEventListener("click", hideSizeGuide);

  // Mobile menu
  document
    .getElementById("mobileMenuBtn")
    .addEventListener("click", showMobileMenu);
  document
    .getElementById("closeMobileMenu")
    .addEventListener("click", hideMobileMenu);

  // Quick view
  document
    .getElementById("closeQuickView")
    .addEventListener("click", hideQuickView);

  // Search functionality
  searchInput.addEventListener("input", handleSearch);

  // Close modals when clicking outside
  document.addEventListener("click", (e) => {
    if (e.target === cartModal) hideCart();
    if (e.target === wishlistModal) hideWishlist();
    if (e.target === sizeGuideModal) hideSizeGuide();
    if (e.target === mobileMenu) hideMobileMenu();
    if (e.target === quickViewModal) hideQuickView();
  });

  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("bg-black");
      navbar.classList.remove("bg-black/80");
    } else {
      navbar.classList.remove("bg-black");
      navbar.classList.add("bg-black/80");
    }
  });
}

// Page navigation
function showPage(page) {
  currentPage = page;
  currentCategory = null; // Reset category when changing pages

  // Hide all pages
  homePage.classList.add("hidden");
  menPage.classList.add("hidden");
  womenPage.classList.add("hidden");
  aboutPage.classList.add("hidden");
  contactPage.classList.add("hidden");

  // Show selected page
  if (page === "home") {
    homePage.classList.remove("hidden");
    window.scrollTo(0, 0);
  } else if (page === "men") {
    menPage.classList.remove("hidden");
    showAllProducts("men"); // Show all men's products by default
    window.scrollTo(0, 0);
  } else if (page === "women") {
    womenPage.classList.remove("hidden");
    showAllProducts("women"); // Show all women's products by default
    window.scrollTo(0, 0);
  } else if (page === "about") {
    aboutPage.classList.remove("hidden");
    window.scrollTo(0, 0);
  } else if (page === "contact") {
    contactPage.classList.remove("hidden");
    window.scrollTo(0, 0);
  }
  // Close mobile menu if open
  hideMobileMenu();
}

// Load preview products for home page
function loadPreviewProducts() {
  // Men's preview
  menPreview.innerHTML = "";
  products.men.featured.slice(0, 2).forEach((product) => {
    const item = document.createElement("div");
    item.className = "relative group";
    item.innerHTML = `
            <div class="aspect-square bg-gray-800 rounded-xl overflow-hidden">
              <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
            </div>
            <!-- Desktop hover overlay (hidden on mobile) -->
            <button onclick="showQuickView('${product.id}', 'men')" class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/50 transition-opacity duration-300 md:flex hidden">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
            </button>
            <!-- Mobile quick view button (visible only on mobile) -->
            <button onclick="showQuickView('${product.id}', 'men')" class="absolute bottom-2 right-2 w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 flex items-center justify-center md:hidden">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
            </button>
          `;
    menPreview.appendChild(item);
  });

  // Women's preview
  womenPreview.innerHTML = "";
  products.women.featured.slice(0, 2).forEach((product) => {
    const item = document.createElement("div");
    item.className = "relative group";
    item.innerHTML = `
            <div class="aspect-square bg-gray-800 rounded-xl overflow-hidden">
              <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
            </div>
            <!-- Desktop hover overlay (hidden on mobile) -->
            <button onclick="showQuickView('${product.id}', 'women')" class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/50 transition-opacity duration-300 md:flex hidden">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
            </button>
            <!-- Mobile quick view button (visible only on mobile) -->
            <button onclick="showQuickView('${product.id}', 'women')" class="absolute bottom-2 right-2 w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 flex items-center justify-center md:hidden">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
            </button>
          `;
    womenPreview.appendChild(item);
  });
}

// Load men's products
function loadMenProducts() {
  // Featured
  menFeaturedGrid.innerHTML = "";
  products.men.featured.forEach((product) => {
    menFeaturedGrid.appendChild(createProductCard(product, "men"));
  });

  // New arrivals
  menNewArrivalsGrid.innerHTML = "";
  products.men.newArrivals.forEach((product) => {
    menNewArrivalsGrid.appendChild(createProductCard(product, "men"));
  });

  // Best sellers
  menBestSellersGrid.innerHTML = "";
  products.men.bestSellers.forEach((product) => {
    menBestSellersGrid.appendChild(createProductCard(product, "men"));
  });
}

// Load women's products
function loadWomenProducts() {
  // Featured
  womenFeaturedGrid.innerHTML = "";
  products.women.featured.forEach((product) => {
    womenFeaturedGrid.appendChild(createProductCard(product, "women"));
  });

  // New arrivals
  womenNewArrivalsGrid.innerHTML = "";
  products.women.newArrivals.forEach((product) => {
    womenNewArrivalsGrid.appendChild(createProductCard(product, "women"));
  });

  // Best sellers
  womenBestSellersGrid.innerHTML = "";
  products.women.bestSellers.forEach((product) => {
    womenBestSellersGrid.appendChild(createProductCard(product, "women"));
  });
}

// Create product card element
function createProductCard(product, category) {
  const card = document.createElement("div");
  card.className = "group";
  card.innerHTML = `
          <div class="relative overflow-hidden rounded-xl bg-gray-800 aspect-square mb-4">
            <img src="${product.image}" alt="${
    product.name
  }" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            
            <!-- Desktop hover overlay (hidden on mobile) -->
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/50 transition-opacity duration-300 space-x-2 md:flex hidden">
              <button onclick="event.stopPropagation(); addToCart('${
                product.id
              }', '${category}')" class="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-purple-500 hover:text-white transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 3M7 13l4.5 3M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z"></path>
                </svg>
              </button>
              <button onclick="event.stopPropagation(); addToWishlist('${
                product.id
              }', '${category}')" class="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-pink-500 hover:text-white transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </button>
              <button onclick="event.stopPropagation(); showQuickView('${
                product.id
              }', '${category}')" class="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </button>
            </div>
            
            ${
              product.discount
                ? `
              <div class="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                -${product.discount}%
              </div>
            `
                : ""
            }
          </div>
          
          <!-- Product Info -->
          <h3 class="font-semibold mb-1">${product.name}</h3>
          <div class="flex items-center mb-2">
            <div class="flex text-yellow-400 text-sm">
              ${"★".repeat(Math.floor(product.rating))}${"☆".repeat(
    5 - Math.floor(product.rating)
  )}
            </div>
            <span class="text-gray-400 text-sm ml-1">(${product.reviews})</span>
          </div>
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center">
              <span class="text-lg font-bold">₦${product.price.toLocaleString()}</span>
              ${
                product.originalPrice
                  ? `
                <span class="text-gray-400 text-sm line-through ml-2">₦${product.originalPrice.toLocaleString()}</span>
              `
                  : ""
              }
            </div>
          </div>
          
          <!-- Mobile Action Buttons (visible only on mobile) -->
          <div class="flex items-center justify-between gap-2 md:hidden">
            <button onclick="event.stopPropagation(); addToCart('${
              product.id
            }', '${category}')" class="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-1">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 3M7 13l4.5 3M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z"></path>
              </svg>
              Add to Cart
            </button>
            <button onclick="event.stopPropagation(); addToWishlist('${
              product.id
            }', '${category}')" class="w-10 h-10 bg-pink-600 hover:bg-pink-700 text-white rounded-lg transition-colors duration-200 flex items-center justify-center">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </button>
            <button onclick="event.stopPropagation(); showQuickView('${
              product.id
            }', '${category}')" class="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 flex items-center justify-center">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
            </button>
          </div>
        `;

  // Remove the click event that opens quick view on card click
  // Now only the dedicated buttons will open quick view
  return card;
}

// Update the navigateSlider function
function navigateSlider(direction) {
  const slides = document.querySelectorAll("#discountSlider > div");
  const slidesToShow = updateSlidesToShow();
  const slideWidth = slides[0].offsetWidth + 16;

  currentSlide =
    (currentSlide + direction * slidesToShow + slides.length) % slides.length;
  discountSlider.style.transform = `translateX(-${
    currentSlide * slideWidth
  }px)`;
}

// Add touch gesture support for mobile slider
function setupTouchGestures() {
  const slider = document.getElementById("discountSlider");
  if (!slider) return;

  let startX = 0;
  let currentX = 0;
  let isDragging = false;

  // Touch events for mobile
  slider.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
    slider.style.transition = "none";
  });

  slider.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    const slides = document.querySelectorAll("#discountSlider > div");
    const slideWidth = slides[0].offsetWidth + 16;
    const currentTransform = -currentSlide * slideWidth;

    slider.style.transform = `translateX(${currentTransform + diff}px)`;
  });

  slider.addEventListener("touchend", (e) => {
    if (!isDragging) return;
    isDragging = false;
    slider.style.transition = "transform 0.3s ease-in-out";

    const diff = currentX - startX;
    const threshold = 50; // Minimum swipe distance

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Swipe right - go to previous
        navigateSlider(-1);
      } else {
        // Swipe left - go to next
        navigateSlider(1);
      }
    } else {
      // Reset to current position
      const slides = document.querySelectorAll("#discountSlider > div");
      const slideWidth = slides[0].offsetWidth + 16;
      slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }
  });

  // Mouse events for desktop drag
  slider.addEventListener("mousedown", (e) => {
    startX = e.clientX;
    isDragging = true;
    slider.style.transition = "none";
    slider.style.cursor = "grabbing";
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    currentX = e.clientX;
    const diff = currentX - startX;
    const slides = document.querySelectorAll("#discountSlider > div");
    const slideWidth = slides[0].offsetWidth + 16;
    const currentTransform = -currentSlide * slideWidth;

    slider.style.transform = `translateX(${currentTransform + diff}px)`;
  });

  slider.addEventListener("mouseup", (e) => {
    if (!isDragging) return;
    isDragging = false;
    slider.style.transition = "transform 0.3s ease-in-out";
    slider.style.cursor = "grab";

    const diff = currentX - startX;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        navigateSlider(-1);
      } else {
        navigateSlider(1);
      }
    } else {
      const slides = document.querySelectorAll("#discountSlider > div");
      const slideWidth = slides[0].offsetWidth + 16;
      slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }
  });

  slider.addEventListener("mouseleave", () => {
    if (isDragging) {
      isDragging = false;
      slider.style.transition = "transform 0.3s ease-in-out";
      slider.style.cursor = "grab";

      const slides = document.querySelectorAll("#discountSlider > div");
      const slideWidth = slides[0].offsetWidth + 16;
      slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }
  });
}
// Show quick view modal
function showQuickView(productId, category) {
  const product =
    category === "men"
      ? [
          ...products.men.featured,
          ...products.men.newArrivals,
          ...products.men.bestSellers,
          ...products.men.shirts,
          ...products.men.suits,
          ...products.men.outerwear,
          ...products.men.footwear,
        ].find((p) => p.id === productId)
      : [
          ...products.women.featured,
          ...products.women.newArrivals,
          ...products.women.bestSellers,
          ...products.women.dresses,
          ...products.women.tops,
          ...products.women.outerwear,
          ...products.women.footwear,
        ].find((p) => p.id === productId);

  if (!product) return;

  document.getElementById("quickViewTitle").textContent = product.name;
  document.getElementById("quickViewImage").src = product.image;
  document.getElementById("quickViewImage").alt = product.name;
  document.getElementById(
    "quickViewPrice"
  ).textContent = `₦${product.price.toLocaleString()}`;
  document.getElementById("quickViewDescription").textContent =
    product.description ||
    "Premium quality product with exceptional craftsmanship.";
  document.getElementById("quickViewRating").innerHTML =
    "★".repeat(Math.floor(product.rating)) +
    "☆".repeat(5 - Math.floor(product.rating));
  document.getElementById(
    "quickViewReviews"
  ).textContent = `(${product.reviews} reviews)`;

  // Initialize button functionalities
  setupQuickViewButtons(productId, category);

  quickViewModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function setupQuickViewButtons(productId, category) {
  const modal = document.getElementById("quickViewModal");

  // 1. Close Modal Button
  document.getElementById("closeQuickView").onclick = function () {
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  };

  // 2. Quantity Controls
  const quantityDisplay = modal.querySelector("span:has(+ button)");
  if (quantityDisplay) {
    let quantity = parseInt(quantityDisplay.textContent);
    const minusBtn = quantityDisplay.previousElementSibling;
    const plusBtn = quantityDisplay.nextElementSibling;

    minusBtn.onclick = function (e) {
      e.preventDefault();
      if (quantity > 1) {
        quantity--;
        quantityDisplay.textContent = quantity;
      }
    };
    plusBtn.onclick = function (e) {
      e.preventDefault();
      quantity++;
      quantityDisplay.textContent = quantity;
    };
  }

  // 3. Size Selection
  const sizeButtons = modal.querySelectorAll(".flex-wrap.gap-2 button");
  sizeButtons.forEach((btn) => {
    btn.onclick = function () {
      sizeButtons.forEach((b) =>
        b.classList.remove(
          "border-purple-500",
          "text-purple-400",
          "bg-gray-800"
        )
      );
      this.classList.add("border-purple-500", "text-purple-400", "bg-gray-800");
    };
  });

  // 4. Color Selection
  const colorButtons = modal.querySelectorAll(".flex.gap-3 button");
  colorButtons.forEach((btn) => {
    btn.onclick = function () {
      colorButtons.forEach((b) => b.classList.remove("border-gray-300"));
      this.classList.add("border-gray-300");
    };
  });

  // 5. Action Buttons
  const addToCartBtn = modal.querySelector(
    ".bg-gradient-to-r.from-purple-600.to-pink-600"
  );
  if (addToCartBtn) {
    addToCartBtn.onclick = function () {
      // Your existing addToCart function
      addToCart(productId, category);
    };
  }

  // 6. Wishlist Button
  const wishlistBtn = modal.querySelector('button[onclick*="addToWishlist"]');
  if (wishlistBtn) {
    wishlistBtn.onclick = function () {
      addToWishlist(productId, category);
    };
  }

  // 7. Share Button
  const shareBtn = modal.querySelector('button:has(svg[d="M8.684 13.342"])');
  if (shareBtn) {
    shareBtn.onclick = function () {
      // Simple share implementation
      console.log("Sharing product:", productId);
      alert("Share functionality would go here");
    };
  }

  // Close modal when clicking outside
  modal.onclick = function (e) {
    if (e.target === modal) {
      modal.classList.add("hidden");
      document.body.style.overflow = "";
    }
  };

  // Show the modal
  quickViewModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

// Helper function to get color values for display
function getColorValue(color) {
  const colorMap = {
    black: "#000000",
    white: "#ffffff",
    navy: "#001f3f",
    charcoal: "#36454F",
    beige: "#F5F5DC",
    lightblue: "#ADD8E6",
    blue: "#0000FF",
    gray: "#808080",
    brown: "#A52A2A",
    camel: "#C19A6B",
    burgundy: "#800020",
    blush: "#DE5D83",
    tan: "#D2B48C",
    red: "#FF0000",
    green: "#008000",
    gold: "#FFD700",
    silver: "#C0C0C0",
    khaki: "#F0E68C",
    taupe: "#483C32",
    nude: "#F3D5B5",
    floral: "linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)",
    plaid:
      "repeating-linear-gradient(45deg, #606dbc, #606dbc 10px, #465298 10px, #465298 20px)",
    various:
      "linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)",
  };

  return colorMap[color.toLowerCase()] || "#cccccc";
}

// Hide quick view modal
function hideQuickView() {
  quickViewModal.classList.add("hidden");
  document.body.style.overflow = "";
}

// Show cart modal
function showCart() {
  cartModal.classList.remove("hidden");
  cartPanel.classList.remove("translate-x-full");
  document.body.style.overflow = "hidden";
  renderCart();
}

// Hide cart modal
function hideCart() {
  cartPanel.classList.add("translate-x-full");
  setTimeout(() => {
    cartModal.classList.add("hidden");
    document.body.style.overflow = "";
  }, 300);
}

// Show wishlist modal
function showWishlist() {
  wishlistModal.classList.remove("hidden");
  wishlistPanel.classList.remove("translate-x-full");
  document.body.style.overflow = "hidden";
  renderWishlist();
}

// Hide wishlist modal
function hideWishlist() {
  wishlistPanel.classList.add("translate-x-full");
  setTimeout(() => {
    wishlistModal.classList.add("hidden");
    document.body.style.overflow = "";
  }, 300);
}

// Show size guide modal
function showSizeGuide() {
  sizeGuideModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  hideMobileMenu();
}

// Hide size guide modal
function hideSizeGuide() {
  sizeGuideModal.classList.add("hidden");
  document.body.style.overflow = "";
}

// Show mobile menu
function showMobileMenu() {
  mobileMenu.classList.remove("hidden");
  mobileMenuPanel.classList.remove("translate-x-full");
  document.body.style.overflow = "hidden";
}

// Hide mobile menu
function hideMobileMenu() {
  mobileMenuPanel.classList.add("translate-x-full");
  setTimeout(() => {
    mobileMenu.classList.add("hidden");
    document.body.style.overflow = "";
  }, 300);
}

// Add product to cart
function addToCart(productId, category) {
  event.stopPropagation(); // Prevent event bubbling
  let product;

  // First check discount products
  product = discountProducts.find((p) => p.id === productId);

  // If not found in discount products, check regular products
  if (!product) {
    product =
      category === "men"
        ? [
            ...products.men.featured,
            ...products.men.newArrivals,
            ...products.men.bestSellers,
            ...products.men.shirts,
            ...products.men.suits,
            ...products.men.outerwear,
            ...products.men.footwear,
          ].find((p) => p.id === productId)
        : [
            ...products.women.featured,
            ...products.women.newArrivals,
            ...products.women.bestSellers,
            ...products.women.dresses,
            ...products.women.tops,
            ...products.women.outerwear,
            ...products.women.footwear,
          ].find((p) => p.id === productId);
  }

  if (!product) return;

  const existingItem = cart.find((item) => item.id === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1,
    });
  }

  updateCartCount();
  renderCart();
  showNotification(`${product.name} added to cart!`, "success");
}

// Remove product from cart
function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  updateCartCount();
  renderCart();
  showNotification("Item removed from cart", "warning");
}

// Update cart quantity
function updateCartQuantity(productId, newQuantity) {
  const item = cart.find((item) => item.id === productId);
  if (item) {
    item.quantity = newQuantity;
    if (item.quantity <= 0) {
      removeFromCart(productId);
    } else {
      renderCart();
    }
  }
}

// Update cart count display
function updateCartCount() {
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  cartCount.textContent = count;
  mobileCartCount.textContent = count;
}

// Render cart items
function renderCart() {
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    emptyCart.style.display = "block";
    cartTotal.textContent = "₦0.00";
    return;
  }

  emptyCart.style.display = "none";

  let total = 0;

  cart.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.className =
      "flex items-start space-x-4 py-4 border-b border-gray-800";
    cartItem.innerHTML = `
            <div class="flex-shrink-0 w-20 h-20 bg-gray-800 rounded-lg overflow-hidden">
              <img src="${item.image}" alt="${
      item.name
    }" class="w-full h-full object-cover">
            </div>
            <div class="flex-1">
              <h3 class="font-medium">${item.name}</h3>
              <p class="text-purple-400 font-semibold">₦${item.price.toLocaleString()}</p>
              <div class="flex items-center mt-2">
                <button onclick="updateCartQuantity('${item.id}', ${
      item.quantity - 1
    })" class="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                  </svg>
                </button>
                <span class="mx-2">${item.quantity}</span>
                <button onclick="updateCartQuantity('${item.id}', ${
      item.quantity + 1
    })" class="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                  </svg>
                </button>
              </div>
            </div>
            <button onclick="removeFromCart('${
              item.id
            }')" class="text-gray-400 hover:text-white">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
              </svg>
            </button>
          `;
    cartItems.appendChild(cartItem);
    total += item.price * item.quantity;
  });

  cartTotal.textContent = `₦${total.toLocaleString()}`;
}

// Add product to wishlist
function addToWishlist(productId, category) {
  const product =
    category === "men"
      ? [
          ...products.men.featured,
          ...products.men.newArrivals,
          ...products.men.bestSellers,
          ...products.men.shirts,
          ...products.men.suits,
          ...products.men.outerwear,
          ...products.men.footwear,
        ].find((p) => p.id === productId)
      : [
          ...products.women.featured,
          ...products.women.newArrivals,
          ...products.women.bestSellers,
          ...products.women.dresses,
          ...products.women.tops,
          ...products.women.outerwear,
          ...products.women.footwear,
        ].find((p) => p.id === productId);

  if (!product || wishlist.some((item) => item.id === productId)) return;

  wishlist.push(product);
  updateWishlistCount();
  renderWishlist();
  showNotification(`${product.name} added to wishlist!`, "success");
}

// Remove product from wishlist
function removeFromWishlist(productId) {
  wishlist = wishlist.filter((item) => item.id !== productId);
  updateWishlistCount();
  renderWishlist();
  showNotification("Item removed from wishlist", "warning");
}

// Update wishlist count display
function updateWishlistCount() {
  const count = wishlist.length;
  wishlistCount.textContent = count;
  mobileWishlistCount.textContent = count;
}

// Render wishlist items
function renderWishlist() {
  wishlistItems.innerHTML = "";

  if (wishlist.length === 0) {
    emptyWishlist.style.display = "block";
    return;
  }

  emptyWishlist.style.display = "none";

  wishlist.forEach((item) => {
    const wishlistItem = document.createElement("div");
    wishlistItem.className =
      "flex items-start space-x-4 py-4 border-b border-gray-800";
    wishlistItem.innerHTML = `
            <div class="flex-shrink-0 w-20 h-20 bg-gray-800 rounded-lg overflow-hidden">
              <img src="${item.image}" alt="${
      item.name
    }" class="w-full h-full object-cover">
            </div>
            <div class="flex-1">
              <h3 class="font-medium">${item.name}</h3>
              <p class="text-purple-400 font-semibold">₦${item.price.toLocaleString()}</p>
              <button onclick="addToCart('${item.id}', '${
      item.category || "men"
    }')" class="mt-2 text-sm bg-gray-800 hover:bg-purple-600 px-3 py-1 rounded-full transition-colors">
                Add to Cart
              </button>
            </div>
            <button onclick="removeFromWishlist('${
              item.id
            }')" class="text-gray-400 hover:text-white">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
              </svg>
            </button>
          `;
    wishlistItems.appendChild(wishlistItem);
  });
}

// Notification System
function showNotification(message, type = "success") {
  const notification = document.createElement("div");
  const bgColor =
    type === "success"
      ? "bg-green-600"
      : type === "warning"
      ? "bg-yellow-600"
      : type === "info"
      ? "bg-blue-600"
      : "bg-red-600";

  notification.className = `fixed top-4 right-4 ${bgColor} text-white px-6 py-3 rounded-lg shadow-xl z-50 flex items-center transform transition-all duration-300 translate-x-full`;
  notification.innerHTML = `
    <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      ${
        type === "success"
          ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>'
          : ""
      }
      ${
        type === "error"
          ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>'
          : ""
      }
      ${
        type === "warning"
          ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>'
          : ""
      }
      ${
        type === "info"
          ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>'
          : ""
      }
    </svg>
    ${message}
  `;

  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => notification.classList.remove("translate-x-full"), 10);

  // Animate out after 3 seconds
  setTimeout(() => {
    notification.classList.add("translate-x-full");
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}
// Show success notification
function showNotification(message, type = "success") {
  const notification = document.createElement("div");

  // Tailwind classes for different notification types
  const typeStyles = {
    success: "bg-green-500 border-green-600",
    warning: "bg-yellow-500 border-yellow-600",
    info: "bg-blue-500 border-blue-600",
    error: "bg-red-500 border-red-600",
  };

  // Base Tailwind classes
  notification.className = `
    fixed top-4 right-4 z-50
    ${typeStyles[type]}
    text-white px-4 py-3 rounded-lg
    border-l-4 shadow-lg
    flex items-center
    transform transition-all duration-300
    translate-x-full
  `;

  // Icons for each type (using Heroicons or emoji)
  const icons = {
    success: `<svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
    </svg>`,
    warning: `<svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
    </svg>`,
    info: `<svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>`,
    error: `<svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>`,
  };

  notification.innerHTML = `
    ${icons[type]}
    <span>${message}</span>
  `;

  document.body.appendChild(notification);

  // Animate in
  setTimeout(
    () => notification.classList.replace("translate-x-full", "translate-x-0"),
    10
  );

  // Animate out after 3 seconds
  setTimeout(() => {
    notification.classList.replace("translate-x-0", "translate-x-full");
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Chat functionality
const chatToggle = document.getElementById("chatToggle");
const chatBox = document.getElementById("chatBox");
const chatInput = document.getElementById("chatInput");
const chatSend = document.getElementById("chatSend");

if (chatToggle) {
  chatToggle.addEventListener("click", function () {
    chatBox.classList.toggle("hidden");
  });
}

if (chatSend) {
  chatSend.addEventListener("click", sendChatMessage);
}

if (chatInput) {
  chatInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") sendChatMessage();
  });
}

// Handle search functionality
function handleSearch() {
  const query = searchInput.value.toLowerCase();

  // Clear previous results if search is empty
  if (query.length === 0) {
    searchResults.classList.add("hidden");
    return;
  }

  // Combine all products
  const allProducts = [
    ...products.men.featured,
    ...products.men.newArrivals,
    ...products.men.bestSellers,
    ...products.men.shirts,
    ...products.men.suits,
    ...products.men.outerwear,
    ...products.men.footwear,
    ...products.women.featured,
    ...products.women.newArrivals,
    ...products.women.bestSellers,
    ...products.women.dresses,
    ...products.women.tops,
    ...products.women.outerwear,
    ...products.women.footwear,
    ...discountProducts,
  ];

  // Filter products by search query
  const results = allProducts
    .filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        (product.category && product.category.toLowerCase().includes(query))
    )
    .slice(0, 5); // Limit to 5 suggestions

  // Display results
  searchResults.innerHTML = "";

  if (results.length === 0) {
    searchResults.innerHTML =
      '<div class="p-4 text-gray-400">No results found</div>';
  } else {
    results.forEach((product) => {
      const resultItem = document.createElement("div");
      resultItem.className =
        "flex items-center p-3 hover:bg-gray-800/50 transition-colors cursor-pointer";
      resultItem.innerHTML = `
        <div class="w-10 h-10 bg-gray-800 rounded-lg overflow-hidden mr-3 flex-shrink-0">
          <img src="${product.image}" alt="${
        product.name
      }" class="w-full h-full object-cover">
        </div>
        <div class="flex-1 min-w-0">
          <div class="font-medium truncate">${product.name}</div>
          <div class="text-sm text-purple-400 truncate">₦${product.price.toLocaleString()}</div>
        </div>
      `;
      resultItem.addEventListener("click", () => {
        showQuickView(product.id, product.category || "men");
        searchInput.value = product.name; // Fill input with selected product
        searchResults.classList.add("hidden");
      });
      searchResults.appendChild(resultItem);
    });
  }

  searchResults.classList.remove("hidden");
}

// Add event listener for input with debounce
let searchTimeout;
searchInput.addEventListener("input", () => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    handleSearch();
  }, 300); // Wait 300ms after typing stops
});

// Close search results when clicking outside
document.addEventListener("click", (e) => {
  const isSearchInput =
    e.target === searchInput || searchInput.contains(e.target);
  const isSearchResults =
    e.target === searchResults || searchResults.contains(e.target);

  if (!isSearchInput && !isSearchResults) {
    searchResults.classList.add("hidden");
  }
});

// Chat functionality
const chatResponses = [
  "Thank you for contacting us! How can I help you today?",
  "I'd be happy to assist you with your order.",
  "Our customer service team will get back to you shortly.",
  "Is there anything specific you'd like to know about our products?",
  "Feel free to ask any questions about sizing, shipping, or returns.",
];

function sendChatMessage() {
  const chatInput = document.getElementById("chatInput");
  const chatMessages = document.getElementById("chatMessages");
  const message = chatInput.value.trim();
  if (!message) return;

  // Add user message
  const userMessage = document.createElement("div");
  userMessage.className = "bg-purple-600 rounded-lg p-3 max-w-64 ml-auto";
  userMessage.innerHTML = `<p class="text-sm">${message}</p>`;
  chatMessages.appendChild(userMessage);

  chatInput.value = "";

  // Add bot response after delay
  setTimeout(() => {
    const botMessage = document.createElement("div");
    botMessage.className = "bg-gray-800 rounded-lg p-3 max-w-64";
    const randomResponse =
      chatResponses[Math.floor(Math.random() * chatResponses.length)];
    botMessage.innerHTML = `<p class="text-sm">${randomResponse}</p>`;
    chatMessages.appendChild(botMessage);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 1000);

  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Carousel functionality
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(
    "#home .relative.h-full.w-full > div.absolute.inset-0"
  );
  let currentSlide = 0;
  let interval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("opacity-100", i === index);
      slide.classList.toggle("opacity-0", i !== index);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  // Start carousel
  if (slides.length > 0) {
    showSlide(0);
    interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
  }
});

// Brand Partners Carousel
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("brandCarousel");
  const brands = carousel.innerHTML;

  // Duplicate brands for infinite loop effect
  carousel.innerHTML = brands + brands + brands;

  let position = 0;
  const speed = 1; // Adjust speed as needed
  const itemWidth = carousel.children[0].offsetWidth;
  const loopWidth = carousel.scrollWidth / 3;

  function animate() {
    position -= speed;

    // Reset position when we've scrolled one full loop
    if (Math.abs(position) >= loopWidth) {
      position = 0;
    }

    carousel.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animate);
  }

  // Start animation
  animate();

  // Pause on hover
  carousel.addEventListener("mouseenter", () => {
    speed = 0;
  });

  carousel.addEventListener("mouseleave", () => {
    speed = 1;
  });
});

// Make functions available globally
window.showPage = showPage;
window.showSizeGuide = showSizeGuide;
window.showWishlist = showWishlist;
window.addToCart = addToCart;
window.addToWishlist = addToWishlist;
window.showQuickView = showQuickView;
window.updateCartQuantity = updateCartQuantity;
window.removeFromCart = removeFromCart;
window.removeFromWishlist = removeFromWishlist;
window.showCategory = showCategory;
window.showAllProducts = showAllProducts;

// Initialize the app when DOM is loaded
document.addEventListener("DOMContentLoaded", init);

// Add event listeners for 'View All' links in men and women collections
// Men
const menFeaturedViewAll = document.querySelector("#menPage .mb-16 .flex a");
const menNewArrivalsViewAll = document.querySelectorAll(
  "#menPage .mb-16 .flex a"
)[1];
const menBestSellersViewAll = document.querySelectorAll(
  "#menPage .mb-16 .flex a"
)[2];
if (menFeaturedViewAll)
  menFeaturedViewAll.onclick = () => showSectionProducts("men", "featured");
if (menNewArrivalsViewAll)
  menNewArrivalsViewAll.onclick = () =>
    showSectionProducts("men", "newArrivals");
if (menBestSellersViewAll)
  menBestSellersViewAll.onclick = () =>
    showSectionProducts("men", "bestSellers");
// Women
const womenFeaturedViewAll = document.querySelector(
  "#womenPage .mb-16 .flex a"
);
const womenNewArrivalsViewAll = document.querySelectorAll(
  "#womenPage .mb-16 .flex a"
)[1];
const womenBestSellersViewAll = document.querySelectorAll(
  "#womenPage .mb-16 .flex a"
)[2];
if (womenFeaturedViewAll)
  womenFeaturedViewAll.onclick = () => showSectionProducts("women", "featured");
if (womenNewArrivalsViewAll)
  womenNewArrivalsViewAll.onclick = () =>
    showSectionProducts("women", "newArrivals");
if (womenBestSellersViewAll)
  womenBestSellersViewAll.onclick = () =>
    showSectionProducts("women", "bestSellers");

function showSectionProducts(gender, section) {
  // Hide all category sections and main grids
  hideAllCategorySections();
  if (gender === "men") {
    menFeaturedGrid.classList.add("hidden");
    menNewArrivalsGrid.classList.add("hidden");
    menBestSellersGrid.classList.add("hidden");
  } else if (gender === "women") {
    womenFeaturedGrid.classList.add("hidden");
    womenNewArrivalsGrid.classList.add("hidden");
    womenBestSellersGrid.classList.add("hidden");
  }
  // Remove any previous section grid
  const existing = document.getElementById("sectionProductsGrid");
  if (existing) existing.remove();
  const existingHeading = document.getElementById("sectionProductsHeading");
  if (existingHeading) existingHeading.remove();
  // Section heading
  const sectionNames = {
    featured: "Featured Styles",
    newArrivals: "New Arrivals",
    bestSellers: "Best Sellers",
  };
  const heading = document.createElement("h2");
  heading.id = "sectionProductsHeading";
  heading.className =
    "text-3xl font-bold mb-8 mt-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent";
  heading.textContent = sectionNames[section] || section;
  // Section grid
  const sectionProducts = products[gender][section];
  const sectionGrid = document.createElement("div");
  sectionGrid.className =
    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16";
  sectionProducts.forEach((product) => {
    sectionGrid.appendChild(createProductCard(product, gender));
  });
  sectionGrid.id = "sectionProductsGrid";
  // Insert before Style Inspiration section
  let parentPage = gender === "men" ? menPage : womenPage;
  let styleInspirationSection = parentPage.querySelector(
    "section.py-16.bg-gradient-to-r"
  );
  if (styleInspirationSection) {
    parentPage.insertBefore(heading, styleInspirationSection);
    parentPage.insertBefore(sectionGrid, styleInspirationSection);
  } else {
    parentPage.appendChild(heading);
    parentPage.appendChild(sectionGrid);
  }
}
