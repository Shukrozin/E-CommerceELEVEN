import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

export function HomePage() {
  return (
    <div className="bg-[#0D0D0D] overflow-x-hidden">
      <HeroSection />
      <MarqueeStrip />
      <FeaturedDrop />
      <ProductGrid />
      <ManifestoSection />
      <ShopTheLook />
      <AccessoriesSection />
    </div>
  );
}

/* ─── HERO ─────────────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-end pb-20 overflow-hidden pt-[104px]">
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.png"
          alt="ELEVEN Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/60 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 w-full px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[#FF4500] text-sm font-bold tracking-[0.3em] uppercase mb-4">
            Edição Limitada · 00 Collection
          </p>
          <h1
            className="text-white leading-none mb-6 font-black"
            style={{ fontSize: "clamp(3rem, 10vw, 9rem)" }}
          >
            ELEVEN
            <br />
            <span className="text-[#FF4500]">— 00</span>
          </h1>
          <p className="text-[#AAAAAA] text-base md:text-lg max-w-md mb-10 leading-relaxed">
            Vibe Y2K pura. Gráficos pixel-art, lavagens estonadas e silhuetas
            exageradas. Feito nas ruas, pra quem vive as ruas.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              to="/"
              className="inline-block bg-[#FF4500] text-[#0D0D0D] px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors duration-300"
            >
              Ver Coleção
            </Link>
            <a
              href="#look"
              className="inline-block border border-white/30 text-white px-10 py-4 font-bold uppercase tracking-widest text-sm hover:border-[#FF4500] hover:text-[#FF4500] transition-colors duration-300"
            >
              O Look
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 right-8 flex flex-col items-center gap-2 text-white/40"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-px h-12 bg-white/20" />
      </motion.div>
    </section>
  );
}

/* ─── MARQUEE ───────────────────────────────────────────────────────── */
function MarqueeStrip() {
  const items = [
    "ELEVEN — 00 COLLECTION",
    "EDIÇÃO LIMITADA",
    "Y2K STREETWEAR",
    "MADE IN BRASIL",
    "PIXEL ART",
    "ACID WASH",
  ];
  const repeated = [...items, ...items, ...items];

  return (
    <div className="border-y border-[#FF4500]/30 bg-[#FF4500]/5 py-4 overflow-hidden">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-33.33%"] }}
        transition={{ duration: 22, ease: "linear", repeat: Infinity }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className="text-[#FF4500] text-sm font-bold tracking-[0.25em] uppercase flex items-center gap-12"
          >
            {item}
            <span className="text-white/20 text-lg">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ─── FEATURED DROP ──────────────────────────────────────────────────── */
function FeaturedDrop() {
  const [hovered, setHovered] = useState(false);
  const featured = products[0];

  return (
    <section className="py-24 px-6 md:px-16">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="text-[#FF4500] text-xs tracking-[0.3em] uppercase mb-2">Drop em Destaque</p>
            <h2 className="text-white text-4xl md:text-5xl font-black">NOVO LANÇAMENTO</h2>
          </div>
          <Link
            to={`/product/${featured.id}`}
            className="text-[#AAAAAA] text-sm tracking-widest uppercase hover:text-[#FF4500] transition-colors border-b border-[#AAAAAA]/30 hover:border-[#FF4500] pb-1"
          >
            Ver todos →
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <motion.div
            className="relative overflow-hidden aspect-[3/4] cursor-pointer"
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.5 }}
          >
            <Link to={`/product/${featured.id}`}>
              <motion.img
                src={hovered ? featured.images.back : featured.images.front}
                alt={featured.name}
                className="w-full h-full object-cover"
                animate={{ scale: hovered ? 1.05 : 1 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="bg-[#FF4500] text-black text-xs font-black px-3 py-1 uppercase tracking-wider">
                  NOVO
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-[#FF4500] text-xs tracking-widest uppercase mb-2">
                  {featured.category}
                </p>
                <h3 className="text-white text-2xl font-black mb-2">{featured.name}</h3>
                <p className="text-white text-xl font-bold">
                  R$ {featured.price.toFixed(2).replace(".", ",")}
                </p>
              </div>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 gap-2">
            {products.slice(1, 3).map((product, i) => (
              <motion.div
                key={product.id}
                className="relative overflow-hidden cursor-pointer"
                style={{ minHeight: "200px" }}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover="hover"
              >
                <Link to={`/product/${product.id}`}>
                  <motion.img
                    src={product.images.front}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    variants={{ hover: { scale: 1.05 } }}
                    transition={{ duration: 0.5 }}
                    style={{ height: "100%", minHeight: "200px" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                    <div>
                      <p className="text-[#FF4500] text-xs tracking-widest uppercase mb-1">
                        {product.category}
                      </p>
                      <h3 className="text-white font-black text-lg">{product.name}</h3>
                    </div>
                    <p className="text-white font-bold text-lg">
                      R$ {product.price.toFixed(2).replace(".", ",")}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── PRODUCT GRID ───────────────────────────────────────────────────── */
function ProductGrid() {
  return (
    <section className="py-24 px-6 md:px-16 bg-[#111111]">
      <div className="max-w-screen-xl mx-auto">
        <motion.div
          className="flex items-end justify-between mb-14 flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="text-[#FF4500] text-xs tracking-[0.3em] uppercase mb-2">
              Coleção Completa
            </p>
            <h2 className="text-white text-4xl md:text-5xl font-black">DESTAQUES</h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-[#1E1E1E]">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem(product, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      className="bg-[#111111] overflow-hidden group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden">
        {product.isNew && (
          <div className="absolute top-3 left-3 z-10 bg-[#FF4500] text-black px-2 py-0.5 text-[10px] font-black uppercase tracking-wider">
            NOVO
          </div>
        )}
        <motion.img
          src={isHovered ? product.images.back : product.images.front}
          alt={product.name}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.06 : 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex gap-2 mb-3 flex-wrap">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={(e) => { e.preventDefault(); setSelectedSize(size); }}
                className={`px-2 py-1 text-xs font-bold uppercase transition-colors ${
                  selectedSize === size
                    ? "bg-[#FF4500] text-black"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
          <button
            onClick={(e) => { e.preventDefault(); handleAdd(); }}
            className="w-full bg-[#FF4500] text-black py-2.5 text-xs font-black uppercase tracking-widest hover:bg-white transition-colors"
          >
            {added ? "✓ ADICIONADO" : "ADICIONAR AO CARRINHO"}
          </button>
        </motion.div>
      </Link>

      <div className="p-4 border-t border-[#1E1E1E]">
        <Link to={`/product/${product.id}`}>
          <p className="text-[#666] text-[10px] tracking-widest uppercase mb-1">{product.category}</p>
          <h3 className="text-[#E0E0E0] text-sm font-bold mb-2 hover:text-[#FF4500] transition-colors leading-tight">
            {product.name}
          </h3>
        </Link>
        <p className="text-white font-black text-base">
          R$ {product.price.toFixed(2).replace(".", ",")}
        </p>
      </div>
    </motion.div>
  );
}

/* ─── MANIFESTO ─────────────────────────────────────────────────────── */
function ManifestoSection() {
  return (
    <section className="relative py-40 px-6 md:px-16 overflow-hidden bg-[#0D0D0D]">
      <div
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden"
        aria-hidden
      >
        <span
          className="text-[#FF4500]/4 font-black whitespace-nowrap"
          style={{ fontSize: "clamp(6rem, 20vw, 18rem)" }}
        >
          ELEVEN
        </span>
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#FF4500] text-xs tracking-[0.3em] uppercase mb-6">Manifesto</p>
            <h2
              className="text-white font-black leading-none mb-8"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              FEITO PRA
              <br />
              QUEM VIVE
              <br />
              <span className="text-[#FF4500]">AS RUAS.</span>
            </h2>
            <Link
              to="/"
              className="inline-flex items-center gap-3 text-[#FF4500] text-sm font-bold uppercase tracking-widest hover:gap-5 transition-all"
            >
              Nossa história →
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-[#888] text-lg leading-relaxed border-l-2 border-[#FF4500] pl-6">
              "A ELEVEN nasceu da rua. Não de uma sala de reunião."
            </p>
            <p className="text-[#666] leading-relaxed">
              Cada peça da coleção <strong className="text-white">00</strong> carrega uma vibe
              autêntica dos anos 2000 — pixel art, acid wash, silhuetas exageradas. Edição limitada,
              porque o que é raro tem valor.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
              {[
                { num: "100%", label: "Algodão Orgânico" },
                { num: "Ed.", label: "Limitada Numerada" },
                { num: "BR", label: "Made in Brasil" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-[#FF4500] text-2xl font-black mb-1">{stat.num}</p>
                  <p className="text-[#666] text-xs uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── SHOP THE LOOK ──────────────────────────────────────────────────── */
function ShopTheLook() {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  const hotspots = [
    { id: "cap", top: "10%", left: "52%", product: products[5] },
    { id: "shirt", top: "38%", left: "55%", product: products[4] },
    { id: "shorts", top: "65%", left: "48%", product: products[3] },
  ];

  return (
    <section id="look" className="py-24 bg-[#111111]">
      <div className="max-w-screen-xl mx-auto px-6 md:px-16">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[#FF4500] text-xs tracking-[0.3em] uppercase mb-4">Styling</p>
          <h2 className="text-white text-4xl md:text-5xl font-black">O LOOK COMPLETO</h2>
          <p className="text-[#666] mt-4 text-sm">Clique nas bolinhas para ver os produtos</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr_1fr] gap-8 items-center">
          {/* Left products */}
          <div className="space-y-4 hidden lg:block">
            {hotspots.slice(0, 2).map((h) => (
              <LookProductCard key={h.id} product={h.product} active={activeHotspot === h.id} />
            ))}
          </div>

          {/* Center image */}
          <motion.div
            className="relative aspect-[3/4] max-w-sm mx-auto w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="/images/shop-the-look.jpg"
              alt="Complete Look"
              className="w-full h-full object-cover"
            />

            {hotspots.map((hotspot) => (
              <div key={hotspot.id}>
                <button
                  className="absolute w-10 h-10 rounded-full flex items-center justify-center font-black text-lg z-10"
                  style={{
                    top: hotspot.top,
                    left: hotspot.left,
                    background: "rgba(255,69,0,0.9)",
                    boxShadow:
                      activeHotspot === hotspot.id
                        ? "0 0 0 4px rgba(255,69,0,0.3)"
                        : "0 0 0 2px rgba(255,69,0,0.4)",
                    transform: activeHotspot === hotspot.id ? "scale(1.15)" : "scale(1)",
                    transition: "transform 0.2s, box-shadow 0.2s",
                  }}
                  onClick={() =>
                    setActiveHotspot(activeHotspot === hotspot.id ? null : hotspot.id)
                  }
                >
                  <span className="text-white text-sm">
                    {activeHotspot === hotspot.id ? "×" : "+"}
                  </span>
                </button>

                <AnimatePresence>
                  {activeHotspot === hotspot.id && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.85, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.85, y: 10 }}
                      transition={{ duration: 0.25 }}
                      className="absolute z-20 w-56 bg-[#1A1A1A] border border-[#FF4500]/40 overflow-hidden shadow-2xl"
                      style={{
                        top: `calc(${hotspot.top} + 3rem)`,
                        left: hotspot.left,
                      }}
                    >
                      <img
                        src={hotspot.product.images.front}
                        alt={hotspot.product.name}
                        className="w-full h-28 object-cover"
                      />
                      <div className="p-3">
                        <p className="text-[#FF4500] text-[10px] tracking-widest uppercase mb-1">
                          {hotspot.product.category}
                        </p>
                        <h3 className="text-white text-xs font-black uppercase mb-2 leading-tight">
                          {hotspot.product.name}
                        </h3>
                        <div className="flex items-center justify-between">
                          <p className="text-white font-bold text-sm">
                            R$ {hotspot.product.price.toFixed(2).replace(".", ",")}
                          </p>
                          <Link
                            to={`/product/${hotspot.product.id}`}
                            className="bg-[#FF4500] text-black px-3 py-1 text-[10px] font-black uppercase hover:bg-white transition-colors"
                          >
                            Ver →
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>

          {/* Right product */}
          <div className="hidden lg:block">
            <LookProductCard product={hotspots[2].product} active={activeHotspot === hotspots[2].id} />
          </div>

          {/* Mobile cards */}
          <div className="lg:hidden space-y-4 col-span-full">
            {hotspots.map((h) => (
              <LookProductCard key={h.id} product={h.product} active={false} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LookProductCard({ product, active }: { product: typeof products[0]; active: boolean }) {
  return (
    <div
      className={`flex gap-4 p-4 border transition-colors duration-300 ${
        active ? "border-[#FF4500] bg-[#FF4500]/5" : "border-white/10 bg-[#0D0D0D]"
      }`}
    >
      <img
        src={product.images.front}
        alt={product.name}
        className="w-20 h-24 object-cover flex-shrink-0"
      />
      <div className="flex flex-col justify-center">
        <p className="text-[#FF4500] text-[10px] tracking-widest uppercase mb-1">
          {product.category}
        </p>
        <h4 className="text-white text-xs font-black uppercase mb-2 leading-tight">
          {product.name}
        </h4>
        <p className="text-white font-bold text-sm mb-3">
          R$ {product.price.toFixed(2).replace(".", ",")}
        </p>
        <Link
          to={`/product/${product.id}`}
          className="text-[10px] font-black uppercase tracking-widest text-[#FF4500] hover:text-white transition-colors"
        >
          Ver detalhes →
        </Link>
      </div>
    </div>
  );
}

/* ─── ACCESSORIES ────────────────────────────────────────────────────── */
function AccessoriesSection() {
  return (
    <section className="py-24 px-6 md:px-16 bg-[#0D0D0D]">
      <div className="max-w-screen-xl mx-auto">
        <motion.div
          className="flex items-end justify-between mb-14 flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="text-[#FF4500] text-xs tracking-[0.3em] uppercase mb-2">Complete o look</p>
            <h2 className="text-white text-4xl md:text-5xl font-black">ACESSÓRIOS</h2>
          </div>
          <Link
            to="/"
            className="text-[#666] text-sm tracking-widest uppercase hover:text-[#FF4500] transition-colors border-b border-[#666]/30 hover:border-[#FF4500] pb-1"
          >
            Ver todos →
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1A1A1A]">
          {products.slice(5, 7).map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-[#0D0D0D] group overflow-hidden"
              whileHover="hover"
            >
              <Link to={`/product/${product.id}`}>
                <div className="aspect-video overflow-hidden">
                  <motion.img
                    src={product.images.front}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    variants={{ hover: { scale: 1.06 } }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="p-6 flex items-center justify-between">
                  <div>
                    <p className="text-[#FF4500] text-[10px] tracking-widest uppercase mb-1">
                      {product.category}
                    </p>
                    <h3 className="text-white font-black text-lg group-hover:text-[#FF4500] transition-colors">
                      {product.name}
                    </h3>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-black text-xl">
                      R$ {product.price.toFixed(2).replace(".", ",")}
                    </p>
                    <span className="text-[#FF4500] text-xs tracking-widest uppercase">
                      Ver detalhes →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-[#444] text-xs tracking-[0.4em] uppercase mb-6">
            Edição limitada · Enquanto durar o estoque
          </p>
          <Link
            to="/"
            className="inline-block bg-[#FF4500] text-black px-16 py-5 font-black uppercase tracking-widest text-sm hover:bg-white transition-colors duration-300"
          >
            Ver Coleção Completa
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
