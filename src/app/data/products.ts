export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  images: {
    front: string;
    back: string;
  };
  description: string;
  details: string;
  sizes: string[];
  isNew: boolean;
}

export const products: Product[] = [
  {
    id: "camiseta-boombox",
    name: "CAMISETA BAGGY 'BOOMBOX GENERATION'",
    price: 149.90,
    category: "CAMISETAS",
    images: {
      front: "/images/camiseta-boombox-front.png",
      back: "/images/camiseta-boombox-back.png",
    },
    description: "Camiseta com modelagem Super Oversized em malha de algodão fio 20.1 (pesada). Passa por um processo de lavagem estonada (acid-wash) para um visual vintage autêntico. A estampa frontal apresenta o logo \"ELEVEN\" em tipografia bubble graffiti com acabamento 3D e um gráfico de rádio boombox em pixel art.",
    details: "• Material: Algodão fio 20.1 (malha pesada)\n• Lavagem: Estonada acid-wash vintage\n• Corte: Super Oversized/Baggy\n• Estampa frontal: Logo ELEVEN bubble graffiti 3D\n• Estampa costas: Boombox pixel art\n• Gola: Ribana canelada 3cm\n• Made in Brasil",
    sizes: ["P", "M", "G", "GG"],
    isNew: true,
  },
  {
    id: "moletom-archive",
    name: "MOLETOM HOODIE 'ARCHIVE SOUNDS'",
    price: 289.90,
    category: "MOLETOM",
    images: {
      front: "/images/moletom-archive-front.png",
      back: "/images/moletom-archive-back.png",
    },
    description: "Moletom pesado (3 cabos) com interior peluciado e modelagem boxy (curto e largo). Nas costas, apresenta uma ilustração em bordado de alta densidade de um set de DJ clássico dos anos 2000 em estilo 8-bit. Bolso canguru frontal e capuz forrado.",
    details: "• Material: Moletom 3 cabos com interior peluciado\n• Modelagem: Boxy (curto e largo)\n• Estampa frontal: Archive Sounds em silk screen alto relevo\n• Estampa costas: Set DJ 8-bit bordado alta densidade\n• Bolso canguru frontal\n• Capuz forrado\n• Made in Brasil",
    sizes: ["P", "M", "G", "GG"],
    isNew: true,
  },
  {
    id: "calca-jeans",
    name: "CALÇA JEANS BAGGY 'CONTRAST STITCH'",
    price: 259.90,
    category: "CALÇAS",
    images: {
      front: "/images/calca-jeans-front.png",
      back: "/images/calca-jeans-back.png",
    },
    description: "Jeans 100% algodão de alta gramatura em lavagem Indigo Dark. Corte largo inspirado nas calças de hip hop dos anos 2000. Possui costuras duplas em linha branca para contraste e bordados de estrelas e o número \"777\" nos bolsos traseiros e laterais.",
    details: "• Material: Denim 100% algodão alta gramatura\n• Lavagem: Indigo Dark\n• Corte: Baggy/Wide Leg estilo hip hop Y2K\n• Costuras duplas em linha branca contrastante\n• Bordado de estrelas e \"777\" nos bolsos\n• Ajuste de cintura interno\n• Passadores de cinto reforçados\n• Made in Brasil",
    sizes: ["38", "40", "42", "44", "46"],
    isNew: true,
  },
  {
    id: "bermuda-cargo",
    name: "BERMUDA CARGO 'TECHNO-UTILITY' Y2K",
    price: 179.90,
    category: "BERMUDAS",
    images: {
      front: "/images/bermuda-cargo-front.png",
      back: "/images/bermuda-cargo-back.png",
    },
    description: "Bermuda abaixo do joelho em tecido Ripstop preto. Possui 6 bolsos funcionais com fechamento em velcro e fivelas de polímero. Logotipo \"ELEVEN - 00\" estampado em material refletivo na perna esquerda.",
    details: "• Material: Ripstop preto\n• 6 bolsos funcionais com velcro e fivelas de polímero\n• Logotipo ELEVEN - 00 em material refletivo\n• Cordões de ajuste na barra\n• Comprimento: Abaixo do joelho\n• Fit: Regular/Relaxado\n• Made in Brasil",
    sizes: ["P", "M", "G", "GG"],
    isNew: true,
  },
  {
    id: "camiseta-longa",
    name: "CAMISETA MANGA LONGA 'PIXEL-EVOLUTION'",
    price: 129.90,
    category: "CAMISETAS",
    images: {
      front: "/images/camiseta-longa-front.png",
      back: "/images/camiseta-longa-back.png",
    },
    description: "Gola careca (crewneck) em malha leve, perfeita para sobreposições. Estampa central \"ELEVEN-UTION\" em vermelho vibrante com tipografia digital. Mangas com punho elástico para ajuste perfeito. Ideal para ser usada por baixo de camisetas de manga curta, seguindo a estética skater dos anos 2000.",
    details: "• Material: Malha leve algodão\n• Corte: Oversized\n• Gola: Careca (crewneck)\n• Estampa: ELEVEN-UTION tipografia digital vermelha\n• Costas: Número 00 em pixel art vermelho\n• Mangas com punho elástico\n• Lavagem: Estonada vintage\n• Made in Brasil",
    sizes: ["P", "M", "G", "GG"],
    isNew: true,
  },
  {
    id: "bone-trucker",
    name: "BONÉ TRUCKER '00 LOGO'",
    price: 89.90,
    category: "ACESSÓRIOS",
    images: {
      front: "/images/bone-trucker-front.png",
      back: "/images/bone-trucker-back.png",
    },
    description: "Boné estilo Trucker com frente em brim e traseira em redinha. Bordado frontal em relevo do logo \"00\" em formato de bolha com degradê colorido. Aba curva com costuras reforçadas.",
    details: "• Frente: Brim estruturado\n• Traseira: Tela mesh respirável\n• Bordado frontal: Logo 00 bolha com degradê colorido\n• Aba curva com costuras reforçadas\n• Fechamento: Snapback ajustável\n• Tamanho único ajustável",
    sizes: ["ÚNICO"],
    isNew: true,
  },
  {
    id: "cinto-bling",
    name: "CINTO 'BLING-CHAIN' FIVELA LOGO",
    price: 69.90,
    category: "ACESSÓRIOS",
    images: {
      front: "/images/cinto-front.png",
      back: "/images/cinto-back.png",
    },
    description: "Cinto em lona preta de alta resistência com fivela metálica de encaixe rápido. A fivela é personalizada com o logotipo \"ELEVEN\" em baixo relevo polido. Ponteira metálica para evitar o desfiamento.",
    details: "• Material: Lona preta alta resistência\n• Fivela: Metálica com encaixe rápido\n• Logo ELEVEN em baixo relevo polido\n• Ponteira metálica anti-desfiamento\n• Comprimento ajustável\n• Finish: Cromado",
    sizes: ["ÚNICO"],
    isNew: false,
  },
];
