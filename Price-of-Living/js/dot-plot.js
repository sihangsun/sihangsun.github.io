d3.csv("./data/long_data_final.csv").then(dataset => {

    // Initial category
    let initialCateogy = d3.group(
    dataset.filter(d=> d.category === "Grocery")
    , d=> d.measure)

    initialCateogy.forEach((measureEach) => 
        {
            drawPlot(measureEach);
        }
    );

    // Drawing Dot Plot function
    function drawPlot(data) {

        // console.log(data)
        // console.log(Array.isArray(data));
        // Access data
        const xAccessor = function(d) { return +d.price}
        const hAccessor = function(d) { return d.measure}  
        const cityAccessor = function(d) { return d.city}

        // Access Category data for container 
        // const cAccessor = function(d) { return d.category}
   
        //Create chart dimensions
        const width = window.innerWidth * 0.95
        const dimensions = {
            width: width,
            height: 110,
            margin: {
              top: 110/2,
              right: 50,
              bottom: 10,
              left: 250,
            },
        };
    
        dimensions.boundedWidth = dimensions.width - (dimensions.margin.left + dimensions.margin.right);
        dimensions.boundedHeight = dimensions.height - (dimensions.margin.top + dimensions.margin.bottom);
    
        //Draw canvas
        // const wrapper = d3.select(`#${cAccessor(measureData[2]).split(" ")[0]}`)
        const wrapper = d3.select("#dot-plot")
        .append("svg")
        .attr("width", dimensions.width)
        .attr("height", dimensions.height)
        .attr("class", "canvas")
    
        const bounds = wrapper.append("g")
        .style(
            "transform",
            `translate(${dimensions.margin.left}px, ${dimensions.margin.top}px)`
        );
    
        //Create scales
        const xScale = d3.scaleLinear()
        .domain(d3.extent(data, xAccessor))
        .range([0, dimensions.boundedWidth])
        // .nice();
    
        //Draw data
        const marks = bounds.selectAll("circle")
        .data(data)
        .join("circle")
            .attr("cx", (d) => xScale(xAccessor(d)))
            .attr("r", 0)
            .attr("fill", "#73c2fb")
            .attr("opacity", "0.3")
            .attr("class", "marks")

        marks.transition().duration(600).ease(d3.easeSinIn)
        .attr("r", 10)

        // marks.transition().duration(1000).ease(d3.easeSinIn).delay(600)
        // .attr("cx", (d) => xScale(xAccessor(d)))

        //Draw labels
        const cities = bounds.selectAll(".cities")
        .data(data)
        .join("text")
            .text( (d) => cityAccessor(d))
            .attr("x", (d) => xScale(xAccessor(d)))
            .attr("y", -37)
            .attr("class", "cities")
            .attr("text-anchor", "middle")
            .attr("opacity", "0")

        const formatPrice = d3.format("($.2f")

        const prices = bounds.selectAll(".prices")
        .data(data)
        .join("text")
            .text( (d) => formatPrice(xAccessor(d)))
            .attr("x", (d) => xScale(xAccessor(d)))
            .attr("y", -20)
            .attr("class", "prices")
            .attr("text-anchor", "middle")
            .attr("opacity", "0")


        //Draw headings 
        wrapper.append("text")
        .text( hAccessor(data[0]))
        .attr("x", 0)
        .attr("y", dimensions.margin.top+20)
        .attr("width", "200px")
        .attr("class", "headings")


        //Draw peripherals
        const xAxisGenerator = d3.axisBottom()
        .scale(xScale)
        .tickValues(d3.extent(data, xAccessor))
        .tickFormat(d3.format("$.1f"));
    
        bounds.append("g")
        .call(xAxisGenerator)
        .style("transform", `translateY(28px)`)
        .attr("class", "x-axis");

        // Events listener
        marks
        .on("mouseover", CircleHover)
        .on("mouseout", CircleOut)


        
    }

    // Grab category name from button 
    d3.selectAll(".btn")
        .on("click", btnClick)

    
    // Handle buttons click 

    var numberOfButtons = document.querySelectorAll(".btn").length;

    console.log(numberOfButtons)

    for (var i = 0; i < numberOfButtons; i++) {

    document.querySelectorAll(".btn")[i].addEventListener("click", function() {

    // Rest buttons classlist 
    buttons = document.querySelectorAll(".btn")
    buttons.forEach(function(button) {
        button.classList.remove("pressed");
    });
    
    var buttonInnerHTML = this.innerHTML;

    btnLightOn(buttonInnerHTML)

    });
    }

    // Handle button light on 
    function btnLightOn(category) {
        btnClassName = category.substring(0, 3);
        console.log(btnClassName)
        
        var activeButton = document.querySelector("." + btnClassName);
        console.log(activeButton);
        activeButton.classList.add("pressed");
    }
   
    // Handle transition
    function btnClick(d) {


        // Clear handle bar click list
        d3.selectAll(".window-rect")
        .style("visibility", "hidden")

        selectedCities = [null, null]; // Initialize with placeholders
        selectedCitiesBar = [null, null]; 

        //Clear existing visualizations
        //Remove headings
        d3.selectAll(".headings").transition().duration(300).ease(d3.easeExpOut).style("opacity", 0) 
        .remove();
        //Remove axis
        d3.selectAll(".x-axis").transition().duration(300).ease(d3.easeExpOut).style("opacity", 0)
        .remove();
        //Remove marks 
        d3.selectAll(".marks").transition().duration(300).ease(d3.easeExpOut).attr("r", 0)
        .remove();
        //Clear svg
        d3.select("#dot-plot").selectAll("svg").remove();


        // d3.select("#wrapper").selectAll("svg").remove();

        let categoryName = d3.select(this).text();

        let filteredCategoryData = dataset.filter(function(d) {
            return d.category === categoryName;
          });

        // Group filtered data by measure
        let measureGroupData = d3.group(filteredCategoryData, d => d.measure)

        
        //Iterate for each measure 
        setTimeout( () => {
            measureGroupData.forEach((measureEach) => 
            {

                drawPlot(measureEach);
            }
            );
        }, 300);

    }



  

    
    // Iterate for each category
    // categoryGroupData.forEach( (category) =>
    //     {
    //         // Further group data by measure
    //         let measureGroupData = d3.group(category, d => d.measure)

    //         //Iterate for each measure 
    //         measureGroupData.forEach((measure) => 
    //             {
    //                 drawPlot(measure);
    //             }
    //         );
    //     }
    // );    

});