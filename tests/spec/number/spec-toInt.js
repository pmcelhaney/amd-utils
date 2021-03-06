define(['src/number/toInt'], function (toInt) {

    describe('number/toInt()', function(){

        it('should remove decimal digits', function(){
            expect( toInt(1.25) ).toEqual(1);
            expect( toInt(0.75) ).toEqual(0);
            expect( toInt(-0.55) ).toEqual(0);
            expect( toInt(2.999) ).toEqual(2);
            expect( toInt(10.0001) ).toEqual(10);
            expect( toInt(-5.0001) ).toEqual(-5);
            expect( toInt(-9.99999) ).toEqual(-9);
        });
    });

});
