// For event handling 

function CircleHover(e,d) {

    // Hightlight circles when circle hover
    d3.select(this)
    .transition()
    .attr("opacity", 1)
    .attr("r", "15");

    //Deal with labels
    hoveredCity = d.city
    hoveredMeasure = d.measure

    d3.selectAll(".prices")
    .filter(d => d.city === hoveredCity )
    .filter(d => d.measure === hoveredMeasure )
    .transition()
    .attr("opacity", "1")

    d3.selectAll(".cities")
    .filter(d => d.city === hoveredCity )
    .filter(d => d.measure === hoveredMeasure )
    .transition()
    .attr("opacity", "1")

}

function CircleOut(e,d) {

    //Remove circle highlight when mouse out circle
    d3.select(this)
    .transition()
    .attr("opacity", 0.3)
    .attr("r", 10);
    
    // Remove labels
    hoveredCity = d.city
    hoveredMeasure = d.measure

    d3.selectAll(".prices")
    .filter(d => d.city === hoveredCity )
    .filter(d => d.measure === hoveredMeasure )
    .transition()
    .attr("opacity", "0")

    d3.selectAll(".cities")
    .filter(d => d.city === hoveredCity )
    .filter(d => d.measure === hoveredMeasure )
    .transition()
    .attr("opacity", "0")

}


// Below is action between bar and circles

// When bars are hovered, handle circles reaction
function highlightCircles(city) {
    //cricles
    d3.selectAll(".marks").filter(d => d.city === city )
    .transition()
    .attr("opacity", "1")
    .attr("r", "15");

    //handle label
    d3.selectAll(".prices")
    .filter(d => d.city === city )
    .transition()
    .attr("opacity", "1")

} 

// mouse off
function removeCircleHighlight(city) {
    //circles
    d3.selectAll(".marks")
    .attr("opacity", "0.3")
    .transition()
    .attr("r", "10");

    //remove label
    d3.selectAll(".prices")
    .filter(d => d.city === city )
    .transition()
    .attr("opacity", "0")
}


// bar appearance when hovered 
// mouse hover
function handleBarHover(element) {
    d3.select(element).selectAll(".city_label").attr("visibility", "visible")
    d3.select(element).selectAll(".index_label").attr("visibility", "visible")
}
// mouse off
function handleBarMouseOut(element) {
    d3.select(element).selectAll(".city_label").attr("visibility", "hidden")
    d3.select(element).selectAll(".index_label").attr("visibility", "hidden")
}


// Below handle when bars are clicked


// Define a color scale
let colorScale = d3.scaleOrdinal(["#e3793f","#f1c964"]);

// Arrays to hold selected cities
let selectedCities = [null, null]; // Initialize with placeholders
let selectedCitiesBar = [null, null]; 
// nesscary to keep two, one to hanlde circles, another to handle bars.
//otherwise the city got push into array in "filterCircles" function and then got removed in "handleBarClick" function

// Handle circles
function filterCircles(city) {
    let index = selectedCities.indexOf(city);

    if (index > -1) {
        // City is already selected, remove it
        selectedCities[index] = null;
    } else if (index === -1) {
        // City is not selected, add it to the first available slot
        let emptyIndex = selectedCities.indexOf(null);
        if (emptyIndex > -1) {
            selectedCities[emptyIndex] = city;
        } else if (selectedCities.length < 2) {
            selectedCities.push(city);
        }
    }

    // Create a copy of the array
    let selectedCitiesArray = selectedCities.slice();
   
    // Update the visibility and color of circles based on the selected cities
    let dots = d3.selectAll(".marks")

    // Declare allNull in a higher scope
    let allNull
    
    // circle visibility
    dots.style("visibility", function(d) {
        allNull = selectedCities.every(city => city === null);
        return allNull || selectedCities.includes(d.city) ? "visible" : "hidden";
    })

    // circle color 
    dots.attr("fill", function(d) {
            // Apply the colorScale to each individual city
            if (selectedCities.includes(d.city)) {
                let index = selectedCitiesArray.indexOf(d.city);
                return colorScale(index);
            } 
            else {
                return "#73c2fb"; // Default color for hidden circles
            }
        });

    //handle labels (prices)
    d3.selectAll(".prices")
        .attr("visibility", function(d) {
            if (allNull || selectedCities.includes(d.city)) {
               return "visible"
            }
            else {
                return "hidden"
            }

        });

}

// Handle bars
function handleBarClick(city) {
    let index = selectedCitiesBar.indexOf(city);

    if (index > -1) {
        // City is already selected, remove it
        selectedCitiesBar[index] = null;
    } else if (index === -1) {
        // City is not selected, add it to the first available slot
        let emptyIndex = selectedCitiesBar.indexOf(null);
        if (emptyIndex > -1) {
            selectedCitiesBar[emptyIndex] = city;
        } else if (selectedCitiesBar.length < 2) {
            selectedCitiesBar.push(city);
        }
    }

    // Create a copy of the array
    // let selectedCitiesArray = selectedCitiesBar.slice();

    // Update the visibility and color of windows based on the selected cities
    // Handle visibility
    d3.selectAll(".window-rect")
        .style("visibility", function(d) {
            return selectedCitiesBar.length === 0 ? "hidden" : (selectedCitiesBar.includes(d.city) ? "visible" : "hidden");
        })
        .attr("fill", function(d) { 
            // Apply the colorScale to each individual city
            if (selectedCitiesBar.includes(d.city)) {
                let index = selectedCitiesBar.indexOf(d.city);
                return colorScale(index);
            } 
        });

}

