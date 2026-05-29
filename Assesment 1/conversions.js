// TeamName: Winx
// Date: 2026-05-26
// Program: Conversion web with functions for weight, distance, and temperature.
// This file defines a function that creates converters between metric and imperial units. It works with single values and arrays of values and returns the converted result.

const createConversion = (fromUnit, toUnit) => {

    if (fromUnit === "kg" && toUnit === "lb") {
    return kgToLb;
  }

    if (fromUnit === "lb" && toUnit === "kg") {
    return lbToKg;
  }

    if (fromUnit === "km" && toUnit === "mi") {
    return kmToMi;
  }

    if (fromUnit === "mi" && toUnit === "km") {
    return miToKm;
  }

    if (fromUnit === "c" && toUnit === "f") {
    return cToF;
  }

    if (fromUnit === "f" && toUnit === "c") {
    return fToC;
  }
};

// Conversions needed:
// Weight: lbs <-> kgs and vice versa
// Distance: miles <-> km and vice versa
// Temperature: F <-> C and vice versa

// Weight conversion:
let kgToLb = (value) => value * 2.20462;
let lbToKg = (value) => value / 2.20462;

// Distance conversion:
let kmToMi = (value) => value * 0.621371;
let miToKm = (value) => value / 0.621371;

// Temperature conversion:
let cToF = (value) => (value * 9/5) + 32;
let fToC = (value) => (value - 32) * 5/9;

