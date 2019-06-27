// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value){
    let newDriver = {...driver};
    console.log(newDriver);
    return Object.assign(newDriver, {[key] : value} );
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value;
    return driver
}

function deleteFromDriverByKey(driver, key){
    let copyDriver = {...driver};
    delete copyDriver[key];
    return copyDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key];
    return driver;
}   