
import React, { useEffect, useState } from 'react';
import { 
  Search, 
  MessageSquare, 
  Calendar, 
  ShieldCheck,
  Instagram,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

const TopBar: React.FC = () => (
  <div className="fixed top-0 left-0 w-full z-50 px-4 py-3">
    <div className="max-w-4xl mx-auto glass-card rounded-full px-6 py-2 flex items-center justify-center gap-3 border border-ouro-smart/20 shadow-lg animate-fade-up">
      <CheckCircle2 size={14} className="text-ouro-smart" />
      <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-sans text-nevoa-offwhite font-light text-center">
        Parabéns por priorizar a excelência e o próximo nível da sua clínica.
      </span>
    </div>
  </div>
);

const SectionHeader: React.FC<{ 
  title: string; 
  subtitle: string; 
  userName?: string 
}> = ({ title, subtitle, userName }) => (
  <header className="max-w-3xl mx-auto text-center px-6 pt-32 pb-16 animate-fade-up">
    <div className="flex flex-col items-center mb-12">
      <div className="w-px h-16 bg-gradient-to-b from-transparent via-ouro-smart to-transparent opacity-30"></div>
      <Sparkles className="mt-6 text-ouro-smart/40 animate-pulse-soft" size={20} />
    </div>
    <h1 className="font-serif text-4xl md:text-6xl mb-10 tracking-tight leading-tight">
      <span className="block text-duna-bege text-[10px] font-sans uppercase tracking-[0.6em] mb-8 opacity-60">
        Status da Aplicação
      </span>
      <span className="font-light">
        {userName ? `Olá, ${userName}.` : 'Bem-vinda.'}
      </span>
      <br />
      <span className="gold-gradient-text italic font-normal block mt-2">Sua análise iniciou.</span>
    </h1>
    <p className="font-sans text-duna-bege text-base md:text-lg max-w-xl mx-auto leading-relaxed font-light opacity-70">
      {subtitle}
    </p>
  </header>
);

const StepCard: React.FC<{ 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  delay: string;
}> = ({ icon, title, description, delay }) => (
  <div 
    className={`glass-card relative flex flex-col items-center p-12 rounded-[3rem] transition-all duration-700 group hover:-translate-y-3 animate-fade-up`}
    style={{ animationDelay: delay }}
  >
    <div className="mb-10 p-5 rounded-full bg-ouro-smart/5 text-ouro-smart/70 group-hover:text-ouro-smart transition-all duration-500 group-hover:bg-ouro-smart/10">
      {icon}
    </div>
    <h3 className="font-serif text-2xl text-nevoa-offwhite mb-5 font-light tracking-wide">{title}</h3>
    <p className="font-sans text-duna-bege text-center text-sm leading-relaxed font-light opacity-60 max-w-[220px]">
      {description}
    </p>
  </div>
);

const App: React.FC = () => {
  const [userName, setUserName] = useState<string>('Doutora');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('nome');
    if (name) setUserName(name);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-ouro-smart/20">
      <TopBar />

      {/* Dynamic Background Effects */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="blob top-[-10%] left-[-10%] animate-float"></div>
        <div className="blob bottom-[10%] right-[-5%] animate-float" style={{ animationDelay: '-3s' }}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,_rgba(200,161,120,0.03)_0%,_transparent_60%)]"></div>
      </div>

      <main className="container mx-auto max-w-7xl px-4">
        {/* Lighter Header */}
        <SectionHeader 
          userName={userName}
          title="O Próximo Passo"
          subtitle="Recebemos suas informações com sucesso. Nossa equipe iniciou uma análise de viabilidade individualizada para mapear o potencial de escala da sua clínica."
        />

        {/* Rounded Glass Grid */}
        <section className="px-6 mb-32">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StepCard 
                icon={<Search size={28} strokeWidth={1} />}
                title="Sincronia"
                description="Revisamos seus gargalos para garantir que nossa metodologia é a peça que falta na sua gestão."
                delay="0.2s"
              />
              <StepCard 
                icon={<MessageSquare size={28} strokeWidth={1} />}
                title="Seleção"
                description="Caso sua clínica esteja no momento ideal, você receberá um contato direto da nossa assessoria técnica."
                delay="0.4s"
              />
              <StepCard 
                icon={<Calendar size={28} strokeWidth={1} />}
                title="Estratégia"
                description="O agendamento será o ponto de partida para a consolidação de um novo teto de faturamento."
                delay="0.6s"
              />
            </div>
          </div>
        </section>

        {/* Minimalist CTA Section */}
        <section className="px-6 max-w-4xl mx-auto text-center pb-24">
          <div className="py-24 rounded-[4rem] bg-gradient-to-b from-ouro-smart/[0.03] to-transparent border border-ouro-smart/10">
            <h2 className="font-serif text-3xl md:text-4xl text-nevoa-offwhite mb-8 font-light tracking-tight">
              Acompanhe a <span className="italic opacity-80">Evolução.</span>
            </h2>
            
            <p className="font-sans text-duna-bege mb-14 text-base md:text-lg leading-relaxed font-light opacity-60 max-w-2xl mx-auto px-4">
              Enquanto aguarda nossa análise, observe os bastidores de estratégias que transformam clínicas em ativos de alto valor.
            </p>

            <div className="flex flex-col items-center gap-10">
              <a 
                href="https://www.instagram.com/stories/drabrunamello.bm/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-16 py-6 rounded-full border border-ouro-smart/40 text-ouro-smart font-medium tracking-[0.25em] uppercase text-[10px] transition-all duration-700 hover:bg-ouro-smart hover:text-terra-profundo hover:px-20 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative">Acessar Ecossistema</span>
                <Instagram className="ml-4 opacity-50 group-hover:opacity-100 group-hover:rotate-12 transition-all" size={16} />
              </a>

              <div className="flex items-center text-duna-bege/20 gap-3 border-t border-ouro-smart/5 pt-10 w-full max-w-xs justify-center">
                <ShieldCheck size={14} />
                <span className="text-[9px] uppercase tracking-[0.3em]">Ambiente Individualizado</span>
              </div>
            </div>
          </div>
        </section>

        {/* Minimal Footer */}
        <footer className="pb-20 text-center px-6">
          <p className="text-duna-bege/10 text-[9px] uppercase tracking-[0.6em] font-sans">
            Mentoria Acelera Clínicas • Gestão • Estratégia • Escala
          </p>
        </footer>
      </main>
    </div>
  );
};

export default App;
