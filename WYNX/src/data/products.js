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
    "id": "wynx-shorts-camo-stealth",
    "name": "Shadow Ops Camo Shorts",
    "price": 499,
    "oldPrice": 1599,
    "discount": 69,
    "category": "men",
    "subcategory": "Shorts",
    "badge": "Best Seller",
    "rating": 4.8,
    "reviews": 18,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "intensity": "High",
    "tags": [
      "best-seller",
      "shorts",
      "trending"
    ],
    "description": "Shadow Ops Camo Shorts — dark urban camouflage meets premium WYNX craftsmanship. Bold vertical logo branding, drawstring waist, and ultra-breathable fabric make these the ultimate statement shorts for gym sessions and street runs alike.",
    "features": [
      "Urban Camo Print",
      "Bold WYNX Logo Branding",
      "Drawstring Waistband",
      "Quick-Dry Fabric"
    ],
    "offers": [
      {
        "type": "bundle",
        "text": "₹36 off — Add 2 items to unlock offer"
      }
    ],
    "buyAtPrice": 449,
    "img": "/products/wynx-shorts-camo-1.jpg"
  },
  {
    "id": "wynx-shorts-silver-mist",
    "name": "Glacier Mist Sport Shorts",
    "price": 479,
    "oldPrice": 1499,
    "discount": 68,
    "category": "men",
    "subcategory": "Shorts",
    "badge": "New Drop",
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
      "new-arrival",
      "shorts"
    ],
    "description": "Glacier Mist Sport Shorts — clean silver-grey with subtle WYNX logo and zip pockets. Lightweight, breathable performance fabric engineered for maximum airflow during intense training. The versatile neutral tone pairs with everything.",
    "features": [
      "Light Grey Colorway",
      "Zip Side Pockets",
      "Breathable Mesh Lining",
      "Elastic Waistband"
    ],
    "offers": [
      {
        "type": "bank",
        "text": "₹50 off on bank offers"
      }
    ],
    "buyAtPrice": 429,
    "img": "/products/wynx-shorts-grey-1.jpg"
  },
  {
    "id": "wynx-shorts-noir-essential",
    "name": "Noir Essential Shorts",
    "price": 449,
    "oldPrice": 1299,
    "discount": 65,
    "category": "men",
    "subcategory": "Shorts",
    "badge": "Top Rated",
    "rating": 4.9,
    "reviews": 22,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "intensity": "High",
    "tags": [
      "best-seller",
      "shorts",
      "trending"
    ],
    "description": "Noir Essential Shorts — the ultimate black-on-black luxury. Premium satin-finish fabric with WYNX logo branding. Styled with a hoodie or tee, these shorts redefine what casual means. Built for the man who owns every room he walks into.",
    "features": [
      "Satin-Finish Fabric",
      "WYNX Logo Print",
      "Deep Side Pockets",
      "Premium Drawstring"
    ],
    "offers": [
      {
        "type": "bundle",
        "text": "₹37 off — Buy More Save More"
      }
    ],
    "buyAtPrice": 399,
    "img": "/products/wynx-shorts-black-1.png"
  },
  {
    "id": "wynx-shorts-stealth-pro",
    "name": "Stealth Pro Training Shorts",
    "price": 489,
    "oldPrice": 1599,
    "discount": 69,
    "category": "men",
    "subcategory": "Shorts",
    "badge": "Premium",
    "rating": 4.8,
    "reviews": 16,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "intensity": "High",
    "tags": [
      "premium",
      "shorts",
      "new-arrival"
    ],
    "description": "Stealth Pro Training Shorts — engineered for elite performance. All-black with WYNX branding on both the hoodie and shorts for a full coordinated look. Anti-odor tech and ergonomic cut deliver gym-ready comfort with street-ready aesthetics.",
    "features": [
      "Anti-Odor Technology",
      "Ergonomic Seams",
      "WYNX Coordinated Set Style",
      "Quick-Dry Performance"
    ],
    "offers": [
      {
        "type": "bundle",
        "text": "₹36 off — Add 2 items to unlock offer"
      }
    ],
    "buyAtPrice": 439,
    "img": "/products/wynx-shorts-black-2.jpg"
  },
  {
    "id": "wynx-shorts-burgundy-comp",
    "name": "Crimson Forge Compression Shorts",
    "price": 549,
    "oldPrice": 1799,
    "discount": 69,
    "category": "men",
    "subcategory": "Shorts",
    "badge": "Limited",
    "rating": 4.9,
    "reviews": 9,
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "intensity": "High",
    "tags": [
      "limited",
      "shorts",
      "premium"
    ],
    "description": "Crimson Forge Compression Shorts — the apex of WYNX athletic engineering. Deep burgundy outer shell with integrated black compression tights underneath. Built for explosive training, sprint workouts, and athletes who demand zero restrictions.",
    "features": [
      "Built-In Compression Layer",
      "Deep Burgundy Colorway",
      "WYNX Performance Branding",
      "4-Way Stretch Fabric"
    ],
    "offers": [
      {
        "type": "bundle",
        "text": "₹37 off — Buy More Save More"
      }
    ],
    "buyAtPrice": 499,
    "img": "/products/wynx-shorts-burgundy-1.jpg"
  },
  {
    "id": "wynx-shorts-olive-tactical",
    "name": "Ranger Tactical Olive Shorts",
    "price": 489,
    "oldPrice": 1599,
    "discount": 69,
    "category": "men",
    "subcategory": "Shorts",
    "badge": "New Drop",
    "rating": 4.8,
    "reviews": 15,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "intensity": "High",
    "tags": [
      "new-arrival",
      "shorts",
      "trending"
    ],
    "description": "Ranger Tactical Olive Shorts — military-inspired streetwear at its finest. Deep olive with WYNX logo branding, paired with a utility vest for the ultimate urban combat look. Built for movement, styled for dominance.",
    "features": [
      "Military Olive Colorway",
      "WYNX Logo Branding",
      "Drawstring Waistband",
      "Tactical Utility Design"
    ],
    "offers": [
      {
        "type": "bundle",
        "text": "₹36 off — Add 2 items to unlock offer"
      }
    ],
    "buyAtPrice": 439,
    "img": "/products/wynx-shorts-olive-1.jpg"
  },
  {
    "id": "wynx-shorts-arctic-white",
    "name": "Arctic Pulse Sport Shorts",
    "price": 479,
    "oldPrice": 1499,
    "discount": 68,
    "category": "men",
    "subcategory": "Shorts",
    "badge": "Trending",
    "rating": 4.7,
    "reviews": 19,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "intensity": "Base",
    "tags": [
      "trending",
      "shorts",
      "new-arrival"
    ],
    "description": "Arctic Pulse Sport Shorts — crisp white with bold WYNX branding. Premium lightweight fabric paired with a sleek black compression top for a clean, athletic silhouette. Made for athletes who refuse to blend in.",
    "features": [
      "Pristine White Colorway",
      "Bold WYNX Branding",
      "Breathable Mesh Lining",
      "Premium Elastic Waist"
    ],
    "offers": [
      {
        "type": "bank",
        "text": "₹50 off on bank offers"
      }
    ],
    "buyAtPrice": 429,
    "img": "/products/wynx-shorts-white-1.jpg"
  },
  {
    "id": "wynx-shorts-volt-neon",
    "name": "Volt Surge Neon Shorts",
    "price": 499,
    "oldPrice": 1599,
    "discount": 69,
    "category": "men",
    "subcategory": "Shorts",
    "badge": "Limited",
    "rating": 4.9,
    "reviews": 11,
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "intensity": "High",
    "tags": [
      "limited",
      "shorts",
      "trending"
    ],
    "description": "Volt Surge Neon Shorts — electrifying neon green that demands attention. Oversized WYNX logo, ultralight quick-dry fabric, and maximum mobility. Engineered for high-intensity sprints and built to turn every head on the track.",
    "features": [
      "Electric Neon Colorway",
      "Oversized WYNX Logo",
      "Quick-Dry Technology",
      "Ultra-Lightweight Fabric"
    ],
    "offers": [
      {
        "type": "bundle",
        "text": "₹37 off — Buy More Save More"
      }
    ],
    "buyAtPrice": 449,
    "img": "/products/wynx-shorts-neon-1.jpg"
  },
  {
    "id": "wynx-shorts-crimson-strike",
    "name": "Crimson Strike Training Shorts",
    "price": 469,
    "oldPrice": 1499,
    "discount": 69,
    "category": "men",
    "subcategory": "Shorts",
    "badge": "Best Seller",
    "rating": 4.8,
    "reviews": 21,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "intensity": "High",
    "tags": [
      "best-seller",
      "shorts"
    ],
    "description": "Crimson Strike Training Shorts — bold red with WYNX logo and white drawstring accent. Built for explosive HIIT sessions, lunges, and full-range movement. The contrast drawstring adds a premium touch to this high-octane essential.",
    "features": [
      "Bold Crimson Red",
      "Contrast Drawstring",
      "WYNX Performance Logo",
      "4-Way Stretch Fabric"
    ],
    "offers": [
      {
        "type": "bundle",
        "text": "₹36 off — Add 2 items to unlock offer"
      }
    ],
    "buyAtPrice": 419,
    "img": "/products/wynx-shorts-red-1.jpg"
  },
  {
    "id": "wynx-shorts-navy-sprint",
    "name": "Horizon Navy Sprint Shorts",
    "price": 459,
    "oldPrice": 1399,
    "discount": 67,
    "category": "men",
    "subcategory": "Shorts",
    "badge": "Top Rated",
    "rating": 4.9,
    "reviews": 24,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "intensity": "High",
    "tags": [
      "best-seller",
      "shorts",
      "trending"
    ],
    "description": "Horizon Navy Sprint Shorts — full navy coordinated set with matching WYNX tee for a head-to-toe athletic look. Aerodynamic cut, sweat-wicking fabric, and zero-restriction movement make these the ultimate performance shorts.",
    "features": [
      "Full Navy Coordinated Look",
      "Sweat-Wicking Fabric",
      "Aerodynamic Cut",
      "WYNX Matching Set Ready"
    ],
    "offers": [
      {
        "type": "bank",
        "text": "₹50 off on bank offers"
      }
    ],
    "buyAtPrice": 409,
    "img": "/products/wynx-shorts-navy-1.jpg"
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
