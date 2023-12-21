import axios from 'axios'

/**
 * Identify features at the coordinates in the given layer
 * @param {Number[]} coordinates Coordinates where we want to identify features, expressed in EPSG:2056
 * @param {Number[] mapExtent The current extent of the map (bottom-left / top-right coordinates) expressed in EPSG:2056
 * @param {String} layerId Swisstopo unique layer identifier
 */
export function identifyFeatures(coordinates, mapExtent, layerId) {
    return axios({
        url: 'https://api3.geo.admin.ch/rest/services/all/MapServer/identify',
        params: {
            geometry: coordinates.join(','),
            geometryFormat: 'geojson',
            geometryType: 'esriGeometryPoint',
            imageDisplay: `${window.outerWidth},${window.outerHeight},96`,
            mapExtent: mapExtent.join(','),
            lang: 'fr',
            layers: `all:${layerId}`,
            limit: 10,
            returnGeometry: true,
            sr: 2056,
            tolerance: 10,
        },
    }).catch((error) => {
        console.error('Error while identifying features on', coordinates, error)
    })
}
