const nombreUsuario = document.querySelector('#nombre')
const emailUsuario = document.querySelector('#email')
const telefonoUsuario = document.querySelector('#telefono')
const areaTexto = document.querySelector('#areaTexto')

const validarFormulario = e => {
  e.preventDefault()
  //Datos vacios
  if (nombreUsuario.value === '') {
    nombreUsuario.classList.add('alerta')
    console.log('Completar nombre')
    return false
  }

  //email
  if (!emailValido(emailUsuario.value)) {
    emailUsuario.classList.add('alerta')
    console.log('Completar email')
    return false
  } else emailUsuario.value === ''

  //telefono
  if (isNaN(telefonoUsuario.value)) {
    telefonoUsuario.classList.add('alerta')
    console.log('Completar telefono')
    return false
  } else telefonoUsuario.value === ''

  if (areaTexto.value === '') {
    areaTexto.classList.add('alerta')
    console.log('Escribir consulta')
    return false
  }

  guardarConsulta()

  setTimeout(() => {
    CartelConfirmacion()
  }, 1500)
  
  $("form select").each(function() { this.selectedIndex = 0 });
  $("form input[type=text],form input [type=checkbox],form input [type=email] , form textarea").each(function() { this.value = '' });
    return true
}

const emailValido = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

$('#cajaDatos').hide()

function CartelConfirmacion () {
  let datosFondoBl = $('#datosFondoBl')
  datosFondoBl.append(
    '<h2>Gracias por contactarnos!</h2><p>Recibiras una respuesta a la brevedad</p>'
  )

  $('#cajaDatos').show()

  $(document).on('click', function (e) {
    let cajaDatos = $('#cajaDatos')
    if (!cajaDatos.is(e.target) && cajaDatos.has(e.target).length === 0) {
      $('#cajaDatos').hide()
    }
  })
}

function reseteo () {
  nombreUsuario.classList.remove('alerta')
  emailUsuario.classList.remove('alerta')
  telefonoUsuario.classList.remove('alerta')
  areaTexto.classList.remove('alerta')
}

$('#btnEnviar').on('click', validarFormulario)
$('#btnResetear').on('click', reseteo)



function guardarConsulta () {
  let nombre = nombreUsuario.value,
    email = emailUsuario.value,
    telefono = telefonoUsuario.value,
    texto = areaTexto.value

  addConsulta(nombre, email, telefono, texto)
}

let arrayConsulta = []

function addConsulta (nombre, email, telefono, texto) {
  const consulta = {
    nombre: nombre,
    email: email,
    telefono: telefono,
    texto: texto
  }
  arrayConsulta.push(consulta)

  localStorage.setItem('Lista de Consultas', JSON.stringify(arrayConsulta))

  const consultasAlmacenadas = JSON.parse(
    localStorage.getItem('Lista de Consultas')
  )
  console.log(consultasAlmacenadas)
}

