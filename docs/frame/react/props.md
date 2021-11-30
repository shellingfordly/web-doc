---
title: props
date: 2021-11-25 13:58:45
permalink: /pages/256f0b/
categories:
  - frame
  - react
tags:
  - 
---
## 观察者模式

```js
class EventBus {
  constructor() {
    this.bus = document.createElement("fakeelement");
  }

  addEventListener(event, callback) {
    this.bus.addEventListener(event, callback);
  }

  removeEventListener(event, callback) {
    this.bus.removeEventListener(event, callback);
  }

  dispatchEvent(event, detail = {}) {
    this.bus.dispatchEvent(new CustomEvent(event, { detail }));
  }
}

export default new EventBus();
```

- 使用

```js
import EventBus from './EventBus'
class ComponentA extends React.Component {
  componentDidMount() {
      EventBus.addEventListener('myEvent', this.handleEvent)
  }
  componentWillUnmount() {
      EventBus.removeEventListener('myEvent', this.handleEvent)
  }

  handleEvent = (e) => {
      console.log(e.detail.log)  //i'm zach
  }
}
class ComponentB extends React.Component {
  sendEvent = () => {
      EventBus.dispatchEvent('myEvent', {log: "i'm zach"}))
  }

  render() {
      return <button onClick={this.sendEvent}>Send</button>
  }
}
```

### EventBus

```js
function EventBus() {
  const subscriptions = {};
  this.subscribe = (eventType, callback) => {
    const id = Symbol("id");
    if (!subscriptions[eventType]) subscriptions[eventType] = {};
    subscriptions[eventType][id] = callback;
    return {
      unsubscribe: function unsubscribe() {
        delete subscriptions[eventType][id];
        if (
          Object.getOwnPropertySymbols(subscriptions[eventType]).length === 0
        ) {
          delete subscriptions[eventType];
        }
      },
    };
  };

  this.publish = (eventType, arg) => {
    if (!subscriptions[eventType]) return;

    Object.getOwnPropertySymbols(subscriptions[eventType]).forEach((key) =>
      subscriptions[eventType][key](arg)
    );
  };
}
export default EventBus;
```
