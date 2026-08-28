import { useEffect, useState } from "react";

const PHONE = "5511975669706";
const MESSAGE =
  "Olá, Rafael! Vi seu site e gostaria de conversar sobre um projeto.";
const WHATSAPP = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;
const services = [
  [
    "01",
    "Presença digital",
    "Sites Institucionais e Landing Pages",
  ],
  [
    "02",
    "Atendimento & Vendas",
    "Bots para WhatsApp e Integração com IA",
  ],
  [
    "03",
    "Sistemas & Automação",
    "Automatização de processos e Sistemas sob medida.",
  ],
  [
    "04",
    "Consultoria tecnológica",
    "Avaliação estratégica de melhorias tecnológicas.",
  ],
];
const projects = [
  {
    client: "One Odontologia",
    category: "Site institucional",
    description:
      "Uma presença digital elegante e objetiva para apresentar a clínica, seus tratamentos e facilitar o contato de novos pacientes.",
    image: "/project-one-odontologia.png",
    url: "https://rafaelpequino.github.io/one-odontologia-moema/",
    tone: "blue",
  },
  {
    client: "Sneets Audiovisual",
    category: "Portfólio criativo",
    description:
      "Uma vitrine visual com personalidade para reunir serviços, produções e a identidade marcante da produtora audiovisual.",
    image: "/project-sneets.png",
    url: "https://rafaelpequino.github.io/sneets-audiovisual/",
    tone: "dark",
  },
  {
    client: "Luciana Szarota",
    category: "Landing page comercial",
    description:
      "Uma página clara e próxima para apresentar soluções de consórcio e conduzir o visitante até uma conversa comercial.",
    image: "/showcase-consultora.png",
    url: "https://rafaelpequino.github.io/luciana-szarota/",
    tone: "sand",
  },
];
const testimonials = [
  {
    text: "Contratei o Rafael Pequino para a criação e implantação do meu site e o resultado foi enorme. Ele entendeu perfeitamente minha atividade e meus objetivos.Recomendo fortemente suas habilidades.",
    name: "Henriques",
    role: "Auto Confiança",
    photo: "/testimonial-henriques.png",
  },
  {
    text: "Todo o processo foi muito simples. Eu precisava de um site para a minha clínica, e apenas expliquei como queria e o Rafael desenvolveu exatamente como eu imaginava.",
    name: "Larissa",
    role: "One Odontologia",
    photo: "/testimonial-larissa.png",
  },
  {
    text: "O Rafael me ajudou a melhorar minha apresentação online, e o resultado foi muito bom. Vários leads chegam pelo site que ele criou. Recomendo!",
    name: "Luciana",
    role: "Consultora de consórcios",
    photo: "/testimonial-luciana.png",
  },
];
const faqs = [
  [
    "Quanto custa um projeto?",
    "O investimento depende do escopo. Depois de entender sua necessidade, envio uma proposta clara com prazo e valor.",
  ],
  [
    "Preciso entender de tecnologia?",
    "Não. Você explica o objetivo e eu cuido das decisões técnicas, sempre em linguagem simples.",
  ],
  [
    "Quais formas de pagamento são aceitas?",
    "Pix, Boleto Bancário ou Cartão de Crédito (à vista ou parcelado).",
  ],
  [
    "O projeto possui garantia?",
    "Sim. São 6 meses de garantia para correção de bugs relacionados ao desenvolvimento.",
  ],
];

