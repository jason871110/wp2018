$('.transfer').click(function () {
  // console.log(123)
  $('.content').animate({
    top: "120%"
  }, 1000, function () {
    $('img').animate({
      width: '2000px',
      top: "-300px",
      left: "-200px"

    }, 1500, function () {
      $('.leftshow').animate({
        height: "500px",
      }, 300, function () {
        $('#tytle').animate({

        })

      })
    })
  })
});


$('.delete').click()