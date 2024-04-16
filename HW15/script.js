class Person {
  gender;
  name;
  constructor(gender, name) {
    this.gender = gender;
    this.name = name;
  }
}
class Flat {
  numberOfResidents = [];
  addResident(person) {
    this.numberOfResidents.push(person);
    return this.numberOfResidents;
  }
}
class House {
  arrOfFlats = [];
  maxNumberOfFlats;
  constructor(maxNumberOfFlats) {
    this.maxNumberOfFlats = maxNumberOfFlats;
  }
  addFlat(flat) {
    if (this.arrOfFlats.length < this.maxNumberOfFlats) {
      this.arrOfFlats.push(flat);
      return this.arrOfFlats;
    }
    console.log(`Будинок вже переповнений квартирами`);
  }
}

const dania = new Person(`man`, `Danil`);
const andrei = new Person(`man`, `Andrei`);
const alexey = new Person(`man`, `Alexey`);

const flat1 = new Flat();
const flat2 = new Flat();
const flat3 = new Flat();

const house1 = new House(2);
house1.addFlat(flat1);
house1.addFlat(flat2);
// house1.addFlat(flat3);

flat1.addResident(dania);
flat2.addResident(andrei);
flat3.addResident(alexey);
