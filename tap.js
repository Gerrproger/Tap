(function($){
    $.fn.tap = function(callback, options){
        var defaults = {
            delay: 200,
            offset: 4
        },
        settings = $.extend({}, defaults, options);
        return this.each(function(){
            var $el = $(this),
            f = null;
            if(callback == 'off'){
                $el.removeData('tap_f');
                return;
            }
            if(typeof callback != 'function'){
                f = $el.data().tap_f;
                if(f) f.map(function(n){ n.call($el[0]); });
                return;
            }
            f = $el.data().tap_f;
            if(!f) {
                f = [];
                var first = true;
            }
            f.push(callback);
            $el.data({tap_f: f});
            if(!first) return;
            $el.on('touchstart', function(e){
                e = e.originalEvent;
                if(e.touches>1) $el.data({tap: false});
                var t = Date.now ? Date.now() : +new Date();
                $el.data({tap: true, tap_time: t, tap_x: e.touches[0].pageX, tap_y: e.touches[0].pageY});
            }).on('touchend', function(e){
                e = e.originalEvent;
                var t = Date.now ? Date.now() : +new Date(),
                data = $el.data();
                if(data.tap==true && data.tap_time+settings.delay >= t && ok(data.tap_x, e.changedTouches[0].pageX) && ok(data.tap_y, e.changedTouches[0].pageY) && data.tap_f) data.tap_f.map(function(n){ n.call($el[0]); });
            });
        });
        function ok(n, m){
            return (n+settings.offset>m && n-settings.offset<=m);
        }
    };
})(jQuery);