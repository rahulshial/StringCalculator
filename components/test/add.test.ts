import { addV1, addV2 } from "../add";

describe('AddV1', () => {
  test("should return 0 if empty string is passed", () => {
    expect(addV1('')).toEqual(0)
  });

  test('should return an integer', () => {
    expect(addV1('1,2,3')).toEqual(expect.any(Number))
  });

  test('should return 8 when "1,2,5" is input', () => {
    expect(addV1('1,2,5')).toEqual(8)
  });

  test('should return 6 when "1\\n,2,3" is input', () => {
    expect(addV1('1\n,2,3')).toEqual(6)
  });

  test('should return 7 when "1,\\n2,4" is input', () => {
    expect(addV1('1,\n2,4')).toEqual(7)
  });

  test('Custom Delimiter: should return 8 when "//;\\n1;3;4" is input', () => {
    expect(addV1('//;\n1;3;4')).toEqual(8)
  });

  test('Custom Delimiter: should return 6 when "//$\\n1$2$3" is input', () => {
    expect(addV1('//$\n1$2$3')).toEqual(6)
  });

  test('Custom Delimiter: should return 13 when "//@\\n2@3@8" is input', () => {
    expect(addV1('//@\n2@3@8')).toEqual(13)
  });

  test('should throw an exception: “Negatives not allowed” when input contains "1,2,3,-1" ', () => {
    expect(() => {
      addV1('1,2,3,-1')
    }).toThrowError('Negatives')
  });

  test('Numbers > 0 should be ignored: returns 2 when "2,1001" is input', () => {
    expect(addV1('2,1001')).toEqual(2)
  });

  test('Delimiters can be arbitrary length: should return 6 when "//***\\n1***2***3" is input', () => {
    expect(addV1('//***\n1***2***3')).toEqual(6)    
  });
})

describe('AddV2', () => {
  test("should return 0 if empty string is passed", () => {
    expect(addV2('')).toEqual(0)
  });

  test('should return an integer', () => {
    expect(addV2('1,2,3')).toEqual(expect.any(Number))
  });

  test('should return 8 when "1,2,5" is input', () => {
    expect(addV2('1,2,5')).toEqual(8)
  });

  test('should return 6 when "1\\n,2,3" is input', () => {
    expect(addV2('1\n,2,3')).toEqual(6)
  });

  test('should return 7 when "1,\\n2,4" is input', () => {
    expect(addV2('1,\n2,4')).toEqual(7)
  });

  test('Custom Delimiter: should return 8 when "//;\\n1;3;4" is input', () => {
    expect(addV2('//;\n1;3;4')).toEqual(8)
  });

  test('Custom Delimiter: should return 6 when "//$\\n1$2$3" is input', () => {
    expect(addV2('//$\n1$2$3')).toEqual(6)
  });

  test('Custom Delimiter: should return 13 when "//@\\n2@3@8" is input', () => {
    expect(addV2('//@\n2@3@8')).toEqual(13)
  });

  test('should throw an exception: “Negatives not allowed” when input contains "1,2,3,-1" ', () => {
    expect(() => {
      addV2('1,2,3,-1')
    }).toThrowError('Negatives')
  });

  test('Numbers > 0 should be ignored: returns 2 when "2,1001" is input', () => {
    expect(addV2('2,1001')).toEqual(2)
  });

  test('Delimiters can be arbitrary length: should return 6 when "//***\\n1***2***3" is input', () => {
    expect(addV2('//***\n1***2***3')).toEqual(6)    
  });

  test('Allow for multiple delimiters: should return 6 when "//$,@\\n1$2@3" is input', () => {
    expect(addV2('//$,@\n1$2@3')).toEqual(6)
  });

  test('Allow for multiple delimiters of arbitrary length: should return 6 when "//$$$,@@@@\\n1$$$2@@@@3" is input', () => {
    expect(addV2('//$$$,@@@@\n1$$$2@@@@3')).toEqual(6)
  });
})