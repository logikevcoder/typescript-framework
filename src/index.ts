import axios from 'axios';
import { User } from './Models/User';

const user = new User({ id: 1 });

user.fetch();
