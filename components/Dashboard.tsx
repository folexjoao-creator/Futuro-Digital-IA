
import React from 'react';
import { User } from '../types';
import { NAV_LINKS, MOCK_FORUM, MOCK_USER_DATA, MOZ_COLORS } from '../constants';

interface DashboardProps {
  user: User;
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, onLogout }) => {
  return (
    <div className="min-h-screen bg-[#e8eef7] font-sans text-gray-800 flex flex-col">
      {/* Top Header */}
      <header className="bg-gradient-to-b from-[#005596] to-[#00447a] text-white">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center border-b border-blue-400/30">
          <div className="flex flex-col">
            <h1 className="text-lg font-bold tracking-tight">ISTM - SIGAA - Sistema Integrado de Gestão de Atividades Académicas</h1>
            <div className="flex gap-4 text-xs mt-1">
               <span className="font-bold">{MOCK_USER_DATA.name} <span className="font-normal italic text-blue-200">Alterar vínculo</span></span>
               <span>Semestre atual: <span className="font-bold">2025.2</span></span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex gap-2 items-center bg-white/10 px-3 py-1 rounded text-xs">
              <button className="hover:underline">A+</button>
              <button className="hover:underline">A-</button>
              <span className="ml-4 border-l border-white/20 pl-4">Tempo de Sessão: 00:42</span>
              <button onClick={onLogout} className="ml-4 font-bold text-yellow-300 hover:text-white uppercase">Sair</button>
            </div>
          </div>
        </div>

        {/* Action Icons Row */}
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-end gap-6 text-[11px]">
          <HeaderAction icon="cubes" label="Módulos" />
          <HeaderAction icon="envelope" label="Cx. Postal (3)" color="text-red-300" />
          <HeaderAction icon="ticket-alt" label="Abrir Chamado" />
          <HeaderAction icon="bars" label="Menu Discente" />
          <HeaderAction icon="key" label="Alterar senha" />
          <HeaderAction icon="question-circle" label="Ajuda" />
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-[#f0f0f0] border-b border-gray-300 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex flex-wrap">
          {NAV_LINKS.map((link) => (
            <button key={link.id} className="px-4 py-2 border-r border-gray-300 flex items-center gap-2 text-[11px] font-semibold text-gray-700 hover:bg-gray-200 transition-colors">
              <span className="text-blue-700">{link.icon}</span>
              {link.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto mt-4 px-4 grid grid-cols-12 gap-6 flex-grow mb-10">
        
        {/* Left Column (Main Content) */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          
          {/* Announcement Box */}
          <div className="bg-white border border-gray-300 shadow-sm rounded">
            <div className="bg-[#f9f9f9] border-b border-gray-300 px-4 py-2 font-bold text-blue-800 text-sm">
              Notificações e Avisos
            </div>
            <div className="p-4 text-xs text-gray-700 leading-relaxed">
              Prezados(as) alunos(as), as inscrições para os Exames de 2ª Época estarão abertas de 01/12 a 05/12. Certifiquem-se de regularizar sua situação financeira na tesouraria antes do prazo.
              <div className="mt-4 flex justify-end gap-1">
                <button className="bg-gray-200 px-2 py-0.5 border border-gray-400 text-[10px]">«</button>
                <button className="bg-gray-200 px-2 py-0.5 border border-gray-400 text-[10px]">II</button>
                <button className="bg-gray-200 px-2 py-0.5 border border-gray-400 text-[10px]">»</button>
                <button className="bg-gray-200 px-2 py-0.5 border border-gray-400 text-[10px]">Todas</button>
              </div>
            </div>
          </div>

          {/* Turmas Section */}
          <SectionContainer title="TURMAS DO SEMESTRE">
            <table className="w-full text-[11px] border-collapse">
               <thead className="bg-[#f2f2f2] border-b border-gray-300">
                  <tr>
                    <th className="px-3 py-2 text-left border-r border-gray-300">Componente Curricular</th>
                    <th className="px-3 py-2 text-center border-r border-gray-300">Local</th>
                    <th className="px-3 py-2 text-center">Horário</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-gray-200 italic text-gray-400 text-center">
                  <tr>
                    <td colSpan={3} className="py-8">Nenhuma turma neste semestre acadêmico</td>
                  </tr>
               </tbody>
            </table>
            <div className="text-right p-2 bg-gray-50 border-t border-gray-200">
              <a href="#" className="text-[10px] text-blue-700 font-bold hover:underline">Ver turmas anteriores</a>
            </div>
          </SectionContainer>

          {/* Forum Section */}
          <SectionContainer title="FÓRUM DO CURSO - ENGENHARIA DE INFORMÁTICA">
             <div className="bg-[#fff9c4] m-4 p-3 border border-[#fbc02d] rounded text-[11px] text-gray-800 leading-snug">
               Este fórum é destinado para discussões acadêmicas. O uso indevido está sujeito a sanções disciplinares conforme regulamento do ISTM.
             </div>

             <table className="w-full text-[11px] text-left">
               <thead className="bg-[#f2f2f2] border-y border-gray-300 text-gray-700">
                 <tr>
                   <th className="px-4 py-2 border-r border-gray-300">Tópico</th>
                   <th className="px-4 py-2 border-r border-gray-300">Autor</th>
                   <th className="px-4 py-2 border-r border-gray-300 text-center">Resp.</th>
                   <th className="px-4 py-2">Data/Hora</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-gray-200">
                 {MOCK_FORUM.map((post, i) => (
                   <tr key={i} className="hover:bg-blue-50">
                     <td className="px-4 py-1.5 text-blue-800 font-bold underline cursor-pointer">{post.title}</td>
                     <td className="px-4 py-1.5 text-gray-600 underline cursor-pointer">{post.author}</td>
                     <td className="px-4 py-1.5 text-center">{post.replies}</td>
                     <td className="px-4 py-1.5 text-gray-500 text-[10px]">{post.date}</td>
                   </tr>
                 ))}
               </tbody>
             </table>
          </SectionContainer>
        </div>

        {/* Right Column (Sidebar) - THE IMAGE PART REPLICATED HERE */}
        <div className="col-span-12 lg:col-span-4 space-y-4">
          
          {/* Main Sidebar Box (Profile & Data) */}
          <div className="bg-white border border-gray-300 shadow-sm rounded overflow-hidden">
             {/* Profile Area */}
             <div className="p-4 bg-gray-50 flex flex-col items-center">
                <div className="w-28 h-36 bg-gray-200 border border-gray-400 overflow-hidden relative group shadow-inner">
                  <img 
                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=005596&color=fff&size=128&bold=true`} 
                    alt="Foto do Aluno" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="mt-3 text-[11px] space-y-1 w-full">
                   <SidebarDataRow label="Nível" value={MOCK_USER_DATA.level} />
                   <SidebarDataRow label="Status" value={MOCK_USER_DATA.status} color="text-red-600 font-bold" />
                   <SidebarDataRow label="E-Mail" value={MOCK_USER_DATA.email} />
                   <SidebarDataRow label="Entrada" value="2024.2" />
                </div>
             </div>

             {/* Índices Académicos - EXACT REPLICATION FROM IMAGE */}
             <div className="px-4 py-3 border-t border-gray-200 bg-[#f9f9f9]">
                <h3 className="text-[10px] font-bold text-center italic text-gray-600 mb-2 uppercase tracking-tighter">Índices Académicos</h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[10px]">
                   <div className="flex justify-between border-b border-gray-100 pb-0.5">
                      <span className="font-bold text-gray-500">MC:</span>
                      <span className="text-gray-800">{MOCK_USER_DATA.indices.mc}</span>
                   </div>
                   <div className="flex justify-between border-b border-gray-100 pb-0.5">
                      <span className="font-bold text-gray-500">IDE:</span>
                      <span className="text-gray-800">{MOCK_USER_DATA.indices.ide}</span>
                   </div>
                   <div className="flex justify-between border-b border-gray-100 pb-0.5">
                      <span className="font-bold text-gray-500">IRA:</span>
                      <span className="text-gray-800">{MOCK_USER_DATA.indices.ira}</span>
                   </div>
                   <div className="flex justify-between border-b border-gray-100 pb-0.5">
                      <span className="font-bold text-gray-500">MCN:</span>
                      <span className="text-gray-800">{MOCK_USER_DATA.indices.mcn}</span>
                   </div>
                   <div className="flex justify-between border-b border-gray-100 pb-0.5">
                      <span className="font-bold text-gray-500">IECH:</span>
                      <span className="text-gray-800">{MOCK_USER_DATA.indices.iech}</span>
                   </div>
                   <div className="flex justify-between border-b border-gray-100 pb-0.5">
                      <span className="font-bold text-gray-500">IEPL:</span>
                      <span className="text-gray-800">{MOCK_USER_DATA.indices.iepl}</span>
                   </div>
                   <div className="flex justify-between border-b border-gray-100 pb-0.5">
                      <span className="font-bold text-gray-500">IEA:</span>
                      <span className="text-gray-800">{MOCK_USER_DATA.indices.iea}</span>
                   </div>
                   <div className="flex justify-between border-b border-gray-100 pb-0.5">
                      <span className="font-bold text-gray-500">IEAN:</span>
                      <span className="text-gray-800">{MOCK_USER_DATA.indices.iean}</span>
                   </div>
                </div>
                <div className="text-center mt-1">
                   <a href="#" className="text-[9px] font-bold text-blue-700 underline">Detalhar</a>
                </div>
             </div>

             {/* Integralizações - EXACT REPLICATION FROM IMAGE */}
             <div className="px-4 py-3 border-t border-gray-200">
                <h3 className="text-[10px] font-bold text-center italic text-gray-600 mb-2 uppercase tracking-tighter">Integralizações:</h3>
                <div className="space-y-1 text-[10px]">
                   <div className="flex justify-between">
                      <span className="text-gray-600">CH. Obrigatória Pendente</span>
                      <span className="font-mono">{MOCK_USER_DATA.integralizacao.obrigatoria}</span>
                   </div>
                   <div className="flex justify-between">
                      <span className="text-gray-600">CH. Optativa Pendente</span>
                      <span className="font-mono">{MOCK_USER_DATA.integralizacao.optativa}</span>
                   </div>
                   <div className="flex justify-between">
                      <span className="text-gray-600">CH. Complementar Pendente</span>
                      <span className="font-mono">{MOCK_USER_DATA.integralizacao.complementar}</span>
                   </div>
                   <div className="flex justify-between">
                      <span className="text-gray-600">CH. Eletiva Pendente</span>
                      <span className="font-mono">{MOCK_USER_DATA.integralizacao.eletiva}</span>
                   </div>
                   <div className="flex justify-between border-t border-gray-200 pt-1 font-bold">
                      <span className="text-gray-800">CH. Total Currículo</span>
                      <span className="font-mono">{MOCK_USER_DATA.integralizacao.total}</span>
                   </div>
                </div>
                
                {/* Progress Bar Area */}
                <div className="mt-4">
                   <div className="w-full h-3 bg-gray-200 border border-gray-300 relative">
                      <div 
                         className="h-full bg-gray-400" 
                         style={{ width: `${MOCK_USER_DATA.integralizacao.percentual}%` }}
                      ></div>
                   </div>
                   <div className="text-center mt-1 text-[9px] font-bold text-gray-500 uppercase">
                      {MOCK_USER_DATA.integralizacao.percentual.toString().padStart(2, '0')}% Integralizado
                   </div>
                </div>
             </div>
          </div>

          {/* Quick Buttons Icons */}
          <div className="grid grid-cols-2 gap-2">
            <PortalButton icon="file-alt" label="Emitir Histórico" color="bg-blue-600" />
            <PortalButton icon="graduation-cap" label="Matriz Curricular" color="bg-blue-800" />
            <PortalButton icon="id-card" label="Crt. Estudantil" color="bg-gray-700" />
            <PortalButton icon="print" label="Comprovativo" color="bg-cyan-600" />
          </div>

          {/* Mozambique Flag Footer Tag */}
          <div className="flex flex-col items-center gap-1 pt-4 opacity-60">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Flag_of_Mozambique.svg/255px-Flag_of_Mozambique.svg.png" className="h-4 shadow-sm" alt="MZ" />
            <span className="text-[9px] font-black uppercase tracking-widest text-gray-500">República de Moçambique</span>
          </div>
        </div>
      </main>

      {/* FOOTER REPLICATED FROM IMAGE */}
      <footer className="w-full">
         <div className="text-center py-1 text-[11px] font-bold text-blue-900 border-t border-gray-300 bg-white">
            Portal do Discente
         </div>
         <div className="bg-[#005596] text-white py-1 px-4 text-[10px] text-center font-medium">
            SIGAA | Direção de Tecnologias de Informação - ISTM | Copyright © 2006-2026 - sigaa-mz-v3.22.20
         </div>
      </footer>
    </div>
  );
};

// Helper Components
const HeaderAction = ({ icon, label, color = "text-white" }: { icon: string, label: string, color?: string }) => (
  <button className={`flex items-center gap-1.5 hover:underline transition-opacity ${color}`}>
    <i className={`fas fa-${icon} text-sm opacity-80`}></i>
    <span>{label}</span>
  </button>
);

const SectionContainer = ({ title, children }: { title: string, children?: React.ReactNode }) => (
  <div className="bg-white border border-gray-300 shadow-sm rounded overflow-hidden">
    <div className="bg-[#f9f9f9] border-b border-gray-300 px-4 py-1.5 font-bold text-blue-900 text-[11px] uppercase tracking-wide">
      {title}
    </div>
    {children}
  </div>
);

const PortalButton = ({ icon, label, color }: { icon: string, label: string, color: string }) => (
  <button className={`${color} text-white p-2 rounded flex flex-col items-center justify-center gap-1 hover:brightness-110 transition-all border border-black/10 shadow-sm`}>
    <i className={`fas fa-${icon} text-lg`}></i>
    <span className="text-[9px] font-bold text-center leading-tight uppercase tracking-tighter">{label}</span>
  </button>
);

const SidebarDataRow = ({ label, value, color = "text-gray-700" }: { label: string, value: string, color?: string }) => (
  <div className="flex gap-2">
    <span className="font-bold text-gray-500 w-16 text-right shrink-0">{label}:</span>
    <span className={`text-wrap break-all uppercase ${color}`}>{value}</span>
  </div>
);

export default Dashboard;
