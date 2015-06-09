var sse50 = function () {
    return {
        initMenu: function () {
            var m = document.getElementById('sses50');
            if (!m) return;
            m.style.width = m.getElementsByTagName("ul")[0].offsetWidth + 1 + "px";
            var url = document.location.href.toLowerCase();
            var a = m.getElementsByTagName("a");
            var k = -1;
            var l = -1;
            var hasEnd = 0; 
            for (var i = 0; i < a.length; i++) {
                if (a[i].href && url.indexOf(a[i].href.toLowerCase()) != -1 && a[i].href.length > l) {
                    k = i;
                    l = a[i].href.length;
                }
                if (a[i].className == "end")
                    hasEnd = 1;
            }
            if (k == -1 && /:\/\/(?:www\.)?[^.\/]+?\.[^.\/]+\/?$/.test) {
                for (var i = 0; i < a.length; i++) {
                    if (a[i].getAttribute("maptopuredomain") == "true") {
                        k = i;
                        break;
                    }
                }
                if (k == -1 && a[0].getAttribute("maptopuredomain") != "false")
                    k = 0;
            }
            if (k > -1) {
                a[k].className = 'current';
            }
            l = a.length;
            if (hasEnd) l--;
            for (i = 0; i < l; i++) {
                a[i].onmouseover = function () {
                    for (j = 0; j < l; j++) {
                        a[j].className = '';
                    }
                    this.className = 'current';
                };
                a[i].onmouseout = function () {
                    for (j = 0; j < l; j++) {
                        a[j].className = '';
                        if (k > -1) {
                            a[k].className = 'current';
                        }
                    }
                };
            }
        }
    };
} ();

initializeGlobals();  

if ( insufficientSlideShowMarkup() ) {
  return;
}

 // Assert: there's at least one slide image.

if (globals.slideImages.length == 1) {
  return;
}

// Assert: there are at least two slide images.

initializeSlideShowMarkup();

globals.wrapperObject.addEventListener('click', toggleSlideShow, false);

if (globals.buttonObject) {
  globals.buttonObject.addEventListener('click', toggleSlideShow, false);
} 

startSlideShow();
$('.ppt li:gt(0)').hide();
$('.ppt li:last').addClass('last');
$('.ppt li:first').addClass('first');
$('#play').hide();
function start() {
	interval = setInterval( "forward()", 3000 );
}
var cur = $('.ppt li:first');
var interval;
function forward() {
	cur.fadeOut( 1000 );
	if ( cur.attr('class') == 'last' )
		cur = $('.ppt li:first');
	else
		cur = cur.next();
	cur.fadeIn( 1000 );
}
function forward() {
	cur.fadeOut( 1000 );
	if ( cur.attr('class') == 'last' )
		cur = $('.ppt li:first');
	else
		cur = cur.next();
	cur.fadeIn( 1000 );
}
function back() {
	cur.fadeOut( 1000 );
	if ( cur.attr('class') == 'first' )
		cur = $('.ppt li:last');
	else
		cur = cur.prev();
	cur.fadeIn( 1000 );
}
function goBack() {
	stop();
	back();
	start();
}
$('#fwd').click( function() {
	goFwd();
	showPause();
} );
$('#back').click( function() {
	goBack();
	showPause();
} );

$('#stop').click( function() {
	stop();
	showPlay();
} );

$('#play').click( function() {
	start();
	showPause();
} );
$(function() {
	start();
} );