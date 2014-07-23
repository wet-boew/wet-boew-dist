/*!
 *
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 *
 * Version: v3.1.14-development Build: 2014-07-23 12:05 AM EDT
 *
 */
(function(){var a=window.pe||{fn:{}};a.dic.ind={"%lang-code":"lv","%lang-eng":"Latvian","%lang-fra":"letton","%lang-native":"Latviešu valoda","%all":"Visi","%home":"Sākums","%main-page":"Galvenā","%top-of-page":"Lapas augša","%you-are-in":"Jūs esat:","%welcome-to":"Laipni lūgti:","%loading":"ielādēšana ...","%processing":"pārstrādes ...","%search":"Meklēt","%search-for-terms":"Meklēt terminu:","%no-match-found":"Atbilstība nav atrasta","%matches-found":{mixin:"[MIXIN] atbilstība(s) nav atrasta(s)"},"%menu":"Izvēlne","%settings":"Iestatījumi","%languages":"Valodas","%about":"Par","%current":"(pašreizējais)","%hide":"Slēpt","%error":"Kļūda","%colon":":","%hyphen":" - ","%full-stop":".","%list-comma-space":", ","%interword-space":"&#32;","%start":"Sākt","%stop":"Pārtraukt","%back":"Atpakaļ","%new-window":" (atveras jaunā logā)","%minute-ago":"pirms minūtes","%couple-of-minutes":"pirms dažām minūtēm","%minutes-ago":{mixin:"pirms [MIXIN] minūtēm"},"%hour-ago":"pirms stundas","%hours-ago":{mixin:"pirms [MIXIN] stundām"},"%days-ago":{mixin:"pirms [MIXIN] dienām"},"%yesterday":"vakar","%next":"Nākošais","%next-right":"Nākošais (labo bultiņu taustiņu)","%previous":"Lepriekšējais","%previous-left":"Lepriekšējais (pa kreisi bulta taustiņu)","%first":"Pirmā","%last":"Pēdējā","%close-esc":"Aizvērt (escape taustiņu)","%archived-page":"Šī mājas lapa ir arhivēta.","%sub-menu-help":"(atvērt apakšizvēlni ar enter taustiņu un aizvērt ar escape taustiņu)","%tab-rotation":{disable:"Pārtraukt rotāciju",enable:"Sākt rotāciju"},"%tab-list":"Saraksts cilnes","%tab-panel-end-1":"Beigas cilnes paneļa.","%tab-panel-end-2":"Atgriezties uz sarakstu cilnēm","%tab-panel-end-3":"vai turpināt uz pārējo lapu.","%play":"Spēlēt","%pause":"Pauze","%open":"Atvērt","%close":"Aizvērt","%rewind":"Attīt atpakaļ","%fast-forward":"Ātrā pārtīšana","%mute":{enable:"Izslēgt skaņu",disable:"Ieslēgt skaņu"},"%closed-caption":{disable:"Slēpt subtitrus",enable:"Rādīt subtitrus"},"%closed-caption-error":"Kļūda lejuplādējot subtitrus","%audio-description":{enable:"Ieslēgt audio aprakstu",disable:"Izslēgt audio aprakstu"},"%progress-bar":"Lietot taustiņus kreisā bulta un labā bultiņa, lai patītu uz priekšu vai atgrieztos","%no-video":"Jūsu tīmekļa pārlūks nespēj parādīt šo video, lūdzu lejuplādejiet  video lejāk","%position":"Šobdrīdējā pozīcija:","%percentage":"Atskaņošana procentos:","%duration":"Kopējais laiks:","%buffered":"Īslaicīgā atmiņā:","%favourite":"Vēlamā saite","%email":"e-pasts","%share-text":"Ieteikt šo lapu","%share-hint":" ar {s} ","%share-email-subject":"Interesanta lapa","%share-email-body":"Šī lapa var jūs interesēt:n{t} ({u})","%share-fav-title":"(grāmatzīmi šo lapu)","%share-manual":"Lūdzu aizveriet šo dialogu un spiediet Ctrl+D, lai pievienotu grāmatzīmi.","%share-showall":"Rādīt visu ({n})","%share-showall-title":"Visas atzīmējamās lapas","%share-disclaimer":"Neviena jebkuru produktu vai pakalpojumu apstiprināšanu vai ietverta.","%form-not-submitted":"Formu nav iespējams iesniegt, jo ","%errors-found":" tika atrastas kļūdas.","%error-found":" tika atrasta kļūda.","%datepicker-hide":"Slēpt kalendāru","%datepicker-show":"Izvēlēties datumu no kalendāra lauka:","%datepicker-selected":"Atlasīts","%calendar-weekDayNames":["Pirmdiena","Otrdiena","Trešdiena","Ceturtdiena","Piektdiena","Sestdiena","Svētdiena"],"%calendar-monthNames":["Janvāris","Februāris","Marts","Aprīlis","Maijs","Jūnijs","Jūlijs","Augusts","Septembris","Octobris","Novembris","Decembris"],"%calendar":"Kalendārs","%calendar-currentDay":"(Šodien)","%calendar-goToLink":'Iet uz<span class="wb-invisible"> gada mēnesi</span>',"%calendar-goToTitle":"Iet uz gada mēnesi","%calendar-goToMonth":"Mēnesis:","%calendar-goToYear":"Gads:","%calendar-goToButton":"Iet uz","%calendar-cancelButton":"Atcelt","%calendar-previousMonth":"Iepriekšējais mēnesis: ","%calendar-nextMonth":"Nākošais mēnesis: ","%show-toc":"Rādīt","%show-text":"Parādīt satura","%hide-text":"Slēpt satura","%table-contents":"saturs","%lb-current":"Vienums {current} no {total}","%lb-xhr-error":"Šo saturu nevar ielādēt","%lb-img-error":"Šo attēlu nevar ielādēt","%lb-slideshow":"slaidrāde","%jqm-expand":"klikšķināt, lai paplašinātu saturu","%jqm-collapse":"klikšķināt, lai savērstu saturu","%jqm-clear-search":"Dzēst meklēto","%jqm-filter":"Atlasīt vienumu","%jqm-tbl-col-toggle":"Kolonnas ...","%table-mention":"Tabula","%table-following":"Grafiks. Detaļas tabulā.","%st-timeout-msg":'Jūsu sesija beigsies automātiski #expireTime#. Izvēlieties "OK", lai paplašinātu savu sesiju.',"%st-msgbox-title":"Sesijas taimauts brīdinājums","%st-already-timeout-msg":"Atvainojiet, jūsu sesija jau ir beidzies. Lūdzu pieteikties vēlreiz.","%td-toggle":"Pārslēgt visas","%td-open":"Izvērst visu","%td-close":"Sakļaut visu","%td-ttl-open":"Paplašināt visas sadaļas satura","%td-ttl-close":"Sakļaut visas sadaļas satura","%sSortAscending":": aktivizēt uz augošā šķirot","%sSortDescending":": aktivizēt par dilstošā šķirot","%sEmptyTable":"Nav pieejami dati tabulā","%sInfo":"Rādu no _START_ līdz _END_ no _TOTAL_ ierakstiem","%sInfoEmpty":"Rādu no 0 līdz 0 no 0 ierakstiem","%sInfoFiltered":"(filtrēts no _MAX_ kopējiem ierakstiem)","%sInfoThousands":",","%sLengthMenu":"Parādīt _MENU_ ieraksti","%geo-mapcontrol":"Karte kontrole","%geo-zoomin":"Pievelciet","%geo-zoomout":"Attāliniet","%geo-zoomworld":"Zoom uz kartes robežas","%geo-zoomfeature":"Tuvināt elementam","%geo-scaleline":"Kartes mērogs","%geo-mouseposition":"Platuma un garuma ar peles kursoru","%geo-ariamap":"Karte objekts. No kartes funkciju apraksti šajā tabulā.","%geo-accessibilize":"<strong>Tastatūras tīklā:</strong> Kad karte ir fokusā, izmantojiet bulttaustiņus, lai pārvietotos karti un plus un mīnus taustiņus, lai tuvinātu. Bulttaustiņi nebūs panoramētu karti kad pietuvināto uz kartes apmērā.","%geo-accessibilizetitle":"Instrukcijas: Karte navigācija","%geo-togglelayer":"Pārslēgt displeja slāņa","%geo-hiddenlayer":"Šis slānis pašlaik paslēpta.","%geo-basemapurl":"http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg","%geo-basemaptitle":"BaseMaps_CBMT3978","%geo-basemapurltxt":"http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg","%geo-attributionlink":"http://geogratis.gc.ca/geogratis/CBM_CBC?lang=en","%geo-attributiontitle":"GeoGratis - Kanāda bāze karte (angļu vai franču valodā)","%geo-select":"Atlasīt","%geo-labelselect":"Pārbaudiet, lai izvēlētos elementu uz kartes","%pe-disable":"Pamata HTML versija","%pe-enable":"Standarta versija"};a.document.trigger("languageloaded");window.pe=a;return a}());