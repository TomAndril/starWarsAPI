function personajesController() {
    var idCounter = 1

    function getData(urlApi) {
        $.ajax({
            type: "GET",
            url: urlApi,
            data: "data",
            success: function (response) {
                for (let i = 0; i < response.results.length; i++) {
                    const element = response.results[i];

                    ////////////////////////////////////////
                    // FUNCIONES DE TRADUCCION DE STRINGS //
                    ////////////////////////////////////////

                    function translatedNames() {
                        var translatedName;
                        if (element.gender === 'male') {
                            translatedName = 'Hombre'
                        } else if (element.gender === 'female') {
                            translatedName = 'Mujer'
                        } else {
                            translatedName = 'Sin Género'
                        }
                        return translatedName
                    }

                    function translatedEyeColors() {
                        var translatedColor;
                        if (element.eye_color === 'blue') {
                            translatedColor = 'Azules'
                        } else if (element.eye_color === 'yellow') {
                            translatedColor = 'Amarillos'
                        } else if (element.eye_color === 'red') {
                            translatedColor = 'Rojos'
                        } else if (element.eye_color === 'brown') {
                            translatedColor = 'Marrones'
                        } else if (element.eye_color === 'blue-gray') {
                            translatedColor = 'Azules Grisaceos'
                        } else {
                            translatedColor = 'Sin Color'
                        }
                        return translatedColor
                    }

                    function translatedWeight() {
                        var weight;
                        if (element.mass === 'unknown') {
                            weight = '?'
                        } else {
                            weight = element.mass
                        }
                        return weight
                    }

                    function translatedHeight() {
                        var height;
                        if (element.height === 'unknown') {
                            height = '?'
                        } else {
                            height = element.height
                        }
                        return height
                    }

                    ///////////////////////////////////////
                    // SE CREA UN ROW POR CADA PERSONAJE //
                    ///////////////////////////////////////

                    $('#nameList').append(`<tr class="character-row">
                        <th scope="row"> ${idCounter}
                            <td>${element.name}</td>
                            <td>${translatedNames()}</td>
                            <td>${translatedHeight()} CM</td>
                            <td>${translatedWeight()} KG</td>
                            <td>${translatedEyeColors()}</td>
                            <td>
                                <button type="button" class="btn btn-success" id="saveLocal">Guardar</button>
                            </td>
                        </th>
                    </tr>`);
                    idCounter++
                }
                if (response.next) {
                    $("#cargarMas").click(function (e) {
                        (getData(response.next))
                    });
                }
            },
            error: function () {
                console.log('No se pudieron obtener datos de la API')
            }
        });
    }
    getData('https://swapi.co/api/people')
}

export default personajesController