import crossroads from 'crossroads'
import homeController from './controllers/homeControllers'
import personajesController from './controllers/personajesController'


function router() {
    crossroads.addRoute('', function () {
        $('#root').load('./partials/home.html', homeController)
    })
    crossroads.addRoute('#/home', function () {
        $('#root').load('./partials/home.html')
    })
    crossroads.addRoute('#/contact', function () {
        $('#root').load('./partials/contact.html')
    })
    crossroads.addRoute('#/guardados', function () {
        $('#root').load('./partials/guardados.html')
    })
    crossroads.addRoute('#/personajes', function () {
        $('#root').load('./partials/personajes.html', personajesController)
    })
    // En cada cambio del # va a verificar las rutas
    $(window).on('hashchange', function () {
        crossroads.parse(window.location.hash)
    })
    crossroads.parse(window.location.hash)
}
export default router