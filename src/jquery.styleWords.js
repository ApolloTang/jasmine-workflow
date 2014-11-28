$.fn.styleWords = function(){

    var testThis = this.each(function() {
        var $el = $(this);

        // put all word in array
        var words = $el.text().split(' ');

        // place the first word in span tag and wrap it in jQuery object
        // words array now is one word less
        var $firstWord_inSpan = $('<span>').text(words.shift());

        firstWord_inSpan = $('<wrapper>').append($firstWord_inSpan).html();

        $el.html(function(){
            return  [firstWord_inSpan].concat(words).join(' ');
        });

    });

    debugger;
    return testThis;
}

