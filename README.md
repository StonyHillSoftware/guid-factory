# guid-factory
Provides GUIDs via a `Guid` factory class and supporting `guid` TypeScript typing.  

Unlike similar typescript GUID/UUID libraries, all generated values exist as  strings at run time, but still are able to be strongly-typed at build time due to the typescript flavoring.

The benefit is that the `guid` typing needn't be instantiated as a new object, which plays nicer with server supplied values, as serialization/parsing from json isn't required.

## Installation
`npm i guid-factory`

## Usage
Import or require `guid` and `Guid` from 'guid-factory'

    import { guid, Guid } from 'guid-factory'; // guid is the type, Guid is the factory
    
    const myId: guid = Guid.newGuid();
    
    const isValid = Guid.isValid(myId);

    '00000000-0000-0000-0000-000000000000' === Guid.empty() // true

## Guid class members

|Member     |Description 
|---        |---
|newGuid()  |Generates a random, hyphenated **guid** value
|empty()    |Generates a new **guid**, with the empty/least possible value
|full()     |Generates a new **guid**, with the full/greatest possible value
|isEmpty()  |Evaluates whether the supplied **guid** is equal to the empty/least possible value
|isFull()   |Evaluates whether the supplied *guid* is equal to the empty/greatest possible value
|isValid()  |Evaluates whether the supplied value is a valid **guid**


## Attribution
This library essentially marries two of the answers on this stack overflow question: https://stackoverflow.com/questions/49432350/how-to-represent-guid-in-typescript



## License
*MIT License*

Copyright (c) 2021 [Stony Hill Software LLC](https://stonyhillsoftware.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
