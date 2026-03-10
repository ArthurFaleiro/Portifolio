import React from 'react';
import './App.css';

function App() {
  return (
    <div id="home">
      {/* NAVBAR */}
      <nav className="navbar">
        <div style={{ fontWeight: '800', letterSpacing: '1px' }}>ARTHUR FALEIRO BARBOSA</div>
        <div className="nav-box-container">
          <a href="#home" className="nav-box">Início</a>
          <a href="#experiencia" className="nav-box">Experiência</a>
          <a href="#projetos" className="nav-box">Projetos</a>
          <a href="#contato" className="nav-box">Contato</a>
        </div>
      </nav>

      <main className="main-layout">
        {/* COLUNA ESQUERDA (FIXA) */}
        <aside className="left-column">
          <div className="glass-card" style={{ padding: '10px' }}>
            <img 
              src="/Foto.jpg" 
              alt="Arthur Faleiro" 
              className="arthur-photo"
              onError={(e) => e.target.src="https://via.placeholder.com/300x400?text=Sua+Foto"}
            />
          </div>
          
          <div className="glass-card">
            <p style={{ fontSize: '0.7rem', opacity: 0.6, margin: '0 0 5px' }}>LOCALIZAÇÃO</p>
            <p style={{ margin: 0, fontWeight: 'bold' }}>Canoas, RS</p>
          </div>

          <div className="glass-card">
            <p style={{ fontSize: '0.7rem', opacity: 0.6, margin: '0 0 5px' }}>FORMAÇÃO</p>
            <p style={{ margin: 0, fontWeight: 'bold' }}>Engenharia de Software</p>
            <p style={{ margin: 0, fontSize: '0.8rem' }}>PUCRS (Noturno)</p>
            <p style={{ fontSize: '0.75rem', color: '#FF007F', marginTop: '5px', fontWeight: 'bold' }}>Prev. conclusão: 2027</p>
          </div>

          {/* LINK ATUALIZADO PARA O NOVO CURRÍCULO */}
          <a href="/Currículo_Arthur.pdf" download className="nav-box" style={{ display: 'block', textAlign: 'center', textDecoration: 'none' }}>
            📄 Baixar Currículo PDF
          </a>
        </aside>

        {/* CONTEÚDO DA DIREITA */}
        <section className="right-content">
          <div style={{ marginBottom: '60px' }}>
            <span className="move-badge">EU SOU</span>
            <h1 style={{ fontSize: '3.5rem', margin: '20px 0', lineHeight: '1.2' }}>
              Designer & Dev <br/>
              <span style={{ color: '#FF007F' }}>Full Stack</span> apaixonado por inovação.
            </h1>
            <div style={{ marginTop: '20px' }}>
              <span className="move-badge">Inovar</span>
              <span className="move-badge">Construir</span>
              <span className="move-badge">Resolver</span>
              <span className="move-badge">Evoluir</span>
            </div>
          </div>

          {/* SEÇÃO EXPERIÊNCIAS (RECUPERADA) */}
          <div id="experiencia" style={{ marginBottom: '50px' }}>
            <h3 style={{ opacity: 0.5, fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '20px' }}>EXPERIÊNCIAS</h3>
            
            <div className="glass-card">
              <p style={{ color: '#FF007F', fontSize: '0.75rem', fontWeight: 'bold' }}>2024 - MOMENTO</p>
              <h4>Assistente de Suporte TI - Santa Casa de Porto Alegre</h4>
              <ul style={{ fontSize: '0.85rem', paddingLeft: '20px', opacity: 0.8, lineHeight: '1.6' }}>
                <li>Suporte ao sistema TASY e manutenção de hardware[cite: 10, 93].</li>
                <li>Abertura de ordens de serviço e gestão de usuários[cite: 10, 93].</li>
              </ul>
            </div>

            {/* EXPERIÊNCIA APPMAX RECUPERADA */}
            <div className="glass-card">
              <p style={{ color: '#FF007F', fontSize: '0.75rem', fontWeight: 'bold' }}>2022 - 2023</p>
              <h4>Jovem Aprendiz - Appmax</h4>
              <ul style={{ fontSize: '0.85rem', paddingLeft: '20px', opacity: 0.8, lineHeight: '1.6' }}>
                <li>Credenciamento de Empresas (3 meses)[cite: 9, 90].</li>
                <li>Atuação no setor Jurídico / Débito e Crédito (1 ano e 9 meses)[cite: 9, 91].</li>
              </ul>
            </div>
          </div>

          {/* SEÇÃO PROJETOS */}
          <div id="projetos">
            <h3 style={{ opacity: 0.5, fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '20px' }}>PROJETOS EM DESTAQUE</h3>
            <div className="grid-2">
              <div className="glass-card">
                <h4>Sistema de Gestão de Viagens</h4>
                <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>Gerenciamento de itinerários e destinos.</p>
                <div className="project-tags">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" className="tag-icon" alt="Java"/>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="tag-icon" alt="React"/>
                </div>
                <a href="https://github.com/ArthurFaleiro/Sistema-de-Viagens" target="_blank" rel="noreferrer" className="btn-project">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="14" style={{ filter: 'invert(1)', marginRight: '8px' }} alt=""/>
                  Acessar projeto
                </a>
              </div>

              <div className="glass-card">
                <h4>Sistema de Gestão de Petshop</h4>
                <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>Controle de produtos e serviços para pets.</p>
                <div className="project-tags">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" className="tag-icon" alt="Java"/>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="tag-icon" alt="React"/>
                </div>
                <a href="https://github.com/ArthurFaleiro/Sistema-de-Petshop" target="_blank" rel="noreferrer" className="btn-project">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="14" style={{ filter: 'invert(1)', marginRight: '8px' }} alt=""/>
                  Acessar projeto
                </a>
              </div>

              <div className="glass-card">
                <h4>StreetWise Concessionária</h4>
                <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>E-commerce fictício de veículos elétricos.</p>
                <div className="project-tags">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="tag-icon" alt="HTML"/>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="tag-icon" alt="React"/>
                </div>
                <a href="https://github.com/ArthurFaleiro/Sistema-StreetWise" target="_blank" rel="noreferrer" className="btn-project">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="14" style={{ filter: 'invert(1)', marginRight: '8px' }} alt=""/>
                  Acessar projeto
                </a>
              </div>

              <div className="glass-card">
                <h4>Power BI Clash Royale</h4>
                <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>Dashboard interativo de Data Analytics.</p>
                <div className="project-tags">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/3840px-New_Power_BI_Logo.svg.png" className="tag-icon" alt="PBI"/>
                </div>
                <a href="https://github.com/ArthurFaleiro/ClashRoyale" target="_blank" rel="noreferrer" className="btn-project">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="14" style={{ filter: 'invert(1)', marginRight: '8px' }} alt=""/>
                  Acessar projeto
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* SEÇÃO LET'S TALK (RECUPERADA) */}
      <footer id="contato" style={{ padding: '100px 10%' }}>
        <h2 className="talk-title">Let's talk</h2>
        <div className="contact-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <a href="https://linkedin.com/in/arthur-faleiro-a57b49121" target="_blank" className="nav-box" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/ArthurFaleiro" target="_blank" className="nav-box" rel="noreferrer">GitHub</a>
            <a href="https://wa.me/5551992444380" target="_blank" className="nav-box" rel="noreferrer">WhatsApp</a>
          </div>
          <div className="glass-card">
            <p style={{ marginBottom: '20px', fontWeight: 'bold' }}>Me envie uma mensagem</p>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <input type="text" placeholder="Seu nome" className="contact-input" />
              <textarea placeholder="Sua mensagem..." className="contact-textarea"></textarea>
              <button type="submit" className="nav-box submit-btn">Enviar mensagem</button>
            </form>
          </div>
        </div>
        <p style={{ marginTop: '60px', opacity: 0.3, fontSize: '0.8rem', textAlign: 'center' }}>© 2026 Arthur Faleiro Barbosa. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;