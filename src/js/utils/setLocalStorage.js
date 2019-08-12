////////////////////////////////////////////////
// FUNCION DE SETEO DE DATOS EN LOCAL STORAGE //
////////////////////////////////////////////////

function setLocalStorage (key, list) {
    var gettedData = localStorage.getItem(key)
    var parsedData = JSON.parse(gettedData)

    if (parsedData == null) {
        parsedData = []
    }

      parsedData.push(list)
      var strList = JSON.stringify(parsedData)
      localStorage.setItem(key, strList)
    
  }

export default setLocalStorage