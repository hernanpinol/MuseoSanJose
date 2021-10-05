const nombreUsuario = document.querySelector('#nombre')
const emailUsuario = document.querySelector('#email')
const telefonoUsuario = document.querySelector('#telefono')
const areaTexto = document.querySelector('#areaTexto')

const validarFormulario = e => {
  e.preventDefault()
  $('input').removeClass('alerta')
  $('textarea').removeClass('alerta')
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

  //Cartel de Confirmación (ejecución)
  setTimeout(() => {
    CartelConfirmacion()
  }, 1500)

  //Borrar datos del formulario
  $('#formularioContacto')[0].reset()

  return true
}

const emailValido = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function CartelConfirmacion () {
  let datosFondoBl = $('#datosFondoBl')
  datosFondoBl.append(
    '<h2>Gracias por contactarnos!</h2><p>Recibiras una respuesta a la brevedad</p>'
  )
  $('#cajaDatos').show()
  $('#faq').hide()
}

//Ocultar cartel de confirmación al hacer click afuera del mismo
$(document).on('click', function (e) {
  let cajaDatos = $('#cajaDatos')
  if (!cajaDatos.is(e.target) && cajaDatos.has(e.target).length === 0) {
    $('#cajaDatos').hide()
    $('#faq').show()
    $('#datosFondoBl').empty()
  }
})

function reseteo () {
  nombreUsuario.classList.remove('alerta')
  emailUsuario.classList.remove('alerta')
  telefonoUsuario.classList.remove('alerta')
  areaTexto.classList.remove('alerta')
}

$('#btnEnviar').on('click', validarFormulario)
$('#btnResetear').on('click', reseteo)

$('#cajaDatos').hide()
