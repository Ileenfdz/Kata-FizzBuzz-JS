// import { sum } from "../scripts/Example";
import {multiply} from '../scripts/Example';

describe('Just an example to testing jest installation', () => {
    // test('should be two', () => {
    //     expect(sum(1,1)).toBe(2);
    // });
    test('Should be four', ()=>{
        expect(multiply(2,2)).toBe(4);
    })
});