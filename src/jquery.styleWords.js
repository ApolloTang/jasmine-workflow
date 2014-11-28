$.fn.styleWords = function(){

    return this.each(function() {

        var $el = $(this);

        $el.html(function(){

            // put all word in array
            var words = $el.text().split(' ');

            // place the first word in span tag and wrap it in jQuery object
            // words array now is one word less
            var $firstWord_inSpan = $('<span>').text(words.shift());

            // strip the jQuery wrap to get string
            firstWord_inSpan = $('<temp-wrapper>').append($firstWord_inSpan).html();

            var allText_1stWordInSpan =  [firstWord_inSpan].concat(words).join(' ');

            return allText_1stWordInSpan;

        });

    });

}

