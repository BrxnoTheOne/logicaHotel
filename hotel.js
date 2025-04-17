        var lista_hospedes = []
		var quartos = ["1", "2","3", "4","5", "6","7", "8","9", "9","10", "11","12", "13", "14","15", "16","17", "18","19", "20"]
		var quartos_em_uso = []

		function escolha_do_hospede(){
			var escolha = parseInt(prompt("Escolha: \n\n1.cadastro"))

            if (escolha === 1){
                return cadastro_hospedes()
            } else if (escolha === 2){
                return pesquisa_hospedes()
            }
		}

        function cadastro_hospedes(){

            if (lista_hospedes >= 20){
                alert ("Número de hospedes atingido!");
            }else {
                var nome = prompt("Digite seu nome: ")
                hospedes.push(nome)
                alert("Parabens " + nome + " foi cadastrado")
                console.log(lista_hospedes)
            }
        }

        function pesquisa_hospedes (){

                var nome = prompt("Digite o nome que voce deseja achar: ")
                if (lista_hospedes.includes (nome)){
                    alert("Hospede "+ nome + " encontrado")
                }else{
                    alert("hospede não encontrado...")
                    sair()
                }
        }

        function escolha_de_quarto(){

            var escolha_quarto = parseInt(prompt("escolha um quarto de 1 a 20: "))

            if(escolha_quarto >= 1 && escolha_quarto <= 20){
                quartos_em_uso.push(escolha_quarto)
                alert("Quarto "+ escolha_quarto + " reservado")
            }else {
                alert("quarto ocupado")
                sair()
            }
            console.log(quartos_em_uso)
        }

        function retirar_hospede(){
            
            var hospede = prompt("Qual hospede deseja retirar? ")

            if (lista_hospedes.splice (hospede)){
                alert("hospede "+ hospede + " retirado" )
            }else {
                alert("hospede não encontrado")
                sair()
            }
        }

        function sair() {
			var confirma = confirm('Você deseja sair?');
			if (confirma) {
				window.close();
			} else {
				inicio();
			}}