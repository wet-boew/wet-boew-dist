/*! Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW) wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 - v4.0.0-a1-development - 2013-11-10
*/
/*
 * Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 */
/*
----- Thai dictionary (il8n) ---
 */
( function( window ) {
"use strict";
/* main index */
var ind = {
	"%lang-code": "th",
	"%lang-en": "Thai",
	"%lang-fr": "thaï",
	"%lang-nat": "ภาษาไทย",
	"%all": "ทั้งหมด",
	"%home": "บ้าน",
	"%main-page": "หน้าหลัก",
	"%tphp": "ด้านบนของหน้า",
	"%you-are-in": "คุณกำลังอยู่ใน",
	"%welcome-to": "ยินดีต้อนรับสู่",
	"%load": "โหลด ...",
	"%process": "การประมวลผล ...",
	"%srch": "ค้นหา",
	"%srch-terms": "การค้นหาสำหรับคำ:",
	"%no-match": "ไม่มีการแข่งขันพบ",
	"%matches": {
		"mixin": "[MIXIN] พบว่าตรงกัน"
	},
	"%menu": "เมนู",
	"%settings": "การตั้งค่า",
	"%langs": "ภาษา",
	"%about": "เกี่ยวกับ",
	"%curr": "(ปัจจุบัน)",
	"%hide": "ปิดบัง",
	"%err": "ความผิดพลาด",
	"%colon": ":",
	"%hyphen": "-",
	"%full-stop": ".",
	"%comma-space": ", ",
	"%space": "&#173;",
	"%start": "เริ่มต้น",
	"%stop": "หยุด",
	"%back": "กลับ",
	"%cancel": "ยกเลิก",
	"%new-win": " (เปิดในหน้าต่างใหม่)",
	"%min-ago": "นาทีที่ผ่านมา",
	"%coup-mins": "ไม่กี่นาทีที่ผ่านมา",
	"%mins-ago": {
		"mixin": "[MIXIN] นาทีที่ผ่านมา"
	},
	"%hour-ago": "ชั่วโมงที่ผ่านมา",
	"%hours-ago": {
		"mixin": "[MIXIN] ชั่วโมงที่ผ่านมา"
	},
	"%days-ago": {
		"mixin": "[MIXIN] วันที่ผ่านมา"
	},
	"%yesterday": "เมื่อวาน",

	"%nxt": "ต่อไป",
	"%nxt-r": "ต่อไป (ปุ่มลูกศรขวา)",
	"%prv": "ก่อน",
	"%prv-l": "ก่อน (คีย์ลูกศรซ้าย)",
	"%first": "แรก",
	"%last": "ล่าสุด",
	"%close-esc": "ปิด (คีย์หนี)",
	"%show": "แสดง",

	/* Archived Web page template */
	"%arch-pg": "เวบเพจนี้ได้ถูกเก็บบนเว็บ.",
	/* Menu bar */
	"%sm-hlp": "(เปิดเมนูย่อยที่มีใส่กุญแจและใกล้ชิดกับคีย์หนี)",
	/* Tabbed interface */
	"%tab-rot": {
		"off": "หยุดหมุนแท็บ",
		"on": "เริ่มหมุนแท็บ"
	},
	"%tab-list": "รายการแท็บ",
	"%tab-pnl-end1": "ในตอนท้ายของแผงแท็บนี้",
	"%tab-pnl-end2": "กลับไปที่รายการแท็บ",
	"%tab-pnl-end3": "หรือดำเนินการต่อในส่วนที่เหลือของหน้า.",
	/* Multimedia player */
	"%play": "เล่น",
	"%pause": "หยุด",
	"%open": "เปิด",
	"%close": "ปิด",
	"%rew": "ม้วนกลับ",
	"%ffwd": "ข้างหน้าอย่างรวดเร็ว",
	"%mute": {
		"on": "ปิด",
		"off": "เปิดเสียง"
	},
	"%cc": {
		"off": "ซ่อนปิด captioning",
		"on": "แสดงปิด captioning"
	},
	"%cc-err": "ข้อผิดพลาดคำอธิบายปิดโหลด",
	"%adesc": {
		"on": "เปิดใช้งานคำอธิบายเสียง",
		"off": "ปิดการใช้งานคำอธิบายเสียง"
	},
	"%prog-bar": "ใช้ลูกศรซ้ายและปุ่มลูกศรขวาเพื่อเลื่อนและย้อนความคืบหน้าของสื่อที่",
	"%no-video": "เบราว์เซอร์ของคุณไม่ปรากฏว่ามีความสามารถในการเล่นวิดีโอนี้โปรดดาวน์โหลดวิดีโอด้านล่าง",
	"%pos": "ตำแหน่งปัจจุบัน:",
	"%perc": "ร้อยละที่เล่นได้:",
	"%dur": "รวมเวลา:",
	"%buff": "บัฟเฟอร์:",
	/* Share widget */
	"%fav": "โปรด",
	"%email": "อีเมล์",
	"%shr-txt": "ส่งหน้านี้ให้",
	"%shr-hnt": "ด้วย {s} ",
	"%shr-email-sub": "หน้าที่น่าสนใจ",
	"%shr-email-bd": "ฉันคิดว่าคุณอาจพบหน้านี้ที่น่าสนใจ:\n{t} ({u})",
	"%shr-fav-ttl": "(บุ๊คมาร์คหน้านี้)",
	"%shr-man": "กรุณาปิดกล่องโต้ตอบนี้และกดปุ่ม Ctrl-D เพื่อบุ๊คมาร์คหน้านี้.",
	"%shr-all": "แสดงทั้งหมด ({n})",
	"%shr-all-ttl": "เว็บไซต์บุ๊คมาร์คทั้งหมด",
	"%shr-disc": "รับรองของผลิตภัณฑ์หรือบริการใด ๆ จะไม่มีการแสดงหรือโดยนัย.",
	/* Form validation */
	"%frm-nosubmit": "รูปแบบไม่สามารถส่งเพราะ ",
	"%errs-fnd": " พบข้อผิดพลาด.",
	"%err-fnd": " ข้อผิดพลาดที่พบ.",
	/* Date picker */
	"%date-hide": "ซ่อนปฏิทิน",
	"%date-show": "เลือกวันที่จากปฏิทินสำหรับเขต",
	"%date-sel": "เลือก",
	/* Calendar */
	"%days": ["วันอาทิตย์", "วันจันทร์", "วันอังคาร", "วันพุธ", "วันพฤหัสบดี", "วันศุกร์", "วันเสาร์"],
	"%mnths": ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"],
	"%cal": "ปฏิทิน",
	"%currDay": "(วันที่ปัจจุบัน)",
	"%cal-goToLnk": "ไป<span class=\"wb-inv\">เดือนของปี</span>",
	"%cal-goToTtl": "ไปเดือนของปี",
	"%cal-goToMnth": "เดือน:",
	"%cal-goToYr": "ปี:",
	"%cal-goToBtn": "ไป",
	"%prvMnth": "เดือนก่อน: ",
	"%nxtMnth": "เดือนถัดไป: ",
	/* Slideout */
	"%show-toc": "แสดงตารางของเนื้อหา",
	"%hide-toc": "ซ่อนตารางของเนื้อหา",
	"%toc": "สารบัญ",
	/* Lightbox */
	"%lb-curr": "%curr% รายการจาก %total%",
	"%lb-xhr-err": "เนื้อหานี้ไม่สามารถโหลด.",
	"%lb-img-err": "ภาพนี้ไม่สามารถโหลด.",
	/* Charts widget */
	"%table-mention": "ตาราง",
	"%table-following": "แผนภูมิ รายละเอียดในตารางต่อไปนี้.",
	/* Session timeout */
	"%st-to-msg-bgn": "เซสชั่นของคุณจะหมดอายุโดยอัตโนมัติใน #min# นาที #sec# วินาที.ที่จะขยายเซสชั่นของคุณ",
	"%st-to-msg-end": "เลือก \"Continue เซสชั่น\" ",
	"%st-msgbx-ttl": "เตือนหมดเวลา",
	"%st-alrdy-to-msg": "ขออภัยเซสชันของคุณหมดอายุแล้ว กรุณาเข้าสู่ระบบอีกครั้ง.",
	"%st-btn-cont": "ดำเนินการต่อเซสชั่น",
	"%st-btn-end": "จบเซสชั่นในขณะนี้",
	/* Toggle details */
	"%td-toggle": "สลับทั้งหมด",
	"%td-open": "ขยายทั้งหมด",
	"%td-close": "ย่อทั้งหมด",
	"%td-ttl-open": "ขยายส่วนทั้งหมดของเนื้อหา",
	"%td-ttl-close": "ยุบทุกส่วนของเนื้อหา",
	/* Table enhancement */
	"%sortAsc": ": เปิดใช้งานสำหรับการจัดเรียงจากน้อยไปมาก",
	"%sortDesc": ": เปิดใช้งานสำหรับการจัดเรียงจากมากไปน้อย",
	"%emptyTbl": "ไม่มีข้อมูลในตาราง",
	"%infoEntr": "แสดง _START_-_END_ จาก _TOTAL_ รายการ",
	"%infoEmpty": "แสดง 0-0 จาก 0 รายการ",
	"%infoFilt": "(กรองจาก _MAX_ รายการทั้งหมด)",
	"%info1000": ",",
	"%lenMenu": "แสดงรายการ _MENU_",
	/* Geomap */
	"%geo-mapcontrol": "การควบคุมแผนที่",
	"%geo-zoomin": "ขยาย",
	"%geo-zoomout": "ย่อ",
	"%geo-zoomworld": "การซูมที่ต้องการ map ขอบเขต",
	"%geo-zoomfeature": "ซูมไปที่องค์ประกอบ",
	"%geo-scaleline": "มาตราส่วนแผนที่",
	"%geo-mouseposition": "ละติจูดและลองจิจูดของเคอร์เซอร์ของเมาส์",
	"%geo-ariamap": "วัตถุแผนที่ คำอธิบายของคุณลักษณะแผนที่อยู่ในตารางด้านล่าง.",
	"%geo-accessibilize": "<strong>ผู้ใช้แป้นพิมพ์:</strong> เมื่อแผนที่จะอยู่ในโฟกัสใช้ปุ่มลูกศรเพื่อเลื่อนแผนที่และคีย์บวกและลบเพื่อซูม ปุ่มลูกศรจะไม่เลื่อนแผนที่เมื่อซูมที่มีขอบเขตแผนที่.",
	"%geo-accessibilizetitle": "คำแนะนำ: แผนที่นำร่อง",
	"%geo-togglelayer": "สลับการแสดงผลของชั้น",
	"%geo-hiddenlayer": "ชั้นนี้ซ่อนอยู่.",
	"%geo-basemapurl": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"%geo-basemaptitle": "BaseMaps_CBMT3978",
	"%geo-basemapurltxt": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"%geo-attributionlink": "http://geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"%geo-attributiontitle": "GeoGratis-แคนาดาฐานแผนที่ (ภาษาอังกฤษหรือภาษาฝรั่งเศสเท่านั้น)",
	"%geo-select": "เลือก",
	"%geo-labelselect": "ตรวจสอบเพื่อเลือกองค์ประกอบบนแผนที่",
	/* Disable/enable WET plugins and polyfills */
	"%wb-disable": "เวอร์ชันพื้นฐานของ HTM​​L",
	"%wb-enable": "รุ่นมาตรฐาน",
	/* Template */
	"%tmpl-signin": "เข้าสู่ระบบ"
};

window.i18nObj = ind;

})( window );
