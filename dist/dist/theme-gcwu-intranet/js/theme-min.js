/*!
 *
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 *
 * Version: v3.1.8-development Build: 2014-01-16 04:46 PM EST
 *
 */
(function(c){var b,a;b=(typeof window.wet_boew_theme!=="undefined"&&window.wet_boew_theme!==null)?window.wet_boew_theme:{fn:{}};a={theme:"theme-gcwu-intranet",psnb:null,search:null,bcrumb:null,title:null,sft:null,gcft:null,gridsmenu:null,menu:null,favicon:{href:"images/favicon-mobile.png",rel:"apple-touch-icon",sizes:"57x57 72x72 114x114 144x144 150x150"},init:function(){b.gcnb=pe.header.find("#gcwu-gcnb");b.psnb=pe.header.find("#gcwu-psnb");b.menubar=b.psnb.find(".wet-boew-menubar");b.search=pe.header.find("#gcwu-srchbx");b.bcrumb=pe.header.find("#gcwu-bc");b.title=pe.header.find("#gcwu-title");b.sft=pe.footer.find("#gcwu-sft");b.gcft=pe.footer.find("#gcwu-gcft");b.gridsmenu=pe.main.find(".module-menu-section");var j=pe.menu.navcurrent(b.menubar,b.bcrumb),d=j.parents("div.mb-sm"),i,f,k,g,h,l,e=pe.mobile;if(!pe.svg||pe.svgfix){l=b.sft.length!==0;h=function(n){var o=c("#gcwu-wmms img").get(),m=o.length,p;while(m--){p=o[m];p.src=(n?p.src.replace(".png","-alt.png"):p.src.replace("-alt.png",".png"))}};if(l&&e){window.onbeforeprint=function(){h(true)};window.onafterprint=function(){h(false)}}f=c("#gcwu-wmms-in, #gcwu-sig-in").get();i=f.length;while(i--){k=f[i];g=k.getElementsByTagName("object");if(g.length>0){k.innerHTML=k.innerHTML.replace(/<object[\s\S]*?\/object>/i,g[0].innerHTML)}}if(l&&!e){h(true)}}if(d.length!==0){d.prev().children("a").addClass("nav-current")}if(pe.secnav.length!==0){j=pe.menu.navcurrent(pe.secnav,b.bcrumb);d=j.parents("ul");d.prev().children("a").addClass("nav-current-nocss")}if(b.gridsmenu.length!==0){j=pe.menu.navcurrent(b.gridsmenu,b.bcrumb)}if(b.psnb.length!==0&&b.search.length===0){b.psnb.addClass("mobile-change")}else{if(b.psnb.length===0&&b.search.length!==0){b.search.addClass("mobile-change")}}},mobileview:function(){var z,S="",e,p,ab=pe.dic.get("%settings"),D=pe.dic.get("%hyphen")+pe.dic.get("%main-page"),E,u,f,n,Z,ae="",w='<a data-role="button" data-iconpos="notext"',G=' data-rel="popup" data-position-to="window"',r=w+G,H='<div data-role="popup" data-overlay-theme="a"',K='<div data-role="header"',ad=K+"><h1>",F=' data-theme="c" class="ui-corner-all">',s=K+' class="ui-corner-top"><h1>',h='<div data-role="content" data-theme="c" class="ui-corner-bottom ui-content">',aa=w+' href="javascript:;" data-icon="delete" data-rel="back" class="ui-btn-right">'+pe.dic.get("%close")+"</a>",V=r+' data-icon="back" class="ui-btn-left"',T=">"+pe.dic.get("%back")+"</a>",ac="</div></div>",q='<ul data-role="listview"',A="",O,m,v,t,M,g,d,Y,X,x,o,P,J,k,C=c(document),U,l,B,R,L,W,I,Q,N,y=typeof wet_boew_mobile_view!=="undefined"&&wet_boew_mobile_view.header_fixed;if(b.sft.length!==0){if(b.menubar.length!==0||pe.secnav.length!==0||b.bcrumb.length!==0){e=pe.dic.get("%menu");g=b.menubar.find("ul.mb-menu li");u=(pe.secnav.length!==0?pe.secnav[0].getElementsByTagName("h2")[0]:"");z=H+' id="jqm-wb-mb" class="jqm-wb-mb">'+ad+e+"</h1>"+aa+'</div><div data-role="content" data-inset="true"><nav role="navigation">';if(b.bcrumb.length!==0){J=b.bcrumb[0];O=J.getElementsByTagName("a");if(O.length!==0){U=O[0].href}z+='<section><div id="jqm-mb-location-text">'+J.innerHTML+"</div></section>"}else{z+='<div id="jqm-mb-location-text"></div>'}if(pe.secnav.length!==0){S+="<section><div><h2>"+u.innerHTML+"</h2>"+pe.menu.buildmobile(pe.secnav.find(".wb-sec-def"),3,"b",false,true,"c",true,true)+"</div></section>"}if(b.menubar.length!==0){S+="<section><div><h2>"+b.psnb.children(":header")[0].innerHTML+"</h2>"+pe.menu.buildmobile(g,3,"a",true,true,"c",true,true)+"</div></section>"}z+='<div id="jqm-mb-menu"></div></nav></div></div></div>';ae+=z;b.menu=S;A+=r+' data-icon="bars" href="#jqm-wb-mb">'+e+"</a>"}if(b.search.length!==0){p=pe.dic.get("%search");f=b.search[0];n=f.innerHTML;f=f.getElementsByTagName("input");x=f.length;while(x--){f[x].setAttribute("data-role","none")}Z=H+' id="jqm-wb-search">'+ad+p+"</h1>"+aa+'</div><div data-role="content"><div>'+n.substring(n.indexOf("<form"))+"</div></div></div>";ae+=Z;A+=r+' data-icon="search" href="#jqm-wb-search">'+p+"</a>"}l='<div data-role="header"'+(y?' data-position="fixed"':"")+'><div class="ui-title"><div></div></div><map id="gcwu-mnavbar" data-role="controlgroup" data-type="horizontal" class="ui-btn-right wb-hide">';if(typeof U!=="undefined"){l+=w+' href="'+U+'" data-icon="home">'+pe.dic.get("%home")+"</a>"}else{if(true===false){l+=w+' href="#back-href" data-icon="back">'+pe.dic.get("%back")+"</a>"}}if(A.length!==0){l+=A}l+=r+' href="#popupSettings" data-icon="gear">'+ab+"</a></map></div>";b.gcnb.children("#gcwu-gcnb-in").before(l);b.gcnb.find(".ui-title").append(c("#gcwu-wmms").clone());b.title[0].className+=" ui-bar-b";I=document.getElementById("wb-session");t=b.gcnb.find('li[id*="-lang"]');E=H+' id="popupSettings"'+F;E+=s+ab+"</h1>"+aa+"</div>";E+=h+q+">";if(I!==null){R=I.getElementsByClassName("settings");for(Y=0,x=R.length;Y!==x;Y+=1){L=R[Y].getElementsByTagName("a")[0];E+='<li><a href="'+L.getAttribute("href")+'">'+L.innerHTML+"</a></li>"}W=I.getElementsByClassName("session")[0].getElementsByTagName("a")[0];E+='<li><a href="'+W.getAttribute("href")+'">'+W.innerHTML+"</a></li>"}if(t.length!==0){E+='<li><a href="#popupLanguages"'+G+">"+pe.dic.get("%languages")+"</a></li>"}E+='<li class="ui-corner-bottom"><a href="#popupAbout"'+G+">"+pe.dic.get("%about")+"</a></li>";E+="</ul>"+ac;if(t.length!==0){E+=H+' id="popupLanguages"'+F;E+=s+pe.dic.get("%languages")+"</h1>"+V+' href="#popupSettings"'+T+aa+"</div>";E+=h+q+">";if(t.filter('[id*="-lang-current"]').length===0){E+='<li><a href="javascript:;" class="ui-disabled">'+pe.dic.get("%lang-native")+' <span class="current">'+pe.dic.get("%current")+"</span></a></li>"}P=t.get();x=P.length;Y=x;while(Y--){J=P[Y];m=J.getElementsByTagName("a")[0];E+="<li"+(Y===0?' class="ui-corner-bottom"':"");if(J.id.indexOf("-lang-current")!==-1){E+='><a href="javascript:;" class="ui-disabled">'+J.innerHTML+' <span class="current">'+pe.dic.get("%current")+"</span></a></li>"}else{E+='><a href="'+m.href+'" lang="'+m.getAttribute("lang")+'">'+m.innerHTML+"</a></li>"}}E+="</ul>"+ac}E+=H+' id="popupAbout" data-theme="c" class="ui-corner-all jqm-wb-mb">';E+=s+pe.dic.get("%about")+"</h1>"+V+' href="#popupSettings"'+T+aa+"</div>";E+=h;E+='<div class="site-app-title"><div class="ui-title">'+b.title[0].getElementsByTagName("a")[0].innerHTML+"</div></div>";J=pe.main.find("#gcwu-date-mod").children();if(J.length!==0){d=J[1];if(d.getElementsByTagName("time").length===0){E+='<div class="app-version">'+J[0].innerHTML+" "+d.innerHTML+"</div>"}}E+='<div data-role="controlgroup" data-theme="c"><div data-role="collapsible-set" data-inset="false">';E+=q+">";O=document.getElementById("gcwu-tctr").getElementsByTagName("a");for(Y=0,x=O.length;Y!==x;Y+=1){m=O[Y];E+='<li class="top-level'+(Y===0?" ui-corner-top":"")+'"><a href="'+m.href+'">'+m.innerHTML+"</a></li>"}E+="</ul>";P=b.sft.find(".gcwu-col-head");Q=false;for(Y=0,x=P.length;Y!==x;Y+=1){J=P.eq(Y);m=J.children("a");k=J.find("+ ul, + address ul");d=m.length!==0?m[0].innerHTML:J[0].innerHTML;if(k.length!==0){if(Q){E+="</ul>";Q=false}E+='<div class="wb-nested-menu" data-role="collapsible"><h2>'+d+"</h2>"+q+">";O=k[0].getElementsByTagName("a");for(X=0,o=O.length;X!==o;X+=1){J=O[X];E+='<li><a href="'+J.href+'">'+J.innerHTML+"</a></li>"}if(m.length!==0){E+='<li><a href="'+m.attr("href")+'">'+m.html()+D+"</a></li>"}E+="</ul></div>"}else{if(m.length!==0){if(!Q){E+=q+">";Q=true}E+='<li class="top-level'+(Y===0?" ui-corner-top":"")+'"><a href="'+m.attr("href")+'">'+m.html()+"</a></li>"}}}P=b.gcnb.find("li");x=P.length;if(P.length!==0){P=P.get();if(!Q){E+=q+">";Q=true}for(Y=0;Y!==x;Y+=1){J=P[Y];N=J.id;if(N.indexOf("gcwu-gcnb-lang")===-1){m=J.getElementsByTagName("a");if(m.length!==0){m=m[0];E+='<li><a href="'+m.href+(m.hasAttribute("target")?'" target="'+m.getAttribute("target"):"")+'">'+m.innerHTML+"</a></li>"}}}}if(Q){E+="</ul>"}d=E.lastIndexOf("<li");o=E.indexOf("<li class",d)===d?11:3;E=E.substring(0,d)+'<li class="ui-corner-bottom'+(o===3?'"':" ")+E.substring(d+o)+"</ul></div></div>"+ac;pe.bodydiv.append(ae+E);c(".button-group input, .button-group button, input[type=search]").attr("data-role","none")}else{t=document.getElementById("gcwu-lang");if(t!==null){P=t.getElementsByTagName("li");M='<div data-role="navbar"><ul>';for(Y=0,x=P.length;Y<x;Y+=1){J=P[Y];m=J.getElementsByTagName("a")[0];M+='<li><a href="'+m.href+'"'+(J.hasAttribute("lang")?' lang="'+J.getAttribute("lang")+'"':"")+' data-theme="a">'+m.innerHTML+"</a></li>"}M+="</ul></div>";document.getElementById("gcwu-ef-lang").parentNode.innerHTML=M;t=document.getElementById("gcwu-other-lang");if(t!==null){t.parentNode.removeChild(t)}}d=document.getElementById("gcwu-tc");if(d!==null){P=d.getElementsByTagName("li");v='<ul class="ui-grid-a">';for(Y=0,x=P.length;Y<x;Y+=1){J=P[Y];m=J.getElementsByTagName("a")[0];v+='<li class="ui-block-'+(Y%2!==0?"b":"a")+'"><a href="'+m.href+'"'+(J.hasAttribute("lang")?' lang="'+J.getAttribute("lang")+'"':"")+' data-role="button" data-theme="c" data-corners="false">'+m.innerHTML+"</a></li>"}v+="</ul>";d.id="";d.className="";d.setAttribute("data-role","footer");d.innerHTML=v}B=document.getElementById("gcwu-wmms");if(B!==null){pe.footer[0].getElementsByTagName("footer")[0].appendChild(B)}}C.on("pagecreate",function(){var ai=b.gcnb.find("#gcwu-mnavbar"),aj=pe.bodydiv.find("#jqm-mb-menu"),ah,af,ag,j;if(ai.length!==0){if(!ai.hasClass("ui-controlgroup")){ai.controlgroup()}ai.removeClass("wb-hide");if(aj.length!==0){aj.append(b.menu);ai.find('a[href="#jqm-wb-mb"]').one("click vclick",function(){aj.trigger("create");ah=aj[0].getElementsByClassName("ui-controlgroup");j=ah.length;while(j--){J=ah[j];ag=J.getElementsByTagName("li")[0];if(ag.parentNode.parentNode.parentNode.className.indexOf("ui-collapsible")===-1&&ag.className.indexOf("ui-corner-top")===-1){ag.className+=" ui-corner-top"}af=J.getElementsByClassName("ui-btn");ag=af[af.length-1];if(typeof ag!=="undefined"&&ag.className.indexOf("ui-corner-bottom")===-1){ag.className+=" ui-corner-bottom"}}})}}function i(al,ak,ao,an){var am;c.mobile.showPageLoadingMsg();am=c.mobile.transitionHandlers.simultaneous("pop",ak,ao,an);am.done(function(){c.mobile.hidePageLoadingMsg()});return am}c.mobile.transitionHandlers.loadingTransition=i;c.mobile.defaultDialogTransition="loadingTransition"});C.trigger("themeviewloaded");return},desktopview:function(){var e,d;if(pe.preIE9){e=c("input, textarea, select, button").get()}else{e=document.querySelectorAll("input, textarea, select, button")}d=e.length;while(d--){e[d].setAttribute("data-role","none")}c(document).trigger("themeviewloaded")}};window.wet_boew_theme=c.extend(true,b,a);return window.wet_boew_theme}(jQuery));