import { productosTienda } from './productos.js'

const cajaBooks = document.querySelector('#productos1')
const cajaMerchandising = document.querySelector('#productos2')

const arrayBook = productosTienda.filter(element => element.product == 'book')
console.log(arrayBook)

const arrayMerchandising = productosTienda.filter(
  element => element.product == 'merchandising'
)
console.log(arrayMerchandising)

//DOM tienda
const tienda = (array, ubicacion) => {
  array.forEach(element => {
    const divProducto = document.createElement('div')
    divProducto.classList.add('divElementos')
    divProducto.classList.add('zoom')
    divProducto.dataset.id = element.id

    const imgProducto = document.createElement('img')
    imgProducto.src = element.image
    imgProducto.classList.add('imgTienda')

    const precio = document.createElement('p')
    precio.innerText = `$ ${element.price}`
    precio.classList.add('precios')

    ubicacion.appendChild(divProducto)
    divProducto.appendChild(imgProducto)
    divProducto.appendChild(precio)
  })
  productoSeleccionado()
}

//Columnas tienda
tienda(arrayBook, cajaBooks)
tienda(arrayMerchandising, cajaMerchandising)

//Modal producto seleccionado
function productoSeleccionado () {
  const cardsProducto = document.querySelectorAll('.divElementos')
  cardsProducto.forEach(element => {
    element.addEventListener('click', () => {
      const idProducto = parseInt(element.dataset.id)
      const productoEncontrado = productosTienda.find(
        element => element.id === idProducto
      )

      const modalTitle = document.querySelector('.modal-title')
      modalTitle.textContent = productoEncontrado.name
      modalTitle.classList.add('tituloRojo')

      const modalBody = document.querySelector('.modal-body')

      modalBody.innerHTML = `
      <div class="modalDescripcion">
          <p>${productoEncontrado.description}</p>
          <p class= "precio"> <strong>Precio:</strong> $${productoEncontrado.price}</p>

        </div>`

      const modalImagen = document.createElement('img')
      modalImagen.src = productoEncontrado.image
      modalImagen.classList.add('modalImagen')

      modalBody.appendChild(modalImagen)

      const modalFooter = document.querySelector('.modal-footer')
      modalFooter.innerHTML = `
                    <div class="informacionPago">
                    <p><strong>Medios de pago : </strong> Efectivo, transferencia bancaria o Mercado Pago</p>
                    <p><strong>Envios : </strong> Retiro en el Museo (sin costo) o envío a todo el país (Mercado envíos)</p>
                    </div>
                    <div class="btnComprar">
                    <a href="#"  data-id = ${productoEncontrado.id}>Comprar</a>
                    </div>
                `
      $('.modal').show()
      const productoSeleccionado = document.querySelector(
        '#productoSeleccionado'
      )
      productoSeleccionado.classList.add('show')
    
      //comprarProducto();
    })

    $('.btn-close').on('click', function () {
      $('#productoSeleccionado').hide()
      $('.modal-body').empty()
    })
  })
}
