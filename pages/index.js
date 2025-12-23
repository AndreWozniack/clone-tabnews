function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        backgroundColor: "#ffffff",
        color: "#000000", 
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "40px", fontWeight: 700, marginBottom: "12px" }}>
          Em construção
        </h1>
        <p style={{ fontSize: "18px", fontWeight: 400 }}>
          Em breve, um local cheio de ferramentas e discussões para todos os
          tradicionalistas.
        </p>
      </div>
    </div>
  );
}

export default Home;
