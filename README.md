requirejs-basketjs
==================

Load requirejs modules using basket.js!


Usage
==
Load `basket.js` and `require.js` libraries before running `basket-loader.js`.

Excluding Modules
==
There may some cases where you do not wish to use basket.js to load a module.
This may be because of a CORS issue or the module you are requesting may not always be consistent upon each request (e.g. Google Maps).
In these cases, it is possible to exclude them by specifying the module names in the requirejs config. An example:

```` javascript
{
    "path": {
        "gmaps": "https://maps.googleapis.com/maps/api/js?sensor=false"
    },
    "basket": {
        "exclude": ["gmaps"]
    }
}
````

Unsupported Features
==
- Path fallback is currently not supported
- Error reporting is slightly differently if a resource is not found (e.g. 404), compared to the standard error

License
==

The MIT License (MIT)

Copyright (c) 2013 Andrew Wakeling <andrew.wakeling@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.