const products = [
    // New Arrivals (Added Feb 2026)
    {
        id: 101,
        name: "Basketball Embroidered Shirt",
        category: "New Arrivals",
        price: "₹1,499",
        img: "assets/images/basketball_shirt.png",
        description: "Premium embroidered shirt featuring basketball motifs. Perfect for sports enthusiasts and streetwear lovers.",
        details: ["Embroidery detail", "Relaxed fit", "Breathable fabric"],
        shipping: "Free shipping.",
        returns: "30-day return policy."
    },
    {
        id: 102,
        name: "Nocturnal Oversized T-shirt",
        category: "New Arrivals",
        price: "₹1,199",
        img: "assets/images/new_arrivals_collage.png",
        description: "Make a statement with the Nocturnal oversized tee. Bold graphics on high-quality cotton.",
        details: ["100% Cotton", "Oversized fit", "High-density print"],
        shipping: "Free shipping.",
        returns: "30-day return policy."
    },
    {
        id: 103,
        name: "Badass Embroidered Varsity Jacket",
        category: "New Arrivals",
        price: "₹1,999",
        img: "assets/images/new_arrivals_collage.png",
        description: "Classic varsity style with a modern twist. Features intricate embroidery and color-block design.",
        details: ["Premium fabric", "Snap button closure", "Ribbed cuffs"],
        shipping: "Free shipping.",
        returns: "30-day return policy."
    },
    {
        id: 104,
        name: "Classic Chess Shirt",
        category: "New Arrivals",
        price: "₹1,299",
        img: "assets/images/new_arrivals_collage.png",
        description: "Checkmate your style game with this unique chess board print shirt.",
        details: ["All-over print", "Cuban collar", "Lightweight material"],
        shipping: "Free shipping.",
        returns: "30-day return policy."
    },

    // Custom Streetwear Edition
    {
        id: 1,
        name: "Vintage Oversized Tee",
        category: "Custom Streetwear Edition",
        price: "$29.99",
        img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1000&auto=format&fit=crop",
        description: "A classic 90s style oversized tee made from premium heavy cotton. Perfect for a relaxed, vintage look.",
        details: [
            "100% Cotton",
            "Oversized fit",
            "Ribbed crew neck",
            "Vintage wash finish"
        ],
        shipping: "Free standard shipping on orders over $50. Estimated delivery: 3-5 business days.",
        returns: "30-day return policy. Item must be unworn and in original condition.",
        images: [
            "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop"
        ]
    },
    {
        id: 2,
        name: "90s Cargo Pants",
        category: "Custom Streetwear Edition",
        price: "$54.99",
        img: "https://images.unsplash.com/photo-1549419137-b6f2f293b827?q=80&w=1000&auto=format&fit=crop",
        description: "Rugged and stylish cargo pants with multiple pockets. Essential for the utilitarian streetwear aesthetic.",
        details: [
            "Durable cotton twill",
            "Relaxed fit",
            "6 functional pockets",
            "Adjustable waistband"
        ],
        shipping: "Standard shipping rates apply. Priority shipping available.",
        returns: "Returns accepted within 14 days of delivery."
    },
    {
        id: 4,
        name: "Fire Print Hoodie",
        category: "Custom Streetwear Edition",
        price: "$65.00",
        img: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1000&auto=format&fit=crop",
        description: "Stay warm and look hot with our signature Fire Print Hoodie. clear statement piece.",
        details: [
            "Fleece lined",
            "Kangaroo pocket",
            "Drawstring hood",
            "Screen printed graphics"
        ],
        shipping: "Free standard shipping.",
        returns: "30-day return policy."
    },
    {
        id: 14,
        name: "Graffiti Denim Jacket",
        category: "Custom Streetwear Edition",
        price: "$89.99",
        img: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=1000&auto=format&fit=crop",
        description: "Hand-distressed denim jacket featuring unique graffiti art. Each piece is slightly unique.",
        details: [
            "100% Denim",
            "Button closure",
            "Hand-painted details",
            "Chest pockets"
        ],
        shipping: "Free express shipping.",
        returns: "Final sale due to custom nature of product."
    },
    {
        id: 15,
        name: "Retro Tracksuit Bottoms",
        category: "Custom Streetwear Edition",
        price: "$45.00",
        img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop",
        description: "Comfy and sporty, these track pants bring back the energetic vibe of the 90s sport scene.",
        details: [
            "Polyester blend",
            "Elastic cuffs",
            "Side stripes",
            "Drawstring waist"
        ],
        shipping: "Standard shipping.",
        returns: "30-day return policy."
    },

    // DARE2DREAM TEE
    {
        id: 7,
        name: "Dare2Dream Graphic Tee",
        category: "DARE2DREAM TEE",
        price: "$34.99",
        img: "https://images.unsplash.com/photo-1529374255404-311a2a4f1bc9?q=80&w=1000&auto=format&fit=crop",
        description: "Inspire yourself and others with the Dare2Dream graphic tee. Bold typography on high-quality fabric.",
        details: ["100% Cotton", "Regular fit", "DTG printing"],
        shipping: "Ships in 2-3 business days.",
        returns: "30-day return policy."
    },
    {
        id: 8,
        name: "Dreamer Signature Tee",
        category: "DARE2DREAM TEE",
        price: "$39.99",
        img: "https://images.unsplash.com/photo-1503342394128-c104d54dba01?q=80&w=1000&auto=format&fit=crop",
        description: "Minimalist design for the modern dreamer.",
        details: ["Organic Cotton", "Slim fit", "Embroidered logo"],
        shipping: "Ships in 2-3 business days.",
        returns: "30-day return policy."
    },
    {
        id: 16,
        name: "Limitless Vision Tee",
        category: "DARE2DREAM TEE",
        price: "$32.99",
        img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1000&auto=format&fit=crop",
        description: "Expand your horizons with the Limitless Vision Tee.",
        details: ["Poly-cotton blend", "Soft touch", "Lasting color"],
        shipping: "Ships in 2-3 business days.",
        returns: "30-day return policy."
    },
    {
        id: 17,
        name: "Night Sky Dream Tee",
        category: "DARE2DREAM TEE",
        price: "$36.99",
        img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop",
        description: "Dark and mysterious, like a starry night.",
        details: ["100% Cotton", "Relaxed fit", "Glow in the dark print"],
        shipping: "Ships in 2-3 business days.",
        returns: "30-day return policy."
    },

    // Custom Wholesale Dress
    {
        id: 9,
        name: "Bulk Order Floral Dress",
        category: "Custom Wholesale Dress",
        price: "Contact for Quote",
        img: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1000&auto=format&fit=crop",
        description: "Beautiful floral dresses available for wholesale. Perfect for boutiques.",
        details: ["Minimum order: 50 units", "Various patterns available", "Sizes XS-XL"],
        shipping: "Freight shipping calculations provided upon quote.",
        returns: "Wholesale terms apply."
    },
    {
        id: 10,
        name: "Summer Midi Collection",
        category: "Custom Wholesale Dress",
        price: "Contact for Quote",
        img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000&auto=format&fit=crop",
        description: "A collection of airy summer midi dresses.",
        details: ["Linen blend", "Assorted colors", " Breathable fabric"],
        shipping: "Freight shipping calculations provided upon quote.",
        returns: "Wholesale terms apply."
    },
    {
        id: 18,
        name: "Elegant Evening Gowns (x50)",
        category: "Custom Wholesale Dress",
        price: "Contact for Quote",
        img: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1000&auto=format&fit=crop",
        description: "High-end evening gowns for formal events.",
        details: ["Satin/Silk options", "Custom sizing available", "Bulk discount"],
        shipping: "Freight shipping calculations provided upon quote.",
        returns: "Wholesale terms apply."
    },
    {
        id: 19,
        name: "Casual Day Dresses (x100)",
        category: "Custom Wholesale Dress",
        price: "Contact for Quote",
        img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop",
        description: "Everyday dresses for the modern woman.",
        details: ["Cotton jersey", "Comfort fit", "Easy care"],
        shipping: "Freight shipping calculations provided upon quote.",
        returns: "Wholesale terms apply."
    },

    // Gift Accessories
    {
        id: 5,
        name: "Urban Street Cap",
        category: "Gift Accessories",
        price: "$24.99",
        img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=1000&auto=format&fit=crop",
        description: "Snapback cap with 3D embroidery.",
        details: ["Adjustable strap", "Flat brim", "Ventilation eyelets"],
        shipping: "Standard shipping.",
        returns: "30-day return policy."
    },
    {
        id: 11,
        name: "Retro Sunglasses",
        category: "Gift Accessories",
        price: "$19.99",
        img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1000&auto=format&fit=crop",
        description: "Small frame sunglasses for that authentic 90s look.",
        details: ["UV400 protection", "Polycarbonate frame", "Tinted lenses"],
        shipping: "Standard shipping.",
        returns: "30-day return policy."
    },
    {
        id: 20,
        name: "Chain Necklace Silver",
        category: "Gift Accessories",
        price: "$14.99",
        img: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=1000&auto=format&fit=crop",
        description: "Chunky silver chain to complete your street outfit.",
        details: ["Stainless steel", "Lobster clasp", "20 inch length"],
        shipping: "Standard shipping.",
        returns: "30-day return policy."
    },
    {
        id: 21,
        name: "90s Belt Bag",
        category: "Gift Accessories",
        price: "$22.99",
        img: "https://images.unsplash.com/photo-1545648600-0937c569ee09?q=80&w=1000&auto=format&fit=crop",
        description: "Versatile belt bag, wear it around waist or crossbody.",
        details: ["Nylon fabric", "Multiple zipper pockets", "Adjustable strap"],
        shipping: "Standard shipping.",
        returns: "30-day return policy."
    },

    // Machineries (Print on Demand Equipment)
    {
        id: 12,
        name: "Heat Press Pro X",
        category: "Machineries",
        price: "$299.99",
        img: "https://images.unsplash.com/photo-1563823251950-8919fac63ad3?q=80&w=1000&auto=format&fit=crop",
        description: "Professional grade heat press for t-shirt printing.",
        details: ["Digital timer", "Adjustable pressure", "15x15 inch platen"],
        shipping: "Heavy item shipping surcharge applies.",
        returns: "1-year warranty. Returns for defects only."
    },
    {
        id: 13,
        name: "Embroidery Unit 3000",
        category: "Machineries",
        price: "$1200.00",
        img: "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?q=80&w=1000&auto=format&fit=crop",
        description: "Multi-needle embroidery machine for high volume production.",
        details: ["6 needles", "Touch screen interface", "USB design transfer"],
        shipping: "Freight shipping.",
        returns: "1-year warranty. Returns for defects only."
    },
    {
        id: 22,
        name: "Digital Textile Printer",
        category: "Machineries",
        price: "$4500.00",
        img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop",
        description: "Direct to garment printer for high resolution prints.",
        details: ["CMYK + White ink", "Print area 14x16", "High speed mode"],
        shipping: "Freight shipping.",
        returns: "1-year warranty. Manufacturer support included."
    }
];
