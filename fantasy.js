// ==================== DADOS DOS JOGADORES BRASILEIRÃO 2026 ====================

const playersData = [
    // FLAMENGO
    { id: 1, name: "Lucas Paquetá", nationality: "Brasil", club: "Flamengo", position: "CAM", value: 35000000, valueStr: "€35M", flag: "🇧🇷", number: 10, image: "lucas-paqueta.png" },
    { id: 2, name: "Pedro", nationality: "Brasil", club: "Flamengo", position: "ST", value: 17000000, valueStr: "€17M", flag: "🇧🇷", number: 9, image: "pedro.png" },
    { id: 3, name: "Gerson", nationality: "Brasil", club: "Flamengo", position: "CM", value: 22000000, valueStr: "€22M", flag: "🇧🇷", number: 8, image: "gerson.png" },
    { id: 4, name: "Arrascaeta", nationality: "Uruguai", club: "Flamengo", position: "CAM", value: 15000000, valueStr: "€15M", flag: "🇺🇾", number: 14, image: "arrascaeta.png" },
    { id: 5, name: "Samuel Lino", nationality: "Brasil", club: "Flamengo", position: "LW", value: 17000000, valueStr: "€17M", flag: "🇧🇷", number: 16, image: "samuel-lino.png" },
    { id: 6, name: "Léo Ortiz", nationality: "Brasil", club: "Flamengo", position: "CB", value: 14000000, valueStr: "€14M", flag: "🇧🇷", number: 3, image: "leo-ortiz.png" },
    { id: 7, name: "Danilo", nationality: "Brasil", club: "Flamengo", position: "CB", value: 2500000, valueStr: "€2.5M", flag: "🇧🇷", number: 13, image: "danilo.png" },
    { id: 8, name: "Emerson Royal", nationality: "Brasil", club: "Flamengo", position: "RB", value: 7000000, valueStr: "€7M", flag: "🇧🇷", number: 22, image: "emerson-royal.png" },
    { id: 9, name: "Ayrton Lucas", nationality: "Brasil", club: "Flamengo", position: "LB", value: 4000000, valueStr: "€4M", flag: "🇧🇷", number: 6, image: "ayrton-lucas.png" },
    { id: 10, name: "Erick Pulgar", nationality: "Chile", club: "Flamengo", position: "CDM", value: 5000000, valueStr: "€5M", flag: "🇨🇱", number: 5, image: "erick-pulgar.png" },
    { id: 11, name: "Agustín Rossi", nationality: "Argentina", club: "Flamengo", position: "GK", value: 10000000, valueStr: "€10M", flag: "🇦🇷", number: 1, image: "rossi.png" },
    { id: 12, name: "Everton Cebolinha", nationality: "Brasil", club: "Flamengo", position: "LW", value: 7000000, valueStr: "€7M", flag: "🇧🇷", number: 11, image: "everton-cebolinha.png" },
    { id: 13, name: "Luiz Araújo", nationality: "Brasil", club: "Flamengo", position: "RW", value: 7000000, valueStr: "€7M", flag: "🇧🇷", number: 7, image: "luiz-araujo.png" },
    { id: 14, name: "Gonzalo Plata", nationality: "Equador", club: "Flamengo", position: "RW", value: 8000000, valueStr: "€8M", flag: "🇪🇨", number: 19, image: "gonzalo-plata.png" },
    { id: 15, name: "Nicolás de la Cruz", nationality: "Uruguai", club: "Flamengo", position: "CM", value: 9000000, valueStr: "€9M", flag: "🇺🇾", number: 18, image: "nicolas-de-la-cruz.png" },
    
    // PALMEIRAS
    { id: 16, name: "Vitor Roque", nationality: "Brasil", club: "Palmeiras", position: "ST", value: 45000000, valueStr: "€45M", flag: "🇧🇷", number: 9, image: "vitor-roque.png" },
    { id: 17, name: "Andreas Pereira", nationality: "Brasil", club: "Palmeiras", position: "CM", value: 18000000, valueStr: "€18M", flag: "🇧🇷", number: 10, image: "andreas-pereira.png" },
    { id: 18, name: "Raphael Veiga", nationality: "Brasil", club: "Palmeiras", position: "CAM", value: 15000000, valueStr: "€15M", flag: "🇧🇷", number: 23, image: "raphael-veiga.png" },
    { id: 19, name: "Richard Ríos", nationality: "Colômbia", club: "Palmeiras", position: "CM", value: 12000000, valueStr: "€12M", flag: "🇨🇴", number: 27, image: "richard-rios.png" },
    { id: 20, name: "Flaco López", nationality: "Argentina", club: "Palmeiras", position: "ST", value: 12000000, valueStr: "€12M", flag: "🇦🇷", number: 42, image: "flaco-lopez.png" },
    { id: 21, name: "Gustavo Gómez", nationality: "Paraguai", club: "Palmeiras", position: "CB", value: 8000000, valueStr: "€8M", flag: "🇵🇾", number: 15, image: "gustavo-gomez.png" },
    { id: 22, name: "Murilo", nationality: "Brasil", club: "Palmeiras", position: "CB", value: 7000000, valueStr: "€7M", flag: "🇧🇷", number: 26, image: "murilo.png" },
    { id: 23, name: "Piquerez", nationality: "Uruguai", club: "Palmeiras", position: "LB", value: 12000000, valueStr: "€12M", flag: "🇺🇾", number: 22, image: "piquerez.png" },
    { id: 24, name: "Khellven", nationality: "Brasil", club: "Palmeiras", position: "RB", value: 6000000, valueStr: "€6M", flag: "🇧🇷", number: 2, image: "khellven.png" },
    { id: 25, name: "Carlos Miguel", nationality: "Brasil", club: "Palmeiras", position: "GK", value: 8000000, valueStr: "€8M", flag: "🇧🇷", number: 1, image: "carlos-miguel.png" },
    { id: 26, name: "Mauricio", nationality: "Brasil", club: "Palmeiras", position: "CAM", value: 10000000, valueStr: "€10M", flag: "🇧🇷", number: 18, image: "mauricio.png" },
    { id: 27, name: "Marlon Freitas", nationality: "Brasil", club: "Palmeiras", position: "CM", value: 9000000, valueStr: "€9M", flag: "🇧🇷", number: 8, image: "marlon-freitas.png" },
    { id: 28, name: "Fuchs", nationality: "Brasil", club: "Palmeiras", position: "CB", value: 5000000, valueStr: "€5M", flag: "🇧🇷", number: 4, image: "fuchs.png" },
    
    // CORINTHIANS
    { id: 29, name: "Memphis Depay", nationality: "Holanda", club: "Corinthians", position: "LW", value: 12000000, valueStr: "€12M", flag: "🇳🇱", number: 94, image: "memphis-depay.png" },
    { id: 30, name: "Yuri Alberto", nationality: "Brasil", club: "Corinthians", position: "ST", value: 12000000, valueStr: "€12M", flag: "🇧🇷", number: 9, image: "yuri-alberto.png" },
    { id: 31, name: "Rodrigo Garro", nationality: "Argentina", club: "Corinthians", position: "CAM", value: 14000000, valueStr: "€14M", flag: "🇦🇷", number: 10, image: "rodrigo-garro.png" },
    { id: 32, name: "André Carrillo", nationality: "Peru", club: "Corinthians", position: "CM", value: 4000000, valueStr: "€4M", flag: "🇵🇪", number: 18, image: "andre-carrillo.png" },
    { id: 33, name: "Raniele", nationality: "Brasil", club: "Corinthians", position: "CDM", value: 6000000, valueStr: "€6M", flag: "🇧🇷", number: 14, image: "raniele.png" },
    { id: 34, name: "André Ramalho", nationality: "Brasil", club: "Corinthians", position: "CB", value: 4000000, valueStr: "€4M", flag: "🇧🇷", number: 5, image: "andre-ramalho.png" },
    { id: 35, name: "Matheuzinho", nationality: "Brasil", club: "Corinthians", position: "RB", value: 7000000, valueStr: "€7M", flag: "🇧🇷", number: 23, image: "matheuzinho.png" },
    { id: 36, name: "Hugo Souza", nationality: "Brasil", club: "Corinthians", position: "GK", value: 6000000, valueStr: "€6M", flag: "🇧🇷", number: 1, image: "hugo-souza.png" },
    { id: 37, name: "Gustavo Henrique", nationality: "Brasil", club: "Corinthians", position: "CB", value: 5000000, valueStr: "€5M", flag: "🇧🇷", number: 3, image: "gustavo-henrique.png" },
    { id: 38, name: "Matheus Bidu", nationality: "Brasil", club: "Corinthians", position: "LB", value: 4000000, valueStr: "€4M", flag: "🇧🇷", number: 21, image: "matheus-bidu.png" },
    { id: 39, name: "Breno Bidon", nationality: "Brasil", club: "Corinthians", position: "CM", value: 5000000, valueStr: "€5M", flag: "🇧🇷", number: 27, image: "breno-bidon.png" },
    
    // SÃO PAULO
    { id: 40, name: "Lucas Moura", nationality: "Brasil", club: "São Paulo", position: "RW", value: 15000000, valueStr: "€15M", flag: "🇧🇷", number: 7, image: "lucas-moura.png" },
    { id: 41, name: "Calleri", nationality: "Argentina", club: "São Paulo", position: "ST", value: 12000000, valueStr: "€12M", flag: "🇦🇷", number: 9, image: "calleri.png" },
    { id: 42, name: "Oscar", nationality: "Brasil", club: "São Paulo", position: "CAM", value: 8000000, valueStr: "€8M", flag: "🇧🇷", number: 8, image: "oscar.png" },
    { id: 43, name: "Luciano", nationality: "Brasil", club: "São Paulo", position: "ST", value: 8000000, valueStr: "€8M", flag: "🇧🇷", number: 10, image: "luciano.png" },
    { id: 44, name: "Marcos Antônio", nationality: "Brasil", club: "São Paulo", position: "CM", value: 7000000, valueStr: "€7M", flag: "🇧🇷", number: 25, image: "marcos-antonio.png" },
    { id: 45, name: "Arboleda", nationality: "Equador", club: "São Paulo", position: "CB", value: 5000000, valueStr: "€5M", flag: "🇪🇨", number: 5, image: "arboleda.png" },
    { id: 46, name: "Alan Franco", nationality: "Argentina", club: "São Paulo", position: "CB", value: 6000000, valueStr: "€6M", flag: "🇦🇷", number: 28, image: "alan-franco.png" },
    { id: 47, name: "Wendell", nationality: "Brasil", club: "São Paulo", position: "LB", value: 5000000, valueStr: "€5M", flag: "🇧🇷", number: 6, image: "wendell.png" },
    { id: 48, name: "Rafael", nationality: "Brasil", club: "São Paulo", position: "GK", value: 3000000, valueStr: "€3M", flag: "🇧🇷", number: 23, image: "rafael.png" },
    { id: 49, name: "Igor Vinícius", nationality: "Brasil", club: "São Paulo", position: "RB", value: 3000000, valueStr: "€3M", flag: "🇧🇷", number: 2, image: "igor-vinicius.png" },
    { id: 50, name: "Ferreira", nationality: "Brasil", club: "São Paulo", position: "LW", value: 7000000, valueStr: "€7M", flag: "🇧🇷", number: 47, image: "ferreira.png" },
    { id: 51, name: "Bobadilla", nationality: "Paraguai", club: "São Paulo", position: "CM", value: 6000000, valueStr: "€6M", flag: "🇵🇾", number: 21, image: "bobadilla.png" },
    
    // SANTOS
    { id: 52, name: "Lautaro Díaz", nationality: "Argentina", club: "Santos", position: "ST", value: 6000000, valueStr: "€6M", flag: "🇦🇷", number: 9, image: "lautaro-diaz.png" },
    { id: 53, name: "Rollheiser", nationality: "Argentina", club: "Santos", position: "RW", value: 7000000, valueStr: "€7M", flag: "🇦🇷", number: 7, image: "rollheiser.png" },
    { id: 54, name: "Barreal", nationality: "Argentina", club: "Santos", position: "LW", value: 6000000, valueStr: "€6M", flag: "🇦🇷", number: 11, image: "barreal.png" },
    { id: 55, name: "Gabriel Menino", nationality: "Brasil", club: "Santos", position: "CM", value: 5000000, valueStr: "€5M", flag: "🇧🇷", number: 8, image: "gabriel-menino.png" },
    { id: 56, name: "Zé Rafael", nationality: "Brasil", club: "Santos", position: "CM", value: 6000000, valueStr: "€6M", flag: "🇧🇷", number: 5, image: "ze-rafael.png" },
    { id: 57, name: "Zé Ivaldo", nationality: "Brasil", club: "Santos", position: "CB", value: 4000000, valueStr: "€4M", flag: "🇧🇷", number: 3, image: "ze-ivaldo.png" },
    { id: 58, name: "Luan Peres", nationality: "Brasil", club: "Santos", position: "CB", value: 4000000, valueStr: "€4M", flag: "🇧🇷", number: 4, image: "luan-peres.png" },
    { id: 59, name: "Vinicius Lira", nationality: "Brasil", club: "Santos", position: "LB", value: 2000000, valueStr: "€2M", flag: "🇧🇷", number: 6, image: "vinicius-lira.png" },
    { id: 60, name: "Igor Vinicius", nationality: "Brasil", club: "Santos", position: "RB", value: 3000000, valueStr: "€3M", flag: "🇧🇷", number: 2, image: "igor-vinicius-santos.png" },
    { id: 61, name: "Gabriel Brazão", nationality: "Brasil", club: "Santos", position: "GK", value: 4000000, valueStr: "€4M", flag: "🇧🇷", number: 1, image: "gabriel-brazao.png" },
    { id: 62, name: "Wesley", nationality: "Brasil", club: "Santos", position: "RW", value: 3000000, valueStr: "€3M", flag: "🇧🇷", number: 10, image: "wesley-santos.png" },
    
    // BOTAFOGO
    { id: 63, name: "Arthur Cabral", nationality: "Brasil", club: "Botafogo", position: "ST", value: 12000000, valueStr: "€12M", flag: "🇧🇷", number: 9, image: "arthur-cabral.png" },
    { id: 64, name: "Artur", nationality: "Brasil", club: "Botafogo", position: "RW", value: 10000000, valueStr: "€10M", flag: "🇧🇷", number: 7, image: "artur.png" },
    { id: 65, name: "Vitinho", nationality: "Brasil", club: "Botafogo", position: "LW", value: 8000000, valueStr: "€8M", flag: "🇧🇷", number: 11, image: "vitinho-botafogo.png" },
    { id: 66, name: "Alex Telles", nationality: "Brasil", club: "Botafogo", position: "LB", value: 7000000, valueStr: "€7M", flag: "🇧🇷", number: 13, image: "alex-telles.png" },
    { id: 67, name: "Barboza", nationality: "Argentina", club: "Botafogo", position: "CB", value: 6000000, valueStr: "€6M", flag: "🇦🇷", number: 4, image: "barboza.png" },
    { id: 68, name: "Danilo Barbosa", nationality: "Brasil", club: "Botafogo", position: "CM", value: 5000000, valueStr: "€5M", flag: "🇧🇷", number: 5, image: "danilo-barbosa.png" },
    { id: 69, name: "Léo Linck", nationality: "Brasil", club: "Botafogo", position: "GK", value: 3000000, valueStr: "€3M", flag: "🇧🇷", number: 1, image: "leo-linck.png" },
    { id: 70, name: "Newton", nationality: "Brasil", club: "Botafogo", position: "CM", value: 6000000, valueStr: "€6M", flag: "🇧🇷", number: 8, image: "newton.png" },
    { id: 71, name: "Santi Rodríguez", nationality: "Argentina", club: "Botafogo", position: "CAM", value: 7000000, valueStr: "€7M", flag: "🇦🇷", number: 10, image: "santi-rodriguez.png" },
    { id: 72, name: "Bastos", nationality: "Angola", club: "Botafogo", position: "CB", value: 4000000, valueStr: "€4M", flag: "🇦🇴", number: 3, image: "bastos.png" },
    { id: 73, name: "Júnior Santos", nationality: "Brasil", club: "Botafogo", position: "ST", value: 5000000, valueStr: "€5M", flag: "🇧🇷", number: 11, image: "junior-santos.png" },
    { id: 74, name: "Cuiabano", nationality: "Brasil", club: "Botafogo", position: "LB", value: 4000000, valueStr: "€4M", flag: "🇧🇷", number: 16, image: "cuiabano.png" },
    
    // ATLÉTICO-MG
    { id: 75, name: "Hulk", nationality: "Brasil", club: "Atlético-MG", position: "ST", value: 6000000, valueStr: "€6M", flag: "🇧🇷", number: 7, image: "hulk.png" },
    { id: 76, name: "Dudu", nationality: "Brasil", club: "Atlético-MG", position: "LW", value: 8000000, valueStr: "€8M", flag: "🇧🇷", number: 10, image: "dudu.png" },
    { id: 77, name: "Paulinho", nationality: "Brasil", club: "Atlético-MG", position: "RW", value: 12000000, valueStr: "€12M", flag: "🇧🇷", number: 9, image: "paulinho.png" },
    { id: 78, name: "Renan Lodi", nationality: "Brasil", club: "Atlético-MG", position: "LB", value: 8000000, valueStr: "€8M", flag: "🇧🇷", number: 44, image: "renan-lodi.png" },
    { id: 79, name: "Alan Franco", nationality: "Argentina", club: "Atlético-MG", position: "CM", value: 6000000, valueStr: "€6M", flag: "🇦🇷", number: 5, image: "alan-franco-atletico.png" },
    { id: 80, name: "Everson", nationality: "Brasil", club: "Atlético-MG", position: "GK", value: 4000000, valueStr: "€4M", flag: "🇧🇷", number: 22, image: "everson.png" },
    { id: 81, name: "Maycon", nationality: "Brasil", club: "Atlético-MG", position: "CM", value: 5000000, valueStr: "€5M", flag: "🇧🇷", number: 8, image: "maycon.png" },
    { id: 82, name: "Bernard", nationality: "Brasil", club: "Atlético-MG", position: "LW", value: 5000000, valueStr: "€5M", flag: "🇧🇷", number: 11, image: "bernard.png" },
    { id: 83, name: "Zaracho", nationality: "Argentina", club: "Atlético-MG", position: "CAM", value: 8000000, valueStr: "€8M", flag: "🇦🇷", number: 10, image: "zaracho.png" },
    { id: 84, name: "Alonso", nationality: "Paraguai", club: "Atlético-MG", position: "CB", value: 5000000, valueStr: "€5M", flag: "🇵🇾", number: 4, image: "alonso.png" },
    { id: 85, name: "Ruan Tressoldi", nationality: "Brasil", club: "Atlético-MG", position: "CB", value: 6000000, valueStr: "€6M", flag: "🇧🇷", number: 3, image: "ruan-tressoldi.png" },
    
    // GRÊMIO
    { id: 86, name: "Carlos Vinicius", nationality: "Brasil", club: "Grêmio", position: "ST", value: 8000000, valueStr: "€8M", flag: "🇧🇷", number: 9, image: "carlos-vinicius.png" },
    { id: 87, name: "Tetê", nationality: "Brasil", club: "Grêmio", position: "RW", value: 9000000, valueStr: "€9M", flag: "🇧🇷", number: 7, image: "tete.png" },
    { id: 88, name: "Cristaldo", nationality: "Argentina", club: "Grêmio", position: "CAM", value: 7000000, valueStr: "€7M", flag: "🇦🇷", number: 10, image: "cristaldo.png" },
    { id: 89, name: "Amuzu", nationality: "Bélgica", club: "Grêmio", position: "LW", value: 8000000, valueStr: "€8M", flag: "🇧🇪", number: 11, image: "amuzu.png" },
    { id: 90, name: "Arthur", nationality: "Brasil", club: "Grêmio", position: "CM", value: 7000000, valueStr: "€7M", flag: "🇧🇷", number: 8, image: "arthur-gremio.png" },
    { id: 91, name: "Wagner Leonardo", nationality: "Brasil", club: "Grêmio", position: "CB", value: 5000000, valueStr: "€5M", flag: "🇧🇷", number: 4, image: "wagner-leonardo.png" },
    { id: 92, name: "Marlon", nationality: "Brasil", club: "Grêmio", position: "LB", value: 5000000, valueStr: "€5M", flag: "🇧🇷", number: 6, image: "marlon-gremio.png" },
    { id: 93, name: "Weverton", nationality: "Brasil", club: "Grêmio", position: "GK", value: 5000000, valueStr: "€5M", flag: "🇧🇷", number: 12, image: "weverton-gremio.png" },
    { id: 94, name: "Kannemann", nationality: "Argentina", club: "Grêmio", position: "CB", value: 4000000, valueStr: "€4M", flag: "🇦🇷", number: 4, image: "kannemann.png" },
    { id: 95, name: "Villasanti", nationality: "Paraguai", club: "Grêmio", position: "CM", value: 7000000, valueStr: "€7M", flag: "🇵🇾", number: 20, image: "villasanti.png" },
    { id: 96, name: "João Pedro", nationality: "Brasil", club: "Grêmio", position: "RB", value: 3000000, valueStr: "€3M", flag: "🇧🇷", number: 2, image: "joao-pedro.png" },
    
    // INTERNACIONAL
    { id: 97, name: "Rafael Borré", nationality: "Colômbia", club: "Internacional", position: "ST", value: 7000000, valueStr: "€7M", flag: "🇨🇴", number: 19, image: "rafael-borre.png" },
    { id: 98, name: "Enner Valencia", nationality: "Equador", club: "Internacional", position: "ST", value: 8000000, valueStr: "€8M", flag: "🇪🇨", number: 13, image: "enner-valencia.png" },
    { id: 99, name: "Alan Patrick", nationality: "Brasil", club: "Internacional", position: "CAM", value: 9000000, valueStr: "€9M", flag: "🇧🇷", number: 10, image: "alan-patrick.png" },
    { id: 100, name: "Bernabei", nationality: "Argentina", club: "Internacional", position: "LB", value: 7000000, valueStr: "€7M", flag: "🇦🇷", number: 6, image: "bernabei.png" },
    { id: 101, name: "Rochet", nationality: "Uruguai", club: "Internacional", position: "GK", value: 6000000, valueStr: "€6M", flag: "🇺🇾", number: 1, image: "rochet.png" },
    { id: 102, name: "Wanderson", nationality: "Brasil", club: "Internacional", position: "LW", value: 7000000, valueStr: "€7M", flag: "🇧🇷", number: 11, image: "wanderson.png" },
    { id: 103, name: "Mercado", nationality: "Argentina", club: "Internacional", position: "CB", value: 3000000, valueStr: "€3M", flag: "🇦🇷", number: 25, image: "mercado.png" },
    { id: 104, name: "Bruno Henrique", nationality: "Brasil", club: "Internacional", position: "CM", value: 5000000, valueStr: "€5M", flag: "🇧🇷", number: 8, image: "bruno-henrique.png" },
    { id: 105, name: "Bustos", nationality: "Argentina", club: "Internacional", position: "RB", value: 4000000, valueStr: "€4M", flag: "🇦🇷", number: 16, image: "bustos.png" },
    { id: 106, name: "Vitão", nationality: "Brasil", club: "Internacional", position: "CB", value: 5000000, valueStr: "€5M", flag: "🇧🇷", number: 44, image: "vitao.png" },
    { id: 107, name: "Maurício", nationality: "Brasil", club: "Internacional", position: "RW", value: 5000000, valueStr: "€5M", flag: "🇧🇷", number: 27, image: "mauricio-internacional.png" },
    
    // CRUZEIRO
    { id: 108, name: "Kaio Jorge", nationality: "Brasil", club: "Cruzeiro", position: "ST", value: 8000000, valueStr: "€8M", flag: "🇧🇷", number: 9, image: "kaio-jorge.png" },
    { id: 109, name: "Matheus Pereira", nationality: "Brasil", club: "Cruzeiro", position: "CAM", value: 12000000, valueStr: "€12M", flag: "🇧🇷", number: 10, image: "matheus-pereira-cruzeiro.png" },
    { id: 110, name: "Fabrício Bruno", nationality: "Brasil", club: "Cruzeiro", position: "CB", value: 8000000, valueStr: "€8M", flag: "🇧🇷", number: 4, image: "fabricio-bruno.png" },
    { id: 111, name: "Cássio", nationality: "Brasil", club: "Cruzeiro", position: "GK", value: 3000000, valueStr: "€3M", flag: "🇧🇷", number: 1, image: "cassio.png" },
    { id: 112, name: "William", nationality: "Brasil", club: "Cruzeiro", position: "RB", value: 4000000, valueStr: "€4M", flag: "🇧🇷", number: 12, image: "william.png" },
    { id: 113, name: "Marlon", nationality: "Brasil", club: "Cruzeiro", position: "LB", value: 4000000, valueStr: "€4M", flag: "🇧🇷", number: 3, image: "marlon-cruzeiro.png" },
    { id: 114, name: "Lucas Romero", nationality: "Argentina", club: "Cruzeiro", position: "CDM", value: 5000000, valueStr: "€5M", flag: "🇦🇷", number: 29, image: "lucas-romero.png" },
    { id: 115, name: "Lucas Silva", nationality: "Brasil", club: "Cruzeiro", position: "CM", value: 2000000, valueStr: "€2M", flag: "🇧🇷", number: 16, image: "lucas-silva.png" },
    { id: 116, name: "Wanderson", nationality: "Brasil", club: "Cruzeiro", position: "LW", value: 6000000, valueStr: "€6M", flag: "🇧🇷", number: 11, image: "wanderson-cruzeiro.png" },
    { id: 117, name: "Villalba", nationality: "Paraguai", club: "Cruzeiro", position: "CB", value: 5000000, valueStr: "€5M", flag: "🇵🇾", number: 3, image: "villalba.png" },
    { id: 118, name: "Ramiro", nationality: "Brasil", club: "Cruzeiro", position: "CM", value: 2000000, valueStr: "€2M", flag: "🇧🇷", number: 17, image: "ramiro.png" },
    
    // VASCO
    { id: 119, name: "Philippe Coutinho", nationality: "Brasil", club: "Vasco", position: "CAM", value: 8000000, valueStr: "€8M", flag: "🇧🇷", number: 11, image: "philippe-coutinho.png" },
    { id: 120, name: "Dimitri Payet", nationality: "França", club: "Vasco", position: "CAM", value: 5000000, valueStr: "€5M", flag: "🇫🇷", number: 10, image: "dimitri-payet.png" },
    { id: 121, name: "Thiago Mendes", nationality: "Brasil", club: "Vasco", position: "CDM", value: 4000000, valueStr: "€4M", flag: "🇧🇷", number: 5, image: "thiago-mendes.png" },
    { id: 122, name: "Robert Renan", nationality: "Brasil", club: "Vasco", position: "CB", value: 5000000, valueStr: "€5M", flag: "🇧🇷", number: 3, image: "robert-renan.png" },
    { id: 123, name: "Piton", nationality: "Brasil", club: "Vasco", position: "LB", value: 4000000, valueStr: "€4M", flag: "🇧🇷", number: 6, image: "piton.png" },
    { id: 124, name: "Léo Jardim", nationality: "Brasil", club: "Vasco", position: "GK", value: 5000000, valueStr: "€5M", flag: "🇧🇷", number: 1, image: "leo-jardim.png" },
    { id: 125, name: "Adson", nationality: "Brasil", club: "Vasco", position: "RW", value: 4000000, valueStr: "€4M", flag: "🇧🇷", number: 7, image: "adson.png" },
    { id: 126, name: "David", nationality: "Brasil", club: "Vasco", position: "LW", value: 3000000, valueStr: "€3M", flag: "🇧🇷", number: 16, image: "david.png" },
    { id: 127, name: "Hugo Moura", nationality: "Brasil", club: "Vasco", position: "CM", value: 2000000, valueStr: "€2M", flag: "🇧🇷", number: 25, image: "hugo-moura.png" },
    { id: 128, name: "Paulo Henrique", nationality: "Brasil", club: "Vasco", position: "RB", value: 2000000, valueStr: "€2M", flag: "🇧🇷", number: 2, image: "paulo-henrique.png" },
    { id: 129, name: "GB", nationality: "Brasil", club: "Vasco", position: "ST", value: 4000000, valueStr: "€4M", flag: "🇧🇷", number: 9, image: "gb.png" },
    
    // BAHIA
    { id: 130, name: "Willian José", nationality: "Brasil", club: "Bahia", position: "ST", value: 7000000, valueStr: "€7M", flag: "🇧🇷", number: 9, image: "willian-jose.png" },
    { id: 131, name: "Everton Ribeiro", nationality: "Brasil", club: "Bahia", position: "CAM", value: 3000000, valueStr: "€3M", flag: "🇧🇷", number: 10, image: "everton-ribeiro.png" },
    { id: 132, name: "Jean Lucas", nationality: "Brasil", club: "Bahia", position: "CM", value: 6000000, valueStr: "€6M", flag: "🇧🇷", number: 8, image: "jean-lucas.png" },
    { id: 133, name: "Acevedo", nationality: "Uruguai", club: "Bahia", position: "CDM", value: 5000000, valueStr: "€5M", flag: "🇺🇾", number: 5, image: "acevedo.png" },
    { id: 134, name: "Ronaldo", nationality: "Brasil", club: "Bahia", position: "GK", value: 3000000, valueStr: "€3M", flag: "🇧🇷", number: 1, image: "ronaldo-bahia.png" },
    { id: 135, name: "Cauly", nationality: "Brasil", club: "Bahia", position: "CAM", value: 5000000, valueStr: "€5M", flag: "🇧🇷", number: 7, image: "cauly.png" },
    { id: 136, name: "Luciano Juba", nationality: "Brasil", club: "Bahia", position: "LB", value: 4000000, valueStr: "€4M", flag: "🇧🇷", number: 16, image: "luciano-juba.png" },
    { id: 137, name: "Ademir", nationality: "Brasil", club: "Bahia", position: "RW", value: 5000000, valueStr: "€5M", flag: "🇧🇷", number: 11, image: "ademir.png" },
    { id: 138, name: "Erick Pulga", nationality: "Brasil", club: "Bahia", position: "RW", value: 5000000, valueStr: "€5M", flag: "🇧🇷", number: 20, image: "erick-pulga.png" },
    { id: 139, name: "Kanu", nationality: "Brasil", club: "Bahia", position: "CB", value: 3000000, valueStr: "€3M", flag: "🇧🇷", number: 3, image: "kanu.png" },
    { id: 140, name: "Gilberto", nationality: "Brasil", club: "Bahia", position: "RB", value: 3000000, valueStr: "€3M", flag: "🇧🇷", number: 2, image: "gilberto.png" },
    
    // VITÓRIA
    { id: 141, name: "Erick", nationality: "Brasil", club: "Vitória", position: "ST", value: 2000000, valueStr: "€2M", flag: "🇧🇷", number: 9, image: "erick.png" },
    { id: 142, name: "Aitor", nationality: "Espanha", club: "Vitória", position: "RW", value: 1500000, valueStr: "€1.5M", flag: "🇪🇸", number: 7, image: "aitor.png" },
    { id: 143, name: "Ramon", nationality: "Brasil", club: "Vitória", position: "CM", value: 1000000, valueStr: "€1M", flag: "🇧🇷", number: 8, image: "ramon.png" },
    { id: 144, name: "Riccieli", nationality: "Brasil", club: "Vitória", position: "CB", value: 1000000, valueStr: "€1M", flag: "🇧🇷", number: 4, image: "riccieli.png" },
    { id: 145, name: "Gabriel", nationality: "Brasil", club: "Vitória", position: "GK", value: 800000, valueStr: "€800k", flag: "🇧🇷", number: 1, image: "gabriel-vitoria.png" },
    { id: 146, name: "Osvaldo", nationality: "Brasil", club: "Vitória", position: "LW", value: 1200000, valueStr: "€1.2M", flag: "🇧🇷", number: 10, image: "osvaldo.png" },
    { id: 147, name: "Wesley", nationality: "Brasil", club: "Vitória", position: "ST", value: 1000000, valueStr: "€1M", flag: "🇧🇷", number: 9, image: "wesley-vitoria.png" },
    { id: 148, name: "Léo Gomes", nationality: "Brasil", club: "Vitória", position: "LB", value: 800000, valueStr: "€800k", flag: "🇧🇷", number: 6, image: "leo-gomes.png" },
    { id: 149, name: "Zeca", nationality: "Brasil", club: "Vitória", position: "RB", value: 900000, valueStr: "€900k", flag: "🇧🇷", number: 2, image: "zeca.png" },
    { id: 150, name: "Rodrigo Andrade", nationality: "Brasil", club: "Vitória", position: "CM", value: 700000, valueStr: "€700k", flag: "🇧🇷", number: 5, image: "rodrigo-andrade.png" },
    { id: 151, name: "Camutanga", nationality: "Brasil", club: "Vitória", position: "CB", value: 800000, valueStr: "€800k", flag: "🇧🇷", number: 3, image: "camutanga.png" }
];

