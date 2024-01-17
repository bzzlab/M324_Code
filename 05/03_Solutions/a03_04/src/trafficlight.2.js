/*
Task: Traffic light with argument color
*/
'use strict';

function trafficlight2(color) {
    switch (color){
        case undefined: return `OUT OF ORDER`;
        case "red": return `DON'T WALK!`;
        case "orange": return `ATTENTION!`;
        case "green": return `WALK!`;
    }
}

module.exports = {
    trafficLight: trafficlight2
}
