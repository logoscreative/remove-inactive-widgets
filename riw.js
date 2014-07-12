(function( $ ){
    $(document)
    .ready(
        function () {

        var 
            wp_inactive_widgets = $('#wp_inactive_widgets'),
            btn                 = $('<a href="#" class="button">Remove Inactive Widgets</a>')
                                        .insertAfter( wp_inactive_widgets );

            btn.click(
                function (e) {
                    e.preventDefault();
                    $confirmmessage = 'This will delete all inactive widgets. You cannot undo.';
                    if ( confirm($confirmmessage) ) {
                        $.post(
                            ajaxurl, {
                                action          : 'riw_async',
                                riw_asyncnonce  : $('#riw_asyncnonce').val()
                            },
                            function (data) {
                                wp_inactive_widgets.find('.widget').each(function(){
                                    $(this).hide();
                                });
                            }
                        );
                    }
                 }
             );
        }
    );
})(jQuery);