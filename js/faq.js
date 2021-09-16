$(document).ready(function () {
  $('li.pregunta').on('click', function () {
    $(this)
      .next()
      .slideToggle(500)
      .siblings('li.respuesta')
      .slideUp()

    const imgPregAct = $(this).children('img')
    $(imgPregAct).attr('src', './media/help2.png')
    $('.imgPregunta').not(imgPregAct).attr('src', './media/help.png')
  })
  
})
