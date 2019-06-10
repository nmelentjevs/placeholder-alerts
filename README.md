# placeholder-alerts

> Small package to add font-awesome icon alerts inside the placeholder to show incorrect input on form validation.
> Needs Font Awesome to be supplied for it to display correctly.

> [![npm (scoped)](https://img.shields.io/badge/npm-v1.0.11-brightgreen.svg)](https://github.com/nmelentjevs/placeholder-alerts) ![npm (scoped)](https://img.shields.io/badge/install_size-1.3Kb-green.svg) ![npm (scoped)](https://img.shields.io/badge/build-passing-brightgreen.svg)

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
    <input id="email" type="text" placeholder="Your email address" />
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

```

  Usage
    createAlert(target, options)

    Options parameter should be an object of options:

    Options
        none             Alert will be shown with default bell icon

        iconClasses      String. Supply font-awesome icon classes to display an icon of your choice.

        time             Int. Time in ms after which the alert icon will dissapear from the page.
                         Default: icons will stay on the page.

        style            Object. CSS Object containing any styled to be applied to the icon.

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

![Remove after delay](https://media.giphy.com/media/JRt20Sr20J7CWDBIkP/giphy.gif)

## Form Validation Example

#### Javascript

```js
  const validateInput = (emailInput, phoneInput, passwordInput) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailInput == '' && phoneInput == '' && passwordInput == '') {
      createAlert([email, phone, password], {
        iconClasses: 'fas fa-exclamation',
        time: 1500,
        style: {
          color: 'red'
        }
      });
      return 'Please fill all the fields';
    }

    if (re.test(String(emailInput).toLowerCase()) !== true) {
      createAlert(email, { time: 2000 });
      return 'Please enter a correct email';
    }

    if (passwordInput.length < 4) {
      createAlert(password, {
        time: 2000
      });
      return 'Your password must be at least 4 characters';
    }

    if (typeof phoneInput == 'string') {
      createAlert(phone, {
        time: 2000
      });
    }
    return true;
  };
};
```

#### Html

```html
<form id="form">
  <label>
    Email
    <input
      id="email"
      class="inputRequest formContentElement"
      type="text"
      placeholder="Your email address"
    />
  </label>
  <label>
    Phone number
    <input
      id="phone"
      class="inputRequest formContentElement"
      type="text"
      placeholder="Your mobile number"
    />
  </label>
  <label>
    Password
    <input
      id="password"
      class="inputRequest formContentElement alert"
      type="password"
      placeholder="At least 4 characters"
    />
  </label>
  <label id="error">
    <span> </span>
  </label>
  <div>
    <button id="send-button" type="submit">Send</button>
    <button id="reset-button" type="submit">Reset</button>
  </div>
</form>
```

##### If submitted without filling the fields validation will trigger alert on all inputs:

![More complex example](https://media.giphy.com/media/IgjxZ0zXOancEUig0A/giphy.gif)

## License

[MIT](http://vjpr.mit-license.org)

[npm-image]: https://img.shields.io/npm/v/live-xxx.svg
[npm-url]: https://npmjs.org/package/live-xxx
[travis-image]: https://img.shields.io/travis/live-js/live-xxx/master.svg
[travis-url]: https://travis-ci.org/live-js/live-xxx
[coveralls-image]: https://img.shields.io/coveralls/live-js/live-xxx/master.svg
[coveralls-url]: https://coveralls.io/r/live-js/live-xxx?branch=master

