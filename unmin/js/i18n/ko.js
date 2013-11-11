/*! Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW) wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 - v4.0.0-a1-development - 2013-11-11
*/
/*
 * Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 */
/*
----- Korean dictionary (il8n) ---
 */
( function( window ) {
"use strict";
/* main index */
var ind = {
	"%lang-code": "ko",
	"%lang-en": "Korean",
	"%lang-fr": "coréen",
	"%lang-nat": "한국어",
	"%all": "모든",
	"%home": "집",
	"%main-page": "메인 페이지",
	"%tphp": "맨 위로",
	"%you-are-in": "당신은에",
	"%welcome-to": "에 오신 것을 환영합니다:",
	"%load": "로드 중 ...",
	"%process": "처리 중 ...",
	"%srch": "검색",
	"%srch-terms": "용어 검색 :",
	"%no-match": "일치하는 결과가 없습니다",
	"%matches": {
		"mixin": "[MIXIN] 일치하는 검색 결과가"
	},
	"%menu": "메뉴",
	"%settings": "설정",
	"%langs": "언어",
	"%about": "약",
	"%curr": "(현재)",
	"%hide": "숨기기",
	"%err": "오류",
	"%colon": ":",
	"%hyphen": " - ",
	"%full-stop": ".",
	"%comma-space": ", ",
	"%space": "&#32;",
	"%start": "출발",
	"%stop": "정지",
	"%back": "뒤로",
	"%cancel": "취소",
	"%new-win": " (새 창에서 열립니다)",
	"%min-ago": "분 전",
	"%coup-mins": "분 전에 몇",
	"%mins-ago": {
		"mixin": "[MIXIN] 분전"
	},
	"%hour-ago": "한 시간 전에",
	"%hours-ago": {
		"mixin": "[MIXIN]시간 전"
	},
	"%days-ago": {
		"mixin": "[MIXIN] 일 전"
	},
	"%yesterday": "어제",

	"%nxt": "다음",
	"%nxt-r": "다음 (오른쪽 화살표 키)",
	"%prv": "이전",
	"%prv-l": "이전 (왼쪽 화살표 키)",
	"%first": "처음으로",
	"%last": "마지막",
	"%close-esc": "닫다 (Esc 키와)",
	"%show": "표시",

	/* Archived Web page template */
	"%arch-pg": "이 웹 페이지는 웹에 보관되었습니다.",
	/* Menu bar */
	"%sm-hlp": "(키와 Esc 키와 밀접한 입력으로 하위 메뉴를 엽니 다)",
	/* Tabbed interface */
	"%tab-rot": {
		"off": "탭 회전을 중지",
		"on": "탭 회전을 시작"
	},
	"%tab-list": "탭 목록",
	"%tab-pnl-end1": "이 탭 패널의 끝.",
	"%tab-pnl-end2": "탭 목록으로 돌아 가기",
	"%tab-pnl-end3": "또는 페이지의 나머지를 계속합니다.",
	/* Multimedia player */
	"%play": "놀이",
	"%pause": "중지",
	"%open": "열기",
	"%close": "가까운",
	"%rew": "되감기",
	"%ffwd": "빠른 앞으로",
	"%mute": {
		"on": "음소거",
		"off": "음소거 해제"
	},
	"%cc": {
		"off": "숨기기 캡션 휴무",
		"on": "쇼는 캡션 휴무"
	},
	"%cc-err": "로드하는 중 오류가 발생 자막",
	"%adesc": {
		"on": "오디오 설명을 사용",
		"off": "오디오 설명을 해제합니다"
	},
	"%prog-bar": "미디어의 진행 상황을 향상하고 되감기 할 왼쪽 화살표 및 오른쪽 화살표 키를 사용하여",
	"%no-video": "귀하의 브라우저가 기능이 동영상을 재생해야 할 표시되지 않습니다 아래의 동영상을 다운로드하십시오",
	"%pos": "현재 위치 :",
	"%perc": "재생 비율 :",
	"%dur": "총 시간",
	"%buff": "버퍼",
	/* Share widget */
	"%fav": "누나 찾아서 병원에",
	"%email": "이메일",
	"%shr-txt": "이 페이지를 공유",
	"%shr-hnt": "{s} 로 ",
	"%shr-email-sub": "흥미 페이지",
	"%shr-email-bd": "당신이이 페이지가 재미있을 거라고 생각:\n{t} ({u})",
	"%shr-fav-ttl": "(이 페이지를 즐겨 찾기에)",
	"%shr-man": "이 대화 상자를 닫고이 페이지를 즐겨 찾기에 추가 Ctrl 키를-D를 누르십시오.",
	"%shr-all": "모두 ({n}) 표시",
	"%shr-all-ttl": "모든 북마크 사이트",
	"%shr-disc": "제품이나 서비스의 어떠한 보증을 표현하거나 암시합니다.",
	/* Form validation */
	"%frm-nosubmit": "양식을 제출 할 수 없습니다 때문에 ",
	"%errs-fnd": " 오류가 발견되었습니다.",
	"%err-fnd": " 오류가 발견되었습니다.",
	/* Date picker */
	"%date-hide": "캘린더 숨기기",
	"%date-show": "필드에 달력에서 날짜를 선택:",
	"%date-sel": "선택된",
	/* Calendar */
	"%days": ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
	"%mnths": ["1월", "2월", "행진", "4월", "할 수있다", "6월", "7월", "위엄있는", "9월", "10월", "11월", "12월"],
	"%cal": "달력",
	"%currDay": "(현재 일)",
	"%cal-goToLnk": "<span class=\"wb-inv\">년 개월</span>로 이동",
	"%cal-goToTtl": "년 개월로 이동",
	"%cal-goToMnth": "월:",
	"%cal-goToYr": "년:",
	"%cal-goToBtn": "가다",
	"%prvMnth": "이전 월: ",
	"%nxtMnth": "다음 월: ",
	/* Slideout */
	"%show-toc": "목차보기",
	"%hide-toc": "목차 숨기기",
	"%toc": "차례",
	/* Lightbox */
	"%lb-curr": "%total% 항목 %curr%",
	"%lb-xhr-err": "이 콘텐츠를로드하지 못했습니다.",
	"%lb-img-err": "이 이미지를로드하지 못했습니다.",
	/* Charts widget */
	"%table-mention": "표",
	"%table-following": "차트. 다음 테이블의 세부 사항.",
	/* Session timeout */
	"%st-to-msg-bgn": "세션이 #min# 분 #sec# 초에 자동으로 만료됩니다.",
	"%st-to-msg-end": "선택은 세션을 확장하는 \"세션 계속\".",
	"%st-msgbx-ttl": "세션 시간 초과 경고",
	"%st-alrdy-to-msg": "미안 세션이 이미 만료되었습니다. 다시 로그인 해주십시오.",
	"%st-btn-cont": "세션을 계속",
	"%st-btn-end": "현재 세션을 종료",
	/* Toggle details */
	"%td-toggle": "모두 전환",
	"%td-open": "모두 확장",
	"%td-close": "모두 접기",
	"%td-ttl-open": "의 모든 콘텐츠 섹션을 확장합니다",
	"%td-ttl-close": "의 모든 콘텐츠 섹션을 축소",
	/* Table enhancement */
	"%sortAsc": ": 정렬 오름차순을위한 활성화",
	"%sortDesc": ": 정렬 내림차순에 대한 활성화",
	"%emptyTbl": "데이터가 테이블에 사용할 수 없습니다",
	"%infoEntr": "_TOTAL_ 항목 _END_-_START_보기",
	"%infoEmpty": "0 항목 0-0보기",
	"%infoFilt": "(_MAX_ 총 ​​항목에서 제외)",
	"%info1000": ",",
	"%lenMenu": "_MENU_ 항목을 표시",
	/* Geomap */
	"%geo-mapcontrol": "지도 제어",
	"%geo-zoomin": "확대",
	"%geo-zoomout": "축소",
	"%geo-zoomworld": "범위를 매핑 할 수 확대",
	"%geo-zoomfeature": "요소로 확대",
	"%geo-scaleline": "지도 스케일",
	"%geo-mouseposition": "마우스 커서의 위도와 경도",
	"%geo-ariamap": "지도 개체입니다. 지도 기능의 설명은 아래 표에 나와 있습니다.",
	"%geo-accessibilize": "<strong>키보드 사용자 :</strong>지도 초점이 때,지도와 확대 할 수있는 플러스 (+) 및 마이너스 키를 이동하려면 화살표 키를 사용합니다. 지도 범위 확대 할 때 화살표 키를지도를 이동하지 않습니다.",
	"%geo-accessibilizetitle": "방법 :지도 탐색",
	"%geo-togglelayer": "레이어의 표시를 전환",
	"%geo-hiddenlayer": "이 층은 현재 숨겨져 있습니다!",
	"%geo-basemapurl": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"%geo-basemaptitle": "BaseMaps_CBMT3978",
	"%geo-basemapurltxt": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"%geo-attributionlink": "http://geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"%geo-attributiontitle": "GeoGratis - 캐나다 기본지도 (영어 나 불어 만)",
	"%geo-select": "선택",
	"%geo-labelselect": "지도에서 요소를 선택하려면 선택",
	/* Disable/enable WET plugins and polyfills */
	"%wb-disable": "기본 HTML 버전",
	"%wb-enable": "표준 버전",
	/* Template */
	"%tmpl-signin": "로그인"
};

window.i18nObj = ind;

})( window );