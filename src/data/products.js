
export const products = [
    // ═══════════════════════════════════════════
    // ██  GOLD JEWELLERY (25 products)
    // ═══════════════════════════════════════════

    // — Necklaces & Chains —
    { id: 'g001', name: 'Traditional Gold Rani Haar', price: 150000, category: 'Gold', type: 'Necklace', rating: 5, image: 'Assets/gold_necklace.png', weight: '45g', purity: '22K', isNew: false, isBestSeller: true, description: 'Multi-layered Rani Haar with intricate temple motifs and antique finish.' },
    { id: 'g002', name: 'Modern Gold Choker', price: 85000, category: 'Gold', type: 'Necklace', rating: 4.5, image: 'Assets/gold_necklace.png', weight: '28g', purity: '22K', isNew: false, isBestSeller: false, description: 'Sleek contemporary choker with a brushed gold finish.' },
    { id: 'g004', name: 'Rose Gold Pendant Chain', price: 25000, category: 'Gold', type: 'Pendant', rating: 4, image: 'Assets/gold pendant.png', weight: '8g', purity: '18K', isNew: true, isBestSeller: false, description: 'Delicate rose gold chain with a minimalist drop pendant.' },
    { id: 'g008', name: 'Lightweight Gold Mangalsutra', price: 45000, category: 'Gold', type: 'Mangalsutra', rating: 4.6, image: 'Assets/gold_necklace.png', weight: '12g', purity: '22K', isNew: false, isBestSeller: true, description: 'Everyday wear mangalsutra with black bead chain and gold pendant.' },
    { id: 'g011', name: 'Gold Rope Chain 20"', price: 72000, category: 'Gold', type: 'Chain', rating: 4.4, image: 'Assets/gold_necklace.png', weight: '18g', purity: '22K', isNew: false, isBestSeller: false, description: 'Classic Italian rope-style chain, perfect for men and women.' },
    { id: 'g012', name: 'Gold Box Chain 24"', price: 95000, category: 'Gold', type: 'Chain', rating: 4.3, image: 'Assets/gold_necklace.png', weight: '24g', purity: '22K', isNew: true, isBestSeller: false, description: 'Heavy box-link chain with lobster clasp. Unisex.' },
    { id: 'g024', name: 'Gold Hasli Necklace', price: 110000, category: 'Gold', type: 'Necklace', rating: 4.7, image: 'Assets/gold_necklace.png', weight: '32g', purity: '22K', isNew: true, isBestSeller: false, description: 'Rigid torque-style hasli necklace with temple finials.' },

    // — Bangles —
    { id: 'g003', name: 'Gold Temple Bangles (Set of 4)', price: 65000, category: 'Gold', type: 'Bangles', rating: 5, image: 'Assets/gold bangles.png', weight: '38g', purity: '22K', isNew: false, isBestSeller: true, description: 'Set of 4 handcrafted temple bangles with Lakshmi motifs.' },
    { id: 'g013', name: 'Gold Kada (Men)', price: 48000, category: 'Gold', type: 'Bangles', rating: 4.6, image: 'Assets/et of polished gold bangles stacked.png', weight: '20g', purity: '22K', isNew: false, isBestSeller: false, description: 'Thick open-ended gold kada for men, brushed finish.' },
    { id: 'g014', name: 'Antique Gold Bangles (Set of 6)', price: 135000, category: 'Gold', type: 'Bangles', rating: 4.8, image: 'Assets/gold bangles.png', weight: '52g', purity: '22K', isNew: true, isBestSeller: false, description: 'Antique-finish bangles with peacock and floral etchings.' },

    // — Earrings —
    { id: 'g005', name: 'Gold Jhumka Earrings', price: 35000, category: 'Gold', type: 'Earrings', rating: 4.8, image: 'Assets/emerald_earrings.png', weight: '14g', purity: '22K', isNew: false, isBestSeller: true, description: 'Traditional bell-shaped jhumkas with filigree work.' },
    { id: 'g015', name: 'Gold Chandbali Earrings', price: 42000, category: 'Gold', type: 'Earrings', rating: 4.7, image: 'Assets/emerald_earrings.png', weight: '16g', purity: '22K', isNew: false, isBestSeller: false, description: 'Crescent-shaped chandbali with pearl drops and kundan stones.' },
    { id: 'g016', name: 'Gold Stud Earrings', price: 12000, category: 'Gold', type: 'Earrings', rating: 4.2, image: 'Assets/diamond_studs.png', weight: '4g', purity: '22K', isNew: false, isBestSeller: false, description: 'Minimalist gold studs with screw-back closure. Daily wear.' },

    // — Rings —
    { id: 'g009', name: 'Gold Filigree Ring', price: 22000, category: 'Gold', type: 'Ring', rating: 4.3, image: 'Assets/gold_ring.png', weight: '5g', purity: '22K', isNew: false, isBestSeller: false, description: 'Intricate filigree ring with adjustable band.' },
    { id: 'g017', name: 'Gold Signet Ring (Men)', price: 28000, category: 'Gold', type: 'Ring', rating: 4.5, image: 'Assets/gold_ring.png', weight: '8g', purity: '22K', isNew: true, isBestSeller: false, description: 'Classic flat-top signet ring. Can be engraved on request.' },
    { id: 'g018', name: 'Gold Cocktail Ring', price: 38000, category: 'Gold', type: 'Ring', rating: 4.4, image: 'Assets/gold_ring.png', weight: '7g', purity: '18K', isNew: false, isBestSeller: false, description: 'Statement cocktail ring with floral openwork design.' },

    // — Bridal / Sets —
    { id: 'g006', name: '22K Gold Wedding Set', price: 250000, category: 'Gold', type: 'Bridal Set', rating: 5, image: 'Assets/set (necklace, earrings, maang tikka).png', weight: '85g', purity: '22K', isNew: false, isBestSeller: true, description: 'Complete bridal set: necklace, earrings, and maang tikka.' },

    // — Coins & Pendants —
    { id: 'g007', name: 'Gold Coin (10g)', price: 62000, category: 'Gold', type: 'Coin', rating: 5, image: 'Assets/gold_ring.png', weight: '10g', purity: '24K', isNew: false, isBestSeller: false, description: '24K pure gold coin with Lakshmi imprint. Hallmarked.' },
    { id: 'g019', name: 'Gold Coin (5g)', price: 31500, category: 'Gold', type: 'Coin', rating: 4.9, image: 'Assets/gold_ring.png', weight: '5g', purity: '24K', isNew: false, isBestSeller: false, description: '24K pure gold coin, ideal for gifting. Hallmarked.' },
    { id: 'g020', name: 'Gold Ganesh Pendant', price: 18000, category: 'Gold', type: 'Pendant', rating: 4.5, image: 'Assets/gold pendant.png', weight: '5g', purity: '22K', isNew: false, isBestSeller: false, description: 'Lord Ganesh pendant with intricate detailing.' },
    { id: 'g021', name: 'Om Gold Pendant', price: 15000, category: 'Gold', type: 'Pendant', rating: 4.6, image: 'Assets/gold pendant.png', weight: '4g', purity: '22K', isNew: true, isBestSeller: false, description: 'Spiritual Om symbol pendant with diamond-cut finish.' },

    // — Maang Tikka & Nose Pin —
    { id: 'g022', name: 'Gold Maang Tikka', price: 22000, category: 'Gold', type: 'Maang Tikka', rating: 4.4, image: 'Assets/emerald_earrings.png', weight: '8g', purity: '22K', isNew: false, isBestSeller: false, description: 'Traditional maang tikka with dangling pearls.' },
    { id: 'g023', name: 'Gold Nose Pin (Nath)', price: 8500, category: 'Gold', type: 'Nose Pin', rating: 4.3, image: 'Assets/diamond_studs.png', weight: '2g', purity: '22K', isNew: false, isBestSeller: false, description: 'Petite gold nose pin with press-fit closure.' },

    // — Kundan Set —
    { id: 'g010', name: 'Kundan Choker Set', price: 120000, category: 'Gold', type: 'Bridal Set', rating: 4.9, image: 'Assets/set (necklace + earrings + ring).png', weight: '55g', purity: '22K', isNew: false, isBestSeller: true, description: 'Royal kundan choker with matching jhumka earrings.' },

    // ═══════════════════════════════════════════
    // ██  DIAMOND JEWELLERY (20 products)
    // ═══════════════════════════════════════════

    // — Rings —
    { id: 'd001', name: 'Solitaire Engagement Ring', price: 250000, category: 'Diamond', type: 'Ring', rating: 5, image: 'Assets/solatire diamond ring.png', weight: '4.2g', purity: '18K + 0.5ct', isNew: false, isBestSeller: true, description: 'Round brilliant solitaire in 18K white gold. IGI certified.' },
    { id: 'd005', name: 'Princess Cut Diamond Ring', price: 95000, category: 'Diamond', type: 'Ring', rating: 4.8, image: 'Assets/gold_ring.png', weight: '3.8g', purity: '18K + 0.3ct', isNew: false, isBestSeller: false, description: 'Princess-cut diamond in a classic halo setting.' },
    { id: 'd007', name: 'Rose Gold Diamond Band', price: 42000, category: 'Diamond', type: 'Ring', rating: 4.4, image: 'Assets/gold_ring.png', weight: '3.2g', purity: '18K + 0.15ct', isNew: true, isBestSeller: false, description: 'Delicate diamond-studded band in rose gold. Stackable.' },
    { id: 'd009', name: 'Diamond Cluster Ring', price: 68000, category: 'Diamond', type: 'Ring', rating: 4.6, image: 'Assets/diamond rings.png', weight: '3.5g', purity: '18K + 0.25ct', isNew: false, isBestSeller: false, description: 'Flower cluster of 7 round diamonds. Appears as large solitaire.' },
    { id: 'd010', name: 'Men\'s Diamond Ring', price: 78000, category: 'Diamond', type: 'Ring', rating: 4.5, image: 'Assets/gold_ring.png', weight: '6g', purity: '18K + 0.2ct', isNew: true, isBestSeller: false, description: 'Bold men\'s ring with channel-set diamonds.' },
    { id: 'd011', name: 'Eternity Diamond Band', price: 125000, category: 'Diamond', type: 'Ring', rating: 4.9, image: 'Assets/diamond rings.png', weight: '3g', purity: '18K + 1ct total', isNew: false, isBestSeller: true, description: 'Full eternity band with round brilliant diamonds all around.' },

    // — Earrings —
    { id: 'd003', name: 'Floral Diamond Studs', price: 45000, category: 'Diamond', type: 'Earrings', rating: 4.6, image: 'Assets/diamond_studs.png', weight: '3g', purity: '18K + 0.2ct', isNew: false, isBestSeller: true, description: 'Petal-shaped diamond studs with screw-back.' },
    { id: 'd006', name: 'Diamond Hoop Earrings', price: 55000, category: 'Diamond', type: 'Earrings', rating: 4.7, image: 'Assets/diamond stdd earing.png', weight: '5g', purity: '18K + 0.35ct', isNew: false, isBestSeller: false, description: 'Small diamond-encrusted hoops. Perfect for daily wear.' },
    { id: 'd012', name: 'Diamond Chandelier Earrings', price: 135000, category: 'Diamond', type: 'Earrings', rating: 4.8, image: 'Assets/emrald stud earings.png', weight: '8g', purity: '18K + 0.8ct', isNew: true, isBestSeller: false, description: 'Cascading chandelier earrings with marquise and round diamonds.' },
    { id: 'd013', name: 'Solitaire Diamond Studs', price: 175000, category: 'Diamond', type: 'Earrings', rating: 5, image: 'Assets/diamond_studs.png', weight: '2.5g', purity: '18K + 0.5ct each', isNew: false, isBestSeller: true, description: 'Matching pair of round solitaire studs. IGI certified.' },

    // — Necklaces & Pendants —
    { id: 'd004', name: 'Diamond Heart Pendant', price: 35000, category: 'Diamond', type: 'Pendant', rating: 4.5, image: 'Assets/solatire pendant.png', weight: '3.5g', purity: '18K + 0.15ct', isNew: false, isBestSeller: false, description: 'Heart-shaped pendant with micro-pavé diamonds.' },
    { id: 'd008', name: 'Diamond Mangalsutra', price: 85000, category: 'Diamond', type: 'Mangalsutra', rating: 4.8, image: 'Assets/gold_necklace.png', weight: '10g', purity: '18K + 0.3ct', isNew: false, isBestSeller: true, description: 'Modern diamond mangalsutra with tanmaniya pendant.' },
    { id: 'd014', name: 'Diamond Tennis Necklace', price: 350000, category: 'Diamond', type: 'Necklace', rating: 5, image: 'Assets/gold_necklace.png', weight: '18g', purity: '18K + 5ct total', isNew: true, isBestSeller: false, description: 'Graduated round diamonds in a continuous rivière setting.' },
    { id: 'd015', name: 'Diamond Solitaire Pendant', price: 65000, category: 'Diamond', type: 'Pendant', rating: 4.6, image: 'Assets/solatire pendant.png', weight: '2.8g', purity: '18K + 0.25ct', isNew: false, isBestSeller: false, description: 'Single solitaire drop pendant on an 18K chain.' },

    // — Bracelets —
    { id: 'd002', name: 'Diamond Tennis Bracelet', price: 180000, category: 'Diamond', type: 'Bracelet', rating: 4.9, image: 'Assets/silver_bangles.png', weight: '12g', purity: '18K + 3ct total', isNew: false, isBestSeller: true, description: 'Classic tennis bracelet with 45 round brilliant diamonds.' },
    { id: 'd016', name: 'Diamond Bangle', price: 145000, category: 'Diamond', type: 'Bangles', rating: 4.7, image: 'Assets/silver_bangles.png', weight: '15g', purity: '18K + 1.5ct', isNew: false, isBestSeller: false, description: 'Solid diamond bangle with channel-set stones.' },

    // — Nose Pin —
    { id: 'd017', name: 'Diamond Nose Pin', price: 12000, category: 'Diamond', type: 'Nose Pin', rating: 4.4, image: 'Assets/diamond_studs.png', weight: '0.8g', purity: '18K + 0.05ct', isNew: false, isBestSeller: false, description: 'Single solitaire diamond nose pin with screw fitting.' },

    // ═══════════════════════════════════════════
    // ██  SILVER JEWELLERY (18 products)
    // ═══════════════════════════════════════════

    // — Necklaces —
    { id: 's001', name: 'Oxidised Silver Choker', price: 8500, category: 'Silver', type: 'Necklace', rating: 4.2, image: 'Assets/pearl_necklace.png', weight: '35g', purity: '925 Sterling', isNew: false, isBestSeller: false, description: 'Tribal oxidised choker with mirror and coin work.' },
    { id: 's006', name: 'Temple Silver Necklace', price: 12500, category: 'Silver', type: 'Necklace', rating: 4.6, image: 'Assets/pearl_necklace.png', weight: '42g', purity: '925 Sterling', isNew: false, isBestSeller: true, description: 'Statement temple necklace with Lakshmi pendant.' },
    { id: 's008', name: 'Silver Kolhapuri Saaj', price: 15000, category: 'Silver', type: 'Necklace', rating: 4.5, image: 'Assets/pearl_necklace.png', weight: '48g', purity: '925 Sterling', isNew: true, isBestSeller: false, description: 'Traditional Maharashtrian Kolhapuri style necklace.' },
    { id: 's009', name: 'Silver Hasli with Pearl Drops', price: 6500, category: 'Silver', type: 'Necklace', rating: 4.3, image: 'Assets/pearl_necklace.png', weight: '22g', purity: '925 Sterling', isNew: false, isBestSeller: false, description: 'Rigid silver hasli with freshwater pearl drops.' },

    // — Earrings —
    { id: 's004', name: 'Silver Jhumkas', price: 3500, category: 'Silver', type: 'Earrings', rating: 4.3, image: 'Assets/emerald_earrings.png', weight: '12g', purity: '925 Sterling', isNew: false, isBestSeller: true, description: 'Classic silver jhumkas with ghungroo detailing.' },
    { id: 's010', name: 'Oxidised Silver Chandbali', price: 2800, category: 'Silver', type: 'Earrings', rating: 4.1, image: 'Assets/emerald_earrings.png', weight: '10g', purity: '925 Sterling', isNew: false, isBestSeller: false, description: 'Moon-shaped oxidised chandbali with bead work.' },
    { id: 's011', name: 'Silver Cuff Studs', price: 1500, category: 'Silver', type: 'Earrings', rating: 4.0, image: 'Assets/diamond_studs.png', weight: '4g', purity: '925 Sterling', isNew: true, isBestSeller: false, description: 'Minimal geometric silver studs. Daily wear.' },

    // — Bangles & Bracelets —
    { id: 's002', name: 'Sterling Silver Anklets (Pair)', price: 4500, category: 'Silver', type: 'Anklets', rating: 4.5, image: 'Assets/silver_bangles.png', weight: '25g', purity: '925 Sterling', isNew: false, isBestSeller: true, description: 'Anklets with ghungroo bells, adjustable size.' },
    { id: 's005', name: 'Silver Bracelet for Men', price: 6500, category: 'Silver', type: 'Bracelet', rating: 4.1, image: 'Assets/silver_bangles.png', weight: '28g', purity: '925 Sterling', isNew: false, isBestSeller: false, description: 'Heavy curb-link bracelet. Masculine design.' },
    { id: 's012', name: 'Silver Bangles (Set of 4)', price: 5200, category: 'Silver', type: 'Bangles', rating: 4.4, image: 'Assets/silver_bangles.png', weight: '32g', purity: '925 Sterling', isNew: false, isBestSeller: false, description: 'Stackable plain silver bangles with round cross-section.' },
    { id: 's013', name: 'Silver Charm Bracelet', price: 3800, category: 'Silver', type: 'Bracelet', rating: 4.2, image: 'Assets/silver_bangles.png', weight: '15g', purity: '925 Sterling', isNew: true, isBestSeller: false, description: 'Adjustable chain bracelet with dangling heart and star charms.' },

    // — Nose Pins & Toe Rings —
    { id: 's003', name: 'Silver Nose Pin Set (3 pcs)', price: 1200, category: 'Silver', type: 'Nose Pin', rating: 4.0, image: 'Assets/diamond_studs.png', weight: '2g', purity: '925 Sterling', isNew: false, isBestSeller: false, description: 'Set of 3 nose pins: stud, hoop, and clicker.' },
    { id: 's007', name: 'Silver Toe Rings (Pair)', price: 800, category: 'Silver', type: 'Toe Rings', rating: 4.2, image: 'Assets/gold_ring.png', weight: '4g', purity: '925 Sterling', isNew: false, isBestSeller: false, description: 'Adjustable bichhiya with traditional design.' },
    { id: 's014', name: 'Silver Payal (Heavy)', price: 8500, category: 'Silver', type: 'Anklets', rating: 4.6, image: 'Assets/silver_bangles.png', weight: '55g', purity: '925 Sterling', isNew: false, isBestSeller: false, description: 'Heavy bridal payal with elaborate jingle bells.' },

    // — Rings & Chains —
    { id: 's015', name: 'Silver Statement Ring', price: 2200, category: 'Silver', type: 'Ring', rating: 4.1, image: 'Assets/gold_ring.png', weight: '8g', purity: '925 Sterling', isNew: false, isBestSeller: false, description: 'Oversized bohemian ring with turquoise stone.' },
    { id: 's016', name: 'Silver Wheat Chain 22"', price: 3200, category: 'Silver', type: 'Chain', rating: 4.3, image: 'Assets/pearl_necklace.png', weight: '15g', purity: '925 Sterling', isNew: false, isBestSeller: false, description: 'Well-crafted wheat chain for men with rhodium plating.' },
    { id: 's017', name: 'Silver Men\'s Kada', price: 4800, category: 'Silver', type: 'Bangles', rating: 4.4, image: 'Assets/silver_bangles.png', weight: '35g', purity: '925 Sterling', isNew: true, isBestSeller: false, description: 'Heavy open-ended kada for men with Om engraving.' },

    // ═══════════════════════════════════════════
    // ██  PLATINUM JEWELLERY (8 products)
    // ═══════════════════════════════════════════
    { id: 'p001', name: 'Platinum Love Bands (Pair)', price: 65000, category: 'Platinum', type: 'Ring', rating: 4.9, image: 'Assets/platinum_ring.png', weight: '8g', purity: 'Pt 950', isNew: false, isBestSeller: true, description: 'Matching pair of platinum love bands with satin finish.' },
    { id: 'p002', name: 'Platinum Chain 20"', price: 45000, category: 'Platinum', type: 'Chain', rating: 4.5, image: 'Assets/gold_necklace.png', weight: '10g', purity: 'Pt 950', isNew: false, isBestSeller: false, description: 'Platinum cable chain. Hypoallergenic.' },
    { id: 'p003', name: 'Platinum Solitaire Ring', price: 185000, category: 'Platinum', type: 'Ring', rating: 5, image: 'Assets/platinum_ring.png', weight: '5g', purity: 'Pt 950 + 0.5ct', isNew: true, isBestSeller: false, description: 'Round brilliant diamond in a classic 4-prong platinum setting.' },
    { id: 'p004', name: 'Platinum Cross Pendant', price: 28000, category: 'Platinum', type: 'Pendant', rating: 4.3, image: 'Assets/solatire pendant.png', weight: '4g', purity: 'Pt 950', isNew: false, isBestSeller: false, description: 'Minimalist cross pendant on a platinum chain.' },
    { id: 'p005', name: 'Platinum Earring Studs', price: 32000, category: 'Platinum', type: 'Earrings', rating: 4.6, image: 'Assets/diamond_studs.png', weight: '3g', purity: 'Pt 950', isNew: false, isBestSeller: false, description: 'Plain platinum studs with push-back. Unisex.' },
    { id: 'p006', name: 'Platinum Bracelet (Men)', price: 75000, category: 'Platinum', type: 'Bracelet', rating: 4.7, image: 'Assets/silver_bangles.png', weight: '18g', purity: 'Pt 950', isNew: true, isBestSeller: false, description: 'Curb-link platinum bracelet. Bold and masculine.' },
    { id: 'p007', name: 'Platinum Wedding Band', price: 55000, category: 'Platinum', type: 'Ring', rating: 4.8, image: 'Assets/platinum_ring.png', weight: '6g', purity: 'Pt 950', isNew: false, isBestSeller: true, description: 'Comfort-fit platinum band with milgrain edge.' },
    { id: 'p008', name: 'Platinum Diamond Pendant', price: 48000, category: 'Platinum', type: 'Pendant', rating: 4.5, image: 'Assets/solatire pendant.png', weight: '3g', purity: 'Pt 950 + 0.1ct', isNew: false, isBestSeller: false, description: 'Platinum pendant with bezel-set diamond drop.' },

    // ═══════════════════════════════════════════
    // ██  GEMSTONE JEWELLERY (15 products)
    // ═══════════════════════════════════════════

    // — Ruby —
    { id: 'x001', name: 'Ruby Gold Ring', price: 55000, category: 'Gemstone', type: 'Ring', rating: 4.7, image: 'Assets/gold_ring.png', weight: '5.5g', purity: '18K + 1ct Ruby', isNew: false, isBestSeller: true, description: 'Oval Burmese ruby in a cathedral setting with diamond shoulders.' },
    { id: 'x006', name: 'Ruby Drop Earrings', price: 42000, category: 'Gemstone', type: 'Earrings', rating: 4.5, image: 'Assets/emerald_earrings.png', weight: '6g', purity: '18K + Ruby', isNew: true, isBestSeller: false, description: 'Pear-cut rubies dangling from diamond studs.' },

    // — Emerald —
    { id: 'x002', name: 'Emerald Drop Earrings', price: 75000, category: 'Gemstone', type: 'Earrings', rating: 4.9, image: 'Assets/emerald_earrings.png', weight: '7g', purity: '18K + 2ct Emerald', isNew: false, isBestSeller: true, description: 'Colombian emerald drops in an 18K claw setting.' },
    { id: 'x007', name: 'Emerald Pendant', price: 48000, category: 'Gemstone', type: 'Pendant', rating: 4.6, image: 'Assets/gold pendant.png', weight: '4g', purity: '18K + 1.2ct Emerald', isNew: false, isBestSeller: false, description: 'Cushion-cut emerald pendant surrounded by diamond halo.' },

    // — Sapphire —
    { id: 'x003', name: 'Blue Sapphire Pendant', price: 48000, category: 'Gemstone', type: 'Pendant', rating: 4.6, image: 'Assets/gold pendant.png', weight: '4.5g', purity: '18K + 1.5ct Sapphire', isNew: false, isBestSeller: false, description: 'Oval Ceylon sapphire pendant with diamond halo.' },
    { id: 'x008', name: 'Sapphire Tennis Bracelet', price: 95000, category: 'Gemstone', type: 'Bracelet', rating: 4.7, image: 'Assets/silver_bangles.png', weight: '12g', purity: '18K + Sapphire', isNew: true, isBestSeller: false, description: 'Alternating sapphire and diamond bracelet.' },

    // — Pearl —
    { id: 'x005', name: 'Pearl String Necklace', price: 15000, category: 'Gemstone', type: 'Necklace', rating: 4.5, image: 'Assets/ingle-strand pearl necklace.png', weight: '25g', purity: 'Natural Pearl', isNew: false, isBestSeller: true, description: 'Single-strand graduated freshwater pearl necklace.' },
    { id: 'x009', name: 'Pearl Stud Earrings', price: 5500, category: 'Gemstone', type: 'Earrings', rating: 4.3, image: 'Assets/diamond_studs.png', weight: '3g', purity: 'Natural Pearl + Gold', isNew: false, isBestSeller: false, description: 'Classic pearl studs on gold posts. Timeless.' },
    { id: 'x010', name: 'Pearl Bracelet', price: 8500, category: 'Gemstone', type: 'Bracelet', rating: 4.4, image: 'Assets/silver_bangles.png', weight: '12g', purity: 'Natural Pearl', isNew: false, isBestSeller: false, description: 'Knotted pearl bracelet with gold clasp.' },

    // — Navratna & Multi-stone —
    { id: 'x004', name: 'Navratna Ring', price: 32000, category: 'Gemstone', type: 'Ring', rating: 4.4, image: 'Assets/gold_ring.png', weight: '6g', purity: '22K + 9 Stones', isNew: false, isBestSeller: false, description: '9-stone Navratna ring in traditional setting. Astrological.' },
    { id: 'x011', name: 'Coral Gold Ring', price: 18000, category: 'Gemstone', type: 'Ring', rating: 4.2, image: 'Assets/gold_ring.png', weight: '4g', purity: '22K + Coral', isNew: false, isBestSeller: false, description: 'Italian red coral (Moonga) set in 22K gold.' },
    { id: 'x012', name: 'Amethyst Silver Ring', price: 4500, category: 'Gemstone', type: 'Ring', rating: 4.1, image: 'Assets/gold_ring.png', weight: '5g', purity: '925 Sterling + Amethyst', isNew: true, isBestSeller: false, description: 'Faceted amethyst in an oxidised silver bohemian setting.' },
    { id: 'x013', name: 'Tanzanite Gold Pendant', price: 62000, category: 'Gemstone', type: 'Pendant', rating: 4.8, image: 'Assets/gold pendant.png', weight: '3.5g', purity: '18K + 1ct Tanzanite', isNew: true, isBestSeller: false, description: 'Rare tanzanite in a trilliant cut with diamond accents.' },
    { id: 'x014', name: 'Garnet Necklace', price: 22000, category: 'Gemstone', type: 'Necklace', rating: 4.3, image: 'Assets/pearl_necklace.png', weight: '10g', purity: '18K + Garnet', isNew: false, isBestSeller: false, description: 'Cluster of deep red garnets on a gold chain.' },
    { id: 'x015', name: 'Turquoise Silver Earrings', price: 3200, category: 'Gemstone', type: 'Earrings', rating: 4.0, image: 'Assets/emerald_earrings.png', weight: '6g', purity: '925 Sterling + Turquoise', isNew: false, isBestSeller: false, description: 'Bohemian drop earrings with natural turquoise cabochons.' },

    // ═══════════════════════════════════════════
    // ██  BRIDAL SETS (12 products)
    // ═══════════════════════════════════════════
    { id: 'b001', name: 'Royal Kundan Bridal Set', price: 280000, category: 'Bridal', type: 'Bridal Set', rating: 5, image: 'Assets/set (necklace, earrings, maang tikka).png', weight: '120g', purity: '22K Kundan', isNew: false, isBestSeller: true, description: 'Complete bridal set: choker, long haar, jhumkas, maang tikka, and nath.' },
    { id: 'b002', name: 'Diamond Bridal Necklace Set', price: 450000, category: 'Bridal', type: 'Bridal Set', rating: 5, image: 'Assets/set (necklace + earrings + ring).png', weight: '65g', purity: '18K + 4ct Diamond', isNew: true, isBestSeller: false, description: 'Exquisite diamond necklace with matching chandelier earrings.' },
    { id: 'b003', name: 'Temple Gold Bridal Set', price: 320000, category: 'Bridal', type: 'Bridal Set', rating: 4.9, image: 'Assets/set (necklace, earrings, maang tikka).png', weight: '95g', purity: '22K', isNew: false, isBestSeller: true, description: 'South Indian temple jewellery: necklace, earrings, vaddanam, and kammal.' },
    { id: 'b004', name: 'Polki Rani Haar Set', price: 185000, category: 'Bridal', type: 'Bridal Set', rating: 4.8, image: 'Assets/set (necklace + earrings + ring).png', weight: '75g', purity: '22K Polki', isNew: false, isBestSeller: false, description: 'Long polki rani haar with matching chaand-shaped earrings.' },
    { id: 'b005', name: 'Jadau Bridal Complete Set', price: 380000, category: 'Bridal', type: 'Bridal Set', rating: 5, image: 'Assets/set (necklace, earrings, maang tikka).png', weight: '110g', purity: '22K Jadau', isNew: true, isBestSeller: false, description: 'Rajasthani jadau set with meenakari on reverse. 5+pieces.' },
    { id: 'b006', name: 'Bridal Gold Bangles (Set of 8)', price: 240000, category: 'Bridal', type: 'Bangles', rating: 4.7, image: 'Assets/et of polished gold bangles stacked.png', weight: '88g', purity: '22K', isNew: false, isBestSeller: true, description: 'Matching set of 8 heavy bridal bangles with stone work.' },
    { id: 'b007', name: 'Bridal Maang Tikka & Matha Patti', price: 45000, category: 'Bridal', type: 'Maang Tikka', rating: 4.6, image: 'Assets/emerald_earrings.png', weight: '18g', purity: '22K Kundan', isNew: false, isBestSeller: false, description: 'Full head ornament combining maang tikka and side chains (matha patti).' },
    { id: 'b008', name: 'Bridal Nath (Nose Ring)', price: 15000, category: 'Bridal', type: 'Nose Pin', rating: 4.5, image: 'Assets/diamond_studs.png', weight: '5g', purity: '22K + Pearl', isNew: false, isBestSeller: false, description: 'Traditional bridal nath with pearl chain connecting to ear.' },
    { id: 'b009', name: 'Bridal Haath Phool', price: 28000, category: 'Bridal', type: 'Bracelet', rating: 4.4, image: 'Assets/silver_bangles.png', weight: '20g', purity: '22K Kundan', isNew: true, isBestSeller: false, description: 'Hand harness/haath phool with ring-to-bracelet kundan chain.' },
    { id: 'b010', name: 'Pearl \u0026 Kundan Choker', price: 85000, category: 'Bridal', type: 'Necklace', rating: 4.7, image: 'Assets/ingle-strand pearl necklace.png', weight: '40g', purity: '22K Kundan + Pearl', isNew: false, isBestSeller: false, description: 'Choker combining kundan stones with pearl strings.' },
    { id: 'b011', name: 'Bridal Payal (Heavy Silver)', price: 12000, category: 'Bridal', type: 'Anklets', rating: 4.5, image: 'Assets/silver_bangles.png', weight: '70g', purity: '925 Sterling', isNew: false, isBestSeller: false, description: 'Heavy bridal anklets with elaborate jingle bells and ghungroo.' },
    { id: 'b012', name: 'Mini Bridal Set (Budget)', price: 95000, category: 'Bridal', type: 'Bridal Set', rating: 4.6, image: 'Assets/set (necklace + earrings + ring).png', weight: '35g', purity: '22K', isNew: true, isBestSeller: false, description: 'Budget-friendly bridal set: necklace + earrings + ring. Elegant and lightweight.' }
];
