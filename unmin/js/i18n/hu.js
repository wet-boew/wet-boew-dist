/*! Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW) wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 - v4.0.0-a1-development - 2013-11-10
*/
/*
 * Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 */
/*
----- Hungarian dictionary (il8n) ---
 */
( function( window ) {
"use strict";
/* main index */
var ind = {
	"%lang-code": "hu",
	"%lang-en": "Hungarian",
	"%lang-fr": "hongrois",
	"%lang-nat": "Magyar",
	"%all": "Mind",
	"%home": "Honlap",
	"%main-page": "Főoldal",
	"%tphp": "Oldal teteje",
	"%you-are-in": "Ön itt van:",
	"%welcome-to": "Üdvözöljük",
	"%load": "betöltése ...",
	"%process": "feldolgozás ...",
	"%srch": "Keresés",
	"%srch-terms": "Keresett kifejezés:",
	"%no-match": "Nincs találat",
	"%matches": {
		"mixin": "[MIXIN] találat"
	},
	"%menu": "Menü",
	"%settings": "Beállítások",
	"%langs": "Nyelvek",
	"%about": "Erről",
	"%curr": "(jelenlegi)",
	"%hide": "Elrejtés",
	"%err": "Hiba",
	"%colon": ":",
	"%hyphen": " - ",
	"%full-stop": ".",
	"%comma-space": ", ",
	"%space": "&#32;",
	"%start": "Indítás",
	"%stop": "Leállítás",
	"%back": "Vissza",
	"%cancel": "Mégsem",
	"%new-win": " (Megnyitás új ablakban)",
	"%min-ago": "egy perce",
	"%coup-mins": "pár perce",
	"%mins-ago": {
		"mixin": "[MIXIN] perccel ezelőtt"
	},
	"%hour-ago": "egy órával ezelőtt",
	"%hours-ago": {
		"mixin": "[MIXIN] órával ezelőtt"
	},
	"%days-ago": {
		"mixin": "[MIXIN] nappal ezelőtt"
	},
	"%yesterday": "tegnap",

	"%nxt": "Következő",
	"%nxt-r": "Következő (jobb nyíl gomb)",
	"%prv": "Előző",
	"%prv-l": "Előző (bal nyíl gomb)",
	"%first": "Első",
	"%last": "Utolsó",
	"%close-esc": "Zárja (escape billentyűvel)",
	"%show": "Mutat",

	/* Archived Web page template */
	"%arch-pg": "Ezt az oldalt az interneten archiváltuk.",
	/* Menu bar */
	"%sm-hlp": "(Az almenüt az enter billentyűvel tudja lenyitni, és az escape billentyűvel bezárni.)",
	/* Tabbed interface */
	"%tab-rot": {
		"off": "Tabulálás engedélyezése",
		"on": "Tabulálás kikapcsolása"
	},
	"%tab-list": "Lap listája",
	"%tab-pnl-end1": "Vége a lap panel.",
	"%tab-pnl-end2": "Vissza a lap listája",
	"%tab-pnl-end3": "vagy továbbra is a többi oldalon.",
	/* Multimedia player */
	"%play": "Lejátszás",
	"%pause": "Pillanatmegállító",
	"%open": "Nyitva",
	"%close": "Bezárás",
	"%rew": "Vissza",
	"%ffwd": "Előre",
	"%mute": {
		"on": "Lenémítás",
		"off": "Hang bekapcsolása"
	},
	"%cc": {
		"off": "Feliratok kikapcsolása",
		"on": "Feliratozás bekapcsolása"
	},
	"%cc-err": "Hiba a felirat betöltése közben",
	"%adesc": {
		"on": "Narráció bekapcsolása",
		"off": "Narráció kikapcsolása"
	},
	"%prog-bar": "a jobb vagy a bal nyíllal tud előre vagy hátra lépni a lejátszásban",
	"%no-video": "Az ön böngészője valószínűleg nem alkalmas a lejátszásra. Kérem, töltse le a videót itt:",
	"%pos": "Jelenlegi pozíció:",
	"%perc": "Lejátszás százalék:",
	"%dur": "Összidő:",
	"%buff": "Pufferelt:",
	/* Share widget */
	"%fav": "Kedvencek",
	"%email": "Email",
	"%shr-txt": "Oldal megosztása",
	"%shr-hnt": " a {s} ",
	"%shr-email-sub": "Érdekes oldal",
	"%shr-email-bd": "Arra gondoltam, ez az oldal érdekes lehet az ön számára:\n{t} ({u})",
	"%shr-fav-ttl": "(könyvjelzőt ezt az oldalt)",
	"%shr-man": "Kérem, zárja be ezt az ablakot és a könyvjelzőhöz nyomja meg a Ctrl+D-t.",
	"%shr-all": "Mutassa mindet - Mutassa mind a {n}-t",
	"%shr-all-ttl": "Az összes könyvjelzős oldal",
	"%shr-disc": "I jóváhagyását olyan termékek vagy szolgáltatások kifejezett vagy hallgatólagos.",
	/* Form validation */
	"%frm-nosubmit": "Az adatokat nem lehet elküldeni mert ",
	"%errs-fnd": " hibák léptek fel.",
	"%err-fnd": " hiba lépett fel.",
	/* Date picker */
	"%date-hide": "A naptár elrejtése",
	"%date-show": "Válasszon egy dátumot a naptárból:",
	"%date-sel": "Kijelölt",
	/* Calendar */
	"%days": ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"],
	"%mnths": ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"],
	"%cal": "Naptár",
	"%currDay": "(Mai nap)",
	"%cal-goToLnk": "Ugrás<span class=\"wb-inv\"> erre a hónapra</span>",
	"%cal-goToTtl": "Ugrás erre a hónapra",
	"%cal-goToMnth": "Hónap:",
	"%cal-goToYr": "Év:",
	"%cal-goToBtn": "Indít",
	"%prvMnth": "Előző hónap: ",
	"%nxtMnth": "Következő hónap: ",
	/* Slideout */
	"%show-toc": "Megjelenítés tartalomjegyzék",
	"%hide-toc": "Hide tartalomjegyzék",
	"%toc": "tartalomjegyzék",
	/* Lightbox */
	"%lb-curr": "%total%-ből %curr%",
	"%lb-xhr-err": "A tartalom betöltése nem sikerült.",
	"%lb-img-err": "A kép betöltése nem sikerült.",
	/* Charts widget */
	"%table-mention": "Táblázat",
	"%table-following": "Részletek a következő táblázatban.",
	/* Session timeout */
	"%st-to-msg-bgn": "A munkamenet lejár automatikusan #min# perc #sec# másodperc.",
	"%st-to-msg-end": "Válassza a \"Folytatás session\" kiterjeszteni a munkamenet.",
	"%st-msgbx-ttl": "Munkamenet időtúllépési figyelmeztetés",
	"%st-alrdy-to-msg": "Sajnos a munkamenet már lejárt. Kérjük, jelentkezzen be újra.",
	"%st-btn-cont": "Folytatás ülés",
	"%st-btn-end": "Vége ülésen már",
	/* Toggle details */
	"%td-toggle": "Váltás az összes",
	"%td-open": "Az összes kibontása",
	"%td-close": "Az összes összecsukása",
	"%td-ttl-open": "Az összes kibontása rétegei tartalom",
	"%td-ttl-close": "Elrejt minden rétege tartalom",
	/* Table enhancement */
	"%sortAsc": ": aktiválja a növekvő sort",
	"%sortDesc": ": aktiválja csökkenő rendezési",
	"%emptyTbl": "Nem állnak rendelkezésre adatok a táblázatban",
	"%infoEntr": "Megjelenítése _START_-_END_ a _TOTAL_ bejegyzés",
	"%infoEmpty": "Megjelenítése 0-0 a 0 bejegyzés",
	"%infoFilt": "(kiszűrt összesen _MAX_ entries)",
	"%info1000": "&#160;",
	"%lenMenu": "Megjelenítés _MENU_ bejegyzés",
	/* Geomap */
	"%geo-mapcontrol": "Térkép ellenőrzés",
	"%geo-zoomin": "Nagyítás",
	"%geo-zoomout": "Kicsinyítés",
	"%geo-zoomworld": "Nagyítás feltérképezésére mértékben",
	"%geo-zoomfeature": "Nagyítás elem",
	"%geo-scaleline": "térkép méretarány",
	"%geo-mouseposition": "Szélességi és hosszúsági az egér kurzor",
	"%geo-ariamap": "Térkép objektumot. A leírások A térkép funkciók az alábbi táblázat tartalmazza.",
	"%geo-accessibilize": "<strong>Billentyűzet felhasználók:</strong> Ha a térkép a középpontban, a nyílbillentyűkkel mozgathatja a térképet, és a plusz és mínusz gombokkal a képre. A nyilak nem fog mozogni a térképen, ha a térkép kinagyított mértékben.",
	"%geo-accessibilizetitle": "Utasítás: Térkép navigáció",
	"%geo-togglelayer": "Váltás a megjelenítési réteg",
	"%geo-hiddenlayer": "Ez a réteg jelenleg rejtve.",
	"%geo-basemapurl": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"%geo-basemaptitle": "BaseMaps_CBMT3978",
	"%geo-basemapurltxt": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"%geo-attributionlink": "http://geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"%geo-attributiontitle": "GeoGratis - Kanada alaptérkép (angol vagy francia nyelven esetén)",
	"%geo-select": "Választ",
	"%geo-labelselect": "Ellenőrizze, hogy jelölje ki az elemet a térképen",
	/* Disable/enable WET plugins and polyfills */
	"%wb-disable": "Egyszerű HTML verzió",
	"%wb-enable": "Standard verzió",
	/* Template */
	"%tmpl-signin": "Bejelentkezés"
};

window.i18nObj = ind;

})( window );