// Função para obter a imagem do jogador
function getPlayerImage(playerName) {
    const player = playersData.find(p => p.name === playerName);
    if (player && player.image) {
        return `images/jogadores/${player.image}`;
    }
    return null;
}

// Função para obter o escudo do clube
function getClubShield(clubName) {
    const clubMap = {
        "Flamengo": "escudo-flamengo.png",
        "Palmeiras": "escudo-palmeiras.png",
        "Corinthians": "escudo-corinthians.png",
        "São Paulo": "escudo-saopaulo.png",
        "Santos": "escudo-santos.png",
        "Botafogo": "escudo-botafogo.png",
        "Atlético-MG": "escudo-atletico-mg.png",
        "Grêmio": "escudo-gremio.png",
        "Internacional": "escudo-internacional.png",
        "Cruzeiro": "escudo-cruzeiro.png",
        "Vasco": "escudo-vasco.png",
        "Bahia": "escudo-bahia.png",
        "Vitória": "escudo-vitoria.png"
    };
    const fileName = clubMap[clubName];
    if (fileName) return `images/escudos/${fileName}`;
    return null;
}

// Mapeamento de posição do slot para posição do jogador
const slotToPositionMap = {
    "LW": "LW",
    "ST": "ST",
    "RW": "RW",
    "ST2": "ST",
    "LCM": "CM",
    "CM": "CM",
    "RCM": "CM",
    "LM": "CM",
    "RM": "CM",
    "CDM": "CDM",
    "LB": "LB",
    "CB": "CB",
    "CB2": "CB",
    "RB": "RB",
    "CB3": "CB",
    "LWB": "LB",
    "RWB": "RB",
    "GK": "GK"
};

