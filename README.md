# String Calculator

## The String Calculator takes an input of numbers in a string and outputs a sum of the numbers. There can be custom delimiters, and of arbitrary length which need to be handled.

## Negative numbers will throw an exception

## Installation
```
yarn install
```
#
## Test
```
yarn test - uses jest for running test cases

yarn start - executes node ./components/add.ts - results are displayed on screen with test cases in add.ts
```
#
### Usage
```
const total = addV1('string of numbers to be added separated by commas')
OR
const total = addV2('string of numbers to be added separated by commas')
```
#
## NOTE:
1. addV1 - is able to handle most scenarios except nultiple delimiters and multiple delimiters of arbitrary length
2. addV2 - is able to handle all scenarios irrespective of the input

#
## Thank you for testing out my String Calculator - Rahul Shial
