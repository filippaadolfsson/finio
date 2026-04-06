"use client";
import { useState } from "react";

export default function Home() {
  const [view, setView] = useState<"landing" | "app">("landing");
  const [step, setStep] = useState(1);
  const [uploaded, setUploaded] = useState(false);
  const [reportPage, setReportPage] = useState(0);
  const [selectedTemplate, setSelectedTemplate] = useState(0);
  const [approved, setApproved] = useState<Record<number, boolean>>({ 1: true, 2: false, 3: false, 4: false });
  const [selectedExport, setSelectedExport] = useState(0);
  const [exported, setExported] = useState(false);

  const approveCount = Object.values(approved).filter(Boolean).length;
  const allApproved = approveCount === 4;

  const templates = [
    { name: "Mörk premium", desc: "Auktoritativ · IR-rapporter" },
    { name: "Ljus klassisk", desc: "Universell · Kvartalsrapport" },
    { name: "Djärv grön", desc: "Stark · Varumärkesbyggande" },
    { name: "Minimalistisk", desc: "Elegant · Typografifokus" },
    { name: "Årsredovisning", desc: "Komplett · Med noter" },
    { name: "IR-rapport", desc: "Investerarrelationer · Aktiedata" },
  ];

  const reportPages = ["Framsida", "VD-ord", "Finansiell data", "Utsikter"];
  const exportFormats = [
    { label: "PDF", name: "PDF – professionell", desc: "Tryckfärdig med inbäddade typsnitt och exakt layout." },
    { label: "ESEF", name: "ESEF / iXBRL", desc: "Regulatoriskt format för börsnoterade bolag." },
    { label: "WEB", name: "Delningslänk", desc: "Lösenordsskyddad länk. Klienten läser i webbläsaren." },
    { label: "PPT", name: "PowerPoint", desc: "Redigerbar presentation för investerarmöten." },
  ];

  if (view === "landing") {
    return (
      <div style={{ fontFamily: "Georgia, serif", background: "#f5f7f5", minHeight: "100vh" }}>
        {/* NAV */}
        <nav style={{ background: "rgba(245,247,245,0.95)", borderBottom: "1px solid #dde8e2", padding: "18px 48px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 100, backdropFilter: "blur(12px)" }}>
          <div style={{ fontSize: 22, color: "#0d6e52", letterSpacing: -0.5 }}>finio</div>
          <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
            <span style={{ fontSize: 13, color: "#556b5e", cursor: "pointer", fontFamily: "sans-serif" }}>Mallar</span>
            <span onClick={() => document.getElementById("hur-det-fungerar")?.scrollIntoView({ behavior: "smooth" })} style={{ fontSize: 13, color: "#556b5e", cursor: "pointer", fontFamily: "sans-serif" }}>Hur det fungerar</span>

            <span onClick={() => document.getElementById("priser")?.scrollIntoView({ behavior: "smooth" })} style={{ fontSize: 13, color: "#556b5e", cursor: "pointer", fontFamily: "sans-serif" }}>Priser</span>

            <button onClick={() => setView("app")} style={{ background: "#1a9e74", color: "#fff", padding: "9px 20px", borderRadius: 6, fontSize: 13, fontWeight: 500, border: "none", cursor: "pointer", fontFamily: "sans-serif" }}>Prova demo →</button>
          </div>
        </nav>

        {/* HERO */}
        <div style={{ textAlign: "center", padding: "80px 24px 60px", position: "relative" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#e0f5ee", color: "#0d6e52", fontSize: 12, fontWeight: 500, padding: "6px 14px", borderRadius: 20, marginBottom: 28, border: "1px solid rgba(26,158,116,.2)", fontFamily: "sans-serif" }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#1a9e74" }} />
            Ny generation av finansiell rapportering
          </div>
          <h1 style={{ fontSize: "clamp(40px,6vw,68px)", fontWeight: 300, lineHeight: 1.1, letterSpacing: -1.5, color: "#0c1510", maxWidth: 760, margin: "0 auto 16px" }}>
            Från Excel till<br />
            <em style={{ color: "#0d6e52" }}>professionell rapport</em><br />
            på minuter
          </h1>
          <p style={{ fontSize: 17, color: "#556b5e", maxWidth: 500, lineHeight: 1.7, marginBottom: 40, fontFamily: "sans-serif", fontWeight: 300, margin: "0 auto 40px" }}>
            Finio kopplar din data direkt till snygga designmallar. Granska, godkänn och leverera – utan designer, utan InDesign, utan kaos.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={() => setView("app")} style={{ background: "#1a9e74", color: "#fff", padding: "14px 28px", borderRadius: 6, fontSize: 14, fontWeight: 500, border: "none", cursor: "pointer", fontFamily: "sans-serif" }}>Prova demon interaktivt →</button>
            <button style={{ background: "#fff", color: "#0c1510", padding: "14px 28px", borderRadius: 6, fontSize: 14, fontWeight: 500, border: "1px solid #c5d9d0", cursor: "pointer", fontFamily: "sans-serif" }}>Se mallar</button>
          </div>
        </div>

        {/* FEATURES */}
      
        {/* HOW IT WORKS */}
        <section id="hur-det-fungerar" style={{ padding: "80px 48px", maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ fontSize: 11, fontWeight: 500, color: "#1a9e74", textTransform: "uppercase", letterSpacing: 1, marginBottom: 10, fontFamily: "monospace" }}>Hur det fungerar</div>
          <h2 style={{ fontSize: "clamp(26px,4vw,40px)", fontWeight: 300, letterSpacing: -1, lineHeight: 1.2, marginBottom: 12, color: "#0c1510" }}>Från Excel till färdig rapport.<br />Steg för steg.</h2>
          <p style={{ fontSize: 15, color: "#556b5e", maxWidth: 500, lineHeight: 1.7, marginBottom: 64, fontFamily: "sans-serif", fontWeight: 300 }}>Finio ersätter hela den manuella kedjan – designer, InDesign, mejlkaos och versionshelvete – med ett enda digitalt flöde.</p>

          {/* Step 1 */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", marginBottom: 80 }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#0c1510", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 500, fontFamily: "monospace", flexShrink: 0 }}>1</div>
                <div style={{ height: 1, width: 40, background: "#dde8e2" }} />
                <div style={{ fontSize: 11, color: "#8aa396", textTransform: "uppercase", letterSpacing: 1, fontFamily: "monospace" }}>Importera</div>
              </div>
              <h3 style={{ fontSize: 28, fontWeight: 300, letterSpacing: -0.8, lineHeight: 1.2, marginBottom: 16, color: "#0c1510", fontFamily: "Georgia, serif" }}>Koppla din Excel-fil – en gång</h3>
              <p style={{ fontSize: 15, color: "#556b5e", lineHeight: 1.8, marginBottom: 20, fontFamily: "sans-serif", fontWeight: 300 }}>Ladda upp klientens Excel-fil och Finio identifierar automatiskt nyckeltal, tabeller och diagram. Inga manuella kopieringar – ändras datan i Excel uppdateras rapporten direkt.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {["Stöder .xlsx och .xls upp till 25 MB", "Automatisk identifiering av nyckeltal", "Dynamisk synkronisering vid dataändring", "Valideringskontroll för ovanliga värden"].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#2a3d32", fontFamily: "sans-serif" }}>
                    <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#e0f5ee", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ color: "#0d6e52", fontSize: 10, fontWeight: 700 }}>✓</span>
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: "#f5f7f5", border: "1px solid #dde8e2", borderRadius: 16, padding: 24 }}>
              <div style={{ fontSize: 10, color: "#8aa396", fontFamily: "monospace", marginBottom: 16, textTransform: "uppercase", letterSpacing: 0.5 }}>Identifierade nyckeltal</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 16 }}>
                {[{ l: "Nettoomsättning", v: "84,2 MSEK", c: "+12,4%", up: true }, { l: "EBITDA", v: "18,6 MSEK", c: "+8,1%", up: true }, { l: "Rörelsemarginal", v: "22,1%", c: "-0,8pp", up: false }, { l: "Kassaflöde", v: "11,3 MSEK", c: "+3,2%", up: true }].map((k, i) => (
                  <div key={i} style={{ background: "#fff", border: "1px solid #dde8e2", borderRadius: 8, padding: 12 }}>
                    <div style={{ fontSize: 9, color: "#8aa396", fontFamily: "monospace", textTransform: "uppercase", marginBottom: 4 }}>{k.l}</div>
                    <div style={{ fontSize: 18, fontWeight: 500, color: "#0c1510", letterSpacing: -0.5 }}>{k.v}</div>
                    <div style={{ fontSize: 11, color: k.up ? "#1a9e74" : "#c0392b", fontFamily: "monospace", marginTop: 2 }}>{k.c} vs Q1</div>
                  </div>
                ))}
              </div>
              <div style={{ background: "#fff", border: "1px solid #dde8e2", borderRadius: 8, padding: 12, display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 28, height: 28, background: "#eaf3de", borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 600, color: "#3b6d11", fontFamily: "monospace", flexShrink: 0 }}>XLS</div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 500, color: "#0c1510" }}>Bergstrom_Q2_2025.xlsx</div>
                  <div style={{ fontSize: 11, color: "#8aa396", fontFamily: "monospace" }}>142 KB · Importerad · Synkad</div>
                </div>
                <div style={{ marginLeft: "auto", background: "#e0f5ee", color: "#0d6e52", padding: "3px 9px", borderRadius: 20, fontSize: 11, fontWeight: 500 }}>Live</div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", marginBottom: 80 }}>
            <div style={{ background: "#0c1510", borderRadius: 16, padding: 24, order: -1 }}>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,.4)", fontFamily: "monospace", marginBottom: 16, textTransform: "uppercase", letterSpacing: 0.5 }}>Designmall applicerad</div>
              <div style={{ background: "#1a3a2a", borderRadius: 10, overflow: "hidden", marginBottom: 12 }}>
                <div style={{ background: "#1a9e74", padding: "14px 16px" }}>
                  <div style={{ fontSize: 9, color: "rgba(255,255,255,.6)", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: 0.7, marginBottom: 6, border: "1px solid rgba(255,255,255,.3)", display: "inline-block", padding: "2px 7px", borderRadius: 10 }}>Kvartalsrapport Q2 2025</div>
                  <div style={{ fontSize: 22, fontWeight: 300, color: "#fff", letterSpacing: -0.5, lineHeight: 1.1, fontFamily: "Georgia, serif" }}>Bergström<br /><em>Kapital AB</em></div>
                </div>
                <div style={{ padding: "12px 16px", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>
                  {[["Omsättning", "84,2M"], ["EBITDA", "18,6M"], ["Tillväxt", "+12%"]].map(([l, v], i) => (
                    <div key={i}>
                      <div style={{ fontSize: 7, color: "rgba(255,255,255,.4)", fontFamily: "monospace", textTransform: "uppercase", marginBottom: 2 }}>{l}</div>
                      <div style={{ fontSize: 13, fontWeight: 500, color: "#fff" }}>{v}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: "flex", gap: 6 }}>
                {["Mörk premium", "Ljus klassisk", "Djärv grön"].map((t, i) => (
                  <div key={i} style={{ flex: 1, background: i === 0 ? "rgba(26,158,116,.2)" : "rgba(255,255,255,.06)", border: `1px solid ${i === 0 ? "#1a9e74" : "rgba(255,255,255,.1)"}`, borderRadius: 6, padding: "6px 8px", fontSize: 10, color: i === 0 ? "#5dcaa5" : "rgba(255,255,255,.4)", textAlign: "center", fontFamily: "monospace" }}>{t}</div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#0c1510", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 500, fontFamily: "monospace", flexShrink: 0 }}>2</div>
                <div style={{ height: 1, width: 40, background: "#dde8e2" }} />
                <div style={{ fontSize: 11, color: "#8aa396", textTransform: "uppercase", letterSpacing: 1, fontFamily: "monospace" }}>Designa</div>
              </div>
              <h3 style={{ fontSize: 28, fontWeight: 300, letterSpacing: -0.8, lineHeight: 1.2, marginBottom: 16, color: "#0c1510", fontFamily: "Georgia, serif" }}>Välj mall – layouten fixar sig själv</h3>
              <p style={{ fontSize: 15, color: "#556b5e", lineHeight: 1.8, marginBottom: 20, fontFamily: "sans-serif", fontWeight: 300 }}>Välj bland sex professionella mallar. Klientens logga, färger och typsnitt appliceras automatiskt. Layouten kan aldrig gå sönder – oavsett vem som redigerar text eller ändrar siffror.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {["Sex professionella designmallar", "Klientens grafiska profil inbyggd", "Drag-and-drop sidstruktur", "Förhandsgranskning i realtid", "Layouten kan aldrig gå sönder"].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#2a3d32", fontFamily: "sans-serif" }}>
                    <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#e0f5ee", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ color: "#0d6e52", fontSize: 10, fontWeight: 700 }}>✓</span>
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", marginBottom: 80 }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#0c1510", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 500, fontFamily: "monospace", flexShrink: 0 }}>3</div>
                <div style={{ height: 1, width: 40, background: "#dde8e2" }} />
                <div style={{ fontSize: 11, color: "#8aa396", textTransform: "uppercase", letterSpacing: 1, fontFamily: "monospace" }}>Granska</div>
              </div>
              <h3 style={{ fontSize: 28, fontWeight: 300, letterSpacing: -0.8, lineHeight: 1.2, marginBottom: 16, color: "#0c1510", fontFamily: "Georgia, serif" }}>Alla granskar på ett ställe</h3>
              <p style={{ fontSize: 15, color: "#556b5e", lineHeight: 1.8, marginBottom: 20, fontFamily: "sans-serif", fontWeight: 300 }}>Bjud in CFO, VD, styrelseordförande och revisor med rollbaserade behörigheter. Alla kommenterar och godkänner direkt i verktyget. Inga mer mejlkedjor, inga mer versionsförvirring.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {["Rollbaserade behörigheter per granskare", "Inline-kommentarer på text och siffror", "Automatisk notifiering via e-post", "Fullständig versionshistorik", "Rapporten låses när alla godkänt"].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#2a3d32", fontFamily: "sans-serif" }}>
                    <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#e0f5ee", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ color: "#0d6e52", fontSize: 10, fontWeight: 700 }}>✓</span>
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: "#f5f7f5", border: "1px solid #dde8e2", borderRadius: 16, padding: 24 }}>
              <div style={{ fontSize: 10, color: "#8aa396", fontFamily: "monospace", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.5 }}>Granskningsstatus</div>
              <div style={{ height: 4, background: "#fff", borderRadius: 2, border: "1px solid #dde8e2", marginBottom: 16 }}>
                <div style={{ height: "100%", borderRadius: 2, background: "#1a9e74", width: "75%" }} />
              </div>
              {[{ i: "AJ", bg: "#e0f5ee", c: "#0d6e52", n: "Anna Johansson", r: "CFO · Ekonomidata", s: "Godkänd", ok: true }, { i: "MR", bg: "#e8f0fb", c: "#2563a8", n: "Marcus Rydén", r: "VD · VD-ord", s: "Kommenterat", ok: false, comment: "Kan vi betona tillväxtpotentialen mer?" }, { i: "LB", bg: "#fef3d8", c: "#a36800", n: "Lisa Bergström", r: "Styrelseordförande", s: "Godkänd", ok: true }, { i: "EK", bg: "#f0ecfc", c: "#6d4fc2", n: "Erik Karlsson", r: "Revisor", s: "Inväntar", ok: false }].map((r, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "10px 0", borderBottom: i < 3 ? "1px solid #dde8e2" : "none" }}>
                  <div style={{ width: 30, height: 30, borderRadius: "50%", background: r.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 500, color: r.c, flexShrink: 0 }}>{r.i}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 12, fontWeight: 500, color: "#0c1510" }}>{r.n}</div>
                    <div style={{ fontSize: 11, color: "#8aa396" }}>{r.r}</div>
                    {r.comment && <div style={{ marginTop: 6, background: "#fef3d8", padding: "6px 9px", fontSize: 11, color: "#a36800", borderLeft: "2px solid #e8960a" }}>{r.comment}</div>}
                  </div>
                  <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 20, fontWeight: 500, background: r.ok ? "#e0f5ee" : r.s === "Kommenterat" ? "#fef3d8" : "#f5f7f5", color: r.ok ? "#0d6e52" : r.s === "Kommenterat" ? "#a36800" : "#8aa396" }}>{r.s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Step 4 */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
            <div style={{ background: "#0c1510", borderRadius: 16, padding: 24 }}>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,.4)", fontFamily: "monospace", marginBottom: 16, textTransform: "uppercase", letterSpacing: 0.5 }}>Exportformat</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 16 }}>
                {[{ l: "PDF", n: "PDF – professionell", bg: "#fcecea", c: "#c0392b" }, { l: "ESEF", n: "ESEF / iXBRL", bg: "#e8f0fb", c: "#2563a8" }, { l: "WEB", n: "Delningslänk", bg: "#f0ecfc", c: "#6d4fc2" }, { l: "PPT", n: "PowerPoint", bg: "#e0f5ee", c: "#0d6e52" }].map((f, i) => (
                  <div key={i} style={{ background: i === 0 ? "rgba(255,255,255,.08)" : "rgba(255,255,255,.04)", border: `1px solid ${i === 0 ? "rgba(255,255,255,.2)" : "rgba(255,255,255,.08)"}`, borderRadius: 8, padding: 12 }}>
                    <div style={{ width: 28, height: 28, borderRadius: 5, background: f.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 700, color: f.c, fontFamily: "monospace", marginBottom: 6 }}>{f.l}</div>
                    <div style={{ fontSize: 11, color: i === 0 ? "#fff" : "rgba(255,255,255,.5)" }}>{f.n}</div>
                  </div>
                ))}
              </div>
              <div style={{ background: "#1a9e74", borderRadius: 8, padding: 14, textAlign: "center" }}>
                <div style={{ fontSize: 13, fontWeight: 500, color: "#fff", marginBottom: 3 }}>Bergstrom_Kapital_Q2_2025.pdf</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,.7)", fontFamily: "monospace" }}>2,4 MB · Levererad · Arkiverad</div>
              </div>
            </div>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#0c1510", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 500, fontFamily: "monospace", flexShrink: 0 }}>4</div>
                <div style={{ height: 1, width: 40, background: "#dde8e2" }} />
                <div style={{ fontSize: 11, color: "#8aa396", textTransform: "uppercase", letterSpacing: 1, fontFamily: "monospace" }}>Leverera</div>
              </div>
              <h3 style={{ fontSize: 28, fontWeight: 300, letterSpacing: -0.8, lineHeight: 1.2, marginBottom: 16, color: "#0c1510", fontFamily: "Georgia, serif" }}>Exportera i rätt format – ett klick</h3>
              <p style={{ fontSize: 15, color: "#556b5e", lineHeight: 1.8, marginBottom: 20, fontFamily: "sans-serif", fontWeight: 300 }}>PDF, ESEF/iXBRL för börsnoterade bolag, delningslänk eller PowerPoint. Alla format genereras automatiskt från samma rapport. Allt sparas i arkivet – varje version, för alltid.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {["PDF med inbäddade typsnitt och exakt layout", "ESEF/iXBRL för börsnoterade bolag", "Lösenordsskyddad delningslänk", "PowerPoint för investerarmöten", "Automatisk arkivering och versionshistorik"].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#2a3d32", fontFamily: "sans-serif" }}>
                    <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#e0f5ee", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ color: "#0d6e52", fontSize: 10, fontWeight: 700 }}>✓</span>
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* TEMPLATES */}
        <section style={{ padding: "80px 48px", maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ fontSize: 11, fontWeight: 500, color: "#1a9e74", textTransform: "uppercase", letterSpacing: 1, marginBottom: 10, fontFamily: "monospace" }}>Designmallar</div>
          <h2 style={{ fontSize: "clamp(26px,4vw,40px)", fontWeight: 300, letterSpacing: -1, lineHeight: 1.2, marginBottom: 12, color: "#0c1510" }}>Sex mallar. Samma data.</h2>
          <p style={{ fontSize: 15, color: "#556b5e", maxWidth: 460, lineHeight: 1.7, marginBottom: 48, fontFamily: "sans-serif", fontWeight: 300 }}>Välj den mall som passar klientens profil. Allt ser professionellt ut – direkt.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {[
              { name: "Mörk premium", desc: "Professionell och auktoritativ. Passar investmentbolag och IR-rapporter.", tag: "Populär", tagColor: "#e0f5ee", tagText: "#0d6e52", bg: "#0c1510", accent: "#1a9e74" },
              { name: "Ljus klassisk", desc: "Ren och lättläst. Passar de flesta bolag och rapporttyper.", bg: "#fff", accent: "#1a9e74" },
              { name: "Djärv grön", desc: "Stark och igenkänningsbar. Bygger varumärke vid varje rapport.", bg: "#1a9e74", accent: "#fff" },
              { name: "Minimalistisk", desc: "Typografi och whitespace i fokus. Passar bolag som värdesätter enkelhet.", bg: "#fafafa", accent: "#0c1510" },
              { name: "Årsredovisning", desc: "Komplett mall med VD-ord, förvaltningsberättelse och noter.", tag: "Nyhet", tagColor: "#e8f0fb", tagText: "#2563a8", bg: "#0c1510", accent: "#5dcaa5" },
              { name: "IR-rapport", desc: "Investerarrelationer och kapitalmarknadskommunikation med aktiedata.", bg: "#fff", accent: "#2563a8" },
            ].map((t, i) => (
              <div key={i} onClick={() => { setView("app"); setStep(2); setSelectedTemplate(i); }} style={{ background: "#fff", border: "1px solid #dde8e2", borderRadius: 16, overflow: "hidden", cursor: "pointer", transition: "transform .2s" }}
                onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}>
                <div style={{ height: 160, background: t.bg, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 20 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div style={{ width: 28, height: 28, background: t.accent, borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 600, color: t.bg, fontFamily: "monospace" }}>BK</div>
                    {t.tag && <span style={{ background: t.tagColor, color: t.tagText, fontSize: 10, padding: "2px 8px", borderRadius: 20, fontWeight: 500, fontFamily: "sans-serif" }}>{t.tag}</span>}
                  </div>
                  <div>
                    <div style={{ fontSize: 20, fontWeight: 300, color: t.accent, letterSpacing: -0.5, lineHeight: 1.1, marginBottom: 4 }}>Kvartals-<br /><em>rapport Q2</em></div>
                    <div style={{ fontSize: 10, color: t.accent, opacity: 0.5, fontFamily: "monospace" }}>Bergström Kapital AB</div>
                  </div>
                </div>
                <div style={{ padding: "14px 16px", borderTop: "1px solid #dde8e2" }}>
                  <div style={{ fontSize: 14, fontWeight: 500, color: "#0c1510", marginBottom: 3, fontFamily: "sans-serif" }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: "#556b5e", fontFamily: "sans-serif" }}>{t.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

                {/* PRISER */}
        <section id="priser" style={{ padding: "80px 48px", maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ fontSize: 11, fontWeight: 500, color: "#1a9e74", textTransform: "uppercase", letterSpacing: 1, marginBottom: 10, fontFamily: "monospace" }}>Priser</div>
          <h2 style={{ fontSize: "clamp(26px,4vw,40px)", fontWeight: 300, letterSpacing: -1, lineHeight: 1.2, marginBottom: 12, color: "#0c1510" }}>Välj det paket som passar er.</h2>
          <p style={{ fontSize: 15, color: "#556b5e", maxWidth: 480, lineHeight: 1.7, marginBottom: 56, fontFamily: "sans-serif", fontWeight: 300 }}>Vi sätter priset tillsammans baserat på er volym och era behov. Kontakta oss så berättar vi mer.</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginBottom: 40 }}>

            {/* Starter */}
            <div style={{ background: "#fff", border: "1px solid #dde8e2", borderRadius: 16, padding: 28, display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 11, fontWeight: 500, color: "#8aa396", textTransform: "uppercase", letterSpacing: 1, fontFamily: "monospace", marginBottom: 12 }}>Starter</div>
              <div style={{ fontFamily: "Georgia, serif", fontSize: 28, fontWeight: 300, color: "#0c1510", letterSpacing: -0.8, marginBottom: 6 }}>Kom igång</div>
              <div style={{ fontSize: 14, color: "#556b5e", marginBottom: 24, fontFamily: "sans-serif", fontWeight: 300, lineHeight: 1.5 }}>För finanskonsulter med ett fåtal klienter som vill modernisera sitt rapportflöde.</div>
              <div style={{ height: 1, background: "#dde8e2", marginBottom: 24 }} />
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32, flex: 1 }}>
                {["Upp till 5 aktiva klienter", "3 designmallar", "Excel-datakoppling", "PDF-export", "Gransknings- och godkännandeflöde", "E-postnotifikationer", "Versionshistorik"].map((f, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "#2a3d32", fontFamily: "sans-serif" }}>
                    <div style={{ width: 16, height: 16, borderRadius: "50%", background: "#e0f5ee", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ color: "#0d6e52", fontSize: 9, fontWeight: 700 }}>✓</span>
                    </div>
                    {f}
                  </div>
                ))}
              </div>
              <button
                onClick={() => {
                  const el = document.getElementById("kontakt-modal");
                  const pkg = document.getElementById("kontakt-paket");
                  if (el) el.style.display = "flex";
                  if (pkg) pkg.textContent = "Starter";
                }}
                style={{ width: "100%", padding: "12px 20px", borderRadius: 8, fontSize: 13, fontWeight: 500, cursor: "pointer", border: "1px solid #c5d9d0", background: "#fff", color: "#0c1510", fontFamily: "sans-serif", transition: "all .2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "#f5f7f5"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#fff"; }}
              >
                Kontakta oss →
              </button>
            </div>

            {/* Pro – highlighted */}
            <div style={{ background: "#0c1510", border: "2px solid #1a9e74", borderRadius: 16, padding: 28, display: "flex", flexDirection: "column", position: "relative" }}>
              <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: "#1a9e74", color: "#fff", fontSize: 11, fontWeight: 500, padding: "4px 14px", borderRadius: 20, fontFamily: "sans-serif", whiteSpace: "nowrap" }}>Mest populär</div>
              <div style={{ fontSize: 11, fontWeight: 500, color: "rgba(255,255,255,.4)", textTransform: "uppercase", letterSpacing: 1, fontFamily: "monospace", marginBottom: 12 }}>Pro</div>
              <div style={{ fontFamily: "Georgia, serif", fontSize: 28, fontWeight: 300, color: "#fff", letterSpacing: -0.8, marginBottom: 6 }}>Skala upp</div>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,.5)", marginBottom: 24, fontFamily: "sans-serif", fontWeight: 300, lineHeight: 1.5 }}>För etablerade IR-byråer och finanskonsulter med flera klienter och regelbunden rapportering.</div>
              <div style={{ height: 1, background: "rgba(255,255,255,.1)", marginBottom: 24 }} />
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32, flex: 1 }}>
                {["Upp till 20 aktiva klienter", "Alla 6 designmallar", "Excel-datakoppling", "PDF och ESEF/iXBRL-export", "Gransknings- och godkännandeflöde", "AI-genererade textförslag", "Branschbenchmarking", "Vit etikett – ditt varumärke", "Prioriterad support"].map((f, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "rgba(255,255,255,.8)", fontFamily: "sans-serif" }}>
                    <div style={{ width: 16, height: 16, borderRadius: "50%", background: "rgba(26,158,116,.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ color: "#5dcaa5", fontSize: 9, fontWeight: 700 }}>✓</span>
                    </div>
                    {f}
                  </div>
                ))}
              </div>
              <button
                onClick={() => {
                  const el = document.getElementById("kontakt-modal");
                  const pkg = document.getElementById("kontakt-paket");
                  if (el) el.style.display = "flex";
                  if (pkg) pkg.textContent = "Pro";
                }}
                style={{ width: "100%", padding: "12px 20px", borderRadius: 8, fontSize: 13, fontWeight: 500, cursor: "pointer", border: "none", background: "#1a9e74", color: "#fff", fontFamily: "sans-serif" }}
                onMouseEnter={e => { e.currentTarget.style.background = "#0d6e52"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#1a9e74"; }}
              >
                Kontakta oss →
              </button>
            </div>

            {/* Enterprise */}
            <div style={{ background: "#fff", border: "1px solid #dde8e2", borderRadius: 16, padding: 28, display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 11, fontWeight: 500, color: "#8aa396", textTransform: "uppercase", letterSpacing: 1, fontFamily: "monospace", marginBottom: 12 }}>Enterprise</div>
              <div style={{ fontFamily: "Georgia, serif", fontSize: 28, fontWeight: 300, color: "#0c1510", letterSpacing: -0.8, marginBottom: 6 }}>Skräddarsytt</div>
              <div style={{ fontSize: 14, color: "#556b5e", marginBottom: 24, fontFamily: "sans-serif", fontWeight: 300, lineHeight: 1.5 }}>För större byråer, banker och bolag med komplexa behov, ESEF-krav och många rapporter per år.</div>
              <div style={{ height: 1, background: "#dde8e2", marginBottom: 24 }} />
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32, flex: 1 }}>
                {["Obegränsat antal klienter", "Alla mallar + skräddarsydda mallar", "Excel-datakoppling med API", "Alla exportformat inkl. ESEF", "Dedikerad kundansvarig", "AI-insikter och benchmarking", "SSO och avancerad användarhantering", "SLA och dedikerad support", "Onboarding och migrationshjälp"].map((f, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "#2a3d32", fontFamily: "sans-serif" }}>
                    <div style={{ width: 16, height: 16, borderRadius: "50%", background: "#e0f5ee", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ color: "#0d6e52", fontSize: 9, fontWeight: 700 }}>✓</span>
                    </div>
                    {f}
                  </div>
                ))}
              </div>
              <button
                onClick={() => {
                  const el = document.getElementById("kontakt-modal");
                  const pkg = document.getElementById("kontakt-paket");
                  if (el) el.style.display = "flex";
                  if (pkg) pkg.textContent = "Enterprise";
                }}
                style={{ width: "100%", padding: "12px 20px", borderRadius: 8, fontSize: 13, fontWeight: 500, cursor: "pointer", border: "1px solid #c5d9d0", background: "#fff", color: "#0c1510", fontFamily: "sans-serif" }}
                onMouseEnter={e => { e.currentTarget.style.background = "#f5f7f5"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#fff"; }}
              >
                Kontakta oss →
              </button>
            </div>

          </div>

          {/* FAQ */}
          <div style={{ background: "#f5f7f5", border: "1px solid #dde8e2", borderRadius: 16, padding: "28px 32px" }}>
            <div style={{ fontSize: 14, fontWeight: 500, color: "#0c1510", marginBottom: 20 }}>Vanliga frågor</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              {[
                { q: "Hur lång är bindningstiden?", a: "Inga bindningstider. Du kan avsluta när du vill. Vi tror på att hålla kunder via värde, inte kontrakt." },
                { q: "Kan vi testa innan vi bestämmer oss?", a: "Ja. Vi erbjuder en guidad demo och en pilotperiod för nya kunder. Kontakta oss så sätter vi upp det." },
                { q: "Ingår ESEF i alla paket?", a: "ESEF/iXBRL-export ingår i Pro och Enterprise. Starter-kunder kan lägga till det som tillval." },
                { q: "Kan vi använda vårt eget varumärke?", a: "Ja, vit etikett ingår i Pro och Enterprise. Klienterna ser ert varumärke, inte Finio." },
              ].map((faq, i) => (
                <div key={i}>
                  <div style={{ fontSize: 13, fontWeight: 500, color: "#0c1510", marginBottom: 5, fontFamily: "sans-serif" }}>{faq.q}</div>
                  <div style={{ fontSize: 13, color: "#556b5e", lineHeight: 1.6, fontFamily: "sans-serif", fontWeight: 300 }}>{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* KONTAKT MODAL */}
        <div
          id="kontakt-modal"
          style={{ display: "none", position: "fixed", inset: 0, background: "rgba(12,21,16,.6)", zIndex: 1000, alignItems: "center", justifyContent: "center", padding: 24 }}
          onClick={e => { if (e.target === e.currentTarget) { const el = document.getElementById("kontakt-modal"); if (el) el.style.display = "none"; } }}
        >
          <div style={{ background: "#fff", borderRadius: 20, padding: 36, maxWidth: 480, width: "100%", position: "relative" }}>
            <button
              onClick={() => { const el = document.getElementById("kontakt-modal"); if (el) el.style.display = "none"; }}
              style={{ position: "absolute", top: 16, right: 16, background: "none", border: "none", fontSize: 18, cursor: "pointer", color: "#8aa396", lineHeight: 1 }}
            >✕</button>
            <div style={{ fontSize: 11, fontWeight: 500, color: "#1a9e74", textTransform: "uppercase", letterSpacing: 1, fontFamily: "monospace", marginBottom: 8 }}>Kom igång</div>
            <div style={{ fontFamily: "Georgia, serif", fontSize: 24, fontWeight: 300, color: "#0c1510", letterSpacing: -0.5, marginBottom: 6 }}>Kontakta oss</div>
            <div style={{ fontSize: 13, color: "#556b5e", marginBottom: 24, fontFamily: "sans-serif", fontWeight: 300 }}>
              Du har valt paketet <strong id="kontakt-paket" style={{ color: "#0c1510" }}>Pro</strong>. Fyll i dina uppgifter så hör vi av oss inom en arbetsdag.
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[{ id: "k-namn", label: "Ditt namn", type: "text", placeholder: "Anna Johansson" }, { id: "k-bolag", label: "Bolag", type: "text", placeholder: "Bergström Kapital AB" }, { id: "k-email", label: "E-postadress", type: "email", placeholder: "anna@bergstrom.se" }, { id: "k-tel", label: "Telefonnummer (valfritt)", type: "tel", placeholder: "+46 70 123 45 67" }].map((f) => (
                <div key={f.id}>
                  <label style={{ fontSize: 12, fontWeight: 500, color: "#2a3d32", display: "block", marginBottom: 5, fontFamily: "sans-serif" }}>{f.label}</label>
                  <input id={f.id} type={f.type} placeholder={f.placeholder} style={{ width: "100%", padding: "10px 14px", borderRadius: 8, border: "1px solid #dde8e2", fontSize: 13, fontFamily: "sans-serif", color: "#0c1510", outline: "none" }}
                    onFocus={e => { e.currentTarget.style.borderColor = "#1a9e74"; }}
                    onBlur={e => { e.currentTarget.style.borderColor = "#dde8e2"; }}
                  />
                </div>
              ))}
              <div>
                <label style={{ fontSize: 12, fontWeight: 500, color: "#2a3d32", display: "block", marginBottom: 5, fontFamily: "sans-serif" }}>Berätta kort om era behov</label>
                <textarea placeholder="Hur många klienter har ni? Vilka rapporttyper producerar ni?" rows={3} style={{ width: "100%", padding: "10px 14px", borderRadius: 8, border: "1px solid #dde8e2", fontSize: 13, fontFamily: "sans-serif", color: "#0c1510", outline: "none", resize: "none" }}
                  onFocus={e => { e.currentTarget.style.borderColor = "#1a9e74"; }}
                  onBlur={e => { e.currentTarget.style.borderColor = "#dde8e2"; }}
                />
              </div>
              <button
                onClick={() => {
                  const el = document.getElementById("kontakt-modal");
                  const tack = document.getElementById("kontakt-tack");
                  const form = document.getElementById("kontakt-form");
                  if (form) form.style.display = "none";
                  if (tack) tack.style.display = "block";
                  setTimeout(() => { if (el) el.style.display = "none"; if (form) form.style.display = "flex"; if (tack) tack.style.display = "none"; }, 3000);
                }}
                style={{ width: "100%", padding: "13px 20px", borderRadius: 8, fontSize: 13, fontWeight: 500, cursor: "pointer", border: "none", background: "#1a9e74", color: "#fff", fontFamily: "sans-serif", marginTop: 4 }}
                onMouseEnter={e => { e.currentTarget.style.background = "#0d6e52"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#1a9e74"; }}
              >
                Skicka →
              </button>
            </div>
            <div id="kontakt-tack" style={{ display: "none", textAlign: "center", padding: "20px 0" }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>✓</div>
              <div style={{ fontSize: 16, fontWeight: 500, color: "#0c1510", marginBottom: 6, fontFamily: "Georgia, serif" }}>Tack – vi hör av oss!</div>
              <div style={{ fontSize: 13, color: "#556b5e", fontFamily: "sans-serif" }}>Vi återkommer inom en arbetsdag.</div>
            </div>
          </div>
        </div>
{/* PROBLEM */}
        <section style={{ background: "#0c1510", padding: "80px 48px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 500, color: "#5dcaa5", textTransform: "uppercase", letterSpacing: 1, marginBottom: 10, fontFamily: "monospace" }}>Problemet vi löser</div>
              <h2 style={{ fontSize: "clamp(26px,3.5vw,38px)", fontWeight: 300, color: "#fff", letterSpacing: -1, lineHeight: 1.2, marginBottom: 14 }}>Finansiell rapportering är onödigt svårt.</h2>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,.45)", lineHeight: 1.7, fontFamily: "sans-serif", fontWeight: 300 }}>Idag tar en kvartalsrapport veckor och kostar hundratusentals kronor. Det behöver det inte göra.</p>
            </div>
            <div>
              {[
                { label: "Innan Finio", color: "#e07070", text: "Excel → designer → InDesign → PDF → mejl till 8 personer → kommentarer i 4 separata trådar → ny version → upprepa 6 gånger → 3 veckor senare, klar." },
                { label: "Med Finio", color: "#5dcaa5", text: "Excel kopplas → mall väljs → granskare bjuds in → alla godkänner i samma verktyg → PDF exporteras. Klart på dagar, inte veckor." },
              ].map((b, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 10, padding: 16, marginBottom: 10 }}>
                  <div style={{ fontSize: 10, fontFamily: "monospace", textTransform: "uppercase", letterSpacing: .5, marginBottom: 7, color: b.color }}>{b.label}</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,.65)", lineHeight: 1.6, fontFamily: "sans-serif" }}>{b.text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "80px 48px", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(30px,5vw,50px)", fontWeight: 300, letterSpacing: -1, lineHeight: 1.2, marginBottom: 14, color: "#0c1510" }}>
            Redo att se hur<br /><em style={{ color: "#0d6e52" }}>Finio fungerar?</em>
          </h2>
          <p style={{ fontSize: 15, color: "#556b5e", marginBottom: 34, fontFamily: "sans-serif", fontWeight: 300 }}>Gå igenom hela flödet interaktivt – från Excel-import till färdig rapport.</p>
          <button onClick={() => setView("app")} style={{ background: "#1a9e74", color: "#fff", padding: "14px 28px", borderRadius: 6, fontSize: 14, fontWeight: 500, border: "none", cursor: "pointer", fontFamily: "sans-serif" }}>Starta den interaktiva demon →</button>
        </section>

        <footer style={{ borderTop: "1px solid #dde8e2", padding: "24px 48px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontSize: 16, color: "#0d6e52" }}>finio</div>
          <div style={{ fontSize: 12, color: "#8aa396", fontFamily: "sans-serif" }}>© 2025 Flipp Marketing AB · Konfidentiell demo</div>
        </footer>
      </div>
    );
  }

  // APP VIEW
  return (
    <div style={{ fontFamily: "sans-serif", background: "#f5f7f5", minHeight: "100vh" }}>
      {/* TOPBAR */}
      <div style={{ background: "#fff", borderBottom: "1px solid #dde8e2", padding: "0 28px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 54, position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "Georgia, serif" }}>
          <span style={{ fontSize: 18, color: "#0d6e52" }}>finio</span>
          <div style={{ width: 1, height: 16, background: "#dde8e2" }} />
          <span style={{ fontSize: 13, color: "#556b5e", fontFamily: "sans-serif", fontWeight: 300 }}>Bergström Kapital AB</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <button onClick={() => setView("landing")} style={{ fontSize: 13, color: "#556b5e", cursor: "pointer", padding: "6px 12px", border: "1px solid #dde8e2", borderRadius: 6, background: "#fff", fontFamily: "sans-serif" }}>← Tillbaka</button>
          <div style={{ width: 30, height: 30, borderRadius: "50%", background: "#e0f5ee", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 500, color: "#0d6e52" }}>AJ</div>
        </div>
      </div>

      {/* STEPS */}
      <div style={{ background: "#fff", borderBottom: "1px solid #dde8e2", display: "flex", padding: "0 28px", overflowX: "auto" }}>
        {["Importera data", "Bygg rapport", "Granska", "Exportera"].map((s, i) => (
          <div key={i} onClick={() => setStep(i + 1)} style={{ padding: "14px 18px", fontSize: 13, color: step === i + 1 ? "#1a9e74" : "#8aa396", cursor: "pointer", borderBottom: step === i + 1 ? "2px solid #1a9e74" : "2px solid transparent", fontWeight: step === i + 1 ? 500 : 400, display: "flex", alignItems: "center", gap: 8, whiteSpace: "nowrap" }}>
            <div style={{ width: 20, height: 20, borderRadius: "50%", background: step === i + 1 || step > i + 1 ? "#e0f5ee" : "#f5f7f5", color: step === i + 1 || step > i + 1 ? "#0d6e52" : "#8aa396", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 500 }}>{i + 1}</div>
            {s}
          </div>
        ))}
      </div>

      <div style={{ padding: "26px 22px", maxWidth: 960, margin: "0 auto", width: "100%" }}>

        {/* STEP 1 */}
        {step === 1 && (
          <div>
            <div style={{ background: "#fff", border: "1px solid #dde8e2", borderRadius: 16, padding: "20px 22px", marginBottom: 12 }}>
              <div style={{ fontSize: 15, fontWeight: 500, color: "#0c1510", marginBottom: 3 }}>Importera Excel-data</div>
              <div style={{ fontSize: 13, color: "#556b5e", marginBottom: 18, lineHeight: 1.5 }}>Koppla klientens Excel-fil – siffror synkas automatiskt och uppdateras vid varje ändring.</div>
              <div onClick={() => setUploaded(true)} style={{ border: "1.5px dashed #c5d9d0", borderRadius: 10, padding: 36, textAlign: "center", cursor: "pointer", background: uploaded ? "#e0f5ee" : "#fff" }}>
                <div style={{ width: 42, height: 42, margin: "0 auto 12px", background: "#e0f5ee", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>📄</div>
                <div style={{ fontSize: 14, color: "#556b5e" }}><strong style={{ color: "#0c1510" }}>Klicka för att ladda upp</strong> eller dra och släpp</div>
                <div style={{ fontSize: 12, color: "#8aa396", marginTop: 4 }}>.xlsx, .xls · Max 25 MB</div>
              </div>
              {uploaded && (
                <div style={{ display: "flex", alignItems: "center", gap: 11, padding: "11px 15px", background: "#f5f7f5", borderRadius: 6, fontSize: 13, border: "1px solid #dde8e2", marginTop: 11 }}>
                  <div style={{ width: 30, height: 30, background: "#eaf3de", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 600, color: "#3b6d11", fontFamily: "monospace" }}>XLS</div>
                  <div style={{ flex: 1, fontWeight: 500 }}>Bergstrom_Kapital_Q2_2025.xlsx</div>
                  <div style={{ color: "#8aa396", fontSize: 12, fontFamily: "monospace" }}>142 KB</div>
                  <span style={{ background: "#e0f5ee", color: "#0d6e52", padding: "3px 9px", borderRadius: 20, fontSize: 11, fontWeight: 500 }}>Importerad</span>
                </div>
              )}
            </div>
            {uploaded && (
              <div style={{ background: "#fff", border: "1px solid #dde8e2", borderRadius: 16, padding: "20px 22px", marginBottom: 12 }}>
                <div style={{ fontSize: 15, fontWeight: 500, color: "#0c1510", marginBottom: 3 }}>Identifierade nyckeltal</div>
                <div style={{ fontSize: 13, color: "#556b5e", marginBottom: 18 }}>Finio analyserade filen och hittade följande finansiella data automatiskt.</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 9 }}>
                  {[{ l: "Nettoomsättning", v: "84,2 MSEK", c: "+12,4% vs Q1 2025", up: true }, { l: "EBITDA", v: "18,6 MSEK", c: "+8,1% vs Q1 2025", up: true }, { l: "Rörelsemarginal", v: "22,1%", c: "-0,8pp vs Q1 2025", up: false }, { l: "Kassaflöde", v: "11,3 MSEK", c: "+3,2% vs Q1 2025", up: true }].map((d, i) => (
                    <div key={i} style={{ background: "#f5f7f5", borderRadius: 6, padding: 13, border: "1px solid #dde8e2" }}>
                      <div style={{ fontSize: 10, color: "#8aa396", marginBottom: 4, textTransform: "uppercase", letterSpacing: .5, fontFamily: "monospace" }}>{d.l}</div>
                      <div style={{ fontSize: 21, fontWeight: 500, color: "#0c1510", letterSpacing: -.5 }}>{d.v}</div>
                      <div style={{ fontSize: 12, marginTop: 3, fontFamily: "monospace", color: d.up ? "#1a9e74" : "#c0392b" }}>{d.c}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 20 }}>
              {uploaded && <button onClick={() => setStep(2)} style={{ background: "#1a9e74", color: "#fff", padding: "9px 18px", borderRadius: 6, fontSize: 13, fontWeight: 500, border: "none", cursor: "pointer" }}>Fortsätt till rapport →</button>}
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div>
            <div style={{ background: "#fff", border: "1px solid #dde8e2", borderRadius: 16, padding: "20px 22px", marginBottom: 12 }}>
              <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 3 }}>Välj designmall</div>
              <div style={{ fontSize: 13, color: "#556b5e", marginBottom: 18 }}>Sex professionella mallar – klientens grafiska profil appliceras automatiskt.</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}>
                {templates.map((t, i) => (
                  <div key={i} onClick={() => setSelectedTemplate(i)} style={{ border: selectedTemplate === i ? "2px solid #1a9e74" : "1.5px solid #dde8e2", borderRadius: 10, padding: 14, cursor: "pointer", background: selectedTemplate === i ? "#e0f5ee" : "#fff" }}>
                    <div style={{ height: 70, background: i === 0 || i === 4 ? "#0c1510" : i === 2 ? "#1a9e74" : "#f5f7f5", borderRadius: 6, marginBottom: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <div style={{ fontSize: 11, color: i === 0 || i === 2 || i === 4 ? "rgba(255,255,255,.6)" : "#556b5e", fontFamily: "Georgia, serif", fontStyle: "italic" }}>Q2 2025</div>
                    </div>
                    <div style={{ fontSize: 13, fontWeight: 500, color: "#0c1510" }}>{t.name}</div>
                    <div style={{ fontSize: 11, color: "#556b5e", marginTop: 2 }}>{t.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: "#fff", border: "1px solid #dde8e2", borderRadius: 16, padding: "20px 22px", marginBottom: 12 }}>
              <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 3 }}>Rapportstruktur och förhandsgranskning</div>
              <div style={{ fontSize: 13, color: "#556b5e", marginBottom: 16 }}>Klicka på en sida för att se den i realtid.</div>
              <div style={{ display: "grid", gridTemplateColumns: "165px 1fr", gap: 11 }}>
                {/* Sidebar */}
                <div style={{ background: "#fff", border: "1px solid #dde8e2", borderRadius: 10, padding: 13 }}>
                  <div style={{ fontSize: 10, fontWeight: 500, color: "#8aa396", marginBottom: 10, textTransform: "uppercase", letterSpacing: .6, fontFamily: "monospace" }}>Sidor</div>
                  {reportPages.map((p, i) => (
                    <div key={i} onClick={() => setReportPage(i)} style={{ display: "flex", alignItems: "center", gap: 7, padding: "7px 8px", borderRadius: 6, fontSize: 12, color: reportPage === i ? "#0d6e52" : "#556b5e", background: reportPage === i ? "#e0f5ee" : "transparent", cursor: "pointer", fontWeight: reportPage === i ? 500 : 400, marginBottom: 2 }}>
                      <div style={{ width: 5, height: 5, borderRadius: "50%", background: reportPage === i ? "#1a9e74" : "#c5d9d0", flexShrink: 0 }} />
                      {p}
                    </div>
                  ))}
                  <div style={{ fontSize: 12, color: "#1a9e74", cursor: "pointer", padding: "7px 8px", marginTop: 4 }}>+ Lägg till sida</div>
                </div>

                {/* Report preview */}
                <div style={{ background: "#fff", border: "1px solid #dde8e2", borderRadius: 10, overflow: "hidden" }}>
                  <div style={{ background: "#f5f7f5", padding: "8px 14px", borderBottom: "1px solid #dde8e2", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", gap: 4 }}>
                      {reportPages.map((_, i) => (
                        <div key={i} onClick={() => setReportPage(i)} style={{ width: 24, height: 24, borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 11, fontWeight: 500, background: reportPage === i ? "#1a9e74" : "#fff", color: reportPage === i ? "#fff" : "#556b5e", border: "1px solid #dde8e2", fontFamily: "monospace" }}>{i + 1}</div>
                      ))}
                    </div>
                    <div style={{ fontSize: 11, color: "#8aa396", fontFamily: "monospace" }}>{reportPages[reportPage]} · {reportPage + 1} av 4</div>
                  </div>

                  {/* Cover page */}
                  {reportPage === 0 && (
                    <div>
                      <div style={{ background: "#0c1510", padding: "24px 24px 20px", minHeight: 280, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <div style={{ width: 32, height: 32, background: "#1a9e74", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 600, color: "#fff", fontFamily: "monospace" }}>BK</div>
                          <div>
                            <div style={{ fontSize: 14, color: "#fff", fontFamily: "Georgia, serif", fontWeight: 300 }}>Bergström Kapital AB</div>
                            <div style={{ fontSize: 10, color: "rgba(255,255,255,.35)", fontFamily: "monospace" }}>Org.nr 556789-1234</div>
                          </div>
                        </div>
                        <div>
                          <div style={{ display: "inline-block", background: "rgba(26,158,116,.2)", color: "#5dcaa5", fontSize: 10, padding: "4px 10px", borderRadius: 20, marginBottom: 12, fontFamily: "monospace", border: "1px solid rgba(93,202,165,.2)" }}>Delårsrapport · Januari–Juni 2025</div>
                          <div style={{ fontSize: 34, fontWeight: 300, color: "#fff", letterSpacing: -1.2, lineHeight: 1.1, marginBottom: 6, fontFamily: "Georgia, serif" }}>Kvartal<br /><em style={{ color: "#5dcaa5" }}>två, 2025</em></div>
                          <div style={{ fontSize: 12, color: "rgba(255,255,255,.4)" }}>Finansiell rapport och verksamhetsöversikt</div>
                        </div>
                        <div style={{ display: "flex", gap: 24 }}>
                          {[["Rapportdatum", "18 juli 2025"], ["Rapportperiod", "2025-01-01 – 2025-06-30"], ["Valuta", "SEK (tusental)"]].map(([l, v], i) => (
                            <div key={i}>
                              <div style={{ fontSize: 9, color: "rgba(255,255,255,.3)", textTransform: "uppercase", letterSpacing: .7, fontFamily: "monospace", marginBottom: 3 }}>{l}</div>
                              <div style={{ fontSize: 12, color: "rgba(255,255,255,.7)", fontFamily: "monospace" }}>{v}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div style={{ background: "#1a9e74", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", gap: 32 }}>
                          {[["Nettoomsättning", "84,2 MSEK", "+12,4% vs Q2 2024"], ["EBITDA", "18,6 MSEK", "+8,1% vs Q2 2024"], ["Rörelsemarginal", "22,1%", "-0,8pp vs Q2 2024"], ["Kassaflöde", "11,3 MSEK", "+3,2% vs Q2 2024"]].map(([l, v, c], i) => (
                            <div key={i}>
                              <div style={{ fontSize: 9, color: "rgba(255,255,255,.65)", textTransform: "uppercase", letterSpacing: .5, fontFamily: "monospace", marginBottom: 3 }}>{l}</div>
                              <div style={{ fontSize: 16, fontWeight: 500, color: "#fff", letterSpacing: -.3 }}>{v}</div>
                              <div style={{ fontSize: 10, color: "rgba(255,255,255,.65)", fontFamily: "monospace", marginTop: 1 }}>{c}</div>
                            </div>
                          ))}
                        </div>
                        <div style={{ fontSize: 10, color: "rgba(255,255,255,.4)", fontStyle: "italic" }}>Framåtblickande info – se not 1</div>
                      </div>
                    </div>
                  )}

                  {/* CEO page */}
                  {reportPage === 1 && (
                    <div style={{ padding: "20px 22px" }}>
                      <div style={{ fontSize: 9, fontWeight: 500, color: "#1a9e74", textTransform: "uppercase", letterSpacing: .8, marginBottom: 6, fontFamily: "monospace" }}>VD har ordet</div>
                      <div style={{ fontSize: 20, fontWeight: 300, color: "#0c1510", letterSpacing: -.5, lineHeight: 1.2, marginBottom: 14, fontFamily: "Georgia, serif" }}>Ett kvartal av<br /><em style={{ color: "#0d6e52" }}>stark tillväxt</em></div>
                      <div style={{ fontSize: 13, fontWeight: 300, color: "#2a3d32", lineHeight: 1.7, marginBottom: 12, fontFamily: "Georgia, serif", letterSpacing: -.2 }}>Vi levererar vårt starkaste kvartal hittills med en omsättningstillväxt om 12,4 procent och ett EBITDA som överstiger våra interna prognoser.</div>
                      <div style={{ fontSize: 12, color: "#556b5e", lineHeight: 1.8, marginBottom: 10 }}>Under det andra kvartalet 2025 fortsatte Bergström Kapital att exekvera på vår tillväxtstrategi med fokus på tre prioriterade segment: institutionell kapitalförvaltning, alternativa investeringar och rådgivningstjänster.</div>
                      <div style={{ background: "#e0f5ee", borderLeft: "3px solid #1a9e74", padding: "12px 16px", margin: "14px 0" }}>
                        <div style={{ fontSize: 12, color: "#0d6e52", lineHeight: 1.6, fontStyle: "italic", fontFamily: "Georgia, serif" }}>"Vår förmåga att attrahera och behålla kvalificerade klienter bekräftar styrkan i vår affärsmodell."</div>
                      </div>
                      <div style={{ marginTop: 20, paddingTop: 14, borderTop: "1px solid #dde8e2" }}>
                        <div style={{ fontSize: 12, fontWeight: 500, color: "#0c1510" }}>Marcus Rydén</div>
                        <div style={{ fontSize: 11, color: "#556b5e", marginTop: 2 }}>Verkställande direktör, Bergström Kapital AB</div>
                      </div>
                    </div>
                  )}

                  {/* Financial data page */}
                  {reportPage === 2 && (
                    <div style={{ padding: "20px 22px" }}>
                      <div style={{ fontSize: 9, fontWeight: 500, color: "#1a9e74", textTransform: "uppercase", letterSpacing: .8, marginBottom: 6, fontFamily: "monospace" }}>Finansiell översikt</div>
                      <div style={{ fontSize: 18, fontWeight: 300, color: "#0c1510", letterSpacing: -.5, marginBottom: 14, fontFamily: "Georgia, serif" }}>Nyckeltal Q2 2025</div>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8, marginBottom: 16 }}>
                        {[{ l: "Nettoomsättning", v: "84 247", c: "+12,4% YoY", hi: true }, { l: "EBITDA", v: "18 621", c: "+8,1% YoY" }, { l: "Rörelsemarginal", v: "22,1%", c: "-0,8pp YoY", dn: true }, { l: "Kassaflöde", v: "11 340", c: "+3,2% YoY" }].map((k, i) => (
                          <div key={i} style={{ background: k.hi ? "#0c1510" : "#f5f7f5", borderRadius: 6, padding: 11, border: "1px solid #dde8e2" }}>
                            <div style={{ fontSize: 8, color: k.hi ? "rgba(255,255,255,.35)" : "#8aa396", textTransform: "uppercase", letterSpacing: .4, marginBottom: 5, fontFamily: "monospace" }}>{k.l}</div>
                            <div style={{ fontSize: 14, fontWeight: 500, color: k.hi ? "#fff" : "#0c1510", letterSpacing: -.3 }}>{k.v}</div>
                            <div style={{ fontSize: 10, marginTop: 3, fontFamily: "monospace", color: k.hi ? "#5dcaa5" : k.dn ? "#c0392b" : "#1a9e74" }}>{k.c}</div>
                          </div>
                        ))}
                      </div>
                      <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 60, background: "#f5f7f5", borderRadius: 6, padding: 8, border: "1px solid #dde8e2", marginBottom: 12 }}>
                        {[48, 58, 52, 65, 73, 88].map((h, i) => (
                          <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: "2px 2px 0 0", background: i >= 4 ? "#1a9e74" : "#c0dd97" }} />
                        ))}
                      </div>
                      <div style={{ fontSize: 9, color: "#8aa396", fontFamily: "monospace", marginBottom: 12 }}>Omsättning per kvartal Q1 2024–Q2 2025, TSEK</div>
                      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11 }}>
                        <thead><tr style={{ background: "#0c1510" }}><th style={{ padding: "8px 11px", textAlign: "left", color: "rgba(255,255,255,.7)", fontSize: 9, fontFamily: "monospace", textTransform: "uppercase" }}>Post</th><th style={{ padding: "8px 11px", textAlign: "right", color: "rgba(255,255,255,.7)", fontSize: 9, fontFamily: "monospace" }}>Q2 2025</th><th style={{ padding: "8px 11px", textAlign: "right", color: "rgba(255,255,255,.7)", fontSize: 9, fontFamily: "monospace" }}>Q2 2024</th><th style={{ padding: "8px 11px", textAlign: "right", color: "rgba(255,255,255,.7)", fontSize: 9, fontFamily: "monospace" }}>Δ%</th></tr></thead>
                        <tbody>
                          {[["Kapitalförvaltning", "39 596", "34 820", "+13,7%", true], ["Rådgivningsarvoden", "26 117", "22 004", "+18,7%", true], ["Alternativa inv.", "18 534", "17 254", "+7,4%", true], ["Nettoomsättning", "84 247", "74 978", "+12,4%", true, true], ["Personal och förmåner", "38 124", "32 456", "+17,5%", false], ["Teknologi och system", "8 234", "6 890", "+19,5%", false], ["EBITDA", "18 621", "17 228", "+8,1%", true, true]].map(([p, v1, v2, c, pos, bold], i) => (
                            <tr key={i} style={{ borderBottom: "1px solid #dde8e2", background: bold ? "#e0f5ee" : i % 2 === 0 ? "#fff" : "#f5f7f5" }}>
                              <td style={{ padding: "7px 11px", fontWeight: bold ? 500 : 400 }}>{p}</td>
                              <td style={{ padding: "7px 11px", textAlign: "right", fontFamily: "monospace" }}>{v1}</td>
                              <td style={{ padding: "7px 11px", textAlign: "right", fontFamily: "monospace", color: "#8aa396" }}>{v2}</td>
                              <td style={{ padding: "7px 11px", textAlign: "right", fontFamily: "monospace", color: pos ? "#1a9e74" : "#c0392b" }}>{c}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Outlook page */}
                  {reportPage === 3 && (
                    <div style={{ padding: "20px 22px" }}>
                      <div style={{ fontSize: 9, fontWeight: 500, color: "#1a9e74", textTransform: "uppercase", letterSpacing: .8, marginBottom: 6, fontFamily: "monospace" }}>Utsikter</div>
                      <div style={{ fontSize: 18, fontWeight: 300, color: "#0c1510", letterSpacing: -.5, marginBottom: 14, fontFamily: "Georgia, serif" }}>Guidning och strategisk agenda</div>
                      <div style={{ background: "#0c1510", borderRadius: 6, padding: 16, marginBottom: 14 }}>
                        <div style={{ fontSize: 13, color: "#fff", marginBottom: 12, fontFamily: "Georgia, serif", fontWeight: 300, letterSpacing: -.2 }}>Uppdaterad helårsguidning 2025</div>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}>
                          {[["Nettoomsättning", "315–330 MSEK", "Oförändrad"], ["EBITDA-marginal", "21–23%", "Oförändrad"], ["Tillväxt YoY", "10–14%", "Justerad upp +1pp"]].map(([l, v, r], i) => (
                            <div key={i}>
                              <div style={{ fontSize: 9, color: "rgba(255,255,255,.35)", fontFamily: "monospace", textTransform: "uppercase", marginBottom: 4 }}>{l}</div>
                              <div style={{ fontSize: 14, fontWeight: 500, color: "#fff", letterSpacing: -.3 }}>{v}</div>
                              <div style={{ fontSize: 10, color: "#5dcaa5", fontFamily: "monospace", marginTop: 1 }}>{r}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div style={{ paddingLeft: 16, borderLeft: "2px solid #c5d9d0", marginTop: 4 }}>
                        {[["Augusti 2025", "Kapitalmarknadsdag", "Presentation av strategi och finansiella mål för 2026–2028."], ["September 2025", "Lansering BK Alternativ II", "Ny alternativ fond med fokus på nordisk infrastruktur. Målvolym 800 MSEK."], ["Oktober 2025", "Kvartalsrapport Q3 2025", "Delårsrapport för perioden juli–september 2025 publiceras."]].map(([d, t, desc], i) => (
                          <div key={i} style={{ marginBottom: 14, position: "relative" }}>
                            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#1a9e74", position: "absolute", left: -21, top: 3, border: "2px solid #fff", outline: "1.5px solid #1a9e74" }} />
                            <div style={{ fontSize: 9, color: "#1a9e74", fontFamily: "monospace", marginBottom: 2, fontWeight: 500 }}>{d}</div>
                            <div style={{ fontSize: 12, fontWeight: 500, color: "#0c1510", marginBottom: 2 }}>{t}</div>
                            <div style={{ fontSize: 11, color: "#556b5e", lineHeight: 1.5 }}>{desc}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 8, justifyContent: "flex-end", marginTop: 20 }}>
              <button onClick={() => setStep(1)} style={{ padding: "9px 18px", borderRadius: 6, fontSize: 13, fontWeight: 500, cursor: "pointer", border: "1px solid #c5d9d0", background: "#fff", color: "#0c1510" }}>← Tillbaka</button>
              <button onClick={() => setStep(3)} style={{ background: "#1a9e74", color: "#fff", padding: "9px 18px", borderRadius: 6, fontSize: 13, fontWeight: 500, border: "none", cursor: "pointer" }}>Skicka för granskning →</button>
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div>
            <div style={{ background: "#fff", border: "1px solid #dde8e2", borderRadius: 16, padding: "20px 22px", marginBottom: 12 }}>
              <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 3 }}>Granskning och godkännande</div>
              <div style={{ fontSize: 13, color: "#556b5e", marginBottom: 16 }}>Klicka på cirkeln för att markera som godkänd.</div>
              <div style={{ fontSize: 12, color: "#556b5e", marginBottom: 8, fontFamily: "monospace" }}>{approveCount} av 4 godkänt</div>
              <div style={{ height: 4, background: "#f5f7f5", borderRadius: 2, border: "1px solid #dde8e2", marginBottom: 14 }}>
                <div style={{ height: "100%", borderRadius: 2, background: "#1a9e74", width: `${approveCount / 4 * 100}%`, transition: "width .5s ease" }} />
              </div>
              {[{ id: 1, initials: "AJ", bg: "#e0f5ee", color: "#0d6e52", name: "Anna Johansson", role: "CFO · Ekonomidata och nyckeltal" }, { id: 2, initials: "MR", bg: "#e8f0fb", color: "#2563a8", name: "Marcus Rydén", role: "VD · VD-ord och strategisk riktning", comment: "Kan vi justera formuleringen på sidan 3? Vill tydligare betona tillväxtpotentialen i norra regionen inför Q3." }, { id: 3, initials: "LB", bg: "#fef3d8", color: "#a36800", name: "Lisa Bergström", role: "Styrelseordförande · Hela rapporten" }, { id: 4, initials: "EK", bg: "#f0ecfc", color: "#6d4fc2", name: "Erik Karlsson", role: "Auktoriserad revisor · Finansiell korrekthet" }].map((r) => (
                <div key={r.id} style={{ display: "flex", alignItems: "flex-start", gap: 11, padding: "13px 15px", background: "#fff", border: "1px solid #dde8e2", borderRadius: 10, marginBottom: 9 }}>
                  <div style={{ width: 34, height: 34, borderRadius: "50%", background: r.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 500, color: r.color, flexShrink: 0 }}>{r.initials}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 500, color: "#0c1510" }}>{r.name}</div>
                    <div style={{ fontSize: 11, color: "#556b5e", marginTop: 1 }}>{r.role}</div>
                    {r.comment && !approved[r.id] && (
                      <div style={{ marginTop: 8, background: "#fef3d8", padding: "8px 11px", fontSize: 12, color: "#a36800", borderLeft: "2px solid #e8960a", lineHeight: 1.5 }}>{r.comment}</div>
                    )}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0, marginTop: 2 }}>
                    <span style={{ background: approved[r.id] ? "#e0f5ee" : r.comment ? "#fef3d8" : "#f5f7f5", color: approved[r.id] ? "#0d6e52" : r.comment ? "#a36800" : "#556b5e", padding: "3px 9px", borderRadius: 20, fontSize: 11, fontWeight: 500, border: approved[r.id] || r.comment ? "none" : "1px solid #dde8e2" }}>{approved[r.id] ? "Godkänd" : r.comment ? "Kommenterat" : "Inväntar"}</span>
                    <div onClick={() => !approved[r.id] && setApproved(a => ({ ...a, [r.id]: true }))} style={{ width: 22, height: 22, borderRadius: "50%", background: approved[r.id] ? "#1a9e74" : "#fff", border: `1.5px solid ${approved[r.id] ? "#1a9e74" : "#c5d9d0"}`, display: "flex", alignItems: "center", justifyContent: "center", cursor: approved[r.id] ? "default" : "pointer" }}>
                      {approved[r.id] && <span style={{ color: "#fff", fontSize: 11, fontWeight: 700 }}>✓</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 8, justifyContent: "flex-end", marginTop: 20 }}>
              <button onClick={() => setStep(2)} style={{ padding: "9px 18px", borderRadius: 6, fontSize: 13, fontWeight: 500, cursor: "pointer", border: "1px solid #c5d9d0", background: "#fff", color: "#0c1510" }}>← Tillbaka</button>
              {allApproved && <button onClick={() => setStep(4)} style={{ background: "#1a9e74", color: "#fff", padding: "9px 18px", borderRadius: 6, fontSize: 13, fontWeight: 500, border: "none", cursor: "pointer" }}>Exportera rapport →</button>}
            </div>
          </div>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <div>
            <div style={{ background: "#fff", border: "1px solid #dde8e2", borderRadius: 16, padding: "20px 22px", marginBottom: 12 }}>
              <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 3 }}>Exportera och leverera</div>
              <div style={{ fontSize: 13, color: "#556b5e", marginBottom: 16 }}>Rapporten är låst och godkänd av samtliga granskare.</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 9 }}>
                {exportFormats.map((f, i) => (
                  <div key={i} onClick={() => setSelectedExport(i)} style={{ border: selectedExport === i ? "2px solid #1a9e74" : "1.5px solid #dde8e2", borderRadius: 10, padding: 16, cursor: "pointer", background: selectedExport === i ? "#e0f5ee" : "#fff" }}>
                    <div style={{ width: 34, height: 34, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 8, fontSize: 11, fontWeight: 700, fontFamily: "monospace", background: i === 0 ? "#fcecea" : i === 1 ? "#e8f0fb" : i === 2 ? "#f0ecfc" : "#e0f5ee", color: i === 0 ? "#c0392b" : i === 1 ? "#2563a8" : i === 2 ? "#6d4fc2" : "#0d6e52" }}>{f.label}</div>
                    <div style={{ fontSize: 13, fontWeight: 500, color: "#0c1510" }}>{f.name}</div>
                    <div style={{ fontSize: 11, color: "#556b5e", marginTop: 2, lineHeight: 1.4 }}>{f.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            {exported && (
              <div style={{ background: "#e0f5ee", border: "1px solid #5dcaa5", borderRadius: 16, padding: 28, textAlign: "center", marginBottom: 12 }}>
                <div style={{ width: 48, height: 48, background: "#1a9e74", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px", fontSize: 22 }}>✓</div>
                <div style={{ fontSize: 15, fontWeight: 500, color: "#084d39", marginBottom: 4 }}>Rapporten är levererad!</div>
                <div style={{ fontSize: 13, color: "#0d6e52", lineHeight: 1.6 }}>Bergstrom_Kapital_Q2_2025.pdf skickades till klienten.<br />2,4 MB · Sparad i arkivet · Versionshistorik bevarad</div>
              </div>
            )}
            <div style={{ display: "flex", gap: 8, justifyContent: "flex-end", marginTop: 20 }}>
              <button onClick={() => setStep(3)} style={{ padding: "9px 18px", borderRadius: 6, fontSize: 13, fontWeight: 500, cursor: "pointer", border: "1px solid #c5d9d0", background: "#fff", color: "#0c1510" }}>← Tillbaka</button>
              <button onClick={() => setExported(true)} style={{ background: "#1a9e74", color: "#fff", padding: "9px 18px", borderRadius: 6, fontSize: 13, fontWeight: 500, border: "none", cursor: "pointer" }}>Exportera och leverera →</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
