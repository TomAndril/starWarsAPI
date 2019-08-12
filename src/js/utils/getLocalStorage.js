////////////////////////////////////////////////////
// FUNCION DE OBTENCION DE DATOS DE LOCAL STORAGE //
////////////////////////////////////////////////////

function getLocalStorage(index, parentNode) {
  var hashCounter = 1
  var gettedData = localStorage.getItem(index)
  var parsedData = JSON.parse(gettedData)
  if (parsedData == null) {
    console.log("No hay datos almacenados en localStorage")
  } else {
    for (let i = 0; i < parsedData.length; i++) {
      var element = parsedData[i];
      $(parentNode).append(`<tr class="character-row">
                        <th scope="row" id="${element.id}">${hashCounter}
                            <td>${element.name}</td>
                            <td>${element.gender}</td>
                            <td>${element.height}</td>
                            <td>${element.weight}</td>
                            <td>${element.eyeColor}</td>
                            <td>
                                <button type="button" class="btn btn-danger" id="${element.id}">Eliminar</button>
                            </td>
                        </th>
                    </tr>`);
                    hashCounter++
    }
  }
}

export default getLocalStorage