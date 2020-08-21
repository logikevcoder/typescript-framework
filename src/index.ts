import axios from 'axios';
import { User } from './Models/User';

const user = new User({ name: 'new redord', age: 0 });

user.set({ name: 'kevin', age: 3333 });

user.save();
