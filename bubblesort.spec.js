describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });
    it("passes test with 1 element", function() {
    	expect( bubbleSort([2])).toEqual( [2]);
    });
    it("passes test with 2 element", function() {
    	expect( bubbleSort([2,-5])).toEqual( [-5,2]);
    });
    it("passes test with 3 elements", function() {
    	expect( bubbleSort([2,3,1])).toEqual( [1,2,3]);
    });
    it("passes test with 5 elements", function() {
    	expect( bubbleSort([24,33,110,4,0])).toEqual([0,4,24,33,110]);
    });
});

