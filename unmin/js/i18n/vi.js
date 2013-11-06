/*! Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW) wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 - v4.0.0-a1-development - 2013-11-06
*/
/*
 * Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 */
/*
----- Vietnamese dictionary (il8n) ---
 */
( function( window ) {
"use strict";
/* main index */
var ind = {
	"%lang-code": "vi",
	"%lang-en": "Vietnamese",
	"%lang-fr": "vietnamien",
	"%lang-nat": "Tiếng Việt",
	"%all": "Tất cả",
	"%home": "Quê hương",
	"%main-page": "Trang chính",
	"%tphp": "Trở về đầu trang",
	"%you-are-in": "Bạn đang ở trong",
	"%welcome-to": "Chào mừng bạn đến với",
	"%load": "tải ...",
	"%process": "xử lý ...",
	"%srch": "Tìm kiếm",
	"%srch-terms": "Tìm kiếm với các điều kiện:",
	"%no-match": "Không hợp được tìm thấy",
	"%matches": {
		"mixin": "[MIXIN] trận được tìm thấy"
	},
	"%menu": "Thực đơn",
	"%settings": "Cài đặt",
	"%langs": "Ngôn ngữ",
	"%about": "Giới thiệu",
	"%curr": "(hiện tại)",
	"%hide": "Che",
	"%err": "Lôi",
	"%colon": ":",
	"%hyphen": " - ",
	"%full-stop": ".",
	"%comma-space": ", ",
	"%space": "&#32;",
	"%start": "Bắt đầu",
	"%stop": "Thôi",
	"%back": "Lưng",
	"%cancel": "Hủy bỏ",
	"%new-win": " (Mở trong một cửa sổ mới)",
	"%min-ago": "một phút trước",
	"%coup-mins": "vài phút trước đây",
	"%mins-ago": {
		"mixin": "[MIXIN] phút trước"
	},
	"%hour-ago": "một giờ trước đây",
	"%hours-ago": {
		"mixin": "[MIXIN] giờ trước"
	},
	"%days-ago": {
		"mixin": "[MIXIN] ngày trước"
	},
	"%yesterday": "hôm qua",

	"%nxt": "Tiếp theo",
	"%nxt-r": "Tiếp theo (phím mũi tên bên phải)",
	"%prv": "Trang trước",
	"%prv-l": "Trang trước (phím mũi tên trái)",
	"%first": "Đầu tiên",
	"%last": "Cuối cùng",
	"%close-esc": "Đóng (phím thoát)",
	"%show": "Hiện",

	/* Archived Web page template */
	"%arch-pg": "Trang web này đã được lưu trữ trên Web.",
	/* Menu bar */
	"%sm-hlp": "(mở menu con vào quan trọng và gần gũi với phím thoát)",
	/* Tabbed interface */
	"%tab-rot": {
		"off": "Ngừng xoay tab",
		"on": "Bắt đầu luân chuyển tab"
	},
	"%tab-list": "Tab danh sách",
	"%tab-pnl-end1": "Kết thúc của bảng điều khiển tab.",
	"%tab-pnl-end2": "Quay trở lại danh sách tab",
	"%tab-pnl-end3": "hoặc tiếp tục với phần còn lại của trang.",
	/* Multimedia player */
	"%play": "Chơi",
	"%pause": "Tạm dừng",
	"%open": "Mở",
	"%close": "Đóng",
	"%rew": "Tua lại",
	"%ffwd": "Nhanh chóng chuyển tiếp",
	"%mute": {
		"on": "Tắt",
		"off": "Bật tiếng"
	},
	"%cc": {
		"off": "Hide Đóng cửa phụ đề",
		"on": "Hiện Đóng cửa phụ đề"
	},
	"%cc-err": "Lỗi khi đang nạp chú thích đóng",
	"%adesc": {
		"on": "Kích hoạt tính năng mô tả âm thanh",
		"off": "Vô hiệu hoá mô tả âm thanh"
	},
	"%prog-bar": "sử dụng mũi tên trái và phím mũi tên bên phải để thăng tiến và tua lại sự tiến bộ của các phương tiện truyền thông",
	"%no-video": "Trình duyệt của bạn không xuất hiện có khả năng để chơi video này, xin vui lòng tải về các đoạn video dưới đây",
	"%pos": "Chức vụ hiện tại:",
	"%perc": "Playback tỷ lệ phần trăm:",
	"%dur": "Tổng thời gian:",
	"%buff": "Buffered:",
	/* Share widget */
	"%fav": "Được yêu thích nhất",
	"%email": "Email",
	"%shr-txt": "Chia sẻ trang này",
	"%shr-hnt": " với {s} ",
	"%shr-email-sub": "Thú vị trang",
	"%shr-email-bd": "Tôi nghĩ rằng bạn có thể tìm thấy trang này thú vị:\n{t} ({u})",
	"%shr-fav-ttl": "(đánh dấu trang này)",
	"%shr-man": "Vui lòng đóng hộp thoại này và nhấn Ctrl-D để đánh dấu trang này.",
	"%shr-all": "Hiển thị tất cả ({n})",
	"%shr-all-ttl": "Tất cả dấu các trang web",
	"%shr-disc": "Không có chứng thực của bất kỳ sản phẩm hoặc dịch vụ được thể hiện hay ngụ ý.",
	/* Form validation */
	"%frm-nosubmit": "Dạng không thể được nộp bởi vì ",
	"%errs-fnd": " lỗi đã được tìm thấy.",
	"%err-fnd": " lỗi đã được tìm thấy.",
	/* Date picker */
	"%date-hide": "Ẩn lịch",
	"%date-show": "Chọn một ngày từ lịch cho lĩnh vực:",
	"%date-sel": "Chọn",
	/* Calendar */
	"%days": ["Chủ Nhật", "Thứ Hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"],
	"%mnths": ["Tháng một", "Tháng Hai", "Biên giới", "Tháng Tư", "May", "Tháng Sáu", "Tháng Bảy", "Oai phong", "Tháng Chín", "Tháng Mười", "Tháng mười một", "Tháng mười hai"],
	"%cal": "Lịch",
	"%currDay": "(Ngày hiện tại)",
	"%cal-goToLnk": "Tới tháng trong năm",
	"%cal-goToTtl": "Tới tháng trong năm",
	"%cal-goToMnth": "Tháng:",
	"%cal-goToYr": "Năm:",
	"%cal-goToBtn": "Đi",
	"%prvMnth": "Tháng trước: ",
	"%nxtMnth": "Tháng sau: ",
	/* Slideout */
	"%show-toc": "Hiển thị mục lục",
	"%hide-toc": "Ẩn bảng nội dung",
	"%toc": "bảng nội dung",
	/* Lightbox */
	"%lb-curr": "Khoản %curr% của %total%",
	"%lb-xhr-err": "Nội dung này không thể tải.",
	"%lb-img-err": "Hình ảnh này không tải.",
	/* Charts widget */
	"%table-mention": "Bảng",
	"%table-following": "Chart. Thông tin chi tiết trong bảng dưới đây.",
	/* Session timeout */
	"%st-to-msg-bgn": "Phiên của bạn sẽ tự động hết hạn trong  #min# phút #sec# giây.",
	"%st-to-msg-end": "Chọn \"Tiếp tục phiên\" mở rộng phiên của bạn.",
	"%st-msgbx-ttl": "Cảnh báo phiên thời gian chờ",
	"%st-alrdy-to-msg": "Xin lỗi phiên làm việc của bạn đã hết hạn. Bạn có thể đăng nhập lại.",
	"%st-btn-cont": "tiếp tục phiên",
	"%st-btn-end": "Kết thúc phiên tại",
	/* Toggle details */
	"%td-toggle": "Chuyển đổi tất cả",
	"%td-open": "Mở rộng tất cả",
	"%td-close": "Thu gọn tất cả",
	"%td-ttl-open": "Mở rộng tất cả các phần của nội dung",
	"%td-ttl-close": "Thu gọn tất cả các phần của nội dung",
	/* Table enhancement */
	"%sortAsc": ": kích hoạt cho loại tăng dần",
	"%sortDesc": ": kích hoạt cho loại giảm dần",
	"%emptyTbl": "Không có dữ liệu có sẵn trong bảng",
	"%infoEntr": "Hiển thị từ _START_ đến _END_ của _TOTAL_ mục",
	"%infoEmpty": "Hiển thị từ 0 đến 0 của 0 mục",
	"%infoFilt": "(lọc từ tổng số _MAX_ mục)",
	"%info1000": ",",
	"%lenMenu": "Hiển thị _MENU_ mục",
	/* Geomap */
	"%geo-mapcontrol": "Điều khiển bản đồ",
	"%geo-zoomin": "Phóng to",
	"%geo-zoomout": "Thu nhỏ",
	"%geo-zoomworld": "Phóng to bản đồ mức độ",
	"%geo-zoomfeature": "Phóng to đến yếu tố",
	"%geo-scaleline": "tỷ lệ bản đồ",
	"%geo-mouseposition": "Vĩ độ và kinh độ của con trỏ chuột",
	"%geo-ariamap": "Bản đồ đối tượng. Những mô tả của các tính năng bản đồ trong bảng dưới đây.",
	"%geo-accessibilize": "Người sử dụng bàn phím: Khi bản đồ là tập trung, sử dụng các phím mũi tên để xoay bản đồ và các phím dấu cộng và trừ để phóng to. Các phím mũi tên sẽ không xoay bản đồ thu nhỏ đến mức độ bản đồ.",
	"%geo-accessibilizetitle": "Hướng dẫn: Bản đồ Navigation",
	"%geo-togglelayer": "Chuyển đổi các màn hình hiển thị của lớp",
	"%geo-hiddenlayer": "Lớp này hiện đang ẩn!",
	"%geo-basemapurl": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"%geo-basemaptitle": "BaseMaps_CBMT3978",
	"%geo-basemapurltxt": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"%geo-attributionlink": "http://geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"%geo-attributiontitle": "GeoGratis - Canada bản đồ cơ bản (tiếng Anh hoặc tiếng Pháp chỉ)",
	"%geo-select": "Chọn",
	"%geo-labelselect": "Kiểm tra để chọn phần tử trên bản đồ",
	/* Disable/enable WET plugins and polyfills */
	"%wb-disable": "Phiên bản HTML cơ bản",
	"%wb-enable": "Phiên bản tiêu chuẩn",
	/* Template */
	"%tmpl-signin": "Đăng nhập"
};

window.i18nObj = ind;

})( window );
