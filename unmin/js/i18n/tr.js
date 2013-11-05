/*! Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW) wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 - v4.0.0-a1-development - 2013-11-05
*/
/*
 * Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 */
/*
----- Turkish dictionary (il8n) ---
 */
( function( window ) {
"use strict";
/* main index */
var ind = {
	"%lang-code": "tr",
	"%lang-en": "Turkish",
	"%lang-fr": "turc",
	"%lang-nat": "Türkçe",
	"%all": "Tüm",
	"%home": "Ev",
	"%main-page": "Ana sayfa",
	"%tphp": "Sayfa Başı",
	"%you-are-in": "Şuradasınız:",
	"%welcome-to": "Hoşgeldiniz:",
	"%load": "yükleniyor ...",
	"%process": "işleme ...",
	"%srch": "Ara",
	"%srch-terms": "Terimler için ara:",
	"%no-match": "Eşleşme bulunamadı",
	"%matches": {
		"mixin": "[MIXIN] eşleşme bulundu"
	},
	"%menu": "Menü",
	"%settings": "Ayarlar",
	"%langs": "Diller",
	"%about": "Hakkında",
	"%curr": "(güncel)",
	"%hide": "Sakla",
	"%err": "Hata",
	"%colon": ":",
	"%hyphen": " - ",
	"%full-stop": ".",
	"%comma-space": ", ",
	"%space": "&#32;",
	"%start": "Başla",
	"%stop": "Bitir",
	"%back": "Geri",
	"%cancel": "İptal",
	"%new-win": " (Yeni pencerede açılır)",
	"%min-ago": "bir dakika önce",
	"%coup-mins": "birkaç dakika önce",
	"%mins-ago": {
		"mixin": "[MIXIN] dakika önce"
	},
	"%hour-ago": "bir saat önce",
	"%hours-ago": {
		"mixin": "[MIXIN] saat önce"
	},
	"%days-ago": {
		"mixin": "[MIXIN] gün önce"
	},
	"%yesterday": "dün",

	"%nxt": "Bir sonraki",
	"%nxt-r": "Bir sonraki (sağ ok tuşu)",
	"%prv": "Bir önceki",
	"%prv-l": "Bir önceki (sol ok tuşu)",
	"%first": "İlk",
	"%last": "Son",
	"%close-esc": "Kapat (escape tuşu)",
	"%show": "Göster",

	/* Archived Web page template */
	"%arch-pg": "Bu web sitesi web üzerinde arşivlenmiştir.",
	/* Menu bar */
	"%sm-hlp": "(alt menüyü enter tuşu ile açıp escape tuşu ile kapatınız)",
	/* Tabbed interface */
	"%tab-rot": {
		"off": "Tab dönüşünü durdur",
		"on": "Tab dönüşünü başlat"
	},
	"%tab-list": "Tab listesi",
	"%tab-pnl-end1": "Bu tab paneli sonu.",
	"%tab-pnl-end2": "Tab listesine dön",
	"%tab-pnl-end3": "ya da geri kalan sayfa devam etmektedir.",
	/* Multimedia player */
	"%play": "Oynat",
	"%pause": "Duraklat",
	"%open": "Açık",
	"%close": "Kapat",
	"%rew": "Geri sar",
	"%ffwd": "Hızlı sar",
	"%mute": {
		"on": "Sessiz",
		"off": "Sesi aç"
	},
	"%cc": {
		"off": "Kapalı eklentileri gizle",
		"on": "Kapalı eklentileri göster"
	},
	"%cc-err": "Kapalı eklenti yükleme hatası",
	"%adesc": {
		"on": "Sesli açıklama açık",
		"off": "Sesli açıklama kapalı"
	},
	"%prog-bar": "sağ ok ve sol ok tuşlarını kullanarak medyayı ileri ya da geri sarınız",
	"%no-video": "Tarayıcınız bu videoyu oynatma kapasitesine sahip değil, lütfen videoyu aşağıdan indiriniz",
	"%pos": "Geçerli pozisyon:",
	"%perc": "Oynatma yüzdesi:",
	"%dur": "Toplam zaman:",
	"%buff": "Arabelleklenen:",
	/* Share widget */
	"%fav": "Favori",
	"%email": "E-posta",
	"%shr-txt": "Bu sayfayı paylaş",
	"%shr-hnt": " ile {s} ",
	"%shr-email-sub": "İlginç sayfa",
	"%shr-email-bd": "Bu sayfayı ilginç bulacağını düşünüyorum:\n{t} ({u})",
	"%shr-fav-ttl": "(bu sayfa imi)",
	"%shr-man": "Lütfen bu diyaloğu kapatıp Ctrl-D ye basarak sayfayı kaydediniz.",
	"%shr-all": "Tümünü göster ({n})",
	"%shr-all-ttl": "Kaydedilmiş tüm sayfalar",
	"%shr-disc": "Herhangi bir ürün veya hizmet yok onaylandığı ifade ya da ima edilir.",
	/* Form validation */
	"%frm-nosubmit": "Form gönderilemiyor, çünkü ",
	"%errs-fnd": " hatalar bulundu.",
	"%err-fnd": " hata bulundu.",
	/* Date picker */
	"%date-hide": "Takvimi gizle",
	"%date-show": "Alan için takvimden bir tarih seçiniz:",
	"%date-sel": "Seçilmiş",
	/* Calendar */
	"%days": ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"],
	"%mnths": ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
	"%cal": "Takvim",
	"%currDay": "(Geçerli gün)",
	"%cal-goToLnk": "<span class=\"wb-inv\">Yılın ayına </span>Git",
	"%cal-goToTtl": "Yılın ayına git",
	"%cal-goToMnth": "Ay:",
	"%cal-goToYr": "Yıl:",
	"%cal-goToBtn": "Git",
	"%prvMnth": "Önceki ay: ",
	"%nxtMnth": "Sonraki ay: ",
	/* Slideout */
	"%show-toc": "Içindekiler göster",
	"%hide-toc": "Içindekiler gizle",
	"%toc": "içindekiler",
	/* Lightbox */
	"%lb-curr": "%total% de %curr% inci madde",
	"%lb-xhr-err": "İçerik yükleme hatası.",
	"%lb-img-err": "İmaj yükleme hatası.",
	/* Charts widget */
	"%table-mention": "Tablo",
	"%table-following": "Grafik. Detaylar takip eden tablodadır.",
	/* Session timeout */
	"%st-to-msg-bgn": "Oturumunuz #min# dk #sec# sn otomatik olarak sona erecek.",
	"%st-to-msg-end": "Oturum uzatmak için \"oturum devam\" seçin.",
	"%st-msgbx-ttl": "Oturum zaman aşımı uyarısı",
	"%st-alrdy-to-msg": "Üzgünüz oturumu zaten doldu. Lütfen tekrar giriş yapın.",
	"%st-btn-cont": "oturumu devam",
	"%st-btn-end": "Şimdi oturumu bitirmek",
	/* Toggle details */
	"%td-toggle": "Tüm geçiş",
	"%td-open": "Hepsini aç",
	"%td-close": "Hepsini kapa",
	"%td-ttl-open": "Içeriğin tüm bölümleri aç",
	"%td-ttl-close": "Içeriğin tüm bölümleri aç",
	/* Table enhancement */
	"%sortAsc": ": sıralama Artan için etkinleştirmek",
	"%sortDesc": ": sıralama azalan için etkinleştirmek",
	"%emptyTbl": "Resim verileri tablosu içinde mevcut olan",
	"%infoEntr": "_TOTAL_ girdi _END_ ile _START_ arası gösteriliyor",
	"%infoEmpty": "0 girdi 0 ile 0 arası gösteriliyor",
	"%infoFilt": "(_MAX_ toplam girişler filtrelenir)",
	"%info1000": ",",
	"%lenMenu": "_MENU_ girdileri göster",
	/* Geomap */
	"%geo-mapcontrol": "Harita kontrol",
	"%geo-zoomin": "Yakınlaştır",
	"%geo-zoomout": "Uzaklaştır",
	"%geo-zoomworld": "Ölçüde haritaya zoom",
	"%geo-zoomfeature": "Eleman yakınlaştırma",
	"%geo-scaleline": "Harita ölçeği",
	"%geo-mouseposition": "Fare imleci enlem ve boylam",
	"%geo-ariamap": "Harita nesne. Harita özellikleri açıklamaları aşağıdaki tabloda yer almaktadır.",
	"%geo-accessibilize": "<strong>Klavye kullanıcıları:</strong> harita odakta olduğunda, harita ve yakınlaştırmak için artı ve eksi tuşları kaydırmak için ok tuşlarını kullanın. Harita ölçüde yakınlaştırılmış zaman ok tuşları Haritayı kaydırmak olmaz.",
	"%geo-accessibilizetitle": "Talimatlar: Harita navigasyon",
	"%geo-togglelayer": "Katmanı ekran değişikliği",
	"%geo-hiddenlayer": "Bu katman şu anda gizli olduğu.",
	"%geo-basemapurl": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"%geo-basemaptitle": "BaseMaps_CBMT3978",
	"%geo-basemapurltxt": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"%geo-attributionlink": "http://geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"%geo-attributiontitle": "GeoGratis - Kanada temel harita (İngilizce veya Fransızca sadece)",
	"%geo-select": "Seçmek",
	"%geo-labelselect": "Harita üzerinde öğe seçmek için kontrol edin",
	/* Disable/enable WET plugins and polyfills */
	"%wb-disable": "Basit HTML sürümü",
	"%wb-enable": "Standart sürüm",
	/* Template */
	"%tmpl-signin": "Giriş Yapın"
};

window.i18nObj = ind;

})( window );
