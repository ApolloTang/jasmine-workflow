describe("jQuery.styleWords", function(){

    var $frag;

    beforeEach(function(){
        $frag = $(readFixtures('fragment.html'));
    });

    it("Plug-in should be available on the jQuery object", function(){
        expect($.fn.styleWords).toBeDefined();
    });

    it("Plug-in should be chainable", function(){
        expect( $frag.styleWords() ).toBe( $frag );
    });

    it("There should now be a span tag in html", function(){
        expect( $frag.styleWords().find('span').length).toBe( 1 );
    });

    it("Within the span there should only be one word by default", function(){
        expect( $frag.styleWords(1).find('span').text()).toBe('FirstWord');
    });

    it("Alow users to specify the nuber of words to wrap in span", function(){
        expect( $frag.styleWords(3).find('span').text()).toBe('FirstWord secondWord thirdWord');
    });
})
