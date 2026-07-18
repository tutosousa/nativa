// ===========================================================
// NATIVA — catálogo (dados de demonstração)
//
// Pra adicionar uma FOTO real a um produto: coloque o arquivo de
// imagem dentro da pasta /fotos e escreva o nome do arquivo no
// campo foto (ex: foto:"vestido-midi-1.jpg"). Sem foto, o produto
// continua mostrando o ícone ilustrado normalmente.
//
// slug = usado para gerar a página/imagem de compartilhamento
// (arquivo produto-<slug>.html). Não precisa mexer nisso.
// ===========================================================

const COR = {
  terracota: '#A6432F',
  preto:     '#221F1C',
  areia:     '#D8C9A8',
  verde:     '#4B5A45',
  offwhite:  '#F1EBDD',
  jeans:     '#4F6178',
  vinho:     '#5C2430',
  cinza:     '#8B8478',
  marrom:    '#6B4A32',
  dourado:   '#B98B34',
  branco:    '#F4F1EA',
  azul:      '#3D5A80',
  marinho:   '#1F2D45'
};
const NOME_COR = { terracota:'Terracota', preto:'Preto', areia:'Areia', verde:'Verde Musgo', offwhite:'Off-white', jeans:'Jeans', vinho:'Vinho', cinza:'Cinza Pedra', marrom:'Marrom Couro', dourado:'Dourado', branco:'Branco', azul:'Azul', marinho:'Azul Marinho' };

