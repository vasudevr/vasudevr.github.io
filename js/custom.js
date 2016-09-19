<script>
    (function($){
        $(window).on("load",function(){
            $(".content").mCustomScrollbar();

            $(".content").mCustomScrollbar({
              axis:"x" // horizontal scrollbar
            });

            $(".content").mCustomScrollbar({
              axis:"yx" // vertical and horizontal scrollbar
            });
            $(".content").mCustomScrollbar({
              theme:"dark"
            });
        });
    })(jQuery);


</script>
