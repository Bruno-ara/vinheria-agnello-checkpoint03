// ============================================================
// ADEGA - Gerenciamento de Estoque de Vinhos
// ============================================================

// 1. Array de objetos representando os vinhos
const vinhos = [
  { nome: "Château Margaux",    tipo: "tinto",  safra: 2018, estoque: 12 },
  { nome: "Sauvignon Blanc",    tipo: "branco", safra: 2021, estoque: 3  },
  { nome: "Rosé de Provence",   tipo: "rosé",   safra: 2022, estoque: 7  },
  { nome: "Malbec Reserva",     tipo: "tinto",  safra: 2019, estoque: 2  },
  { nome: "Chardonnay Oaked",   tipo: "branco", safra: 2020, estoque: 15 },
  { nome: "Pinot Noir Clásico", tipo: "tinto",  safra: 2017, estoque: 4  },
];

// ============================================================
// 2. FUNÇÕES
// ============================================================

// Adicionar novo vinho ao array
function adicionarVinho(nome, tipo, safra, estoque) {
  const novoVinho = { nome, tipo, safra, estoque };
  vinhos.push(novoVinho);
  console.log(`✅ Vinho adicionado: ${nome} (${tipo}, ${safra}) — Estoque: ${estoque}`);
}

// Listar todos os vinhos com forEach
function listarVinhos() {
  console.log("\n📋 ===== LISTA COMPLETA DE VINHOS =====");
  vinhos.forEach((vinho, index) => {
    console.log(
      `[${index + 1}] ${vinho.nome} | Tipo: ${vinho.tipo} | Safra: ${vinho.safra} | Estoque: ${vinho.estoque} unidades`
    );
  });
}

// Vinhos com estoque baixo (abaixo de 5) usando filter
function vinhosBaixoEstoque(limite = 5) {
  const criticos = vinhos.filter((vinho) => vinho.estoque < limite);

  console.log(`\n⚠️  ===== VINHOS COM ESTOQUE ABAIXO DE ${limite} =====`);
  if (criticos.length === 0) {
    console.log("Nenhum vinho com estoque crítico.");
  } else {
    criticos.forEach((vinho) => {
      console.log(
        `⛔ ${vinho.nome} — Estoque: ${vinho.estoque} unidades (repor com urgência)`
      );
    });
  }
  return criticos;
}

// Estoque total com reduce
function calcularEstoqueTotal() {
  const total = vinhos.reduce((acumulador, vinho) => acumulador + vinho.estoque, 0);
  console.log(`\n📦 ===== ESTOQUE TOTAL DA ADEGA =====`);
  console.log(`Total: ${total} unidades em estoque`);
  return total;
}

// Nomes dos vinhos em caixa alta com map
function nomesEmCaixaAlta() {
  const nomes = vinhos.map((vinho) => vinho.nome.toUpperCase());
  console.log(`\n🔠 ===== NOMES DOS VINHOS EM CAIXA ALTA =====`);
  nomes.forEach((nome) => console.log(`  → ${nome}`));
  return nomes;
}

// ============================================================
// 3. EXECUÇÃO — adicionando um vinho extra e rodando tudo
// ============================================================

// Adiciona um novo vinho ao array antes de exibir os relatórios
adicionarVinho("Tempranillo Rioja", "tinto", 2016, 1);

// Exibe todos os relatórios em sequência
listarVinhos();
vinhosBaixoEstoque(5);
calcularEstoqueTotal();
nomesEmCaixaAlta();

// ============================================================
// 4. ALERT — resumo consolidado para o usuário
// ============================================================

const baixoEstoque = vinhos.filter((v) => v.estoque < 5);
const estoqueTotal = vinhos.reduce((acc, v) => acc + v.estoque, 0);
const nomesAlta    = vinhos.map((v) => v.nome.toUpperCase());

const resumo = `
🍷 ADEGA — RELATÓRIO DE ESTOQUE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 VINHOS CADASTRADOS (${vinhos.length} itens):
${vinhos.map((v, i) => `  ${i + 1}. ${v.nome} | ${v.tipo} | ${v.safra} | ${v.estoque} un.`).join("\n")}

⚠️  ESTOQUE CRÍTICO (< 5 unidades):
${baixoEstoque.length > 0 ? baixoEstoque.map((v) => `  ⛔ ${v.nome}: ${v.estoque} un.`).join("\n") : "  ✅ Nenhum vinho crítico"}

📦 ESTOQUE TOTAL: ${estoqueTotal} unidades

🔠 NOMES EM CAIXA ALTA:
${nomesAlta.map((n) => `  → ${n}`).join("\n")}
`;

alert(resumo);