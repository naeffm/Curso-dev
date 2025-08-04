import { useEffect } from 'react';
import Head from 'next/head';

export default function Celebracao() {
  useEffect(() => {
    // Cores adaptadas ao tema dark
    const darkColors = ['#00ff87', '#60efff', '#ff6b6b', '#ffd93d', '#6c5ce7', '#fd79a8'];

    // Função para criar confetes
    function createConfetti() {
      for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = darkColors[Math.floor(Math.random() * darkColors.length)];
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
          confetti.remove();
        }, 5000);
      }
    }

    // Função para criar fogos de artifício
    function createFireworks() {
      for (let i = 0; i < 15; i++) {
        setTimeout(() => {
          const firework = document.createElement('div');
          firework.className = 'firework';
          firework.style.left = Math.random() * 100 + 'vw';
          firework.style.top = Math.random() * 100 + 'vh';
          firework.style.backgroundColor = darkColors[Math.floor(Math.random() * darkColors.length)];
          firework.style.boxShadow = `0 0 10px ${darkColors[Math.floor(Math.random() * darkColors.length)]}`;
          
          document.body.appendChild(firework);
          
          setTimeout(() => {
            firework.remove();
          }, 1200);
        }, i * 80);
      }
    }

    // Função principal de celebração
    window.celebrate = function() {
      createConfetti();
      createFireworks();
      
      // Efeito de flash minimalista
      document.body.style.animation = 'none';
      document.body.offsetHeight;
      document.body.style.animation = 'flash 0.6s ease-in-out';
    };

    // Função para fogos de artifício
    window.createFireworks = createFireworks;

    // Confetes automáticos ao carregar (mais sutil)
    const timer1 = setTimeout(() => {
      createConfetti();
    }, 1500);

    // Interatividade ao clicar na tela
    const handleClick = (e) => {
      if (e.target.tagName !== 'BUTTON') {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = e.clientX + 'px';
        firework.style.top = e.clientY + 'px';
        firework.style.backgroundColor = darkColors[Math.floor(Math.random() * darkColors.length)];
        firework.style.boxShadow = `0 0 15px ${darkColors[Math.floor(Math.random() * darkColors.length)]}`;
        
        document.body.appendChild(firework);
        
        setTimeout(() => {
          firework.remove();
        }, 1200);
      }
    };

    document.addEventListener('click', handleClick);

    // Confetes periódicos mais espaçados (tema minimalista)
    const timer2 = setInterval(() => {
      if (Math.random() > 0.7) { // 30% de chance
        createConfetti();
      }
    }, 15000);

    // Cleanup
    return () => {
      clearTimeout(timer1);
      clearInterval(timer2);
      document.removeEventListener('click', handleClick);
      delete window.celebrate;
      delete window.createFireworks;
    };
  }, []);

  return (
    <>
      <Head>
        <title>🎉 Primeiro Deploy - Salve Tropa do Bagre! 🎉</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div className="container">
        <div className="success-icon">
          ✨
        </div>
        
        <h1 className="main-title">Deploy Realizado</h1>
        <p className="subtitle">Primeiro deploy em produção concluído com sucesso</p>

        <div className="deploy-status">
          <div className="status-badge">
            <span>●</span>
            <span>ONLINE</span>
          </div>
          <p style={{color: '#cccccc', fontSize: '0.95rem'}}>Aplicação rodando em produção</p>
        </div>

        <div className="video-container">
        <iframe
            width="560" // Ajuste a largura conforme necessário
            height="315" // Ajuste a altura conforme necessário
            src="https://www.youtube.com/embed/ygnF4gNBKFA" // Link de embed do YouTube
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
        ></iframe>
        </div>
 

        <div className="tropa-section">
          <h2 className="tropa-title">
            <span>🐟</span>
            <span>Salve Tropa do Bagre</span>
            <span>🐟</span>
          </h2>
          <p className="tropa-message">
            Eaí galera da Tropa do Bagre! O primeiro deploy foi um sucesso total.
          </p>
          <p className="tropa-message">
            Agora é só alegria e código rodando em produção. Valeu pelo apoio de sempre!
          </p>
          <p className="tropa-message">
            Bora comemorar essa conquista juntos! 🎣
          </p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">1</div>
            <div className="stat-label">Deploy</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">100%</div>
            <div className="stat-label">Sucesso</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">∞</div>
            <div className="stat-label">Possibilidades</div>
          </div>
        </div>

        <div className="actions">
          <button className="btn btn-primary" onClick={() => window.celebrate && window.celebrate()}>
            <span>🎉</span>
            <span>Celebrar</span>
          </button>
          <button className="btn" onClick={() => window.createFireworks && window.createFireworks()}>
            <span>🎆</span>
            <span>Fogos de Artifício</span>
          </button>
        </div>
      </div>

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          background: #0a0a0a;
          color: #ffffff;
          min-height: 100vh;
          overflow-x: hidden;
          position: relative;
        }

        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 40px 20px;
          text-align: center;
          position: relative;
          z-index: 10;
          max-width: 800px;
          margin: 0 auto;
        }

        .success-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, #00ff87, #60efff);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          margin-bottom: 32px;
          animation: pulse 2s ease-in-out infinite;
        }

        .main-title {
          font-size: 3.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 16px;
          letter-spacing: -0.02em;
          animation: fadeInUp 1s ease-out;
        }

        .subtitle {
          font-size: 1.25rem;
          font-weight: 400;
          color: #888888;
          margin-bottom: 48px;
          animation: fadeInUp 1s ease-out 0.2s both;
        }

        .deploy-status {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 24px 32px;
          margin-bottom: 48px;
          backdrop-filter: blur(20px);
          animation: fadeInUp 1s ease-out 0.4s both;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #00ff87, #60efff);
          color: #000000;
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .tropa-section {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 40px;
          margin: 48px 0;
          max-width: 600px;
          animation: fadeInUp 1s ease-out 0.6s both;
        }

        .tropa-title {
          font-size: 2rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }

        .tropa-message {
          font-size: 1.125rem;
          color: #cccccc;
          line-height: 1.7;
          margin-bottom: 16px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 24px;
          margin: 48px 0;
          animation: fadeInUp 1s ease-out 0.8s both;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 24px 16px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: #00ff87;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 0.875rem;
          color: #888888;
          font-weight: 500;
        }

        .actions {
          display: flex;
          gap: 16px;
          margin-top: 48px;
          flex-wrap: wrap;
          justify-content: center;
          animation: fadeInUp 1s ease-out 1s both;
        }

        .btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #ffffff;
          padding: 12px 24px;
          border-radius: 12px;
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(20px);
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .btn:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.25);
          transform: translateY(-2px);
        }

        .btn-primary {
          background: linear-gradient(135deg, #00ff87, #60efff);
          border: none;
          color: #000000;
        }

        .btn-primary:hover {
          background: linear-gradient(135deg, #00e676, #40c4ff);
          transform: translateY(-2px);
        }

        /* Animações */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        /* Confetes adaptados ao tema dark */
        .confetti {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 2px;
          animation: confetti-fall linear infinite;
        }

        @keyframes confetti-fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }

        /* Fogos de artifício adaptados */
        .firework {
          position: absolute;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          animation: firework 1.2s ease-out forwards;
        }

        @keyframes firework {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: scale(25);
            opacity: 0;
          }
        }

        /* Responsividade */
        @media (max-width: 768px) {
          .main-title {
            font-size: 2.5rem;
          }
          
          .tropa-title {
            font-size: 1.5rem;
          }
          
          .container {
            padding: 20px;
          }
          
          .tropa-section {
            padding: 24px;
          }
          
          .actions {
            flex-direction: column;
            align-items: center;
          }
          
          .btn {
            width: 100%;
            max-width: 280px;
            justify-content: center;
          }
        }

        /* Efeito de flash minimalista */
        @keyframes flash {
          0% { background: #0a0a0a; }
          50% { background: #1a1a1a; }
          100% { background: #0a0a0a; }
        }

        .video-container {
        width: 100%;
        max-width: 480px; /* Ou o tamanho que preferir */
        margin: 40px auto; /* Centraliza e adiciona espaçamento */
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
        animation: fadeInUp 1s ease-out 0.5s both; /* Para uma animação de entrada */
        }

        .celebration-video {
        width: 100%;
        height: auto;
        display: block;
        }

        @media (max-width: 768px) {
        .video-container {
            margin: 20px auto;
        }
        }
      `}</style>
    </>
  );
}
