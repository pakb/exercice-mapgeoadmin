import { get as getProjection } from 'ol/proj'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimesCircle, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { register } from 'ol/proj/proj4'
import proj4 from 'proj4'
import { createApp } from 'vue'
import App from './App.vue'

// adding LV95 (Swiss projection) to OpenLayers
// definition comes from https://epsg.io/2056
proj4.defs(
    'EPSG:2056',
    '+proj=somerc +lat_0=46.9524055555556 +lon_0=7.43958333333333 +k_0=1 +x_0=2600000 +y_0=1200000 +ellps=bessel +towgs84=674.374,15.056,405.346,0,0,0,0 +units=m +no_defs +type=crs'
)

// registering our "custom" projection with OpenLayers as well
register(proj4)

// helping OpenLayers handle this projection by setting its extent (it will then not ask for tiles
// or data if the view is outside the extent, meaning less HTML requests ending in error)
const swissLV95projection = getProjection('EPSG:2056')
swissLV95projection.setExtent([2420000, 1030000, 2900000, 1350000])

library.add(faTimesCircle, faUpRightFromSquare)

// mounting the app on the component with the HTML ID app
const app = createApp(App)
app.component('FontAwesomeIcon', FontAwesomeIcon)
app.mount('#app')
