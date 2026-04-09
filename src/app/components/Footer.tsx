export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] border-t border-[#4D4D4D] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <h4 className="text-white text-[32px] mb-4">ELEVEN</h4>
            <p className="text-[#E6E6E6] text-sm leading-relaxed">
              Streetwear com vibe Y2K. Coleção 00 - Edição Limitada.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-[#F5F5F5] mb-4">SHOP</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#E6E6E6] text-sm hover:text-[#FF4500] transition-colors">
                  Novidades
                </a>
              </li>
              <li>
                <a href="#" className="text-[#E6E6E6] text-sm hover:text-[#FF4500] transition-colors">
                  Moletom
                </a>
              </li>
              <li>
                <a href="#" className="text-[#E6E6E6] text-sm hover:text-[#FF4500] transition-colors">
                  Camisetas
                </a>
              </li>
              <li>
                <a href="#" className="text-[#E6E6E6] text-sm hover:text-[#FF4500] transition-colors">
                  Acessórios
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-[#F5F5F5] mb-4">INFO</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#E6E6E6] text-sm hover:text-[#FF4500] transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#" className="text-[#E6E6E6] text-sm hover:text-[#FF4500] transition-colors">
                  Envios e Devoluções
                </a>
              </li>
              <li>
                <a href="#" className="text-[#E6E6E6] text-sm hover:text-[#FF4500] transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="text-[#E6E6E6] text-sm hover:text-[#FF4500] transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Payment Methods */}
          <div>
            <h4 className="text-[#F5F5F5] mb-4">PAGAMENTO</h4>
            <div className="flex flex-wrap gap-2">
              <div className="w-12 h-8 bg-[#4D4D4D] flex items-center justify-center text-[#E6E6E6] text-xs font-bold">
                VISA
              </div>
              <div className="w-12 h-8 bg-[#4D4D4D] flex items-center justify-center text-[#E6E6E6] text-xs font-bold">
                MC
              </div>
              <div className="w-12 h-8 bg-[#4D4D4D] flex items-center justify-center text-[#E6E6E6] text-xs font-bold">
                PIX
              </div>
              <div className="w-12 h-8 bg-[#4D4D4D] flex items-center justify-center text-[#E6E6E6] text-xs font-bold">
                ELO
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-[#4D4D4D] text-center">
          <p className="text-[#E6E6E6] text-sm">
            © 2026 ELEVEN Streetwear. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
