import { centimeterToFeet, 
    centimeterToInch, 
    centimeterToKilometer, 
    centimeterToMeter, 
    centimeterToMile, 
    centimeterToMillimeter, 
    centimeterToYard } from "./lengthFunctions/centimeter.js"
import { feetToCentimeter, 
    feetToInch, 
    feetToKilometer, 
    feetToMeter, 
    feetToMile, 
    feetToMillimeter, 
    feetToYard } from "./lengthFunctions/feet.js"
import { inchToCentimeter, 
    inchToFeet, 
    inchToKilometer, 
    inchToMeter, 
    inchToMile, 
    inchToMillimeter, 
    inchToYard } from "./lengthFunctions/inch.js"
import { kilometerToCentimeter, 
    kilometerToFeet, 
    kilometerToInch, 
    kilometerToMeter, 
    kilometerToMile, 
    kilometerToMillimeter, 
    kilometerToYard } from "./lengthFunctions/kilometer.js"
import { meterToCentimeter, 
    meterToFeet, 
    meterToInch, 
    meterToKilometer, 
    meterToMile, 
    meterToMilimeter, 
    meterToYard } from "./lengthFunctions/meter.js"
import { millimeterToCentimeter, 
    millimeterToFeet, 
    millimeterToInch, 
    millimeterToKilometer, 
    millimeterToMeter, 
    millimeterToMile, 
    millimeterToYard } from "./lengthFunctions/millimeter.js"
import { yardToCentimeter, 
    yardToFeet, 
    yardToInch, 
    yardToKilometer, 
    yardToMeter, 
    yardToMile, 
    yardToMillimeter } from "./lengthFunctions/yard.js"

const inputBox = document.getElementById('input')
const inputSelector = document.getElementById('inputValue')
const outputBox = document.getElementById('output')
const outputSelector = document.getElementById('outputValue')
const convertBtn = document.getElementById('convertBtn')

const calcKVP = {
    // M E T E R conversions
    "meter-centimeter":  meterToCentimeter,
    "meter-kilomteer": meterToKilometer,
    "meter-millimeter": meterToMilimeter,
    "meter-feet": meterToFeet,
    "meter-yard": meterToYard,
    "meter-inch": meterToInch,
    "meter-mile": meterToMile,

    // K I L O M E T E R conversions
    "kilometer-meter": kilometerToMeter,
    "kilometer-centimeter": kilometerToCentimeter,
    "kilometer-millimeter": kilometerToMillimeter,
    "kilometer-feet": kilometerToFeet,
    "kilometer-yard": kilometerToYard,
    "kilometer-inch": kilometerToInch,
    "kilometer-mile": kilometerToMile,

    // C E N T I M E T E R conversions
    "centimeter-meter": centimeterToMeter,
    "centimeter-kilometer": centimeterToKilometer,
    "centimeter-millimeter": centimeterToMillimeter,
    "centimeter-feet": centimeterToFeet,
    "centimeter-yard": centimeterToYard,
    "centimeter-inch": centimeterToInch,
    "centimeter-mile": centimeterToMile,

    // M I L L I M E T E R conversions
    "millimeter-meter": millimeterToMeter,
    "millimeter-kilometer": millimeterToKilometer,
    "millimeter-centimeter": millimeterToCentimeter,
    "millimeter-feet": millimeterToFeet,
    "millimeter-yard": millimeterToYard,
    "millimeter-inch": millimeterToInch,
    "millimeter-mile": millimeterToMile,

    // F E E T conversions
    "feet-meter": feetToMeter,
    "feet-kilometer": feetToKilometer,
    "feet-centimeter": feetToCentimeter,
    "feet-millimeter": feetToMillimeter,
    "feet-yard": feetToYard,
    "feet-inch": feetToInch,
    "feet-mile": feetToMile,

    // Y A R D conversions
    "yard-meter": yardToMeter,
    "yard-kilometer": yardToKilometer,
    "yard-centimeter": yardToCentimeter,
    "yard-millimeter": yardToMillimeter,
    "yard-feet": yardToFeet,
    "yard-inch": yardToInch,
    "yard-mile": yardToMile,

    // I N C H conversions
    "inch-meter": inchToMeter,
    "inch-kilometer": inchToKilometer,
    "inch-centimeter": inchToCentimeter,
    "inch-millimeter": inchToMillimeter,
    "inch-feet": inchToFeet,
    "inch-yard": inchToYard,
    "inch-mile": inchToMile
}

function pred() {
    const input = parseFloat(inputBox.value);

    const conversionKey = `${inputSelector.value}-${outputSelector.value}`;
    const conversionFunction = calcKVP[conversionKey];

    console.log(conversionFunction)

    if (conversionFunction) {
        const result = conversionFunction(input);
        outputBox.value = result.toString();
    } else {
        outputBox.value = 'Invalid!';
    }
}

convertBtn.addEventListener('click', pred)