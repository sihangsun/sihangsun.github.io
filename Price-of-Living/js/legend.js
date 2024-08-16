// Circle legned
var circle_container_l = document.getElementById("circle-legend");
var containerWidth_l = circle_container_l.getBoundingClientRect().width;
var containerHeight_l = circle_container_l.getBoundingClientRect().height;

//Draw circle
const circle_wrapper_l = d3.select("#circle-legend")
    .append("svg")
    .attr("width", containerWidth_l)
    .attr("height", containerHeight_l)

const theCircle = circle_wrapper_l.append("circle")
    .attr("cx", containerWidth_l/2)
    .attr("cy", containerHeight_l/1.5)
    .attr("fill", "#73c2fb")
    .attr("opacity", "0.3")
    .attr("r", "10")

//Draw circle labels 
//City 
circle_wrapper_l.append("text")
    .text( "City")
    .attr("x", containerWidth_l/2)
    .attr("y", (containerHeight_l/1.5)-37)
    .attr("text-anchor", "middle")
    .attr("opacity", "0")
    .attr("class", "cities_l")
//Price 
circle_wrapper_l.append("text")
    .text( "Price(USD)")
    .attr("x", containerWidth_l/2)
    .attr("y", (containerHeight_l/1.5)-20)
    .attr("text-anchor", "middle")
    .attr("opacity", "0")
    .attr("class", "prices_l")



// Bar legend
var bar_container_l = document.getElementById("bar-legend");
var BarContainerWidth_l = bar_container_l.getBoundingClientRect().width;
var BarContainerHeight_l = bar_container_l.getBoundingClientRect().height*0.88;

//Draw bar
const bar_wrapper_l = d3.select("#bar-legend")
    .append("svg")
    .attr("width", BarContainerWidth_l)
    .attr("height", BarContainerHeight_l)


const theBarG = bar_wrapper_l.append("g")
    .attr("class", "barG")
    .attr("transform", `translate(${BarContainerWidth_l/2-25}, ${BarContainerHeight_l-100})`) 

const theBar = theBarG
    .append("rect")
    .attr("width", 50)
    .attr("height", 100)
    .attr("fill", "black")
    .attr("opacity", "0.85");

//Draw bar labels
// Numbers
bar_wrapper_l.append("text")
    .text("Index")
    .attr("x", (BarContainerWidth_l/2))
    .attr("y", (BarContainerHeight_l-100)-5) 
    .attr("text-anchor", "middle")
    .attr("class", "index_label_l")
    .attr("visibility", "hidden");

// City names
bar_wrapper_l.append("text")
    .text("City")
    .attr("x", (BarContainerWidth_l/2))
    .attr("y", (BarContainerHeight_l-130)) 
    .attr("text-anchor", "end")
    .attr("class", "city_label_l")
    .attr("visibility", "hidden");

// Interaction 
theCircle       
.on("mouseover", function(){
    d3.select(this)
    .transition()
    .attr("opacity", 1)
    .attr("r", "15");

    d3.selectAll(".prices_l")
    .transition()
    .attr("opacity", "1")

    d3.selectAll(".cities_l")
    .transition()
    .attr("opacity", "1")
})
.on("mouseout", function(){
    d3.select(this)
    .transition()
    .attr("opacity", 0.3)
    .attr("r", 10);

    d3.selectAll(".prices_l")
    .transition()
    .attr("opacity", "0")

    d3.selectAll(".cities_l")
    .transition()
    .attr("opacity", "0")
})

let clickN = 0

// Draw windows 
var cellSize_l = 15; // Fixed size for each cell to ensure square windows
var rows_l = Math.floor(100 / cellSize_l); // Number of rows for windows based on bar height
var cols_l = Math.floor(50 / cellSize_l);  // Number of columns for windows based on bar width

    for (let i_l = 0; i_l < rows_l; i_l++) {
        for (let j_l = 0; j_l < cols_l; j_l++) {
            if (Math.random() > 0.4) { // Adjust probability to place more windows
                theBarG.append("rect")
                    .attr("class", "window-rect_l")
                    .attr("x", (50 / 2) - (cols_l / 2 * cellSize_l) + (j_l * cellSize_l) + (cellSize_l / 4))
                    .attr("y", (100 / 2) - (rows_l / 2 * cellSize_l) + (i_l * cellSize_l) + (cellSize_l / 4)) // Adjust y to distribute from the middle
                    .attr("width", cellSize_l / 2)
                    .attr("height", cellSize_l / 2)
                    .attr("fill", "#e3793f")
                    .style("visibility", "hidden");
            }
        }
}


theBarG
.on("mouseover", function(){
    d3.selectAll(".city_label_l").attr("visibility", "visible")
    d3.selectAll(".index_label_l").attr("visibility", "visible")

    theCircle.transition()
    .attr("opacity", "1")
    .attr("r", "15");

    d3.selectAll(".prices_l")
    .transition()
    .attr("opacity", "1")
})
.on("mouseout", function(){
    d3.selectAll(".city_label_l").attr("visibility", "hidden")
    d3.selectAll(".index_label_l").attr("visibility", "hidden")

    theCircle.transition()
    .attr("opacity", "0.3")
    .attr("r", "10");

    d3.selectAll(".prices_l")
    .transition()
    .attr("opacity", "0")
})
.on("click", function(){
    countClick()
    if (clickN%2!=0) {
        theCircle.transition()
        .attr("fill", "#e3793f")

        d3.selectAll(".window-rect_l")
        .transition()
        .style("visibility", "visible")

    } else {
        theCircle.transition()
        .attr("fill", "#73c2fb")

        d3.selectAll(".window-rect_l")
        .transition()
        .style("visibility", "hidden")
    }




})

function countClick() {
    clickN = clickN+1
    return clickN;
}


