import axios from 'axios';

export const User={}
const listUser=[]
axios.get('https://jsonplaceholder.typicode.com/posts')
.then((response) =>{;
  console.log(response.data);
  listUser=response.data;
} )
;

export default listUser;