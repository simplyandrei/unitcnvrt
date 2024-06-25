import { centimeterToFeet, centimeterToInch, centimeterToKilometer, centimeterToMeter, centimeterToMile, centimeterToMillimeter, centimeterToYard } from "./lengthFunctions/centimeter.js"
import { feetToCentimeter, feetToInch, feetToKilometer, feetToMeter, feetToMile, feetToMillimeter, feetToYard } from "./lengthFunctions/feet.js"
import { inchToCentimeter, inchToFeet, inchToKilometer, inchToMeter, inchToMile, inchToMillimeter, inchToYard } from "./lengthFunctions/inch.js"
import { kilometerToCentimeter, kilometerToFeet, kilometerToInch, kilometerToMeter, kilometerToMile, kilometerToMillimeter, kilometerToYard } from "./lengthFunctions/kilometer.js"
import { meterToCentimeter, meterToFeet, meterToInch, meterToKilometer, meterToMile, meterToMilimeter, meterToYard } from "./lengthFunctions/meter.js"
import { millimeterToCentimeter, millimeterToFeet, millimeterToInch, millimeterToKilometer, millimeterToMeter, millimeterToMile, millimeterToYard } from "./lengthFunctions/millimeter.js"
import { yardToCentimeter, yardToFeet, yardToInch, yardToKilometer, yardToMeter, yardToMile, yardToMillimeter } from "./lengthFunctions/yard.js"

import { gramToKilogram, gramToMilligram, gramToOunce, gramToPound, gramToTon } from "./massFunctions/gram.js"
import { milligramToGram, milligramToKilogram, milligramToOunce, milligramToPound, milligramToTon } from "./massFunctions/milligram.js"
import { kilogramToGram, kilogramToMilligram, kilogramToOunce, kilogramToPound, kilogramToTon } from "./massFunctions/kilogram.js"
import { ounceToGram, ounceToKilogram, ounceToMilligram, ounceToPound, ounceToTon } from "./massFunctions/ounce.js"
import { poundToGram, poundToKilogram, poundToMilligram, poundToOunce, poundToTon } from "./massFunctions/pound.js"
import { tonToGram, tonToKilogram, tonToMilligram, tonToOunce, tonToPound } from "./massFunctions/ton.js"
import { celsiusToFahrenheit, celsiusToKelvin } from "./temperatureFunctions/celsius.js"
import { fahrenheitToCelsius, fahrenheitToKelvin } from "./temperatureFunctions/fahrenheit.js"
import { kelvinToCelsius, kelvinToFahrenheit } from "./temperatureFunctions/kelvin.js"

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
    "inch-mile": inchToMile,

    // -- MASS CONVERSIONS --
    // G R A M conversion
    "gram-milligram": gramToMilligram,
    "gram-kilogram": gramToKilogram,
    "gram-ounce": gramToOunce,
    "gram-pound": gramToPound,
    "gram-ton": gramToTon,

    // M I L L I G R A M conversions
    "milligram-gram": milligramToGram,
    "milligram-kilogram": milligramToKilogram,
    "milligram-ounce": milligramToOunce,
    "milligram-pound": milligramToPound,
    "milligram-ton": milligramToTon,

    // K I L O G R A M conversions
    "kilogram-gram": kilogramToGram,
    "kilogram-milligram": kilogramToMilligram,
    "kilogram-ounce": kilogramToOunce,
    "kilogram-pound": kilogramToPound,
    "kilogram-ton": kilogramToTon,

    // O U N C E conversions
    "ounce-gram": ounceToGram,
    "ounce-milligram": ounceToMilligram,
    "ounce-kilogram": ounceToKilogram,
    "ounce-pound": ounceToPound,
    "ounce-ton": ounceToTon,

    // P O U N D conversions
    "pound-gram": poundToGram,
    "pound-milligram": poundToMilligram,
    "pound-kilogram": poundToKilogram,
    "pound-ounce": poundToOunce,
    "pound-ton": poundToTon,

    // T O N conversions
    "ton-gram": tonToGram,
    "ton-milligram": tonToMilligram,
    "ton-kilogram": tonToKilogram,
    "ton-ounce": tonToOunce,
    "ton-pound": tonToPound,

    // -- TEMPERATURE CONVERSIONS --
    // C E L S I U S conversions
    "celsius-fahrenheit": celsiusToFahrenheit,
    "celcius-kelvin": celsiusToKelvin,

    // F A H R E N H E I T conversions
    "fahrenheit-celsius": fahrenheitToCelsius,
    "fahrenheit-kelvin": fahrenheitToKelvin,

    // K E L V I N conversions
    "kelvin-celsius": kelvinToCelsius,
    "kelvin-fahrenheit": kelvinToFahrenheit
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