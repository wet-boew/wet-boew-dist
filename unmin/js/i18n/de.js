/*! Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW) wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 - v4.0.0-a1-development - 2013-11-10
*/
/*
 * Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 */
/*
----- German dictionary (il8n) ---
 */
( function( window ) {
"use strict";
/* main index */
var ind = {
	"%lang-code": "de",
	"%lang-en": "German",
	"%lang-fr": "allemand",
	"%lang-nat": "Deutsch",
	"%all": "Alle",
	"%home": "Zuhause",
	"%main-page": "Startseite",
	"%tphp": "Zum Seitenanfang",
	"%you-are-in": "Sie sind in",
	"%welcome-to": "Willkommen bei",
	"%load": "Be ...",
	"%process": "Verarbeitung ...",
	"%srch": "Suchen",
	"%srch-terms": "Suche nach Begriffen:",
	"%no-match": "Keine Übereinstimmung gefunden",
	"%matches": {
		"mixin": "[MIXIN] Ergebnisse gefunden"
	},
	"%menu": "Menü",
	"%settings": "Einstellungen",
	"%langs": "Sprachen",
	"%about": "Über",
	"%curr": "(Aktuell)",
	"%hide": "Verbergen",
	"%err": "Fehler",
	"%colon": ":",
	"%hyphen": " - ",
	"%full-stop": ".",
	"%comma-space": ", ",
	"%space": "&#32;",
	"%start": "Starten",
	"%stop": "Stoppen",
	"%back": "Zurück",
	"%cancel": "Kündigen",
	"%new-win": " (Öffnet in einem neuen Fenster)",
	"%min-ago": "Vor einer Minute",
	"%coup-mins": "paar Minuten",
	"%mins-ago": {
		"mixin": "Vor [MIXIN] Minuten"
	},
	"%hour-ago": "Vor einer Stunde",
	"%hours-ago": {
		"mixin": "Vor [MIXIN] Stunden"
	},
	"%days-ago": {
		"mixin": "Vor [MIXIN] Tagen"
	},
	"%yesterday": "gestern",

	"%nxt": "Nächste",
	"%nxt-r": "Nächste (rechte Pfeiltaste)",
	"%prv": "Früher",
	"%prv-l": "Früher (linke Pfeiltaste)",
	"%first": "Erste",
	"%last": "Letzte",
	"%close-esc": "Schließen (Escape-Taste)",
	"%show": "Zeigen",

	/* Archived Web page template */
	"%arch-pg": "Diese Web-Seite wurde auf der Web archiviert.",
	/* Menu bar */
	"%sm-hlp": "(Öffnen Sie das Untermenü mit der Eingabetaste und schließen mit der Escape-Taste)",
	/* Tabbed interface */
	"%tab-rot": {
		"off": "Stoppen Registerkarte Drehung",
		"on": "Starten Registerkarte Drehung"
	},
	"%tab-list": "Registerkarte-Liste",
	"%tab-pnl-end1": "Ende dieser Registerkarte angezeigt.",
	"%tab-pnl-end2": "Zurück zur Liste der Registerkarte",
	"%tab-pnl-end3": "oder der Rest der Seite fortzusetzen.",
	/* Multimedia player */
	"%play": "Spielen",
	"%pause": "Pausieren",
	"%open": "Öffnen",
	"%close": "Schließen",
	"%rew": "Zurückspulen",
	"%ffwd": "Schnellvorlauf",
	"%mute": {
		"on": "Stumm",
		"off": "Stummschaltung"
	},
	"%cc": {
		"off": "Ausblenden Untertitelung",
		"on": "Zeige Untertitelung"
	},
	"%cc-err": "Fehler beim Laden Untertiteln",
	"%adesc": {
		"on": "Aktivieren Sie Audio-Beschreibung",
		"off": "Deaktivieren Sie Audio-Beschreibung"
	},
	"%prog-bar": "Verwenden linke und rechte Pfeiltaste, um Vor-und Rückspulen der Medien Fortschritte",
	"%no-video": "Ihr Browser unterstützt keine zu haben scheinen die Fähigkeiten, um dieses Video abzuspielen, laden Sie sich bitte das Video unten",
	"%pos": "Aktuelle Position:",
	"%perc": "Wiedergabe Prozentsatz:",
	"%dur": "Insgesamt benötigte Zeit",
	"%buff": "Buffered:",
	/* Share widget */
	"%fav": "Favorit",
	"%email": "E-Mail",
	"%shr-txt": "Teilen Sie diese Seite",
	"%shr-hnt": " mit {s} ",
	"%shr-email-sub": "Interessante Seite",
	"%shr-email-bd": "Vielleicht haben Sie diese Seite interessant:\n{t} ({u})",
	"%shr-fav-ttl": "(Bookmark auf diese Seite)",
	"%shr-man": "Bitte schließen Sie diesen Dialog und drücken Sie Strg-D, um diese Seite einzurichten.",
	"%shr-all": "Alle anzeigen ({n})",
	"%shr-all-ttl": "Alle bookmarking sites",
	"%shr-disc": "Keine Unterstützung von Produkten oder Dienstleistungen ausdrücklich oder stillschweigend.",
	/* Form validation */
	"%frm-nosubmit": "Das Formular konnte nicht vorgelegt werden, da ",
	"%errs-fnd": " Fehler gefunden wurden.",
	"%err-fnd": " Fehler festgestellt wurde.",
	/* Date picker */
	"%date-hide": "Ausblenden Kalender",
	"%date-show": "Wählen Sie ein Datum aus einem Kalender für das Feld:",
	"%date-sel": "Ausgewählt",
	/* Calendar */
	"%days": ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
	"%mnths": ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
	"%cal": "Kalender",
	"%currDay": "(Aktueller Tag)",
	"%cal-goToLnk": "Gehe zu<span class=\"wb-inv\"> Monat des Jahres</span>",
	"%cal-goToTtl": "Gehe zu Monat des Jahres",
	"%cal-goToMnth": "Monat",
	"%cal-goToYr": "Jahr",
	"%cal-goToBtn": "Gehen",
	"%prvMnth": "Vorheriger Monat: ",
	"%nxtMnth": "Nächster Monat: ",
	/* Slideout */
	"%show-toc": "Inhaltsverzeichnis anzeigen",
	"%hide-toc": "Ausblenden des Inhaltsverzeichnisses",
	"%toc": "Inhaltsverzeichnis",
	/* Lightbox */
	"%lb-curr": "Artikel %curr% von %total%",
	"%lb-xhr-err": "Dieser Inhalt wurde nicht geladen.",
	"%lb-img-err": "Dieses Bild konnte nicht geladen werden.",
	/* Charts widget */
	"%table-mention": "Tabelle",
	"%table-following": "Grafik. Angaben in der folgenden Tabelle.",
	/* Session timeout */
	"%st-to-msg-bgn": "Ihre Sitzung endet automatisch in #min# min #sec# sec.",
	"%st-to-msg-end": "Wählen Sie \"Weiter Sitzung\", um die Sitzung zu verlängern.",
	"%st-msgbx-ttl": "Session Zeitablaufwarnung",
	"%st-alrdy-to-msg": "Leider Ihre Sitzung ist bereits abgelaufen. Bitte loggen Sie sich erneut.",
	"%st-btn-cont": "Weiter Sitzung",
	"%st-btn-end": "Sitzung beenden jetzt",
	/* Toggle details */
	"%td-toggle": "Wechseln alle",
	"%td-open": "Erweitern",
	"%td-close": "Alle ausblenden",
	"%td-ttl-open": "Erweitern Sie alle Teile der Inhalte",
	"%td-ttl-close": "Alles Teile der Inhalte",
	/* Table enhancement */
	"%sortAsc": ": Aktivieren für aufsteigend sortieren",
	"%sortDesc": ": Aktivieren für absteigend sortieren",
	"%emptyTbl": "Keine Daten in der Tabelle verfügbaren",
	"%infoEntr": "Zeige _START_ bis _END_ von _TOTAL_ Einträge",
	"%infoEmpty": "Zeige 0 bis 0 von 0 Einträge",
	"%infoFilt": "(gefiltert aus insgesamt _MAX_ Einträge)",
	"%info1000": "&#160;",
	"%lenMenu": "Zeige _MENU_ Einträge",
	/* Geomap */
	"%geo-mapcontrol": "Kartensteuerelement",
	"%geo-zoomin": "Vergrößern",
	"%geo-zoomout": "Verkleinern",
	"%geo-zoomworld": "Zoom auf weit Karte",
	"%geo-zoomfeature": "Zoom auf das Element",
	"%geo-scaleline": "Karte Maßstab",
	"%geo-mouseposition": "Breitengrad und Längengrad des Mauszeigers",
	"%geo-ariamap": "Kartenobjekt. Die Beschreibungen der Karte Funktionen sind in der Tabelle unten.",
	"%geo-accessibilize": "<strong>Keyboard-Benutzer:</strong> Wenn die Karte im Fokus ist, verwenden Sie die Pfeiltasten, um die Karte und die Plus-und Minus-Tasten zu vergrößern schwenken. Die Pfeiltasten werden nicht schwenken die Karte, wenn die Karte soweit gezoomt.",
	"%geo-accessibilizetitle": "Anleitung: Kartennavigation",
	"%geo-togglelayer": "Umschalten der Anzeige der Schicht",
	"%geo-hiddenlayer": "Diese Schicht ist im Moment versteckt.",
	"%geo-basemapurl": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"%geo-basemaptitle": "BaseMaps_CBMT3978",
	"%geo-basemapurltxt": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"%geo-attributionlink": "http://geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"%geo-attributiontitle": "GeoGratis - Kanada Basiskarte (Englisch oder Französisch)",
	"%geo-select": "Wählen",
	"%geo-labelselect": "Überprüfen Sie das Element auf der Karte auswählen",
	/* Disable/enable WET plugins and polyfills */
	"%wb-disable": "Grundlegende HTML-Version",
	"%wb-enable": "Standardausführung",
	/* Template */
	"%tmpl-signin": "Login"
};

window.i18nObj = ind;

})( window );
