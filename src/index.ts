import { User } from './Models/User';

const user = new User({ name: 'myName', age: 33 });

user.set({ name: 'Kevin' });
console.log(user.get('name'));
console.log(user.get('age'));
