import { User } from './Models/User';

const user = new User({ name: 'myName', age: 33 });

user.set({ name: 'Kevin' });

user.on('change', () => {
  console.log('Changed #1');
});

user.on('save', () => {
  console.log('save was called');
});

user.trigger('save');
