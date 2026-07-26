// src/data/mockData.js

export const CATEGORIES = [
  { id: '1', name: 'Electronics', count: '17 items', icon: '💻' },
  { id: '2', name: 'Clothing', count: '12 items', icon: '👕' },
  { id: '3', name: 'Furniture', count: '8 items', icon: '🪑' },
  { id: '4', name: 'Home Decor', count: '14 items', icon: '🏡' },
  { id: '5', name: 'Sports Gear', count: '10 items', icon: '⚽' },
  { id: '6', name: 'Accessories', count: '9 items', icon: '🎧' },
];

export const PRODUCTS = [
  {
    id: 1,
    name: 'Wireless Bluetooth Headphones',
    category: 'Electronics',
    price: 99.99,
    rating: 4.8,
    reviews: 120,
    tag: 'Top Rated',
    description: 'High-fidelity audio with active noise cancellation, deep bass response, and 30-hour battery life. Designed with memory-foam earcups for all-day listening comfort.',
    images: [
      
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80'
    ],
  },
  {
    id: 2,
    name: 'Smart Watch Series 5',
    category: 'Electronics',
    price: 299.99,
    rating: 4.9,
    reviews: 85,
    tag: 'New',
    description: 'Track your fitness, heart rate, sleep metrics, and GPS routes in real-time. Features a bright AMOLED retina display and 7-day battery life in a sleek alloy chassis.',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&q=80',
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&q=80'
    ],
  },
  {
    id: 3,
    name: 'Comfortable Cotton T-Shirt',
    category: 'Clothing',
    price: 24.99,
    rating: 4.5,
    reviews: 200,
    tag: 'Best Seller',
    description: 'Crafted from 100% organic comb-spun cotton for unmatched softness. Breathable, durable, and tailored for a smooth relaxed fit.',
    images: [
      'https://images.unsplash.com/photo-1661181475147-bbd20ef65781?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80'
    ],
  },
  {
    id: 4,
    name: 'Ergonomic Office Chair',
    category: 'Furniture',
    price: 199.99,
    rating: 4.7,
    reviews: 65,
    tag: 'Trending',
    description: 'Designed for full-body posture support during long working hours. Features breathable mesh, adjustable lumbar support, 3D armrests, and dynamic recline.',
    images: [
      'https://images.unsplash.com/photo-1580480095047-4aa43ab3bd1d?w=800&q=80',
      'https://images.unsplash.com/photo-1505797149-43b0069ec26b?w=800&q=80',
      'https://plus.unsplash.com/premium_photo-1683880731792-39c07ceea617?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
  },
  {
    id: 5,
    name: "NovaBeam LED Desk Glow Lamp",
    category: "Lifestyle",
    price: 39.00,
    rating: 4.5,
    reviews: 58,
    description: 'Minimalist touch-controlled desk lamp with dimmable RGB color tones, eye-caring warm white light, and built-in wireless phone charging pad.',
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80",
      "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?w=800&q=80",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80"
    ]
  },
  {
    id: 6,
    name: "SonicBass Portable Bluetooth Speaker",
    category: "Audio",
    price: 79.95,
    rating: 4.8,
    reviews: 162,
    description: 'IPX7 waterproof outdoor Bluetooth speaker deliver 360-degree punchy bass, crisp treble, and 20 hours of continuous continuous audio playback.',
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80",
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&q=80",
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80"
    ]
  },
  {
    id: 7,
    name: "VisionPro 4K Ultra Webcam",
    category: "Electronics",
    price: 119.00,
    rating: 4.6,
    reviews: 83,
    description: 'Crystal-clear 4K HDR video sensor with auto-focus, dual noise-canceling microphones, and privacy shutter for streaming & professional video calls.',
    images: [
      "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&q=80",
      "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?w=800&q=80",
      "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=800&q=80"
    ]
  },
  {
    id: 8,
    name: "ZenMat RGB Gaming Desk Pad",
    category: "Accessories",
    price: 29.99,
    rating: 4.7,
    reviews: 114,
    description: 'Extra large water-resistant micro-texture desk pad with 14 customizable RGB lighting modes and non-slip rubber base.',
    images: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80"
    ]
  },
  {
    id: 9,
    name: "PowerVolt 65W GaN Fast Charger",
    category: "Electronics",
    price: 34.99,
    rating: 4.9,
    reviews: 320,
    description: 'Ultra-compact Gallium Nitride (GaN) fast charger capable of charging laptops, phones, and tablets simultaneously with triple USB output ports.',
    images: [
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&q=80",
      "https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=800&q=80",
      "https://images.unsplash.com/photo-1704474618942-ae933a8edd86?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 10,
    name: "AirBuds Pro ANC Wireless Earbuds",
    category: "Audio",
    price: 129.99,
    rating: 4.8,
    reviews: 245,
    description: 'True wireless earbuds with Active Noise Cancellation, Transparency Mode, touch gesture controls, and wireless charging case.',
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80",
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&q=80",
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=800&q=80"
    ]
  },
  
  {
    id: 11,
    name: "PulseWave Studio Monitor Headphones",
    category: "Audio",
    price: 149.99,
    rating: 4.8,
    reviews: 142,
    description: "Professional closed-back studio headphones featuring 50mm neodymium drivers, plush memory foam earcups, and detachable coiled cable.",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80"
    ]
  },
  {
    id: 12,
    name: "AeroTime Smart Fitness Watch",
    category: "Wearables",
    price: 199.99,
    rating: 4.6,
    reviews: 88,
    description: "Sleek AMOLED smartwatch with continuous HR tracking, SpO2 sensor, built-in GPS, and 14-day battery life on a single charge.",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&q=80",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&q=80"
    ]
  },
  {
    id: 13,
    name: "LuminaGlow RGB Desk Ambient Light Bar",
    category: "Accessories",
    price: 39.99,
    rating: 4.5,
    reviews: 63,
    description: "Smart LED light bar with music sync mode, 16 million colors, and app control to elevate your gaming or desk setup atmosphere.",
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
      "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?w=800&q=80"
    ]
  },
  {
    id: 14,
    name: "OptiCam Pro 4K Streaming Webcam",
    category: "Electronics",
    price: 119.99,
    rating: 4.7,
    reviews: 110,
    description: "Ultra-HD 4K webcam with dual omnidirectional microphones, AI auto-framing, low-light correction, and built-in privacy shutter.",
    images: [
      "https://images.unsplash.com/photo-1585298723682-7115561c51b7?w=800&q=80",
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&q=80",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80"
    ]
  },
  {
    id: 15,
    name: "BassCore Waterproof Bluetooth Speaker",
    category: "Audio",
    price: 69.99,
    rating: 4.6,
    reviews: 95,
    description: "IPX7 fully waterproof portable speaker delivering 360-degree punchy bass, 20-hour continuous playback, and rugged rubberized armor.",
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80",
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&q=80",
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=800&q=80"
    ]
  },
  {
    id: 16,
    name: "HyperCharge 100W GaN Fast Charger",
    category: "Electronics",
    price: 54.99,
    rating: 4.9,
    reviews: 205,
    description: "Compact 4-port GaN III wall charger capable of fast-charging laptops, smartphones, and tablets simultaneously with smart power allocation.",
    images: [
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&q=80",
      "https://images.unsplash.com/photo-1609592424074-8dbb6169548d?w=800&q=80",
      "https://images.unsplash.com/photo-1622445268121-da1181402058?w=800&q=80"
    ]
  },
  {
    id: 17,
    name: "ZenMat XL Extended Minimalist Desk Pad",
    category: "Accessories",
    price: 29.99,
    rating: 4.7,
    reviews: 58,
    description: "Water-resistant felt and micro-weave cloth desk pad providing a smooth surface for mouse gliding and full desktop protection.",
    images: [
      "https://images.unsplash.com/photo-1616440347437-b1c73416efc2?w=800&q=80",
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80",
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&q=80"
    ]
  },
  {
    id: 18,
    name: "VibePods Pro Active Noise Cancelling Earbuds",
    category: "Audio",
    price: 129.99,
    rating: 4.8,
    reviews: 180,
    description: "True wireless earbuds featuring 35dB active noise cancellation, spatial audio support, transparency mode, and wireless charging case.",
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80",
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&q=80",
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=800&q=80"
    ]
  },
  {
    id: 19,
    name: "NovaTab 11 Pro OLED Tablet",
    category: "Electronics",
    price: 499.99,
    rating: 4.9,
    reviews: 77,
    description: "11-inch 120Hz OLED tablet powered by next-gen octa-core processor, quad stereo speakers tuned by AKG, and stylus pen included.",
    images: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80",
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=800&q=80",
      "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?w=800&q=80"
    ]
  },
  {
    id: 20,
    name: "ApexTrack GPS Smart Fitness Band",
    category: "Wearables",
    price: 49.99,
    rating: 4.4,
    reviews: 52,
    description: "Lightweight workout tracker with vibrant color display, sleep quality analysis, 5ATM water resistance, and 50+ sport activity modes.",
    images: [
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=800&q=80",
      "https://images.unsplash.com/photo-1510017803434-a899398421b3?w=800&q=80",
      "https://plus.unsplash.com/premium_photo-1681433383783-661b519b154a?q=80&w=1460&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },

  
  {
    id: 21,
    name: "FocusNoise ANC Wireless Headphones",
    category: "Audio",
    price: 179.99,
    rating: 4.8,
    reviews: 165,
    description: "Hybrid active noise cancelling over-ear headphones with custom 40mm drivers, 40-hour battery life, and quick charge technology.",
    images: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80"
    ]
  },
  {
    id: 22,
    name: "ChronoFit Ultra Smartwatch",
    category: "Wearables",
    price: 249.99,
    rating: 4.7,
    reviews: 112,
    description: "Rugged titanium smartwatch built for outdoor endurance. Features dual-frequency GPS, ECG monitor, and offline topographical maps.",
    images: [
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&q=80"
    ]
  },
  {
    id: 23,
    name: "StreamCast Studio Condenser Microphone",
    category: "Electronics",
    price: 99.99,
    rating: 4.6,
    reviews: 89,
    description: "Cardioid USB condenser microphone with zero-latency monitoring, gain control knob, and heavy-duty anti-vibration shock mount.",
    images: [
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&q=80",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80",
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80"
    ]
  },
  {
    id: 24,
    name: "GigaDock 12-in-1 USB-C Hub Station",
    category: "Accessories",
    price: 79.99,
    rating: 4.8,
    reviews: 134,
    description: "Aluminum multiport adapter supporting dual 4K HDMI displays, 100W Power Delivery, Gigabit Ethernet, and SD card reader.",
    images: [
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=800&q=80",
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&q=80",
      "https://images.unsplash.com/photo-1616578273461-3a99ce422de6?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 25,
    name: "GameSphere Wireless Pro Controller",
    category: "Gaming",
    price: 64.99,
    rating: 4.7,
    reviews: 210,
    description: "Pro gaming controller with Hall Effect anti-drift joysticks, remappable rear paddles, and multi-platform compatibility.",
    images: [
      "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=800&q=80",
      "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=800&q=80",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80"
    ]
  },
  {
    id: 26,
    name: "AuraGlow Smart Monitor Light Bar",
    category: "Accessories",
    price: 45.99,
    rating: 4.5,
    reviews: 78,
    description: "Screenbar monitor lamp with asymmetric optical design, glare-free touch controls, and auto-dimming ambient light sensor.",
    images: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80",
      "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?w=800&q=80"
    ]
  },
  {
    id: 27,
    name: "SoundPulse Mini Portable Speaker",
    category: "Audio",
    price: 34.99,
    rating: 4.4,
    reviews: 93,
    description: "Pocket-sized Bluetooth speaker featuring deep bass radiation, built-in lanyard, and IP67 dustproof/waterproof rating.",
    images: [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&q=80",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80",
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=800&q=80"
    ]
  },
  {
    id: 28,
    name: "PixelPad 10.5 High-Def Graphics Tablet",
    category: "Electronics",
    price: 159.99,
    rating: 4.8,
    reviews: 67,
    description: "Professional drawing tablet featuring 8192 levels of pressure sensitivity, battery-free stylus, and 8 customizable express keys.",
    images: [
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80",
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=800&q=80"
    ]
  },
  {
    id: 29,
    name: "PowerVolt 20000mAh Magnetic Power Bank",
    category: "Accessories",
    price: 49.99,
    rating: 4.6,
    reviews: 158,
    description: "MagSafe compatible wireless power bank with digital LED display, 22.5W fast wired charging option, and fold-out kickstand.",
    images: [
      "https://images.unsplash.com/photo-1614399113305-a127bb2ca893?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&q=80",
      "https://images.unsplash.com/photo-1632156752398-2b2cb4e6c907?q=80&w=1026&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 30,
    name: "TitanGrip Precision VR Motion Controllers",
    category: "Gaming",
    price: 119.99,
    rating: 4.7,
    reviews: 44,
    description: "Ergonomic VR controllers with precise sub-millimeter tracking, haptic feedback triggers, and full finger-tracking sensors.",
    images: [
      "https://images.unsplash.com/photo-1678057669251-804f9b10a5d4?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&q=80",
      "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=800&q=80"
    ]
  },

  
  {
    id: 31,
    name: "UrbanGlow Heavyweight Cotton Hoodie",
    category: "Clothing",
    price: 69.99,
    rating: 4.8,
    reviews: 135,
    description: "Premium 450GSM organic French terry cotton hoodie featuring a double-lined hood, relaxed drop-shoulder fit, and ribbed cuffs.",
    images: [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&q=80",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=800&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&q=80"
    ]
  },
  {
    id: 32,
    name: "AeroStealth Tactical Cargo Pants",
    category: "Clothing",
    price: 79.99,
    rating: 4.7,
    reviews: 98,
    description: "Water-resistant stretch-ripstop cargo pants equipped with 8 tactical pockets, adjustable ankle cuffs, and reinforced knee paneling.",
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80",
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?w=800&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80"
    ]
  },
  {
    id: 33,
    name: "Zenith Oversized Vintage Graphic Tee",
    category: "Clothing",
    price: 34.99,
    rating: 4.6,
    reviews: 182,
    description: "100% combed cotton oversized crewneck t-shirt with custom retro screen print, acid wash finish, and durable double-stitched hem.",
    images: [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&q=80",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80"
    ]
  },
  {
    id: 34,
    name: "Nomad All-Weather Puffer Jacket",
    category: "Clothing",
    price: 139.99,
    rating: 4.9,
    reviews: 114,
    description: "Ultra-lightweight windproof puffer jacket insulated with eco-friendly recycled down, featuring fleece-lined handwarmer pockets.",
    images: [
      "https://images.unsplash.com/photo-1544923246-77307dd654cb?w=800&q=80",
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80"
    ]
  },
  {
    id: 35,
    name: "Vanguard Slim-Fit Denim Jacket",
    category: "Clothing",
    price: 89.99,
    rating: 4.7,
    reviews: 76,
    description: "Classic washed indigo denim jacket made with 12oz stretch denim, buttoned chest pockets, and adjustable waist tabs.",
    images: [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&q=80",
      "https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?w=800&q=80",
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=800&q=80"
    ]
  },
  {
    id: 36,
    name: "FlexMotion Athletic Training Joggers",
    category: "Clothing",
    price: 49.99,
    rating: 4.5,
    reviews: 140,
    description: "Moisture-wicking 4-way stretch performance joggers designed with zippered side pockets, elastic drawstring waistband, and tapered leg cuffs.",
    images: [
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=800&q=80",
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80",
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?w=800&q=80"
    ]
  },
  {
    id: 37,
    name: "KnitCore Minimalist Crewneck Sweater",
    category: "Clothing",
    price: 64.99,
    rating: 4.8,
    reviews: 62,
    description: "Soft merino wool blend fine-knit sweater providing lightweight warmth, ribbed neckline, and an effortless modern silhouette.",
    images: [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80",
      "https://images.unsplash.com/photo-1610555356070-d0efb6505f81?w=800&q=80"
    ]
  },
  {
    id: 38,
    name: "ApexDry Waterproof Windbreaker",
    category: "Clothing",
    price: 94.99,
    rating: 4.6,
    reviews: 89,
    description: "Fully seam-sealed packable rain jacket featuring a storm hood, waterproof zippers, and breathable underarm ventilation mesh.",
    images: [
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&q=80",
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?w=800&q=80",
      "https://images.unsplash.com/photo-1544923246-77307dd654cb?w=800&q=80"
    ]
  },
  {
    id: 39,
    name: "MetroFlex Oxford Button-Down Shirt",
    category: "Clothing",
    price: 44.99,
    rating: 4.7,
    reviews: 105,
    description: "Wrinkle-resistant 100% cotton Oxford shirt with button-down collar, curved hem, and tailored smart-casual fit.",
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80",
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800&q=80"
    ]
  },
  {
    id: 40,
    name: "ThermalShield Fleece Zip Jacket",
    category: "Clothing",
    price: 74.99,
    rating: 4.8,
    reviews: 121,
    description: "Plush sherpa fleece jacket with full front zip, stand-up collar, reinforced nylon chest pocket, and elasticized binding.",
    images: [
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=800&q=80",
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80"
    ]
  },


  {
    id: 41,
    name: "Nordic Minimalist Oak Lounge Chair",
    category: "Furniture",
    price: 289.99,
    rating: 4.8,
    reviews: 67,
    description: "Ergonomically contoured lounge chair crafted from solid Scandinavian white oak, upholstered in stain-resistant textured linen fabric.",
    images: [
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80",
      "https://images.unsplash.com/photo-1619596662481-085e45d69762?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=800&q=80"
    ]
  },
  {
    id: 42,
    name: "VelvetCraft Mid-Century Accent Sofa",
    category: "Furniture",
    price: 549.99,
    rating: 4.9,
    reviews: 112,
    description: "Luxurious 3-seater sofa wrapped in plush emerald velvet with tufted backrest padding and tapered brass-plated steel legs.",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80"
    ]
  },
  {
    id: 43,
    name: "Zenith Adjustable Solid Wood Standing Desk",
    category: "Furniture",
    price: 429.99,
    rating: 4.7,
    reviews: 89,
    description: "Dual-motor electric height-adjustable desk featuring a 54-inch walnut tabletop, programmable memory presets, and cable management tray.",
    images: [
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&q=80",
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80",
      "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=800&q=80"
    ]
  },
  {
    id: 44,
    name: "LoftSpace Industrial Bookshelf Unit",
    category: "Furniture",
    price: 199.99,
    rating: 4.6,
    reviews: 74,
    description: "5-tier open-standing display bookcase constructed with matte black powder-coated iron frame and thick rustic oak wood shelves.",
    images: [
      "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=800&q=80",
      "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?w=800&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&q=80"
    ]
  },
  {
    id: 45,
    name: "AuraWood Round Marble Coffee Table",
    category: "Furniture",
    price: 249.99,
    rating: 4.8,
    reviews: 95,
    description: "Contemporary center coffee table boasting a genuine Carrara white marble slab top supported by interlocking solid ash wood legs.",
    images: [
      "https://images.unsplash.com/photo-1533779283484-8ad4940aa3a8?w=800&q=80",
      "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=800&q=80",
      "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?w=800&q=80"
    ]
  },
  {
    id: 46,
    name: "ErgoPosture Mesh Executive Office Chair",
    category: "Furniture",
    price: 229.99,
    rating: 4.7,
    reviews: 143,
    description: "High-back ergonomic task chair with breathable Korean mesh, dynamic lumbar support, 3D adjustable armrests, and recline lock.",
    images: [
      "https://images.unsplash.com/photo-1771270759486-1f7703945072?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1505797149-43b0069ec26b?w=800&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80"
    ]
  },
  {
    id: 47,
    name: "SereneRest Floating Platform Bed Frame",
    category: "Furniture",
    price: 699.99,
    rating: 4.9,
    reviews: 58,
    description: "Queen-size minimalist platform bed with under-bed warm LED ambient glow lighting, built-in nightstands, and heavy-duty slat support.",
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
      "https://images.unsplash.com/photo-1731779702185-8e4dbba92ceb?q=80&w=682&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80"
    ]
  },
  {
    id: 48,
    name: "UrbanFlex Storage Ottoman Bench",
    category: "Furniture",
    price: 119.99,
    rating: 4.5,
    reviews: 82,
    description: "Multi-functional entryway bench featuring soft tufted seating upholstery, safety-hinged top lid, and spacious internal storage compartment.",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80"
    ]
  },
  {
    id: 49,
    name: "ModuBar Swivel Counter Stool Set",
    category: "Furniture",
    price: 179.99,
    rating: 4.6,
    reviews: 64,
    description: "Set of 2 modern kitchen island barstools with 360-degree smooth swivel, matte black steel frame, and curved faux-leather bucket seats.",
    images: [
      "https://images.unsplash.com/photo-1503602642458-232111445657?w=800&q=80",
      "https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=800&q=80",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80"
    ]
  },
  {
    id: 50,
    name: "LuminaArch Floor Standing Lamp",
    category: "Furniture",
    price: 139.99,
    rating: 4.8,
    reviews: 101,
    description: "Overarching arc floor lamp with a heavy natural marble base, brushed brass finish, and linen drum shade with foot pedal switch.",
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80",
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&q=80"
    ]
  },


  {
    id: 51,
    name: "ZenFlow Eco-Friendly Cork Yoga Mat",
    category: "Lifestyle",
    price: 49.99,
    rating: 4.8,
    reviews: 118,
    description: "Premium non-slip organic cork yoga mat with natural rubber backing, alignment guidelines, and carrying strap included.",
    images: [
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80"
    ]
  },
  {
    id: 52,
    name: "HydroPure Vacuum Insulated Water Bottle",
    category: "Lifestyle",
    price: 29.99,
    rating: 4.9,
    reviews: 230,
    description: "Double-wall stainless steel flask that keeps beverages ice-cold for 24 hours or piping hot for 12 hours, complete with leak-proof straw lid.",
    images: [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&q=80",
      "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=800&q=80",
      "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?w=800&q=80"
    ]
  },
  {
    id: 53,
    name: "AuraMist Ultrasonic Essential Oil Diffuser",
    category: "Lifestyle",
    price: 38.99,
    rating: 4.7,
    reviews: 84,
    description: "Whisper-quiet ceramic aromatherapy diffuser featuring 7 ambient LED light colors, auto shut-off safety, and 500ml water capacity.",
    images: [
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80",
      "https://images.unsplash.com/photo-1602928321679-560bb453f190?w=800&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80"
    ]
  },
  {
    id: 54,
    name: "BaristaPro Manual Pour-Over Coffee Maker",
    category: "Lifestyle",
    price: 44.99,
    rating: 4.8,
    reviews: 142,
    description: "Heat-resistant borosilicate glass coffee dripper carafe with a reusable fine-mesh stainless steel filter for rich, aromatic brews.",
    images: [
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
      "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=800&q=80"
    ]
  },
  {
    id: 55,
    name: "GlowGlow Plant-Based Scented Soy Candle",
    category: "Lifestyle",
    price: 24.99,
    rating: 4.6,
    reviews: 96,
    description: "Hand-poured 100% natural soy wax candle infused with lavender and sandalwood essential oils, offering a clean 50-hour burn time.",
    images: [
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800&q=80",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80"
    ]
  },

  
  {
    id: 56,
    name: "ApexX Pro Wireless Gaming Headset",
    category: "Gaming",
    price: 159.99,
    rating: 4.8,
    reviews: 184,
    description: "Ultra-low latency 2.4GHz wireless gaming headset featuring 7.1 surround sound, broadcast-grade detachable mic, and custom RGB earcup lighting.",
    images: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80"
    ]
  },
  {
    id: 57,
    name: "TitanChair Ergonomic Racing Gaming Seat",
    category: "Gaming",
    price: 299.99,
    rating: 4.9,
    reviews: 215,
    description: "High-density cold-cure foam gaming chair with 4D adjustable armrests, magnetic memory foam head pillow, and 165-degree recline capacity.",
    images: [
      "https://plus.unsplash.com/premium_photo-1682141878168-5dace8e1785d?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&q=80",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80"
    ]
  },
  {
    id: 58,
    name: "OptiGlide Ultra-Lightweight Honeycomb Mouse",
    category: "Gaming",
    price: 59.99,
    rating: 4.7,
    reviews: 129,
    description: "Superlight 58g gaming mouse equipped with a 26,000 DPI optical sensor, ultra-flexible paracord cable, and 100% PTFE glide feet.",
    images: [
      "https://images.unsplash.com/photo-1636036758527-266adfee3fcf?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80",
      "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 59,
    name: "CyberDeck 60% Wireless Mechanical Gaming Keyboard",
    category: "Gaming",
    price: 109.99,
    rating: 4.8,
    reviews: 167,
    description: "Compact 60% form factor mechanical keyboard with pre-lubed linear switches, PBT double-shot keycaps, and hot-swappable PCB.",
    images: [
      "https://plus.unsplash.com/premium_photo-1677870728119-52aef052d7ef?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&q=80",
      "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&q=80"
    ]
  },
  {
    id: 60,
    name: "Vortex 240Hz Curved Esports Gaming Monitor",
    category: "Gaming",
    price: 349.99,
    rating: 4.9,
    reviews: 94,
    description: "27-inch 1500R curved QHD gaming display with lightning-fast 240Hz refresh rate, 0.5ms response time, and AMD FreeSync Premium Pro.",
    images: [
      "https://plus.unsplash.com/premium_photo-1682141878168-5dace8e1785d?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
      "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?w=800&q=80"
    ]
  },

];