$.fn.styleWords = function(numWords){

    numWords = numWords || 1;

    return this.each(function() {

        var $el = $(this);

        $el.html(function(){

            // put all word in array
            var words_Array = $el.text().split(' ');

            // place 'numWords' of words in span tag and wrap it in jQuery object
            // words array now is one word less
            var wordsToPutInSpan_Array =  words_Array.splice(0, numWords);
            var wordsToPutInSpan =  wordsToPutInSpan_Array.join(' ');
            var $words_inSpan = $('<span>').text(wordsToPutInSpan);

            // strip the jQuery wrapper to get string
            words_inSpan = $('<temp-wrapper>').append($words_inSpan).html();

            var result =  [words_inSpan].concat(words_Array).join(' ');
            return result;

        });

    });

}

