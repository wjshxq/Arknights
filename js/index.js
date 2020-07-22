/*
* @Author: 武金石
* @Date:   2019-11-23 11:05:21
* @Last Modified by:   武金石
* @Last Modified time: 2019-12-05 10:47:25
*/
$(function(){
// 获取宽高，赋给div
	var h=$(window).height();
	var w=$(document.body).width();
	$('.header').height(h);
	$('.header').width(w);
	$('.slider').height(h);
	$('.slider').width(w);
	$('.factions').height(h);
	$('.factions').width(w);
	$('.story').height(h);
	$('.story').width(w);
	$('.archivs').height(h);
	$('.archivs').width(w);
	$('.big').height(h);
	$('.big').width(w);
	// $('').height(h);
	$('video').width(w);
	$('.footer').width(w);
	$('.footer').height(h)
	

//滚轮事件插件
	var n=0;
	var timer;
	$('nav ul li').click(function(event) {
		n=$(this).index()
		let m=$(this).index()
		$('nav ul li').children().children().siblings().removeClass('active');
		$('nav ul li').eq(m).children().children().eq(1).addClass('active');
		$('.box').animate({'margin-top':-h*n+'px'}, 500)
	});


//滚轮事件插件
	$(document).mousewheel(function(e,d){
		// alert(d)
		clearTimeout(timer)
		timer=setTimeout(function(){
			n=n-d
			if(n<0){n=0}
			if(n>5){n=5}
			$('.box').animate({'margin-top':-h*n+'px'}, 500)
			if(h*n==0){
				$('.nav-xian5').removeClass('active')
				$('.nav-xian').removeClass('active')
				$('.jq1').addClass('active')
			}
			if(h*n==969){
				$('.nav-xian5').removeClass('active')
				$('.nav-xian').removeClass('active')
				$('.jq2').addClass('active')
			}
			if(h*n==1938){
				$('.nav-xian5').removeClass('active')
				$('.nav-xian').removeClass('active')
				$('.jq3').addClass('active')
			}
			if(h*n==2907){
				$('.nav-xian5').removeClass('active')
				$('.nav-xian').removeClass('active')
				$('.jq4').addClass('active')
			}
			if(h*n==3876){
				$('.nav-xian5').removeClass('active')
				$('.nav-xian').removeClass('active')
				$('.jq5').addClass('active')
			}
			if(h*n==4845){
				$('.nav-xian').removeClass('active')
				$('.nav-xian5').removeClass('active')
				$('.jq6').addClass('active')
			}
			
		},300)
	})
// nav-btn按钮事件
	$('.nav-btn').click(function(event) {
		$('.nav-btn span').eq(1).toggleClass('icon-bar');
		$('.nav-btn span').eq(0).toggleClass('icon-bar1');
		$('.nav-btn span').eq(2).toggleClass('icon-bar2');
		// $('nav ul').slideToggle(1000);
		$('nav ul').toggleClass('nav-play');
		return false
	});
	// $('body').click(function(event) {
	// 	return false;
	// });
	$('nav ul li').click(function(event) {
		return false;
	});
	$('body').click(function(event) {
		if ($('nav ul').hasClass('nav-play')==0) {
			$('nav ul').addClass('nav-play');
			$('.nav-btn span').eq(1).toggleClass('icon-bar');
			$('.nav-btn span').eq(0).toggleClass('icon-bar1');
			$('.nav-btn span').eq(2).toggleClass('icon-bar2');
		}

		return false;
	});

// 中间三角形播放按钮
	$('.bofang').hover(function() {
		$(this).css('opacity', '1');
	}, function() {
		$(this).css('opacity', '0');
	});

// 第一个div的右上角的排他
	$('.ol-pait li').click(function(event) {
		var n=$(this).index();
		$('.ol-pait').children().siblings().removeClass('ol-one');
		$(this).addClass('ol-one');
		$('.ul-pait').css('margin-top','-'+32*n+'px');
	});


// 模态框播放
	$('.bofang').click(function(event) {
        var vid='<video src="MP4/pv.mp4" width="800px" height="600px" autoplay="autoplay" controls="controls" loop="loop" autobuffer="autobuffer"></video>'
        vid=$(vid).addClass('video-sm')
        var viddiv='<div></div>'
        viddiv=$(viddiv).addClass('video-bg')
        var divspan='<span></span>'
        divspan=$(divspan).addClass('video-tuic')
        viddiv=$(viddiv).prepend(divspan)
        viddiv=$(viddiv).prepend(vid)
        $('body').prepend(viddiv)
        $('.video-tuic').click(function(event) {
            $('.video-bg').remove();
        });
        $('.video-sm').attr('muted', 'false');
    });


// 下载游戏按钮事件
	$('.logo-btn').click(function(event) {
		$('.logo-span').toggleClass('span-dis');
		$('.logo-box').toggleClass('logo-play');
	});

// 画面加载完后执行
	$(document).ready(function() {
		$('.sm-right').fadeIn(1500);
		$('.mrfz-img').fadeIn(500);
		$('.logo-btn').fadeIn(2000);
		$('.logo-box').fadeIn(3000);
		$('.header-scroll').fadeIn(3000);
	});

// news的排他轮播图

	$('.news-content-nav').hover(function() {
		$('.ols-nav li').css('height', '8px');
	}, function() {
		$('.ols-nav li').css('height', '4px');
	});

	$('.ols-nav').hover(function() {
		$('.ols-nav li').css('height', '8px');
	}, function() {
		$('.ols-nav li').css('height', '4px');
	});


	$('.ols-nav li').click(function(event) {
		var ols=$(this).index()
		$('.ols-nav').children().siblings().removeClass('ols-play1');
		$(this).addClass('ols-play1');
		$('.news-content-nav').css('margin-left', '-'+1300*ols+'px');
		num=ols
	});

	var num=0
	var time
	function go(){
		clearInterval(time)
		time=setInterval(function(){
			num++
			if(num==5){num=0}
			$('.ols-nav').children().siblings().removeClass('ols-play1');
			$('.ols-nav li').eq(num).addClass('ols-play1');
			$('.news-content-nav').css('margin-left', '-'+1300*num+'px');
		},5000)
	}
	go();

	$('.news-content-nav').mouseenter(function(event) {
		clearInterval(time);
	});
	$('.news-content-nav').mouseleave(function(event) {
		go();
	});
	$('.ols-nav').mouseenter(function(event) {
		clearInterval(time);
	});
	$('.ols-nav').mouseleave(function(event) {
		go();
	});

// 活动与公告部分

	$('.notice-li1 .input-li ul li').mouseenter(function(event) {
		var n=$(this).index()
		$('.notice-li1 .input-li ul li').eq(n).css('background-color', '#2bf');
		$('.notice-li1 .input-li ul li .text-left1').eq(n).css('color', '#000');
		$('.notice-li1 .input-li ul li .text-right1').eq(n).css('color', '#000');
		$('.notice-li1 .input-li ul li h2').eq(n).css('color', '#000');
		$('.notice-li1 .input-li ul li .solid1').eq(n).css('background-color', '#000');
		$('.notice-li1 .input-li ul li .text-button1').eq(n).css({
			'background-color': '#000',
			'color': '#fff'
		});
	});
	$('.notice-li1 .input-li ul li').mouseleave(function(event) {
		var n=$(this).index()
		$('.notice-li1 .input-li ul li').eq(n).css('background-color', '');
		$('.notice-li1 .input-li ul li .text-left1').eq(n).css('color', '#2bf');
		$('.notice-li1 .input-li ul li .text-right1').eq(n).css('color', '#898989');
		$('.notice-li1 .input-li ul li h2').eq(n).css('color', '#fff');
		$('.notice-li1 .input-li ul li .solid1').eq(n).css('background-color', '#2bf');
		$('.notice-li1 .input-li ul li .text-button1').eq(n).css({
			'background-color': '#2bf',
			'color': '#000'
		});
	});

	$('.notice-li2 .input-li ul li').mouseenter(function(event) {
		var n=$(this).index()
		$('.notice-li2 .input-li ul li').eq(n).css('background-color', '#2bf');
		$('.notice-li2 .input-li ul li .text-left1').eq(n).css('color', '#000');
		$('.notice-li2 .input-li ul li .text-right1').eq(n).css('color', '#000');
		$('.notice-li2 .input-li ul li h2').eq(n).css('color', '#000');
		$('.notice-li2 .input-li ul li .solid1').eq(n).css('background-color', '#000');
		$('.notice-li2 .input-li ul li .text-button1').eq(n).css({
			'background-color': '#000',
			'color': '#fff'
		});
	});
	$('.notice-li2 .input-li ul li').mouseleave(function(event) {
		var n=$(this).index()
		$('.notice-li2 .input-li ul li').eq(n).css('background-color', '');
		$('.notice-li2 .input-li ul li .text-left1').eq(n).css('color', '#2bf');
		$('.notice-li2 .input-li ul li .text-right1').eq(n).css('color', '#898989');
		$('.notice-li2 .input-li ul li h2').eq(n).css('color', '#fff');
		$('.notice-li2 .input-li ul li .solid1').eq(n).css('background-color', '#2bf');
		$('.notice-li2 .input-li ul li .text-button1').eq(n).css({
			'background-color': '#2bf',
			'color': '#000'
		});
	});

	$('.notice-li3 .input-li ul li').mouseenter(function(event) {
		var n=$(this).index()
		$('.notice-li3 .input-li ul li').eq(n).css('background-color', '#2bf');
		$('.notice-li3 .input-li ul li .text-left1').eq(n).css('color', '#000');
		$('.notice-li3 .input-li ul li .text-right1').eq(n).css('color', '#000');
		$('.notice-li3 .input-li ul li h2').eq(n).css('color', '#000');
		$('.notice-li3 .input-li ul li .solid1').eq(n).css('background-color', '#000');
		$('.notice-li3 .input-li ul li .text-button1').eq(n).css({
			'background-color': '#000',
			'color': '#fff'
		});
	});
	$('.notice-li3 .input-li ul li').mouseleave(function(event) {
		var n=$(this).index()
		$('.notice-li3 .input-li ul li').eq(n).css('background-color', '');
		$('.notice-li3 .input-li ul li .text-left1').eq(n).css('color', '#2bf');
		$('.notice-li3 .input-li ul li .text-right1').eq(n).css('color', '#898989');
		$('.notice-li3 .input-li ul li h2').eq(n).css('color', '#fff');
		$('.notice-li3 .input-li ul li .solid1').eq(n).css('background-color', '#2bf');
		$('.notice-li3 .input-li ul li .text-button1').eq(n).css({
			'background-color': '#2bf',
			'color': '#000'
		});
	});

	$('.notice-li4 .input-li ul li').mouseenter(function(event) {
		var n=$(this).index()
		$('.notice-li4 .input-li ul li').eq(n).css('background-color', '#2bf');
		$('.notice-li4 .input-li ul li .text-left1').eq(n).css('color', '#000');
		$('.notice-li4 .input-li ul li .text-right1').eq(n).css('color', '#000');
		$('.notice-li4 .input-li ul li h2').eq(n).css('color', '#000');
		$('.notice-li4 .input-li ul li .solid1').eq(n).css('background-color', '#000');
		$('.notice-li4 .input-li ul li .text-button1').eq(n).css({
			'background-color': '#000',
			'color': '#fff'
		});
	});
	$('.notice-li4 .input-li ul li').mouseleave(function(event) {
		var n=$(this).index()
		$('.notice-li4 .input-li ul li').eq(n).css('background-color', '');
		$('.notice-li4 .input-li ul li .text-left1').eq(n).css('color', '#2bf');
		$('.notice-li4 .input-li ul li .text-right1').eq(n).css('color', '#898989');
		$('.notice-li4 .input-li ul li h2').eq(n).css('color', '#fff');
		$('.notice-li4 .input-li ul li .solid1').eq(n).css('background-color', '#2bf');
		$('.notice-li4 .input-li ul li .text-button1').eq(n).css({
			'background-color': '#2bf',
			'color': '#000'
		});
	});
// 活动与公告部分-------排他
	$('.news-top .news-nav li').click(function(event) {
		var n=$(this).index();
		$('.news-nav').children().siblings().removeClass('news-play');
		$('.news-nav li').eq(n).addClass('news-play');
		$('.notice-nav').css('margin-top', '-'+450*n+'px');
	});


// 开门动画
















// 干员div的效果
// 罗德岛
	$('.fac-content ul li').hover(function() {
		var n=$(this).index()
		$('.fac-content ul li').eq(n).addClass('f-play')
	}, function() {
		$('.fac-content ul li').removeClass('f-play')
	});

// 红
	$('.fac-content ul li').eq(0).click(function(event) {
		var n=$(this).index()
       	$(this).eq(n).children('.img-1').css('opacity', '0');
       	$('.red').css({
           	'width': '1920px',
           	'height': '969px',
           	'top':'0%',
           	'left':'0%',
           	'position':'fixed',
           	'z-index':'1000',
           	'opacity':'1'
       	});
    	$('.gongyong-tui').click(function(event) {
    		$('.fac-content ul li').eq(n).children('.img-1').css('opacity', '1');
			$('.red').css({
				'width': '100px',
	        	'height': '100px',
	           	'top':'57%',
	           	'left':'23%',
	           	'position':'absolute',
	           	'z-index':'10',
	           	'opacity':'0'
			});
		});
    });

// 凯尔希
	$('.fac-content ul li').eq(1).click(function(event) {
       	$('.fac-content ul li').eq(1).children('.img-2').css('opacity', '0');
       	$('.kalts').css({
           	'width': '1920px',
           	'height': '969px',
           	'top':'0%',
           	'left':'0%',
           	'position':'fixed',
           	'z-index':'1000',
           	'opacity':'1'
       	});
    	$('.gongyong-tui').click(function(event) {
    		$('.fac-content ul li').eq(1).children('.img-2').css('opacity', '1');
			$('.kalts').css({
				'width': '100px',
	        	'height': '100px',
	           	'top':'54%',
	           	'left':'37%',
	           	'position':'absolute',
	           	'z-index':'10',
	           	'opacity':'0'
			});
		});
   });
	
// 阿米娅
	$('.fac-content ul li').eq(2).click(function(event) {
       	$('.fac-content ul li').eq(2).children('.img-3').css('opacity', '0');
       	$('.amiya').css({
           	'width': '1920px',
           	'height': '969px',
           	'top':'0%',
           	'left':'0%',
           	'position':'fixed',
           	'z-index':'1000',
           	'opacity':'1'
       	});
    	$('.gongyong-tui').click(function(event) {
    		$('.fac-content ul li').eq(2).children('.img-3').css('opacity', '1');
			$('.amiya').css({
				'width': '100px',
	        	'height': '100px',
	           	'top':'54%',
	           	'left':'49%',
	           	'position':'absolute',
	           	'z-index':'10',
	           	'opacity':'0'
			});
		});
   });

// 杜宾
	$('.fac-content ul li').eq(3).click(function(event) {
       	$('.fac-content ul li').eq(3).children('.img-4').css('opacity', '0');
       	$('.dobber').css({
           	'width': '1920px',
           	'height': '969px',
           	'top':'0%',
           	'left':'0%',
           	'position':'fixed',
           	'z-index':'1000',
           	'opacity':'1'
       	});
    	$('.gongyong-tui').click(function(event) {
    		$('.fac-content ul li').eq(3).children('.img-4').css('opacity', '1');
			$('.dobber').css({
				'width': '50px',
	        	'height': '50px',
	           	'top':'54%',
	           	'left':'61%',
	           	'position':'absolute',
	           	'z-index':'10',
	           	'opacity':'0'
			});
		});
   });

// 临光
	$('.fac-content ul li').eq(4).click(function(event) {
       	$('.fac-content ul li').eq(4).children('.img-5').css('opacity', '0');
       	$('.nearl').css({
           	'width': '1920px',
           	'height': '969px',
           	'top':'0%',
           	'left':'0%',
           	'position':'fixed',
           	'z-index':'1000',
           	'opacity':'1'
       	});
    	$('.gongyong-tui').click(function(event) {
    		$('.fac-content ul li').eq(4).children('.img-5').css('opacity', '1');
			$('.nearl').css({
				'width': '50px',
	        	'height': '50px',
	           	'top':'54%',
	           	'left':'73%',
	           	'position':'absolute',
	           	'z-index':'10',
	           	'opacity':'0'
			});
		});
   });

// 干员div的效果
// 龙门
	$('.fac-content2 ul li').hover(function() {
		var n=$(this).index()
		$('.fac-content2 ul li').eq(n).addClass('f-play')
	}, function() {
		$('.fac-content2 ul li').removeClass('f-play')
	});
// 星熊
	$('.fac-content2 ul li').eq(0).click(function(event) {
       	$('.fac-content2 ul li').eq(0).children('.img-6').css('opacity', '0');
       	$('.hsguma').css({
           	'width': '1920px',
           	'height': '969px',
           	'top':'0%',
           	'left':'0%',
           	'position':'fixed',
           	'z-index':'1000',
           	'opacity':'1'
       	});
    	$('.gongyong-tui').click(function(event) {
    		$('.fac-content2 ul li').eq(0).children('.img-6').css('opacity', '1');
			$('.hsguma').css({
				'width': '50px',
	        	'height': '50px',
	           	'top':'54%',
	           	'left':'36%',
	           	'position':'absolute',
	           	'z-index':'10',
	           	'opacity':'0'
			});
		});
   });
// 陈
	$('.fac-content2 ul li').eq(1).click(function(event) {
       	$('.fac-content2 ul li').eq(1).children('.img-7').css('opacity', '0');
       	$('.chen').css({
           	'width': '1920px',
           	'height': '969px',
           	'top':'0%',
           	'left':'0%',
           	'position':'fixed',
           	'z-index':'1000',
           	'opacity':'1'
       	});
    	$('.gongyong-tui').click(function(event) {
    		$('.fac-content2 ul li').eq(1).children('.img-7').css('opacity', '1');
			$('.chen').css({
				'width': '50px',
	        	'height': '50px',
	           	'top':'54%',
	           	'left':'51%',
	           	'position':'absolute',
	           	'z-index':'10',
	           	'opacity':'0'
			});
		});
   });

// 干员div的效果
// 企鹅物流
	$('.fac-content3 ul li').hover(function() {
		var n=$(this).index()
		$('.fac-content3 ul li').eq(n).addClass('f-play')
	}, function() {
		$('.fac-content3 ul li').removeClass('f-play')
	});
// 可颂
	$('.fac-content3 ul li').eq(0).click(function(event) {
       	$('.fac-content3 ul li').eq(0).children('.img-8').css('opacity', '0');
       	$('.moes').css({
           	'width': '1920px',
           	'height': '969px',
           	'top':'0%',
           	'left':'0%',
           	'position':'fixed',
           	'z-index':'1000',
           	'opacity':'1'
       	});
    	$('.gongyong-tui').click(function(event) {
    		$('.fac-content3 ul li').eq(0).children('.img-8').css('opacity', '1');
			$('.moes').css({
				'width': '50px',
	        	'height': '50px',
	           	'top':'53%',
	           	'left':'35%',
	           	'position':'absolute',
	           	'z-index':'10',
	           	'opacity':'0'
			});
		});
   });
// 德克萨斯
	$('.fac-content3 ul li').eq(1).click(function(event) {
       	$('.fac-content3 ul li').eq(1).children('.img-9').css('opacity', '0');
       	$('.texas').css({
           	'width': '1920px',
           	'height': '969px',
           	'top':'0%',
           	'left':'0%',
           	'position':'fixed',
           	'z-index':'1000',
           	'opacity':'1'
       	});
    	$('.gongyong-tui').click(function(event) {
    		$('.fac-content3 ul li').eq(1).children('.img-9').css('opacity', '1');
			$('.texas').css({
				'width': '50px',
	        	'height': '50px',
	           	'top':'54%',
	           	'left':'49%',
	           	'position':'absolute',
	           	'z-index':'10',
	           	'opacity':'0'
			});
		});
   });
// 能天使
	$('.fac-content3 ul li').eq(2).click(function(event) {
       	$('.fac-content3 ul li').eq(2).children('.img-10').css('opacity', '0');
       	$('.angel').css({
           	'width': '1920px',
           	'height': '969px',
           	'top':'0%',
           	'left':'0%',
           	'position':'fixed',
           	'z-index':'1000',
           	'opacity':'1'
       	});
    	$('.gongyong-tui').click(function(event) {
    		$('.fac-content3 ul li').eq(2).children('.img-10').css('opacity', '1');
			$('.angel').css({
				'width': '50px',
	        	'height': '50px',
	           	'top':'52%',
	           	'left':'65%',
	           	'position':'absolute',
	           	'z-index':'10',
	           	'opacity':'0'
			});
		});
   });

// 干员div的效果
// 莱茵科技
	$('.fac-content4 ul li').hover(function() {
		var n=$(this).index()
		$('.fac-content4 ul li').eq(n).addClass('f-play')
	}, function() {
		$('.fac-content4 ul li').removeClass('f-play')
	});
// 白面鸮
	$('.fac-content4 ul li').eq(0).click(function(event) {
       	$('.fac-content4 ul li').eq(0).children('.img-11').css('opacity', '0');
       	$('.plosis').css({
           	'width': '1920px',
           	'height': '969px',
           	'top':'0%',
           	'left':'0%',
           	'position':'fixed',
           	'z-index':'1000',
           	'opacity':'1'
       	});
    	$('.gongyong-tui').click(function(event) {
    		$('.fac-content4 ul li').eq(0).children('.img-11').css('opacity', '1');
			$('.plosis').css({
				'width': '50px',
	        	'height': '50px',
	           	'top':'53%',
	           	'left':'35%',
	           	'position':'absolute',
	           	'z-index':'10',
	           	'opacity':'0'
			});
		});
   });
// 伊芙利特
	$('.fac-content4 ul li').eq(1).click(function(event) {
       	$('.fac-content4 ul li').eq(1).children('.img-12').css('opacity', '0');
       	$('.ifrit').css({
           	'width': '1920px',
           	'height': '969px',
           	'top':'0%',
           	'left':'0%',
           	'position':'fixed',
           	'z-index':'1000',
           	'opacity':'1'
       	});
    	$('.gongyong-tui').click(function(event) {
    		$('.fac-content4 ul li').eq(1).children('.img-12').css('opacity', '1');
			$('.ifrit').css({
				'width': '50px',
	        	'height': '50px',
	           	'top':'54%',
	           	'left':'49%',
	           	'position':'absolute',
	           	'z-index':'10',
	           	'opacity':'0'
			});
		});
   });
// 赫默
	$('.fac-content4 ul li').eq(2).click(function(event) {
       	$('.fac-content4 ul li').eq(2).children('.img-13').css('opacity', '0');
       	$('.silent').css({
           	'width': '1920px',
           	'height': '969px',
           	'top':'0%',
           	'left':'0%',
           	'position':'fixed',
           	'z-index':'1000',
           	'opacity':'1'
       	});
    	$('.gongyong-tui').click(function(event) {
    		$('.fac-content4 ul li').eq(2).children('.img-13').css('opacity', '1');
			$('.silent').css({
				'width': '50px',
	        	'height': '50px',
	           	'top':'52%',
	           	'left':'63%',
	           	'position':'absolute',
	           	'z-index':'10',
	           	'opacity':'0'
			});
		});
   });


// 干员div的效果
// 黑钢
	$('.fac-content5 ul li').hover(function() {
		var n=$(this).index()
		$('.fac-content5 ul li').eq(n).addClass('f-play')
	}, function() {
		$('.fac-content5 ul li').removeClass('f-play')
	});
// 芙兰卡
	$('.fac-content5 ul li').eq(0).click(function(event) {
       	$('.fac-content5 ul li').eq(0).children('.img-14').css('opacity', '0');
       	$('.frank').css({
           	'width': '1920px',
           	'height': '969px',
           	'top':'0%',
           	'left':'0%',
           	'position':'fixed',
           	'z-index':'1000',
           	'opacity':'1'
       	});
    	$('.gongyong-tui').click(function(event) {
    		$('.fac-content5 ul li').eq(0).children('.img-14').css('opacity', '1');
			$('.frank').css({
				'width': '50px',
	        	'height': '50px',
	           	'top':'53%',
	           	'left':'38%',
	           	'position':'absolute',
	           	'z-index':'10',
	           	'opacity':'0'
			});
		});
   });
// 雷蛇
	$('.fac-content5 ul li').eq(1).click(function(event) {
       	$('.fac-content5 ul li').eq(1).children('.img-15').css('opacity', '0');
       	$('.liskarm').css({
           	'width': '1920px',
           	'height': '969px',
           	'top':'0%',
           	'left':'0%',
           	'position':'fixed',
           	'z-index':'1000',
           	'opacity':'1'
       	});
    	$('.gongyong-tui').click(function(event) {
    		$('.fac-content5 ul li').eq(1).children('.img-15').css('opacity', '1');
			$('.liskarm').css({
				'width': '50px',
	        	'height': '50px',
	           	'top':'54%',
	           	'left':'54%',
	           	'position':'absolute',
	           	'z-index':'10',
	           	'opacity':'0'
			});
		});
   });


	$('.fac-off .fac-nav li').click(function(event) {
		var n=$(this).index()
		$('.fac-off .fac-nav li:nth-child(1)').css('transform', 'translateY(-969px)');
		$('.fac-off .fac-nav li:nth-child(3)').css('transform', 'translateY(-969px)');
		$('.fac-off .fac-nav li:nth-child(5)').css('transform', 'translateY(-969px)');
		$('.fac-off .fac-nav li:nth-child(2)').css('transform', 'translateY(969px)');
		$('.fac-off .fac-nav li:nth-child(4)').css('transform', 'translateY(969px)');
		$('.fac-main').css('margin-top', '-'+n*969+'px');
		$('.fac-off').fadeOut(500);
	});
	$('.fac-left').click(function(event) {
		$('.fac-off .fac-nav li:nth-child(1)').css('transform', 'translateY(0px)');
		$('.fac-off .fac-nav li:nth-child(3)').css('transform', 'translateY(0px)');
		$('.fac-off .fac-nav li:nth-child(5)').css('transform', 'translateY(0px)');
		$('.fac-off .fac-nav li:nth-child(2)').css('transform', 'translateY(0px)');
		$('.fac-off .fac-nav li:nth-child(4)').css('transform', 'translateY(0px)');
		$('.fac-off').fadeIn(500);
	});


// 世界观部分的动画效果

// 文字效果
	$('.story-nav li').hover(function() {
		var n=$(this).index();
		$('.story-nav li .text-one').eq(n).css('width', '160px');
	}, function() {
		var n=$(this).index();
		$('.story-nav li .text-one').eq(n).css('width', '0px');
	});


// 源石
	$(document).mousemove(function(event) {
        var x=event.clientX
        var y=event.clientY
        $('.story-box').css({
            'transform': 'translateY(-'+y*0.01+'%)'+'translateX(-'+x*0.01+'%)',
            // 'transform': 'translateX(-'+x*0.01+'%)'
        });
        $('.story-box img').css({
            'transform': 'translateY(-'+y*0.001+'%)'+'translateX(-'+x*0.001+'%)',
            // 'transform': 'translateX(-'+x*0.01+'%)'
        });
    });
	$('.story-nav li .box-img').hover(function() {
		$('.story-box .box-img').css({
			'width': '650px',
			'height': '650px',
			'top': '-80px',
			'left': '-80px'
		});
	}, function() {
		$('.story-box .box-img').css({
			'width': '600px',
			'height': '600px',
			'top': '-50px',
			'left': '-50px'
		});
	});

// 源石技艺
	$(document).mousemove(function(event) {
        var x=event.clientX
        var y=event.clientY
        $('.story-box2').css({
            'transform': 'translateY(-'+y*0.01+'%)'+'translateX(-'+x*0.01+'%)',
        });
        $('.story-box2 img').css({
            'transform': 'translateY(-'+y*0.001+'%)'+'translateX(-'+x*0.001+'%)',
        });
    });
	$('.story-nav li .box-img2').hover(function() {
		var n=$(this).index()
		$('.story-box2 .box-img2').css({
			'width': '500px',
			'height': '500px',
			'top': '-80px',
			'left': '-80px'
		});
	}, function() {
		var n=$(this).index()
		$('.story-box2 .box-img2').css({
			'width': '400px',
			'height': '400px',
			'top': '-50px',
			'left': '-20px'
		});
	});

// 整合运动
	$(document).mousemove(function(event) {
        var x=event.clientX
        var y=event.clientY
        $('.story-box3').css({
            'transform': 'translateY(-'+y*0.01+'%)'+'translateX(-'+x*0.01+'%)',
        });
        $('.story-box3 img').css({
            'transform': 'translateY(-'+y*0.001+'%)'+'translateX(-'+x*0.001+'%)',
        });
    });
	$('.story-nav li .box-img3').hover(function() {
		var n=$(this).index()
		$('.story-box3 .box-img3').css({
			'width': '400px',
			'height': '400px',
			'top': '-80px',
			'left': '-80px'
		});
	}, function() {
		var n=$(this).index()
		$('.story-box3 .box-img3').css({
			'width': '300px',
			'height': '300px',
			'top': '30px',
			'left': '30px'
		});
	});

// 感染者
	$(document).mousemove(function(event) {
        var x=event.clientX
        var y=event.clientY
        $('.story-box4').css({
            'transform': 'translateY(-'+y*0.01+'%)'+'translateX(-'+x*0.01+'%)',
        });
        $('.story-box4 img').css({
            'transform': 'translateY(-'+y*0.001+'%)'+'translateX(-'+x*0.001+'%)',
        });
    });
	$('.story-nav li .box-img4').hover(function() {
		var n=$(this).index()
		$('.story-box4 .box-img4').css({
			'width': '400px',
			'height': '400px',
			'top': '-80px',
			'left': '-80px'
		});
	}, function() {
		var n=$(this).index()
		$('.story-box4 .box-img4').css({
			'width': '300px',
			'height': '300px',
			'top': '-50px',
			'left': '-40px'
		});
	});

// 移动城邦
	$(document).mousemove(function(event) {
        var x=event.clientX
        var y=event.clientY
        $('.story-box5').css({
            'transform': 'translateY(-'+y*0.01+'%)'+'translateX(-'+x*0.01+'%)',
        });
        $('.story-box5 img').css({
            'transform': 'translateY(-'+y*0.001+'%)'+'translateX(-'+x*0.001+'%)',
        });
    });
	$('.story-nav li .box-img5').hover(function() {
		var n=$(this).index()
		$('.story-box5 .box-img5').css({
			'width': '450px',
			'height': '450px',
			'top': '-80px',
			'left': '-80px'
		});
	}, function() {
		var n=$(this).index()
		$('.story-box5 .box-img5').css({
			'width': '400px',
			'height': '400px',
			'top': '-50px',
			'left': '-40px'
		});
	});

// 罗德岛
	$(document).mousemove(function(event) {
        var x=event.clientX
        var y=event.clientY
        $('.story-box6').css({
            'transform': 'translateY(-'+y*0.01+'%)'+'translateX(-'+x*0.01+'%)',
        });
        $('.story-box6 img').css({
            'transform': 'translateY(-'+y*0.001+'%)'+'translateX(-'+x*0.001+'%)',
        });
    });
	$('.story-nav li .box-img6').hover(function() {
		var n=$(this).index()
		$('.story-box6 .box-img6').css({
			'width': '450px',
			'height': '450px',
			'top': '-80px',
			'left': '-80px'
		});
	}, function() {
		var n=$(this).index()
		$('.story-box6 .box-img6').css({
			'width': '400px',
			'height': '400px',
			'top': '-50px',
			'left': '-40px'
		});
	});

// 点击效果
	$('.story-nav li').click(function(event) {
		var n=$(this).index()
		$('.story-nav2 .yuans').eq(n).css({
			'width': '1300px',
			'height': '800px',
			'top': '10%',
			'left': '45%',
			'opacity': '1'
		});
		$('.story-nav li').eq(n).css('opacity', '0');
		$('.story-nav li').eq(n).siblings().addClass('xiangshang');

		$('.yuans span').click(function(event) {
			$('.story-nav2 .yuans').eq(n).css({
				'width': '10px',
				'height': '10px',
				'top': '49%',
				'left': '23.5%',
				'opacity': '0'
			});
			$('.story-nav li').eq(n).css('opacity', '1');
			$('.story-nav li').eq(n).siblings().removeClass('xiangshang');
		});
	});
	


// 档案部分效果
	$('.archivs-box div').mouseenter(function(event) {
		var n=$(this).index()
		$('.archivs-box div').eq(n).children().css('transform', 'scale(1.1)');
	});
	$('.archivs-box div').mouseleave(function(event) {
		var n=$(this).index()
		$('.archivs-box div').eq(n).children().css('transform', 'scale(1)');
	});

// 模态框效果
	$('.archivs-box div').click(function(event) {
        var n=$(this).index()
        switch(n){
            case 0:
                var box1='<div class="big-box"><div class="img-box0"><span class="nth-1">✖</span><img class="big-img" src="images/big1.jpg" alt=""><div class="box-text-bottom"><span class="box-text-1">R E C O R D<br>K E Y W O R D S</span><span class="box-text-2">&nbsp;&nbsp;#整合运动#&nbsp;</span><span class="box-text-3">&nbsp;#塔露拉#</span></div></div></div>'
                $('.archivs-box').prepend(box1);
                $('.nth-1').click(function(event) {
                    $('.big-box').remove();
                });
                break;
            case 1:
                var box1='<div class="big-box"><div class="img-box1"><span class="nth-1">✖</span><img class="big-img" src="images/big2.jpg" alt=""><div class="box-text-bottom"><span class="box-text-1">R E C O R D<br>K E Y W O R D S</span><span class="box-text-2">&nbsp;&nbsp;#凯尔希#&nbsp;</span><span class="box-text-3">&nbsp;#罗德岛医疗中心#</span></div></div></div>'
                $('.archivs-box').prepend(box1);
                $('.nth-1').click(function(event) {
                    $('.big-box').remove();
                });
                break;
            case 2:
                var box1='<div class="big-box"><div class="img-box2"><span class="nth-1">✖</span><img class="big-img" src="images/big3.jpg" alt=""><div class="box-text-bottom"><span class="box-text-1">R E C O R D<br>K E Y W O R D S</span><span class="box-text-2">&nbsp;&nbsp;#安心院#&nbsp;</span><span class="box-text-3">&nbsp;#安洁莉娜#</span></div></div></div>'
                $('.archivs-box').prepend(box1);
                $('.nth-1').click(function(event) {
                    $('.big-box').remove();
                });
                break;
            case 3:
                var box1='<div class="big-box"><div class="img-box2"><span class="nth-1">✖</span><img class="big-img" src="images/big4.jpg" alt=""><div class="box-text-bottom"><span class="box-text-1">R E C O R D<br>K E Y W O R D S</span><span class="box-text-2">&nbsp;&nbsp;#企鹅物流#&nbsp;</span><span class="box-text-3">&nbsp;#休憩#</span></div></div></div>'
                $('.archivs-box').prepend(box1);
                $('.nth-1').click(function(event) {
                    $('.big-box').remove();
                });
               	break;
            case 4:
                var box1='<div class="big-box"><div class="img-box2"><span class="nth-1">✖</span><img class="big-img" src="images/big5.png" alt=""><div class="box-text-bottom"><span class="box-text-1">R E C O R D<br>K E Y W O R D S</span><span class="box-text-2">&nbsp;&nbsp;#target#&nbsp;</span><span class="box-text-3">&nbsp;#企鹅物流#</span></div></div></div>'
                $('.archivs-box').prepend(box1);
                $('.nth-1').click(function(event) {
                    $('.big-box').remove();
                });
                break;
            case 5:
                var box1='<div class="big-box"><div class="img-box2"><span class="nth-1">✖</span><img class="big-img" src="images/big6.jpg" alt=""><div class="box-text-bottom"><span class="box-text-1">R E C O R D<br>K E Y W O R D S</span><span class="box-text-2">&nbsp;&nbsp;#谢拉格#&nbsp;</span><span class="box-text-3">&nbsp;</span></div></div></div>'
                $('.archivs-box').prepend(box1);
                $('.nth-1').click(function(event) {
                    $('.big-box').remove();
                });
                break;
            case 6:
                var box1='<div class="big-box"><div class="img-box6"><span class="nth-1">✖</span><img class="big-img" src="images/big7.png" alt=""><div class="box-text-bottom"><span class="box-text-1">R E C O R D<br>K E Y W O R D S</span><span class="box-text-2">&nbsp;&nbsp;#罗德岛#&nbsp;</span><span class="box-text-3">&nbsp;#阿米娅#</span></div></div></div>'
                $('.archivs-box').prepend(box1);
                $('.nth-1').click(function(event) {
                    $('.big-box').remove();
                });
                break;
            case 7:
                var box1='<div class="big-box"><div class="img-box2"><span class="nth-1">✖</span><img class="big-img" src="images/big8.jpg" alt=""><div class="box-text-bottom"><span class="box-text-1">R E C O R D<br>K E Y W O R D S</span><span class="box-text-2">&nbsp;&nbsp;#企鹅物流#&nbsp;</span><span class="box-text-3">&nbsp;#能天使#&nbsp;&nbsp;#作战中#&nbsp;</span></div></div></div>'
                $('.archivs-box').prepend(box1);
                $('.nth-1').click(function(event) {
                    $('.big-box').remove();
                });
                break;
            case 8:
                var box1='<div class="big-box"><div class="img-box2"><span class="nth-1">✖</span><img class="big-img" src="images/big9.jpg" alt=""><div class="box-text-bottom"><span class="box-text-1">R E C O R D<br>K E Y W O R D S</span><span class="box-text-2">&nbsp;&nbsp;#罗德岛#&nbsp;</span><span class="box-text-3">&nbsp;#集结#</span></div></div></div>'
                $('.archivs-box').prepend(box1);
                $('.nth-1').click(function(event) {
                    $('.big-box').remove();
                });
                break;
            case 9:
                var box1='<div class="big-box"><div class="img-box2"><span class="nth-1">✖</span><img class="big-img" src="images/big10.jpg" alt=""><div class="box-text-bottom"><span class="box-text-1">R E C O R D<br>K E Y W O R D S</span><span class="box-text-2">&nbsp;&nbsp;#谢拉格#&nbsp;</span><span class="box-text-3">&nbsp;#崖心#</span></div></div></div>'
                $('.archivs-box').prepend(box1);
                $('.nth-1').click(function(event) {
                    $('.big-box').remove();
                });
                break;
            case 10:
                var box1='<div class="big-box"><div class="img-box10"><span class="nth-1">✖</span><img class="big-img" src="images/big11.jpg" alt=""><div class="box-text-bottom"><span class="box-text-1">R E C O R D<br>K E Y W O R D S</span><span class="box-text-2">&nbsp;&nbsp;#罗德岛#&nbsp;</span><span class="box-text-3">&nbsp;#艾雅法拉#</span></div></div></div>'
                $('.archivs-box').prepend(box1);
                $('.nth-1').click(function(event) {
                    $('.big-box').remove();
                });
                break;
            case 11:
                var box1='<div class="big-box"><div class="img-box2"><span class="nth-1">✖</span><img class="big-img" src="images/big12.jpg" alt=""><div class="box-text-bottom"><span class="box-text-1">R E C O R D<br>K E Y W O R D S</span><span class="box-text-2">&nbsp;&nbsp;#谢拉格#&nbsp;</span><span class="box-text-3">&nbsp;#初雪#</span></div></div></div>'
                $('.archivs-box').prepend(box1);
                $('.nth-1').click(function(event) {
                    $('.big-box').remove();
                });
                break;
            case 12:
                var box1='<div class="big-box"><div class="img-box2"><span class="nth-1">✖</span><img class="big-img" src="images/big13.jpg" alt=""><div class="box-text-bottom"><span class="box-text-1">R E C O R D<br>K E Y W O R D S</span><span class="box-text-2">&nbsp;&nbsp;#整合运动#&nbsp;</span><span class="box-text-3">&nbsp;#塔露拉#</span></div></div></div>'
                $('.archivs-box').prepend(box1);
                $('.nth-1').click(function(event) {
                    $('.big-box').remove();
                });
                break;
            case 13:
                var box1='<div class="big-box"><div class="img-box2"><span class="nth-1">✖</span><img class="big-img" src="images/big14.jpg" alt=""><div class="box-text-bottom"><span class="box-text-1">R E C O R D<br>K E Y W O R D S</span><span class="box-text-2">&nbsp;&nbsp;#源石#&nbsp;</span><span class="box-text-3">&nbsp;#天灾#</span></div></div></div>'
                $('.archivs-box').prepend(box1);
                $('.nth-1').click(function(event) {
                    $('.big-box').remove();
                });
                break;
            case 14:
                var box1='<div class="big-box"><div class="img-box1"><span class="nth-1">✖</span><img class="big-img" src="images/big15.jpg" alt=""><div class="box-text-bottom"><span class="box-text-1">R E C O R D<br>K E Y W O R D S</span><span class="box-text-2">&nbsp;&nbsp;#谢拉格#&nbsp;</span><span class="box-text-3">&nbsp;#全员集结#</span></div></div></div>'
                $('.archivs-box').prepend(box1);
                $('.nth-1').click(function(event) {
                    $('.big-box').remove();
                });
                break;
            case 15:
                var box1='<div class="big-box"><div class="img-box1"><span class="nth-1">✖</span><img class="big-img" src="images/big16.jpg" alt=""><div class="box-text-bottom"><span class="box-text-1">R E C O R D<br>K E Y W O R D S</span><span class="box-text-2">&nbsp;&nbsp;#龙门近卫局#&nbsp;</span><span class="box-text-3">&nbsp;</span></div></div></div>'
                $('.archivs-box').prepend(box1);
                $('.nth-1').click(function(event) {
                    $('.big-box').remove();
                });
                break;
        }
    });

// 验证码登录
	$('.footer-blue2').click(function(event) {
		$('.footer-main1').css('display', 'none');
	});
	$('.footer-blue4').click(function(event) {
		$('.footer-main1').css('display', 'block');
	});










})






















