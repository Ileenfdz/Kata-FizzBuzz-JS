// import { sum } from "../scripts/Example";
import {divisible, contain} from '../scripts/Example';

describe('Just an example to testing jest installation', () => {
    // test('should be two', () => {
    //     expect(sum(1,1)).toBe(2);
    // });

    test('Test should give its respective response', ()=>{
        expect(divisible(1)).toBe('1!');
    })

    test('Test should give Fizz!', ()=>{
        expect(divisible(3)).toBe('Fizz!');
    })

    test('Test should give Buzz!', ()=>{
        expect(divisible(5)).toBe('Buzz!');
    })

    test('Test should give FizzBuzz!', ()=>{
        expect(divisible(15)).toBe('FizzBuzz!');
    })

    test('Test should give Fizz!', ()=>{
        expect(contain(13)).toBe('Fizz!');
    })

    test('Test should give Buzz!', ()=>{
        expect(contain(45)).toBe('Buzz!');
    })

    test('Test should give FizzBuzz!', ()=>{
        expect(contain(53)).toBe('FizzBuzz!');
    })

    test('Test should give Fizz!', ()=>{
        expect(contain(31)).toBe('Fizz!');
    })

    test('Test should give Buzz!', ()=>{
        expect(contain(54)).toBe('Buzz!');
    })

    test('Test should give FizzBuzz!', ()=>{
        expect(contain(35)).toBe('FizzBuzz!');
    })
});