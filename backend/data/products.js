// This file is our "fake database" for now.
// In a real app, this data would live in MongoDB — we'll connect that in Phase 2.
// For now, this array just lives in the server's memory (it resets every time you restart the server).

export let products = [
  {
    id: "edg-ts-001",
    name: "Signal Tee",
    price: 1999,
    sizes: ["S", "M", "L", "XL"],
    image: "/images/signal-tee.jpg",
    description: "Tech-inspired print, 220 GSM cotton.",
    stock: { S: 10, M: 15, L: 15, XL: 8 }
  },
  {
    id: "edg-ts-002",
    name: "Blueprint Tee",
    price: 1999,
    sizes: ["S", "M", "L", "XL"],
    image: "/images/blueprint-tee.jpg",
    description: "Schematic-style back print, 220 GSM cotton.",
    stock: { S: 10, M: 12, L: 10, XL: 6 }
  },
  {
    id: "edg-ts-003",
    name: "Grid Type Tee",
    price: 2199,
    sizes: ["S", "M", "L", "XL"],
    image: "/images/grid-tee.jpg",
    description: "Bold typographic back print, 220 GSM cotton.",
    stock: { S: 8, M: 14, L: 12, XL: 5 }
  }
  
];
