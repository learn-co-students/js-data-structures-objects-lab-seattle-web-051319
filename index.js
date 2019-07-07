// Write your solution in this file!
let driver = {name: "Sugger"};


//this function should take in three arguments: a driver Object, a key and a value. This function should not mutate the driver and should return a new driver that has an updated value for the key passed in.
function updateDriverWithKeyAndValue(driver, key, value){
  // console.log(key, value)

  const newDriver = Object.assign({}, driver, {[key]: value});
  return newDriver;
}

//      ✓ updates `driver` with the given `key` and `value` (it is destructive) and returns the entire updated driver
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  // console.log(driver)
  driver[`${key}`] = `${value}`;
return driver
   // console.log(driver);
}

// 1) deletes `key` from a clone of driver and returns the new driver (it is non-destructive)
// 2) does not modify the original driver (it is non-destructive)
function deleteFromDriverByKey(driver, key){
  const newDriver = Object.assign({}, driver);
  console.log(newDriver)
  delete newDriver[key]
  return newDriver;
  console.log(newDriver)
}

// 1) returns driver?
function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  return driver
}



// destructivelyUpdateDriverWithKeyAndValue(driver, ["name"], "sam")
// deleteFromDriverByKey(driver,  'name')
