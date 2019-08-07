////////////////////////////////////////////////////
// FUNCION DE OBTENCION DE DATOS DE LOCAL STORAGE //
////////////////////////////////////////////////////

export default function getLocalStorage(index, parentNode) {
  var gettedData = localStorage.getItem(index)
  var parsedData = JSON.parse(gettedData)
  if (parsedData == null) {
    console.log("No hay datos almacenados en localStorage")
  } else {
    for (let i = 0; i < parsedData.length; i++) {
      var element = parsedData[i][0];
      $(parentNode).append(`<tr class="character-row">
                        <th scope="row" id="${element.id}">${element.id}
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
    }
  }
}