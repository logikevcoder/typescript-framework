type Callback = () => void;

export class Eventing {
  // use this syntax to tell typescript we dont know yet what type of callback will be used
  // All of the events that may be called will always point to the callback
  events: { [key: string]: Callback[] } = {};

  on(eventName: string, callback: Callback): void {
    // guaranteed to be an array or a defined array callback eventName
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach((callback) => callback());
  }
}
