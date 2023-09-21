export default class HolbertonCourse {
    constructor(name, length, students) {
	try {
            if (typeof name !== "string") {
                throw new TypeError("Name must be a string!");
            }
            this._name = name;
        }
        catch(error) {
            console.log(error);
        }
        try {
            if (typeof length !== "number") {
                throw new TypeError("Length must be a number");
            }
            this._length = length;
        }
        catch(error) {
            console.log(error);
        }
	try {
            if (Array.isArray(students) && students.every((elemento) => typeof elemento !== "string")) {
                throw new TypeError("Students must be a string");
            }
            this._students = students;
        } catch (error) {
            console.error(error);
        }
    }

    get name() {
        return this._name;
    }
    set name(value) {
        try {
            if (typeof value !== "string") {
                throw new TypeError("Name must be a string!");
            }
            this._name = value;
        }
        catch(error) {
            console.log(error);
        }
        
    }

    get length() {
        return this._length;
    }
    set length(value) {
        try {
            if (typeof value !== "string") {
                throw new TypeError("Length must be a number");
            }
            this._length = value;
        }
        catch(error) {
            console.log(error);
        }
    }

    get students() {
        return this._students;
    }
    set students(value) {
	try {
            if (typeof value !== "string") {
                throw new TypeError("Students must be a string");
            }
            this.students.push(value);
        }
        catch(error) {
            console.log(error);
        }
    }
}
