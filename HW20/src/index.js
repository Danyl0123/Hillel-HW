import "./style.css";

function boo() {
  let i = 0;
  return {
    next: function () {
      let value;
      if (i < 3) {
        i += 1;
        value = i;
        if (i === 1) {
          console.log(`Start`);
        }
        return { value: value, done: false };
      } else {
        const result = { value: value, done: true };
        i = 0;
        console.log(`finish`);
        return result;
      }
    },
  };
}

const iterated = boo();
console.log(iterated.next());
console.log(iterated.next());
console.log(iterated.next());
