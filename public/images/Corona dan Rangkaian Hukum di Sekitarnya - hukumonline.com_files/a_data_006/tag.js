/*
 Copyright 2016-2020 Impactify. All Rights Reserved.
 ----------------------
 Want to join the Impactify Team? jobs@impactify.io
 ----------------------
*/
(function(e){e._impactify_req_||(e._impactify_req_=function(e,f,n){function r(b,d,c){var a=b.createElement("script");a.type="text/javascript";"undefined"!==typeof c&&(a.readyState?a.onreadystatechange=function(){if("loaded"===a.readyState||"complete"===a.readyState)a.onreadystatechange=null,c()}:a.onload=function(){c()});a.src=d;b.getElementsByTagName("body")[0].appendChild(a)}var p="4",g="4r56",k="4r56",h=Math.floor(Date.now()/1E3),l=!1,m=!1,q="https://ad.impactify.io",t=function(b){var d=function(){var a=
function(b){return b.parent===f.top?b:a(b.parent)};return a(f)}().frameElement||e.currentScript||null;if(d){var c=e.createElement("div");c.id=b;c.style.display="none";d.parentNode.insertBefore(c,d)}},u=function(){var b=!!n.getItem("_im_dvn"),d=n.getItem("_im_rs")||!1,c=n.getItem("_im_dv")||!1,a=g;b&&(g=g+"."+h,k=k+"."+h);d&&(p=parseInt(d));if(-1!==(e.getElementById("impactify-sdk").getAttribute("src")||"").indexOf(".impactify.it")||c)l=!0,q="https://app.impactify.it";f.impactifyTag&&f.impactifyTag.length&&
(b=f.impactifyTag[0].appId||"auto",m=/impactify/i.test(b),g+=l||m?"."+h:"",k+=l||m?"."+h:"",top._impactify_=top._impactify_||{appId:b,inDev:l,isDemo:m,baseUrl:q,release:p,version:g,versionName:a,iVersion:k,TIME:h},f.impactifyTag.forEach(function(b){if("screen"===b.format){var a=top;a._impactify_tags=a._impactify_tags||{};var c=b.ajax||!1;if(!a._impactify_tags.screen||c)a._impactify_tags.screen=b,f.top.document.getElementById("div-impx-screen")||t("div-impx-screen"),r(a.document,q+"/static/ad/v"+p+
"/screen.js?v="+g)}}))};try{setTimeout(function(){u()},10)}catch(b){}}(document,e,sessionStorage))})(window);
