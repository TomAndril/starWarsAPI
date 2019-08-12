/////////////////////////////////////////
// FUNCION PARA FILTRAR UN ELEMENTO DE //
// LOCAL STORAGE Y SUBIRLO NUEVAMENTE ///
/////////////////////////////////////////

function removeFromLocalStorage(key, item) {
    var strkey = localStorage.getItem(key)
    var parsedKey = JSON.parse(strkey)

    for (let i = 0; i < parsedKey.length; i++) {
        var elementItem = parsedKey[i]
        if (elementItem.id === item) {
            parsedKey = parsedKey.filter(function (elementItem) {
                var newArray = elementItem.id !== item
                return newArray
            })
        }
        localStorage.setItem('STAPIChar', JSON.stringify(parsedKey))
    }
}
export default removeFromLocalStorage