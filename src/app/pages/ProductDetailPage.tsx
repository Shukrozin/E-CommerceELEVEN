import { useState } from "react";
import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

export function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();

  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || "");
  const [selectedImage, setSelectedImage] = useState(0);
  const [expandedSection, setExpandedSection] = useState<string | null>("about");

  if (!product) {
    return (
      <div className="min-h-screen bg-[#111111] flex items-center justify-center pt-[104px]">
        <div className="text-center">
          <h2 className="text-[#F5F5F5] text-[48px] mb-4">PRODUTO NÃO ENCONTRADO</h2>
          <Link
            to="/"
            className="inline-block bg-[#FF4500] text-[#111111] px-8 py-4 font-bold uppercase hover:bg-[#E63E00] transition-colors"
          >
            VOLTAR PARA LOJA
          </Link>
        </div>
      </div>
    );
  }

  const images = [product.images.front, product.images.back];
  const recommendations = products.filter((p) => p.id !== product.id).slice(0, 4);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="bg-[#111111] pt-[104px]">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <Link to="/" className="text-[#E6E6E6] hover:text-[#FF4500] uppercase text-sm font-semibold">
            Home
          </Link>
          <span className="text-[#E6E6E6] mx-2">/</span>
          <span className="text-[#F5F5F5] uppercase text-sm font-semibold">{product.category}</span>
        </div>

        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Image Gallery */}
          <div>
            {/* Main Image */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="aspect-[3/4] mb-4 overflow-hidden"
            >
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Thumbnails */}
            <div className="grid grid-cols-2 gap-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-[3/4] overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-[#FF4500]' : 'border-[#4D4D4D] hover:border-[#E6E6E6]'
                  }`}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            {/* Collection Tag */}
            <div className="inline-block bg-[#FF4500] text-[#111111] px-4 py-1 text-xs font-bold uppercase mb-4">
              ELEVEN - 00 COLLECTION
            </div>

            {product.isNew && (
              <div className="inline-block bg-[#4D4D4D] text-[#E6E6E6] px-4 py-1 text-xs font-bold uppercase ml-2 mb-4">
                NOVO
              </div>
            )}

            {/* Product Name */}
            <h1 className="text-[#F5F5F5] text-[48px] mb-6">{product.name}</h1>

            {/* Price */}
            <p className="text-[#F5F5F5] text-3xl font-bold mb-8">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </p>

            {/* Size Selector */}
            <div className="mb-8">
              <label className="block text-[#E6E6E6] font-semibold mb-3 uppercase text-sm">
                Tamanho
              </label>
              <div className="flex gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 font-bold uppercase transition-colors ${
                      selectedSize === size
                        ? 'bg-[#FF4500] text-[#111111]'
                        : 'bg-[#4D4D4D] text-[#E6E6E6] hover:bg-[#FF4500] hover:text-[#111111]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={() => addItem(product, selectedSize)}
              className="w-full bg-[#FF4500] text-[#111111] py-5 font-bold uppercase tracking-wider text-lg hover:bg-[#E63E00] transition-all hover:scale-[1.02] mb-8"
            >
              ADICIONAR AO CARRINHO
            </button>

            {/* Accordion Sections */}
            <div className="border-t border-[#4D4D4D]">
              {/* About Product */}
              <AccordionItem
                title="SOBRE O PRODUTO"
                isExpanded={expandedSection === "about"}
                onToggle={() => toggleSection("about")}
              >
                <p className="text-[#E6E6E6] leading-relaxed">{product.description}</p>
              </AccordionItem>

              {/* Technical Details */}
              <AccordionItem
                title="DETALHES TÉCNICOS"
                isExpanded={expandedSection === "details"}
                onToggle={() => toggleSection("details")}
              >
                <div className="text-[#E6E6E6] whitespace-pre-line leading-relaxed">
                  {product.details}
                </div>
              </AccordionItem>

              {/* Shipping */}
              <AccordionItem
                title="ENVIO E DEVOLUÇÕES"
                isExpanded={expandedSection === "shipping"}
                onToggle={() => toggleSection("shipping")}
              >
                <div className="text-[#E6E6E6] space-y-2">
                  <p>• Frete grátis em compras acima de R$ 399</p>
                  <p>• Prazo de entrega: 5 a 10 dias úteis</p>
                  <p>• Devolução gratuita em até 30 dias</p>
                  <p>• Troca garantida por defeito de fabricação</p>
                </div>
              </AccordionItem>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <section className="py-12 border-t border-[#4D4D4D]">
          <h2 className="text-[#F5F5F5] text-center mb-12">VOCÊ TAMBÉM PODE GOSTAR</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendations.map((rec) => (
              <Link key={rec.id} to={`/product/${rec.id}`} className="group">
                <div className="bg-[#1A1A1A] overflow-hidden">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={rec.images.front}
                      alt={rec.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-[#F5F5F5] text-sm font-bold uppercase mb-2 group-hover:text-[#FF4500] transition-colors">
                      {rec.name}
                    </h3>
                    <p className="text-[#E6E6E6] font-semibold">
                      R$ {rec.price.toFixed(2).replace('.', ',')}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

interface AccordionItemProps {
  title: string;
  isExpanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

function AccordionItem({ title, isExpanded, onToggle, children }: AccordionItemProps) {
  return (
    <div className="border-b border-[#4D4D4D]">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left"
      >
        <span className="text-[#F5F5F5] font-bold uppercase tracking-wide">{title}</span>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="text-[#E6E6E6]" size={24} />
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isExpanded ? "auto" : 0,
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="pb-6">{children}</div>
      </motion.div>
    </div>
  );
}
