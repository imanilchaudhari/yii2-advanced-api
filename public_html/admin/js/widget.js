(function ($) {
    "use strict";

    $('.widget-available-form').on('submit', function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        var $this = $(this),
            location = $this.find('.widget-location'),
            parent = $('#widget-space-' + location.val());

        $.ajax({
            url: $this.data('url'),
            type: 'POST',
            data: $this.serialize(),
            success: function (response) {
                parent.find('.widget-order').append(response);
                parent.removeClass('collapsed-box');
                //$.AdminLTE.boxWidget.activate()
                 window.location.href = window.location.href; //This is a possibility
window.location.reload(); //Another possiblity
history.go(0); //And another

            }
        })
    });

    $(document).on('submit', '.widget-active-form', function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        var $this = $(this),
            boxTitle = $this.find('.box-title'),
            title = boxTitle.html(),
            loading = '<i class="fa fa-spinner fa-pulse"></i>';

        $.ajax({
            url: $this.data('url'),
            type: 'POST',
            beforeSent: boxTitle.html(loading),
            data: $this.serialize(),
            success: function () {
                boxTitle.html(title)
            }
        })
    });

    $(document).on('click', '.ajax-delete-widget-btn', function () {
        var $this = $(this);

        $.ajax({
            url: $this.data('url'),
            type: 'POST',
            success: function () {
                $this.closest('.box').remove();
            }
        })
    });

    $('.widget-order').sortable({
        update: function () {
            var ids = [{}],
                $this = $(this);

            $this.find('.widget-active-form').each(function () {
                ids.push($(this).data('id'));
            });
            $this.closest('.widget-space').find('.widget-order-field').val(JSON.stringify(ids));
        }
    });

    $('.widget-order-form').on('submit', function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        var ids = [{}],
            $this = $(this);

        if ($(this).find('.widget-order-field').val() !== '') {
            ids = $.parseJSON($(this).find('.widget-order-field').val());
        }

        $.ajax({
            url: $this.data('url'),
            data: {ids: ids, _csrf: yii.getCsrfToken()},
            type: 'POST',
            beforeSent: $this.find('.btn').html('<i class="fa fa-spinner fa-pulse"></i> ' + $this.find('.btn').html()),
            success: function () {
                $this.find('.fa-spinner').remove();
            }
        })
    });

}(jQuery));