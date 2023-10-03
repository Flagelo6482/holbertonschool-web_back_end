import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
  .then((values) => {
    const bodyPhoto = values[0].body;
    const firstName = values[1].firstName;
    const lastName = values[1].lastName;

    console.log(`${bodyPhoto} ${firstName} ${lastName}`);
  })
  .catch((error) => {
    console.log('Signup system offline');
  });
}
