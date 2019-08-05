const {longitud,maxList,minList,sumatoria,promedio,last,pop,invertir,ascender,fiboN,fibolist} = require('../src/index');

test('longitud to [1,2,3,0] => 4',() => {
    expect(longitud([1,2,3,0])).toBe(4);
});

test('maxList to [-1,-2,-3] => -1',() => {
    expect(maxList([-1,-2,-3])).toBe(-1);
});

test('minList to [1,2,3] => 1',() => {
    expect(minList([1,2,3])).toBe(1);
});

test('sumatoria to [1,3,2] => 6',() => {
    expect(sumatoria([1,3,2])).toBe(6);
});
test('promedio to [1,3,2] => 2',() => {
    expect(promedio([1,3,2])).toBe(2);
});

test('last to [1,2,3] => 3',() => {
    expect(last([1,2,3])).toBe(3);
});
test('pop to [1,2,3] gives [1,2]',() => {
    expect(pop([1,2,3])).toStrictEqual([1,2]);
});

test('invertir to [1,2,3] gives [3,2,1]',() => {
    expect(invertir([1,2,3])).toStrictEqual([3,2,1]);
});

test('ascender to [4,3,1,2] gives [1,2,3,4]',() => {
    expect(ascender([4,3,1,2])).toStrictEqual([1,2,3,4]);
});

test('fiboN to 4 => 3',() => {
    expect(fiboN(4)).toBe(3);
});

test('fibolist to 5 gives [1,1,2,3,5]',() => {
    expect(fibolist(5)).toStrictEqual([1,1,2,3,5]);
});
