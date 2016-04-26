
# numberly [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/numberly.svg)](https://www.npmjs.com/package/numberly) [![Downloads](https://img.shields.io/npm/dt/numberly.svg)](https://www.npmjs.com/package/numberly) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Get a specific number for an input string and number range.

## :cloud: Installation

```sh
$ npm i --save numberly
```


## :clipboard: Example



```js
const numberly = require("numberly");

// Get a pseudo number hash for this string
console.log(numberly("Hello World"));
// => 1052

// Get it again, for the same string (it should be equal)
console.log(numberly("Hello World"));
// => 1052

// Now, let's do the same for this string
console.log(numberly("Hello Mars!"));
// => 968

// Limit the number between 0 and 20
console.log(numberly("Hello Mars!", 0, 20));
// => 8

// Limit the number between 10 and 20
console.log(numberly("Hello Mars!", 10, 20));
// => 18
```

## :memo: Documentation


### `numberly(input, min, max)`

#### Params
- **String** `input`: The input string.
- **Number** `min`: An optional minimum range.
- **Number** `max`: An optional maximum range.

#### Return
- **Number** The pseudo-hash for the input string, as number.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`engine-builder`](https://github.com/IonicaBizau/engine-parser) (by jillix)—Engine composition parser.
## :sparkles: Related

 - [`modulo-n`](https://github.com/IonicaBizau/modulo-n)



## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
