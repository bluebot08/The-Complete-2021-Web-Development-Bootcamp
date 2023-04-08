// var housekeeper1 = {
//   yearsOfExperience: 12,
//   name: "Jane",
//   cleaningRepertoire: ["bathroom", "lobby", "bedroom"],
// };

function HouseKeeper(yearsOfExperience, name, cleaningRepertoire) {
  this.yearsOfExperience = yearsOfExperience;
  this.name = name;
  this.cleaningRepertoire = cleaningRepertoire;
  this.clean = function () {
    alert("Cleaning in progress...");
  };
}

// How to create object using object constructor

// var housekeeper1 = new HouseKeeper(5, "Kate", ["lobby", "bedroom"]);
