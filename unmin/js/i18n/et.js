/*! Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW) wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 - v4.0.0-a1-development - 2013-11-10
*/
/*
 * Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 */
/*
----- Estonian dictionary (il8n) ---
 */
( function( window ) {
"use strict";
/* main index */
var ind = {
	"%lang-code": "et",
	"%lang-en": "Estonian",
	"%lang-fr": "estonien",
	"%lang-nat": "Eesti keel",
	"%all": "Kõik",
	"%home": "Kodu",
	"%main-page": "Pealeht",
	"%tphp": "Lehekülje algusesse",
	"%you-are-in": "Olete lehel",
	"%welcome-to": "Tere tulemast lehele",
	"%load": "laadimine....",
	"%process": "töötlemine ...",
	"%srch": "Otsi",
	"%srch-terms": "Otsi mõistet",
	"%no-match": "Vastet ei leitud",
	"%matches": {
		"mixin": "Leitud [MIXIN] vaste(t)"
	},
	"%menu": "Menüü",
	"%settings": "Seaded",
	"%langs": "Keeled",
	"%about": "Teave",
	"%curr": "(praegune)",
	"%hide": "Peida",
	"%err": "Viga",
	"%colon": ":",
	"%hyphen": " - ",
	"%full-stop": ".",
	"%comma-space": ",",
	"%space": "&#32;",
	"%start": "Alusta",
	"%stop": "Lõpeta",
	"%back": "Tagasi",
	"%cancel": "Loobu",
	"%new-win": " (Avaneb uues aknas)",
	"%min-ago": "minut tagasi",
	"%coup-mins": "mõni minut tagasi",
	"%mins-ago": {
		"mixin": "[MIXIN] minutit tagasi"
	},
	"%hour-ago": "tund aega tagasi",
	"%hours-ago": {
		"mixin": "[MIXIN] tundi tagasi"
	},
	"%days-ago": {
		"mixin": "[MIXIN] päeva tagasi"
	},
	"%yesterday": "eile",

	"%nxt": "Järgmine",
	"%nxt-r": "Järgmine (paremat nooleklahvi)",
	"%prv": "Eelmine",
	"%prv-l": "Eelmine (vasakut nooleklahvi)",
	"%first": "Esimene",
	"%last": "Viimane",
	"%close-esc": "Sule (klahviga Escape)",
	"%show": "Näita",

	/* Archived Web page template */
	"%arch-pg": "See veebileht on arhiveeritud.",
	/* Menu bar */
	"%sm-hlp": "(ava alamenüü klahviga Enter ja sulge klahviga Escape)",
	/* Tabbed interface */
	"%tab-rot": {
		"off": "Seiska sakkide rotatsioon",
		"on": "Alusta sakkide rotatsiooni"
	},
	"%tab-list": "Sakkide nimekiri",
	"%tab-pnl-end1": "Selle sakkide paneeli lõpp",
	"%tab-pnl-end2": "Tagasi sakkide nimekirja",
	"%tab-pnl-end3": "või edasi ülejäänud lehele",
	/* Multimedia player */
	"%play": "Mängi",
	"%pause": "Paus",
	"%open": "Ava",
	"%close": "Sulge",
	"%rew": "Tagasi",
	"%ffwd": "Kiirkerimine",
	"%mute": {
		"on": "Vaigista",
		"off": "Heli tagasi"
	},
	"%cc": {
		"off": "Peida subtiitrid",
		"on": "Näita subtiitreid"
	},
	"%cc-err": "Viga subtiitrite avamisel",
	"%adesc": {
		"on": "Luba audio kirjeldus",
		"off": "Sulge audio kirjeldus"
	},
	"%prog-bar": "kasuta vasakut ja paremat nooleklahvi edasi-tagasi liikumiseks",
	"%no-video": "Sinu brauser ei võimalda seda videot mängida, palun lae video alla",
	"%pos": "Praegune asukoht",
	"%perc": "Taasesituse protsent:",
	"%dur": "Kogu kestvus:",
	"%buff": "Puhverdatud:",
	/* Share widget */
	"%fav": "Lemmik",
	"%email": "E-post",
	"%shr-txt": "Jaga seda lehekülge",
	"%shr-hnt": "koos {s}",
	"%shr-email-sub": "Huvitav lehekülg",
	"%shr-email-bd": "Ma arvan, et see leht pakub sulle huvi:\n{t} ({u})",
	"%shr-fav-ttl": "(lisa järjehoidja)",
	"%shr-man": "Palun sulge see dialoogiaken ja vajuta Ctrl-D lehele järjehoidja lisamiseks.",
	"%shr-all": "Näita kõiki ({n})",
	"%shr-all-ttl": "Kõik märgitud leheküljed",
	"%shr-disc": "Mistahes tootele või teenusele pole otseselt ega kaudselt toetust avaldatud.",
	/* Form validation */
	"%frm-nosubmit": "Ankeeti ei saa esitada, kuna",
	"%errs-fnd": "on leitud vigu.",
	"%err-fnd": "on leitud viga.",
	/* Date picker */
	"%date-hide": "Peida kalender",
	"%date-show": "Vali kalendrist kuupäev:",
	"%date-sel": "Valitud",
	/* Calendar */
	"%days": ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"],
	"%mnths": ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"],
	"%cal": "Kalender",
	"%currDay": "(Tänane päev)",
	"%cal-goToLnk": "Mine aastas</span>  kuule <span class=\"wb-inv\"> ",
	"%cal-goToTtl": "Mine sellele kuule aastas",
	"%cal-goToMnth": "Kuu",
	"%cal-goToYr": "Aasta",
	"%cal-goToBtn": "Mine",
	"%prvMnth": "Eelmine kuu: ",
	"%nxtMnth": "Järgmine kuu: ",
	/* Slideout */
	"%show-toc": "Näita sisukorda",
	"%hide-toc": "Peida sisukord",
	"%toc": "sisukord",
	/* Lightbox */
	"%lb-curr": "Kirje %curr% koguhulgast %total%",
	"%lb-xhr-err": "Sisu laadimine ebaõnnestus",
	"%lb-img-err": "Pildi laadimine ebaõnnestus",
	/* Charts widget */
	"%table-mention": "Tabel",
	"%table-following": "Graafik. Täpsemad andmed järgnevas tabelis.",
	/* Session timeout */
	"%st-to-msg-bgn": "Teie sessioon aegub automaatselt #min# min #sec# sec.",
	"%st-to-msg-end": "Valige \"Jätka sessioon\" laiendada oma istungil.",
	"%st-msgbx-ttl": "Hoiatus - sessiooni lõpp",
	"%st-alrdy-to-msg": "Kahjuks on su sessioon aegunud. Palun logi uuesti sisse.",
	"%st-btn-cont": "Jätka istung",
	"%st-btn-end": "Lõpetage seanss nüüd",
	/* Toggle details */
	"%td-toggle": "Lülita kõik",
	"%td-open": "Laienda kõiki",
	"%td-close": "Sulge kõik",
	"%td-ttl-open": "Laienda kõiki sisu osasid",
	"%td-ttl-close": "Sulge kõik sisu osad",
	/* Table enhancement */
	"%sortAsc": ": aktiveeri kasvavaks järjestuseks",
	"%sortDesc": ": aktiveeri kahanevaks järjestuseks",
	"%emptyTbl": "Tabelist puuduvad andmed",
	"%infoEntr": "Näitan _START_-_END_  _TOTAL_ kirjest",
	"%infoEmpty": "Näitan kirjeid 0-0 koguhulgast 0",
	"%infoFilt": "(filtreeritud _MAX_ sissekannete koguhulgast)",
	"%info1000": "&#160;",
	"%lenMenu": "Näita _MENU_ kandeid",
	/* Geomap */
	"%geo-mapcontrol": "Kaardi kontroll",
	"%geo-zoomin": "Suumi",
	"%geo-zoomout": "Vähenda",
	"%geo-zoomworld": "Suumi kaardi ulatuses",
	"%geo-zoomfeature": "Suumi elemente",
	"%geo-scaleline": "mõõtkava",
	"%geo-mouseposition": "Laius-ja pikkuskraad hiirekursori",
	"%geo-ariamap": "Kaardi objekt. Võimaluste kirjeldused leiad alltoodud tabelist.",
	"%geo-accessibilize": "<strong>Klaviatuuri kasutajatele:</strong> Kui kaart on fookuses, kasutage nooleklahve kaardi panoraamimiseks ja pluss- ja miinusklahve suumimiseks. Nooleklahvidega ei saa panoraamida, kui kaart on suumitud kogu ulatuses.",
	"%geo-accessibilizetitle": "Juhised: Kaardil navigeerimine",
	"%geo-togglelayer": "Kihtide vaate lülitamine",
	"%geo-hiddenlayer": "See kiht on praegu peidetud.",
	"%geo-basemapurl": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"%geo-basemaptitle": "BaseMaps_CBMT3978",
	"%geo-basemapurltxt": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"%geo-attributionlink": "http://geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"%geo-attributiontitle": "GeoGratis - Kanada põhikaart (inglise või prantsuse keeles)",
	"%geo-select": "Vali",
	"%geo-labelselect": "Märkige kaardil elemendi valimiseks",
	/* Disable/enable WET plugins and polyfills */
	"%wb-disable": "Lihtsustatud HTML versioon",
	"%wb-enable": "Standardversioon",
	/* Template */
	"%tmpl-signin": "Logi sisse"
};

window.i18nObj = ind;

})( window );
