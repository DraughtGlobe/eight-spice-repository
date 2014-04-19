(function() {
    function loadScript(url, callback) {
        var script = document.createElement("script")
        script.type = "text/javascript";

        if (script.readyState) { //IE
            script.onreadystatechange = function() {
                if (script.readyState == "loaded" || script.readyState == "complete") {
                    script.onreadystatechange = null;
                    var j = jQuery.noConflict();
                    callback(j);
                }
            };
        } else { //Others
            script.onload = function() {
                var j = jQuery.noConflict();
                callback(j);
            };
        }

        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
    }
    loadScript("https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function($) {
        $(document).ready(function() {
            $('#pageLogo a').removeAttr('href').mouseover(function(){
                $('#pageHead').stop().animate('100', {
                    width:'421px',
                    opacity:'1.00'
                });
            }).mouseleave(function(){
                $('#pageHead').stop.animate('100', {
                    width: '22px',
                    opacity:'0.10'
                });
            });
        });
    });
})();


