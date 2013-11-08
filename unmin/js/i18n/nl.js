/*! Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW) wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 - v4.0.0-a1-development - 2013-11-08
*/
/*
 * Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 */
/*
----- Dutch dictionary (il8n) ---
 */
( function( window ) {
"use strict";
/* main index */
var ind = {
	"%lang-code": "nl",
	"%lang-en": "Dutch",
	"%lang-fr": "néerlandais",
	"%lang-nat": "Nederlands",
	"%all": "Allen",
	"%home": "Home",
	"%main-page": "Hoofdpagina",
	"%tphp": "Bovenkant pagina",
	"%you-are-in": "U bent hier:",
	"%welcome-to": "Welkom bij:",
	"%load": "het laden van ...",
	"%process": "verwerking ...",
	"%srch": "Zoeken",
	"%srch-terms": "Zoeken naar trefwoorden:",
	"%no-match": "Er zijn geen resultaten gevonden voor uw zoekopdracht",
	"%matches": {
		"mixin": "[MIXIN] gevonden zoekresultaten"
	},
	"%menu": "Menu",
	"%settings": "Instellingen",
	"%langs": "Talen",
	"%about": "Over",
	"%curr": "(actueel)",
	"%hide": "Verbergen",
	"%err": "Fout",
	"%colon": ":",
	"%hyphen": " - ",
	"%full-stop": ".",
	"%comma-space": ", ",
	"%space": "&#32;",
	"%start": "Beginnen",
	"%stop": "Stoppen",
	"%back": "Terug",
	"%cancel": "Annuleren",
	"%new-win": " (Opent in een nieuw venster)",
	"%min-ago": "Een minuut geleden",
	"%coup-mins": "Enkele minuten geleden",
	"%mins-ago": {
		"mixin": "[MIXIN] minuten geleden"
	},
	"%hour-ago": "een uur geleden",
	"%hours-ago": {
		"mixin": "[MIXIN] uren geleden"
	},
	"%days-ago": {
		"mixin": "[MIXIN] dagen geleden"
	},
	"%yesterday": "gisteren",

	"%nxt": "Volgende",
	"%nxt-r": "Volgende (rechtse pijlen-toets)",
	"%prv": "Vorige",
	"%prv-l": "Vorige (linkse pijlen-toets)",
	"%first": "Eerste",
	"%last": "Laatste",
	"%close-esc": "Sluit (Escape-toets)",
	"%show": "Toon",

	/* Archived Web page template */
	"%arch-pg": "Deze pagina is gearchiveerd.",
	/* Menu bar */
	"%sm-hlp": "(open het submenu via de Enter-toets en sluit het met de Escape-toets af)",
	/* Tabbed interface */
	"%tab-rot": {
		"off": "Stop de tabrotatie",
		"on": "Start de tabrotatie"
	},
	"%tab-list": "Lijst van tabs",
	"%tab-pnl-end1": "Einde van het deelvenster met tabs.",
	"%tab-pnl-end2": "Terug naar de lijst met tabs",
	"%tab-pnl-end3": "of om met de rest van de pagina door te gaan.",
	/* Multimedia player */
	"%play": "Afspelen",
	"%pause": "Pauze",
	"%open": "Openen",
	"%close": "Afsluiten",
	"%rew": "Terugspoelen",
	"%ffwd": "Snel vooruit spoelen",
	"%mute": {
		"on": "Geluid uitzetten",
		"off": "Geluid aanzetten"
	},
	"%cc": {
		"off": "Bijschrift verbergen",
		"on": "Bijschrift tonen"
	},
	"%cc-err": "Fout bij het tonen van de bijschriften",
	"%adesc": {
		"on": "Audiobeschrijving activeren",
		"off": "Audiobeschrijving opheffen"
	},
	"%prog-bar": "gebruik linkse en rechtse pijlen om verder te gaan of terug te keren",
	"%no-video": "Uw browser is blijkbaar niet in staat om deze video af te spelen; gelieve de video hieronder te downloaden",
	"%pos": "Huidige positie:",
	"%perc": "Percentage van het afspelen:",
	"%dur": "Totale afspeelduur:",
	"%buff": "Gebufferd:",
	/* Share widget */
	"%fav": "Favoriet",
	"%email": "E-mail",
	"%shr-txt": "Deel deze pagina met anderen",
	"%shr-hnt": " met {s} ",
	"%shr-email-sub": "Interessante pagina",
	"%shr-email-bd": "Misschien vindt u deze pagina interessant",
	"%shr-fav-ttl": "(bookmark deze pagina)",
	"%shr-man": "Gelieve dit dialoogvenster te sluiten en met Ctrl-D te bewaren",
	"%shr-all": "Toon alles ({n})",
	"%shr-all-ttl": "Alle bookmark sites",
	"%shr-disc": "Er wordt hier geen goedkeuring van producten of diensten uitgedrukt.",
	/* Form validation */
	"%frm-nosubmit": "Het formulier kon niet worden verwerkt omdat ",
	"%errs-fnd": " er zijn fouten opgetreden.",
	"%err-fnd": " er is een fout opgetreden.",
	/* Date picker */
	"%date-hide": "Kalender verbergen",
	"%date-show": "Kies een kalenderdatum voor het veld:",
	"%date-sel": "Geselecteerd",
	/* Calendar */
	"%days": ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"],
	"%mnths": ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"],
	"%cal": "Kalender",
	"%currDay": "(Vandaag)",
	"%cal-goToLnk": "Ga naar<span class=\"wb-inv\"> de maand of het jaar</span>",
	"%cal-goToTtl": "Ga naar de maand of het jaar",
	"%cal-goToMnth": "Maand:",
	"%cal-goToYr": "Jaar:",
	"%cal-goToBtn": "Ga",
	"%prvMnth": "Vorige maand: ",
	"%nxtMnth": "Volgende maand: ",
	/* Slideout */
	"%show-toc": "Inhoudsopgave tonen",
	"%hide-toc": "Inhoudsopgave verbergen",
	"%toc": "inhoudsopgave",
	/* Lightbox */
	"%lb-curr": "Onderdeel %curr% van een totaal van %total%",
	"%lb-xhr-err": "De inhoud is niet geladen",
	"%lb-img-err": "Het beeld is niet geladen",
	/* Charts widget */
	"%table-mention": "Tabel",
	"%table-following": "Grafiek. Meer details in volgende tabel",
	/* Session timeout */
	"%st-to-msg-bgn": "Uw sessie zal automatisch vervallen in #min# min. #sec# sec.",
	"%st-to-msg-end": "Kies \"Doorgaan sessie\" om uw sessie te verlengen.",
	"%st-msgbx-ttl": "Sessie timeout waarschuwing",
	"%st-alrdy-to-msg": "Excuses, uw sessie is verlopen. Log opnieuw in.",
	"%st-btn-cont": "Doorgaan sessie",
	"%st-btn-end": "Einde sessie nu",
	/* Toggle details */
	"%td-toggle": "Alles tuimelen",
	"%td-open": "Alles uitvouwen",
	"%td-close": "Alles invouwen",
	"%td-ttl-open": "Alle onderdelen van de inhoud tonen",
	"%td-ttl-close": "Alle onderdelen van de inhoud verbergen",
	/* Table enhancement */
	"%sortAsc": ": activeren voor oplopende sortering",
	"%sortDesc": ": activeren voor aflopende sortering",
	"%emptyTbl": "Geen gegevens beschikbaar in de tabel",
	"%infoEntr": "Toon _START_ tot _END_ van _TOTAL_ lemma's",
	"%infoEmpty": "Toon 0 tot 0 van 0 lemma's",
	"%infoFilt": "(gefilterd uit _MAX_ totaal aantal lemma's)",
	"%info1000": "&#160;",
	"%lenMenu": "Toon _MENU_ lemma's",
	/* Geomap */
	"%geo-mapcontrol": "Kaart controle",
	"%geo-zoomin": "Inzoomen",
	"%geo-zoomout": "Uitzoomen",
	"%geo-zoomworld": "Zoomen naar kaartgrootte",
	"%geo-zoomfeature": "Zoomen naar onderdeel",
	"%geo-scaleline": "kaartschaal",
	"%geo-mouseposition": "Lengte-en breedtegraad van de muiscursor",
	"%geo-ariamap": "Kaart object. De beschrijvingen van de kaart functies staan in de onderstaande tabel.",
	"%geo-accessibilize": "<strong>Keyboard gebruikers:</strong> Als de kaart is scherpgesteld, gebruikt u de pijltoetsen om de kaart en de plus en min toetsen om in te zoomen pannen. De pijltoetsen functioneren niet als schuiftoetsen bij maximale kaartgrootte.",
	"%geo-accessibilizetitle": "Instructies: Kaartnavigatie",
	"%geo-togglelayer": "Tuimel de weergave van de laag",
	"%geo-hiddenlayer": "Deze laag is momenteel verborgen.",
	"%geo-basemapurl": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"%geo-basemaptitle": "BaseMaps_CBMT3978",
	"%geo-basemapurltxt": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"%geo-attributionlink": "http://geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"%geo-attributiontitle": "GeoGratis - Canada basiskaart (Engels of Frans)",
	"%geo-select": "Selecteren",
	"%geo-labelselect": "Vink het element aan om het op de kaart te selecteren",
	/* Disable/enable WET plugins and polyfills */
	"%wb-disable": "Versie in basis-HTML",
	"%wb-enable": "Standaardversie",
	/* Template */
	"%tmpl-signin": "Aanmelden"
};

window.i18nObj = ind;

})( window );
