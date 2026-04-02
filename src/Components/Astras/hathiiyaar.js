// astras.js

const Astras = [
  {
    id: "kodanda",
    name: "Kodanda",
    category: "Rama",
    type: "weapon",
    icon: "bow",
    summary: "Rama divine bow",
    description:
      "Kodanda is the sacred bow of Lord Rama, symbolizing righteousness, precision, and divine authority in battle.",
    origin: "Divine weapon of Vishnu avatar Rama",
    wielder: ["Rama"],
    usedAgainst: ["Ravana", "Rakshasa sena"],
    episode: "Entire Lanka war",
    powerLevel: 9,
    element: "divine",
    effects: [
      "high precision attacks",
      "supports divine astras",
      "unbreakable strength"
    ],
    symbolism: "Represents dharma and disciplined power",
    image: "/images/weapons/kodanda.png",
    model3d: "/models/kodanda.glb",
    colorTheme: "#DAA520",
    gradient: "from-yellow-500 to-amber-700"
  },

  {
    id: "brahmastra",
    name: "Brahmastra",
    category: "Rama",
    type: "astra",
    icon: "sun",
    summary: "ultimate cosmic destruction",
    description:
      "The Brahmastra is the most powerful celestial weapon created by Lord Brahma, capable of massive destruction if misused.",
    origin: "Created by Lord Brahma",
    wielder: ["Rama", "Ravana", "Indrajit"],
    usedAgainst: ["Ravana"],
    episode: "Final battle of Lanka",
    powerLevel: 10,
    element: "cosmic",
    effects: [
      "total annihilation",
      "cannot be easily countered",
      "requires divine control"
    ],
    symbolism: "Ultimate power guided by responsibility",
    image: "/images/weapons/brahmastra.png",
    model3d: "/models/brahmastra.glb",
    colorTheme: "#FFD700",
    gradient: "from-yellow-400 to-orange-600"
  },

  {
    id: "agneyastra",
    name: "Agneyastra",
    category: "Elemental",
    type: "astra",
    icon: "fire",
    summary: "fire based destruction",
    description:
      "Agneyastra unleashes intense flames, burning enemies and battlefield surroundings instantly.",
    origin: "Agni Dev",
    wielder: ["Rama", "Lakshmana", "Ravana"],
    usedAgainst: ["Enemy armies"],
    episode: "Multiple war encounters",
    powerLevel: 8,
    element: "fire",
    effects: [
      "burns targets instantly",
      "spreads fire rapidly",
      "causes chaos"
    ],
    symbolism: "Represents destructive purification",
    image: "/images/weapons/agneyastra.png",
    model3d: "/models/agneyastra.glb",
    colorTheme: "#FF4500",
    gradient: "from-red-500 to-orange-700"
  },

  {
    id: "varunastra",
    name: "Varunastra",
    category: "Elemental",
    type: "astra",
    icon: "water",
    summary: "water control weapon",
    description:
      "Varunastra summons powerful water forces to counter fire-based attacks and flood battle zones.",
    origin: "Varuna Dev",
    wielder: ["Rama", "Lakshmana"],
    usedAgainst: ["Agneyastra"],
    episode: "Elemental counter battles",
    powerLevel: 8,
    element: "water",
    effects: [
      "extinguishes fire",
      "creates floods",
      "controls battlefield"
    ],
    symbolism: "Represents balance and control",
    image: "/images/weapons/varunastra.png",
    model3d: "/models/varunastra.glb",
    colorTheme: "#1E90FF",
    gradient: "from-blue-400 to-blue-700"
  },

  {
    id: "vayavyastra",
    name: "Vayavyastra",
    category: "Elemental",
    type: "astra",
    icon: "wind",
    summary: "wind storm force",
    description:
      "Vayavyastra generates powerful winds and storms to disrupt enemies and scatter formations.",
    origin: "Vayu Dev",
    wielder: ["Rama", "Lakshmana"],
    usedAgainst: ["Enemy formations"],
    episode: "Battlefield disruption",
    powerLevel: 7,
    element: "wind",
    effects: [
      "creates storms",
      "scatters enemies",
      "reduces visibility"
    ],
    symbolism: "Represents unseen force and movement",
    image: "/images/weapons/vayavyastra.png",
    model3d: "/models/vayavyastra.glb",
    colorTheme: "#87CEEB",
    gradient: "from-sky-400 to-blue-500"
  },

  {
    id: "indrastra",
    name: "Indrastra",
    category: "Elemental",
    type: "astra",
    icon: "thunder",
    summary: "lightning strike power",
    description:
      "Indrastra calls upon lightning and thunder, delivering high-impact strikes on enemies.",
    origin: "Indra Dev",
    wielder: ["Rama", "Lakshmana", "Indrajit"],
    usedAgainst: ["Enemy warriors"],
    episode: "High intensity battles",
    powerLevel: 9,
    element: "thunder",
    effects: [
      "lightning strikes",
      "shock impact",
      "area damage"
    ],
    symbolism: "Represents divine authority and force",
    image: "/images/weapons/indrastra.png",
    model3d: "/models/indrastra.glb",
    colorTheme: "#FFD700",
    gradient: "from-yellow-300 to-yellow-600"
  },

  {
    id: "nagastra",
    name: "Nagastra",
    category: "Lanka",
    type: "astra",
    icon: "snake",
    summary: "serpent binding attack",
    description:
      "A powerful serpent weapon that releases divine snakes to immobilize enemies completely.",
    origin: "Naga deities",
    wielder: ["Indrajit", "Ravana"],
    usedAgainst: ["Rama", "Lakshmana"],
    episode: "Critical war moment",
    powerLevel: 8,
    element: "poison",
    effects: [
      "binds enemies",
      "paralyzes movement",
      "induces fear"
    ],
    symbolism: "Represents illusion and entrapment",
    image: "/images/weapons/nagastra.png",
    model3d: "/models/nagastra.glb",
    colorTheme: "#228B22",
    gradient: "from-green-500 to-emerald-800"
  },

  {
    id: "garudastra",
    name: "Garudastra",
    category: "Rama",
    type: "astra",
    icon: "feather",
    summary: "serpent counter weapon",
    description:
      "Garudastra invokes divine Garuda energy to neutralize serpent-based attacks instantly.",
    origin: "Garuda",
    wielder: ["Rama"],
    usedAgainst: ["Nagastra"],
    episode: "Liberation moment",
    powerLevel: 9,
    element: "divine",
    effects: [
      "destroys serpents",
      "breaks bindings",
      "restores strength"
    ],
    symbolism: "Represents freedom and divine rescue",
    image: "/images/weapons/garudastra.png",
    model3d: "/models/garudastra.glb",
    colorTheme: "#00BFFF",
    gradient: "from-blue-400 to-cyan-600"
  },

  {
    id: "shakti",
    name: "Shakti",
    category: "Lanka",
    type: "weapon",
    icon: "spear",
    summary: "divine piercing spear",
    description:
      "A deadly spear weapon used by Indrajit, capable of causing near-fatal damage.",
    origin: "Indra Dev",
    wielder: ["Indrajit"],
    usedAgainst: ["Lakshmana"],
    episode: "Lakshman injured scene",
    powerLevel: 9,
    element: "divine",
    effects: [
      "piercing attack",
      "severe damage",
      "hard to resist"
    ],
    symbolism: "Represents deadly precision",
    image: "/images/weapons/shakti.png",
    model3d: "/models/shakti.glb",
    colorTheme: "#DC143C",
    gradient: "from-red-500 to-rose-700"
  },

  {
    id: "chandrahas",
    name: "Chandrahas",
    category: "Lanka",
    type: "weapon",
    icon: "sword",
    summary: "Ravana divine sword",
    description:
      "A divine sword gifted to Ravana by Lord Shiva, symbolizing immense destructive power.",
    origin: "Lord Shiva",
    wielder: ["Ravana"],
    usedAgainst: ["Vanara army"],
    episode: "Close combat battles",
    powerLevel: 9,
    element: "divine",
    effects: [
      "sharp destruction",
      "close combat dominance",
      "fear generation"
    ],
    symbolism: "Represents ego and power",
    image: "/images/weapons/chandrahas.png",
    model3d: "/models/chandrahas.glb",
    colorTheme: "#8B0000",
    gradient: "from-red-800 to-black"
  }
];

export default Astras;