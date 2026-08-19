"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const PHONE = "5511975669706";
const MESSAGE = "Olá, Rafael! Vi seu site e gostaria de conversar sobre um projeto.";
const WHATSAPP = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

const services = [
  { icon: "▱", title: "Sites institucionais", headline: "Apresente sua empresa de forma profissional." },
  { icon: "↗", title: "Landing Pages", headline: "Transforme visitantes em oportunidades." },
  { icon: "⌘", title: "Sistemas personalizados", headline: "Quando uma ferramenta pronta não resolve." },
  { icon: "↻", title: "Automações", headline: "Menos tarefas repetitivas. Mais tempo para o que importa." },
];

const projects = [
  { index: "01", client: "ONE ODONTOLOGIA MOEMA", title: "Presença digital para uma clínica odontológica", text: "A clínica precisava de uma página própria para apresentar seus serviços e fortalecer sua presença no ambiente digital. Foi desenvolvida uma solução personalizada, clara e preparada para facilitar o contato de potenciais pacientes.", stat: "+500", statLabel: "visitas desde a publicação", url: "https://invisalignemmoema.com.br/", tone: "blue", screenshot: "/project-one-odontologia.png" },
  { index: "02", client: "SNEETS AUDIOVISUAL", title: "Uma vitrine digital para uma produtora audiovisual", text: "A Sneets precisava apresentar seu trabalho de forma tão marcante quanto suas produções. O site organiza serviços, projetos e identidade em uma experiência visual direta, ajudando novos clientes a conhecerem a produtora e iniciarem uma conversa.", stat: "Direção visual", statLabel: "presença digital personalizada", url: "https://rafaelpequino.github.io/sneets-audiovisual/", tone: "graphite", screenshot: "/project-sneets.png" },
  { index: "03", client: "SAMUEL ALVES", title: "Uma presença profissional para apresentar seus serviços", text: "O objetivo era criar uma página onde o personal trainer pudesse centralizar a apresentação do seu trabalho. O resultado evoluiu para uma parceria profissional que já dura mais de 3 anos.", stat: "+3 anos", statLabel: "de parceria", url: "https://personalsamuelalves.com.br/", tone: "sand", screenshot: "/project-samuel-alves.png" },
];

const testimonials = [
  { text: "Além de desenvolver o site, o Rafael ajudou a organizar a ideia e sugeriu caminhos que fizeram sentido para o negócio. Foi um trabalho muito tranquilo do início ao fim.", name: "Henriques", role: "Auto Confiança", photo: "/testimonial-henriques.png", url: "https://autoconfianca.com.br/" },
  { text: "O Rafael entendeu rapidamente o que precisávamos e conduziu todo o projeto com muita clareza. O resultado ficou profissional, organizado e fácil para nossos clientes utilizarem.", name: "Larissa", role: "One Odontologia Moema", photo: "/testimonial-larissa.png", url: "https://invisalignemmoema.com.br/" },
  { text: "Durante todo o processo, a comunicação foi simples e objetiva. Eu sempre soube em qual etapa o projeto estava e o que seria entregue em seguida.", name: "Samuel", role: "Personal Trainer", photo: "/testimonial-samuel.png", url: "https://personalsamuelalves.com.br/" },
];

const steps = ["Contato", "Briefing", "Orçamento", "Contratação", "Desenvolvimento", "Aprovação", "Publicação", "Suporte"];

const assurances = [
  ["✓", "Contrato", "Todo projeto é formalizado através de um contrato de prestação de serviços."], ["▤", "Nota fiscal", "Você recebe nota fiscal pelo serviço contratado."], ["◇", "Pagamento facilitado", "PIX ou cartão de crédito, com possibilidade de parcelamento."], ["3", "meses de garantia", "Bugs relacionados ao desenvolvimento são corrigidos sem custo no período."],
];

