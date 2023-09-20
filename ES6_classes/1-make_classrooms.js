import ClassRoom from "./0-classroom.js";


export default function initializeRooms() {
  let x = new Array(3);   // Array de objetos que retornaremos
  let numbers = [19, 20, 34]  // Numeros a pasar a la clase 'ClassRoom'

  for (let i in numbers) {    // Iteramos en los números
        // console.log(numbers[i])
    let new_object = new ClassRoom(numbers[i]);
    x[i] = new_object;
        // console.log(x)
  }
  return x;
}
