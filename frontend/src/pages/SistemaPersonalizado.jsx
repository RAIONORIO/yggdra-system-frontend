import { useNavigate } from "react-router-dom";

export default function SistemaPersonalizado() {
  const navigate = useNavigate();

  return (
    <div style={{
      background: "#020617",
      color: "#fff",
      minHeight: "100vh",
      fontFamily: "Arial"
    }}>

      {/* HERO */}
      <section style={heroContainer}>
        {/* SEGUNDA SEÇÃO */}

        <button onClick={() => navigate("/")} style={botaoVoltar}>
  ← Início
</button>

        {/* LADO ESQUERDO */}
        <div style={{ maxWidth: "550px" }}>

          <div style={badge}>SISTEMA DE GESTÃO EMPRESARIAL</div>

          <div style={{
            display: "flex",
            gap: "10px",
            marginTop: "15px",
            flexWrap: "wrap"
          }}>
            {["Integrações", "Customização", "API", "Módulos", "Conectores"].map((item, i) => (
              <span key={i} style={chipTop}>{item}</span>
            ))}
          </div>

          <h1 style={titulo}>
            Sistema customizado <br /> para sua empresa
          </h1>

          

          <div style={{
            display: "flex",
            gap: "15px",
            marginTop: "25px"
          }}>
            <button style={botaoAmarelo}>Nossos Planos</button>
            <button style={botaoOutline}>▶ Como funciona</button>
          </div>

          <p style={info}>
            Sem fidelidade · Suporte incluso · Cancele quando quiser
          </p>

          <div style={statsContainer}>
            <div>
              <h2>+5.000</h2>
              <span>Empresas Atendidas</span>
            </div>
            <div>
              <h2>+30.000</h2>
              <span>Customizações</span>
            </div>
            <div>
              <h2>+500.000</h2>
              <span>Processos automatizados</span>
            </div>
          </div>

        </div>

        {/* LADO DIREITO */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
            style={imagem}
          />
        </div>

     </section>


<section style={secao2}>

  <div style={{ maxWidth: "600px" }}>
    <h2 style={titulo2}>
      Sistema inteligente:
      <br />
      <span style={{ color: "#22c1c3" }}>
        use na nuvem, local ou web
      </span>
    </h2>

    <p style={texto2}>
      A mesma facilidade em qualquer forma de uso — você escolhe como quer trabalhar.
    </p>

    <p style={descricao2}>
      Nosso sistema roda na nuvem, localmente ou via navegador.
    </p>

    <button style={botaoAmarelo}>
      Ver demonstração
    </button>
  </div>

{/* LADO DIREITO */}
<div style={cardsContainer}>

  <div style={{ ...cardFlutuante, "--i": 0 }}>
    <div style={icone}>🌐</div>
    <h4>Web</h4>
    <span style={descCard}>Navegador</span>
  </div>

  <div style={{ ...cardFlutuante, "--i": 1 }}>
    <div style={icone}>🛒</div>
    <h4>E-commerce</h4>
    <span style={descCard}>Integrações</span>
  </div>

  <div style={{ ...cardFlutuante, "--i": 2 }}>
    <div style={icone}>💻</div>
    <h4>Desktop</h4>
    <span style={descCard}>Local</span>
  </div>

  <div style={{ ...cardFlutuante, "--i": 3 }}>
    <div style={icone}>📱</div>
    <h4>Mobile</h4>
    <span style={descCard}>App</span>
  </div>

</div>

</section>
{/* TERCEIRA SEÇÃO */}
<section style={secao3}>

  <h2 style={tituloSecao3}>
    Recursos e possibilidades para uma gestão
    <br />
    <span style={{ color: "#22c1c3" }}>
      inteligente, acessível e estratégica
    </span>
  </h2>

  {/* MENU DE CATEGORIAS */}
  <div style={menuCategorias}>
    {["Todos", "Varejo", "Serviços", "Indústria", "E-commerce", "Distribuição", "Finanças", "Compras"].map((item, i) => (
      <span key={i} style={categoriaItem}>
        {item}
      </span>
    ))}
  </div>

  {/* GRID DE FUNCIONALIDADES */}
  <div style={gridFuncionalidades}>

    {[
      "Controle de estoque",
      "Frente de Caixa (PDV)",
      "Ordem de serviço",
      "Controle de produção",
      "Insumos e custos",
      "Integração com plataformas",
      "Gestão de pedidos",
      "Logística",
      "Força de vendas",
      "Compras",
      "Fornecedores",
      "Notas de entrada",
      "Custo médio",
      "Lotes e séries",
      "Financeiro",
      "Emissão de boletos",
      "Integração API",
      "Contas recorrentes"
    ].map((item, i) => (
      <div key={i} style={chip}>
        {item}
      </div>
    ))}

  </div>

  {/* CTA FINAL */}
  <button style={botaoSecao3}>
    Meu setor não está aqui? Fale com um especialista
  </button>

</section>
</div>
  );
}

/* ================== ESTILOS ================== */

const heroContainer = {
  position: "relative", // 👈 adiciona isso
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "80px 60px",
  background: "linear-gradient(135deg, #020617, #0f172a)",
  color: "#fff",
  flexWrap: "wrap"
};

const badge = {
  background: "rgba(255,255,255,0.1)",
  padding: "6px 14px",
  borderRadius: "999px",
  fontSize: "12px",
  display: "inline-block"
};

const chipTop = {
  background: "rgba(255,255,255,0.1)",
  padding: "6px 12px",
  borderRadius: "999px",
  fontSize: "12px"
};

const titulo = {
  fontSize: "48px",
  marginTop: "20px",
  lineHeight: "1.2"
};

const subtitulo = {
  marginTop: "15px",
  color: "#cbd5f5",
  fontSize: "18px"
};

const botaoAmarelo = {
  background: "#facc15",
  padding: "12px 25px",
  borderRadius: "10px",
  border: "none",
  cursor: "pointer",
  fontWeight: "bold"
};

const botaoOutline = {
  border: "1px solid #22c1c3",
  padding: "12px 25px",
  borderRadius: "10px",
  background: "transparent",
  color: "#22c1c3",
  cursor: "pointer"
};

const info = {
  marginTop: "15px",
  fontSize: "13px",
  color: "#cbd5f5"
};

const statsContainer = {
  display: "flex",
  gap: "40px",
  marginTop: "30px"
};

const imagem = {
  width: "400px",
  borderRadius: "12px",
  boxShadow: "0 20px 60px rgba(0,0,0,0.5)"
};const botaoVoltar = {
  position: "absolute",
  top: "20px",
  left: "20px",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid #22c1c3",
  color: "#22c1c3",
  padding: "8px 15px",
  borderRadius: "999px",
  cursor: "pointer",
  backdropFilter: "blur(6px)"
};
const secao2 = {
  background: "transparent", // 👈 ESSENCIAL
  padding: "100px 60px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "40px",
  overflow: "hidden",
  position: "relative"
};

const titulo2 = {
  fontSize: "36px"
};

const texto2 = {
  marginTop: "20px"
};

const descricao2 = {
  marginTop: "0px",
  color: "#94a3b8"
};

const cardsContainer = {
  position: "relative",
  width: "500px",
  height: "350px",
  marginLeft: "auto",
  right: "-90px"
};

const cardFlutuante = {
  position: "absolute",
  background: "linear-gradient(145deg, #020617, #020617)",
  padding: "15px", // ↓ menor
  borderRadius: "16px",
  width: "110px", // ↓ menor
  textAlign: "center",
  boxShadow: "0 15px 40px rgba(0,0,0,0.6)",
  border: "1px solid rgba(255,255,255,0.05)",
  backdropFilter: "blur(10px)",
  transition: "0.3s",
  animation: "orbita 30s linear infinite",
  marginTop: "50px"
};

const icone = {
  fontSize: "24px",
  marginBottom: "10px"
};

const descCard = {
  color: "#94a3b8",
  fontSize: "12px"
};
const secao3 = {
  padding: "100px 60px",
  textAlign: "center",
  background: "transparent"
};

const tituloSecao3 = {
  fontSize: "36px",
  marginBottom: "30px"
};

const menuCategorias = {
  display: "flex",
  justifyContent: "center",
  gap: "25px",
  marginBottom: "40px",
  flexWrap: "wrap"
};

const categoriaItem = {
  color: "#94a3b8",
  cursor: "pointer",
  fontSize: "14px"
};

const gridFuncionalidades = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "15px",
  maxWidth: "1000px",
  margin: "0 auto"
};

const chip = {
  background: "rgba(255,255,255,0.05)",
  padding: "12px 20px",
  borderRadius: "999px",
  fontSize: "14px",
  border: "1px solid rgba(255,255,255,0.1)"
};

const botaoSecao3 = {
  marginTop: "40px",
  padding: "14px 30px",
  borderRadius: "999px",
  border: "1px solid #22c1c3",
  background: "transparent",
  color: "#22c1c3",
  cursor: "pointer"
};