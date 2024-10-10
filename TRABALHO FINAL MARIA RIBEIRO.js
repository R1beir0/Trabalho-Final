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
	console.log(abrigos)
}


//Função listar abrigos 
function listaDeAbrigos() {
if (abrigos.length === 0) {
	alert("Nenhum abrigo cadastrado:(");
} else {
    for(let i = 0; i < abrigos.length; i++) {
        alert( `Lista de abrigos: \n
            código = ${i+1} \n
            nome = ${abrigos[i].nome} \n
            endereço = ${abrigos[i].endereco} \n
            telefone = ${abrigos[i].telefone} \n
            capacidade = ${abrigos[i].capacidade} \n`);	

}

} 
}

//Função procurar abrigos 
function procurarAbrigo() {
	let busca = prompt("Informe a cidade do abrigo que você deseja procurar:");
	let resultado = [];

	for (let abrigo of abrigos) {
		if (
		
			abrigo.endereco === busca)
		 {
			resultado.push(abrigo);
		}
	}
	
	if (resultado.length > 0) {
		let listaResultado = "Abrigos encontrados:\n";
		for (let i = 0; i < resultado.length; i++) {
			alert(`Código = ${i}\n
				Nome = ${resultado[i].nome}\n
				Endereço = ${resultado[i].endereco}\n
				Telefone = ${resultado[i].telefone}\n
				Capacidade = ${resultado[i].capacidade}\n`);
		}
	
	} else {
		alert("Nenhum abrigo encontrado na sua cidade.");
	}
}


