<div style={gridCards}>

  {/* SISTEMA PERSONALIZADO */}
  <div style={card} onClick={() => navigate("/sistema")}>
    <img
      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
      style={imagemCard}
    />
    <h3>🧠 Sistema Personalizado</h3>
    <p>Soluções sob medida para seu negócio</p>
  </div>

  {/* AUTOMAÇÃO */}
  <div style={card} onClick={() => navigate("/automacao")}>
    <img
      src="https://images.unsplash.com/photo-1518770660439-4636190af475"
      style={imagemCard}
    />
    <h3>⚙️ Automação de Processos</h3>
    <p>Reduza tarefas manuais e aumente eficiência</p>
  </div>

  {/* SITE */}
  <div style={card} onClick={() => navigate("/site")}>
    <img
      src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d"
      style={imagemCard}
    />
    <h3>🌐 Site Institucional</h3>
    <p>Presença digital profissional</p>
  </div>

</div>
const gridCards = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "30px",
  marginTop: "50px",
  maxWidth: "900px",
  marginLeft: "auto",
  marginRight: "auto"
};

const card = {
  background: "#0f172a",
  borderRadius: "16px",
  padding: "20px",
  cursor: "pointer",
  transition: "0.3s",
  border: "1px solid rgba(255,255,255,0.05)"
};

const imagemCard = {
  width: "100%",
  borderRadius: "10px",
  marginBottom: "15px"
};