describe('Merge Sort', function(){
    it('handles an empty array', function(){
        expect( mergeSort([]) ).toEqual( [] );
    });
    it("able to merge two arrays", function() {
        expect(merge([4,5,20],[1,10,15])).toEqual([1,4,5,10,15,20]);
    });
    it("able to split an even-numbered array into two arrays", function() {
        expect(splitter([1,4,5,10,15,20])).toEqual([[1,4,5],[10,15,20]]);
    });
    it('able to split an odd-numbered array into two arrays', function() {
        expect(splitter([1,4,5,10,15,20,100])).toEqual([[1,4,5,10],[15,20,100]])
    })
});

