/*! Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW) wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 - v4.0.0-a1-development - 2013-11-11
*/
/*
 * Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 */
/*
----- Slovak dictionary (il8n) ---
 */
( function( window ) {
"use strict";
/* main index */
var ind = {
	"%lang-code": "sk",
	"%lang-en": "Slovak",
	"%lang-fr": "slovaque",
	"%lang-nat": "Slovenčina",
	"%all": "Všetko",
	"%home": "Domáce",
	"%main-page": "Hlavná stránka",
	"%tphp": "Na začiatok stránky",
	"%you-are-in": "Teraz sa nachádzate v:",
	"%welcome-to": "Vitajte:",
	"%load": "nakladanie ...",
	"%process": "spracovanie ...",
	"%srch": "Hľadať",
	"%srch-terms": "Hľadať podmienok:",
	"%no-match": "No nájdená zhoda",
	"%matches": {
		"mixin": "[MIXIN] zápasov nenájdený"
	},
	"%menu": "Menu",
	"%settings": "Nastavenie",
	"%langs": "Jazyky",
	"%about": "O",
	"%curr": "(aktuálne)",
	"%hide": "Schovať",
	"%err": "Chyba",
	"%colon": ":",
	"%hyphen": " - ",
	"%full-stop": ".",
	"%comma-space": ", ",
	"%space": "&#32;",
	"%start": "Začať",
	"%stop": "Stop",
	"%back": "Staré",
	"%cancel": "Zrušiť",
	"%new-win": " (Otvorí sa v novom okne)",
	"%min-ago": "minútou",
	"%coup-mins": "pár minút pred",
	"%mins-ago": {
		"mixin": "pred [MIXIN] minútami"
	},
	"%hour-ago": "pred hodinou",
	"%hours-ago": {
		"mixin": "pred [MIXIN] hodinami"
	},
	"%days-ago": {
		"mixin": "pred [MIXIN] dňami"
	},
	"%yesterday": "včera",

	"%nxt": "Ďalšie",
	"%nxt-r": "Ďalšie (klávesy šípka vpravo)",
	"%prv": "Predchádzajúci",
	"%prv-l": "Predchádzajúci (klávesy šípka doľava)",
	"%first": "Prvé",
	"%last": "Posledný",
	"%close-esc": "Zavrieť (klávesy ESC)",
	"%show": "Ukázať",

	/* Archived Web page template */
	"%arch-pg": "Táto webová stránka bola archivovaná na webe.",
	/* Menu bar */
	"%sm-hlp": "(otvoriť podponuku s enter a zatvárajú s klávesy ESC)",
	/* Tabbed interface */
	"%tab-rot": {
		"off": "Zastaviť kartu otáčania",
		"on": "Dátum kartu otáčania"
	},
	"%tab-list": "Tab Zoznam",
	"%tab-pnl-end1": "Koniec tejto záložke paneli.",
	"%tab-pnl-end2": "Návrat na kartu zoznamu",
	"%tab-pnl-end3": "alebo pokračovať až do konca stránky.",
	/* Multimedia player */
	"%play": "Hrať",
	"%pause": "Pauza",
	"%open": "Otvoriť",
	"%close": "Zavrieť",
	"%rew": "Pretočiť",
	"%ffwd": "Rýchly posun vpred",
	"%mute": {
		"on": "Vypnutie",
		"off": "Nahlas"
	},
	"%cc": {
		"off": "Skryť Skryté titulky",
		"on": "Zobraziť Skryté titulky"
	},
	"%cc-err": "Chyba pri načítaní uzavreté titulkami",
	"%adesc": {
		"on": "Povoliť zvukový opis",
		"off": "Zakázať zvukový opis"
	},
	"%prog-bar": "použite ľavej a pravej šípky na podporu a vzad pokrok médií",
	"%no-video": "Váš prehliadač nepodporuje Zdá sa, že sa schopnosti prehranie tohto videa, stiahnite si video nižšie.",
	"%pos": "Aktuálna pozícia:",
	"%perc": "Prehrávanie úspešnosť:",
	"%dur": "Celkový čas:",
	"%buff": "Pufrovaný:",
	/* Share widget */
	"%fav": "Obľúbené",
	"%email": "E-mail",
	"%shr-txt": "Zdieľať túto stránku",
	"%shr-hnt": " s {s} ",
	"%shr-email-sub": "Zaujímavá stránka",
	"%shr-email-bd": "Myslel som, že by ste mohli nájsť na túto stránku zaujímavé:\n{t} ({u})",
	"%shr-fav-ttl": "(obľúbené stránky)",
	"%shr-man": "Prosím, zatvorte tento dialóg a stlačte Ctrl-D na záložku tejto stránky.",
	"%shr-all": "Zobraziť všetky ({n})",
	"%shr-all-ttl": "Všetky bookmarking stránky",
	"%shr-disc": "Č schválenie akýchkoľvek výrobkov alebo služieb je vyjadrené alebo predpokladané.",
	/* Form validation */
	"%frm-nosubmit": "Formulár nemožno predložené, pretože ",
	"%errs-fnd": " chyby boli nájdené.",
	"%err-fnd": " chyba bola nájdená.",
	/* Date picker */
	"%date-hide": "Skryť kalendár",
	"%date-show": "Vyberte dátum z kalendára pre pole",
	"%date-sel": "Vybraný",
	/* Calendar */
	"%days": ["Nedeľa", "Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota"],
	"%mnths": ["Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "Septembra", "Október", "November", "December"],
	"%cal": "Kalendár",
	"%currDay": "(Aktuálny deň)",
	"%cal-goToLnk": "Prejsť na<span class=\"wb-inv\">  mesiac roka</span>",
	"%cal-goToTtl": "Prejsť na mesiac roka",
	"%cal-goToMnth": "Mesiac:",
	"%cal-goToYr": "Rok:",
	"%cal-goToBtn": "Ísť",
	"%prvMnth": "Predchádzajúci mesiac: ",
	"%nxtMnth": "Budúci mesiac: ",
	/* Slideout */
	"%show-toc": "Zobraziť obsah",
	"%hide-toc": "Skryť obsah",
	"%toc": "obsah",
	/* Lightbox */
	"%lb-curr": "Bod %curr% %total%",
	"%lb-xhr-err": "Tento obsah sa nepodarilo načítať.",
	"%lb-img-err": "Tento obrázok sa nepodarilo načítať.",
	/* Charts widget */
	"%table-mention": "Tabuľka",
	"%table-following": "Graf. Podrobnosti v nasledujúcej tabuľke.",
	/* Session timeout */
	"%st-to-msg-bgn": "Vaša relácia vyprší automaticky #min# min #sec# sec.",
	"%st-to-msg-end": "Zvoľte \"Pokračovať v relácii\" rozšíriť reláciu.",
	"%st-msgbx-ttl": "Session timeout varovanie",
	"%st-alrdy-to-msg": "Je nám ľúto, váš relácie už vypršala. Prosím, prihláste sa znova.",
	"%st-btn-cont": "pokračovať v relácii",
	"%st-btn-end": "Ukončiť reláciu teraz",
	/* Toggle details */
	"%td-toggle": "Prepnúť všetky",
	"%td-open": "Rozbaliť všetko",
	"%td-close": "Zbaliť všetko",
	"%td-ttl-open": "Rozbaliť všetky časti obsahu",
	"%td-ttl-close": "Minimalizovať všetky časti obsahu",
	/* Table enhancement */
	"%sortAsc": ": aktivuje na vzostupne zoradiť",
	"%sortDesc": ": aktivujte pre zostupné radenie",
	"%emptyTbl": "K dispozícii žiadne údaje v tabuľke",
	"%infoEntr": "Zobrazené _START_-_END_ z _TOTAL_ položiek",
	"%infoEmpty": "Zobrazené 0-0 z 0 položiek",
	"%infoFilt": "(filtrovaná z _MAX_ celkom záznamov)",
	"%info1000": "&#160;",
	"%lenMenu": "Zobraziť _MENU_ položiek",
	/* Geomap */
	"%geo-mapcontrol": "Mapa ovládanie",
	"%geo-zoomin": "Priblížiť",
	"%geo-zoomout": "Vzdialiť",
	"%geo-zoomworld": "Priblížiť zmapovať rozsah",
	"%geo-zoomfeature": "Priblížiť prvku",
	"%geo-scaleline": "Mierka mapy",
	"%geo-mouseposition": "Zemepisná šírka a zemepisná dĺžka kurzoru myši",
	"%geo-ariamap": "Mapa objekt. Popisy v mape funkcií sú uvedené v tabuľke nižšie.",
	"%geo-accessibilize": "<strong>Klávesové užívatelia:</strong> Ak je mapa v centre pozornosti, pomocou klávesov so šípkami posúvať mapu a plus a mínus pre priblíženie. Klávesov so šípkami nebude posúvanie mapy pri zväčšení na mapu rozsahu.",
	"%geo-accessibilizetitle": "Návod: Mapa navigácie",
	"%geo-togglelayer": "Prepnúť zobrazenie vrstvy",
	"%geo-hiddenlayer": "Táto vrstva je v súčasnej dobe skrýva!",
	"%geo-basemapurl": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"%geo-basemaptitle": "BaseMaps_CBMT3978",
	"%geo-basemapurltxt": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"%geo-attributionlink": "http://geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"%geo-attributiontitle": "GeoGratis - Kanada základná mapa (len po anglicky alebo francúzsky)",
	"%geo-select": "Vybrať",
	"%geo-labelselect": "Skontrolujte, vyberte prvok na mape",
	/* Disable/enable WET plugins and polyfills */
	"%wb-disable": "Základné HTML verzia",
	"%wb-enable": "Štandardná verzia",
	/* Template */
	"%tmpl-signin": "Prihlásiť"
};

window.i18nObj = ind;

})( window );

vapour.doc.one( "formLanguages.wb", function() {
/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: SK (Slovak; slovenčina, slovenský jazyk)
 */
(function ($) {
	$.extend($.validator.messages, {
		required: "Povinné zadať.",
		maxlength: $.validator.format("Maximálne {0} znakov."),
		minlength: $.validator.format("Minimálne {0} znakov."),
		rangelength: $.validator.format("Minimálne {0} a Maximálne {0} znakov."),
		email: "E-mailová adresa musí byť platná.",
		url: "URL musí byť platný.",
		date: "Musí byť dátum.",
		number: "Musí byť číslo.",
		digits: "Môže obsahovať iba číslice.",
		equalTo: "Dva hodnoty sa musia rovnať.",
		range: $.validator.format("Musí byť medzi {0} a {1}."),
		max: $.validator.format("Nemôže byť viac ako{0}."),
		min: $.validator.format("Nemôže byť menej ako{0}."),
		creditcard: "Číslo platobnej karty musí byť platné."
	});
}(jQuery));

});