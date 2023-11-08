class Vector {
    constructor(coordinates) {
        this.vector = coordinates;
    }
    toString() {
        return '(' + this.vector.join(',') + ')'
    }
    add(secondVector) {
        if (secondVector.vector.length !== this.vector.length)  throw new Error;
        let arr = [] ;
        for (let i = 0; i < this.vector.length; i++) {
            arr[i] = this.vector[i] + secondVector.vector[i];
        }
        return new Vector(arr)
    }
    subtract(secondVector) {
        if (secondVector.vector.length !== this.vector.length) throw new Error;
        let arr = [] ;
        for (let i = 0; i < this.vector.length; i++) {
            arr[i] = this.vector[i] - secondVector.vector[i];
        }
        return new Vector(arr)
    }
    dot(secondVector) {
        if (secondVector.vector.length !== this.vector.length)  throw new Error;
        let sum = 0;
        for (let i = 0; i < this.vector.length; i++) {
            sum += this.vector[i] * secondVector.vector[i];
        }
        return sum
    }
    norm() {
        let norm = 0;
        for (let i = 0; i < this.vector.length; i++) {
            norm += Math.pow(this.vector[i], 2)
        }
        return Math.sqrt(norm);
    };

    equals(secondVector) {
        if (secondVector.vector.length !== this.vector.length) return false
        for (let i = 0; i < secondVector.vector.length; i++) {
            if (secondVector.vector[i] !== this.vector[i])  return false
        }
        return true;
    }


}

let a = new Vector([1, 2, 3]);
let b = new Vector([3, 4, 5]);


let c = (a.add(b)).equals(new Vector([4, 6, 8]))
console.log(c)


