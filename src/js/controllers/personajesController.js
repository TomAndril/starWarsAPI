import setLocalStorage from '../utils/setLocalStorage'

function personajesController() {

    var idCounter = 1
    var cargarMasButton = document.getElementById('cargarMas')

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

                    function translatedGender() {
                        var translatedGender;
                        if (element.gender === 'male') {
                            translatedGender = 'Hombre'
                        } else if (element.gender === 'female') {
                            translatedGender = 'Mujer'
                        } else {
                            translatedGender = 'Sin Género'
                        }
                        return translatedGender
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
                        <th scope="row" id="${idCounter}">${idCounter}<td>${element.name}</td>
                            <td>${translatedGender()}</td>
                            <td>${translatedHeight()} CM</td>
                            <td>${translatedWeight()} KG</td>
                            <td>${translatedEyeColors()}</td>
                            <td>
                                <button type="button" class="btn btn-success" id="${idCounter}">Guardar</button>
                            </td>
                        </th>
                    </tr>`);
                    idCounter++

                }
                /////////////////////////////////////////////
                // SE CARGAN MAS PERSONAJES CON ESTE BOTON //
                /////////////////////////////////////////////

                cargarMasButton.onclick = function () {
                    if (response.next) {
                        getData(response.next)
                    } else if (response.next == null) {
                        $(cargarMasButton).attr('disabled', true);
                    }
                }
            },
            error: function () {
                console.log('No se pudieron obtener datos de la API')
            }
        });
    }

    getData('https://swapi.co/api/people')


    ////////////////////////////////////////////////////////////////////
    // METODO PARA OBTENER DATOS DE LAS ROWS Y SUBIR AL LOCAL STORAGE //
    ////////////////////////////////////////////////////////////////////


    $('.table').on('click', '.btn', function () {
        var row = $(this).closest('tr') 
        var hashId = row.find('th:eq(0)').text()

        console.log(hashId)

        var name = row.find('td:eq(0)').text()
        var gender = row.find('td:eq(1)').text()
        var height = row.find('td:eq(2)').text()
        var weight = row.find('td:eq(3)').text()
        var eyeColor = row.find('td:eq(4)').text()

        setLocalStorage('STAPIChar', [{name: name, gender: gender, height: height, weight: weight, eyeColor: eyeColor, id: hashId}])
    })
};

export default personajesController