// Mapeamento de posição do jogador para prioridade
const positionPriority = {
    "GK": 1,
    "LB": 2, "RB": 3, "CB": 4,
    "CDM": 5, "CM": 6, "CAM": 7,
    "LW": 8, "RW": 9, "ST": 10
};

// Variáveis globais
let currentSlot = null;
let currentLineup = Array(18).fill(null);
let savedLineups = JSON.parse(localStorage.getItem('fantasyLineups') || '[]');
let currentFormation = "4-3-3";

// Filtros dentro do modal
let modalCurrentClubFilter = "all";
let modalCurrentCountryFilter = "all";
let modalCurrentValueRange = "all";
let modalSearchText = "";

// Função para obter o melhor jogador para uma posição específica
function getBestPlayerForPosition(teamPlayers, targetPosition) {
    // Primeiro tenta achar jogador da posição exata
    let player = teamPlayers.find(p => p.position === targetPosition);
    if (player) return player;
    
    // Se não achar, tenta por posições compatíveis
    if (targetPosition === "CM") {
        player = teamPlayers.find(p => p.position === "CAM" || p.position === "CDM");
    } else if (targetPosition === "CAM") {
        player = teamPlayers.find(p => p.position === "CM");
    } else if (targetPosition === "CDM") {
        player = teamPlayers.find(p => p.position === "CM");
    } else if (targetPosition === "LW" || targetPosition === "RW") {
        player = teamPlayers.find(p => p.position === "ST");
    } else if (targetPosition === "ST") {
        player = teamPlayers.find(p => p.position === "LW" || p.position === "RW");
    } else if (targetPosition === "LB" || targetPosition === "RB") {
        player = teamPlayers.find(p => p.position === "CB");
    }
    
    return player || null;
}

