/*! Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW) wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 - v4.0.0-a1-development - 2013-11-05
*/
/*
 * Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 */
/*
----- Greek dictionary (il8n) ---
 */
( function( window ) {
"use strict";
/* main index */
var ind = {
	"%lang-code": "el",
	"%lang-en": "Greek",
	"%lang-fr": "grec",
	"%lang-nat": "Ελληνικά",
	"%all": "Όλα",
	"%home": "Σπίτι",
	"%main-page": "Κύρια σελίδα",
	"%tphp": "Επιστροφή στην αρχή της σελίδα",
	"%you-are-in": "You are σε",
	"%welcome-to": "Καλώς ήρθατε στο",
	"%load": "φόρτωση ...",
	"%process": "επεξεργασία ...",
	"%srch": "Αναζήτηση σε",
	"%srch-terms": "Αναζήτηση όρους:",
	"%no-match": "Δεν που βρέθηκαν αγώνα",
	"%matches": {
		"mixin": "[MIXIN] αγώνες που βρέθηκαν"
	},
	"%menu": "Μενού",
	"%settings": "Ρυθμίσεις",
	"%langs": "Γλώσσες",
	"%about": "Σχετικά με",
	"%curr": "(Τρέχουσα)",
	"%hide": "Κρύβω",
	"%err": "Σφάλμα",
	"%colon": ":",
	"%hyphen": " - ",
	"%full-stop": ".",
	"%comma-space": ", ",
	"%space": "&#32;",
	"%start": "Εκκίνηση",
	"%stop": "Σταματήστε",
	"%back": "Πίσω",
	"%cancel": "Ακύρωση",
	"%new-win": " (Ανοίγει σε ένα νέο παράθυρο)",
	"%min-ago": "ένα λεπτό Πριν από",
	"%coup-mins": "ζευγάρι των λεπτά πριν",
	"%mins-ago": {
		"mixin": "Πριν από [MIXIN] λεπτά"
	},
	"%hour-ago": "μια ώρα πριν από",
	"%hours-ago": {
		"mixin": "[MIXIN] ώρες πριν"
	},
	"%days-ago": {
		"mixin": "[MIXIN] μέρες πριν"
	},
	"%yesterday": "εχθές",

	"%nxt": "Επόμενος",
	"%nxt-r": "Επόμενος (δεξί πλήκτρο βέλους)",
	"%prv": "Προηγούμενος",
	"%prv-l": "Προηγούμενος (αριστερό πλήκτρο βέλους)",
	"%first": "Πρώτα",
	"%last": "Τελευταίος",
	"%close-esc": "Κλείστε (κλειδί διαφυγής)",
	"%show": "Προβολή",

	/* Archived Web page template */
	"%arch-pg": "Αυτή η σελίδα στο Web έχει αρχειοθετηθεί σχετικά με την στο Web.",
	/* Menu bar */
	"%sm-hlp": "(Ανοίξετε το υπομενού με την εισάγετε την κλειδί και στενή με την κλειδί διαφυγής)",
	/* Tabbed interface */
	"%tab-rot": {
		"off": "Σταματήστε να περιστροφή καρτέλα",
		"on": "Ξεκινήστε το περιστροφή καρτέλα"
	},
	"%tab-list": "Καρτέλα λίστα",
	"%tab-pnl-end1": "End του αυτής της πάνελ καρτέλα.",
	"%tab-pnl-end2": "Επιστροφή για να την λίστα καρτέλα",
	"%tab-pnl-end3": "ή να συνεχίσουν προς την υπόλοιπη της σελίδας.",
	/* Multimedia player */
	"%play": "Παιχνίδι",
	"%pause": "Παύση",
	"%open": "Ανοιχτό",
	"%close": "Κοντά",
	"%rew": "Επανεκτύλιξη",
	"%ffwd": "Γρήγορη προς τα εμπρός",
	"%mute": {
		"on": "Σίγαση",
		"off": "Αναίρεση σίγασης"
	},
	"%cc": {
		"off": "Απόκρυψη Κλειστό λεζάντες",
		"on": "Εμφάνιση Κλειστό λεζάντες"
	},
	"%cc-err": "Σφάλμα κατά τη φόρτωση κλειστά λεζάντες",
	"%adesc": {
		"on": "Ενεργοποίηση ήχου περιγραφή",
		"off": "Απενεργοποίηση ήχου περιγραφή"
	},
	"%prog-bar": "χρήση αριστερά και δεξιά βέλη για να προχωρήσει προς τα πίσω και την πρόοδο των μέσων μαζικής ενημέρωσης",
	"%no-video": "Ο φυλλομετρητής σας δεν δεν φαίνεται να να έχουν οι δυνατότητες για να παίξει αυτό το βίντεο, παρακαλείστε να κατεβάσετε το βίντεο παρακάτω",
	"%pos": "Τρέχουσα θέση:",
	"%perc": "Ποσοστό Αναπαραγωγή:",
	"%dur": "Συνολικός χρόνος:",
	"%buff": "ρυθμιστικό:",
	/* Share widget */
	"%fav": "Αγαπημένα",
	"%email": "E-mail",
	"%shr-txt": "Κοινή χρήση αυτής της σελίδας",
	"%shr-hnt": " με {s} ",
	"%shr-email-sub": "Ενδιαφέρουσες σελίδα",
	"%shr-email-bd": "Νόμιζα ότι μπορείτε θα μπορούσε να βρείτε αυτό το τη σελίδα ενδιαφέρουσα:\n{t} ({u})",
	"%shr-fav-ttl": "(Σελιδοδείκτη αυτή τη σελίδα)",
	"%shr-man": "Παρακαλείστε να κλείστε αυτό το παράθυρο διαλόγου και πιέστε το πλήκτρο Ctrl-D για να σελιδοδείκτη αυτή τη σελίδα.",
	"%shr-all": "Εμφάνιση όλων ({n})",
	"%shr-all-ttl": "Όλα bookmarking περιοχές",
	"%shr-disc": "Δεν οπισθογράφηση των οποιωνδήποτε τα προϊόντα ή υπηρεσίες αυτών δεν εκφράζονται ή σιωπηρή.",
	/* Form validation */
	"%frm-nosubmit": "Το έντυπο θα μπορούσε να να δεν που υποβάλλονται, επειδή ",
	"%errs-fnd": " τα σφάλματα βρέθηκαν.",
	"%err-fnd": " σφάλμα ήταν που βρέθηκαν.",
	/* Date picker */
	"%date-hide": "Απόκρυψη ημερολόγιο",
	"%date-show": "Επιλέξτε μια ημερομηνία από το ημερολόγιο για τον τομέα:",
	"%date-sel": "Επιλεγμένα",
	/* Calendar */
	"%days": ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"],
	"%mnths": ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"],
	"%cal": "Ημερολόγιο",
	"%currDay": "(Τρέχουσα ημέρα)",
	"%cal-goToLnk": "Πηγαίνετε στο<span class=\"wb-inv\"> μήνα του έτους</span>",
	"%cal-goToTtl": "Πηγαίνετε στο μήνα του έτους",
	"%cal-goToMnth": "Μήνας",
	"%cal-goToYr": "Έτος",
	"%cal-goToBtn": "Πάω",
	"%prvMnth": "Προηγούμενος Μήνας: ",
	"%nxtMnth": "Επόμενος Μήνας: ",
	/* Slideout */
	"%show-toc": "Εμφάνιση τον πίνακα των περιεχομένων",
	"%hide-toc": "Απόκρυψη της τον πίνακα των περιεχομένων",
	"%toc": "πίνακα των περιεχομένων",
	/* Lightbox */
	"%lb-curr": "Αντικείμενο %curr% από ​​%total%",
	"%lb-xhr-err": "Αυτό το περιεχόμενο απέτυχε για να φορτώσει.",
	"%lb-img-err": "Αυτή η εικόνα απέτυχε για να φορτώσει.",
	/* Charts widget */
	"%table-mention": "Τραπέζι",
	"%table-following": "Διάγραμμα. Λεπτομέρειες στον ακόλουθο πίνακα.",
	/* Session timeout */
	"%st-to-msg-bgn": "Η συνεδρία σας θα λήξει αυτόματα στο #min# min #sec# sec.",
	"%st-to-msg-end": " Επιλέξτε \"Συνέχεια συνεδρία\" να παρατείνει τη συνεδρία σας.",
	"%st-msgbx-ttl": "Συνεδρία προειδοποίηση χρονικού ορίου",
	"%st-alrdy-to-msg": "Μας συγχωρείτε συνεδρίας σας έχει ήδη λήξει. Παρακαλείστε να συνδεθείτε και πάλι.",
	"%st-btn-cont": "Συνέχιση της συνόδου",
	"%st-btn-end": "Τέλος συνόδου τώρα",
	/* Toggle details */
	"%td-toggle": "Εναλλαγή όλα τα",
	"%td-open": "Ανάπτυξη όλων",
	"%td-close": "Σύμπτυξη όλων",
	"%td-ttl-open": "Αναπτύξτε το όλες τις ενότητες του περιεχόμενο",
	"%td-ttl-close": "Σύμπτυξη όλες τις ενότητες του περιεχόμενο",
	/* Table enhancement */
	"%sortAsc": ": την ενεργοποιήσει για την ταξινόμηση με αύξουσα σειρά",
	"%sortDesc": ": την ενεργοποιήσει για την φθίνουσα είδος",
	"%emptyTbl": "Δεν τα δεδομένα είναι διαθέσιμα στον πίνακα",
	"%infoEntr": "Εμφάνιση _START_ έως _END_ από _TOTAL_ καταχωρήσεις",
	"%infoEmpty": "Εμφάνιση 0 έως 0 από 0 καταχωρήσεις",
	"%infoFilt": "(φιλτράρεται από _MAX_ καταχωρήσεις)",
	"%info1000": "&#160;",
	"%lenMenu": "Εμφάνιση _MENU_ καταχωρήσεις",
	/* Geomap */
	"%geo-mapcontrol": "Χάρτης τον έλεγχο",
	"%geo-zoomin": "Μεγέθυνση",
	"%geo-zoomout": "Σμίκρυνση",
	"%geo-zoomworld": "Ζουμ να χαρτογραφήσει την έκταση",
	"%geo-zoomfeature": "Ζουμ στο στοιχείο",
	"%geo-scaleline": "Χάρτης κλίμακα",
	"%geo-mouseposition": "Γεωγραφικό πλάτος και μήκος του δείκτη του ποντικιού",
	"%geo-ariamap": "Χάρτης αντικείμενο. Οι περιγραφές των χαρακτηριστικών του χάρτη αναφέρονται στον πίνακα που ακολουθεί.",
	"%geo-accessibilize": "<strong>Οι χρήστες Πληκτρολόγιο:</strong> Όταν ο χάρτης είναι σε εστίαση, χρησιμοποιήστε τα πλήκτρα βέλους για να μετακινήσετε το χάρτη και τις συν και του ενεργητικού μείον τα τα πλήκτρα για να κάνετε ζουμ. Οι πλήκτρα με τα βέλη δεν θα τηγάνι το χάρτη όταν μεγεθύνεται στο βαθμό που χάρτη.",
	"%geo-accessibilizetitle": "Οδηγίες: Χάρτης πλοήγησης",
	"%geo-togglelayer": "Εναλλαγή την οθόνη του του στρώμα",
	"%geo-hiddenlayer": "Αυτό το στρώμα είναι κρυφές αυτή τη στιγμή.",
	"%geo-basemapurl": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"%geo-basemaptitle": "BaseMaps_CBMT3978",
	"%geo-basemapurltxt": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"%geo-attributionlink": "http://geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"%geo-attributiontitle": "GeoGratis - Καναδάς χάρτη βάσης (αγγλικά ή γαλλικά)",
	"%geo-select": "Επιλέξτε το",
	"%geo-labelselect": "Ελέγξτε τις για να επιλέξετε το στοιχείο σχετικά με την χάρτη",
	/* Disable/enable WET plugins and polyfills */
	"%wb-disable": "Βασικές έκδοση HTML",
	"%wb-enable": "Βασική έκδοση",
	/* Template */
	"%tmpl-signin": "Σύνδεση Σε"
};

window.i18nObj = ind;

})( window );
