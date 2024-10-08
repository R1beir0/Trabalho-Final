let menu;
let abrigos = []

do {
	menu = exibirMenu();

	switch (menu) {
		case '1': 
			cadastrarAbrigo();
			break; 
		case '2':
			listaDeAbrigos();
			break; 
		case '3':
			procurarAbrigo();
			break;
		case '4':
			sair();
			break;
		default:
			alert("Opção inválida. Tente novamente.");
			break;
	}
} while (menu !== '4');

function sair () {
	alert("Saindo...");
}

function exibirMenu() {
	return prompt(`
		===== ABRIGOS TEMPORÁRIOS =====
		1. Cadastrar abrigo
		2. Listar abrigos
		3. Procurar abrigo
		4. Sair
		Escolha uma opção:`);
}


//Função para cadastrar abrigo
function cadastrarAbrigo() {
	let nome = prompt("Informe o nome do abrigo que deseja cadastrar:");
	let endereco = prompt("Informe o endereço do abrigo:");
	let telefone = parseInt(prompt("Informe o telefone do abrigo:"));
	let capacidade = Number(prompt("Informe a capacidade de lotação do abrigo:"));

	let abrigo = {
		nome: nome,
		endereco: endereco, 
		telefone: telefone,
		capacidade: capacidade,
	};
    abrigos.push(abrigo);
	alert("Abrigo cadastrado com sucesso!")
}


//Função listar abrigos 
function listaDeAbrigos() {
if (listaDeAbrigos.length === 0) {
	alert("Nenhum abrigo cadastrado:(");
} else {
	 "===== ABRIGOS TEMPORÁRIOS =====\n";
    for(let abrigo of abrigos) {
        alert( `Lista de abrigos: \n
            código = ${index} \n
            nome = ${abrigo.nome} \n
            endereço = ${abrigo.endereco} \n
            telefone = ${abrigo.telefone} \n
            capacidade = ${abrigo.telefone} \n`);
			
}

} 
}

//Função procurar abrigos 
function procurarAbrigo() {
	let busca = prompt("Informe o nome, endereço, telefone, capacidade ou cidade do abrigo que você deseja procurar:");
	let resultado = [];

	for (let abrigo of abrigos) {
		if (
			abrigo.nome.toLowerCase().includes(busca.toLowerCase()) ||
			abrigo.endereco.toLowerCase().includes(busca.toLowerCase()) ||
			abrigo.telefone.includes(busca) || // telefone é tratado como string
			abrigo.capacidade.toString() === busca || // capacidade como string
			abrigo.cidade.toLowerCase().includes(busca.toLowerCase())
		) {
			resultado.push(abrigo);
		}
	}
	
	if (resultado.length > 0) {
		let listaResultado = "Abrigos encontrados:\n";
		for (let i = 0; i < resultado.length; i++) {
			let abrigo = resultado[i];
			listaResultado += `Código = ${abrigos.indexOf(abrigo)}\n
			Nome = ${abrigo.nome}\n
			Endereço = ${abrigo.endereco}\n
			Telefone = ${abrigo.telefone}\n
			Capacidade = ${abrigo.capacidade}\n
			Cidade = ${abrigo.cidade}\n\n`;
		}
		alert(listaResultado);
	} else {
		alert("Nenhum abrigo encontrado com esses critérios.");
	}
}