// Função para preencher o time com jogadores de um clube (CORRIGIDA)
function fillTeamWithClub(clubName) {
    // Pega todos os jogadores do clube selecionado
    const teamPlayers = playersData.filter(p => p.club === clubName);
    
    if (teamPlayers.length === 0) {
        alert(`Nenhum jogador encontrado para o ${clubName}!`);
        return false;
    }
    
    // Mapeamento das posições que precisamos preencher baseado na formação atual
    // A ordem dos slots no campo (índice)
    const formationConfig = {
        "4-3-3": { 
            slotPositions: ["GK", "LB", "CB", "CB", "RB", "CM", "CM", "CM", "LW", "ST", "RW"],
            indices: [10, 6, 7, 8, 9, 3, 4, 5, 0, 1, 2]
        },
        "4-4-2": { 
            slotPositions: ["GK", "LB", "CB", "CB", "RB", "LM", "CM", "CM", "RM", "ST", "ST"],
            indices: [10, 6, 7, 8, 9, 12, 3, 4, 13, 1, 11]
        },
        "4-2-3-1": { 
            slotPositions: ["GK", "LB", "CB", "CB", "RB", "CDM", "CDM", "CAM", "LW", "ST", "RW"],
            indices: [10, 6, 7, 8, 9, 14, 15, 3, 0, 1, 2]
        },
        "3-4-3": { 
            slotPositions: ["GK", "CB", "CB", "CB", "LM", "CM", "CM", "RM", "LW", "ST", "RW"],
            indices: [10, 7, 8, 15, 12, 3, 4, 13, 0, 1, 2]
        },
        "3-5-2": { 
            slotPositions: ["GK", "CB", "CB", "CB", "LM", "CM", "CM", "CM", "RM", "ST", "ST"],
            indices: [10, 7, 8, 15, 12, 3, 4, 5, 13, 1, 11]
        },
        "4-1-2-1-2": { 
            slotPositions: ["GK", "LB", "CB", "CB", "RB", "CDM", "CM", "CM", "CAM", "ST", "ST"],
            indices: [10, 6, 7, 8, 9, 14, 3, 4, 5, 1, 11]
        },
        "5-3-2": { 
            slotPositions: ["GK", "LWB", "CB", "CB", "CB", "RWB", "CM", "CM", "CM", "ST", "ST"],
            indices: [10, 16, 7, 8, 15, 17, 3, 4, 5, 1, 11]
        },
        "4-5-1": { 
            slotPositions: ["GK", "LB", "CB", "CB", "RB", "CDM", "CM", "CM", "CM", "CM", "ST"],
            indices: [10, 6, 7, 8, 9, 14, 3, 4, 5, 12, 1]
        }
    };
    
    const config = formationConfig[currentFormation];
    if (!config) return false;
    
    // Criar um novo array para a escalação (tamanho 18)
    const newLineup = Array(18).fill(null);
    
    // Para cada posição que precisamos preencher
    for (let i = 0; i < config.slotPositions.length; i++) {
        const targetPos = config.slotPositions[i];
        const slotIndex = config.indices[i];
        
        // Encontrar o MELHOR jogador para esta posição específica
        // Primeiro tenta achar jogador da posição exata
        let player = teamPlayers.find(p => p.position === targetPos);
        
        // Se não achar, tenta por posições alternativas compatíveis
        if (!player) {
            // Mapeamento de posições alternativas
            const alternativePositions = {
                "GK": ["GK"],
                "LB": ["LB", "LWB", "CB"],
                "RB": ["RB", "RWB", "CB"],
                "CB": ["CB", "LB", "RB"],
                "LWB": ["LWB", "LB", "CB"],
                "RWB": ["RWB", "RB", "CB"],
                "CDM": ["CDM", "CM"],
                "CM": ["CM", "CAM", "CDM"],
                "CAM": ["CAM", "CM"],
                "LM": ["LM", "LW", "CM"],
                "RM": ["RM", "RW", "CM"],
                "LW": ["LW", "LM", "ST"],
                "RW": ["RW", "RM", "ST"],
                "ST": ["ST", "LW", "RW"]
            };
            
            const alternatives = alternativePositions[targetPos] || [targetPos];
            for (const altPos of alternatives) {
                player = teamPlayers.find(p => p.position === altPos);
                if (player) break;
            }
        }
        
        if (player) {
            newLineup[slotIndex] = player;
            // Remover o jogador usado para não repetir
            const playerIndex = teamPlayers.findIndex(p => p.id === player.id);
            if (playerIndex !== -1) teamPlayers.splice(playerIndex, 1);
        }
    }
    
    // Se ainda faltarem posições, preenche com qualquer jogador disponível
    for (let i = 0; i < config.slotPositions.length; i++) {
        const slotIndex = config.indices[i];
        if (!newLineup[slotIndex] && teamPlayers.length > 0) {
            newLineup[slotIndex] = teamPlayers.shift();
        }
    }
    
    // Atualizar a escalação global
    currentLineup = newLineup;
    
    // Atualizar visual dos cards
    const allSlots = document.querySelectorAll(".player-slot:not(.hidden-slot)");
    allSlots.forEach((slot, index) => {
        const player = currentLineup[index];
        const playerCard = slot.querySelector(".player-card");
        
        if (player) {
            const playerImage = getPlayerImage(player.name);
            const clubShield = getClubShield(player.club);
            playerCard.classList.remove("empty");
            playerCard.classList.add("filled");
            playerCard.innerHTML = `
                <div class="player-icon">
                    ${playerImage ? `<img src="${playerImage}" alt="${player.name}" onerror="this.src='${clubShield || player.flag}'">` : (clubShield ? `<img src="${clubShield}" alt="${player.club}">` : player.flag)}
                </div>
                <div class="player-name" title="${player.name}">${player.name}</div>
                <div class="player-meta" title="${player.club}">${player.club}</div>
                <div class="player-meta" title="${player.nationality} • ${player.valueStr}">${player.nationality} • ${player.valueStr}</div>
            `;
        } else {
            playerCard.classList.remove("filled");
            playerCard.classList.add("empty");
            playerCard.innerHTML = `<div class="player-icon">👤</div><div class="player-name">Vago</div><div class="player-meta">Clique no +</div><div class="player-meta">adicionar</div>`;
        }
    });
    
    // Contar quantos jogadores foram colocados
    const filledCount = newLineup.filter(p => p !== null).length;
    alert(`Time do ${clubName} montado com sucesso! (${filledCount} jogadores posicionados)`);
    return true;
}

