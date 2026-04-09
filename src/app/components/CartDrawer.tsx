import { motion, AnimatePresence } from "motion/react";
import { X, Minus, Plus } from "lucide-react";
import { useCart } from "../context/CartContext";

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, getTotal } = useCart();

  const freeShippingThreshold = 399;
  const total = getTotal();
  const remaining = Math.max(0, freeShippingThreshold - total);
  const progress = Math.min(100, (total / freeShippingThreshold) * 100);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full md:w-[480px] bg-[#1A1A1A] z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#4D4D4D]">
              <h2 className="text-[#F5F5F5] text-[32px]">SEU CARRINHO</h2>
              <button
                onClick={closeCart}
                className="text-[#E6E6E6] hover:text-[#FF4500] transition-colors"
              >
                <X size={28} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-[#E6E6E6] text-lg">Seu carrinho está vazio</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <div
                      key={`${item.product.id}-${item.size}`}
                      className="flex gap-4 border-b border-[#4D4D4D] pb-6"
                    >
                      <img
                        src={item.product.images.front}
                        alt={item.product.name}
                        className="w-24 h-24 object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-[#F5F5F5] font-semibold text-sm uppercase">
                          {item.product.name}
                        </h3>
                        <p className="text-[#E6E6E6] text-sm mt-1">Tamanho: {item.size}</p>
                        <p className="text-[#F5F5F5] font-semibold mt-2">
                          R$ {item.product.price.toFixed(2).replace('.', ',')}
                        </p>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3 mt-3">
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.size, item.quantity - 1)
                            }
                            className="w-8 h-8 bg-[#4D4D4D] text-[#E6E6E6] flex items-center justify-center hover:bg-[#FF4500] hover:text-[#111111] transition-colors"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="text-[#E6E6E6] font-semibold w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.size, item.quantity + 1)
                            }
                            className="w-8 h-8 bg-[#4D4D4D] text-[#E6E6E6] flex items-center justify-center hover:bg-[#FF4500] hover:text-[#111111] transition-colors"
                          >
                            <Plus size={16} />
                          </button>
                          <button
                            onClick={() => removeItem(item.product.id, item.size)}
                            className="ml-auto text-[#E6E6E6] text-sm uppercase font-semibold hover:text-[#FF4500] transition-colors"
                          >
                            Remover
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-[#4D4D4D] p-6 space-y-4">
                {/* Free Shipping Progress */}
                {remaining > 0 && (
                  <div>
                    <p className="text-[#FF4500] text-sm font-semibold mb-2">
                      Adicione mais R$ {remaining.toFixed(2).replace('.', ',')} para ganhar FRETE
                      GRÁTIS!
                    </p>
                    <div className="w-full h-2 bg-[#4D4D4D]">
                      <div
                        className="h-full bg-[#FF4500] transition-all duration-300"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                )}

                {remaining <= 0 && (
                  <p className="text-[#28A745] text-sm font-semibold">
                    🎉 Você ganhou FRETE GRÁTIS!
                  </p>
                )}

                {/* Total */}
                <div className="flex justify-between items-center pt-4 border-t border-[#4D4D4D]">
                  <span className="text-[#E6E6E6] font-semibold uppercase">Subtotal:</span>
                  <span className="text-[#F5F5F5] text-2xl font-bold">
                    R$ {total.toFixed(2).replace('.', ',')}
                  </span>
                </div>

                {/* Checkout Button */}
                <button className="w-full bg-[#FF4500] text-[#111111] py-4 font-bold uppercase tracking-wide hover:bg-[#E63E00] transition-colors">
                  FINALIZAR COMPRA
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
