

var datos = new Object();

function validarNombre(){
	var regex = /^[a-zA-ZÀ-ÿ\s]{2,40}$/;
	var nombre = document.getElementById('nombre').value;
	var div = document.getElementById('cont-nombre');
	var errorNombre = document.getElementById('form-error-nombre');

	
	if(!regex.test(nombre)){
        div.classList.add('cont-form-incorrecto')
		div.classList.remove('cont-form-correcto')
		errorNombre.classList.add('form-error-activo')

	} else{
		div.classList.add('cont-form-correcto')
		div.classList.remove('cont-form-incorrecto')
		errorNombre.classList.remove('form-error-activo')
		datos["Nombre"] = nombre
	}

}


function validarApellido(){
	var regex = /^[a-zA-ZÀ-ÿ\s]{2,40}$/;
	var apellido = document.getElementById('apellido').value;
	var div = document.getElementById('cont-apellido');
	var errorApellido = document.getElementById('form-error-apellido');
	
	if(!regex.test(apellido)){
        div.classList.add('cont-form-incorrecto')
		div.classList.remove('cont-form-correcto')
		errorApellido.classList.add('form-error-activo')

	} else{
		div.classList.add('cont-form-correcto')
		div.classList.remove('cont-form-incorrecto')
		errorApellido.classList.remove('form-error-activo')
		datos["Apellido"] = apellido
	}

}


function validarCorreo(){
	var regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
	var correo = document.getElementById('correo');
	var div = document.getElementById('cont-correo');
	var errorCorreo = document.getElementById('form-error-correo');
	
	if(!regex.test(correo.value)){
        div.classList.add('cont-form-incorrecto')
		div.classList.remove('cont-form-correcto')
		errorCorreo.classList.add('form-error-activo')

	} else{
		div.classList.add('cont-form-correcto')
		div.classList.remove('cont-form-incorrecto')
		errorCorreo.classList.remove('form-error-activo')
		datos["Correo"] = correo
	}

}

function validarNumero(){
	var regex = /^\+\d{8,11}$/
	var telefono = document.getElementById('telefono');
	var div = document.getElementById('cont-telefono');
	var errorTelefono = document.getElementById('form-error-telefono');
	
	if(!regex.test(telefono.value)){
        div.classList.add('cont-form-incorrecto')
		div.classList.remove('cont-form-correcto')
		errorTelefono.classList.add('form-error-activo')

	} else{
		div.classList.add('cont-form-correcto')
		div.classList.remove('cont-form-incorrecto')
		errorTelefono.classList.remove('form-error-activo')
		datos["Numero"] = telefono
	}

}

function validarDireccion(){
	var regex = /^[a-zA-ZÀ-ÿ\s\.\-\,]{6,50}$/;
	var direccion = document.getElementById('direccion');
	var div = document.getElementById('cont-direccion');
	var errorDireccion = document.getElementById('form-error-direccion');
	
	if(!regex.test(direccion.value)){
        div.classList.add('cont-form-incorrecto')
		div.classList.remove('cont-form-correcto')
		errorDireccion.classList.add('form-error-activo')

	} else{
		div.classList.add('cont-form-correcto')
		div.classList.remove('cont-form-incorrecto')
		errorDireccion.classList.remove('form-error-activo')
		datos["Direccion"] = direccion
	}

}

function validarComentario(){
	var regex = /^[a-zA-ZÀ-ÿ\s\.\-\,]{6,50}$/;
	var comentario = document.getElementById('comentario');
	var div = document.getElementById('cont-comentario');
	var errorComentario = document.getElementById('form-error-comentario');
	
	if(!regex.test(comentario.value)){
        div.classList.add('cont-form-incorrecto')
		div.classList.remove('cont-form-correcto')
		errorComentario.classList.add('form-error-activo')

	} else{
		div.classList.add('cont-form-correcto')
		div.classList.remove('cont-form-incorrecto')
		errorComentario.classList.remove('form-error-activo')
		datos["Comentario"] = comentario
	}

	console.log(datos)
}





 