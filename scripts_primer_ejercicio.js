$(document).ready(function(){
	var texto = "aabb";
	var caracteres = texto.split("");
	var index=0;

	function getLetra(index){
		if(caracteres){
			return caracteres[index];
		}else{
			return "vacio";
		}
	}

	function estado_cero(){
			caracter = getLetra(index);
			index++;
			switch (caracter) {
				case 'a':
					return estado_uno();
					break;
				case 'b':
					return estado_cuatro();
					break;
				default:
					console.log("Error");
					break;
			}
	}

	function estado_uno(){
			caracter = getLetra(index);
			index++;
			switch (caracter) {
				case 'a':
					return estado_uno();
					break;
				case 'b':
					return estado_dos();
					break;
				default:
					console.log("Error");
					break;
			}
	}

	function estado_dos(){
			caracter = getLetra(index);
			index++;
			switch (caracter) {
				case 'a':
					return estado_uno();
					break;
				case 'b':
					return estado_tres();
					break;
				default:
					console.log("Error");
					break;
			}
	}

	function estado_tres(){
		return console.log('ACEPTADO');
	}

	function estado_cuatro(){
			caracter = getLetra(index);
			index++;
			switch (caracter) {
				case 'a':
					return estado_uno();
					break;
				case 'b':
					return estado_cuatro();
					break;
				default:
					console.log("Error");
					break;
			}
		}

	estado_cero();

});
