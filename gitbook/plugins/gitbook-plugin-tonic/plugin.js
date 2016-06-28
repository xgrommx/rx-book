require(["gitbook", "jQuery"], function(gitbook, $) {
    function bindNotebook() {
        var $pre = $(this);
        var source = $pre.text();
        var readOnly = $pre.hasClass('readonly');
        var nodeVersion = $pre.data('node-version');

        var $div = $('<div>');
        $pre.replaceWith($div);

        var notebook = Tonic.createNotebook({
            element: $div.get(0),
            source: source,
            readOnly: readOnly,
            nodeVersion: nodeVersion,
            onLoad: function(){}
        });
    }

    gitbook.events.bind("page.change", function() {
        $('.pg-tonic').each(bindNotebook);
    });
});
