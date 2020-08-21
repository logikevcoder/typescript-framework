import axios, { AxiosResponse } from 'axios';
import { User } from './User';

export class Sync {
  fetch(): void {
    const id = this.get('id');
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      });
  }

  save(): void {
    const id = this.get('id');

    if (id) {
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      axios.post('http://localhost:3000/users', this.data);
    }
  }
}
