/*!
 *
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-eng.html / wet-boew.github.io/wet-boew/Licence-fra.html
 *
 * Version: v3.1.9-development Build: 2014-03-02 04:37 AM EST
 *
 */
(function(b){var a=window.pe||{fn:{}};a.fn.geomap_debug={messages:{en:{debugMode:"WET-Geomap: running in DEBUG mode",debugMess:"When running in debug mode Geomap will provide inline error and help messages and write useful debugging information into the console. Disable debug mode by removing the <em>debug</em> class.",overlayLoad:"WET-Geomap: overlays were loaded successfully",overlayNotLoad:"WET-Geomap: an error occurred while loading overlays",basemapDefault:"WET-Geomap: using default basemap",projection:"WET-Geomap: using projection",error:"WET-Geomap ERROR",warning:"WET-Geomap WARNING",warningLegend:"No div element with a class of <em>wet-boew-geomap-legend</em> was found. If you require a legend either add a div with a class of <em>wet-boew-geomap-legend</em>.",overlayNotSpecify:"WET-Geomap: overlays file not specified",baseMapMapOptionsLoadError:"WET-Geomap: an error occurred when loading the mapOptions in your basemap configuration. Please ensure that you have the following options set: maxExtent (e.g. '-3000000.0, -800000.0, 4000000.0, 3900000.0'), maxResolution (e.g. 'auto'), projection (e.g. 'EPSG:3978'), restrictedExtent (e.g. '-3000000.0, -800000.0, 4000000.0, 3900000.0'), units (e.g. 'm'), displayProjection: (e.g. 'EPSG:4269'), numZoomLevels: (e.g. 12), aspectRatio: (e.g. 0.8).",warningTab:"No class <em>tab</em> in wet-boew-geomap but a table has tab attribute set to true.",layersNotSpecify:"No div with id <em>wet-boew-geomap-layers</em> have been found. You need to add one."},fr:{debugMode:"BOEW-Géocarte : mode débogage activé",debugMess:"Lors de l'exécution en mode débogage Geomap donne des messages d'erreur, des messages d'aide et donneras de l'information utile dans la console de débogage. Désactiver le mode débogage en supprimant la classe <em>debug</em>.",overlayLoad:"BOEW-Géocarte : Les couches de superpositions ont été chargées avec succès",overlayNotLoad:"BOEW-Géocarte : une erreur est survenue lors du chargement des couches de superpositions",basemapDefault:"BOEW-Géocarte : la carte de base par défaut est utilisée",projection:"BOEW-Géocarte : la projection utilisée est",error:"BOEW-Géocarte ERREUR",warning:"BOEW-Geomap AVERTISSEMENT",warningLegend:"Aucun élément div comportant une classe <em>wet-boew-geomap-legend</em> n'a été trouvé. Si vous avez besoin d'une légende, vous pouvez ajouter un élément div avec une classe <em>wet-boew-geomap-legend</em>.",overlayNotSpecify:"BOEW-Géocarte : fichier des couches de superpositions non spécifié",baseMapMapOptionsLoadError:"BOEW-Géocarte : une erreur est survenue lors du chargement des options de configuration de votre carte de base. S'il vous plaît, vérifiez que vous avez l'ensemble des options suivantes: maxExtent (ex: '-3000000,0, -800000,0, 4000000,0, 3900000,0'), maxResolution (ex: 'auto'), projection (ex: 'EPSG: 3978'), restrictedExtent (ex: '-3000000,0 , -800000,0, 4000000,0, 3900000,0'), units (ex: 'm'), displayProjection (ex: 'EPSG: 4269'), numZoomLevels (ex: 12), aspectRatio: (ex: 0.8).",warningTab:"Il n'y a pas de classe <em>tab</em> dans wet-boew-geomap mais une table a l'attribut égal vrai.",layersNotSpecify:"Il n'y a pas de div avec le id <em>wet-boew-geomap-layers</em>. Vous devez en ajouter un."}},init:function(){var h=a.fn.geomap_debug.messages[a.language],g=b("#wb-main-in"),i=h.debugMode,e='<div class="module-attention span-8"><h3>',d="</h3><p>",c="</p></div>",f,j;if(typeof h==="undefined"){h=a.fn.geomap_debug.messages.en}f=e+h.warning+d;j='<div class="module-alert"><h3>'+h.error+d;console.log(i);g.prepend(e+i+d+h.debugMess+c);a.document.on("geomap-overlayLoad geomap-overlayNotLoad geomap-overlayNotSpecify geomap-warningLegend geomap-warningTab geomap-errorSelect geomap-errorNoSelect geomap-basemapDefault geomap-baseMapMapOptionsLoadError geomap-projection geomap-layersNotSpecify",function(l,m){var k=l.type;if(k==="geomap-overlayLoad"){console.log(h.overlayLoad)}else{if(k==="geomap-overlayNotLoad"){console.log(h.overlayNotLoad)}else{if(k==="geomap-overlayNotSpecify"){console.log(h.overlayNotSpecify)}else{if(k==="geomap-warningLegend"){g.prepend(f+h.warningLegend+c)}else{if(k==="geomap-warningTab"){g.prepend(f+h.warningTab+c)}else{if(k==="geomap-errorSelect"){m.append(j+h.errorSelect+c)}else{if(k==="geomap-errorNoSelect"){m.before(j+h.errorNoSelect+c)}else{if(k==="geomap-basemapDefault"){console.log(h.basemapDefault)}else{if(k==="geomap-baseMapMapOptionsLoadError"){console.log(h.baseMapMapOptionsLoadError)}else{if(k==="geomap-projection"){console.log(h.projection+" "+m)}else{if(k==="geomap-layersNotSpecify"){g.prepend(f+h.layersNotSpecify+c)}}}}}}}}}}}})}};window.pe=a;return a}(jQuery));