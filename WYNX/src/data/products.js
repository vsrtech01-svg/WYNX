// Full product catalog for WYNX eCommerce — LOWERS ONLY
// Each product has a unique token for WhatsApp order tracking
// Prices in INR (₹)
const products = [
  {
    "id": "wynx-solid-black-track-v1",
    "name": "Void Runner Lowers",
    "price": 489,
    "oldPrice": 1499,
    "discount": 67,
    "category": "men",
    "subcategory": "Lowers",
    "badge": null,
    "rating": 4.6,
    "reviews": 8,
    "sizes": [
      "XL",
      "XXL"
    ],
    "intensity": "Base",
    "tags": [
      "new-arrival"
    ],
    "description": "Void Runner Lowers — sleek, minimal, and built for all-day ease. Crafted with premium-grade fabric for a silky-smooth fit that holds up through every session. Whether it's an early run or a late-night chill, these track pants deliver effortless style.",
    "features": [
      "Comfortable Fit",
      "Elastic Waistband",
      "Side Pockets",
      "Durable Fabric"
    ],
    "offers": [
      {
        "type": "bundle",
        "text": "₹36 off — Add 2 items to unlock offer"
      },
      {
        "type": "bank",
        "text": "Paytm ₹50 off"
      },
      {
        "type": "bank",
        "text": "₹50 off on bank offers"
      }
    ],
    "buyAtPrice": 439,
    "img": "/products/wynx-black-track-1.png"
  },
  {
    "id": "wynx-solid-black-track-v2",
    "name": "Onyx Phantom Joggers",
    "price": 466,
    "oldPrice": 2499,
    "discount": 81,
    "category": "men",
    "subcategory": "Lowers",
    "badge": "Best Seller",
    "rating": 4.5,
    "reviews": 18,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "intensity": "Base",
    "tags": [
      "best-seller",
      "trending"
    ],
    "description": "Onyx Phantom Joggers — athletic slim-fit engineering with adaptive stretch fabric. Built for those who refuse to compromise between gym performance and street credibility. The tapered silhouette with elastic ankle cuffs seals the deal.",
    "features": [
      "Slim-Fit Design",
      "Elastic Ankle Cuffs",
      "Breathable Fabric",
      "Zip Pockets"
    ],
    "offers": [
      {
        "type": "bundle",
        "text": "₹37 off — Buy More Save More"
      }
    ],
    "buyAtPrice": 416,
    "img": "/products/wynx-black-track-2.png"
  },
  {
    "id": "wynx-solid-black-stripe-track",
    "name": "Apex Venom Stripers",
    "price": 435,
    "oldPrice": 2499,
    "discount": 83,
    "category": "men",
    "subcategory": "Lowers",
    "badge": "Top Deal",
    "rating": 4.3,
    "reviews": 15,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "intensity": "Base",
    "tags": [
      "trending",
      "best-seller"
    ],
    "description": "Apex Venom Stripers — black base with classic white side stripes that scream athletic finesse. A sporty staple for workouts, travel, and casual hangouts, built with soft stretchable fabric for unrestricted movement.",
    "features": [
      "Classic Side Stripes",
      "Stretchable Fabric",
      "Comfortable Elastic Waist",
      "Deep Pockets"
    ],
    "offers": [
      {
        "type": "bank",
        "text": "Best value for you — Bank offers available"
      }
    ],
    "buyAtPrice": 385,
    "img": "/products/wynx-black-3line-1.png"
  },
  {
    "id": "wynx-solid-blue-track",
    "name": "Nebula Coast Tracks",
    "price": 405,
    "oldPrice": 2499,
    "discount": 84,
    "category": "men",
    "subcategory": "Lowers",
    "badge": null,
    "rating": 4.4,
    "reviews": 12,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "intensity": "Base",
    "tags": [
      "new-arrival",
      "trending"
    ],
    "description": "Nebula Coast Tracks — a deep navy blue that hits different. Premium comfort meets refined styling with breathable, lightweight material engineered for gym sessions, morning jogs, or just owning the vibe wherever you go.",
    "features": [
      "Navy Blue Color",
      "Breathable Material",
      "Elastic Waistband",
      "Reinforced Stitching"
    ],
    "offers": [
      {
        "type": "bundle",
        "text": "₹36 off — Buy More Save More"
      }
    ],
    "buyAtPrice": 355,
    "img": "/products/wynx-navy-solid-1.png"
  },
  {
    "id": "wynx-solid-black-stripe-track-v2",
    "name": "Iron Flux Stripers",
    "price": 452,
    "oldPrice": 2499,
    "discount": 82,
    "category": "men",
    "subcategory": "Lowers",
    "badge": "Hot Deal",
    "rating": 4.7,
    "reviews": 14,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "intensity": "Base",
    "tags": [
      "best-seller"
    ],
    "description": "Iron Flux Stripers — featuring side stripe detailing on a jet-black canvas. Modern tapered fit with anti-shrink construction ensures these track pants hold their shape and style, wash after wash.",
    "features": [
      "Side Stripe Detail",
      "Tapered Fit",
      "Durable Construction",
      "Anti-Shrink Fabric"
    ],
    "offers": [
      {
        "type": "bundle",
        "text": "₹37 off — Buy More Save More"
      }
    ],
    "buyAtPrice": 402,
    "img": "/products/wynx-black-3line-1.png"
  },
  {
    "id": "wynx-4way-black-track-v1",
    "name": "Zenith Flex 4-Way Pro",
    "price": 489,
    "oldPrice": 1499,
    "discount": 67,
    "category": "men",
    "subcategory": "Lowers",
    "badge": null,
    "rating": 4.8,
    "reviews": 9,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL",
      "3XL"
    ],
    "intensity": "Base",
    "tags": [
      "new-arrival"
    ],
    "description": "Zenith Flex 4-Way Pro — engineered with 360° flex technology for unmatched freedom, whether you're crushing leg day or cruising through the weekend. The premium elastic waistband locks in comfort without the bulk.",
    "features": [
      "4-Way Stretch Fabric",
      "Elastic Waistband",
      "Deep Side Pockets",
      "Modern Fit"
    ],
    "offers": [
      {
        "type": "bundle",
        "text": "₹37 off — Add 2 items to unlock offer"
      }
    ],
    "buyAtPrice": 439,
    "img": "/products/wynx-black-track-1.png"
  },
  {
    "id": "wynx-solid-grey-track",
    "name": "Granite Haze Joggers",
    "price": 431,
    "oldPrice": 2499,
    "discount": 83,
    "category": "men",
    "subcategory": "Lowers",
    "badge": "Best Seller",
    "rating": 4.4,
    "reviews": 16,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "intensity": "Base",
    "tags": [
      "best-seller",
      "trending"
    ],
    "description": "Granite Haze Joggers — a versatile grey that pairs with literally everything. Soft, breathable fabric engineered for all-day zen. From the gym to the couch to the street, these joggers have zero off-days.",
    "features": [
      "Versatile Grey Color",
      "Soft Breathable Fabric",
      "Elastic Waistband",
      "Relaxed Athletic Fit"
    ],
    "offers": [
      {
        "type": "bundle",
        "text": "₹37 off — Buy More Save More"
      }
    ],
    "buyAtPrice": 381,
    "img": "/products/wynx-charcoal-track-1.png"
  },
  {
    "id": "wynx-solid-navy-blue-track",
    "name": "Mariner Storm Tracks",
    "price": 477,
    "oldPrice": 2499,
    "discount": 81,
    "category": "men",
    "subcategory": "Lowers",
    "badge": null,
    "rating": 4.3,
    "reviews": 11,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "intensity": "Base",
    "tags": [
      "new-arrival",
      "trending"
    ],
    "description": "Mariner Storm Tracks — deep navy blue meets premium lightweight engineering. Built for kings who demand both sharp aesthetics and all-day comfort, whether it's a power workout or a casual Saturday.",
    "features": [
      "Deep Navy Blue",
      "Lightweight Material",
      "Comfortable Elastic Waist",
      "Reinforced Stitching"
    ],
    "offers": [
      {
        "type": "bundle",
        "text": "₹36 off — Add 2 items to unlock offer"
      },
      {
        "type": "bank",
        "text": "Paytm ₹50 off"
      },
      {
        "type": "bank",
        "text": "₹50 off on bank offers"
      }
    ],
    "buyAtPrice": 427,
    "img": "/products/wynx-navy-solid-1.png"
  },
  {
    "id": "wynx-black-premium-track",
    "name": "Eclipse Monarch Lowers",
    "price": 443,
    "oldPrice": 1499,
    "discount": 70,
    "category": "men",
    "subcategory": "Lowers",
    "badge": "Top Rated",
    "rating": 4.9,
    "reviews": 7,
    "sizes": [
      "XL",
      "XXL"
    ],
    "intensity": "Base",
    "tags": [
      "best-seller"
    ],
    "description": "Eclipse Monarch Lowers — crafted for ultimate comfort with a sleek, boardroom-to-boulevard silhouette. Premium heavyweight fabric with excellent durability makes these the undisputed king of everyday track pants.",
    "features": [
      "Premium Quality Fabric",
      "Fitted Athletic Cut",
      "Elastic Waistband",
      "Durable & Long-Lasting"
    ],
    "offers": [
      {
        "type": "bundle",
        "text": "₹36 off — Add 2 items to unlock offer"
      },
      {
        "type": "bank",
        "text": "Paytm ₹50 off"
      },
      {
        "type": "bank",
        "text": "₹50 off on bank offers"
      }
    ],
    "buyAtPrice": 393,
    "img": "/products/wynx-black-track-1.png"
  },
  {
    "id": "wynx-4way-black-track-v2",
    "name": "Shadow Drift 4-Way Elite",
    "price": 486,
    "oldPrice": 1499,
    "discount": 68,
    "category": "men",
    "subcategory": "Lowers",
    "badge": "New Drop",
    "rating": 4.6,
    "reviews": 6,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL",
      "3XL"
    ],
    "intensity": "Base",
    "tags": [
      "new-arrival",
      "trending"
    ],
    "description": "Shadow Drift 4-Way Elite — the latest evolution of elite 4-way stretch technology. Advanced flex engineering meets relaxed modern aesthetics with deep pockets and an anti-shrink guarantee.",
    "features": [
      "4-Way Stretch Technology",
      "Relaxed Modern Fit",
      "Deep Pockets",
      "Anti-Shrink Fabric"
    ],
    "offers": [
      {
        "type": "bundle",
        "text": "₹36 off — Add 2 items to unlock offer"
      }
    ],
    "buyAtPrice": 436,
    "img": "/products/wynx-black-track-2.png"
  },
  {
    "id": "wynx-3line-black-track",
    "name": "Blitz Vanguard 3-Line",
    "price": 445,
    "oldPrice": 1499,
    "discount": 70,
    "category": "men",
    "subcategory": "Lowers",
    "badge": null,
    "rating": 4.2,
    "reviews": 10,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL",
      "3XL"
    ],
    "intensity": "Base",
    "tags": [
      "trending"
    ],
    "description": "Blitz Vanguard 3-Line — the triple-stripe icon in jet black. Bold athletic energy with soft, stretchable fabric that moves when you move. A sporty classic reimagined for the modern man.",
    "features": [
      "3-Line Stripe Design",
      "Stretchable Fabric",
      "Elastic Waistband",
      "Comfortable Athletic Fit"
    ],
    "offers": [
      {
        "type": "bundle",
        "text": "₹36 off — Buy More Save More"
      }
    ],
    "buyAtPrice": 395,
    "img": "/products/wynx-black-3line-1.png"
  },
  {
    "id": "wynx-ns-black-track",
    "name": "Cipher Stealth Lowers",
    "price": 428,
    "oldPrice": 1499,
    "discount": 71,
    "category": "men",
    "subcategory": "Lowers",
    "badge": "New Drop",
    "rating": 4.5,
    "reviews": 8,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL",
      "3XL"
    ],
    "intensity": "Base",
    "tags": [
      "new-arrival"
    ],
    "description": "Cipher Stealth Lowers — no stripes, no noise, just pure minimalist energy. Clean black with subtle WYNX branding, a drawstring waistband, and anti-wrinkle tech for effortless drip on the go.",
    "features": [
      "NS Minimalist Design",
      "Drawstring Waistband",
      "Deep Side Pockets",
      "Anti-Wrinkle Fabric"
    ],
    "offers": [
      {
        "type": "bundle",
        "text": "₹36 off — Add 2 items to unlock offer"
      }
    ],
    "buyAtPrice": 378,
    "img": "/products/wynx-black-track-1.png"
  },
  {
    "id": "wynx-solid-grey-track-v2",
    "name": "Titanium Surge Joggers",
    "price": 485,
    "oldPrice": 1499,
    "discount": 68,
    "category": "men",
    "subcategory": "Lowers",
    "badge": null,
    "rating": 4.3,
    "reviews": 7,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "intensity": "Base",
    "tags": [
      "new-arrival",
      "trending"
    ],
    "description": "Titanium Surge Joggers — charcoal grey redefined. Premium breathable fabric meets athletic silhouette with WYNX logo detailing. Built to perform from sunrise to sunset without breaking a sweat.",
    "features": [
      "Charcoal Grey Color",
      "Breathable Fabric",
      "Elastic Waistband",
      "Comfortable Athletic Fit"
    ],
    "offers": [
      {
        "type": "bundle",
        "text": "₹36 off — Add 2 items to unlock offer"
      }
    ],
    "buyAtPrice": 435,
    "img": "/products/wynx-charcoal-track-2.png"
  },
  {
    "id": "wynx-solid-grey-track-v3",
    "name": "Carbon Mist Lowers",
    "price": 443,
    "oldPrice": 1499,
    "discount": 70,
    "category": "men",
    "subcategory": "Lowers",
    "badge": "Popular",
    "rating": 4.5,
    "reviews": 13,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "intensity": "Base",
    "tags": [
      "trending",
      "best-seller"
    ],
    "description": "Carbon Mist Lowers — premium charcoal grey with tapered fit and bold WYNX branding. Durable fabric that maintains its shape wash after wash. The essential athleisure piece for every wardrobe.",
    "features": [
      "Premium Charcoal Grey",
      "Tapered Fit",
      "Durable Fabric",
      "Shape-Retaining Material"
    ],
    "offers": [
      {
        "type": "bundle",
        "text": "₹36 off — Add 2 items to unlock offer"
      }
    ],
    "buyAtPrice": 393,
    "img": "/products/wynx-charcoal-track-1.png"
  },
  {
    "id": "wynx-solid-blue-track-v2",
    "name": "Sapphire Reign Tracks",
    "price": 453,
    "oldPrice": 2499,
    "discount": 82,
    "category": "men",
    "subcategory": "Lowers",
    "badge": "Best Seller",
    "rating": 4.6,
    "reviews": 19,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "intensity": "Base",
    "tags": [
      "best-seller",
      "trending"
    ],
    "description": "Sapphire Reign Tracks — a rich navy blue canvas with WYNX signature branding. Lightweight premium fabric delivers all-day comfort while the elastic waistband and deep pockets keep you moving seamlessly.",
    "features": [
      "Rich Navy Blue",
      "Lightweight Fabric",
      "Elastic Waistband",
      "Deep Pockets"
    ],
    "offers": [
      {
        "type": "bundle",
        "text": "₹36 off — Buy More Save More"
      }
    ],
    "buyAtPrice": 403,
    "img": "/products/wynx-navy-track-1.png"
  },
  {
    "id": "wynx-3line-navy-blue-track",
    "name": "Indigo Pulse 3-Line",
    "price": 401,
    "oldPrice": 1499,
    "discount": 73,
    "category": "men",
    "subcategory": "Lowers",
    "badge": null,
    "rating": 4.1,
    "reviews": 11,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL",
      "3XL"
    ],
    "intensity": "Base",
    "tags": [
      "trending"
    ],
    "description": "Indigo Pulse 3-Line — classic triple white stripes on a deep navy blue base. The intersection of sport and style, made with soft stretchable fabric and WYNX logo for maximum branded appeal.",
    "features": [
      "3-Line Stripe Design",
      "Navy Blue Color",
      "Stretchable Fabric",
      "Elastic Waistband"
    ],
    "offers": [
      {
        "type": "bundle",
        "text": "₹36 off — Buy More Save More"
      }
    ],
    "buyAtPrice": 351,
    "img": "/products/wynx-navy-3line-1.png"
  },
  {
    "id": "wynx-ns-black-track-v2",
    "name": "Obsidian Aura Minimal",
    "price": 402,
    "oldPrice": 1499,
    "discount": 73,
    "category": "men",
    "subcategory": "Lowers",
    "badge": null,
    "rating": 4.4,
    "reviews": 6,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL",
      "3XL"
    ],
    "intensity": "Base",
    "tags": [
      "new-arrival"
    ],
    "description": "Obsidian Aura Minimal — the understated classic. No-stripe, all-class. Premium NS styling with WYNX logo, drawstring waistband, and breathable fabric for a sleek, low-key look that speaks volumes.",
    "features": [
      "NS Clean Design",
      "Drawstring Waistband",
      "Relaxed Modern Fit",
      "Breathable Fabric"
    ],
    "offers": [
      {
        "type": "bundle",
        "text": "₹36 off — Add 2 items to unlock offer"
      }
    ],
    "buyAtPrice": 352,
    "img": "/products/wynx-black-track-2.png"
  },
  {
    "id": "wynx-solid-grey-track-v4",
    "name": "Slate Forge Tracks",
    "price": 417,
    "oldPrice": 1499,
    "discount": 72,
    "category": "men",
    "subcategory": "Lowers",
    "badge": "Hot Deal",
    "rating": 4.6,
    "reviews": 8,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "intensity": "Base",
    "tags": [
      "trending",
      "new-arrival"
    ],
    "description": "Slate Forge Tracks — premium charcoal grey with WYNX signature logo. High-quality breathable fabric meets a comfortable athletic build with elastic waistband and drawstring closure.",
    "features": [
      "Premium Charcoal Grey",
      "Breathable Fabric",
      "Drawstring Closure",
      "Athletic Fit"
    ],
    "offers": [
      {
        "type": "bundle",
        "text": "₹36 off — Add 2 items to unlock offer"
      }
    ],
    "buyAtPrice": 367,
    "img": "/products/wynx-charcoal-track-2.png"
  },
  {
    "id": "wynx-self-design-black-track",
    "name": "Noir Kinetic Weave",
    "price": 441,
    "oldPrice": 1499,
    "discount": 71,
    "category": "men",
    "subcategory": "Lowers",
    "badge": "Exclusive",
    "rating": 4.7,
    "reviews": 9,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "intensity": "Base",
    "tags": [
      "new-arrival",
      "best-seller"
    ],
    "description": "Noir Kinetic Weave — featuring a subtle self-design texture that sets you apart. Premium craftsmanship meets comfort with WYNX logo branding and a unique textured look that elevates every outfit.",
    "features": [
      "Self Design Pattern",
      "Textured Black Fabric",
      "Wynx Logo Branding",
      "Premium Build Quality"
    ],
    "offers": [
      {
        "type": "bundle",
        "text": "₹36 off — Add 2 items to unlock offer"
      }
    ],
    "buyAtPrice": 391,
    "img": "/products/wynx-black-panel-1.png"
  },
  {
    "id": "wynx-ns-black-track-v3",
    "name": "Phantom Grid Tracks",
    "price": 479,
    "oldPrice": 1499,
    "discount": 68,
    "category": "men",
    "subcategory": "Lowers",
    "badge": null,
    "rating": 4.5,
    "reviews": 7,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL",
      "3XL"
    ],
    "intensity": "Base",
    "tags": [
      "new-arrival",
      "trending"
    ],
    "description": "Phantom Grid Tracks — the latest NS edition with refined modern fit and bold WYNX logo. Soft anti-wrinkle fabric and elastic drawstring waistband deliver comfort that goes the distance.",
    "features": [
      "NS Modern Fit",
      "Anti-Wrinkle Fabric",
      "Drawstring Waistband",
      "Wynx Logo Branding"
    ],
    "offers": [
      {
        "type": "bundle",
        "text": "₹36 off — Add 2 items to unlock offer"
      }
    ],
    "buyAtPrice": 429,
    "img": "/products/wynx-black-track-1.png"
  },
  {
    "id": "wynx-ns-navy-blue-track",
    "name": "Atlas Navy Lowers",
    "price": 436,
    "oldPrice": 1499,
    "discount": 71,
    "category": "men",
    "subcategory": "Lowers",
    "badge": null,
    "rating": 4.3,
    "reviews": 6,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL",
      "3XL"
    ],
    "intensity": "Base",
    "tags": [
      "new-arrival"
    ],
    "description": "Atlas Navy Lowers — a clean no-stripe design in deep navy blue with WYNX logo branding. The relaxed modern fit and elastic waistband make these your everyday go-to for effortless style.",
    "features": [
      "NS No-Stripe Design",
      "Deep Navy Blue",
      "Elastic Waistband",
      "Relaxed Modern Fit"
    ],
    "offers": [
      {
        "type": "bundle",
        "text": "₹36 off — Add 2 items to unlock offer"
      }
    ],
    "buyAtPrice": 386,
    "img": "/products/wynx-navy-solid-1.png"
  },
  {
    "id": "wynx-4way-navy-blue-track",
    "name": "Oceanic Flex 4-Way Pro",
    "price": 483,
    "oldPrice": 1499,
    "discount": 68,
    "category": "men",
    "subcategory": "Lowers",
    "badge": "Top Rated",
    "rating": 4.8,
    "reviews": 10,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL",
      "3XL"
    ],
    "intensity": "Pro",
    "tags": [
      "trending",
      "best-seller"
    ],
    "description": "Oceanic Flex 4-Way Pro — premium 4-way stretch fabric in deep navy blue for 360° flexibility. The WYNX logo and tapered athletic fit make this ideal for gym warriors and street style kings alike.",
    "features": [
      "4-Way Stretch Fabric",
      "Navy Blue Color",
      "Tapered Athletic Fit",
      "Maximum Flexibility"
    ],
    "offers": [
      {
        "type": "bundle",
        "text": "₹37 off — Add 2 items to unlock offer"
      }
    ],
    "buyAtPrice": 433,
    "img": "/products/wynx-navy-track-1.png"
  },
  {
    "id": "wynx-ns-navy-blue-track-v2",
    "name": "Tidal Drift Joggers",
    "price": 437,
    "oldPrice": 1499,
    "discount": 71,
    "category": "men",
    "subcategory": "Lowers",
    "badge": null,
    "rating": 4.4,
    "reviews": 7,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL",
      "3XL"
    ],
    "intensity": "Base",
    "tags": [
      "new-arrival",
      "trending"
    ],
    "description": "Tidal Drift Joggers — a refined no-stripe navy blue design with drawstring waistband and WYNX logo. Modern relaxed fit meets superior comfort for all-day wearability.",
    "features": [
      "NS Refined Design",
      "Navy Blue",
      "Drawstring Waistband",
      "Modern Relaxed Fit"
    ],
    "offers": [
      {
        "type": "bundle",
        "text": "₹37 off — Add 2 items to unlock offer"
      }
    ],
    "buyAtPrice": 387,
    "img": "/products/wynx-navy-track-1.png"
  },
  {
    "id": "wynx-self-design-black-track-v2",
    "name": "Darksteel Weave Elite",
    "price": 455,
    "oldPrice": 1499,
    "discount": 70,
    "category": "men",
    "subcategory": "Lowers",
    "badge": "Exclusive",
    "rating": 4.6,
    "reviews": 8,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "intensity": "Base",
    "tags": [
      "new-arrival",
      "best-seller"
    ],
    "description": "Darksteel Weave Elite — self-design artistry meets premium craftsmanship. Subtle textured panels on black fabric with WYNX logo branding create a unique, sophisticated look that's impossible to replicate.",
    "features": [
      "Black Patti Design",
      "Textured Panels",
      "Premium Fabric",
      "Wynx Logo Branding"
    ],
    "offers": [
      {
        "type": "bundle",
        "text": "₹37 off — Add 2 items to unlock offer"
      }
    ],
    "buyAtPrice": 405,
    "img": "/products/wynx-black-panel-1.png"
  },
  {
    "id": "wynx-3line-navy-blue-track-v2",
    "name": "Cobalt Blaze 3-Line",
    "price": 472,
    "oldPrice": 1499,
    "discount": 69,
    "category": "men",
    "subcategory": "Lowers",
    "badge": null,
    "rating": 4.2,
    "reviews": 10,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL",
      "3XL"
    ],
    "intensity": "Base",
    "tags": [
      "trending",
      "best-seller"
    ],
    "description": "Cobalt Blaze 3-Line — the latest edition of the iconic triple-stripe in deep navy. Bold white side stripes meet WYNX heritage branding, wrapped in comfortable stretchable fabric.",
    "features": [
      "3-Line Stripe Design",
      "Deep Navy Blue",
      "Stretchable Fabric",
      "Wynx Logo Branding"
    ],
    "offers": [
      {
        "type": "bundle",
        "text": "₹36 off — Buy More Save More"
      }
    ],
    "buyAtPrice": 422,
    "img": "/products/wynx-navy-3line-2.png"
  },
  {
    "id": "wynx-4way-navy-blue-track-v2",
    "name": "Neptune Surge 4-Way Stretch",
    "price": 498,
    "oldPrice": 1499,
    "discount": 67,
    "category": "men",
    "subcategory": "Lowers",
    "badge": null,
    "rating": 4.7,
    "reviews": 6,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL",
      "3XL"
    ],
    "intensity": "Pro",
    "tags": [
      "new-arrival",
      "trending"
    ],
    "description": "Neptune Surge 4-Way Stretch — premium 4-way stretch fabric in deep navy blue for ultimate flexibility and comfort. WYNX logo and modern tapered fit make these perfect for performance and leisure alike.",
    "features": [
      "4-Way Stretch Fabric",
      "Deep Navy Blue",
      "Tapered Modern Fit",
      "Wynx Logo Branding"
    ],
    "offers": [
      {
        "type": "bundle",
        "text": "₹36 off — Add 2 items to unlock offer"
      }
    ],
    "buyAtPrice": 448,
    "img": "/products/wynx-navy-solid-1.png"
  },
  {
    "id": "wynx-self-design-blue-track",
    "name": "Azure Luxe Patti Lowers",
    "price": 494,
    "oldPrice": 1499,
    "discount": 67,
    "category": "men",
    "subcategory": "Lowers",
    "badge": "New Drop",
    "rating": 4.5,
    "reviews": 5,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL",
      "3XL"
    ],
    "intensity": "Base",
    "tags": [
      "new-arrival"
    ],
    "description": "Azure Luxe Patti Lowers — subtle self-design texture in deep navy blue for a one-of-a-kind look. WYNX logo branding and premium fabric combine style with all-day wearable comfort.",
    "features": [
      "Blue Patti Design",
      "Textured Fabric",
      "Wynx Logo Branding",
      "Comfortable Fit"
    ],
    "offers": [
      {
        "type": "bundle",
        "text": "₹36 off — Add 2 items to unlock offer"
      }
    ],
    "buyAtPrice": 444,
    "img": "/products/wynx-navy-3line-1.png"
  },
  {
    "id": "wynx-self-design-blue-track-v2",
    "name": "Deep Tide Weave Tracks",
    "price": 493,
    "oldPrice": 1499,
    "discount": 67,
    "category": "men",
    "subcategory": "Lowers",
    "badge": null,
    "rating": 4.4,
    "reviews": 7,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL",
      "3XL"
    ],
    "intensity": "Base",
    "tags": [
      "new-arrival",
      "trending"
    ],
    "description": "Deep Tide Weave Tracks — refined self-design pattern in deep navy with WYNX logo branding. Premium quality fabric delivers all-day comfort with a textured look that turns heads.",
    "features": [
      "Blue Patti Pattern",
      "Refined Design",
      "Premium Fabric",
      "All-Day Comfort"
    ],
    "offers": [
      {
        "type": "bundle",
        "text": "₹36 off — Add 2 items to unlock offer"
      }
    ],
    "buyAtPrice": 443,
    "img": "/products/wynx-navy-3line-2.png"
  },
  {
    "id": "wynx-self-design-black-track-v3",
    "name": "Ironclad Patti Joggers",
    "price": 466,
    "oldPrice": 1499,
    "discount": 69,
    "category": "men",
    "subcategory": "Lowers",
    "badge": "Popular",
    "rating": 4.5,
    "reviews": 11,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL",
      "3XL"
    ],
    "intensity": "Base",
    "tags": [
      "trending",
      "best-seller"
    ],
    "description": "Ironclad Patti Joggers — subtle textured panels on deep black with WYNX logo branding. Premium fabric, elastic waistband, and a comfortable athletic fit make these a daily essential.",
    "features": [
      "Black Patti Design",
      "Textured Panels",
      "Athletic Fit",
      "Wynx Logo Branding"
    ],
    "offers": [
      {
        "type": "bundle",
        "text": "₹36 off — Add 2 items to unlock offer"
      }
    ],
    "buyAtPrice": 416,
    "img": "/products/wynx-black-panel-1.png"
  },
  {
    "id": "wynx-shorts-alpine-white",
    "name": "Alpine Frost Sport Shorts",
    "price": 479,
    "oldPrice": 1499,
    "discount": 68,
    "category": "men",
    "subcategory": "Shorts",
    "badge": "New Drop",
    "rating": 4.8,
    "reviews": 17,
    "sizes": ["M", "L", "XL", "XXL"],
    "intensity": "Base",
    "tags": ["new-arrival", "shorts", "trending"],
    "description": "Alpine Frost Sport Shorts — pristine white with a clean, minimal WYNX script logo. Ultra-lightweight performance fabric with a relaxed athletic fit. These shorts bring effortless sophistication to your gym-to-street rotation.",
    "features": ["Pristine White Colorway", "WYNX Script Logo", "Lightweight Performance Fabric", "Relaxed Athletic Fit"],
    "offers": [{"type": "bank", "text": "₹50 off on bank offers"}],
    "buyAtPrice": 429,
    "img": "/products/wynx-shorts-white-v2.png",
    "reviewData": [
      {"name": "Sameer Khatri", "rating": 5, "text": "Cleanest white shorts I've owned — the fabric doesn't go see-through and the WYNX logo is subtle but premium. Perfect for summer workouts."},
      {"name": "Dhruv Malhotra", "rating": 4, "text": "Love the relaxed fit and breathable material. Only wish they came in a 3XL. Otherwise flawless quality for this price range."},
      {"name": "Ishaan Batra", "rating": 5, "text": "Wore these to the gym and got three compliments. The white stays white even after multiple washes. Impressive build quality."},
      {"name": "Neil Kapoor", "rating": 4, "text": "Great for both training and casual outings. The elastic waist sits just right without feeling too tight. Solid purchase."}
    ]
  },
  {
    "id": "wynx-shorts-sand-drift",
    "name": "Sand Drift Lounge Shorts",
    "price": 489,
    "oldPrice": 1599,
    "discount": 69,
    "category": "men",
    "subcategory": "Shorts",
    "badge": "Trending",
    "rating": 4.9,
    "reviews": 14,
    "sizes": ["M", "L", "XL", "XXL"],
    "intensity": "Base",
    "tags": ["trending", "shorts", "best-seller"],
    "description": "Sand Drift Lounge Shorts — warm beige with the iconic WYNX script logo. A neutral-tone essential that pairs effortlessly with any top. Crafted from premium cotton-blend fabric for all-day comfort whether you're training or unwinding.",
    "features": ["Warm Beige Tone", "Premium Cotton-Blend", "WYNX Script Logo", "Deep Side Pockets"],
    "offers": [{"type": "bundle", "text": "₹36 off — Add 2 items to unlock offer"}],
    "buyAtPrice": 439,
    "img": "/products/wynx-shorts-beige-v2.png",
    "reviewData": [
      {"name": "Kabir Sehgal", "rating": 5, "text": "This beige tone is incredible — neutral enough for everything but still looks premium. The fabric quality surprised me at this price point."},
      {"name": "Yash Singhania", "rating": 5, "text": "These are my new go-to for weekends. Super comfortable, the fit is just right, and the beige color is exactly as shown."},
      {"name": "Rohan Dasgupta", "rating": 4, "text": "Love the earth-tone aesthetic. They pair well with both black and white tees. The cotton-blend feels luxurious against the skin."},
      {"name": "Arnav Thakur", "rating": 5, "text": "Ordered two pairs because the first one was so good. The drawstring waist holds perfectly during squats. Top-notch quality from WYNX."}
    ]
  },
  {
    "id": "wynx-shorts-midnight-navy",
    "name": "Midnight Cruise Navy Shorts",
    "price": 469,
    "oldPrice": 1399,
    "discount": 66,
    "category": "men",
    "subcategory": "Shorts",
    "badge": "Best Seller",
    "rating": 4.8,
    "reviews": 22,
    "sizes": ["M", "L", "XL", "XXL"],
    "intensity": "High",
    "tags": ["best-seller", "shorts", "trending"],
    "description": "Midnight Cruise Navy Shorts — deep navy with white WYNX script branding. Engineered for versatility — from morning runs to evening hangouts. The dark navy never fades and the fabric dries in minutes after a wash.",
    "features": ["Deep Navy Colorway", "Quick-Dry Fabric", "WYNX Script Branding", "Fade-Resistant Dye"],
    "offers": [{"type": "bundle", "text": "₹37 off — Buy More Save More"}],
    "buyAtPrice": 419,
    "img": "/products/wynx-shorts-navy-v2.png",
    "reviewData": [
      {"name": "Vikram Joshi", "rating": 5, "text": "Navy is always a safe bet but these elevate it to another level. The fit is modern, not baggy, and the logo placement is tasteful."},
      {"name": "Aditya Choudhary", "rating": 4, "text": "Wore them for a 10K run and they performed like premium running shorts. Zero chafing, great breathability. Will buy the black version next."},
      {"name": "Karan Mehra", "rating": 5, "text": "The color is a perfect deep navy — not too bright, not too dark. These look and feel way more expensive than they cost."},
      {"name": "Pranav Nair", "rating": 5, "text": "Fast delivery and the packaging felt premium. The shorts themselves are excellent — lightweight, well-stitched, and the navy is gorgeous."}
    ]
  },
  {
    "id": "wynx-shorts-obsidian-core",
    "name": "Obsidian Core Essential Shorts",
    "price": 459,
    "oldPrice": 1299,
    "discount": 65,
    "category": "men",
    "subcategory": "Shorts",
    "badge": "Top Rated",
    "rating": 4.9,
    "reviews": 26,
    "sizes": ["M", "L", "XL", "XXL"],
    "intensity": "High",
    "tags": ["best-seller", "shorts", "new-arrival"],
    "description": "Obsidian Core Essential Shorts — deep matte black with white WYNX script logo. The definitive black shorts for every man's rotation. Premium quick-dry fabric, reinforced stitching, and a fit that moves with you. The essential you never knew you needed.",
    "features": ["Deep Matte Black", "Reinforced Stitching", "Quick-Dry Performance", "WYNX Script Logo"],
    "offers": [{"type": "bundle", "text": "₹36 off — Add 2 items to unlock offer"}],
    "buyAtPrice": 409,
    "img": "/products/wynx-shorts-black-v2.png",
    "reviewData": [
      {"name": "Zain Ahmed", "rating": 5, "text": "These are the perfect black shorts. Period. The matte finish looks premium and the fabric doesn't pill even after heavy use."},
      {"name": "Aarav Sharma", "rating": 5, "text": "Bought these for the gym and ended up wearing them everywhere. The fit is spot-on and the black color stays rich wash after wash."},
      {"name": "Dev Rajput", "rating": 4, "text": "Solid staple shorts. The WYNX logo is clean and minimal. The waistband is comfortable for long wear. Would recommend to anyone."},
      {"name": "Reyansh Verma", "rating": 5, "text": "Quality is exceptional for the price. These look and feel like they should cost twice as much. The deep black is exactly what I wanted."}
    ]
  },
  {
    "id": "wynx-shorts-graphite-flex",
    "name": "Graphite Flex Training Shorts",
    "price": 499,
    "oldPrice": 1599,
    "discount": 69,
    "category": "men",
    "subcategory": "Shorts",
    "badge": "Premium",
    "rating": 4.7,
    "reviews": 13,
    "sizes": ["M", "L", "XL", "XXL"],
    "intensity": "High",
    "tags": ["premium", "shorts", "new-arrival"],
    "description": "Graphite Flex Training Shorts — sleek charcoal-grey with white WYNX branding. The darkest grey in the lineup delivers a stealth aesthetic while the 4-way stretch fabric handles every lunge, sprint, and deadlift. For the man who trains hard and looks harder.",
    "features": ["Charcoal Grey Colorway", "4-Way Stretch Fabric", "WYNX Performance Logo", "Ergonomic Cut"],
    "offers": [{"type": "bank", "text": "₹50 off on bank offers"}],
    "buyAtPrice": 449,
    "img": "/products/wynx-shorts-charcoal-v2.png",
    "reviewData": [
      {"name": "Omar Hussain", "rating": 5, "text": "The charcoal color is stunning in person. Not too light, not black — just perfect. The stretch fabric makes these ideal for leg day."},
      {"name": "Vivaan Saxena", "rating": 4, "text": "Great fit and the charcoal looks sharp with any color top. The WYNX logo on the thigh is a nice touch. Very comfortable for all-day wear."},
      {"name": "Harsh Agarwal", "rating": 5, "text": "These are the best training shorts I've used. The stretch is incredible and they don't ride up during squats. Premium feel throughout."},
      {"name": "Lakshya Patel", "rating": 5, "text": "Ordered based on the product photo and they look even better in real life. The fabric quality is outstanding and delivery was super fast."}
    ]
  },
  {
    "id": "wynx-shorts-horizon-steel",
    "name": "Horizon Steel Sport Shorts",
    "price": 489,
    "oldPrice": 1599,
    "discount": 69,
    "category": "men",
    "subcategory": "Shorts",
    "badge": "New Drop",
    "rating": 4.8,
    "reviews": 16,
    "sizes": ["M", "L", "XL", "XXL"],
    "intensity": "Base",
    "tags": ["new-arrival", "shorts", "trending"],
    "description": "Horizon Steel Sport Shorts — a refined steel blue that bridges the gap between casual and athletic. The WYNX script logo in white pops against the muted blue, while the quick-dry fabric keeps you fresh through any workout. A versatile colorway built for the modern man.",
    "features": ["Steel Blue Colorway", "Quick-Dry Technology", "WYNX Script Branding", "Relaxed Athletic Fit"],
    "offers": [{"type": "bundle", "text": "₹36 off — Add 2 items to unlock offer"}],
    "buyAtPrice": 439,
    "img": "/products/wynx-shorts-steelblue-v2.jpg",
    "reviewData": [
      {"name": "Arjun Menon", "rating": 5, "text": "The steel blue is unique — haven't seen this shade anywhere else. The fabric is lightweight but feels durable. Love the understated WYNX branding."},
      {"name": "Siddharth Rao", "rating": 4, "text": "Perfect color for summer. These pair beautifully with a white tee. Comfortable enough for all-day wear, even in the heat."},
      {"name": "Nikhil Tandon", "rating": 5, "text": "Ordered for gym use but I wear them everywhere now. The blue is calming yet bold. Excellent stitching and the elastic waist is soft."},
      {"name": "Rishi Grover", "rating": 5, "text": "The color in person is even better than the photos. Premium feel, great fit, and fast delivery. WYNX keeps raising the bar."}
    ]
  },
  {
    "id": "wynx-shorts-ranger-olive",
    "name": "Ranger Tactical Olive Shorts",
    "price": 499,
    "oldPrice": 1599,
    "discount": 69,
    "category": "men",
    "subcategory": "Shorts",
    "badge": "Limited",
    "rating": 4.9,
    "reviews": 12,
    "sizes": ["M", "L", "XL", "XXL"],
    "intensity": "High",
    "tags": ["limited", "shorts", "best-seller"],
    "description": "Ranger Tactical Olive Shorts — deep military olive with crisp white WYNX script logo. Inspired by tactical utility wear but refined for street and gym. The dark olive tone commands respect while the performance fabric delivers unrestricted movement.",
    "features": ["Military Olive Tone", "Tactical Utility Style", "WYNX Performance Logo", "4-Way Stretch"],
    "offers": [{"type": "bundle", "text": "₹37 off — Buy More Save More"}],
    "buyAtPrice": 449,
    "img": "/products/wynx-shorts-olive-v2.jpg",
    "reviewData": [
      {"name": "Kunal Bhatt", "rating": 5, "text": "These olive shorts are a must-have. The military green tone is deep and rich, not washed out. Perfect for outdoor runs and weekend errands."},
      {"name": "Shaurya Reddy", "rating": 5, "text": "The color is absolutely fire — pairs perfectly with black and white tops. The stretch fabric makes leg day so much more comfortable."},
      {"name": "Mohit Chauhan", "rating": 4, "text": "Love the tactical vibe. These feel rugged but look refined at the same time. The WYNX logo placement on the thigh is tasteful."},
      {"name": "Raghav Sinha", "rating": 5, "text": "Got compliments the very first day I wore these. The olive color is versatile and the build quality is exceptional for this price."}
    ]
  },
  {
    "id": "wynx-shorts-deep-teal",
    "name": "Deep Tide Teal Shorts",
    "price": 479,
    "oldPrice": 1499,
    "discount": 68,
    "category": "men",
    "subcategory": "Shorts",
    "badge": "Trending",
    "rating": 4.8,
    "reviews": 19,
    "sizes": ["M", "L", "XL", "XXL"],
    "intensity": "High",
    "tags": ["trending", "shorts", "new-arrival"],
    "description": "Deep Tide Teal Shorts — a bold, saturated teal that stands out from every angle. White WYNX branding pops against the deep oceanic tone. Engineered with sweat-wicking fabric for high-intensity training sessions while looking effortlessly premium.",
    "features": ["Deep Teal Colorway", "Sweat-Wicking Fabric", "WYNX Script Logo", "Side-Slit Design"],
    "offers": [{"type": "bank", "text": "₹50 off on bank offers"}],
    "buyAtPrice": 429,
    "img": "/products/wynx-shorts-teal-v2.jpg",
    "reviewData": [
      {"name": "Ethan Fernandes", "rating": 5, "text": "The teal is absolutely gorgeous — deep and rich without being too loud. These are my new favorite gym shorts. The fit is perfect."},
      {"name": "Veer Malhotra", "rating": 4, "text": "Such a refreshing color. Not the typical black or grey — these stand out in the best way. Comfortable and well-made."},
      {"name": "Krish Oberoi", "rating": 5, "text": "Bought these on a whim and they exceeded every expectation. The teal pops in natural light and the fabric breathes incredibly well."},
      {"name": "Farhan Qureshi", "rating": 5, "text": "The sweat-wicking feature actually works. Wore these for a HIIT session and stayed dry throughout. The teal color gets me compliments every time."}
    ]
  },
  {
    "id": "wynx-shorts-cloud-grey",
    "name": "Cloud Nine Grey Flex Shorts",
    "price": 469,
    "oldPrice": 1399,
    "discount": 66,
    "category": "men",
    "subcategory": "Shorts",
    "badge": "Best Seller",
    "rating": 4.7,
    "reviews": 21,
    "sizes": ["M", "L", "XL", "XXL"],
    "intensity": "Base",
    "tags": ["best-seller", "shorts"],
    "description": "Cloud Nine Grey Flex Shorts — a versatile mid-grey with white WYNX branding. The neutral grey pairs with literally everything in your wardrobe. Lightweight and stretchy with deep pockets and a secure elastic waistband. The everyday essential.",
    "features": ["Mid-Grey Neutral Tone", "Lightweight Stretch Fabric", "WYNX Script Branding", "Deep Pockets"],
    "offers": [{"type": "bundle", "text": "₹36 off — Add 2 items to unlock offer"}],
    "buyAtPrice": 419,
    "img": "/products/wynx-shorts-grey-v2.jpg",
    "reviewData": [
      {"name": "Ansh Kapoor", "rating": 5, "text": "Finally a grey that doesn't look boring. This mid-tone is perfect and the fabric feels soft yet sturdy. Great for gym and casual wear."},
      {"name": "Parth Mehta", "rating": 4, "text": "These are incredibly versatile — I've worn them with black tees, white polos, even a casual blazer. The grey is clean and modern."},
      {"name": "Tanay Jain", "rating": 5, "text": "The stretch on these is amazing. They move with you during workouts but still look put-together for coffee runs after. Excellent value."},
      {"name": "Manav Khanna", "rating": 4, "text": "Solid grey shorts with a premium feel. The WYNX logo is subtle and classy. The elastic waistband is comfortable without being loose."}
    ]
  },
  {
    "id": "wynx-shorts-sage-mist",
    "name": "Sage Mist Lounge Shorts",
    "price": 489,
    "oldPrice": 1599,
    "discount": 69,
    "category": "men",
    "subcategory": "Shorts",
    "badge": "Premium",
    "rating": 4.9,
    "reviews": 11,
    "sizes": ["M", "L", "XL", "XXL"],
    "intensity": "Base",
    "tags": ["premium", "shorts", "trending"],
    "description": "Sage Mist Lounge Shorts — a soft, muted sage green with black WYNX script logo. An earthy, calming tone that brings a fresh perspective to your shorts rotation. Premium cotton-blend fabric with a relaxed fit designed for all-day comfort and effortless style.",
    "features": ["Sage Green Colorway", "Premium Cotton-Blend", "WYNX Script Logo", "Relaxed Lounge Fit"],
    "offers": [{"type": "bank", "text": "₹50 off on bank offers"}],
    "buyAtPrice": 439,
    "img": "/products/wynx-shorts-sage-v2.jpg",
    "reviewData": [
      {"name": "Zayn Mirza", "rating": 5, "text": "The sage green is absolutely beautiful — earthy and sophisticated. These feel like luxury loungewear. Perfect for weekends and light workouts."},
      {"name": "Advait Kulkarni", "rating": 5, "text": "This color is unique and refreshing. The cotton-blend fabric is soft against the skin. I've already ordered a second pair for my brother."},
      {"name": "Tejas Iyer", "rating": 4, "text": "Love the muted green tone — it's subtle but stylish. The fit is relaxed without being baggy. Great for summer days."},
      {"name": "Gaurav Tiwari", "rating": 5, "text": "WYNX knocked it out of the park with this sage colorway. Premium packaging, fast delivery, and the shorts themselves are top-tier quality."}
    ]
  },
  {
    "id": "wynx-panel-charcoal-track",
    "name": "Ashen Drift Panel Lowers",
    "price": 489,
    "oldPrice": 1699,
    "discount": 71,
    "category": "men",
    "subcategory": "Lowers",
    "badge": "New Drop",
    "rating": 4.8,
    "reviews": 5,
    "sizes": ["M", "L", "XL", "XXL", "3XL"],
    "intensity": "Pro",
    "tags": ["new-arrival", "trending"],
    "description": "Ashen Drift Panel Lowers — a sophisticated charcoal-grey two-tone panel design featuring contrast grey inserts and signature white piping. Built with premium smooth-knit fabric engineered for unrestricted movement. The panelled silhouette creates a sculptural athletic look unlike anything in your wardrobe.",
    "features": [
      "Dual-Panel Colour Block Design",
      "White Contrast Piping",
      "Premium Smooth-Knit Fabric",
      "Drawstring Elastic Waistband",
      "Deep Side Pockets"
    ],
    "offers": [
      {"type": "bundle", "text": "₹40 off — Add 2 items to unlock offer"},
      {"type": "bank", "text": "₹50 off on bank offers"}
    ],
    "buyAtPrice": 439,
    "img": "/products/wynx-charcoal-panel-1.png",
    "reviewData": [
      {"name": "Shreyansh Bhardwaj", "rating": 5, "date": "2 days ago", "text": "The charcoal panel design is absolutely elite. White piping gives it that premium edge. Fabric is incredibly smooth — feels like you're wearing liquid comfort. Best track pants I've bought in years."},
      {"name": "Prabhdeep Sidhu", "rating": 5, "date": "1 week ago", "text": "Ordered this on a whim and it completely blew me away. The two-tone panel look is unique and sophisticated. Got compliments at the gym within 10 minutes of wearing them. WYNX has a customer for life."},
      {"name": "Neeraj Rawat", "rating": 4, "date": "2 weeks ago", "text": "Quality is top-notch — the stitching on the panels is clean and precise. Drawstring waistband sits perfectly. Only giving 4 stars because I wish they had a 4XL option. Otherwise flawless."},
      {"name": "Sujith Menon", "rating": 5, "date": "3 weeks ago", "text": "These look way more premium than the price suggests. The charcoal tone is deep and rich — not a dull grey. Paired with white sneakers and a black tee, it's a complete fit. Super comfortable for long wear."},
      {"name": "Dilpreet Walia", "rating": 5, "date": "1 month ago", "text": "The panel cut design is genuinely unique — haven't seen this style at this price anywhere. Fabric is breathable and doesn't trap heat. Highly recommended for both gym and casual use."}
    ]
  },
  {
    "id": "wynx-panel-brown-track",
    "name": "Mocha Flux Panel Lowers",
    "price": 499,
    "oldPrice": 1799,
    "discount": 72,
    "category": "men",
    "subcategory": "Lowers",
    "badge": "Exclusive",
    "rating": 4.9,
    "reviews": 5,
    "sizes": ["M", "L", "XL", "XXL", "3XL"],
    "intensity": "Pro",
    "tags": ["new-arrival", "best-seller"],
    "description": "Mocha Flux Panel Lowers — a rare deep brown colourway with graphite-grey contrast panels and white piping detail. This earthy, warm tone brings a distinctly bold personality to athleisure. Crafted for the man who refuses to blend in. Premium comfort fabric with anti-pilling construction.",
    "features": [
      "Deep Brown Colourway",
      "Graphite Contrast Panel",
      "White Piping Detail",
      "Anti-Pilling Construction",
      "Comfortable Wide-Leg Fit"
    ],
    "offers": [
      {"type": "bundle", "text": "₹42 off — Add 2 items to unlock offer"},
      {"type": "bank", "text": "Paytm ₹50 off"}
    ],
    "buyAtPrice": 449,
    "img": "/products/wynx-brown-panel-1.png",
    "reviewData": [
      {"name": "Harjot Sandhu", "rating": 5, "date": "3 days ago", "text": "Brown track pants sound like an unusual choice but these look absolutely fire. The graphite panel and white piping make the whole design pop. Fabric quality is exceptional. Will order more colours."},
      {"name": "Mihir Trivedi", "rating": 5, "date": "1 week ago", "text": "This colour is so unique — you won't see anyone else wearing these. The deep brown tone is warm and earthy, pairs incredibly well with white or beige tees. Comfort level is 10/10."},
      {"name": "Sumeet Khatavkar", "rating": 4, "date": "10 days ago", "text": "The dual panel design on this brown colourway is genuinely premium-looking. Stitching is clean, fabric is smooth against skin. Perfect fit at XL. Minus one star because delivery took 4 days instead of 2."},
      {"name": "Rajkumar Pillai", "rating": 5, "date": "3 weeks ago", "text": "Got these as a gift for my brother and he absolutely loves them. The brown + grey combo is a head-turner. Fabric doesn't wrinkle easily and the waistband is very comfortable. WYNX quality is consistent."},
      {"name": "Gauransh Tomar", "rating": 5, "date": "1 month ago", "text": "These are my favourite WYNX purchase to date. The brown panel lower is exactly the kind of statement piece missing from the athleisure market. Build quality rivals brands 3x the price. Absolutely worth it."}
    ]
  },
  {
    "id": "wynx-panel-mauve-track",
    "name": "Rosewood Cipher Panel Lowers",
    "price": 479,
    "oldPrice": 1699,
    "discount": 72,
    "category": "men",
    "subcategory": "Lowers",
    "badge": "Limited",
    "rating": 4.7,
    "reviews": 5,
    "sizes": ["M", "L", "XL", "XXL"],
    "intensity": "Pro",
    "tags": ["new-arrival", "trending"],
    "description": "Rosewood Cipher Panel Lowers — a refined dusty mauve-pink colourway with graphite panel inserts and white piping. Designed for the bold man who embraces colour without compromise. The muted rose tone is sophisticated, not loud — a quiet flex that commands second glances. Premium breathable knit keeps you cool through every session.",
    "features": [
      "Muted Mauve-Rose Colourway",
      "Graphite Panel Inserts",
      "White Contrast Piping",
      "Breathable Knit Fabric",
      "Relaxed Wide-Leg Cut"
    ],
    "offers": [
      {"type": "bundle", "text": "₹44 off — Add 2 items to unlock offer"},
      {"type": "bank", "text": "₹50 off on bank offers"}
    ],
    "buyAtPrice": 429,
    "img": "/products/wynx-mauve-panel-1.png",
    "reviewData": [
      {"name": "Aaditya Inamdar", "rating": 5, "date": "1 day ago", "text": "Wasn't sure about mauve for men's track pants but these absolutely work. The dusty rose-grey combination is tasteful and unique. Several gym members stopped to ask where I got these. WYNX wins again."},
      {"name": "Keshav Balwani", "rating": 4, "date": "5 days ago", "text": "These are a brave colourway choice and it pays off completely. The muted mauve is very wearable — not too pink, not too grey. Fabric quality is premium and the panel design elevates the whole look significantly."},
      {"name": "Aniruddha Gogte", "rating": 5, "date": "2 weeks ago", "text": "Ordered this colour on my wife's suggestion and I'm so glad I did. The dusty rose tone is clean and masculine when paired right. Unbelievably comfortable for all-day use. The piping detail is crisp and well-finished."},
      {"name": "Ronit Chakravarti", "rating": 5, "date": "3 weeks ago", "text": "This is the most unique lower I own. The mauve panel design turns heads everywhere. Quality is outstanding — fabric is soft, breathable, and doesn't lose shape after washing. WYNX continues to impress."},
      {"name": "Virender Dhaliwal", "rating": 5, "date": "6 weeks ago", "text": "Bold colour, premium quality. The graphite contrast panels and white piping make this look far more expensive than it is. Ordered XL and the fit is perfect — not too tight, not too loose. Highly recommend."}
    ]
  },
  {
    "id": "wynx-panel-navy-track",
    "name": "Indigo Storm Panel Lowers",
    "price": 469,
    "oldPrice": 1599,
    "discount": 71,
    "category": "men",
    "subcategory": "Lowers",
    "badge": "New Drop",
    "rating": 4.8,
    "reviews": 5,
    "sizes": ["M", "L", "XL", "XXL", "3XL"],
    "intensity": "Pro",
    "tags": ["new-arrival", "trending", "best-seller"],
    "description": "Indigo Storm Panel Lowers — deep navy blue meets graphite contrast panels with signature white piping in a structured athletic silhouette. The dual-panel construction adds visual depth and dimension to a classic navy base. Built with smooth premium fabric for the athlete who refuses to sacrifice style for performance.",
    "features": [
      "Deep Navy Blue Base",
      "Graphite Contrast Panels",
      "White Signature Piping",
      "Smooth Premium Fabric",
      "Structured Athletic Fit"
    ],
    "offers": [
      {"type": "bundle", "text": "₹40 off — Add 2 items to unlock offer"},
      {"type": "bank", "text": "Paytm ₹50 off"}
    ],
    "buyAtPrice": 419,
    "img": "/products/wynx-navy-panel-1.png",
    "reviewData": [
      {"name": "Sachit Kulkarni", "rating": 5, "date": "2 days ago", "text": "The navy panel lower is an absolute stunner. Deep navy with graphite panels is such a premium combination. Fabric is top-tier smooth — zero irritation even after wearing for 8+ hours. My new daily go-to."},
      {"name": "Taranveer Singh", "rating": 5, "date": "1 week ago", "text": "Compared to my old navy track pants, these are on a completely different level. The panel design gives it that structured athletic look. White piping is sharp and clean. WYNX quality is seriously impressive."},
      {"name": "Devashish Pawar", "rating": 4, "date": "2 weeks ago", "text": "Great looking track pants with a very premium feel. The navy tone is rich and deep. Panel stitching is clean and precise. Would have given 5 stars but the pocket opening could be a touch wider. Still an excellent buy."},
      {"name": "Bhavesh Prajapati", "rating": 5, "date": "1 month ago", "text": "Ordered navy for my everyday athleisure and these exceeded all expectations. The panel cut makes them look like designer pieces. Breathable fabric keeps me cool through intense gym sessions. Absolutely value for money."},
      {"name": "Rithvik Nambiar", "rating": 5, "date": "6 weeks ago", "text": "These navy panel lowers are the best track pants I've worn. The combination of navy + graphite + white piping is sophisticated yet sporty. Fabric is smooth and premium. Fast delivery, great packaging. 10/10 WYNX."}
    ]
  },
  {
    "id": "wynx-panel-black-track",
    "name": "Shadow Veil Panel Lowers",
    "price": 459,
    "oldPrice": 1599,
    "discount": 71,
    "category": "men",
    "subcategory": "Lowers",
    "badge": "Hot Deal",
    "rating": 4.9,
    "reviews": 5,
    "sizes": ["M", "L", "XL", "XXL", "3XL"],
    "intensity": "Pro",
    "tags": ["new-arrival", "best-seller", "trending"],
    "description": "Shadow Veil Panel Lowers — the pinnacle of stealth athletic design. Jet black base with dark charcoal contrast panels and crisp white piping create a monochromatic power look built for serious athletes. This is the track pant that works everywhere — gym floor, street, lounge — without ever looking out of place. Premium smooth-knit construction.",
    "features": [
      "Jet Black Base Colourway",
      "Dark Charcoal Panel Contrast",
      "Crisp White Piping",
      "Smooth-Knit Premium Fabric",
      "Wide Athletic Silhouette"
    ],
    "offers": [
      {"type": "bundle", "text": "₹42 off — Add 2 items to unlock offer"},
      {"type": "bank", "text": "₹50 off on bank offers"}
    ],
    "buyAtPrice": 409,
    "img": "/products/wynx-black-panel-2.png",
    "reviewData": [
      {"name": "Anshuman Tripathi", "rating": 5, "date": "1 day ago", "text": "These are the most premium-feeling track pants I've ever worn under 600 bucks. The jet black with charcoal panels is a head-turner. White piping is sharp. Fabric is buttery smooth. Absolutely worth every rupee."},
      {"name": "Paranjay Desai", "rating": 5, "date": "4 days ago", "text": "Wore these to the gym yesterday and got asked about the brand three separate times. The panel design makes them stand out instantly. Super comfortable, great fit at XL, and the black stays rich after washing."},
      {"name": "Rituraj Choudhary", "rating": 5, "date": "1 week ago", "text": "These Shadow Veil lowers are exactly what I was looking for — sleek, minimal, yet distinctive. The monochromatic black panel design is elite. Fabric quality is exceptional for the price. Already ordered the charcoal version."},
      {"name": "Gajendra Shekhawat", "rating": 4, "date": "3 weeks ago", "text": "Excellent quality and a very unique design. The black panel lower looks much more premium than the price indicates. Waistband elastic is comfortable and the fit is great at XXL. Small wish: a zip pocket. Otherwise perfection."},
      {"name": "Shashank Goswami", "rating": 5, "date": "1 month ago", "text": "Replaced my old black track pants with these and there's no going back. The panel design elevates a classic black to something truly special. WYNX branding is subtle and tasteful. Premium all around. Highly recommend."}
    ]
  },
  {
    "id": "wynx-panel-maroon-track",
    "name": "Crimson Reign Panel Lowers",
    "price": 479,
    "oldPrice": 1699,
    "discount": 72,
    "category": "men",
    "subcategory": "Lowers",
    "badge": "New Drop",
    "rating": 4.8,
    "reviews": 5,
    "sizes": ["M", "L", "XL", "XXL", "3XL"],
    "intensity": "Pro",
    "tags": ["new-arrival", "trending", "best-seller"],
    "description": "Crimson Reign Panel Lowers — a bold, deep maroon colourway with graphite contrast panels and signature white piping. This rich burgundy-red brings intense personality to your athleisure wardrobe. The dual-panel construction adds structured dimension while the smooth-knit fabric delivers all-day comfort. Wear it like the statement it is.",
    "features": [
      "Deep Maroon-Burgundy Colourway",
      "Graphite Contrast Panel Inserts",
      "White Signature Piping",
      "Premium Smooth-Knit Fabric",
      "Drawstring Elastic Waistband"
    ],
    "offers": [
      {"type": "bundle", "text": "\u20b938 off \u2014 Add 2 items to unlock offer"},
      {"type": "bank", "text": "\u20b950 off on bank offers"}
    ],
    "buyAtPrice": 429,
    "img": "/products/wynx-maroon-panel-1.png",
    "reviewData": [
      {"name": "Prateek Vashishth", "rating": 5, "date": "1 day ago", "text": "The maroon panel lower is an absolute showstopper. Rich burgundy with graphite panels — this combo is fire. Fabric quality is premium and the fit is exactly right at XL. WYNX just keeps getting better."},
      {"name": "Chiranjeev Mathur", "rating": 5, "date": "4 days ago", "text": "Ordered on impulse and zero regrets. The deep maroon colourway is bold yet wearable — pairs perfectly with a white or black tee. The panel design makes it look way more expensive than it is. Highly recommend."},
      {"name": "Abhijeet Kulkarni", "rating": 4, "date": "1 week ago", "text": "The crimson-maroon shade is gorgeous in person — photos don't do it justice. Fabric is smooth, stitching is clean, and the waistband sits perfectly. Only wish the pockets were slightly deeper. Otherwise excellent."},
      {"name": "Swaroop Krishnamurti", "rating": 5, "date": "2 weeks ago", "text": "This colour is a statement — people noticed immediately when I wore these to the gym. The maroon + graphite combination is sophisticated and unique. Build quality is outstanding. Will be ordering the navy version next."},
      {"name": "Jaideep Bhattacharya", "rating": 5, "date": "1 month ago", "text": "The Crimson Reign panel lower is my favourite piece from WYNX. Rich maroon, premium fabric, clean stitching — everything is dialled in. Comfortable enough for gym use and stylish enough for casual wear. Perfect balance."}
    ]
  },
  {
    "id": "wynx-panel-brown-track-v2",
    "name": "Walnut Dusk Panel Lowers",
    "price": 469,
    "oldPrice": 1699,
    "discount": 72,
    "category": "men",
    "subcategory": "Lowers",
    "badge": "Trending",
    "rating": 4.7,
    "reviews": 5,
    "sizes": ["M", "L", "XL", "XXL", "3XL"],
    "intensity": "Pro",
    "tags": ["new-arrival", "trending"],
    "description": "Walnut Dusk Panel Lowers — a refined warm-brown colourway with deep graphite contrast panels and crisp white piping. This earth-tone colourway channels timeless style with a modern athletic silhouette. Crafted with premium smooth-knit fabric for an effortless fit from morning training to evening strolls.",
    "features": [
      "Warm Walnut-Brown Colourway",
      "Deep Graphite Panel Contrast",
      "Crisp White Piping Detail",
      "Smooth-Knit Premium Fabric",
      "Wide-Leg Athletic Silhouette"
    ],
    "offers": [
      {"type": "bundle", "text": "\u20b938 off \u2014 Add 2 items to unlock offer"},
      {"type": "bank", "text": "Paytm \u20b950 off"}
    ],
    "buyAtPrice": 419,
    "img": "/products/wynx-brown-panel-2.jpg",
    "reviewData": [
      {"name": "Omkar Deshmukh", "rating": 5, "date": "2 days ago", "text": "Walnut brown with graphite panels — this is an elite combination. The fabric is incredibly smooth and the piping detail is crisp. Wearing these daily to the gym and getting constant compliments. WYNX at its best."},
      {"name": "Yashvardhan Mehra", "rating": 5, "date": "5 days ago", "text": "The warm brown tone is so versatile — pairs with black, white, cream, olive. The panel design elevates it from a basic track pant to a fashion piece. Fabric quality is outstanding for the price. 10/10."},
      {"name": "Kushal Rathore", "rating": 4, "date": "2 weeks ago", "text": "Really impressed with the Walnut Dusk design. The colour is warm and earthy without being dull. Stitching is clean and the fit is accurate to size. Small note — delivery could be faster. Product itself is flawless."},
      {"name": "Harshvardhan Negi", "rating": 5, "date": "3 weeks ago", "text": "This is the brown panel lower I've been looking for. Warm walnut tone, graphite panel inserts, white piping — it's a perfect design. Premium fabric that breathes well and maintains shape after washing. Absolute value."},
      {"name": "Ratnesh Pandey", "rating": 5, "date": "6 weeks ago", "text": "Ordered this as a second brown panel lower and it's a completely different vibe from the first. This walnut shade is warmer and more versatile. The panel design is sharp, stitching is perfect. Highly recommend WYNX."}
    ]
  },
  {
    "id": "wynx-tshirt-maroon",
    "name": "Crimson Pulse Signature Tee",
    "price": 299,
    "oldPrice": 899,
    "discount": 67,
    "category": "men",
    "subcategory": "T-Shirts",
    "badge": "New Drop",
    "rating": 4.8,
    "reviews": 5,
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "intensity": "Base",
    "tags": ["new-arrival", "trending"],
    "description": "Crimson Pulse Signature Tee — a deep, rich maroon crafted from ultra-soft premium cotton blend. The subtle WYNX script logo on the chest adds a touch of refined branding without shouting. Form-fitting yet breathable, this tee transitions flawlessly from morning workouts to casual evenings. The colour that commands respect.",
    "features": [
      "Deep Maroon Colourway",
      "Premium Cotton Blend Fabric",
      "WYNX Script Chest Logo",
      "Form-Fit Athletic Cut",
      "Breathable & Soft"
    ],
    "offers": [
      {"type": "bundle", "text": "₹25 off — Add 2 items to unlock offer"},
      {"type": "bank", "text": "₹50 off on bank offers"}
    ],
    "buyAtPrice": 249,
    "img": "/products/wynx-tshirt-maroon-1.jpg",
    "reviewData": [
      {"name": "Akshay Nadkarni", "rating": 5, "date": "1 day ago", "text": "This maroon tee is absolutely stunning. The fabric is incredibly soft — softer than most branded tees I've owned at twice the price. The WYNX logo placement is tasteful and the fit is perfect at M. Instant favourite."},
      {"name": "Siddhant Bora", "rating": 5, "date": "3 days ago", "text": "Ordered this as a casual gym tee and now it's my everyday wear. The deep maroon colour is rich and vibrant — doesn't look cheap at all. Fabric breathes well and the stitching is clean. Excellent value from WYNX."},
      {"name": "Vipul Acharya", "rating": 4, "date": "1 week ago", "text": "Great tee for the price. The maroon shade is exactly as shown in the photos — deep and rich. Fit is spot-on and the cotton blend feels premium against skin. Would give 5 stars if there was a 3XL option."},
      {"name": "Tanishq Banerji", "rating": 5, "date": "2 weeks ago", "text": "The Crimson Pulse Tee is a wardrobe must-have. Rich maroon that pairs with everything from blacks to khakis. Fabric is smooth, lightweight, and doesn't cling. The WYNX logo is subtle but makes the tee feel premium."},
      {"name": "Siddhanth Chattopadhyay", "rating": 5, "date": "1 month ago", "text": "Was sceptical about ordering tees online but WYNX delivered. The maroon is spot on — not too bright, not too dark. Form-fit cut shows off the build without being too tight. Quality rivals brands that charge 3x more."}
    ]
  },
  {
    "id": "wynx-tshirt-mauve",
    "name": "Dusk Rose Minimal Tee",
    "price": 299,
    "oldPrice": 899,
    "discount": 67,
    "category": "men",
    "subcategory": "T-Shirts",
    "badge": "Exclusive",
    "rating": 4.7,
    "reviews": 5,
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "intensity": "Base",
    "tags": ["new-arrival", "trending"],
    "description": "Dusk Rose Minimal Tee — a sophisticated dusty mauve-purple that sits at the intersection of street style and athleisure. Crafted from a premium soft-touch cotton blend with the iconic WYNX script logo on the chest. This understated colourway makes a confident statement without effort. Wear it alone or layer it — either way, you win.",
    "features": [
      "Dusty Mauve-Rose Colourway",
      "Soft-Touch Cotton Blend",
      "WYNX Script Chest Logo",
      "Athletic Form Fit",
      "Lightweight & Breathable"
    ],
    "offers": [
      {"type": "bundle", "text": "₹25 off — Add 2 items to unlock offer"},
      {"type": "bank", "text": "₹50 off on bank offers"}
    ],
    "buyAtPrice": 249,
    "img": "/products/wynx-tshirt-mauve-1.jpg",
    "reviewData": [
      {"name": "Hrishikesh Manohar", "rating": 5, "date": "2 days ago", "text": "The dusty mauve colour is one of a kind — I haven't seen this shade in any other brand at this price point. Fabric is extremely soft and the WYNX logo on the chest is clean and minimal. Wearing this everywhere now."},
      {"name": "Prathamesh Kulkarni", "rating": 4, "date": "5 days ago", "text": "Unique colour, premium feel. The mauve shade is sophisticated without trying too hard. Fabric breathes well and the form fit suits my build at L. Would have given 5 stars but the sleeve length could be slightly longer."},
      {"name": "Amogh Bhat", "rating": 5, "date": "1 week ago", "text": "My wife picked this colour and I was hesitant, but it looks absolutely amazing. The muted rose-purple tone is masculine and stylish. So many compliments when I wore this to a casual dinner. WYNX quality is elite."},
      {"name": "Shreekant Joshi", "rating": 5, "date": "3 weeks ago", "text": "This tee is a vibe. The dusty mauve is unique among men's tees and the WYNX branding is just right — not loud, not invisible. Fabric is buttery smooth against skin. Goes perfectly with white shorts or black lowers."},
      {"name": "Rishab Subramaniam", "rating": 5, "date": "1 month ago", "text": "Bold colour choice and it absolutely paid off. The mauve shade photographs beautifully and looks even better in real life. Soft premium cotton, excellent fit, clean stitching. WYNX tees are an unbelievable value."}
    ]
  },
  {
    "id": "wynx-tshirt-brown",
    "name": "Terra Nova Essentials Tee",
    "price": 319,
    "oldPrice": 999,
    "discount": 68,
    "category": "men",
    "subcategory": "T-Shirts",
    "badge": "New Drop",
    "rating": 4.9,
    "reviews": 5,
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "intensity": "Base",
    "tags": ["new-arrival", "best-seller"],
    "description": "Terra Nova Essentials Tee — a warm, earthy deep brown crafted from ultra-premium cotton blend that feels like a second skin. The WYNX script logo sits elegantly on the chest. An earth-tone staple that pairs with virtually every bottom in your wardrobe. Built for the man who keeps it grounded, refined, and effortlessly cool.",
    "features": [
      "Deep Walnut-Brown Colourway",
      "Ultra-Premium Cotton Blend",
      "WYNX Script Chest Logo",
      "Second-Skin Form Fit",
      "All-Day Comfort Fabric"
    ],
    "offers": [
      {"type": "bundle", "text": "₹28 off — Add 2 items to unlock offer"},
      {"type": "bank", "text": "₹50 off on bank offers"}
    ],
    "buyAtPrice": 269,
    "img": "/products/wynx-tshirt-brown-1.jpg",
    "reviewData": [
      {"name": "Soumyajit Ghosh", "rating": 5, "date": "1 day ago", "text": "The Terra Nova brown tee is my absolute favourite purchase this year. The earthy deep brown is unique and versatile. Fabric quality is exceptional — incredibly soft and the colour doesn't fade after washing. WYNX is the real deal."},
      {"name": "Nitesh Chourasiya", "rating": 5, "date": "4 days ago", "text": "This brown tee pairs with literally everything in my wardrobe — navy shorts, black lowers, beige tracks. The WYNX logo on the chest is clean. Fabric is soft and breathable. Perfect for both gym and everyday use."},
      {"name": "Kaustubh Limaye", "rating": 5, "date": "10 days ago", "text": "Got compliments within the first hour of wearing this. The deep brown colourway is warm and unique — not the typical plain colours. Fits perfectly at XL, fabric is premium quality. Highly recommend the Terra Nova tee."},
      {"name": "Prashant Dongre", "rating": 4, "date": "3 weeks ago", "text": "Really impressed with this tee. The brown colour is rich and earthy, very different from the usual blacks and greys. Form fit is excellent and the cotton blend breathes well in summer. Packaging was clean and delivery was on time."},
      {"name": "Shubhrajit Mukherjee", "rating": 5, "date": "2 months ago", "text": "The Terra Nova tee is the one earthy-coloured tee every man needs. Deep brown, premium cotton, perfect logo placement. Wore this on a trek and it handled sweat like a champ. Versatile, comfortable, and stylish. Full marks."}
    ]
  },
  {
    "id": "wynx-tshirt-charcoal",
    "name": "Graphite Stealth Core Tee",
    "price": 279,
    "oldPrice": 899,
    "discount": 69,
    "category": "men",
    "subcategory": "T-Shirts",
    "badge": "Best Seller",
    "rating": 4.8,
    "reviews": 5,
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "intensity": "Base",
    "tags": ["new-arrival", "best-seller", "trending"],
    "description": "Graphite Stealth Core Tee — a premium dark charcoal grey that exudes quiet confidence. The soft-touch cotton blend fabric delivers unmatched comfort, while the WYNX script logo on the chest adds signature branding in understated white. Versatile, sharp, and built for the man who moves through the world with precision.",
    "features": [
      "Dark Charcoal Grey Colourway",
      "Soft-Touch Cotton Blend",
      "WYNX Script Logo in White",
      "Athletic Form Fit",
      "Anti-Shrink Fabric"
    ],
    "offers": [
      {"type": "bundle", "text": "₹25 off — Add 2 items to unlock offer"},
      {"type": "bank", "text": "Paytm ₹50 off"}
    ],
    "buyAtPrice": 229,
    "img": "/products/wynx-tshirt-charcoal-1.jpg",
    "reviewData": [
      {"name": "Saurabh Deshpande", "rating": 5, "date": "2 days ago", "text": "The Graphite Stealth tee is everything. Dark charcoal that looks sharp with any outfit. The cotton blend is incredibly soft — zero discomfort even after wearing all day. WYNX logo in white on the chest is clean and minimal. Love it."},
      {"name": "Vinayak Apte", "rating": 5, "date": "6 days ago", "text": "Been wearing this grey tee for a week straight and it's still fresh — no pilling, no stretching, and the colour remains rich. The anti-shrink fabric actually works. This is my new everyday tee. Value is incredible."},
      {"name": "Sudarshan Hegde", "rating": 4, "date": "2 weeks ago", "text": "Clean charcoal tone, great form fit. The WYNX white logo on the chest is the perfect finishing touch. Fabric quality is above expectations for this price range. Minor wish — an XS size option. Otherwise flawless."},
      {"name": "Aniket Marathe", "rating": 5, "date": "1 month ago", "text": "This is the tee you throw on when you want to look put together with zero effort. Deep charcoal, WYNX logo, premium cotton — simple but premium in every way. Fits my athletic build perfectly at L. Ordering another."},
      {"name": "Pushkar Pande", "rating": 5, "date": "2 months ago", "text": "The Graphite Stealth tee is now my gym-to-street go-to. Wore it for a workout, then straight to a café without changing and got compliments. That's the WYNX effect — premium quality at a price that doesn't hurt."}
    ]
  },
  {
    "id": "wynx-tshirt-navy",
    "name": "Oceanic Prestige Signature Tee",
    "price": 299,
    "oldPrice": 899,
    "discount": 67,
    "category": "men",
    "subcategory": "T-Shirts",
    "badge": "Top Rated",
    "rating": 4.9,
    "reviews": 5,
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "intensity": "Base",
    "tags": ["new-arrival", "best-seller"],
    "description": "Oceanic Prestige Signature Tee — a deep, classic navy blue refined for the modern man. Premium cotton-blend fabric with a form-fitting athletic cut and the iconic WYNX script logo on the chest. Navy never goes wrong — this is your versatile anchor piece that works with everything and elevates everything it touches.",
    "features": [
      "Deep Navy Blue Colourway",
      "Premium Cotton-Blend Fabric",
      "WYNX Script Chest Logo",
      "Form-Fitting Athletic Cut",
      "Fade-Resistant Colour"
    ],
    "offers": [
      {"type": "bundle", "text": "₹25 off — Add 2 items to unlock offer"},
      {"type": "bank", "text": "₹50 off on bank offers"}
    ],
    "buyAtPrice": 249,
    "img": "/products/wynx-tshirt-navy-1.jpg",
    "reviewData": [
      {"name": "Kedar Kulkarni", "rating": 5, "date": "1 day ago", "text": "The Oceanic Prestige tee is a masterclass in simplicity done right. Deep navy, premium cotton, WYNX logo — that's all you need. Fabric is incredibly soft and the fit is spot on for an athletic build. Ordering all 5 colours now."},
      {"name": "Swapnil Ghanekar", "rating": 5, "date": "3 days ago", "text": "Navy is always a safe choice but WYNX elevates it to something special. The fabric quality is exceptional — no stiffness, no cling, just smooth comfort all day. The fade-resistant colour claim is real, still vibrant after 15 washes."},
      {"name": "Amartya Sengupta", "rating": 5, "date": "1 week ago", "text": "I bought the navy first to test the quality and now I've ordered the maroon and charcoal too. The form-fit is perfect for my athletic build and the cotton blend is ultra-soft. WYNX tees are criminally underpriced."},
      {"name": "Parth Parekh", "rating": 4, "date": "3 weeks ago", "text": "Great quality navy tee from WYNX. The deep navy tone is rich and doesn't look washed-out. WYNX script logo placement on the chest is tasteful. Form fit is excellent at M. Minor note — delivery took 3 days longer than promised."},
      {"name": "Aarav Jaiswal", "rating": 5, "date": "1 month ago", "text": "The Oceanic Prestige tee is now my go-to casual piece. Deep navy, soft cotton, clean WYNX branding — it checks every box. Wore it to a meeting, then straight to the gym. Zero wrinkle, zero discomfort. Pure quality from WYNX."}
    ]
  }
];

export default products;

export const getProductById = (id) => products.find(p => p.id === id);
export const getProductsByCategory = (category) => products.filter(p => p.category === category);
export const getProductsBySubcategory = (subcategory) => products.filter(p => p.subcategory === subcategory);
export const getBestSellers = () => products.filter(p => p.tags?.includes('best-seller'));
export const getFeaturedProducts = () => products.slice(0, 3);
export const getNewArrivals = () => products.filter(p => p.tags?.includes('new-arrival'));
export const getTrendingProducts = () => products.filter(p => p.tags?.includes('trending'));