// Funções auxiliares
function getNumericValue(valueStr) {
    const match = valueStr.match(/€(\d+(?:\.\d+)?)(M|k)/);
    if (!match) return 0;
    let value = parseFloat(match[1]);
    if (match[2] === 'M') value = value * 1000000;
    if (match[2] === 'k') value = value * 1000;
    return value;
}

function filterByValue(players, range) {
    if (range === "all") return players;
    return players.filter(player => {
        const value = getNumericValue(player.valueStr);
        switch(range) {
            case "0-5": return value < 5000000;
            case "5-10": return value >= 5000000 && value < 10000000;
            case "10-15": return value >= 10000000 && value < 15000000;
            case "15-20": return value >= 15000000 && value < 20000000;
            case "20-30": return value >= 20000000 && value < 30000000;
            case "30-50": return value >= 30000000 && value < 50000000;
            case "50+": return value >= 50000000;
            default: return true;
        }
    });
}

// Função para renderizar lista de jogadores com todos os filtros do modal
function renderPlayersList() {
    const container = document.getElementById("playersListContainer");
    if (!container) return;

    if (!currentSlot) return;
    
    const slotPosition = currentSlot.getAttribute("data-position");
    const mappedPosition = slotToPositionMap[slotPosition] || slotPosition;
    
    let filtered = playersData.filter(p => p.position === mappedPosition);
    
    if (modalSearchText) {
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(modalSearchText.toLowerCase()) ||
            p.club.toLowerCase().includes(modalSearchText.toLowerCase()) ||
            p.nationality.toLowerCase().includes(modalSearchText.toLowerCase())
        );
    }
    
    if (modalCurrentClubFilter !== "all") {
        filtered = filtered.filter(p => p.club === modalCurrentClubFilter);
    }
    
    if (modalCurrentCountryFilter !== "all") {
        filtered = filtered.filter(p => p.nationality === modalCurrentCountryFilter);
    }
    
    filtered = filterByValue(filtered, modalCurrentValueRange);

    if (filtered.length === 0) {
        container.innerHTML = '<div class="no-results">Nenhum jogador encontrado 😢</div>';
        return;
    }

    container.innerHTML = filtered.map(player => {
        const playerImage = getPlayerImage(player.name);
        const clubShield = getClubShield(player.club);
        return `
            <div class="player-item" data-player='${JSON.stringify(player)}'>
                <div class="player-info">
                    <div class="player-fav-avatar" style="width: 50px; height: 50px; background: #3f5da8; border-radius: 50%; overflow: hidden;">
                        ${playerImage ? `<img src="${playerImage}" alt="${player.name}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='${clubShield || player.flag}'">` : (clubShield ? `<img src="${clubShield}" alt="${player.club}" style="width: 100%; height: 100%; object-fit: contain; padding: 5px;">` : `<div style="display: flex; align-items: center; justify-content: center; height: 100%;">${player.flag || "⚽"}</div>`)}
                    </div>
                    <div style="flex: 1;">
                        <div class="player-name">
                            ${player.name}
                            <span class="position-badge">${player.position}</span>
                        </div>
                        <div class="player-details">
                            <span>🏠 ${player.club}</span>
                            <span>🌍 ${player.nationality}</span>
                            <span>💰 ${player.valueStr}</span>
                        </div>
                    </div>
                </div>
                <div class="player-club">${player.club}</div>
            </div>
        `;
    }).join("");

    document.querySelectorAll(".player-item").forEach(item => {
        item.addEventListener("click", () => {
            const player = JSON.parse(item.dataset.player);
            addPlayerToSlot(player);
        });
    });
}

