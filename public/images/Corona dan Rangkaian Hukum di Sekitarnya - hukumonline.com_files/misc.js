function clftmb(t)
{	var i=null;
	$('[id*="'+t+'-"]').each(function()
		{var t=$(this).attr("id"),n=t.split("-");i=null!==i?i+","+n[1]:n[1]}),
		$.ajax({
			dataType:"json",type:"GET",url:"/c/"+i,
			beforeSend: function() {
		     
		  },
			success:function(i){$.each(i,function(i,n){
				$("#"+t+"-"+n.guid).text(nFormatter(n.hits.total_hits,1));
				$("#"+t+"Total-"+n.guid).parent().css( "display", "inline" );
				$("#"+t+"Total-"+n.guid).prop("title", n.hits.total_hits+" Hits - Mobile : "+n.hits.total_mobile+" - Desktop : "+n.hits.total_desktop);
				})}
			})
}

function nFormatter(num, digits) {
  var si = [
    { value: 1, symbol: "" },
    { value: 1E3, symbol: "k" },
    { value: 1E6, symbol: "M" },
    { value: 1E9, symbol: "G" },
    { value: 1E12, symbol: "T" },
    { value: 1E15, symbol: "P" },
    { value: 1E18, symbol: "E" }
  ];
  var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
}

function cpop(t){$.ajax({ dataType: "html", type:"GET", url: "/pop",success:function (d) {$("#"+t).html(d);}})}

function cpop1(t,p)
{
	$.ajax({
	    dataType: "json", type:"GET", url: "/popular/"+p+"/",
	    success:function (d) 
	    {      
	      if(d==null)
	      {
	      } else
	      {	  
	          for(var i = 0; i < d.length; i++) 
	          { 
	            var cls=""; 
	            if(i==(d.length)-1) cls="last-article";
	            var obj = d[i];	           
	    			
			 	$("#"+t+"-"+i).css("display","list-item");
				$("#"+t+"-"+i).find('a:first').attr('href',obj.url);
		 		$("#"+t+"-"+i).find('a:first').attr('title',"Tentang : "+obj.subTitle);
		 		$("#"+t+"-"+i).find('a:first').text(obj.title);
		 		$("#"+t+"Hits-"+i).text(obj.hits.total_hits);
               	$("#"+t+"Viewer-"+i).attr('title',obj.hits.total_hits+ " Hits ");
	          }
	      }	      
	      $('#'+t+'Loading').remove();
	    },  
	    error: function(XMLHttpRequest, textStatus, errorThrown)  {}, 
	    complete: function(){ }
  });
}