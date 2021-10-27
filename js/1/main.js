var gameMap = [
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
  ];
  
  // // // // // // // // use to shuffle the nameOfCars array.
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;
  
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  
    return array;
  }
  // // // // // // // //
  
  var numberOfCars = prompt("Enter the number of cars you want be in the game:");
  
  var integer = Number(numberOfCars)
  
  function cargame(numOfCars) {
    if (typeof numOfCars !== "number" || numOfCars < 1 || numOfCars % 1 != 0) {
      console.log("invalid input!!!!");
      return;
    }
  
    var carsLocation = [];
    for (let i = 0; i < numOfCars; i++) {
      carsLocation[i] = 0;
    }
  
    var nameOfCars = [];
  
    for (let i = 0; i < numOfCars; i++) {
      var carName = prompt(`Enter the name of car number ${i + 1}`);
      nameOfCars.push(carName);
    }
    console.log(nameOfCars);
    shuffle(nameOfCars);
  
    // // // start real game
    var end = 0;
    var winner;
  
    for (let i = 0; end <= 0; i++) {
      console.log(nameOfCars);
  
      var stepsOfCars = [];
      for (let i = 0; i < numOfCars; i++) {
        var randomNum = Math.ceil(Math.random() * 10);
        stepsOfCars.push(randomNum);
      }
      console.log(stepsOfCars);
  
      for (let i = 0; i < numOfCars; i++) {
        carsLocation[i] += stepsOfCars[i];
        if (i > 0) {
          for (j = 0; j < i; j++) {
            if (carsLocation[j] === carsLocation[i]) {
              carsLocation[i] = 0;
            }
          }
        }
        if (carsLocation[i] >= 300) {
          winner = nameOfCars[i];
          end++;
          break;
        }
      }
  
      console.log(carsLocation);
  
      for (let i = 0; i < gameMap.length; i++) {
        gameMap[i] = "*";
      }
  
      for (let i = 0; i < numOfCars; i++) {
        var n = carsLocation[i];
  
        var m = nameOfCars[i];
  
        if (n === 0 && gameMap[0] !== "*") {
          gameMap[n] = gameMap[n] + " , " + m;
        } else {
          gameMap[n] = m;
        }
      }
      console.log(gameMap);
  
      if (end === 1) {
        console.log(`${winner} is the winner`);
        break;
      }
    }
  }
  cargame(integer);