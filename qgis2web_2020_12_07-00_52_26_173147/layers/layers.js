var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_centredintrts_1 = new ol.format.GeoJSON();
var features_centredintrts_1 = format_centredintrts_1.readFeatures(json_centredintrts_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_centredintrts_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_centredintrts_1.addFeatures(features_centredintrts_1);
var lyr_centredintrts_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_centredintrts_1, 
                style: style_centredintrts_1,
                interactive: true,
                title: '<img src="styles/legend/centredintrts_1.png" /> centre d\'intérêts'
            });
var format_Photos_2 = new ol.format.GeoJSON();
var features_Photos_2 = format_Photos_2.readFeatures(json_Photos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Photos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Photos_2.addFeatures(features_Photos_2);cluster_Photos_2 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Photos_2
});
var lyr_Photos_2 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Photos_2, 
                style: style_Photos_2,
                interactive: true,
                title: '<img src="styles/legend/Photos_2.png" /> Photos '
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_centredintrts_1.setVisible(true);lyr_Photos_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_centredintrts_1,lyr_Photos_2];
lyr_centredintrts_1.set('fieldAliases', {'id': 'id', });
lyr_Photos_2.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', });
lyr_centredintrts_1.set('fieldImages', {'id': 'TextEdit', });
lyr_Photos_2.set('fieldImages', {'id': 'TextEdit', 'Nom': '', });
lyr_centredintrts_1.set('fieldLabels', {'id': 'no label', });
lyr_Photos_2.set('fieldLabels', {'id': 'no label', 'Nom': 'no label', });
lyr_Photos_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});