// Função para adicionar jogador ao slot
function addPlayerToSlot(player) {
    if (!currentSlot) return;
    const slotElement = currentSlot;
    const playerCard = slotElement.querySelector(".player-card");
    const allSlots = document.querySelectorAll(".player-slot:not(.hidden-slot)");
    const index = Array.from(allSlots).indexOf(slotElement);
    if (index !== -1) currentLineup[index] = player;
    
    const playerImage = getPlayerImage(player.name);
    const clubShield = getClubShield(player.club);
    
    playerCard.classList.remove("empty");
    playerCard.classList.add("filled");
    playerCard.innerHTML = `
        <div class="player-icon">
            ${playerImage ? `<img src="${playerImage}" alt="${player.name}" onerror="this.src='${clubShield || player.flag}'">` : (clubShield ? `<img src="${clubShield}" alt="${player.club}">` : player.flag)}
        </div>
        <div class="player-name" title="${player.name}">${player.name}</div>
        <div class="player-meta" title="${player.club}">${player.club}</div>
        <div class="player-meta" title="${player.nationality} • ${player.valueStr}">${player.nationality} • ${player.valueStr}</div>
    `;
    const modal = document.getElementById("playerModal");
    if (modal) modal.classList.remove("active");
    currentSlot = null;
}

// Função para abrir o modal com os filtros da posição
function openPositionModal(slot) {
    currentSlot = slot;
    const posName = slot.getAttribute("data-pos-name") || slot.getAttribute("data-position");
    const positionTag = document.getElementById("currentPositionTag");
    if (positionTag) {
        positionTag.innerHTML = `📍 ${posName}`;
    }
    
    // Resetar filtros do modal
    modalSearchText = "";
    modalCurrentClubFilter = "all";
    modalCurrentCountryFilter = "all";
    modalCurrentValueRange = "all";
    
    const searchInput = document.getElementById("playerSearchInput");
    if (searchInput) searchInput.value = "";
    
    renderPlayersList();
    const modal = document.getElementById("playerModal");
    if (modal) modal.classList.add("active");
}

