class Polygon {
    constructor(sides) {
        this.sides = sides
        this.count = this.countSides
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
    // use reduce to get the sum of all the sides
        return this.sides.reduce((acc, val) => {
            return acc + val;
        }, 0)
    }

    
}

class Triangle extends Polygon {
    
    get isValid() {
        // check that sides is an array
        if (!Array.isArray(this.sides)) return
        // check that there are three sides
        if (this.count !== 3) return
        // do math to check triangle validity
        let side1 = this.sides[0]
        let side2 = this.sides[1]
        let side3 = this.sides[2]
        return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
    }
}

class Square extends Polygon {

    get isValid() {
      if (!Array.isArray(this.sides)) return;
      if (this.count !== 4) return;
      let side1 = this.sides[0]
      let side2 = this.sides[1]
      let side3 = this.sides[2]
      let side4 = this.sides[3]
      return ((side1 === side2) && (side1 === side3) && (side1 === side4))
    }
  
    get area() {
      if (!Array.isArray(this.sides)) return;
      if (this.count !== 4) return;
      return this.sides[0] * this.sides[0]
    }
}