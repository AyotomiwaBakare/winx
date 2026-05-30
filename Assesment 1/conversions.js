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

//From: KACHHIA HEER VIRENDRABHAI
function convertValues(input, fromUnit, toUnit)
{
    const converter = createConversion(fromUnit, toUnit);
 
    // Array
    if (input.includes(","))
    {
        const values = input
            .split(",")
            .map(value => Number(value.trim()));
 
        return values.map(value =>
            Number(converter(value).toFixed(2))
        );
    }
 
    // Single Value
    return Number(
        converter(Number(input)).toFixed(2)
    );
}
 
 

// Weight Buttons

 
function convertKgToLb()
{
    const input =
        document.getElementById("kgInput").value;
 
    const result =
        convertValues(input, "kg", "lb");
 
    document.getElementById("kgResult")
        .textContent = JSON.stringify(result);
}
 
function convertLbToKg()
{
    const input =
        document.getElementById("lbInput").value;
 
    const result =
        convertValues(input, "lb", "kg");
 
    document.getElementById("lbResult")
        .textContent = JSON.stringify(result);
}
 
 

// Distance Buttons

 
function convertKmToMi()
{
    const input =
        document.getElementById("kmInput").value;
 
    const result =
        convertValues(input, "km", "mi");
 
    document.getElementById("kmResult")
        .textContent = JSON.stringify(result);
}
 
function convertMiToKm()
{
    const input =
        document.getElementById("miInput").value;
 
    const result =
        convertValues(input, "mi", "km");
 
    document.getElementById("miResult")
        .textContent = JSON.stringify(result);
}
 
 

// Temperature Buttons

 
function convertCToF()
{
    const input =
        document.getElementById("cInput").value;
 
    const result =
        convertValues(input, "c", "f");
 
    document.getElementById("cResult")
        .textContent = JSON.stringify(result);
}
 
function convertFToC()
{
    const input =
        document.getElementById("fInput").value;
 
    const result =
        convertValues(input, "f", "c");
 
    document.getElementById("fResult")
        .textContent = JSON.stringify(result);
}
 
 

// Tab Navigation

 
function showTab(tabName)
{
    document
        .querySelectorAll(".tab-content")
        .forEach(tab =>
            tab.classList.add("hidden")
        );
 
    document
        .getElementById(tabName)
        .classList.remove("hidden");
}
