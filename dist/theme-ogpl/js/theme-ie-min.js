/*!
 *
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-eng.html / wet-boew.github.io/wet-boew/Licence-fra.html
 *
 * Version: v3.1.9-development Build: 2014-03-14 01:04 AM EDT
 *
 */
(function(c){var b,a;b=(typeof window.wet_boew_theme!=="undefined"&&window.wet_boew_theme!==null)?window.wet_boew_theme:{fn:{}};a={theme:"theme-ogpl",psnb:null,search:null,bcrumb:null,title:null,sft:null,fullft:null,gridsmenu:null,menu:null,favicon:{href:"images/favicon-mobile.png",rel:"apple-touch-icon",sizes:"57x57 72x72 114x114 144x144 150x150"},init:function(){b.fullhd=pe.header.find("#ogpl-fullhd");b.psnb=pe.header.find("#ogpl-psnb");b.menubar=b.psnb.find(".wet-boew-menubar");b.search=pe.header.find("#ogpl-srchbx");b.bcrumb=pe.header.find("#ogpl-bc");b.title=pe.header.find("#ogpl-title");b.sft=pe.footer.find("#ogpl-sft");b.fullft=pe.footer.find("#ogpl-fullft");b.gridsmenu=pe.main.find(".module-menu-section");var e=pe.menu.navcurrent(b.menubar,b.bcrumb),d=e.parents("div.mb-sm");if(d.length!==0){d.prev().children("a").addClass("nav-current")}if(pe.secnav.length!==0){e=pe.menu.navcurrent(pe.secnav,b.bcrumb);d=e.parents("ul");d.prev().children("a").addClass("nav-current-nocss")}if(b.gridsmenu.length!==0){e=pe.menu.navcurrent(b.gridsmenu,b.bcrumb)}if(b.psnb.length!==0&&b.search.length===0){b.psnb.addClass("mobile-change")}else{if(b.psnb.length===0&&b.search.length!==0){b.search.addClass("mobile-change")}}},mobileview:function(){var y,P="",e,p,Y=pe.dic.get("%settings"),C=pe.dic.get("%hyphen")+pe.dic.get("%main-page"),D,u,f,n,W,ab="",v='<a data-role="button" data-iconpos="notext"',F=' data-rel="popup" data-position-to="window"',r=v+F,G='<div data-role="popup" data-overlay-theme="a"',J='<div data-role="header"',aa=J+"><h1>",E=' data-theme="c" class="ui-corner-all">',s=J+' class="ui-corner-top"><h1>',h='<div data-role="content" data-theme="c" class="ui-corner-bottom ui-content">',X=v+' href="javascript:;" data-icon="delete" data-rel="back" class="ui-btn-right">'+pe.dic.get("%close")+"</a>",S=r+' data-icon="back" class="ui-btn-left"',Q=">"+pe.dic.get("%back")+"</a>",Z="</div></div>",q='<ul data-role="listview"',A="",L,m,t,g,d,V,U,w,o,M,I,k,B=c(document),z=b.sft.length!==0,R,O,K,T,H,N,x=typeof wet_boew_mobile_view!=="undefined"&&wet_boew_mobile_view.header_fixed,l='<div data-role="header"'+(x?' data-position="fixed"':"")+'><div class="ui-title"><div></div></div><map id="ogpl-mnavbar" data-role="controlgroup" data-type="horizontal" class="ui-btn-right wb-hide">';if(z){if(b.menubar.length!==0||pe.secnav.length!==0||b.bcrumb.length!==0){e=pe.dic.get("%menu");g=b.menubar.find("ul.mb-menu li");u=(pe.secnav.length!==0?pe.secnav[0].getElementsByTagName("h2")[0]:"");y=G+' id="jqm-wb-mb" class="jqm-wb-mb">'+aa+e+"</h1>"+X+'</div><div data-role="content" data-inset="true"><nav role="navigation">';if(b.bcrumb.length!==0){I=b.bcrumb[0];L=I.getElementsByTagName("a");if(L.length!==0){R=L[0].href}y+='<section><div id="jqm-mb-location-text">'+I.innerHTML+"</div></section>"}else{y+='<div id="jqm-mb-location-text"></div>'}if(pe.secnav.length!==0){P+="<section><div><h2>"+u.innerHTML+"</h2>"+pe.menu.buildmobile(pe.secnav.find(".wb-sec-def"),3,"b",false,true,"c",true,true)+"</div></section>"}if(b.menubar.length!==0){P+="<section><div><h2>"+b.psnb.children(":header")[0].innerHTML+"</h2>"+pe.menu.buildmobile(g,3,"a",true,true,"c",true,true)+"</div></section>"}y+='<div id="jqm-mb-menu"></div></nav></div></div></div>';ab+=y;b.menu=P;A+=r+' data-icon="bars" href="#jqm-wb-mb">'+e+"</a>"}if(b.search.length!==0){p=pe.dic.get("%search");f=b.search[0];n=f.innerHTML;f=f.getElementsByTagName("input");w=f.length;while(w--){f[w].setAttribute("data-role","none")}W=G+' id="jqm-wb-search">'+aa+p+"</h1>"+X+'</div><div data-role="content"><div>'+n.substring(n.indexOf("<form"))+"</div></div></div>";ab+=W;A+=r+' data-icon="search" href="#jqm-wb-search">'+p+"</a>"}I=b.title[0];l='<div data-role="header"'+(x?' data-position="fixed"':"")+'><div class="ui-title"><div></div></div><map id="ogpl-mnavbar" data-role="controlgroup" data-type="horizontal" class="ui-btn-right wb-hide">';if(typeof R!=="undefined"){l+=v+' href="'+R+'" data-icon="home">'+pe.dic.get("%home")+"</a>"}else{if(true===false){l+=v+' href="#back-href" data-icon="back">'+pe.dic.get("%back")+"</a>"}}if(A.length!==0){l+=A}l+=r+' href="#popupSettings" data-icon="gear">'+Y+"</a></map></div>"}b.fullhd.children("#ogpl-fullhd-in").before(l+"</div>");b.fullhd.find(".ui-title").append(b.title.find("img").clone().attr("alt",b.title.find("span").text()));I=b.title[0];I.className+=" ui-bar-b";if(z){H=document.getElementById("wb-session");t=b.fullhd.find('li[id*="-lang"]');D=G+' id="popupSettings"'+E;D+=s+Y+"</h1>"+X+"</div>";D+=h+q+">";if(H!==null){O=H.getElementsByClassName("settings");for(V=0,w=O.length;V!==w;V+=1){K=O[V].getElementsByTagName("a")[0];D+='<li><a href="'+K.getAttribute("href")+'">'+K.innerHTML+"</a></li>"}T=H.getElementsByClassName("session")[0].getElementsByTagName("a")[0];D+='<li><a href="'+T.getAttribute("href")+'">'+T.innerHTML+"</a></li>"}if(t.length!==0){D+='<li><a href="#popupLanguages"'+F+">"+pe.dic.get("%languages")+"</a></li>"}D+='<li class="ui-corner-bottom"><a href="#popupAbout"'+F+">"+pe.dic.get("%about")+"</a></li>";D+="</ul>"+Z;if(t.length!==0){D+=G+' id="popupLanguages"'+E;D+=s+pe.dic.get("%languages")+"</h1>"+S+' href="#popupSettings"'+Q+X+"</div>";D+=h+q+">";if(t.filter('[id*="-lang-current"]').length===0){D+='<li><a href="javascript:;" class="ui-disabled">'+pe.dic.get("%lang-native")+' <span class="current">'+pe.dic.get("%current")+"</span></a></li>"}M=t.get();w=M.length;V=w;while(V--){I=M[V];m=I.getElementsByTagName("a")[0];D+="<li"+(V===0?' class="ui-corner-bottom"':"");if(I.id.indexOf("-lang-current")!==-1){D+='><a href="javascript:;" class="ui-disabled">'+I.innerHTML+' <span class="current">'+pe.dic.get("%current")+"</span></a></li>"}else{D+='><a href="'+m.href+'" lang="'+m.getAttribute("lang")+'">'+m.innerHTML+"</a></li>"}}D+="</ul>"+Z}D+=G+' id="popupAbout" data-theme="c" class="ui-corner-all jqm-wb-mb">';D+=s+pe.dic.get("%about")+"</h1>"+S+' href="#popupSettings"'+Q+X+"</div>";D+=h;D+='<div class="site-app-title"><div class="ui-title">'+b.title[0].getElementsByTagName("span")[0].innerHTML+"</div></div>";I=pe.main.find("#ogpl-date-mod").children();if(I.length!==0){d=I[1];if(d.getElementsByTagName("time").length===0){D+='<div class="app-version">'+I[0].innerHTML+" "+d.innerHTML+"</div>"}}D+='<div data-role="controlgroup" data-theme="c"><div data-role="collapsible-set" data-inset="false">';M=b.sft.find(".ogpl-col-head");N=false;for(V=0,w=M.length;V!==w;V+=1){I=M.eq(V);m=I.children("a");k=I.find("+ ul, + address ul");d=m.length!==0?m[0].innerHTML:I[0].innerHTML;if(k.length!==0){if(N){D+="</ul>";N=false}D+='<div class="wb-nested-menu" data-role="collapsible"><h2>'+d+"</h2>"+q+">";L=k[0].getElementsByTagName("a");for(U=0,o=L.length;U!==o;U+=1){I=L[U];D+='<li><a href="'+I.href+'">'+I.innerHTML+"</a></li>"}if(m.length!==0){D+='<li><a href="'+m.attr("href")+'">'+m.html()+C+"</a></li>"}D+="</ul></div>"}else{if(m.length!==0){if(!N){D+=q+">";N=true}D+='<li class="top-level'+(V===0?" ui-corner-top":"")+'"><a href="'+m.attr("href")+'">'+m.html()+"</a></li>"}}}if(N){D+="</ul>"}d=D.lastIndexOf("<li");o=D.indexOf("<li class",d)===d?11:3;D=D.substring(0,d)+'<li class="ui-corner-bottom'+(o===3?'"':" ")+D.substring(d+o)+"</ul></div></div>"+Z;pe.bodydiv.append(ab+D);c(".button-group input, .button-group button, input[type=search]").attr("data-role","none")}B.on("pagecreate",function(){var af=b.fullhd.find("#ogpl-mnavbar"),ag=pe.bodydiv.find("#jqm-mb-menu"),ae,ac,ad,j;if(af.length!==0){if(!af.hasClass("ui-controlgroup")){af.controlgroup()}af.removeClass("wb-hide");if(ag.length!==0){ag.append(b.menu);af.find('a[href="#jqm-wb-mb"]').one("click vclick",function(){ag.trigger("create");ae=ag[0].getElementsByClassName("ui-controlgroup");j=ae.length;while(j--){I=ae[j];ad=I.getElementsByTagName("li")[0];if(ad.parentNode.parentNode.parentNode.className.indexOf("ui-collapsible")===-1&&ad.className.indexOf("ui-corner-top")===-1){ad.className+=" ui-corner-top"}ac=I.getElementsByClassName("ui-btn");ad=ac[ac.length-1];if(typeof ad!=="undefined"&&ad.className.indexOf("ui-corner-bottom")===-1){ad.className+=" ui-corner-bottom"}}})}}function i(ai,ah,al,ak){var aj;c.mobile.showPageLoadingMsg();aj=c.mobile.transitionHandlers.simultaneous("pop",ah,al,ak);aj.done(function(){c.mobile.hidePageLoadingMsg()});return aj}c.mobile.transitionHandlers.loadingTransition=i;c.mobile.defaultDialogTransition="loadingTransition"});B.trigger("themeviewloaded");return},desktopview:function(){var e,d;if(pe.preIE9){e=c("input, textarea, select, button").get()}else{e=document.querySelectorAll("input, textarea, select, button")}d=e.length;while(d--){e[d].setAttribute("data-role","none")}c(document).trigger("themeviewloaded")}};window.wet_boew_theme=c.extend(true,b,a);return window.wet_boew_theme}(jQuery));