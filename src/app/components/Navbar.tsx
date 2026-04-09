import { Link } from "react-router";
import { Search, User, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

export function Navbar() {
  const { openCart, getItemCount } = useCart();

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Announcement Bar */}
      <div className="bg-[#111111] border-b border-[#4D4D4D]">
        <div className="container mx-auto px-4">
          <p className="text-[#FF4500] text-[12px] font-bold uppercase tracking-wide text-center py-2">
            FRETE GRÁTIS EM COMPRAS ACIMA DE R$399 | COLEÇÃO 00 EDIÇÃO LIMITADA
          </p>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-[#111111] border-b border-[#4D4D4D]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="text-white text-3xl tracking-wider hover:text-[#FF4500] transition-colors">
              <h1 className="text-[40px]">ELEVEN</h1>
            </Link>

            {/* Navigation Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-white text-[16px] font-semibold uppercase tracking-wide hover:text-[#FF4500] transition-colors">
                NOVOS
              </Link>
              <Link to="/" className="text-white text-[16px] font-semibold uppercase tracking-wide hover:text-[#FF4500] transition-colors">
                MOLETOM
              </Link>
              <Link to="/" className="text-white text-[16px] font-semibold uppercase tracking-wide hover:text-[#FF4500] transition-colors">
                CAMISETAS
              </Link>
              <Link to="/" className="text-white text-[16px] font-semibold uppercase tracking-wide hover:text-[#FF4500] transition-colors">
                BERMUDAS
              </Link>
              <Link to="/" className="text-white text-[16px] font-semibold uppercase tracking-wide hover:text-[#FF4500] transition-colors">
                ACESSÓRIOS
              </Link>
              <Link to="/" className="text-white text-[16px] font-semibold uppercase tracking-wide hover:text-[#FF4500] transition-colors">
                SOBRE
              </Link>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-6">
              <button className="text-[#E6E6E6] hover:text-[#FF4500] transition-colors">
                <Search size={22} />
              </button>
              <button className="text-[#E6E6E6] hover:text-[#FF4500] transition-colors">
                <User size={22} />
              </button>
              <button
                onClick={openCart}
                className="text-[#E6E6E6] hover:text-[#FF4500] transition-colors relative"
              >
                <ShoppingCart size={22} />
                {getItemCount() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#FF4500] text-[#111111] text-xs font-bold w-5 h-5 flex items-center justify-center">
                    {getItemCount()}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
