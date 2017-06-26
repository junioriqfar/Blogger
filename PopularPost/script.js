titlebold=false;
numposts=9999;
maxshowresult=20;
explanation="respon";

var postTitlear=new Array();
var postUrlar=new Array();
var postCommentar=new Array();
var totalpost;

function showrecentposts(j){
  var a=j.feed.entry.length;totalpost=a;
  for(var f=0;f<a;f++){
    var h=j.feed.entry[f];
    var c=h.title.$t;
    var b;
    var g;
    if(f==j.feed.entry.length){break}
    
for(var d=0;d<h.link.length;d++){
      if(h.link[d].rel=="alternate"){
        g=h.link[d].href;break
      }
    }

    for(var d=0;d<h.link.length;d++){
      if(h.link[d].rel=="replies"&&h.link[d].type=="text/html"){
        b=h.link[d].title.split(" ")[0];break
      }
    }
    c=(titlebold)?"<b>"+c+"</b>":c;
    postTitlear.push(c);
    postUrlar.push(g);
    postCommentar.push(b)
  }
  sortPosts();
  for(var f=0;f<maxshowresult;f++){
    var e='<li><a href="'+postUrlar[f]+'" target="_blank" class="recent-link">'+postTitlear[f]+" <b>["+postCommentar[f]+"  "+explanation+"]</b></a>";
    document.write(e)
  }
}


function sortPosts(){
  function c(d,f){
    var e=postTitlear[d];
    postTitlear[d]=postTitlear[f];
    postTitlear[f]=e;
    var e=postUrlar[d];
    postUrlar[d]=postUrlar[f];
    postUrlar[f]=e;
    var e=postCommentar[d];
    postCommentar[d]=postCommentar[f];
    postCommentar[f]=e
  }

  for(var b=0;b<postTitlear.length-1;b++){
    for(var a=b+1;a<postTitlear.length;a++){
      if(parseInt(postCommentar[b])<parseInt(postCommentar[a])){
        c(b,a)
      }
    }
  }
}

document.write('</li>');
