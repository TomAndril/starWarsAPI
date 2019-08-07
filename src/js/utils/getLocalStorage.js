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
            var element = parsedData[i];
            $(parentNode).append(``);
        }
    }
}