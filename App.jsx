import React from 'react';
import './App.css';

function App() {
  return (
    <div id="home">
      <nav className="navbar">
        <div style={{fontWeight: '800'}}>ARTHUR FALEIRO BARBOSA</div>
        <div className="nav-box-container">
          <a href="#home" className="nav-box">Início</a>
          <a href="#experiencia" className="nav-box">Experiência</a>
          <a href="#projetos" className="nav-box">Projetos</a>
          <a href="#contato" className="nav-box">Contato</a>
        </div>
      </nav>

      <main className="main-layout">
        <aside className="left-column">
          <div className="glass-card" style={{padding: '10px'}}>
            {/* Certifique-se de que a foto está na pasta public */}
            <img src="/Foto.jpg" alt="Arthur" style={{width: '100%', borderRadius: '15px'}} 
                 onError={(e) => e.target.src="https://via.placeholder.com/300x400?text=Sua+Foto"}/>
          </div>
          <div className="glass-card">
            <p style={{fontSize: '0.7rem', opacity: 0.6, margin: '0 0 5px'}}>LOCALIZAÇÃO</p>
            <p style={{margin: 0, fontWeight: 'bold'}}>Canoas, RS</p>
          </div>
          <div className="glass-card">
            <p style={{fontSize: '0.7rem', opacity: 0.6, margin: '0 0 5px'}}>FORMAÇÃO</p>
            <p style={{margin: 0, fontWeight: 'bold'}}>Engenharia de Software</p>
            <p style={{margin: 0, fontSize: '0.8rem'}}>PUCRS (Noturno)</p>
            <p style={{fontSize: '0.75rem', color: '#FF007F', marginTop: '5px', fontWeight: 'bold'}}>Prev: 02/2027</p>
          </div>
          <a href="/Currículo 5.pdf.pdf" download className="nav-box" style={{display: 'block', textAlign: 'center', textDecoration: 'none'}}>
            📄 Baixar Currículo PDF
          </a>
        </aside>

        <section className="right-content">
          <div style={{marginBottom: '60px'}}>
            <span className="move-badge">EU SOU</span>
            <h1 style={{fontSize: '3.5rem', margin: '20px 0', lineHeight: '1.2'}}>
              Designer & Dev <br/><span style={{color: '#FF007F'}}>Full Stack</span> apaixonado por trazer design para a vida.
            </h1>
            <p style={{opacity: 0.6, marginBottom: '15px'}}>O QUE ME MOVE</p>
            <div>
              <span className="move-badge">Inovar</span>
              <span className="move-badge">Construir</span>
              <span className="move-badge">Resolver</span>
              <span className="move-badge">Evoluir</span>
            </div>
          </div>

          <div id="experiencia">
            <h3 style={{opacity: 0.5, fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '20px'}}>EXPERIÊNCIAS</h3>
            <div className="glass-card">
              <p style={{color: '#FF007F', fontSize: '0.75rem', fontWeight: 'bold'}}>2024 - MOMENTO</p>
              <h4>Assistente de Suporte TI - Hospital Santa Casa de Porto Alegre</h4>
              <ul style={{fontSize: '0.85rem', paddingLeft: '20px', opacity: 0.8}}>
                <li>Manutenção de hardware e suporte via sistema TASY.</li>
                <li>Gestão de usuários e atendimento via WhatsApp bot e e-mail.</li>
              </ul>
            </div>
            <div className="glass-card">
              <p style={{color: '#FF007F', fontSize: '0.75rem', fontWeight: 'bold'}}>2022 - 2023</p>
              <h4>Jovem Aprendiz - Appmax</h4>
              <ul style={{fontSize: '0.85rem', paddingLeft: '20px', opacity: 0.8}}>
                <li>Suporte administrativo nos setores Jurídico e Credenciamento.</li>
                <li>Lançamento de notas e organização de documentos.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer id="contato" style={{padding: '100px 10%'}}>
        <h2 style={{fontSize: '5rem', fontWeight: '200', margin: '0 0 50px'}}>Let's talk</h2>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px'}}>
          <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
            <a href="https://linkedin.com/in/arthur-faleiro-a57b49121" target="_blank" className="nav-box" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/ArthurFaleiro" target="_blank" className="nav-box" rel="noreferrer">GitHub</a>
            <a href="https://wa.me/5551992444380" target="_blank" className="nav-box" rel="noreferrer">WhatsApp</a>
          </div>
          <div className="glass-card">
            <p style={{marginBottom: '20px', fontWeight: 'bold'}}>Me envie uma mensagem</p>
            <form style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
              <input type="text" placeholder="Seu nome" style={{padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '8px'}} />
              <textarea placeholder="Sua mensagem..." style={{padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '8px', height: '100px', resize: 'none'}}></textarea>
              <button type="submit" className="nav-box" style={{background: 'white', color: 'black', fontWeight: 'bold', cursor: 'pointer', border: 'none'}}>Enviar mensagem</button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;