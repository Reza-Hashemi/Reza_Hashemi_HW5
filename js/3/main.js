let personData = [
  {
    uid: 1,
    firstName: "Ali",
    lastName: "Mahdavi",
  },
  {
    uid: 2,
    firstName: "Reza",
    lastName: "Shahmardan",
  },
  {
    uid: 3,
    firstName: "Hassan",
    lastName: "Qolami",
  },
  {
    uid: 4,
    firstName: "Morteza",
    lastName: "Hamedani",
  },
  {
    uid: 5,
    firstName: "Sina",
    lastName: "Hejazi",
  },
  {
    uid: 6,
    firstName: "Hadi",
    lastName: "Sadri",
  },
];

let additionalPersonData = [
  {
    uid: 3,
    position: "UI Designer",
    city: "Biarjmand",
  },
  {
    uid: 1,
    position: "Back-End Develope",
    city: "Taleqan",
  },
  {
    uid: 2,
    position: "Front-End Developer",
    city: "Behbahan",
  },
  {
    uid: 4,
    position: "Devops",
    city: "Shiraz",
  },
  {
    uid: 6,
    position: "Server Admin",
    city: "Tehran",
  },
  {
    uid: 5,
    position: "Product Manager",
    city: "Hamedan",
  },
];

// result ===> [{
//     uid: 1,
//     firstName: "Ali",
//     lastName: "Mahdavi",
//     position: "Back-End Develope",
//     city: "Taleqan"
// },
// {

// }, ...]

let len = personData.length;

let result = [];

for (let i = 0; i < len; i++) {
  let single = {};
  for (let j = 0; j < len; j++) {
    if (personData[i].uid === additionalPersonData[j].uid) {
      single = Object.assign(personData[i], additionalPersonData[j]);
      result.push(single);
    }
  }
}

// console.log(result);
let personData = [
  {
    uid: 1,
    firstName: "Ali",
    lastName: "Mahdavi",
  },
  {
    uid: 2,
    firstName: "Reza",
    lastName: "Kazemi",
  },
  {
    uid: 3,
    firstName: "Hasan",
    lastName: "Ahmadi",
  },
  {
    uid: 4,
    firstName: "Hadi",
    lastName: "Ghasemi",
  },
];
let additionalPersonData = [
  {
    uid: 1,
    position: "Back-End Developer",
    city: "Taleqan",
  },
  {
    uid: 2,
    position: "Front-End Developer",
    city: "Tehran",
  },
  {
    uid: 3,
    position: "Full-Stack Developer",
    city: "Tabriz",
  },
  {
    uid: 4,
    position: "Android Developer",
    city: "Shiraz",
  },
];

let len = personData.length;

let result = [];

for(let i = 0;i<len;i++){
    let single  = {};
    for (let j = 0; j <len;j++) {
        if(personData[i].uid===additionalPersonData[j].uid){
           single = Object.assign(personData[i],additionalPersonData[j]);
           result.push(single);
        }
        
    };
    
};
// // // // // // // // // // // // // // // //

function read(array) {
  console.log(array);
  return;
}

read(result);
// // // // // // // // // // // // // // // //

function create(person) {
  for (let i = 0; i < result.length; i++) {
    if (result[i].uid === person.uid) {
      console.log("uid should be unique");
      return result;
    }
  }

  result.push(person);
  return result;
}

var ali = {
  uid: 4,
  firstName: "Ali",
  lastName: "Hoseini",
  position: "Front-developer",
  city: "Mashad",
};
create(ali);
console.log(result);

var ali = {
  uid: 5,
  firstName: "Ali",
  lastName: "Hoseini",
  position: "Front-developer",
  city: "Mashad",
};
create(ali);
console.log(result);
// // // // // // // // // // // // // // // //

function update(person) {
  for (let i = 0; i < result.length; i++) {
    if (result[i].uid === person.uid) {
      result[i].firstName = person.firstName;
      result[i].lastName = person.lastName;
      result[i].position = person.position;
      result[i].city = person.city;

      return result;
    }
  }
  console.log("uid not found");
  return result;
}

var ahmad = {
  uid: 4,
  firstName: "ahmad",
  lastName: "Hoseini",
  position: "Front-developer",
  city: "Ahvaz",
};
update(ahmad);
console.log(result);
// // // // // // // // // // // // // // //

function Delete(personuid) {
  for (let i = 0; i < result.length; i++) {
    if (result[i].uid === personuid) {
      const index = result.indexOf(result[i]);

      result.splice(index, 1);

      return result;
    }
  }
  console.log("uid not found");
  return result;
}
Delete(8);
console.log(result)