// Limpar filtros do modal
function clearModalFilters() {
    modalSearchText = "";
    modalCurrentClubFilter = "all";
    modalCurrentCountryFilter = "all";
    modalCurrentValueRange = "all";
    
    const searchInput = document.getElementById("playerSearchInput");
    if (searchInput) searchInput.value = "";
    
    renderPlayersList();
}

// Funções de formação
function changeFormation(formation) {
    currentFormation = formation;
    document.getElementById("formationBtn").innerHTML = formation + " ▼";
    
    const attackRow = document.getElementById("attackRow");
    const midfieldRow = document.getElementById("midfieldRow");
    const defenseRow = document.getElementById("defenseRow");
    
    const allSlots = document.querySelectorAll(".player-slot");
    allSlots.forEach(slot => {
        const playerCard = slot.querySelector(".player-card");
        playerCard.classList.remove("filled");
        playerCard.classList.add("empty");
        playerCard.innerHTML = `<div class="player-icon">👤</div><div class="player-name">Vago</div><div class="player-meta">Clique no +</div><div class="player-meta">adicionar</div>`;
    });
    
    currentLineup = Array(18).fill(null);
    
    const formations = {
        "4-3-3": { attack: 3, midfield: 3, defense: 4 },
        "4-4-2": { attack: 2, midfield: 4, defense: 4 },
        "4-2-3-1": { attack: 1, midfield: 4, defense: 4 },
        "3-4-3": { attack: 3, midfield: 4, defense: 3 },
        "3-5-2": { attack: 2, midfield: 5, defense: 3 },
        "4-1-2-1-2": { attack: 2, midfield: 4, defense: 4 },
        "5-3-2": { attack: 2, midfield: 3, defense: 5 },
        "4-5-1": { attack: 1, midfield: 5, defense: 4 }
    };
    
    const config = formations[formation];
    if (!config) return;
    
    adjustRowDisplay(attackRow, config.attack);
    adjustRowDisplay(midfieldRow, config.midfield);
    adjustRowDisplay(defenseRow, config.defense);
    reindexSlots();
}

function adjustRowDisplay(row, count) {
    if (!row) return;
    const slots = row.querySelectorAll(".player-slot");
    slots.forEach((slot, index) => {
        if (index < count) {
            slot.style.display = "flex";
        } else {
            slot.style.display = "none";
        }
    });
}

function reindexSlots() {
    const allSlots = document.querySelectorAll(".player-slot:not(.hidden-slot)");
    allSlots.forEach((slot, newIndex) => {
        slot.setAttribute("data-index", newIndex);
    });
}

// Funções de escalação
function clearLineup() {
    currentLineup = Array(18).fill(null);
    const allSlots = document.querySelectorAll(".player-slot");
    allSlots.forEach((slot) => {
        const playerCard = slot.querySelector(".player-card");
        playerCard.classList.remove("filled");
        playerCard.classList.add("empty");
        playerCard.innerHTML = `<div class="player-icon">👤</div><div class="player-name">Vago</div><div class="player-meta">Clique no +</div><div class="player-meta">adicionar</div>`;
    });
}

