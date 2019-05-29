// from data.js
var tableData = data;

// YOUR CODE HERE!
var tableData = data;

// YOUR CODE HERE!

// Reference the table and table body
var table = d3.select("ufo-table");
var tbody = d3.select("tbody");

// console.log the ufo data from data.js
console.log(tableData);

// Step 1: Loop through the data and console.log each ufo object
tableData.forEach(function(ufoSightings) {
    console.log(ufoSightings);
});

// Step 2: use d3 to append one table row and one line of data for each ufo sighting
tableData.forEach(function(ufoSightings) {
    console.log(ufoSightings);
    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(function([key, value]) {
        console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
    });
});


// LEVEL 2

var submit = d3.select(".btn-default");
submit.on("click", function() {

    d3.event.preventDefault();
    
    // Select the date
    var inputElementDate = d3.select("#datetime");

// Step 2: get the value property of the element
    var inputValueDate = inputElementDate.property("value");
    var filteredDate = tableData.filter(sightings =>sightings.datetime === inputValueDate);
    console.log(filteredDate);
    // var inputElementDateFilter = d3.select("#datetime");

    var filterTable = d3.select("ufo-table");
    var filterTbody = d3.select("tbody");

    filteredDate.forEach(function(ufoFilteredDate) {
        console.log(ufoFilteredDate);
        var filterRow = filterTbody.append("tr");
        // Object.entries(ufoFilteredDate).forEach(function([key, value]);
        var filterCell = filterRow.append("td");
        filterCell.text(value);
    });


    // Select the city form
    var inputElementCity = d3.select("#text1");

    // Step 2: get the value property of the element
        var inputValueCity = inputElementCity.property("value");
        var filteredCity= tableData.filter(sightings =>sightings.city === inputValueCity);
        console.log(filteredCity);

    // Select the state form
    var inputElementState = d3.select("#text2");

// Step 2: get the value property of the element
    var inputValueState = inputElementState.property("value");
    var filteredState= tableData.filter(sightings =>sightings.state === inputValueState);
    console.log(filteredState);

    // Select the country form
    var inputElementCountry = d3.select("#text3");

// Step 2: get the value property of the element
    var inputValueCountry = inputElementCountry.property("value");
    var filteredCountry= tableData.filter(sightings =>sightings.country === inputValueCountry);
    console.log(filteredCountry);

    // Select the country form
    var inputElementShape = d3.select("#text4");

// Step 2: get the value property of the element
    var inputValueShape = inputElementShape.property("value");
    var filteredShape= tableData.filter(sightings =>sightings.shape === inputValueShape);
    console.log(filteredShape);

    // var filteredState = tableData.filter(sightings =>sightings.state === inputValue);
    // var filteredCountry = tableData.filter(sightings => sightings.country === inputValue);
    // var filteredShape = tableData.filter(sightings => sightings.shape === inputValue);
    var filter = [filteredDate];
    console.log(filter);
    filter.forEach(function(filterValue) {
        var filterRow = tbody.append("tr");
        Object.entries(filterValue).forEach(function([key, value]) {
            console.log(key, value);
        var filterCell = filterRow.append("td");
        filterCell.text(value);
        });
    });
});



// function myFunction() {
//     // Declare variables 
//     var input, filter, table, tr, td, i, txtValue;
//     input = document.getElementById("");
//     filter = input.value.toUpperCase();
//     table = document.getElementById("myTable");
//     tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    // for (i = 0; i < filter.length; i++) {
    //   td = tr[i].getElementsByTagName("td")[0];
    //   if (td) {
    //     txtValue = td.textContent || td.innerText;
    //     if (txtValue.toUpperCase().indexOf(filter) > -1) {
    //       tr[i].style.display = "";
    //     } else {
    //       tr[i].style.display = "none";
    //     }
    //   } 
    // }
// var people = data;

// // Select the submit button
// var submit = d3.select("#submit");

// submit.on("click", function() {

//   // Prevent the page from refreshing
//   d3.event.preventDefault();

//   // Select the input element and get the raw HTML node
//   var inputElement = d3.select("#patient-form-input");

//   // Get the value property of the input element
//   var inputValue = inputElement.property("value");

//   console.log(inputValue);
//   console.log(people);

//   var filteredData = people.filter(person => person.bloodType === inputValue);

//   console.log(filteredData);