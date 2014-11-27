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

    it("Plug-in should be chainable", function(){
        // console.log($frag.styleWords());
    });
})
