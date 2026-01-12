
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
  <div className="fixed top-0 left-0 w-full z-50 px-4 py-6 pointer-events-none">
    <div className="max-w-2xl mx-auto luxury-glass rounded-full px-8 py-3 flex items-center justify-center gap-3 luxury-shadow border border-white/60 pointer-events-auto animate-fade-up">
      <CheckCircle2 size={16} className="text-luxury-gold" />
      <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] font-sans text-luxury-text font-bold text-center">
        Aplicação Recebida com Sucesso.
      </span>
    </div>
  </div>
);

const StepCard: React.FC<{ 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  delay: string;
}> = ({ icon, title, description, delay }) => (
  <div 
    className="luxury-glass relative flex flex-col items-center p-12 rounded-[3.5rem] transition-all duration-700 group hover:-translate-y-2 hover:bg-white/70 luxury-shadow animate-fade-up"
    style={{ animationDelay: delay }}
  >
    <div className="mb-8 p-6 rounded-full bg-luxury-gold/5 text-luxury-gold transition-all duration-500 group-hover:scale-110 group-hover:bg-luxury-gold/10">
      {icon}
    </div>
    <h3 className="font-serif text-2xl text-luxury-text mb-4 font-bold tracking-tight">{title}</h3>
    <p className="font-sans text-luxury-text/60 text-center text-sm leading-relaxed font-semibold max-w-[220px]">
      {description}
    </p>
  </div>
);

const App: React.FC = () => {
  const [userName, setUserName] = useState<string>('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('nome');
    if (name) setUserName(name);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-luxury-gold/20 selection:text-luxury-gold">
      <TopBar />

      {/* Subtle Background Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-luxury-bg">
        <div className="blob-light top-[-15%] right-[-10%] animate-float"></div>
        <div className="blob-light bottom-[5%] left-[-15%] animate-float" style={{ animationDelay: '-4s' }}></div>
      </div>

      <main className="container mx-auto max-w-7xl px-6">
        {/* Header Section */}
        <header className="max-w-3xl mx-auto text-center pt-40 pb-20 animate-fade-up">
          <div className="flex flex-col items-center mb-10">
            <Sparkles className="text-luxury-gold/50 animate-pulse-soft" size={24} />
          </div>
          <h1 className="font-serif text-4xl md:text-6xl mb-10 tracking-tight leading-tight text-luxury-text">
            <span className="block text-luxury-gold text-[10px] font-sans uppercase tracking-[0.6em] mb-6 font-bold">
              O início da sua transformação
            </span>
            {userName ? (
              <span className="font-light block mb-2">Seja bem-vinda, {userName}.</span>
            ) : (
              <span className="font-light block mb-2">Aplicação Recebida.</span>
            )}
            <span className="gold-gradient-text italic font-medium">Análise de Perfil Iniciada.</span>
          </h1>
          <p className="font-sans text-luxury-text/70 text-base md:text-lg max-w-xl mx-auto leading-relaxed font-semibold opacity-90">
            Recebemos seus dados. Agora, nossa banca estratégica iniciará a avaliação técnica para confirmar o potencial de escala da sua operação.
          </p>
        </header>

        {/* Steps Grid */}
        <section className="mb-32">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <StepCard 
                icon={<Search size={32} strokeWidth={1.5} />}
                title="Curadoria"
                description="Validamos seus números para assegurar que nossa mentoria é o catalisador que você precisa hoje."
                delay="0.2s"
              />
              <StepCard 
                icon={<MessageSquare size={32} strokeWidth={1.5} />}
                title="Seleção"
                description="Se houver sinergia, entraremos em contato via WhatsApp para formalizar seu convite individual."
                delay="0.4s"
              />
              <StepCard 
                icon={<Calendar size={32} strokeWidth={1.5} />}
                title="Conselho"
                description="O encontro estratégico definirá a rota precisa para consolidar seu novo teto de faturamento."
                delay="0.6s"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto text-center pb-32">
          <div className="py-24 px-8 rounded-[4.5rem] bg-white/80 luxury-shadow border border-luxury-gold/10 relative overflow-hidden group">
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-luxury-gold/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>
            
            <h2 className="font-serif text-3xl md:text-4xl text-luxury-text mb-8 font-bold tracking-tight">
              Acompanhe a <span className="italic gold-gradient-text">Evolução.</span>
            </h2>
            
            <p className="font-sans text-luxury-text/60 mb-14 text-base md:text-lg leading-relaxed font-semibold max-w-2xl mx-auto">
              Enquanto aguarda nosso retorno, conheça os bastidores reais de clínicas que já transformaram gestão em liberdade geográfica e financeira.
            </p>

            <div className="flex flex-col items-center gap-10">
              <a 
                href="https://www.instagram.com/stories/drabrunamello.bm/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-20 py-6 rounded-full bg-luxury-gold text-white font-bold tracking-[0.25em] uppercase text-[11px] transition-all duration-500 hover:scale-105 hover:bg-luxury-text shadow-2xl"
              >
                <span className="relative z-10">Ver Bastidores Atuais</span>
                <Instagram className="ml-4 relative z-10 group-hover:rotate-12 transition-transform" size={18} />
                <div className="absolute inset-0 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </a>

              <div className="flex items-center text-luxury-text/20 gap-3 border-t border-luxury-gold/5 pt-10 w-full max-w-xs justify-center">
                <ShieldCheck size={16} />
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Acesso Privado e Seguro</span>
              </div>
            </div>
          </div>
        </section>

        {/* Minimal Footer */}
        <footer className="pb-24 text-center px-6">
          <p className="text-luxury-text/30 text-[10px] uppercase tracking-[0.6em] font-bold font-sans">
            Acelera Clínicas • Gestão • Estratégia • Escala • Lucro
          </p>
        </footer>
      </main>
    </div>
  );
};

export default App;
