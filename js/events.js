function getIt() {
  $(`p`).on("click", function() {
  alert(`Hey!`)
  })
}

function frameIt() {
  $(`img`).on(`load`, function() {
    $(`img`).addClass(`tasty`)
  })
}

function pressIt() {
  $(document).on(`keydown`, function() {
    if (key.which == 71) {
      alert(`G was pressed`)
    }
  })
}

function submitIt() {
  $(`form`).on(`submit`, function() {
    alert()
  }
}
$("form").on("submit", submitIt() {
  if ($( "input:first" ).val() === "correct" {
    alert(`your form is going to be submitted no.`)
    return
  }
  alert("you entered the wrong value")
  return
})

getIt()
