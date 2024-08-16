let index_data; // This is declared at the top level, outside any function, so it's a global variable.

// set the dimensions and margins of the graph
var bar_container = document.getElementById("bar-chart-container");
var containerWidth = bar_container.getBoundingClientRect().width;

console.log(containerWidth)

var bar_margin = {top: 0, right: 10, bottom: 0, left: 10},
    bar_width = containerWidth - 30,
    bar_height = 250;

// append the svg object to the body of the page
var bar_svg = d3.select("#bar-chart-container")
  .append("svg")
    .attr("width", bar_width)
    .attr("height", bar_height)
    .attr("class", "bar-canvas")
  .append("g")
    .attr("transform",
          "translate(" + bar_margin.left + "," + bar_margin.top + ")");


function draw_bar() {

// x scale 
var bar_x = d3.scaleBand()
    .range([0, bar_width])
    .domain(index_data.map(function(d) { return d.city; }))
    .padding(0.03); // Add some padding between bars

// y scale 
var bar_y = d3.scaleLinear()
    .range([bar_height,80])
    .domain([0, 120])

// Bars

var bar_g = bar_svg
    .selectAll(".bar.g")
    .data(index_data)
    .join("g")
    .attr("class", "bar.g")
    .attr("transform", d => `translate(${bar_x(d.city)}, ${bar_y(d.index)})`) 
    //The <g> element itself doesn't have x and y attributes like other SVG elements.
    .on("mouseover", function(e,d){
       highlightCircles(d.city)
       handleBarHover(this)
    })
    .on("mouseout", function(e,d) {
        removeCircleHighlight(d.city)
        handleBarMouseOut(this)
    })
    .on("click", function(e,d){
        filterCircles(d.city)     
        handleBarClick(d.city)

    })

bar_g.append("rect")
    // .attr("x", function(d) { return bar_x(d.city); })
    // .attr("y", function(d) { return bar_y(d.index); })
    .attr("width", bar_x.bandwidth())
    .attr("height", function(d) { return bar_height - bar_y(d.index); })
    .attr("fill", "black")
    .attr("opacity", "0.85");

// Bar labels
// Numbers
bar_g.append("text")
    .text(d => d.index)
    .attr("x", bar_x.bandwidth()/2)
    .attr("y", -5) 
    .attr("text-anchor", "middle")
    // .attr("fill", "white")
    .attr("class", "index_label")
    .attr("visibility", "hidden");
// City names
bar_g.append("text")
    .text(d => d.city)
    .attr("x", (bar_x.bandwidth()/2)+5)
    .attr("y", -18) 
    .attr("text-anchor", "end")
    .attr("transform", "rotate(-20)")
    .attr("class", "city_label")
    .attr("visibility", "hidden");
    

bar_g.each(function (d) {
        draw_windows.call(this, d);
});



function draw_windows(d) {
    var barEach = d3.select(this);
    var barHeight = bar_height - bar_y(d.index);
    var barWidth = bar_x.bandwidth();
    var cellSize = 15; // Fixed size for each cell to ensure square windows
    var rows = Math.floor(barHeight / cellSize); // Number of rows for windows based on bar height
    var cols = Math.floor(barWidth / cellSize);  // Number of columns for windows based on bar width


    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (Math.random() > 0.55) { // Adjust probability to place more windows
                barEach.append("rect")
                    .attr("class", "window-rect")
                    .attr("x", (barWidth / 2) - (cols / 2 * cellSize) + (j * cellSize) + (cellSize / 4))
                    .attr("y", (barHeight / 2) - (rows / 2 * cellSize) + (i * cellSize) + (cellSize / 4)) // Adjust y to distribute from the middle
                    .attr("width", cellSize_l / 2)
                    .attr("height", cellSize_l / 2)
                    .attr("fill", "grey")
                    .style("visibility", "hidden");
            }
        }
    }
}


  
};



function dataIsReady(csv) {

    index_data = csv;
//sort data a-z
    index_data.sort((a,b) => d3.ascending(a.city, b.city));
    
    draw_bar();
// This function doesn't have to be inside here. This is to ensure it's called only after "index_data" is assigned.
}

function parseCsv(d) {
    return {
        city: d.city,
        index: +d.index,
    }
}

d3.csv("./data/index_data.csv", parseCsv).then(dataIsReady);
