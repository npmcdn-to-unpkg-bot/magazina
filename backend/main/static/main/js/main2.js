

$(window).bind("popstate", function(e) {
    //var link = window.location.hash.replace("#", "/");
    alert(3)
});

function onPushState(callback) {
    (function(pushState) {
       history.pushState = function() {
           pushState.apply(this, arguments);
           callback.apply(window, arguments);
       };
    })(history.pushState);
}


	$(document).ready(function(){
			 $(".nano").nanoScroller();
		});



function getScrollbarWidth() {
    var outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.width = "100px";
    outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

    document.body.appendChild(outer);

    var widthNoScroll = outer.offsetWidth;
    // force scrollbars
    outer.style.overflow = "scroll";

    // add innerdiv
    var inner = document.createElement("div");
    inner.style.width = "100%";
    outer.appendChild(inner);

    var widthWithScroll = inner.offsetWidth;

    // remove divs
    outer.parentNode.removeChild(outer);

    return widthNoScroll - widthWithScroll;
}

function scrollbarIsVisible() {
    return document.body.scrollHeight > document.body.clientHeight;
}



$(".product").on("click", function(event) {
    event.preventDefault();
    var url = $(this).attr("href");
    history.pushState(null, null, url);
    $.ajax({
        cache: false,
        async: false,
        url: url,
        success: function(data){
            if(data != ""){
                $("body").html(data);
            }
        }
    });
    return false;
});

(function($) {
    $.fn.hasScrollBar = function() {
        return this.get(0).scrollHeight > this.height();
    }
})(jQuery);


$("#cart-viewer").hover(
    function(){
        if($("html").hasScrollBar()) {
            document.body.style.overflow = "hidden";
            this.style.right = getScrollbarWidth() + "px";
        }
    },
    function(){
        if($("html").hasScrollBar()){
            document.body.style.overflow = "inherit";
            this.style.right = 0
        }
});
