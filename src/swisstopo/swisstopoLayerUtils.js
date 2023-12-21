import ImageLayer from 'ol/layer/Image.js'
import TileLayer from 'ol/layer/Tile.js'
import { get as getProjection } from 'ol/proj'
import ImageWMS from 'ol/source/ImageWMS.js'
import TileGrid from 'ol/tilegrid/TileGrid'
import XYZ from 'ol/source/XYZ.js'

const swissLV95projection = getProjection('EPSG:2056')

const swissLV95resolutions = [
    4000.0, 3750.0, 3500.0, 3250.0, 3000.0, 2750.0, 2500.0, 2250.0, 2000.0, 1750.0, 1500.0, 1250.0,
    1000.0, 750.0, 650.0, 500.0, 250.0, 100.0, 50.0, 20.0, 10.0, 5.0, 2.5, 2.0, 1.5, 1.0, 0.5, 0.25,
    0.1,
]
const swissLV95extent = [2420000, 1030000, 2900000, 1350000]
const swissLV95tileOrigin = [2420000, 1350000]

export function getSwisstopoWMTSLayer(layerId) {
    return new TileLayer({
        source: new XYZ({
            url: `https://wmts.geo.admin.ch/1.0.0/${layerId}/default/current/2056/{z}/{x}/{y}.jpeg`,
            projection: 'EPSG:2056',
            tileGrid: new TileGrid({
                resolutions: swissLV95resolutions,
                extent: swissLV95extent,
                origin: swissLV95tileOrigin,
            }),
        }),
    })
}

export function getSwisstopoWMSSingleImageLayer(layerId) {
    return new ImageLayer({
        source: new ImageWMS({
            projection: swissLV95projection,
            url: 'https://wms.geo.admin.ch/',
            params: {
                SERVICE: 'WMS',
                VERSION: '1.3.0',
                REQUEST: 'GetMap',
                TRANSPARENT: true,
                LAYERS: layerId,
                CRS: 2056,
                LANG: 'fr',
                WIDTH: 512,
                HEIGHT: 512,
            },
            tileGrid: new TileGrid({
                resolutions: swissLV95resolutions,
                extent: swissLV95extent,
                origin: swissLV95tileOrigin,
                tileSize: 512,
            }),
        }),
    })
}
