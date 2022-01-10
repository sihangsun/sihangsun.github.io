d3.csv("./billionaires.csv").then(function(data) {

    console.log(data);
    data.reverse();

    //set up svg canvas 

    const width = document.querySelector("#chart").clientWidth;
    const height = document.querySelector("#chart").clientHeight;
    const margin = {top: height*0.1146, left: 175, right: 50, bottom: height*0.043};

    //create svg canvas 

    const canvas = d3.select("#chart")
        .append("svg")
            .attr("width",width)
            .attr("height", height);

    //filter out data sets 

    let world = data.filter(function(d) {
        return d.region === "world";
    });

    let usa = data.filter(function(d) {
        return d.region === "usa";
    });

    let china = data.filter(function(d) {
        return d.region === "china";
    });

    let combine = data.filter(function(d) {
        return d.region === "combined";
    });

    console.log(world);
    console.log(usa);
    console.log(china);
    console.log(combine);

    //define scale 

    let industry = world.map(function(d) {
        return d.industry;
    }); 

    console.log(industry)

    const xScale = d3.scaleLinear()
    .domain([0,371])
    .range([margin.left, width-margin.right]);

    const USAxScale = d3.scaleLinear()
    .domain([0,190])
    .range([margin.left, width-margin.right]);

    const yScale = d3.scaleBand()
    .domain(industry)
    .range([height-margin.bottom, margin.top])
    .padding(0.35);

    //find max and min number

    let number = {
        min: d3.min(data, function(d) { return +d.number; }),
        max: d3.max(data, function(d) { return +d.number; }),    
    };

    console.log(number)

    //create axes 

    const xAxis = canvas.append("g")
    .attr("class", "axisx")
    .attr("transform",`translate(0,${margin.top})`)
    .call(d3.axisTop().scale(xScale).tickFormat(d3.format("Y")));

    const yAxis = canvas.append("g")
    .attr("class", "axisy")
    .attr("transform",`translate(${margin.left},0)`)
    .call(d3.axisLeft().scale(yScale));

    // draw lines 

    canvas.append("line")
        .attr("x1", xScale(50)) 
        .attr("y1", margin.top)
        .attr("x2", xScale(50))
        .attr("y2", height-margin.bottom)  
        .attr("stroke", "white")
        .attr("stroke-width", 0.5)
        .attr("stroke-opacity", 0.5)
        .attr("class", "vertical");

    canvas.append("line")
        .attr("x1", xScale(100)) 
        .attr("y1", margin.top)
        .attr("x2", xScale(100))
        .attr("y2", height-margin.bottom)  
        .attr("stroke", "white")
        .attr("stroke-width", 0.5)
        .attr("stroke-opacity", 0.5)
        .attr("class", "vertical");

    canvas.append("line")
        .attr("x1", xScale(150)) 
        .attr("y1", margin.top)
        .attr("x2", xScale(150))
        .attr("y2", height-margin.bottom)  
        .attr("stroke", "white")
        .attr("stroke-width", 0.5)
        .attr("stroke-opacity", 0.5)
        .attr("class", "vertical");

    canvas.append("line")
        .attr("x1", xScale(200)) 
        .attr("y1", margin.top)
        .attr("x2", xScale(200))
        .attr("y2", height-margin.bottom)  
        .attr("stroke", "white")
        .attr("stroke-width", 0.5)
        .attr("stroke-opacity", 0.5)
        .attr("class", "vertical");

    canvas.append("line")
        .attr("x1", xScale(250)) 
        .attr("y1", margin.top)
        .attr("x2", xScale(250))
        .attr("y2", height-margin.bottom)  
        .attr("stroke", "white")
        .attr("stroke-width", 0.5)
        .attr("stroke-opacity", 0.5)
        .attr("class", "vertical");

    canvas.append("line")
        .attr("x1", xScale(300)) 
        .attr("y1", margin.top)
        .attr("x2", xScale(300))
        .attr("y2", height-margin.bottom)  
        .attr("stroke", "white")
        .attr("stroke-width", 0.5)
        .attr("stroke-opacity", 0.5)
        .attr("class", "vertical");

    canvas.append("line")
        .attr("x1", xScale(350)) 
        .attr("y1", margin.top)
        .attr("x2", xScale(350))
        .attr("y2", height-margin.bottom)  
        .attr("stroke", "white")
        .attr("stroke-width", 0.5)
        .attr("stroke-opacity", 0.5)
        .attr("class", "vertical");

    //draw the marks 

    const WorldBars = canvas.selectAll("world")
        .data(world)
        .enter()
        .append("rect")
            .attr("class", "world")
            .attr("x", function(d) { return xScale(d.start); }) 
            /*  the stacked bars were generated in a “flat” way, where the start point of this bar is relative to end point of the previous bar. This was made possible by manipulating data. The data in start column is the cumulative value of previous categories.  */
            .attr("y", function(d) { return yScale(d.industry); })
            .attr("height", yScale.bandwidth())
            .attr("width", function(d) {
                return xScale(d.rest)-margin.left;
            })
            .attr("fill", "#b3b3b3");

    const ChinaBars = canvas.selectAll("china")
        .data(china)
        .enter()
        .append("rect")
            .attr("class", "china")
            .attr("x", function(d) { return xScale(d.start); }) 
            /*  start data here is number of billionaires in the US, the previous category.  */ 
            .attr("y", function(d) { return yScale(d.industry); })
            .attr("height", yScale.bandwidth())
            .attr("width", function(d) {
                return xScale(d.number)-margin.left;
            })
            .attr("fill", "#c82721");

    const UsaBars = canvas.selectAll("usa")
        .data(usa)
        .enter()
        .append("rect")
            .attr("class", "usa")
            .attr("x", function(d) { return xScale(0); })
            .attr("y", function(d) { return yScale(d.industry); })
            .attr("height", yScale.bandwidth())
            .attr("width", function(d) {
                return xScale(d.number)-margin.left;
            })
            .attr("fill", "#339bc1");

    //draw values next to bars

    const value = canvas.selectAll("value")
        .data(world)
        .enter()
        .append("text")
            .attr("class", "value")
            .attr("x", function(d) { return xScale(d.number)+8; })
            .attr("y", function(d) { return yScale(d.industry)+yScale.bandwidth()/1.4; } )
            .attr("text-anchor", "start")
            .text(function(d) { return d.number });

    // draw the zero line

    canvas.append("line")
        .attr("x1", xScale(0)) 
        .attr("y1", margin.top)
        .attr("x2", xScale(0))
        .attr("y2", height-margin.bottom)  
        .attr("stroke", "white")
        .attr("stroke-width", 2)
        .attr("stroke-opacity", 1)
        .attr("class", "verticalZero");

    // draw key

    canvas.append("rect")
        .attr("class", "key")
        .attr("x", xScale(100))
        .attr("y", height-(margin.bottom)/1.5)
        .attr("height", yScale.bandwidth()-10)
        .attr("width", yScale.bandwidth())
        .attr("fill", "#339bc1");

    canvas.append("text")
        .attr("x", xScale(115))
        .attr("y", height-(margin.bottom)/3)
        .attr("text-anchor", "start")
        .attr("class", "legend")
        .attr("fill", "white")
        .text("United States");

    canvas.append("rect")
        .attr("class", "key")
        .attr("x", xScale(175))
        .attr("y", height-(margin.bottom)/1.5)
        .attr("height", yScale.bandwidth()-10)
        .attr("width", yScale.bandwidth())
        .attr("fill", "#c82721");

    canvas.append("text")
        .attr("x", xScale(190))
        .attr("y", height-(margin.bottom)/3)
        .attr("text-anchor", "start")
        .attr("class", "legend")
        .attr("fill", "white")
        .text("China");

    canvas.append("rect")
        .attr("class", "key")
        .attr("x", xScale(225))
        .attr("y", height-(margin.bottom)/1.5)
        .attr("height", yScale.bandwidth()-10)
        .attr("width", yScale.bandwidth())
        .attr("fill", "#b3b3b3");

    canvas.append("text")
        .attr("x", xScale(240))
        .attr("y", height-(margin.bottom)/3)
        .attr("text-anchor", "start")
        .attr("class", "legend")
        .attr("fill", "white")
        .text("Other");

    // write titles 

    let WORLDtitle = canvas.append("text")
        .attr("x", xScale(0))
        .attr("y", margin.top*0.5)
        .attr("text-anchor", "start")
        .attr("class", "vis-title")
        .text("The number of billionaires by industry, 2021");

    let USAtitle = canvas.append("text")
        .attr("x", xScale(0))
        .attr("y", margin.top*0.5)
        .attr("text-anchor", "start")
        .attr("class", "vis-title-country")
        .attr("opacity", 0)
        .text("The number of American billionaires by industry, 2021");

    let CHINAtitle = canvas.append("text")
        .attr("x", xScale(0))
        .attr("y", margin.top*0.5)
        .attr("text-anchor", "start")
        .attr("class", "vis-title-country")
        .attr("opacity", 0)
        .text("The number of Chinese billionaires by industry, 2021");

    // data update start here

    // USA button 

    d3.select("#usaButton").on("click", function() {

        d3.selectAll(".button").classed("highlightUsa, highlightChina", false);

        d3.select(this).classed("highlightUsa", true);

        let bUsa = canvas.selectAll(".world, .usa, .china")
            .data(usa, function(d) { return d.industry; });

        bUsa.transition() 
        .duration(1500)
        .attr("class", "usa")
        .attr("x", function(d) { return xScale(0); })
        .attr("y", function(d) { return yScale(d.industry); })
        .attr("height", yScale.bandwidth())
        .attr("width", function(d) {
            return xScale(d.number)-margin.left;
        })
        .attr("fill", "#339bc1");

        let USAvalue = canvas.selectAll(".value")
            .data(usa, function(d) { return d.industry; });
    
        USAvalue.transition()
        .delay(200)
        .duration(2000)
        .attr("x", function(d) { return xScale(d.number)+8; })
        .attr("y", function(d) { return yScale(d.industry)+yScale.bandwidth()/1.4; } )
        .attr("text-anchor", "start")
        .text(function(d) { return d.number });

        ChinaBars
        .transition()
        .delay(900)
        .duration(1000)
        .attr("width", 0);

        WORLDtitle
        .transition()
        .duration(1500)
        .attr("opacity", 0);

        CHINAtitle
        .transition()
        .duration(0)
        .attr("opacity", 0);
    
        USAtitle
        .transition()
        .duration(700)
        .attr("opacity", 1);

        //tooltip usa

        const tooltipUsa = d3.select(".tooltipholder")
        .append("div")
            .attr("class", "tooltip");   

        let UsaOverBars = canvas.selectAll(".world, .usa, .china").on("mouseover", function(e, d) {

            tooltipUsa.style("visibility","visible")  
            .html(`<h3>Top ${d.Country} billionaire in <br>${d.industry}</h3>
            <div id="person">
            
            <div id="photo">
            <img class="profile" src="/img/${d.img}">
            </div>
    
            <div id="info">
    
            <h6 class="infoTitle">Net Worth:</h6>
            <p class="infoNumber">${d.NetWorth}</p>
    
            <h6 class="infoTitle">Global Rank:</h6>
            <p class="infoNumber">${d.Rank}</p>
    
            <h6 class="infoTitle">Age:</h6>
            <p class="infoNumber">${d.Age}</p>
    
            </div>
    
            </div>
            
            <h6>${d.Name}</h6>
            
            `); 

        UsaOverBars.attr("opacity", 0.3);

        d3.select(this).attr("opacity", 1); 

        }).on("mouseout", function() {

            tooltipUsa.style("visibility","hidden");

            UsaOverBars.attr("opacity", 1);

        });

    });

    // China button 

    d3.select("#chinaButton").on("click", function() {

        d3.selectAll(".button").classed("highlightChina, highlightUsa", false);
        d3.select(this).classed("highlightChina", true);

        let bChina = canvas.selectAll(".world, .usa, .china")
        .data(china, function(d) { return d.industry; });

        bChina.transition() 
        .duration(1500)
        .attr("class", "china")
        .attr("x", function(d) { return xScale(0); })
        .attr("y", function(d) { return yScale(d.industry); })
        .attr("height", yScale.bandwidth())
        .attr("width", function(d) {
            return xScale(d.number)-margin.left;
        })
        .attr("fill", "#c82721");

        let Chinavalue = canvas.selectAll(".value")
        .data(china, function(d) { return d.industry; });
    
        Chinavalue.transition()
        .delay(200)
        .duration(2000)
        .attr("class", "value")
        .attr("x", function(d) { return xScale(d.number)+8; })
        .attr("y", function(d) { return yScale(d.industry)+yScale.bandwidth()/1.4; } )
        .attr("text-anchor", "start")
        .text(function(d) { return d.number });
    
        UsaBars
        .transition()
        .delay(800)
        .duration(1500)
        .attr("width", 0);

        ChinaBars
        .transition()
        .duration(1500)
        .attr("width", 0);

        WORLDtitle
        .transition()
        .duration(1500)
        .attr("opacity", 0);

        CHINAtitle
        .transition()
        .duration(700)
        .attr("opacity", 1);
    
        USAtitle
        .transition()
        .duration(0)
        .attr("opacity", 0);

        // china tooltip 

        const tooltipChina = d3.select(".tooltipholder")
        .append("div")
            .attr("class","tooltip"); 

        let ChinaOverBars = canvas.selectAll(".world, .usa, .china").on("mouseover", function(e, d) {

            tooltipChina.style("visibility","visible") 
            .html(`<h3>Top ${d.Country} billionaire in <br>${d.industry}</h3>
            <div id="person">
        
            <div id="photo">
            <img class="profile" src="/img/${d.img}">
            </div>

            <div id="info">

            <h6 class="infoTitle">Net Worth:</h6>
            <p class="infoNumber">${d.NetWorth}</p>

            <h6 class="infoTitle">Global Rank:</h6>
            <p class="infoNumber">${d.Rank}</p>

            <h6 class="infoTitle">Age:</h6>
            <p class="infoNumber">${d.Age}</p>

            </div>

            </div>
        
            <h6>${d.Name}</h6>

            `); 

            ChinaOverBars.attr("opacity", 0.3); 
            d3.select(this).attr("opacity", 1); 

        }).on("mouseout", function() {

            tooltipChina.style("visibility","hidden");
            ChinaOverBars.attr("opacity", 1);

        });

    });

    // reset button 

    d3.select("#worldButton").on("click", function() {
        window.location.reload();
    });

    //tooltip world

    const tooltip = d3.select(".tooltipholder")
    .append("div")
        .attr("class","tooltipWorld");   

    canvas.selectAll(".world, .usa, .china").on("mouseover", function(e, d) {

        tooltip.style("visibility","visible")  
        .html(`<h3>Number of billionaires in <br>${d.industry}</h3>
        <div id="industryNumber">

        <div id="iNumberLeft">
        <h5>${d.display}:</h5>
        <p>${d.data}</p>
        </div>

        <div id="iNumberRight">
        <h5>World:</h5>
        <p>${d.total}</p>

        </div>
        `); 

        ChinaBars.attr("opacity", 0.6);
        UsaBars.attr("opacity", 0.6);
        WorldBars.attr("opacity", 0.6);

        d3.select(this).attr("opacity", 1); 

    }).on("mouseout", function() {

        tooltip.style("visibility","hidden");
        ChinaBars.attr("opacity", 1);
        UsaBars.attr("opacity", 1);
        WorldBars.attr("opacity", 1);

    });

});