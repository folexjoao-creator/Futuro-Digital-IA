
import React, { useState } from 'react';
import { MOZ_COLORS } from '../constants';

interface LoginProps {
  onLogin: (user: any) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin({ 
      name: 'ALFREDO GABRIEL MUCHANGA', 
      role: 'STUDENT', 
      studentId: '2024202856', 
      course: 'ENGENHARIA DE INFORMÁTICA' 
    });
  };

  // We use a high-quality plexus/network background that matches the user's uploaded image theme
  const backgroundStyle: React.CSSProperties = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center font-sans relative" style={backgroundStyle}>
      
      {/* Overlay for branding and extra depth */}
      <div className="absolute inset-0 bg-blue-900/20 backdrop-blur-[2px]"></div>

      {/* Main Login Box */}
      <div className="relative z-10 w-full max-w-sm bg-white border border-gray-300 shadow-2xl rounded-md overflow-hidden transform transition-all hover:scale-[1.01]">
        <div className="bg-[#f8f9fa] px-6 py-4 border-b border-gray-300 flex items-center justify-between">
           <span className="font-bold text-[#005596] text-sm uppercase tracking-tight">Acesso ao Sistema</span>
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Flag_of_Mozambique.svg/255px-Flag_of_Mozambique.svg.png" className="h-4 shadow-sm" alt="MZ" />
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-5">
          <div className="flex flex-col items-center mb-6">
             <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center border-2 border-blue-100 mb-4 shadow-inner">
                <i className="fas fa-university text-3xl text-[#005596]"></i>
             </div>
             <h2 className="text-2xl font-black text-gray-800">SIGAA <span className="text-[#005596]">MZ</span></h2>
             <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] mt-1 text-center">Instituto Superior de Tecnologias de Maputo</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wide mb-1.5">Utilizador / NUIT</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <i className="fas fa-user text-xs"></i>
                </span>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-white border border-gray-300 pl-9 pr-3 py-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none rounded transition-all"
                  placeholder="Seu usuário ou NUIT"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wide mb-1.5">Senha</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <i className="fas fa-lock text-xs"></i>
                </span>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white border border-gray-300 pl-9 pr-3 py-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none rounded transition-all"
                  placeholder="Digite sua senha"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#005596] hover:bg-[#00447a] text-white font-bold py-3 rounded shadow-lg transition-all text-sm uppercase tracking-widest active:scale-95"
          >
            Entrar no Portal
          </button>

          <div className="pt-4 border-t border-gray-100 text-center space-y-3">
             <a href="#" className="block text-[11px] font-bold text-blue-800 hover:text-blue-600 transition-colors uppercase">Esqueceu sua senha?</a>
             <a href="#" className="block text-[11px] font-bold text-blue-800 hover:text-blue-600 transition-colors uppercase">Solicitar Acesso (Graduação)</a>
          </div>
        </form>
      </div>

      {/* Footer Links on Overlay */}
      <div className="relative z-10 mt-8 flex gap-8 text-[11px] font-bold text-white/80 uppercase tracking-widest drop-shadow-md">
        <a href="#" className="hover:text-white transition-colors">Graduação</a>
        <a href="#" className="hover:text-white transition-colors">Pós-Graduação</a>
        <a href="#" className="hover:text-white transition-colors">Extensão</a>
        <a href="#" className="hover:text-white transition-colors">Bibliotecas</a>
      </div>

      <div className="relative z-10 mt-auto py-8 text-[10px] text-white/60 text-center drop-shadow-md">
        © 2025 - ISTM - SIGAA Moçambique<br/>
        Direção de Tecnologias de Informação - Maputo
      </div>
    </div>
  );
};

export default Login;
