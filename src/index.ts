import axios from 'axios';
import { User } from './Models/User';

const user = new User({ name: 'new redord', age: 0 });

user.events.on('change', () => {
  console.log('change!');
});

user.events.trigger('change');
