import crossroads from 'crossroads'
import homeController from './controllers/homeControllers'

function router() {
    crossroads.addRoute('', function () {
        $('#root').load('./partials/home.html', homeController)
    })
    crossroads.addRoute('#/contact', function () {
        console.log('Contact Page')
    })
    // En cada cambio del # va a verificar las rutas
    $(window).on('hashchange', function () {
        crossroads.parse(window.location.hash)
    })
    crossroads.parse(window.location.hash)
}
export default router