const faqs = [
  ["Quanto custa desenvolver um projeto?", "Cada projeto possui necessidades diferentes. Após entender o que você precisa, preparo um orçamento personalizado com escopo, investimento e prazo."],
  ["Preciso entender de tecnologia?", "Não. Você me explica o que precisa e eu cuido da parte técnica, mantendo uma comunicação simples durante todo o projeto."],
  ["Como funciona o pagamento?", "O projeto é iniciado com 50% do investimento. Os outros 50% são pagos na conclusão. O pagamento pode ser realizado via PIX ou cartão de crédito."],
  ["O projeto possui garantia?", "Sim. Todos os projetos contam com 3 meses de garantia para correção de eventuais bugs relacionados ao desenvolvimento."],
  ["Você atende somente São Paulo?", "Não. Todo o processo pode ser realizado remotamente, permitindo atender clientes de qualquer lugar."],
];

function WhatsAppLink({ children, className = "button" }: { children: React.ReactNode; className?: string }) {
  return <a className={className} href={WHATSAPP} target="_blank" rel="noreferrer">{children}</a>;
}

function SectionTitle({ eyebrow, title, intro }: { eyebrow?: string; title: string; intro?: string }) {
  return <div className="section-heading reveal">{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h2>{title}</h2>{intro && <p>{intro}</p>}</div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")), { threshold: .12 });
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  const closeMenu = () => setMenuOpen(false);

  return <>
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#inicio" onClick={closeMenu}>Rafael Pequino</a>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Navegação principal">
          {[['Início','inicio'],['Serviços','servicos'],['Portfólio','projetos'],['Como Funciona','processo'],['Depoimentos','depoimentos'],['Contato','contato']].map(([label,id]) => <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>)}
          <WhatsAppLink className="button mobile-cta">Falar comigo</WhatsAppLink>
        </nav>
        <WhatsAppLink className="button header-cta">Falar comigo <span>↗</span></WhatsAppLink>
        <button className={menuOpen ? "menu-button active" : "menu-button"} onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Abrir menu"><span></span><span></span></button>
      </div>
    </header>

    <main>
      <section className="hero" id="inicio">
        <div className="hero-copy reveal visible">
          <p className="eyebrow">DESENVOLVIMENTO SOB MEDIDA</p>
          <h1>Sua ideia. <span>Uma solução feita para ela.</span></h1>
          <p className="lead">Transformo necessidades em sites, sistemas e automações desenvolvidos de forma personalizada para cada projeto.</p>
          <div className="hero-actions"><WhatsAppLink>Quero falar sobre meu projeto <span>↗</span></WhatsAppLink><a className="text-link" href="#projetos">Ver projetos <span>↓</span></a></div>
          <div className="trust-row"><span>✓ Atendimento 100% remoto</span><span>✓ Orçamento personalizado</span><span>✓ Contrato e nota fiscal</span></div>
        </div>
        <div className="portrait-wrap reveal visible"><div className="portrait-accent" aria-hidden="true"></div><Image className="portrait" src="/rafael.png" alt="Rafael Pequino, desenvolvedor de soluções digitais" width={720} height={720} priority sizes="(max-width: 820px) 90vw, 42vw" /><div className="experience-card"><strong>+4 anos</strong><span>transformando ideias<br/>em soluções digitais</span></div></div>
      </section>

      <section className="numbers" aria-label="Credibilidade"><div><strong>+4 anos</strong><span>de experiência</span></div><div><strong>100% remoto</strong><span>atendimento onde você estiver</span></div><div><strong>Acompanhamento</strong><span>do início ao fim</span></div><div><strong>3 meses</strong><span>de garantia</span></div></section>

      <section className="section services" id="servicos"><div className="container"><SectionTitle eyebrow="O QUE POSSO DESENVOLVER" title="Soluções para o que seu negócio precisa." intro="Cada projeto começa por uma necessidade diferente. Meu trabalho é entender o que você precisa e transformar isso em uma solução funcional, profissional e preparada para o seu negócio."/><div className="card-grid">{services.map((service) => <article className="service-card reveal" key={service.title}><span className="service-icon">{service.icon}</span><p className="card-label">{service.title}</p><h3>{service.headline}</h3><WhatsAppLink className="card-link">Conversar sobre esta solução <span>↗</span></WhatsAppLink></article>)}</div></div></section>

      <section className="section difference"><div className="container split"><div className="difference-copy reveal"><p className="eyebrow light">MEU JEITO DE TRABALHAR</p><h2>Mais do que desenvolver um produto, eu desenvolvo uma solução.</h2><p className="big-copy">Um bom projeto não começa escolhendo uma tecnologia. Começa entendendo um problema.</p></div><div className="benefit-list reveal">{[["01","Atendimento direto"],["02","Desenvolvimento personalizado"],["03","Acompanhamento completo"]].map(x=><div className="benefit" key={x[0]}><span>{x[0]}</span><div><h3>{x[1]}</h3></div></div>)}</div></div></section>

      <section className="section projects" id="projetos"><div className="container"><SectionTitle eyebrow="TRABALHOS SELECIONADOS" title="Projetos que saíram do papel." intro="Conheça algumas soluções que já desenvolvi para profissionais e empresas."/><div className="project-list">{projects.map((project, i) => <article className={`project-card reveal ${i % 2 ? 'reverse' : ''}`} key={project.client}><div className={`project-visual ${project.tone}`}><div className="browser-bar"><span></span><span></span><span></span></div><img className="project-screenshot" src={project.screenshot} alt={`Tela principal do projeto ${project.client}`} loading="lazy"/><span className="project-number">{project.index}</span></div><div className="project-copy"><p className="eyebrow">{project.client}</p><h3>{project.title}</h3><p>{project.text}</p><div className="project-bottom"><div className="project-stat"><strong>{project.stat}</strong><span>{project.statLabel}</span></div><a className="outline-button" href={project.url} target="_blank" rel="noreferrer">Ver projeto <span>↗</span></a></div></div></article>)}</div></div></section>

      <section className="objection"><div className="container reveal"><p className="eyebrow">SEM COMPLICAÇÃO</p><h2>Você não precisa entender de tecnologia.</h2><p>Você me explica sua ideia, seu problema ou o que gostaria de melhorar. <strong>A parte técnica fica comigo.</strong></p></div></section>

      <section className="section process" id="processo"><div className="container"><SectionTitle eyebrow="PROCESSO TRANSPARENTE" title="Da ideia à publicação." intro="Um caminho claro, com você acompanhando cada etapa."/><div className="timeline">{steps.map((step,i)=><article className="step reveal" key={step}><span className="step-number">{String(i+1).padStart(2,'0')}</span><div><p className="card-label">{step}</p></div></article>)}</div></div></section>

      <section className="section safety"><div className="container"><SectionTitle eyebrow="SEGURANÇA NA CONTRATAÇÃO" title="Simples, seguro e sem surpresas."/><div className="assurance-grid">{assurances.map((item)=><article className="assurance reveal" key={item[1]}><span>{item[0]}</span><h3>{item[1]}</h3><p>{item[2]}</p></article>)}</div></div></section>

      <section className="section maintenance"><div className="container maintenance-box reveal"><div><p className="eyebrow light">DEPOIS DA ENTREGA</p><h2>Seu projeto não termina na publicação.</h2></div><div><p>Após a entrega, você pode continuar contando comigo para manter seu projeto funcionando corretamente.</p><WhatsAppLink className="button button-light">Inicie seu projeto <span>↗</span></WhatsAppLink></div></div></section>

      <section className="section about" id="sobre"><div className="container about-grid"><div className="about-photo reveal"><Image src="/rafael.png" alt="Foto profissional de Rafael Pequino" width={720} height={720} loading="lazy" sizes="(max-width: 820px) 90vw, 42vw"/><div><strong>Experiência prática</strong><span>em projetos e ambientes corporativos</span></div></div><div className="about-copy reveal"><p className="eyebrow">QUEM ESTÁ POR TRÁS DOS PROJETOS?</p><h2>Rafael Pequino</h2><p>Sou desenvolvedor de software com mais de 4 anos de experiência, atuando no desenvolvimento de soluções digitais para empresas e profissionais.</p><p>Minha trajetória combina experiência como freelancer com atuação em ambientes corporativos, tendo passado pelo CRECISP e pela Sabesp.</p><p>Sou Técnico em Desenvolvimento de Sistemas e estudante de Engenharia da Computação, unindo formação técnica à experiência prática no desenvolvimento de projetos.</p><WhatsAppLink className="text-button">Falar com Rafael <span>↗</span></WhatsAppLink></div></div></section>

      <section className="technology"><div className="container technology-inner reveal"><div><p className="eyebrow">TECNOLOGIA COMO MEIO, NÃO COMO FIM</p><h2>Tecnologia certa para cada projeto.</h2><p>Cada projeto possui necessidades diferentes. Por isso, trabalho com diferentes ferramentas e tecnologias, escolhendo aquilo que faz mais sentido para cada solução.</p></div><div className="tech-list">{['JavaScript','TypeScript','Python','C#','Java','SQL','React','Angular','Vue','Node.js','ASP.NET','MongoDB','Docker','AWS','Power BI','n8n'].map(t=><span key={t}>{t}</span>)}</div></div></section>

      <section className="section testimonials" id="depoimentos"><div className="container"><SectionTitle eyebrow="DEPOIMENTOS" title="O que meus clientes dizem."/><div className="testimonial-grid">{testimonials.map((testimonial)=><article className="testimonial-card reveal" key={testimonial.role}><div className="stars" aria-label="5 estrelas">★★★★★</div><p>{testimonial.text}</p><div className="client-placeholder"><Image src={testimonial.photo} alt={`Foto de ${testimonial.name}`} width={48} height={48} loading="lazy"/><div><strong>{testimonial.name}</strong><small>{testimonial.role}</small><a href={testimonial.url} target="_blank" rel="noreferrer">Ver projeto <span>↗</span></a></div></div></article>)}</div></div></section>

      <section className="section faq"><div className="container faq-grid"><div><p className="eyebrow">DÚVIDAS COMUNS</p><h2>Perguntas frequentes</h2><p>Não encontrou o que procurava? Fale comigo diretamente pelo WhatsApp.</p><WhatsAppLink className="text-button">Tirar uma dúvida <span>↗</span></WhatsAppLink></div><div className="faq-list">{faqs.map((faq,i)=><div className="faq-item" key={faq[0]}><button aria-expanded={openFaq===i} onClick={()=>setOpenFaq(openFaq===i?null:i)}><span>{faq[0]}</span><i>{openFaq===i?'−':'+'}</i></button><div className={openFaq===i?'faq-answer open':'faq-answer'}><p>{faq[1]}</p></div></div>)}</div></div></section>

      <section className="final-cta" id="contato"><div className="container reveal"><p className="eyebrow light">VAMOS CONVERSAR?</p><h2>Tem uma ideia? Vamos transformá-la em uma solução.</h2><p>Me conte brevemente o que você precisa. Vou entender seu projeto e te orientar sobre o melhor caminho para tirá-lo do papel.</p><WhatsAppLink className="button button-white">Fale comigo pelo WhatsApp <span>↗</span></WhatsAppLink><small>Atendimento 100% remoto <b>•</b> Orçamento sem compromisso</small></div></section>
    </main>

    <footer><div className="container footer-grid"><div><a className="brand footer-brand" href="#inicio">Rafael Pequino</a><p>Desenvolvimento de soluções digitais.</p></div><div><strong>Soluções</strong><a href="#servicos">Sites</a><a href="#servicos">Landing Pages</a><a href="#servicos">Sistemas</a><a href="#servicos">Automações</a></div><div><strong>Navegação</strong><a href="#projetos">Projetos</a><a href="#processo">Como funciona</a><a href="#sobre">Sobre</a><a href="#contato">Contato</a></div><div><strong>Contato</strong><a href={WHATSAPP} target="_blank" rel="noreferrer">+55 11 97566-9706 ↗</a><span>Atendimento 100% remoto</span></div></div><div className="container copyright"><span>© 2026 Rafael Pequino. Todos os direitos reservados.</span><a href="#inicio">Voltar ao topo ↑</a></div></footer>

    <WhatsAppLink className="floating-whatsapp"><span className="wa-icon">✆</span><span className="wa-label">Falar no WhatsApp</span></WhatsAppLink>
  </>;
}
