$(document).ready(function(){
	var texto;	
	var p;
	var caracteres;
	var simbolos;
	var index;
	var palabra;

	function getLetra(index){
		
		if(caracteres[index]){
			return caracteres[index];
		}else{
			return "vacio";
		}
	}

	function inicio(){
		index=0;
		texto = $('#texto').val();
		p = $('p');
		simbolos = texto.split(" ");
		for(palabra of simbolos){
			caracteres = palabra.split("");
			estado_cero();
			index=0;
		}
	}

	function estado_cero(){
			caracter = getLetra(index);
			index++;
			switch (caracter) {
				case '+':
					return estado_uno();
					break;
				case '-':
					return estado_dos();
					break;
				case '=':
					return estado_tres();
					break;
				case String(caracter.match(/[1-9]/)):
					return estado_cuatro();
					break;
				case 'p':
					return estado_ocho();
					break;
				case String(caracter.match(/[a-z]/)):
					return estado_seis();
					break;

				case 'vacio':
				p.append('ERROR1<br>');
				break;
				default:
				p.append('ERROR2<br>');
				break;
			}
	}

	function estado_uno(){
		p.append('ESTADO ACEPTADO: '+'SUMAR<br>');
	}

	function estado_dos(){
		p.append('ESTADO ACEPTADO: '+'RESTAR<br>');
	}

	function estado_tres(){
		p.append('ESTADO ACEPTADO: '+'ASIGNAR<br>');
	}

	function estado_cuatro(){
			caracter = getLetra(index);
			index++;
			switch (caracter) {
				case '+':
					return estado_cinco();
					break;
				case '-':
					return estado_cinco();
					break;
				case '=':
					return estado_cinco();
					break;
				case String(caracter.match(/[0-9]/)):
					return estado_cuatro();
					break;
				case String(caracter.match(/[a-z]/)):
					return estado_cinco();
					break;
				
				case 'vacio':
				p.append('ERROR3<br>');
				break;
				default:
				p.append('ERROR4<br>');
				break;
			}
		}

	function estado_cinco() {
		p.append('ESTADO ACEPTADO: '+'ENTERO<br>');
		 index--;
		 return estado_cero();
	}

	function estado_seis() {
			caracter = getLetra(index);
			index++;
			switch (caracter) {
				case '+':
					return estado_siete();
					break;
				case '-':
					return estado_siete();
					break;
				case '=':
					return estado_siete();
					break;
				case String(caracter.match(/[1-9]/)):
					return estado_siete();
					break;
				case String(caracter.match(/[a-z]/)):
					return estado_seis();
					break;
				case 'vacio':
					p.append('ERROR5<br>');
					break;
				default:
					p.append('ERROR6<br>');
					break;
			}
	}

	function estado_siete(){
		p.append('ESTADO ACEPTADO: '+'LETRAS<br>');
		index --;
		return estado_cero();
	}

	function estado_ocho() {
			caracter = getLetra(index);
			index++;
			switch (caracter) {
				case '+':
					return estado_trece();
					break;
				case '-':
					return estado_trece();
					break;
				case '=':
					return estado_trece();
					break;
				case String(caracter.match(/[1-9]/)):
				 	return estado_trece();
				 	break;
				case 'r': 
					return estado_nueve();
					break;
				 case String(caracter.match(/[a-z]/)):
				 	return estado_seis();
				 	break;
				case 'vacio':
					p.append('ERROR7<br>');
					break;
				default:
					p.append('ERROR8<br>');
					break;
			}	
	}

	function estado_nueve(){
			
			caracter = getLetra(index);
			index++;
			switch (caracter) {
				case '+':
					return estado_trece();
					break;
				case '-':
					return estado_trece();
					break;
				case '=':
					return estado_trece();
					break;
				case String(caracter.match(/[1-9]/)):
					return estado_trece();
					break;
				case 'i': 
					return estado_diez();
				case String(caracter.match(/[a-z]/)):
					return estado_seis();
					break;

				case 'vacio':
				p.append('ERROR9<br>');
				break;
				default:
				p.append('ERROR10<br>');
				break;
			}		
	}

	function estado_diez() {
			caracter = getLetra(index);
			index++;
			switch (caracter) {
				case '+':
					return estado_trece();
					break;
				case '-':
					return estado_trece();
					break;
				case '=':
					return estado_trece();
					break;
				case String(caracter.match(/[1-9]/)):
					return estado_trece();
					break;
				case 'n': 
					return estado_once();
				case String(caracter.match(/[a-z]/)):
					return estado_seis();
					break;
				
				case 'vacio':
				p.append('ERROR11<br>');
				break;
				default:
				console.log('ERROR12<br>');
				break;
			}	
	}

	function estado_once() {
		
			caracter = getLetra(index);
			index++;
			switch (caracter) {
				case '+':
					return estado_trece();
					break;
				case '-':
					return estado_trece();
					break;
				case '=':
					return estado_trece();
					break;
				case String(caracter.match(/[1-9]/)):
					return estado_trece();
					break;
				case 't': 
					return estado_doce();
				case String(caracter.match(/[a-z]/)):
					return estado_seis();
					break;

				case 'vacio':
				p.append('ERROR13<br>');
				break;
				default:
				p.append('ERROR14<br>');
				break;
			}	
	}

	function estado_doce() {
		p.append('ESTADO ACEPTADO: '+'IMPRIMIR<br>');
	}

	function estado_trece() {
		p.append('ESTADO ACEPTADO: '+'LETRAS<br>');
		index--;
		return estado_cero();

	}

	$('button').click(function (){
		inicio();
	})

});
