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
}

function login() {
    let user = document.getElementById('user').value
    let pwd = document.getElementById('pwd').value

    Consulta = new usuario(user, pwd, 'William', '123')
    Consulta.validar()
}

function crearPerfil(event) {
    const nombre = document.getElementById("nombre").value
    const fechaNacimiento = document.getElementById("fechaNacimiento").value
    const genero = document.getElementById("genero").value
    const departamento = document.getElementById("departamento").value
    const ciudad = document.getElementById("ciudad").value
    const numTelefono = document.getElementById("numTelefono").value
    const descripcion = document.getElementById("descripcion").value
    const $body = document.getElementsByTagName("body")[0];

    $body.innerHTML = `
    <div class="contenedor">
        <h1 class="crear-perfil-title">Perfil</h1>
        <div>
            <p>Nombre: ${nombre}</p> 
            <br>
            <p>Fecha de Nacimiento: ${fechaNacimiento}</p> 
            <br>
            <p>Genero: ${genero}</p>
            <br>
            <p>Departamento: ${departamento}</p>
            <br>
            <p>Ciudad: ${ciudad}</p>
            <br>
            <p>Numero de telefono: ${numTelefono}</p>
            <br>
            <p>Descripcion: ${descripcion}</p>
        </div>
    </div> 
    `
}