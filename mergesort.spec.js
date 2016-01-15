describe('Merge Sort', function(){
    it('handles an empty array', function(){
        expect( mergeSort([]) ).toEqual( [] );
    });
    it("able to merge two sorted arrays", function() {
        expect(merge([4,5,20,25],[1,10,15])).toEqual([1,4,5,10,15,20,25]);
    });
    it("able to merge two sorted arrays (w/1st bigger than 2nd), and more than 2 numbers from same array are pushed consecutively into results array", function() {
        expect(merge([4,5,6,7,20,25],[1,10,15])).toEqual([1,4,5,6,7,10,15,20,25]);
    });
    it("able to merge two sorted arrays (w/2nd bigger than 1st), and more than 2 numbers from same array are pushed consecutive into results array", function() {
        expect(merge([1,10,15],[4,5,6,7,20,25])).toEqual([1,4,5,6,7,10,15,20,25]);
    });
    it("able to split an even-numbered array into two arrays", function() {
        expect(splitter([1,4,5,10,15,20])).toEqual([[1,4,5],[10,15,20]]);
    });
    it('able to split an odd-numbered array into two arrays', function() {
        expect(splitter([1,4,5,10,15,20,100])).toEqual([[1,4,5,10],[15,20,100]]);
    });
    it('able to use mergeSort to sort array', function() {
        expect(mergeSort([110, 33, 50, 2, 4, 3])).toEqual([2, 3, 4, 33, 50, 110]);
    });
});

