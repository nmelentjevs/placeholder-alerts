# placeholder-alerts

> Small package to add font-awesome icon alerts inside the placeholder to show incorrect input on form validation

[![npm (scoped)](https://img.shields.io/badge/npm-v1.0.2-brightgreen.svg)](https://github.com/nmelentjevs/placeholder-alerts)
![npm (scoped)](https://img.shields.io/badge/install_size-1.3Kb-green.svg)
![npm (scoped)](https://img.shields.io/badge/build-passing-brightgreen.svg)

## Install

```bash
npm i placeholder-alerts
```

```js
import { createAlert } from '.placeholder-alerts';

createAlert(target, options);
```

## Usage

Choose an input box where you would like to show side alert:

#### Html

```html
<h2>Example of input target</h2>

<form id="form">
  <label>
    <input
      id="email"
      class="inputRequest formContentElement"
      type="text"
      placeholder="Your email address"
    />
  </label>
</form>
```

#### Javascript

```js
const email = document.getElementById('email');

createAlert(email);
```

##### Will display this:
![Alert icon](https://i.ibb.co/prFtbD5/Screen-Shot-2019-06-10-at-20-23-06-pm.png)

> Need Font Awesome to be supplied for it to display correctly.

```

  Usage
    createAlert(target, options)

    Options parameter should be an object of options:

    Options
        none             Alert will be shown with default bell icon

        iconClasses      String. Supply font-awesome icon classes to display an icon of your choice.

        time             Int. Time in ms after which the alert icon will dissapear from the page.
                         Default: icons will stay on the page.
```

#### Javascript

```js
const email = document.getElementById('email');

createAlert(email, {
  iconClasses: 'fas fa-exclamation-circle',
  time: 2000,
  style: {
    color: 'green'
  }
});
```

##### Will display this:

![alt text](https://media.giphy.com/media/JRt20Sr20J7CWDBIkP/giphy.gif)

## License

[MIT](http://vjpr.mit-license.org)

[npm-image]: https://img.shields.io/npm/v/live-xxx.svg
[npm-url]: https://npmjs.org/package/live-xxx
[travis-image]: https://img.shields.io/travis/live-js/live-xxx/master.svg
[travis-url]: https://travis-ci.org/live-js/live-xxx
[coveralls-image]: https://img.shields.io/coveralls/live-js/live-xxx/master.svg
[coveralls-url]: https://coveralls.io/r/live-js/live-xxx?branch=master
