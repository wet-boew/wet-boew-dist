/*! Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW) wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 - v4.0.0-a1-development - 2013-11-07
*/
/*
 * Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 */
/*
----- Ukrainian dictionary (il8n) ---
 */
( function( window ) {
"use strict";
/* main index */
var ind = {
	"%lang-code": "uk",
	"%lang-en": "Ukrainian",
	"%lang-fr": "ukrainien",
	"%lang-nat": "Українська мова",
	"%all": "Все",
	"%home": "На головну",
	"%main-page": "Головна",
	"%tphp": "На початок сторінки",
	"%you-are-in": "Ви на/в",
	"%welcome-to": "Вітаємо на/в",
	"%load": "Завантаження ...",
	"%process": "оброблено ...",
	"%srch": "Пошук",
	"%srch-terms": "Пошук термінів",
	"%no-match": "Нічого не знайдено",
	"%matches": {
		"mixin": "[MIXIN] знайдено"
	},
	"%menu": "Меню",
	"%settings": "Налаштування",
	"%langs": "Мови",
	"%about": "Про",
	"%curr": "(поточна)",
	"%hide": "Сховати",
	"%err": "Помилка",
	"%colon": ":",
	"%hyphen": " - ",
	"%full-stop": ".",
	"%comma-space": ",",
	"%space": "&#32;",
	"%start": "Старт",
	"%stop": "Стоп",
	"%back": "Повернутися",
	"%cancel": "Відміна",
	"%new-win": " (відкриється у новому вікні)",
	"%min-ago": "хвилину тому",
	"%coup-mins": "декілька хвилин тому",
	"%mins-ago": {
		"mixin": "[MIXIN] хвилин тому"
	},
	"%hour-ago": "годину тому",
	"%hours-ago": {
		"mixin": "[MIXIN] годин тому"
	},
	"%days-ago": {
		"mixin": "[MIXIN] днів тому"
	},
	"%yesterday": "вчора",

	"%nxt": "Наступний",
	"%nxt-r": "Наступний (клавішею стрілка вправо)",
	"%prv": "Попередній",
	"%prv-l": "Попередній (клавішею ліва стрілка)",
	"%first": "Перший",
	"%last": "Oстанній",
	"%close-esc": "Закрити (клавішею «escape»)",
	"%show": "Показати",

	/* Archived Web page template */
	"%arch-pg": "Цю веб-сторінку було направлено до веб-архіву.",
	/* Menu bar */
	"%sm-hlp": "(відкрийте підменю клавішею «enter» та закрийте клавішею «escape»)",
	/* Tabbed interface */
	"%tab-rot": {
		"off": "Зупинити ротацію вкладки",
		"on": "Почати ротацію вкладки"
	},
	"%tab-list": "Вкладка списку",
	"%tab-pnl-end1": "Кінець  вкладці панелі.",
	"%tab-pnl-end2": "Повернутися на вкладку списку",
	"%tab-pnl-end3": "або продовжити до кінця сторінки.",
	/* Multimedia player */
	"%play": "Програти",
	"%pause": "Пауза",
	"%open": "Відкрити",
	"%close": "Закрити",
	"%rew": "На початок",
	"%ffwd": "Швидке перемотування вперед",
	"%mute": {
		"on": "Відключити звук",
		"off": "Включити звук"
	},
	"%cc": {
		"off": "Сховати субтитри",
		"on": "Показати субтитри"
	},
	"%cc-err": "Помилка завантаження субтитрів",
	"%adesc": {
		"on": "Включитиаудіо деталі",
		"off": "Відключити аудіо деталі"
	},
	"%prog-bar": "використовуйте клавіші лівої та правої стрілок для перемотування вперед або назад",
	"%no-video": "Можливо ваш браузер не може програти це відео, будь ласка, завантажте відео нижче",
	"%pos": "Поточне положення:",
	"%perc": "Відтворення у відсотках:",
	"%dur": "Загальний час:",
	"%buff": "Завантажено у буфер обміну:",
	/* Share widget */
	"%fav": "Улюблене",
	"%email": "Електронна пошта",
	"%shr-txt": "Поділитися цією сторінкою",
	"%shr-hnt": "з {s}",
	"%shr-email-sub": "Цікава сторінка",
	"%shr-email-bd": "Гадаємо, що ви зацікавитеся цією сторінкою:\n{t} ({u})",
	"%shr-fav-ttl": "(закладку на цій сторінці)",
	"%shr-man": "Будь ласка, закрийте це вікно та натисніть Ctrl-D щоб додати цю сторінку.",
	"%shr-all": "Показати все ({п})",
	"%shr-all-ttl": "Всі додані сайти",
	"%shr-disc": "Не мається на увазі схвалення або просування будь-яких продукції або послуг",
	/* Form validation */
	"%frm-nosubmit": "Форма не подається через те, що",
	"%errs-fnd": "знайдено помилки.",
	"%err-fnd": "знайдено помилку.",
	/* Date picker */
	"%date-hide": "Сховати календар",
	"%date-show": "Оберіть дату в календарі:",
	"%date-sel": "Вибрано",
	/* Calendar */
	"%days": ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П’ятниця", "Субота"],
	"%mnths": ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"],
	"%cal": "Календар",
	"%currDay": "(Поточний день)",
	"%cal-goToLnk": "Перейти до<span class=\"wb-inv\"> місяця року</span>",
	"%cal-goToTtl": "Перейти до місяця року",
	"%cal-goToMnth": "Місяц:",
	"%cal-goToYr": "Рік:",
	"%cal-goToBtn": "Перейти",
	"%prvMnth": "Попередній місяць: ",
	"%nxtMnth": "Наступний місяць: ",
	/* Slideout */
	"%show-toc": "Показати зміст",
	"%hide-toc": "Сховати зміст",
	"%toc": "зміст",
	/* Lightbox */
	"%lb-curr": "Знайдено %curr% із %total%",
	"%lb-xhr-err": "Цей зміст не завантажується.",
	"%lb-img-err": "Це зображення не завантажується.",
	/* Charts widget */
	"%table-mention": "Таблиця",
	"%table-following": "Графік. Див. деталі в таблиці.",
	/* Session timeout */
	"%st-to-msg-bgn": "Ваш сеанс закінчиться автоматично в #min# хв #sec# сек .",
	"%st-to-msg-end": "Виберіть \"Продовжити сеанс\" продовжити сесію.",
	"%st-msgbx-ttl": "Попередження про закінчення сесії",
	"%st-alrdy-to-msg": "Вибачте, сесія вже закінчилася. Будь ласка, увійдіть знову.",
	"%st-btn-cont": "продовжити сеанс",
	"%st-btn-end": "Завершити сеанс зараз",
	/* Toggle details */
	"%td-toggle": "Згорнути все",
	"%td-open": "Розгорнути все",
	"%td-close": "Згорнути все",
	"%td-ttl-open": "Розгорнути всі розділи змісту",
	"%td-ttl-close": "Згорнути всі розділи змісту",
	/* Table enhancement */
	"%sortAsc": ": активація для сортування за зростанням ",
	"%sortDesc": ": активація для сортування за спаданням",
	"%emptyTbl": "Немає  даних у таблиці",
	"%infoEntr": "Показую з _START_ по _END_ з _TOTAL_ записів",
	"%infoEmpty": "Показую з 0 по 0 з 0 записів",
	"%infoFilt": "(Фільтрується від _MAX_ Всього записів)",
	"%info1000": ",",
	"%lenMenu": "Показати _MENU_ записів",
	/* Geomap */
	"%geo-mapcontrol": "Управління картою",
	"%geo-zoomin": "Збільшити",
	"%geo-zoomout": "Зменшити",
	"%geo-zoomworld": "Збільшити до повного розміру",
	"%geo-zoomfeature": "Збільшення до елементу",
	"%geo-scaleline": "масштаб карти",
	"%geo-mouseposition": "Широту і довготу курсору миші",
	"%geo-ariamap": "Карта об'єктів. Опис функцій карти наведені в таблиці нижче.",
	"%geo-accessibilize": "<strong>Клавіатура користувачів:</strong> Коли карта знаходиться у фокусі, використовуйте клавіші зі стрілками для переміщення по карті і клавішами \"плюс\" і \"мінус\", щоб збільшити. Клавіши зі стрілками не переміщатимуть карту при її збільшенні у повній розмір. ",
	"%geo-accessibilizetitle": "Інструкція: Карта навігації",
	"%geo-togglelayer": "Включити показ шару",
	"%geo-hiddenlayer": "Цей шар прихований!",
	"%geo-basemapurl": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"%geo-basemaptitle": "BaseMaps_CBMT3978",
	"%geo-basemapurltxt": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"%geo-attributionlink": "http://geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"%geo-attributiontitle": "GeoGratis - Канада базової карти (англійською або французькою мовою)",
	"%geo-select": "Вибирати",
	"%geo-labelselect": "Для обрання елементу на карті, відмітьте галочкою ",
	/* Disable/enable WET plugins and polyfills */
	"%wb-disable": "Базова версія HTML",
	"%wb-enable": "Стандартна версія",
	/* Template */
	"%tmpl-signin": "Увійти"
};

window.i18nObj = ind;

})( window );
