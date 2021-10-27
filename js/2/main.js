let personData = [
    {
        uid: 1,
        firstName: "Ali",
        lastName: "Mahdavi"
    },
    {
        uid: 2,
        firstName: "Reza" ,
        lastName: "Shahmardan"
    },
    {
        uid: 3,
        firstName: "Hassan",
        lastName: "Qolami" 
    },
    {
        uid: 4,
        firstName: "Morteza",
        lastName: "Hamedani" 
    },
    {
        uid: 5,
        firstName: "Sina",
        lastName: "Hejazi" 
    },
    {
        uid: 6,
        firstName: "Hadi",
        lastName: "Sadri" 
    }
]

let additionalPersonData = [
    {
        uid: 3,
        position: "UI Designer",
        city: "Biarjmand" 
    },
    {
        uid: 1,
        position: "Back-End Develope",
        city: "Taleqan" 
    },
    {
        uid: 2,
        position: "Front-End Developer",
        city: "Behbahan"
    },
    {
        uid: 4,
        position: "Devops",
        city: "Shiraz"
    },
    {
        uid: 6,
        position: "Server Admin",
        city: "Tehran"  
    },
    {
        uid: 5,
        position: "Product Manager",
        city: "Hamedan" 
    }
]



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

for(let i = 0;i<len;i++){
    let single  = {};
    for (let j = 0; j <len;j++) {
        if(personData[i].uid===additionalPersonData[j].uid){
           single = Object.assign(personData[i],additionalPersonData[j]);
           result.push(single);
        }
        
    };
    
};

console.log(result);