function WhatsAppLink({
  children,
  className = "button",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a className={className} href={WHATSAPP} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}
function Heading({
  label,
  title,
  text,
}: {
  label: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="heading reveal">
      <span>{label}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) =>
            entry.isIntersecting && entry.target.classList.add("visible"),
        ),
      { threshold: 0.12 },
    );
    document
      .querySelectorAll(".reveal")
      .forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    const onKey = (event: KeyboardEvent) =>
      event.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);
  const closeMenu = () => setMenuOpen(false);
  const links = [
    ["Início", "inicio"],
    ["Sobre", "sobre"],
    ["Serviços", "servicos"],
    ["Projetos", "projetos"],
    ["Depoimentos", "depoimentos"],
    ["Contato", "contato"],
  ];
  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#inicio" onClick={closeMenu}>
            Rafael Pequino<span>.</span>
          </a>
          <nav
            className={menuOpen ? "nav open" : "nav"}
            aria-label="Navegação principal"
          >
            <div className="nav-head">
              <strong>Menu</strong>
              <button
                className="nav-close"
                onClick={closeMenu}
                aria-label="Fechar menu"
              >
                <i></i>
                <i></i>
              </button>
            </div>
            {links.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={closeMenu}>
                {label}
              </a>
            ))}
            <WhatsAppLink className="button nav-cta">
              Falar sobre meu projeto <span>↗</span>
            </WhatsAppLink>
          </nav>
          <button
            className={menuOpen ? "backdrop open" : "backdrop"}
            onClick={closeMenu}
            aria-label="Fechar menu"
            tabIndex={menuOpen ? 0 : -1}
          ></button>
          <WhatsAppLink className="button header-cta">
            Vamos conversar <span>↗</span>
          </WhatsAppLink>
          <button
            className="menu-button"
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
            aria-label="Abrir menu"
          >
            <i></i>
            <i></i>
          </button>
        </div>
      </header>
      <main>
        <section className="hero" id="inicio">
          <div className="hero-copy reveal visible">
            <span className="eyebrow">
              <i></i> Desenvolvimento sob medida
            </span>
            <h1>
              Seu negócio <em>merece mais</em> do que só um site bonito
            </h1>
            <p>
              Tecnologia para sua empresa vender mais, trabalhar melhor e
              crescer.
            </p>
            <div className="hero-actions">
              <WhatsAppLink>
                Quero falar sobre meu projeto <span>↗</span>
              </WhatsAppLink>
              <a href="#projetos" className="quiet-link">
                Ver projetos <span>↓</span>
              </a>
            </div>
            <div className="proof">
              <div>
                <strong>+4</strong>
                <span>anos de experiência</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>online</span>
              </div>
              <div>
                <strong>6 meses</strong>
                <span>de garantia</span>
              </div>
            </div>
          </div>
          <div className="hero-visual reveal visible">
            <div className="portrait-shape"></div>
            <div className="portrait-grid"></div>
            <img
              src="/rafael-hero.png"
              alt="Rafael Pequino, analista de sistemas"
              width="1154"
              height="1363"
            />
            <div className="status-card">
              <i></i>
              <div>
                <strong>Disponível para projetos</strong>
                <span>Atendimento em todo o Brasil</span>
              </div>
            </div>
            <span className="visual-code">RP — 2026</span>
          </div>
        </section>
        <section className="about section" id="sobre">
          <div className="container about-grid">
            <div className="about-title reveal">
              <p className="eyebrow">Quem sou eu</p>
              <h2>Tecnologia sem complicação. Soluções que fazem sentido.</h2>
            </div>
            <div className="about-copy reveal">
              <p className="lead-copy">
                Olá, muito prazer! 👋
                <br />
                Sou o Rafael. Há mais de 4 anos transformo ideias, processos e
                necessidades de negócio em soluções digitais.
              </p>
              <div className="credentials">
                <span>Estratégia</span>
                <span>Tecnologia</span>
                <span>Resultado</span>
              </div>
            </div>
          </div>
        </section>
        <section className="identity section">
          <div className="container identity-grid">
            <div className="identity-copy reveal">
              <span className="eyebrow light">Projetos com identidade</span>
              <h2>
                Seu negócio é único. Sua presença digital também deveria ser.
              </h2>
              <p>
                Visual, conteúdo e tecnologia trabalhando juntos para comunicar
                seu valor e transformar visitantes em oportunidades.
              </p>
              <div className="principles">
                {[
                  ["01", "Atendimento direto"],
                  ["02", "Desenvolvimento personalizado"],
                  ["03", "Acompanhamento completo"],
                ].map((item) => (
                  <div key={item[0]}>
                    <span>{item[0]}</span>
                    <strong>{item[1]}</strong>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="browser-stack reveal"
              aria-label="Exemplos de projetos"
            >
              <div className="mini-browser back">
                <span></span>
                <img src="/showcase-imovel.png" alt="Projeto imobiliário" />
              </div>
              <div className="mini-browser middle">
                <span></span>
                <img
                  src="/showcase-investimento.png"
                  alt="Projeto de investimentos"
                />
              </div>
              <div className="mini-browser front">
                <span></span>
                <img
                  src="/project-samuel-alves.png"
                  alt="Projeto de personal trainer"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="services section" id="servicos">
          <div className="container">
            <Heading
              label="O que posso desenvolver"
              title="O que seu negócio precisa, desenvolvido do jeito certo."
            />
            <div className="service-grid">
              {services.map((service) => (
                <a
                  className="service-card reveal"
                  key={service[0]}
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Conversar sobre ${service[1]}`}
                >
                  <span>{service[0]}</span>
                  <div>
                    <h3>{service[1]}</h3>
                    <p>{service[2]}</p>
                  </div>
                  <b>↗</b>
                </a>
              ))}
            </div>
          </div>
        </section>
        <section className="work section" id="projetos">
          <div className="container">
            <Heading
              label="Trabalhos selecionados"
              title="Soluções reais que saíram do papel."
            />
            <div className="work-grid">
              {projects.map((project, index) => (
                <article
                  className={`work-card ${project.tone} ${index % 2 ? "reverse" : ""} reveal`}
                  key={project.client}
                >
                  <div className="work-image">
                    <div className="browser-top">
                      <i></i>
                      <i></i>
                      <i></i>
                    </div>
                    <img
                      src={project.image}
                      alt={`Projeto ${project.client}`}
                      loading="lazy"
                    />
                  </div>
                  <div className="work-meta">
                    <span>
                      0{index + 1} / {project.category}
                    </span>
                    <h3>{project.client}</h3>
                    <p>{project.description}</p>
                    {project.url ? (
                      <a
                        className="project-link"
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Ver projeto <b>↗</b>
                      </a>
                    ) : (
                      <span className="project-pending">Link em breve</span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="testimonials section" id="depoimentos">
          <div className="container">
            <Heading
              label="Depoimentos"
              title="Feedbacks de quem já trabalhou comigo"
            />
            <div className="testimonial-grid">
              {testimonials.map((item) => (
                <article className="quote reveal" key={item.name}>
                  <span>“</span>
                  <p>{item.text}</p>
                  <div>
                    <img src={item.photo} alt={item.name} />
                    <div>
                      <strong>{item.name}</strong>
                      <small>{item.role}</small>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="faq section">
          <div className="container faq-grid">
            <div className="faq-intro reveal">
              <Heading
                label="Dúvidas frequentes"
                title="Alguma dúvida antes de começar?"
              />
              <WhatsAppLink className="quiet-link">
                Ainda tem uma dúvida? Fale comigo ↗
              </WhatsAppLink>
            </div>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div className="faq-item" key={faq[0]}>
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    aria-expanded={openFaq === index}
                  >
                    <span>{faq[0]}</span>
                    <i>{openFaq === index ? "−" : "+"}</i>
                  </button>
                  <div className={openFaq === index ? "answer open" : "answer"}>
                    <p>{faq[1]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="contact" id="contato">
          <div className="container reveal">
            <span className="eyebrow light">Vamos conversar?</span>
            <h2>
              Tem um projeto em mente?
              <br />
              <em>Vamos conversar.</em>
            </h2>
            <p>
              Não precisa ter tudo definido. Me conte o que você precisa e eu te
              ajudo a encontrar o melhor caminho.
            </p>
            <WhatsAppLink className="button light-button">
              Fale comigo <span>↗</span>
            </WhatsAppLink>
          </div>
        </section>
      </main>
      <footer className="simple-footer">
        <div className="container">
          <a className="footer-name" href="#inicio">
            Rafael Pequino
          </a>
          <i></i>
          <span>Soluções Digitais sob encomenda</span>
          <i></i>
          <a
            className="footer-link"
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
          >
            Fale comigo <b>↗</b>
          </a>
        </div>
      </footer>
      <WhatsAppLink className="floating-wa">
        <img src="/whatsapp-icon.svg" alt="" /> <span>Vamos conversar</span>
      </WhatsAppLink>
    </>
  );
}
