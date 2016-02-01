	

 $(function(){

//这是下拉
    /*var xiala=$(".xiala");
	var mianbavfatherlist=$(".mianbavfather-list");
	// alert(xiala.length);
	//console.log(xiala);
	for(var i=0;i<mianbavfatherlist.length;i++)
	{
        mianbavfatherlist[i].index=i;
		hover(mianbavfatherlist[i],function()
		{
			animate(xiala[this.index],{height:232})
		},function()
		{
			animate(xiala[this.index],{height:0})
		})
	}

//大banner轮播
  var dalunbo=$(".dalunbo");
  var bigpictureright=$(".bigpicture-right")[0];
  var daanniu=$("li",bigpictureright);
  var t1=setInterval(move,1500);
  var num=1;
  function move()
  {
	  	if(num==4)
	  	{
	  		num=0;
	  	}
  		for(var j=0;j<dalunbo.length;j++)
  		{
  			dalunbo[j].style.zIndex=2;
  			daanniu[j].style.background="none";
  		}
        
  	   dalunbo[num].style.zIndex=3;
  	   daanniu[num].style.background="#fff";
  	   num++;
  }
  //鼠标滑上去的效果
  for(var i=0;i<daanniu.length;i++)
  {
  	daanniu[i].index=i;
  	daanniu[i].onmouseover=function()
  	{
  		clearInterval(t1);
  		for(var j=0;j<dalunbo.length;j++)
  		{
  			dalunbo[j].style.zIndex=2;
  			daanniu[j].style.background="none";
  		}
  		dalunbo[this.index].style.zIndex=3;
  		daanniu[this.index].style.background="white";
  	}
  	daanniu[i].onmouseout=function()
  	{
  		num=this.index+1;
  		t1=setInterval(move,1500);
  	}
  }*/

  //这是大banner的轮播图
 var dalunbo=$(".dalunbo");
 var bigpictureright=$(".bigpicture-right")
 var dabtn=$("li",bigpictureright);
 
 var index=0;
 function demo(type)
 {
  if(type=="r")
  {
      index++;
      if(index>=dalunbo.length)
      {
        index=0;
      }
  }
  
  else if(type=="l")
  {
    index--;
    if(index<=-1)
    {
      index=dalunbo.length-1;
    }
  }

  dalunbo.hide();
  dalunbo.eq(index).fadeIn();
  dabtn.css({background:"none"});
  dabtn.eq(index).css({background:"#fff"});
  
 }

 var  t=setInterval(function(){demo("r")},1500);

 $(".dalunbo").hover(function()
 {
  clearInterval(t);
 },function()
 {
  t=setInterval(function()
  {
    demo("r");
  },1500);
 })

 $(".leftbtn").click(function()
 {
  demo("l");
 })
 $(".rightbtn").click(function()
 {
  demo("r");
 })

  $(".leftbtn").hover(function()
 {
  clearInterval(t);
 },function()
 {
  t=setInterval(function()
  {
    demo("l");
  },1500);
 })

  $(".rightbtn").hover(function()
 {
  clearInterval(t);
 },function()
 {
  t=setInterval(function()
  {
    demo("r");
  },1500);
 })



 $("li",bigpictureright).hover(function()
 {
  var now=$(this).index();
  clearInterval(t);
  $("li",bigpictureright).css({background:"none"})
  $(this).css({background:"#fff"});
  $(".dalunbo").hide();
  $(".dalunbo").eq(now).fadeIn();
  index=now;
 },function()
 {})



 //这是下拉菜单
  $(".mianbavfather-list").hover(function(){
    $(this).find(".xiala").slideDown().mouseover();
  },function(){
    $(this).find(".xiala").slideUp().mouseup();
  })
  //这是右滑
  $(".peijian-list").hover(function(){
    $(this).find(".hhh").show().mouseover();
  },function(){
    $(this).find(".hhh").hide().mouseup();
  })


  //单品按钮
  $(".xz").click(function()
  {
    $(".bao-danpinpicture").animate({left:"-1229px"});
    $(".xz").css({color:"#ccc"});
    $(".xy").css({color:"#ff6700"});
  })
  $(".xy").click(function()
  {
    $(".bao-danpinpicture").animate({left:"0px"});
    $(".xy").css({color:"#ccc"});
    $(".xz").css({color:"#ff6700"});
  })
  /*单品自动轮播*/
  var index1=0;
  function move(type)
  {index1++;
     if(index1>=2)
     {
      index1=0;
     }
     $(".bao-danpinpicture").animate({left:-1229*index1});
      if(index1==0)
      {
        $(".xy").css({color:"#ccc"});
        $(".xz").css({color:"#ff6700"});
      }
      else{
         $(".xz").css({color:"#ccc"});
         $(".xy").css({color:"#ff6700"});
      }
  }
  var t1=setInterval(function(){move("r")},1500);
  $(".xzxy").hover(function()
  {
    clearInterval(t1);
  },function()
  {
    t1=setInterval(function(){move("r")},1500);
  })

  //这是滑上全部变橙色
   $(".search-all  p").hover(function(){
    $(".search-all  p").css({color:"#ff6700"});
    $(".search-all-o").css({
      background:"#ff6700"})
   },function(){
    $(".search-all  p").css({color:"#000"});
    $(".search-all-o").css({
      background:"#B0B0B0"})
   })

   //搭配行选项卡
 $(".dapei-lunbo").hover(function()
 {
  var now=$(this).index();
   $(".dapei-lunbo").css({color:"#000",textDecoration:"none"})
   $(this).css({color:"#ff6700",textDecoration:"underline"});
   $(".dapei-alltu").hide();
   $(".dapei-alltu").eq(now).show();
 },function()
 {})

 //配件选项卡
 $(".peijian-lunbo").hover(function()
 {
  var now=$(this).index();
  $(".peijian-lunbo").css({color:"#000",textDecoration:"none"});
  $(this).css({color:"#ff6700",textDecoration:"underline"});
  $(".sgp-alltu").hide();
  $(".sgp-alltu").eq(now).show();
 },function(){})

 //滑上图片出现橙色的评价
 $(".bbcc").hover(function(){
  $(this).find(".chengshang").slideDown();
  $(this).find(".chengshang").mouseover();
  $(this).find(".chengshang").slideUp();
  },function(){
    $(".chengshang").hide();
 })




 














  

























  })