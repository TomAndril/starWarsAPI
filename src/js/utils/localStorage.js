////////////////////////////////////////////////////
// FUNCION DE OBTENCION DE DATOS DE LOCAL STORAGE //
////////////////////////////////////////////////////

function getLocalStorage(index, parentNode) {
  var gettedData = localStorage.getItem(index)
  var parsedData = JSON.parse(gettedData)
  if (parsedData == null) {
    console.log("No hay datos almacenados en localStorage")
  } else {
    for (let i = 0; i < parsedData.length; i++) {
      var element = parsedData[i];
      $(parentNode).append(``);
    }
  }
}

////////////////////////////////////////////////
// FUNCION DE SETEO DE DATOS EN LOCAL STORAGE //
////////////////////////////////////////////////

function setLocalStorage(key) {
  var gettedData = localStorage.getItem(key)
  var parsedData = JSON.parse(gettedData)

  if (parsedData == null) {
    parsedData = []
  }

  var characterObject = {
    firstName: firstNameInput.val(),
    lastName: lastNameInput.val(),
    dni: dniInput.val(),
    email: emailInput.val(),
    id: dniInput.val()
  }

  parsedData.push(characterObject)
  var stringifiedObject = JSON.stringify(parsedData)
  localStorage.setItem(key, stringifiedObject)
}

export {
  getLocalStorage,
  setLocalStorage
}