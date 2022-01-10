d3.csv("./data/HappiestStates.csv").then(function(data) {

  // set up SVG canvas 

  const width = document.querySelector("#chart").clientWidth;
  const height = document.querySelector("#chart").clientHeight;
  const margin = {top: height*0.0931, left: width*0.0683, right: width*0.0398, bottom: height*0.1074};

  const svg = d3.select("#chart")
    .append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`)
    .attr("preserveAspectRatio", "xMinYMin meet");

  // filter out Utah and Alaska

  let Utah = data.filter(function(d) {
    return d.state === "Utah";
    });

    let Alaska = data.filter(function(d) {
    return d.state === "Alaska";
    });

  // filter out two state groups 

  let PoorHappy = data.filter(function(d) {
    return d.income < 66998 && d.score > 52.945;
    });

  let RichUnhappy = data.filter(function(d) {
    return d.income > 66998 && d.score < 52.945;
  });

  // define max and min for variables

  let score = {
    min: d3.min(data, function(d) { return +d.score; }),
    max: d3.max(data, function(d) { return +d.score; }),    
  };

  let income = {
    min: d3.min(data, function(d) { return +d.income; }),
    max: d3.max(data, function(d) { return +d.income; }),    
  };

  // create scales 

  const xScale = d3.scaleLinear()
    .domain([40000, 100000])
    .range([margin.left, width-margin.right]);

  const yScale = d3.scaleLinear()
    .domain([30, 75])
    .range([height-margin.bottom, margin.top]);

  const fScale = d3.scaleLinear()
    .domain([50, 1])
    .range(["#F7FBFF", "#08306B"]);

  const rScale = d3.scaleLinear()
    .domain([5.1, 12.79])
    .range([1, 20]);

  // draw axes

  const xAxis = svg.append("g")
    .attr("class","axis")
    .attr("transform", `translate(0,${height-margin.bottom})`)
    .call(d3.axisBottom().scale(xScale).tickValues([45000, 50000, 55000, 60000, 65000, 70000, 75000, 80000, 85000, 90000, 95000, 100000]).tickFormat(d3.format("$,")));

  const yAxis = svg.append("g")
    .attr("class","axis")
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft().scale(yScale));

  // draw regression line 

  svg.append("line")
    .attr("x1", xScale(45000)) 
    .attr("y1", yScale(40.768))
    .attr("x2", xScale(95000))
    .attr("y2", yScale(67.988))  
    .attr("stroke", "#f85b79")
    .attr("stroke-width", 1.5)
    .attr("stroke-opacity", 0.8);

  // shade for lower right

  let ruShade = svg.append("rect")
    .attr("x", xScale(66998))
    .attr("y", yScale(52.945))
    .attr("width", width-margin.left-margin.right-xScale(66998)+margin.left)  
    .attr("height", yScale(30)-yScale(52.945))
    .attr("opacity", 0)
    .attr("fill", "#BCBEC0");

  // shade for upper left

  let phShade = svg.append("rect")
    .attr("x", margin.left)
    .attr("y", yScale(75))
    .attr("width", xScale(66998)-margin.left)  
    .attr("height", yScale(52.945)-yScale(75))
    .attr("opacity", 0)
    .attr("fill", "#BCBEC0");

  // draw circles for all states 

  const States = svg.selectAll(".states")
    .data(data)
    .enter()
    .append("circle")
      .attr("class", "states")
      .attr("cx", function(d) { return xScale(d.income); })
      .attr("cy", function(d) { return yScale(d.score); })
      .attr("r", 9)
      .attr("stroke", "#0072a6")
      .attr("stroke-width", 1.5)
      .attr("fill", "transparent") 
      .attr("opacity", 0.8);

  // draw annoatations for Utah

  const annotationsUtah = [
    {
      note: {
        label: "but not the richest",
        wrap: 150,
        padding: 10,
        title: "Happiest state"
      },
      connector: {
        end: "none",  // Can be none, or arrow or dot
        type: "line", // ?? don't know what it does
        lineType : "vertical",  // ?? don't know what it does
        endScale: 10  // dot size
      },
      color: ["#415a77"],
      x: xScale(Utah[0].income),
      y: yScale(Utah[0].score),
      dy: 10,
      dx: 10,
      className: "annotation"
    }
  ]

  const makeUnnotations = d3.annotation()
    .annotations(annotationsUtah)
    
  let UtahAnnotation = svg.append("g")
    .call(makeUnnotations)
    .attr("opacity", "1");

  // draw annotation for Alaska 

  const annotationsAlaska = [
    {
      note: {
        label: "decent income, but not so happy",
        wrap: 130,
        padding: 10,
        title: "Outlier state"
      },
      connector: {
        end: "none",  // Can be none, or arrow or dot
        type: "line", // ?? don't know what it does
        lineType : "vertical",  // ?? don't know what it does
        endScale: 10  // dot size
      },
      color: ["#415a77"],
      x: xScale(Alaska[0].income),
      y: yScale(Alaska[0].score),
      dy: 10,
      dx: 10,
      className: "annotation"
    }
  ]

  const makeAnnotations = d3.annotation()
    .annotations(annotationsAlaska)
    
  let AlaskaAnnotation = svg.append("g")
    .call(makeAnnotations)
    .attr("opacity", "0");

  // axes labes

  const xAxisLabel = svg.append("text")
    .attr("class","axisLabel")
    .attr("x", (width-margin.left-margin.right)/2+margin.left)
    .attr("y", height-margin.bottom/2*0.735)
    .attr("text-anchor", "middle")
    .text("Household Income (2020)");

  const yAxisLabel = svg.append("text")
    .attr("class","axisLabel")
    .attr("transform","rotate(-90)")
    .attr("x",-height/2)
    .attr("y",margin.left*0.3245)
    .text("Happiness Score");

  //tooltip

    const tooltip = d3.select("#chart")
      .append("div")
      .attr("class", "tooltip");

  //havor over states 

  States.on("mouseover", function(e,d) {

    let cx = xScale(40500);
    let cy = yScale(74.5);
  
    tooltip.style("visibility", "visible")
      .style("left", `${cx}px`)
      .style("top", `${cy}px`)
      .html(`<b class="b">State:</b>${d.state}<br> <b class="b">Icome:</b>$${d3.format(",")(d.income)}<br> <b class="b">Score:</b>${d.score}<br> <b class="b">Rank:</b>${d.rank}`)

    d3.select(this)
      .attr("fill", "#0072a6")
      .attr("opacity", 1);
  
  }).on("mouseout", function () {

    tooltip.style("visibility", "hidden");

    d3.select(this)
      .attr("fill", "transparent")
      .attr("opacity", 0.8);

  })

  // draw median lines for score and income  

  let vertical= svg.append("line")
    .attr ("x1", xScale(66998))
    .attr ("y1", yScale(75))
    .attr ("x2", xScale(66998))
    .attr ("y2", yScale(30))
    .attr ("stroke", "#BCBEC0")
    .attr ("stroke-width", 2)
    .attr ("stroke-opacity", 0.8)
    .attr ("stroke-dasharray", "1, 5");

  let IncomeLine = svg.append("line")
    .attr("x1", margin.left) 
    .attr("y1", yScale(52.945))
    .attr("x2", width-margin.right)
    .attr("y2", yScale(52.945))  
    .attr("stroke", "#BCBEC0")
    .attr("stroke-width", 2)
    .attr("stroke-opacity", 0.8)
    .attr("stroke-dasharray", "1, 5");

  let textIncome = svg.append("text")
    .attr("x", xScale(92000))
    .attr("y", yScale(51.33))
    .attr("class", "linetext")
    .attr("opacity", 1)
    .text("Median score:");

  let scoreNumber = svg.append("text")
    .attr("x", xScale(92000))
    .attr("y", yScale(49.71))
    .attr("class", "linetext")
    .attr("opacity", 1)
    .text("52.9");

  let textVertical = svg.append("text")
    .attr("x", xScale(67500))
    .attr("y", yScale(73.8))
    .attr("class", "linetext")
    .attr("opacity", 1)
    .text("Median income:");

  let incomeNumber = svg.append("text")
    .attr("x", xScale(67500))
    .attr("y", yScale(72.18))
    .attr("class", "linetext")
    .attr("opacity", 1)
    .text("$66,998");

  //Write a title 

  svg.append("text")
    .attr("x", xScale(70000))
    .attr("text-anchor", "middle")
    .attr("y", margin.top*0.69)
    .attr("class", "vis-title")
    .text("Income and happiness (50 U.S. States)");

  /*THE DATA UPDATE BELOW*/ 

  // Low income High score button // 

  let phbutton = d3.select("#ph").on("click", function() {

    let c = svg.selectAll("circle")
      .data(PoorHappy, function(d) { return d.state; });

    c.enter().append("circle")
      .attr("cx", function(d) { return xScale(d.income); })
      .attr("cy", function(d) { return yScale(d.score); })
      .attr("r", 0)
    .merge(c)   
      .transition() 
      .duration(1000)
      .attr("cx", function(d) { return xScale(d.income); })
      .attr("cy", function(d) { return yScale(d.score); })
      .attr("r", 9)
      .attr("stroke", "#0072a6")
      .attr("stroke-width", 1.5)
      .attr("fill", "transparent") 
      .attr("opacity", 0.8);

    c.exit()
      .transition()
      .duration(1000)
      .attr("r", 0)
      .remove();

    phShade
      .transition() 
      .duration(500)
      .attr("opacity", 0.2);

    ruShade
      .transition()
      .duration(1000)
      .attr("opacity", 0);

    UtahAnnotation
      .transition()
      .duration(1000)
      .attr("opacity", "0");

    AlaskaAnnotation
      .transition()
      .duration(1000)
      .attr("opacity", "0");

    // tooltip start

    svg.selectAll("circle").on("mouseover", function(e,d) {

      let cx = xScale(40500);
      let cy = yScale(74.5);
  
      tooltip.style("visibility", "visible")
        .style("left", `${cx}px`)
        .style("top", `${cy}px`)
        .html(`<b class="b">State:</b>${d.state}<br> <b class="b">Icome:</b>$${d3.format(",")(d.income)}<br> <b class="b">Score:</b>${d.score}<br> <b class="b">Rank:</b>${d.rank}`)

      d3.select(this)
        .attr("fill", "#0072a6")
        .attr("opacity", 1);
  
    }).on("mouseout", function () {

      tooltip.style("visibility", "hidden");

      d3.select(this)
        .attr("fill", "transparent")
        .attr("opacity", 0.8);

    })

    // tooltip end

  });

  // High income Low score button //

  let rubutton = d3.select("#ru").on("click", function() {

    let c = svg.selectAll("circle")
      .data(RichUnhappy, function(d) { return d.state; });

    c.enter().append("circle")
      .attr("cx", function(d) { return xScale(d.income); })
      .attr("cy", function(d) { return yScale(d.score); })
      .attr("r", 0)
    .merge(c)   
      .transition() 
      .duration(1000)
      .attr("cx", function(d) { return xScale(d.income); })
      .attr("cy", function(d) { return yScale(d.score); })
      .attr("r", 9)
      .attr("stroke", "#0072a6")
      .attr("stroke-width", 1.5)
      .attr("fill", "transparent") 
      .attr("opacity", 0.8);

    c.exit()
      .transition()
      .duration(1000)
      .attr("r", 0)
      .remove();

    ruShade
      .transition() 
      .duration(500)
      .attr("opacity", 0.2);

    phShade
      .transition()
      .duration(1000)
      .attr("opacity", 0);

    UtahAnnotation
      .transition()
      .duration(1000)
      .attr("opacity", "0");

    AlaskaAnnotation
      .transition()
      .delay(1000)
      .duration(250)
      .attr("opacity", "1");

    // tooltip start

    svg.selectAll("circle").on("mouseover", function(e,d) {

      let cx = xScale(40500);
      let cy = yScale(74.5);
      
      tooltip.style("visibility", "visible")
        .style("left", `${cx}px`)
        .style("top", `${cy}px`)
        .html(`<b class="b">State:</b>${d.state}<br> <b class="b">Icome:</b>$${d3.format(",")(d.income)}<br> <b class="b">Score:</b>${d.score}<br> <b class="b">Rank:</b>${d.rank}`)
    
      d3.select(this)
        .attr("fill", "#0072a6")
        .attr("opacity", 1);
      
    }).on("mouseout", function () {

    tooltip.style("visibility", "hidden");

    d3.select(this)
      .attr("fill", "transparent")
      .attr("opacity", 0.8);

    })
    
    // tooltip end

  });

  // View All button // 

  let allbutton = d3.select("#all").on("click", function() {

    let c = svg.selectAll("circle")
      .data(data, function(d) { return d.state; });
    
      c.enter().append("circle")
        .attr("cx", function(d) { return xScale(d.income); })
        .attr("cy", function(d) { return yScale(d.score); })
        .attr("r", 0)
      .merge(c)   
        .transition() 
        .duration(1000)
        .attr("cx", function(d) { return xScale(d.income); })
        .attr("cy", function(d) { return yScale(d.score); })
        .attr("r", 9)
        .attr("stroke", "#0072a6")
        .attr("stroke-width", 1.5)
        .attr("fill", "transparent") 
        .attr("opacity", 0.8);

      c.exit()
        .transition()
        .duration(1000)
        .attr("r", 0)
        .remove();
    
    //remove shade
    
    phShade
      .transition()
      .duration(1000)
      .attr("opacity", 0);

    ruShade
      .transition()
      .duration(1000)
      .attr("opacity", 0);

    //remove shade end 

    //reset annotation
    
    UtahAnnotation
      .transition()
      .delay(1000)
      .duration(250)
      .attr("opacity", "1");

    AlaskaAnnotation
      .transition()
      .duration(1000)
      .attr("opacity", "0");
    
    // tooltip start
    
    svg.selectAll("circle").on("mouseover", function(e,d) {
    
      let cx = xScale(40500);
      let cy = yScale(74.5);

      tooltip.style("visibility", "visible")
        .style("left", `${cx}px`)
        .style("top", `${cy}px`)
        .html(`<b class="b">State:</b>${d.state}<br> <b class="b">Icome:</b>$${d3.format(",")(d.income)}<br> <b class="b">Score:</b>${d.score}<br> <b class="b">Rank:</b>${d.rank}`)

      d3.select(this)
        .attr("fill", "#0072a6")
        .attr("opacity", 1);

    }).on("mouseout", function () {

      tooltip.style("visibility", "hidden");

      d3.select(this)
        .attr("fill", "transparent")
        .attr("opacity", 0.8);

    })

    // tooltip end

  });

  // button position
  
  let cybutton = height-margin.bottom/2-5;
    
  phbutton
    .style("top", `${cybutton}px`)

  rubutton
    .style("top", `${cybutton}px`)

});