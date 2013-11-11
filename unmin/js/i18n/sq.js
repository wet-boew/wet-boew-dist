/*! Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW) wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 - v4.0.0-a1-development - 2013-11-11
*/
/*
 * Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 */
/*
----- Albanian dictionary (il8n) ---
 */
( function( window ) {
"use strict";
/* main index */
var ind = {
	"%lang-code": "sq",
	"%lang-en": "Albanian",
	"%lang-fr": "albanais",
	"%lang-nat": "Shqip",
	"%all": "Të gjithë",
	"%home": "Shtëpi",
	"%main-page": "Faqja kryesore",
	"%tphp": "Fillimi i faqes",
	"%you-are-in": "Ju jeni në",
	"%welcome-to": "Mirë se vini në",
	"%load": "ngarkimin ...",
	"%process": "përpunimit të ...",
	"%srch": "Kërko",
	"%srch-terms": "Kërko për fjalë:",
	"%no-match": "Nuk është gjetur përputhje",
	"%matches": {
		"mixin": "[MIXIN] ndeshjet gjet"
	},
	"%menu": "Menu",
	"%settings": "Cilësimet",
	"%langs": "Gjuhë",
	"%about": "Për",
	"%curr": "(aktual)",
	"%hide": "Fsheh",
	"%err": "Gabim",
	"%colon": ":",
	"%hyphen": " - ",
	"%full-stop": ".",
	"%comma-space": ", ",
	"%space": "&#32;",
	"%start": "Fillim",
	"%stop": "Stop",
	"%back": "Prapa",
	"%cancel": "Anuloj",
	"%new-win": " (Hapet në një dritare të re)",
	"%min-ago": "një minutë më parë",
	"%coup-mins": "disa minuta më parë",
	"%mins-ago": {
		"mixin": "[MIXIN] minuta më parë"
	},
	"%hour-ago": "një orë më parë",
	"%hours-ago": {
		"mixin": "[MIXIN] orë më parë"
	},
	"%days-ago": {
		"mixin": "[MIXIN] ditë më parë"
	},
	"%yesterday": "dje",

	"%nxt": "Tjetër",
	"%nxt-r": "Tjetër (kyç djathtë arrow)",
	"%prv": "I mëparshëm",
	"%prv-l": "I mëparshëm (kyç majtë arrow)",
	"%first": "I parë",
	"%last": "I fundit",
	"%close-esc": "Mbylle (kyç shpëtojnë)",
	"%show": "Shfaq",

	/* Archived Web page template */
	"%arch-pg": "Kjo faqe Web është arkivuar në Web.",
	/* Menu bar */
	"%sm-hlp": "(hapet submenu me tastin Enter dhe të afërt me kyç shpëtojnë)",
	/* Tabbed interface */
	"%tab-rot": {
		"off": "Stop rotacionin tab",
		"on": "Fillojnë rrotullimin tab"
	},
	"%tab-list": "Lista tab",
	"%tab-pnl-end1": "Fundi i këtij paneli tab.",
	"%tab-pnl-end2": "Kthehuni tek lista tab",
	"%tab-pnl-end3": "ose të vazhdojë për pjesën tjetër të faqes.",
	/* Multimedia player */
	"%play": "Luaj",
	"%pause": "Pushim",
	"%open": "Hapur",
	"%close": "Afër",
	"%rew": "Rewind",
	"%ffwd": "Fast përpara",
	"%mute": {
		"on": "Memec",
		"off": "Çheshtja"
	},
	"%cc": {
		"off": "Hide Mbyllur captioning",
		"on": "Trego Mbyllur captioning"
	},
	"%cc-err": "Captions Gabim gjatë ngarkimit të mbyllura",
	"%adesc": {
		"on": "Aktivizo përshkrimin audio",
		"off": "Disable përshkrimin audio"
	},
	"%prog-bar": "përdorim çelësat e majtë dhe të djathtë për të çuar përpara dhe Rewind progresin e medias",
	"%no-video": "Shfletuesi juaj nuk duket të ketë aftësitë për të luajtur këtë video, ju lutem shkarkoni video më poshtë",
	"%pos": "Pozicioni aktual:",
	"%perc": "Përqindja playback:",
	"%dur": "Koha totale:",
	"%buff": "Buffered:",
	/* Share widget */
	"%fav": "Pijet",
	"%email": "Email",
	"%shr-txt": "Share këtë faqe",
	"%shr-hnt": " me {s} ",
	"%shr-email-sub": "Faqe interesante",
	"%shr-email-bd": "Mendova se ju mund të gjeni këtë faqe interesante:\n{t} ({u})",
	"%shr-fav-ttl": "(Bookmark këtë faqe)",
	"%shr-man": "Ju lutemi ti mbyllni këtë dialog dhe shtypni Ctrl-D të bookmark këtë faqe.",
	"%shr-all": "Trego të gjitha ({n})",
	"%shr-all-ttl": "Të gjitha faqet bookmarking",
	"%shr-disc": "Asnjë miratimi i ndonjë produkteve apo shërbimeve është shprehur apo të nënkuptuar",
	/* Form validation */
	"%frm-nosubmit": "Formulari nuk mund të paraqitet për shkak ",
	"%errs-fnd": " gabime u gjetën.",
	"%err-fnd": " gabim u gjet.",
	/* Date picker */
	"%date-hide": "Hide kalendar",
	"%date-show": "Zgjidh një datë nga një kalendar për fushën:",
	"%date-sel": "I zgjedhur",
	/* Calendar */
	"%days": ["E diel", "E hënë", "E martë", "E mërkurë", "E enjte", "E premte", "E shtunë"],
	"%mnths": ["Janar", "Shkurt", "Mars", "Prill", "Mund", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "Nëntor", "Dhjetor"],
	"%cal": "Kalendar",
	"%currDay": "(Dita aktual)",
	"%cal-goToLnk": "Shko tek<span class=\"wb-inv\"> muaji të vitit</span>",
	"%cal-goToTtl": "Shko tek muaji të vitit",
	"%cal-goToMnth": "Muaj:",
	"%cal-goToYr": "Vit:",
	"%cal-goToBtn": "Shkoj",
	"%prvMnth": "Muajin e kaluar: ",
	"%nxtMnth": "Muajin e ardhshëm: ",
	/* Slideout */
	"%show-toc": "Trego tabelën e përmbajtjeve",
	"%hide-toc": "Hide tabelën e përmbajtjeve",
	"%toc": "përmbajtje",
	/* Lightbox */
	"%lb-curr": "Pika %curr% e %total%",
	"%lb-xhr-err": "Kjo përmbajtje nuk arriti të ngarkesës.",
	"%lb-img-err": "Ky imazh nuk arriti të ngarkesës.",
	/* Charts widget */
	"%table-mention": "Tabelë",
	"%table-following": "Chart. Detajet në tabelën e mëposhtme.",
	/* Session timeout */
	"%st-to-msg-bgn": "Sesioni juaj do të përfundojë automatikisht në #min# min #sec# sec.",
	"%st-to-msg-end": "Zgjidhni \"Vazhdo seancë\" për të zgjeruar sesionin tuaj.",
	"%st-msgbx-ttl": "Timeout Sesioni paralajmërim",
	"%st-alrdy-to-msg": "Na vjen keq Sesioni juaj ka skaduar tashmë. Ju lutemi identifikohuni përsëri.",
	"%st-btn-cont": "Vazhdo seancë",
	"%st-btn-end": "Fundi sesion tani",
	/* Toggle details */
	"%td-toggle": "Toggle gjitha",
	"%td-open": "Zgjerimin e të gjitha",
	"%td-close": "Collapse gjitha",
	"%td-ttl-open": "Expand gjitha seksionet e përmbajtjes",
	"%td-ttl-close": "Collapse gjitha seksionet e përmbajtjes",
	/* Table enhancement */
	"%sortAsc": ": aktivizuar për ngjitje lloj",
	"%sortDesc": ": aktivizuar për zbritës lloj",
	"%emptyTbl": "Nuk ka të dhëna është në dispozicion në tryezë",
	"%infoEntr": "Duke shfaqur _START_ deri në _END_ prej _TOTAL_ hyra",
	"%infoEmpty": "Duke shfaqur 0 deri në 0 prej 0 hyra",
	"%infoFilt": "(Filtruar nga shënimet _MAX_ totalit)",
	"%info1000": "&#160;",
	"%lenMenu": "Trego _MENU_ hyra",
	/* Geomap */
	"%geo-mapcontrol": "Harta e kontrollit",
	"%geo-zoomin": "Zoom në",
	"%geo-zoomout": "Zoom out",
	"%geo-zoomworld": "Zoom në hartë shtrirjen",
	"%geo-zoomfeature": "Zoom në element",
	"%geo-scaleline": "shkallë Map",
	"%geo-mouseposition": "Gjerësi dhe gjatësi e kursorit të miut",
	"%geo-ariamap": "Harta objekt. Përshkrimet e karakteristika hartë janë në tabelën e mëposhtme.",
	"%geo-accessibilize": "<strong>Përdoruesit keyboard:</strong> Kur hartë është në fokus, përdorni arrow çelësat për të pan hartë dhe çelësat plus dhe minus për zmadhim. Arrow keys nuk do pan hartën kur zoomed në masën hartë.",
	"%geo-accessibilizetitle": "Udhëzime: Harta navigacion",
	"%geo-togglelayer": "Nyjëtim shfaqjen e shtresës",
	"%geo-hiddenlayer": "Kjo shtresë është e fshehur tani.",
	"%geo-basemapurl": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"%geo-basemaptitle": "BaseMaps_CBMT3978",
	"%geo-basemapurltxt": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"%geo-attributionlink": "http://geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"%geo-attributiontitle": "GeoGratis - Kanada hartë bazë (anglisht ose frëngjisht vetëm)",
	"%geo-select": "Zgjedh",
	"%geo-labelselect": "Kontrolloni për të zgjedhur elementin në hartë",
	/* Disable/enable WET plugins and polyfills */
	"%wb-disable": "Versioni bazë HTML",
	"%wb-enable": "Versioni standard",
	/* Template */
	"%tmpl-signin": "Kyqeni në"
};

window.i18nObj = ind;

})( window );
