// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    if (pickupLocation <= 42) {
        return 42 - pickupLocation
    } else {
        return pickupLocation - 42
    }
}

function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation)*264
}

function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return start*264 - destination*264
    } else {
        return destination*264 - start*264
    }
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400){
        return 0;
    } else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000) {
        return (distanceTravelledInFeet(start, destination) - 400)*.02;
    } else if (distanceFromHqInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2500) {
        return 25;
    } else if (distanceTravelledInFeet(start, destination) > 2500) {
        return 'cannot travel that far';
    }
}