const CATALOGO_PADRAO = {

  camisetas: { label:"Camisetas", icon:"ic-camiseta", items:[
    { nome:"T-shirt Nativa Básica", slug:"t-shirt-nativa-basica", foto:null, preco:69.9, tamanhos:["P","M","G","GG"], cores:["preto","branco","cinza"], nova:true, desc:"Algodão penteado, corte reto essencial." },
    { nome:"T-shirt Sealive Oversized", slug:"t-shirt-sealive-oversized", foto:null, preco:89.9, tamanhos:["P","M","G","GG"], cores:["preto","branco","verde"], nova:true, desc:"Malha pesada, modelagem ampla." },
    { nome:"T-shirt Estampada Nativa", slug:"t-shirt-estampada-nativa", foto:null, preco:79.9, tamanhos:["P","M","G"], cores:["preto","marinho","dourado"], nova:false, desc:"Estampa exclusiva no peito." },
    { nome:"T-shirt Gola V Nativa", slug:"t-shirt-gola-v-nativa", foto:null, preco:64.9, tamanhos:["P","M","G","GG"], cores:["branco","cinza","preto"], nova:false, desc:"Gola V, toque macio, corte reto." },
    { nome:"T-shirt Listrada Nativa", slug:"t-shirt-listrada-nativa", foto:null, preco:74.9, tamanhos:["P","M","G"], cores:["marinho","branco"], nova:false, desc:"Listras finas, algodão premium." }
  ]},

  camisas: { label:"Camisas", icon:"ic-camisa", items:[
    { nome:"Camisa Xadrez Nativa", slug:"camisa-xadrez-nativa", foto:null, preco:159.9, tamanhos:["P","M","G","GG"], cores:["verde","marrom"], nova:true, desc:"Flanela xadrez, bolso frontal." },
    { nome:"Camisa Social Slim", slug:"camisa-social-slim", foto:null, preco:169.9, tamanhos:["P","M","G"], cores:["branco","azul"], nova:false, desc:"Tricoline, corte slim, fácil de passar." },
    { nome:"Camisa Linho Nativa", slug:"camisa-linho-nativa", foto:null, preco:179.9, tamanhos:["P","M","G","GG"], cores:["areia","branco"], nova:false, desc:"Linho leve, ideal pro calor." },
    { nome:"Camisa Jeans Nativa", slug:"camisa-jeans-nativa", foto:null, preco:154.9, tamanhos:["P","M","G"], cores:["jeans"], nova:false, desc:"Jeans leve, botões metálicos." }
  ]},

  polos: { label:"Polos", icon:"ic-polo", items:[
    { nome:"Polo Piquet Nativa", slug:"polo-piquet-nativa", foto:null, preco:119.9, tamanhos:["P","M","G","GG"], cores:["preto","marinho","verde"], nova:true, desc:"Piquet clássico, punho canelado." },
    { nome:"Polo Brasil Bordada", slug:"polo-brasil-bordada", foto:null, preco:129.9, tamanhos:["P","M","G"], cores:["marinho","branco"], nova:true, desc:"Bordado exclusivo no peito." },
    { nome:"Polo Listrada Nativa", slug:"polo-listrada-nativa", foto:null, preco:124.9, tamanhos:["P","M","G","GG"], cores:["branco","azul"], nova:false, desc:"Listras finas, algodão macio." },
    { nome:"Polo Slim Fit", slug:"polo-slim-fit", foto:null, preco:114.9, tamanhos:["P","M","G"], cores:["preto","cinza"], nova:false, desc:"Corte justo, tecido leve." }
  ]},

  "calcas-jeans": { label:"Calças Jeans", icon:"ic-calca", items:[
    { nome:"Calça Jeans Slim Nativa", slug:"calca-jeans-slim-nativa", foto:null, preco:189.9, tamanhos:["38","40","42","44"], cores:["jeans","preto"], nova:true, desc:"Corte slim, elastano leve." },
    { nome:"Calça Jeans Reta Nativa", slug:"calca-jeans-reta-nativa", foto:null, preco:179.9, tamanhos:["38","40","42","44","46"], cores:["jeans"], nova:false, desc:"Corte reto clássico, five pockets." },
    { nome:"Calça Sarja Cargo Nativa", slug:"calca-sarja-cargo-nativa", foto:null, preco:194.9, tamanhos:["38","40","42","44"], cores:["preto","verde","areia"], nova:false, desc:"Bolsos funcionais, sarja resistente." },
    { nome:"Calça Moletom Nativa", slug:"calca-moletom-nativa", foto:null, preco:139.9, tamanhos:["P","M","G","GG"], cores:["preto","cinza","marinho"], nova:false, desc:"Punho elástico, conforto pro dia a dia." }
  ]},

  "bermudas-shorts": { label:"Bermudas e Shorts", icon:"ic-short", items:[
    { nome:"Bermuda Jeans Nativa", slug:"bermuda-jeans-nativa", foto:null, preco:119.9, tamanhos:["38","40","42","44"], cores:["jeans"], nova:false, desc:"Barra desfiada, five pockets." },
    { nome:"Bermuda Sarja Nativa", slug:"bermuda-sarja-nativa", foto:null, preco:109.9, tamanhos:["38","40","42","44"], cores:["preto","areia","verde"], nova:true, desc:"Sarja leve, caimento reto." },
    { nome:"Short Moletom Nativa", slug:"short-moletom-nativa", foto:null, preco:79.9, tamanhos:["P","M","G","GG"], cores:["preto","cinza"], nova:false, desc:"Conforto pro treino ou pra casa." },
    { nome:"Bermuda Cargo Nativa", slug:"bermuda-cargo-nativa", foto:null, preco:124.9, tamanhos:["38","40","42","44"], cores:["verde","areia"], nova:false, desc:"Bolsos laterais, sarja resistente." }
  ]},

  "moletom-frio": { label:"Moletom e Frio", icon:"ic-tricot", items:[
    { nome:"Moletom Canguru Nativa", slug:"moletom-canguru-nativa", foto:null, preco:159.9, tamanhos:["P","M","G","GG"], cores:["preto","cinza","marinho"], nova:true, desc:"Capuz e bolso canguru, forro macio." },
    { nome:"Moletom Careca Nativa", slug:"moletom-careca-nativa", foto:null, preco:139.9, tamanhos:["P","M","G","GG"], cores:["preto","branco","verde"], nova:false, desc:"Gola careca, punho canelado." },
    { nome:"Cardigã Tricot Nativa", slug:"cardiga-tricot-nativa", foto:null, preco:169.9, tamanhos:["P","M","G"], cores:["marrom","cinza"], nova:false, desc:"Abotoamento frontal, bolsos laterais." },
    { nome:"Colete Tricot Nativa", slug:"colete-tricot-nativa", foto:null, preco:129.9, tamanhos:["P","M","G"], cores:["verde","marrom"], nova:false, desc:"Sem manga, ótimo pra camadas." }
  ]},

  "jaquetas-casacos": { label:"Jaquetas e Casacos", icon:"ic-jaqueta", items:[
    { nome:"Jaqueta Corta-Vento Nativa", slug:"jaqueta-corta-vento-nativa", foto:null, preco:229.9, tamanhos:["P","M","G","GG"], cores:["preto","verde"], nova:true, desc:"Impermeável leve, capuz destacável." },
    { nome:"Casaco Trench Nativa", slug:"casaco-trench-nativa", foto:null, preco:329.9, tamanhos:["P","M","G"], cores:["areia","preto"], nova:true, desc:"Corte reto longo, cinto de amarrar." },
    { nome:"Jaqueta Jeans Nativa", slug:"jaqueta-jeans-nativa", foto:null, preco:219.9, tamanhos:["P","M","G","GG"], cores:["jeans"], nova:false, desc:"Lavagem média, botões metálicos." },
    { nome:"Colete Acolchoado Nativa", slug:"colete-acolchoado-nativa", foto:null, preco:179.9, tamanhos:["P","M","G"], cores:["preto","verde","marinho"], nova:false, desc:"Leve e quentinho, ideal pra camadas." }
  ]},

  acessorios: { label:"Acessórios", icon:"ic-acessorio", items:[
    { nome:"Boné Nativa", slug:"bone-nativa", foto:null, preco:79.9, tamanhos:["Único"], cores:["preto","verde","marinho"], nova:true, desc:"Aba curva, fivela ajustável." },
    { nome:"Cinto Couro Nativa", slug:"cinto-couro-nativa", foto:null, preco:89.9, tamanhos:["Único"], cores:["marrom","preto"], nova:false, desc:"Fivela metálica, couro legítimo." },
    { nome:"Carteira Couro Nativa", slug:"carteira-couro-nativa", foto:null, preco:99.9, tamanhos:["Único"], cores:["marrom","preto"], nova:false, desc:"Compacta, vários compartimentos." },
    { nome:"Óculos de Sol Nativa", slug:"oculos-de-sol-nativa", foto:null, preco:119.9, tamanhos:["Único"], cores:["preto","marrom"], nova:false, desc:"Proteção UV400, armação leve." }
  ]}
};
function fmtPreco(v){
  return v.toLocaleString('pt-BR', { style:'currency', currency:'BRL' });
}
// Evita que texto digitado num produto (nome, descrição, cor...) seja
// interpretado como HTML/código ao ser exibido no site — proteção contra
// injeção de conteúdo malicioso via painel/planilha/banco de dados.
function escapeHTML(str){
  return String(str ?? '').replace(/[&<>"']/g, c => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
  }[c]));
}

