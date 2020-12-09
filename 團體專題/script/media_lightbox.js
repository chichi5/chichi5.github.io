var lightboxHTML = '<div class="lightbox">' +
    '<div class="lightbox-inner">' +
    '<div class="lb-content">Loading...' +
    '</div>' +
    '</div>' +
    '</div>';

$("body").on("click", ".lightbox-button", function () {
    var contentURL = $(this).parents(".lightbox-thumb").attr("data-lb-content");
    var contentType = $(this).parents(".lightbox-thumb").attr("data-lb-content-type");

    if (contentType === "video") {
        var contentHTML = '<div class="video-wrapper"><iframe width="560" height="349" src="' + contentURL + '" frameborder="0" allowfullscreen></div>';

        $("html").prepend(lightboxHTML);
        $(".lightbox").animate({
            opacity: 1
        },
            200, function () {
                // Animation complete.
                $(".lb-content").html(contentHTML);
            });

    }
});

// handle clicking dark part of lighbox to cancel
$("html").on("click", ".lightbox-inner", function () {
    $(".lightbox").animate({
        opacity: 0
    },
        200, function () {
            // Animation complete.
            $(".lightbox").remove();
        });

});