function saveLineup() {
    const nameInput = document.getElementById("lineupName");
    const name = nameInput ? nameInput.value.trim() : "";
    if (!name) { alert("Por favor, insira um nome para a escalação!"); return; }
    const hasPlayers = currentLineup.some(p => p !== null);
    if (!hasPlayers) { alert("Adicione pelo menos um jogador antes de salvar!"); return; }
    const lineup = { id: Date.now(), name: name, players: [...currentLineup], formation: currentFormation, date: new Date().toLocaleDateString() };
    savedLineups.unshift(lineup);
    if (savedLineups.length > 5) savedLineups.pop();
    localStorage.setItem('fantasyLineups', JSON.stringify(savedLineups));
    renderSavedLineups();
    if (nameInput) nameInput.value = "";
    alert(`Escalação "${name}" salva com sucesso!`);
}

function renderSavedLineups() {
    const container = document.getElementById("savedLineups");
    if (!container) return;
    if (savedLineups.length === 0) { container.innerHTML = '<p style="font-size: 13px; color: #e0e0e0;">Nenhuma escalação salva ainda.</p>'; return; }
    container.innerHTML = savedLineups.map(lineup => `<div class="saved-lineup-item" data-id="${lineup.id}"><strong>${lineup.name}</strong><br><small>${lineup.date} - ${lineup.formation}</small><span style="float: right; color: #ffd966;">↻ carregar</span></div>`).join("");
    document.querySelectorAll(".saved-lineup-item").forEach(item => { item.addEventListener("click", () => loadLineup(parseInt(item.dataset.id))); });
}

function loadLineup(id) {
    const lineup = savedLineups.find(l => l.id === id);
    if (!lineup) return;
    if (lineup.formation && lineup.formation !== currentFormation) changeFormation(lineup.formation);
    currentLineup = [...lineup.players];
    const allSlots = document.querySelectorAll(".player-slot:not(.hidden-slot)");
    allSlots.forEach((slot, index) => {
        const player = currentLineup[index];
        const playerCard = slot.querySelector(".player-card");
        if (player) {
            const playerImage = getPlayerImage(player.name);
            const clubShield = getClubShield(player.club);
            playerCard.classList.remove("empty");
            playerCard.classList.add("filled");
            playerCard.innerHTML = `
                <div class="player-icon">
                    ${playerImage ? `<img src="${playerImage}" alt="${player.name}" onerror="this.src='${clubShield || player.flag}'">` : (clubShield ? `<img src="${clubShield}" alt="${player.club}">` : player.flag)}
                </div>
                <div class="player-name" title="${player.name}">${player.name}</div>
                <div class="player-meta" title="${player.club}">${player.club}</div>
                <div class="player-meta" title="${player.nationality} • ${player.valueStr}">${player.nationality} • ${player.valueStr}</div>
            `;
        } else {
            playerCard.classList.remove("filled");
            playerCard.classList.add("empty");
            playerCard.innerHTML = `<div class="player-icon">👤</div><div class="player-name">Vago</div><div class="player-meta">Clique no +</div><div class="player-meta">adicionar</div>`;
        }
    });
    const nameInput = document.getElementById("lineupName");
    if (nameInput) nameInput.value = lineup.name;
    alert(`Escalação "${lineup.name}" carregada!`);
}

// Funções de modal
function openFilterModal(modalId) { document.getElementById(modalId).classList.add("active"); }
function closeFilterModal(modalId) { document.getElementById(modalId).classList.remove("active"); }

// Configurar eventos
function setupEventListeners() {
    // Botões + - agora abrem o modal com filtro por posição
    document.querySelectorAll(".plus-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const slot = btn.closest(".player-slot");
            if (slot && slot.style.display !== "none") {
                openPositionModal(slot);
            }
        });
    });

    // Botão de formação (fora do modal)
    document.getElementById("formationBtn")?.addEventListener("click", () => openFilterModal("formationModal"));
    document.querySelectorAll(".formation-option").forEach(opt => {
        opt.addEventListener("click", () => { changeFormation(opt.dataset.formation); closeFilterModal("formationModal"); });
    });

    // Fechar modal principal
    document.getElementById("closeModalBtn")?.addEventListener("click", () => {
        document.getElementById("playerModal").classList.remove("active");
        currentSlot = null;
    });
    document.getElementById("playerModal")?.addEventListener("click", (e) => {
        if (e.target === document.getElementById("playerModal")) {
            document.getElementById("playerModal").classList.remove("active");
            currentSlot = null;
        }
    });

    // Busca dentro do modal
    document.getElementById("playerSearchInput")?.addEventListener("input", (e) => {
        modalSearchText = e.target.value;
        renderPlayersList();
    });

    // Botões de filtro dentro do modal
    document.getElementById("filterClubBtnModal")?.addEventListener("click", () => openFilterModal("clubFilterModal"));
    document.getElementById("filterCountryBtnModal")?.addEventListener("click", () => openFilterModal("countryFilterModal"));
    document.getElementById("filterValueBtnModal")?.addEventListener("click", () => openFilterModal("valueFilterModal"));
    document.getElementById("clearFiltersBtn")?.addEventListener("click", clearModalFilters);

    // Filtro de clube
    document.querySelectorAll("#clubFilterList .filter-option").forEach(opt => {
        opt.addEventListener("click", () => {
            modalCurrentClubFilter = opt.dataset.club;
            closeFilterModal("clubFilterModal");
            renderPlayersList();
        });
    });

    // Filtro de país
    document.querySelectorAll("#countryFilterList .filter-option").forEach(opt => {
        opt.addEventListener("click", () => {
            modalCurrentCountryFilter = opt.dataset.country;
            closeFilterModal("countryFilterModal");
            renderPlayersList();
        });
    });

    // Filtro de valor
    document.querySelectorAll("#valueFilterList .filter-option").forEach(opt => {
        opt.addEventListener("click", () => {
            modalCurrentValueRange = opt.dataset.value;
            closeFilterModal("valueFilterModal");
            renderPlayersList();
        });
    });

    // Fechar submodais
    document.querySelectorAll(".close-club, .close-country, .close-value, .close-formation").forEach(btn => {
        btn.addEventListener("click", () => {
            btn.closest(".modal-overlay").classList.remove("active");
        });
    });

    document.querySelectorAll(".modal-overlay").forEach(modal => {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) modal.classList.remove("active");
        });
    });

    // Times na lateral - NOVA FUNCIONALIDADE: preenche o time inteiro
    document.querySelectorAll(".team-row").forEach(team => {
        team.addEventListener("click", () => {
            const teamName = team.querySelector("span:last-child").textContent;
            if (confirm(`Deseja preencher toda a escalação com os jogadores do ${teamName}?`)) {
                fillTeamWithClub(teamName);
            }
        });
    });

    // Busca global na lateral (agora também pode preencher time)
    const globalSearch = document.getElementById("globalSearch");
    if (globalSearch) {
        globalSearch.addEventListener("input", (e) => {
            const searchTerm = e.target.value;
            if (searchTerm.length > 0 && currentSlot) {
                modalSearchText = searchTerm;
                modalCurrentClubFilter = "all";
                modalCurrentCountryFilter = "all";
                modalCurrentValueRange = "all";
                renderPlayersList();
                document.getElementById("playerModal").classList.add("active");
            }
        });
    }

    // Botões de limpar e salvar
    document.getElementById("clearLineupBtn")?.addEventListener("click", clearLineup);
    document.getElementById("saveLineupBtn")?.addEventListener("click", saveLineup);
}

// Inicializar
document.addEventListener("DOMContentLoaded", () => {
    renderSavedLineups();
    setupEventListeners();
    changeFormation("4-3-3");
});