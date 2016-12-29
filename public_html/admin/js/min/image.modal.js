(function ($) {
    'use strict';

    var ImageModal = function (button, options) {
        this.button = $(button);

        this.settings = $.extend({
            url: 'index.php?image-browser/index',
            title: 'Image Browser'
        }, options);

        var self = this;

        this.actionRenderModal = function () {
            if ($('body').find('#image-browser-modal').length === 0) {
                var modalHeader = '<div class="modal-header">'
                    + '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'
                    + '<span aria-hidden="true">&times;</span>'
                    + '</button>'
                    + '<h4 class="modal-title">' + this.settings.title + '</h4>'
                    + '</div>';
                var modalBody = '<div class="modal-body"></div>';
                var modalContent = '<div class="modal-content">'
                    + modalHeader
                    + modalBody
                    + '</div>';
                var modalDialog = '<div class="modal-dialog" role="document">'
                    + modalContent
                    + '</div>';
                var modal = '<div class="image-browser-modal has-footer modal fade" id="image-browser-modal" tabindex="-1" role="dialog" aria-labelledby="image-browser-modal">'
                    + modalDialog
                    + '</div>';
                jQuery('body').append(modal);
            }
        };

        this.actionShowModal = function () {
            this.button.on('click', function (e) {
                e.preventDefault();
                var $modal = $('body').find('#image-browser-modal');

                $modal.find('.modal-body').html('<iframe src="' + self.settings.url + '"></iframe>');
                $modal.modal('show');
            });
        };

        this.actionHideModal = function () {
            $(document).on('hide.bs.modal', '#image-browser-modal', function(){
                var $this = $(this);

                $this.find('.modal-body').html('');
            });
        };

        this.actionInit = function () {
            this.actionRenderModal();
            this.actionShowModal();
            this.actionHideModal();
        };

        return this.actionInit();
    };

    $.fn.imagemodal = function (options) {
        return this.each(function() {
            var element = $(this);

            if (element.data('imagemodal')) {
                return;
            }

            var imagemodal = new ImageModal(this, options);

            element.data('imagemodal', imagemodal);
        });
    }
}(jQuery));