// O campo "foto" guarda uma ou mais imagens separadas por ";" (mesmo padrão
// usado em tamanhos/cores). Aceita tanto URL completa (Storage do Supabase)
// quanto nome de arquivo local antigo (pasta /fotos).
function fotosDoProduto(p){
  if(!p.foto) return [];
  return String(p.foto).split(';').map(f => f.trim()).filter(Boolean)
    .map(f => /^https?:\/\//i.test(f) ? f : `fotos/${f}`);
}

// ===========================================================
// PRODUTOS VINDOS DE UMA PLANILHA DO GOOGLE (opcional)
//
// Se window.LOJA.planilhaUrl estiver preenchido (em main.js), o site
// busca os produtos direto da planilha a cada carregamento de página —
// a lojista adiciona/edita/remove linhas na planilha e o site atualiza
// sozinho, sem precisar mexer em código.
//
// Sem planilha configurada (ou se a busca falhar), o site usa o
// catálogo padrão acima normalmente. Nada quebra.
//
// IMPORTANTE: produtos adicionados pela planilha ainda funcionam com o
// botão "Comprar" (manda mensagem pro WhatsApp normalmente), mas só os
// 71 produtos originais têm página própria + prévia com imagem no
// WhatsApp (isso exige gerar arquivos extras, que não dá pra fazer
// sozinho pelo navegador). Veja PLANILHA-LEIAME.md pra mais detalhes.
// ===========================================================

let CATALOGO = CATALOGO_PADRAO;

// nomes/ícones de cada categoria, extraídos do catálogo padrão (fonte única)
const CATEGORIA_INFO = {};
Object.entries(CATALOGO_PADRAO).forEach(([key, cat]) => {
  CATEGORIA_INFO[key] = { label: cat.label, icon: cat.icon };
});

// slugs que já têm página própria (produto-<slug>.html) gerada — os 71 produtos-semente
const PAGINAS_PRONTAS = new Set();
Object.values(CATALOGO_PADRAO).forEach(cat => cat.items.forEach(p => PAGINAS_PRONTAS.add(p.slug)));

// paleta estendida pra reconhecer nomes de cor digitados livremente na planilha
const COR_EXTRA = {
  branco:'#FFFFFF', azul:'#3D5A80', 'azul marinho':'#1F2D45', vermelho:'#8C2F2F',
  rosa:'#C98895', roxo:'#5B4B79', amarelo:'#D9A93B', laranja:'#C46B33',
  bege:'#D8C9A8', prateado:'#B7B7B7', 'off white':'#F1EBDD', 'off-white':'#F1EBDD',
  cru:'#E8DFC9', chumbo:'#4A4A48'
};

function normalizaTexto(s){
  return (s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
}

function slugify(s){
  let out = normalizaTexto(s).replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  return out || 'produto';
}

function corHex(nomeCor){
  const chave = normalizaTexto(nomeCor);
  if(COR[chave]) return COR[chave];
  if(COR_EXTRA[chave]) return COR_EXTRA[chave];
  return '#A39A87'; // cor neutra de fallback pra nome não reconhecido
}
function nomeCorExibir(nomeCor){
  const chave = normalizaTexto(nomeCor);
  if(NOME_COR[chave]) return NOME_COR[chave];
  const txt = (nomeCor || '').trim();
  return txt.charAt(0).toUpperCase() + txt.slice(1);
}

// mapa "vestidos"/"Vestidos"/"VESTIDOS " -> chave oficial da categoria
const CATEGORIA_POR_TEXTO = {};
Object.entries(CATEGORIA_INFO).forEach(([key, info]) => {
  CATEGORIA_POR_TEXTO[normalizaTexto(key)] = key;
  CATEGORIA_POR_TEXTO[normalizaTexto(info.label)] = key;
});
function resolveCategoria(valor){
  return CATEGORIA_POR_TEXTO[normalizaTexto(valor)] || null;
}

function textoParaBool(v, padrao){
  const t = normalizaTexto(v);
  if(['sim','s','true','1','verdadeiro','yes'].includes(t)) return true;
  if(['nao','não','n','false','0','falso','no'].includes(t)) return false;
  return padrao;
}

// parser de CSV simples (aceita campos entre aspas com vírgula/quebra de linha dentro)
function parseCSV(text){
  const rows = [];
  let row = [], field = '', dentroAspas = false;
  for(let i = 0; i < text.length; i++){
    const c = text[i], next = text[i+1];
    if(dentroAspas){
      if(c === '"' && next === '"'){ field += '"'; i++; }
      else if(c === '"'){ dentroAspas = false; }
      else field += c;
    } else {
      if(c === '"') dentroAspas = true;
      else if(c === ','){ row.push(field); field = ''; }
      else if(c === '\n'){ row.push(field); rows.push(row); row = []; field = ''; }
      else if(c === '\r'){ /* ignora */ }
      else field += c;
    }
  }
  if(field.length || row.length){ row.push(field); rows.push(row); }
  return rows.filter(r => r.some(c => c.trim() !== ''));
}

// transforma as linhas da planilha (CSV) no mesmo formato do CATALOGO_PADRAO
function parseCatalogoCSV(csvText){
  const rows = parseCSV(csvText);
  if(rows.length < 2) return null;

  const header = rows[0].map(h => normalizaTexto(h));
  const idx = campo => header.indexOf(campo);
  const iCat = idx('categoria'), iNome = idx('nome'), iPreco = idx('preco'),
        iTam = idx('tamanhos'), iCor = idx('cores'), iNovo = idx('novo'),
        iDesc = idx('descricao'), iFoto = idx('foto'), iAtivo = idx('ativo');

  if(iCat === -1 || iNome === -1 || iPreco === -1) return null;

  const catalogo = {};
  const slugsUsados = {};

  for(let r = 1; r < rows.length; r++){
    const linha = rows[r];
    if(!linha || !linha[iNome] || !linha[iNome].trim()) continue;

    const ativo = iAtivo > -1 ? textoParaBool(linha[iAtivo], true) : true;
    if(!ativo) continue;

    const catKey = resolveCategoria(linha[iCat]);
    if(!catKey){ console.warn('Categoria não reconhecida na planilha:', linha[iCat]); continue; }

    const nome = linha[iNome].trim();
    let precoTxt = (linha[iPreco] || '0').trim().replace(/[^\d.,]/g, '');
    if(precoTxt.includes(',') && !precoTxt.includes('.')) precoTxt = precoTxt.replace(',', '.');
    else precoTxt = precoTxt.replace(/\.(?=\d{3}(\D|$))/g, '').replace(',', '.');
    const preco = parseFloat(precoTxt) || 0;

    const tamanhos = iTam > -1 ? (linha[iTam]||'').split(/[;,]/).map(s=>s.trim()).filter(Boolean) : ['Único'];
    const cores = iCor > -1 ? (linha[iCor]||'').split(/[;,]/).map(s=>normalizaTexto(s)).filter(Boolean) : [];
    const nova = iNovo > -1 ? textoParaBool(linha[iNovo], false) : false;
    const desc = iDesc > -1 ? (linha[iDesc]||'').trim() : '';
    const foto = iFoto > -1 ? (linha[iFoto]||'').trim() || null : null;

    let baseSlug = slugify(nome), slug = baseSlug, n = 2;
    while(slugsUsados[slug]){ slug = `${baseSlug}-${n}`; n++; }
    slugsUsados[slug] = true;

    if(!catalogo[catKey]) catalogo[catKey] = { label: CATEGORIA_INFO[catKey].label, icon: CATEGORIA_INFO[catKey].icon, items: [] };
    catalogo[catKey].items.push({ nome, slug, foto, preco, tamanhos: tamanhos.length?tamanhos:['Único'], cores, nova, desc });
  }

  return Object.keys(catalogo).length ? catalogo : null;
}

// registra na paleta COR/NOME_COR quaisquer cores novas vindas da planilha,
// pra os swatches funcionarem sem precisar editar código
function registrarCoresDaPlanilha(catalogo){
  Object.values(catalogo).forEach(cat => cat.items.forEach(p => {
    p.cores.forEach(c => {
      if(!COR[c]) COR[c] = corHex(c);
      if(!NOME_COR[c]) NOME_COR[c] = nomeCorExibir(c);
    });
  }));
}

// transforma as linhas vindas do Supabase no mesmo formato do CATALOGO_PADRAO
function parseCatalogoSupabase(linhas){
  const catalogo = {};
  linhas.forEach(row => {
    if(row.ativo === false) return;
    const catKey = resolveCategoria(row.categoria);
    if(!catKey){ console.warn('Categoria não reconhecida no banco:', row.categoria); return; }

    const tamanhos = (row.tamanhos || '').split(/[;,]/).map(s => s.trim()).filter(Boolean);
    const cores = (row.cores || '').split(/[;,]/).map(s => normalizaTexto(s)).filter(Boolean);

    if(!catalogo[catKey]) catalogo[catKey] = { label: CATEGORIA_INFO[catKey].label, icon: CATEGORIA_INFO[catKey].icon, items: [] };
    catalogo[catKey].items.push({
      id: row.id,
      nome: row.nome,
      slug: row.slug || slugify(row.nome),
      foto: row.foto || null,
      preco: parseFloat(row.preco) || 0,
      tamanhos: tamanhos.length ? tamanhos : ['Único'],
      cores,
      nova: !!row.novo,
      desc: row.descricao || ''
    });
  });
  return Object.keys(catalogo).length ? catalogo : null;
}

async function carregarCatalogoSupabase(){
  const url = window.LOJA && window.LOJA.supabaseUrl;
  const key = window.LOJA && window.LOJA.supabaseAnonKey;
  if(!url || !key) return null;
  try{
    const res = await fetch(`${url}/rest/v1/produtos?select=*`, {
      headers: { apikey: key, Authorization: `Bearer ${key}` },
      cache: 'no-store'
    });
    if(!res.ok) throw new Error('falha ao buscar produtos no banco');
    const linhas = await res.json();
    const parsed = parseCatalogoSupabase(linhas);
    if(!parsed) throw new Error('banco sem produtos ativos');
    registrarCoresDaPlanilha(parsed);
    return parsed;
  }catch(err){
    console.warn('Não foi possível carregar produtos do banco de dados.', err);
    return null;
  }
}

let _catalogoCarregado = null;
async function carregarCatalogo(){
  if(_catalogoCarregado) return _catalogoCarregado;

  // 1) tenta o banco de dados (Supabase), se configurado
  const doBanco = await carregarCatalogoSupabase();
  if(doBanco){ _catalogoCarregado = doBanco; CATALOGO = doBanco; return doBanco; }

  // 2) tenta a planilha do Google, se configurada
  const url = window.LOJA && window.LOJA.planilhaUrl;
  if(url){
    try{
      const res = await fetch(url, { cache: 'no-store' });
      if(!res.ok) throw new Error('falha ao buscar a planilha');
      const texto = await res.text();
      const parsed = parseCatalogoCSV(texto);
      if(!parsed) throw new Error('planilha vazia ou em formato inesperado');
      registrarCoresDaPlanilha(parsed);
      _catalogoCarregado = parsed;
      CATALOGO = parsed;
      return parsed;
    }catch(err){
      console.warn('Não foi possível carregar a planilha de produtos.', err);
    }
  }
  // 3) usa o catálogo padrão embutido no site
  _catalogoCarregado = CATALOGO_PADRAO;
  CATALOGO = CATALOGO_PADRAO;
  return CATALOGO_PADRAO;
}

function productCardHTML(catKey, p){
  const icon = CATEGORIA_INFO[catKey] ? CATEGORIA_INFO[catKey].icon : 'ic-selo';
  const temPagina = PAGINAS_PRONTAS.has(p.slug);
  // produtos-semente (71 originais) têm página própria com prévia de imagem no
  // WhatsApp; qualquer outro produto (painel/planilha) usa a página genérica
  // produto.html, que funciona pra qualquer slug mas sem a prévia de imagem.
  const linkProduto = temPagina ? `produto-${p.slug}.html` : `produto.html?slug=${encodeURIComponent(p.slug)}`;
  const nomeSeguro = escapeHTML(p.nome);
  const descSeguro = escapeHTML(p.desc);
  const tamanhos = Array.isArray(p.tamanhos) ? p.tamanhos : [];
  const cores = Array.isArray(p.cores) ? p.cores : [];
  const sizesHTML = tamanhos.map(t => `<span>${escapeHTML(t)}</span>`).join('');
  const swatchesHTML = cores.map(c => `<span class="swatch" style="background:${corHex(c)}" title="${escapeHTML(nomeCorExibir(c))}"></span>`).join('');
  const linkCompleto = temPagina ? produtoLink(p.slug) : `${window.LOJA.siteUrl}/${linkProduto}`;
  const msg = `Olá! Tenho interesse nesta peça da NATIVA:\n${p.nome} - ${fmtPreco(p.preco)}\n${linkCompleto}\n\nAinda está disponível?`;
  const msgSegura = escapeHTML(msg);
  const fotos = fotosDoProduto(p);
  const midia = fotos.length
    ? `<img src="${fotos[0]}" alt="${nomeSeguro}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
       <svg class="media-fallback" style="display:none"><use href="icons.svg#${icon}"></use></svg>`
    : `<svg><use href="icons.svg#${icon}"></use></svg>`;
  return `
  <article class="product-card reveal" data-sizes="${tamanhos.join(',')}" data-colors="${cores.join(',')}">
    <a class="product-media" href="${linkProduto}">
      ${p.nova ? '<span class="tag-new">Novo</span>' : ''}
      ${midia}
    </a>
    <div class="product-body">
      <a href="${linkProduto}" class="product-name-link"><h3 class="product-name">${nomeSeguro}</h3></a>
      <p class="product-desc">${descSeguro}</p>
      <div class="swatches">${swatchesHTML}</div>
      <div class="sizes">${sizesHTML}</div>
      <div class="product-price">${fmtPreco(p.preco)}</div>
      <a class="btn-buy" data-whats="${msgSegura}">
        <svg><use href="icons.svg#ic-whats"></use></svg>
        Comprar
      </a>
    </div>
  </article>`;
}

function renderGrid(containerId, catKey, list){
  const el = document.getElementById(containerId);
  if(!el) return;
  const items = list || (CATALOGO[catKey] && CATALOGO[catKey].items) || [];
  el.innerHTML = items.length
    ? items.map(p => productCardHTML(catKey, p)).join('')
    : `<div class="empty-state">Nenhuma peça encontrada com esse filtro. <br>Tente outra combinação de tamanho/cor.</div>`;

  el.querySelectorAll('[data-whats]').forEach(a => {
    a.href = whatsLink(a.getAttribute('data-whats'));
    a.target = '_blank'; a.rel = 'noopener';
  });
  el.querySelectorAll('.reveal').forEach(card => card.classList.add('in'));
}

async function initTodasPage(gridId){
  document.getElementById(gridId).innerHTML = `<div class="empty-state">Carregando peças…</div>`;
  const catalogo = await carregarCatalogo();

  const all = [];
  Object.keys(catalogo).forEach(key => {
    catalogo[key].items.forEach(p => all.push({cat:key, p}));
  });

  function draw(list){
    const el = document.getElementById(gridId);
    el.innerHTML = list.length
      ? list.map(d => productCardHTML(d.cat, d.p)).join('')
      : `<div class="empty-state">Nenhuma peça encontrada nessa categoria.</div>`;
    el.querySelectorAll('[data-whats]').forEach(a => { a.href = whatsLink(a.getAttribute('data-whats')); a.target='_blank'; a.rel='noopener'; });
    el.querySelectorAll('.reveal').forEach(c => c.classList.add('in'));
  }
  draw(all);

  const catButtons = document.querySelectorAll('[data-filter-cat]');
  let activeCat = null;
  catButtons.forEach(btn => btn.addEventListener('click', () => {
    const val = btn.getAttribute('data-filter-cat');
    activeCat = (activeCat === val) ? null : val;
    catButtons.forEach(b => b.classList.toggle('active', b.getAttribute('data-filter-cat') === activeCat));
    draw(activeCat ? all.filter(d => d.cat === activeCat) : all);
  }));
}

async function initCategoryPage(catKey, gridId){
  document.getElementById(gridId).innerHTML = `<div class="empty-state">Carregando peças…</div>`;
  await carregarCatalogo();
  renderGrid(gridId, catKey);

  const sizeButtons = document.querySelectorAll('[data-filter-size]');
  const colorButtons = document.querySelectorAll('[data-filter-color]');
  let activeSize = null, activeColor = null;

  function apply(){
    const all = (CATALOGO[catKey] && CATALOGO[catKey].items) || [];
    const filtered = all.filter(p =>
      (!activeSize || p.tamanhos.includes(activeSize)) &&
      (!activeColor || p.cores.includes(activeColor))
    );
    renderGrid(gridId, catKey, filtered);
  }

  sizeButtons.forEach(btn => btn.addEventListener('click', () => {
    const val = btn.getAttribute('data-filter-size');
    activeSize = (activeSize === val) ? null : val;
    sizeButtons.forEach(b => b.classList.toggle('active', b.getAttribute('data-filter-size') === activeSize));
    apply();
  }));

  colorButtons.forEach(btn => btn.addEventListener('click', () => {
    const val = btn.getAttribute('data-filter-color');
    activeColor = (activeColor === val) ? null : val;
    colorButtons.forEach(b => b.classList.toggle('active', b.getAttribute('data-filter-color') === activeColor));
    apply();
  }));
}
