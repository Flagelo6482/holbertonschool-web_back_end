export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    promise
    .then((response) => {
      console.log('Got a response from the API');
      resolve({ status: 200, body: 'success' });
    })
    .catch((error) => {
      console.log('Got a response from the API');
      return new Error;
    });
  })
}
