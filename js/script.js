
class Sesion {
    constructor(usuario, pass, bdusuario, bdpwd) {
        this.usuario = usuario
        this.pass = pass
        this.bdusuario = bdusuario
        this.bdpwd = bdpwd
    }

    validar() {
        if (this.usuario !== this.bdusuario && this.pass !== this.bdpwd) {
            alertify.error("Usuario y contraseña incorrectos")
        } else if (this.usuario !== this.bdusuario) {
            alertify.error("Usuario incorrecto")
        } else if (this.pass !== this.bdpwd) {
            alertify.error("Contraseña incorrecta")
        } else {
            alertify.success("Credenciales correctas")
            setTimeout(() => {
                location.href = "/crear-perfil.html"
            }, 3000);
        }
    }
}


class usuario extends Sesion {
    constructor(usuario, pass, bdusuario, bdpwd) {
        super(usuario, pass, bdusuario, bdpwd)
    }

    obtenerPerfil() {
        return JSON.parse(localStorage.getItem('perfil'))
    }

    guardarPerfil(perfil) {
        localStorage.setItem('perfil', JSON.stringify(perfil))
    }
}

function login() {
    let user = document.getElementById('user').value
    let pwd = document.getElementById('pwd').value

    usuario = new usuario(user, pwd, 'William', '123')
    usuario.validar()
}

function crearPerfil(event) {
    // guardar en local storage la informacion
    // reenviar a /perfil 
    const urlQuery = obtenerInfoUrlQueryParams();
    window.location.href = `/perfil.html${urlQuery}`
}

function editarPerfil() {
    const urlQuery = window.location.search;
    window.location.href = `/editar.html${urlQuery}`
}

function guardarPerfil() {
    const urlQuery = obtenerInfoUrlQueryParams();
    window.location.href = `/perfil.html${urlQuery}`
}

function obtenerInfoUrlQueryParams() {
    const nombre = document.getElementById("nombre").value
    const fechaNacimiento = document.getElementById("fechaNacimiento").value
    const genero = document.getElementById("genero").value
    const departamento = document.getElementById("departamento").value
    const ciudad = document.getElementById("ciudad").value
    const numTelefono = document.getElementById("numTelefono").value
    const descripcion = document.getElementById("descripcion").value
    const url = "?nombre=" + nombre + "&fechaNacimiento=" + fechaNacimiento + "&genero=" + genero + "&departamento=" + departamento + "&ciudad=" + ciudad + "&numTelefono=" + numTelefono + "&descripcion=" + descripcion
    return url
}
