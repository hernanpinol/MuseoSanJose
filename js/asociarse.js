const apellidoAscendencia = document.querySelector('#apellidoAscendencia')
const origenApellido = document.querySelector('#origenApellido')
const nombreSocio = document.querySelector('#nombre')
const apellidoSocio = document.querySelector('#apellido')
const dniSocio = document.querySelector('#dni')
const nacimientoSocio = document.querySelector('#nacimiento')
const ciudadSocio = document.querySelector('#ciudad')
const provinciaSocio = document.querySelector('#provincia')
const CP = document.querySelector('#cp')
const telefonoSocio = document.querySelector('#telefono')
const emailSocio = document.querySelector('#mail')
const frecuenciaPago = document.querySelector('#frecuenciaPago')
const modoPago = document.querySelector('#modoPago')
const pagoExterior = document.querySelector('#pagoExterior')

const validarFormulario = e => {
  e.preventDefault()
  $('input').removeClass('alerta')
  $('textarea').removeClass('alerta')

  //Datos vacios
  if (apellidoAscendencia.value === '') {
    apellidoAscendencia.classList.add('alerta')
    return false
  }
  if (origenApellido.value === '') {
    origenApellido.classList.add('alerta')
    return false
  }
  if (nombreSocio.value === '') {
    nombreSocio.classList.add('alerta')
    return false
  }
  if (apellidoSocio.value === '') {
    apellidoSocio.classList.add('alerta')
    return false
  }

  //DNI
  if (isNaN(dniSocio.value)) {
    dniSocio.classList.add('alerta')
    return false
  } else dniSocio.value === ''

  //Ciudad
  if (ciudadSocio.value === '') {
    ciudadSocio.classList.add('alerta')
    return false
  }
  //Provincia
  if (provinciaSocio.value === '') {
    provinciaSocio.classList.add('alerta')
    return false
  }
  //C.P.
  if (isNaN(CP.value)) {
    CP.classList.add('alerta')
    return false
  } else CP.value === ''

  //telefono
  if (isNaN(telefonoSocio.value)) {
    telefonoSocio.classList.add('alerta')
    return false
  } else telefonoSocio.value === ''

  //email
  if (!emailValido(emailSocio.value)) {
    emailSocio.classList.add('alerta')
    return false
  } else emailSocio.value === ''

  //Cartel de Confirmación (ejecución)
  setTimeout(() => {
    CartelConfirmacion()
  }, 1500)

  $('#formularioAsociarse')[0].reset()

  return true
}

const emailValido = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function CartelConfirmacion () {
  let datosFondoBl = $('#datosFondoBl')
  datosFondoBl.append(
    '<h2>Gracias por asociarte!</h2><p>Nos pondremos en contacto a la brevedad</p>'
  )
  $('#cajaDatos').show()
}

//Ocultar cartel de confirmación al hacer click afuera del mismo
$(document).on('click', function (e) {
  let cajaDatos = $('#cajaDatos')
  if (!cajaDatos.is(e.target) && cajaDatos.has(e.target).length === 0) {
    $('#cajaDatos').hide()
    $('#datosFondoBl').empty()
  }
})

$('#btnEnviar').on('click', validarFormulario)
$('#cajaDatos').hide()
