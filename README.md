# use-modal

Extra simple react hook for easily works with URL-oriented modals. Works with any client router.

## Installation

`yarn add @breadhead/use-modal`

> Warning! Lib uses [`@breadhead/use-query`](https://github.com/breadhead/use-query) for handling query. Please, install and setup it.

### Usage

It provides `<ModalContextProvider />`, which makes the lib available to the rest of your app:.

```js
// ModalContextApp.js
import { ModalContextProvider } from "@breadhead/use-modal";
import App from './App';

export class QueryContextApp {
  public render() {
    const pushRoute = (url) => {
      // change route by any router
    }

    return (
      <ModalContextProvider pushRoute={pushRoute}>
        <App />
      </ModalContextProvider>
      );
  };
}
```

Now, you can use `useModalState` and `useModalActions` in any place of your app.

```js
// ContactsModal.jsx
import { useModalState, useModalActions } from '@breadhead/use-modal'

const MODAL_KEY = 'myUniqKey'

export const ContactsModal = () => {
  const modalValue = useModalState(MODAL_KEY)
  const { open, close } = useModalActions(MODAL_KEY)

  // ...some code

  return (
    <>
      <button onClick={() => open('42')}>OPEN</button>

      {!!modalValue && (
        <div>
          <h1>It is modal {modalValue}!</h1>
          <button onClick={close}>CLOSE</button>
        </div>
      )}
    </>
  )
}
```

If you want use it with SSR, just read the documentation of [`@breadhead/use-query`](https://github.com/breadhead/use-query).

## Without history

In case of you want to hide routes history from user (for prevent going on previous page, for example) you can use withoutHistory prop:

1. pass the replaceRoute method to your `<ModalContextProvider />` like this:

```js
// ModalContextApp.js
import { ModalContextProvider } from "@breadhead/use-modal";
import App from './App';

export class QueryContextApp {
  public render() {
    const pushRoute = (url) => {
      // change route by any router
    }
    const replaceRoute = (url) => { // THIS METHOD!
      // replace route by any route
    }

    return (
      <ModalContextProvider 
          pushRoute={pushRoute} 
          replaceRoute={replaceRoute} // PASS HERE!
      > 
        <App />
      </ModalContextProvider>
      );
  };
}
```

2. define the required modals without history
- go to the place where useModalActions is used
- pass true as second argument to useModalActions

like this:

```js
// ContactsModal.jsx
import { useModalState, useModalActions } from '@breadhead/use-modal'

const MODAL_KEY = 'myUniqKey'

export const ContactsModal = () => {
  const modalValue = useModalState(MODAL_KEY)
  const { open, close } = useModalActions(MODAL_KEY, true) // HERE!

  // ...some code

  return (
    <>
      <button onClick={() => open('42')}>OPEN</button>

      {!!modalValue && (
        <div>
          <h1>It is modal {modalValue}!</h1>
          <button onClick={close}>CLOSE</button>
        </div>
      )}
    </>
  )
}
```
and after click on 'prev' button in browser, you will find yourself on second last page