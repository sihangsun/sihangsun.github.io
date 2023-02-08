// Save different parts of the page as D3.js objects. Using d3 for convenience
var main = d3.select('main')
var scrollySection = main.select('#scrollytelling');
var figure = scrollySection.select('figure');
var article = scrollySection.select('article');
var steps = scrollySection.selectAll('.step');

var imgV1 = d3.select('#imgV1');
var imgV2 = d3.select('#imgV2');
var imgV3 = d3.select('#imgV3');
var imgV4 = d3.select('#imgV4');
var imgV5 = d3.select('#imgV5');
var imgV6 = d3.select('#imgV6');
var imgV7 = d3.select('#imgV7');
var imgV8 = d3.select('#imgV8');
var imgV9 = d3.select('#imgV9');
var imgV10 = d3.select('#imgV10');
var imgV11 = d3.select('#imgV11');
var imgV12 = d3.select('#imgV12');
var imgV13 = d3.select('#imgV13');
var imgV14 = d3.select('#imgV14');
var imgV15 = d3.select('#imgV15');
var imgV16 = d3.select('#imgV16');
var imgV17 = d3.select('#imgV17');
var imgV18 = d3.select('#imgV18');
var imgV19 = d3.select('#imgV19');
var imgV20 = d3.select('#imgV20');
var imgV21 = d3.select('#imgV21');
var imgV22 = d3.select('#imgV22');
var imgV23 = d3.select('#imgV23');
var imgV24 = d3.select('#imgV24');
var imgV25 = d3.select('#imgV25');

// Create a scrollama object.
var myScrollama = scrollama();

// @TODO: Set the stepH, figureHeight, and figureMarginTop constants
const stepH = Math.floor(window.innerHeight * 2);
const figureHeight = window.innerHeight * 1
const figureMarginTop = (window.innerHeight - figureHeight) / 2

// generic window resize listener event
function handleResize() {
  
  console.log("handling resize")

  // @TODO: Use `d3.json` to update height of step elements
  steps.style('height', stepH + 'px');
  // @TODO: Update the height, and top figure elements
  figure
    .style('height', figureHeight + 'px')
    .style('top', figureMarginTop + 'px');
  // Tell scrollama to update new element dimensions
  myScrollama.resize();

}

// scrollama event handler
function handleStepChange(response) {
  
  switch(response.index) {
    case 0:
      // Set image to first version
      imgV1.style("opacity", "1")
      imgV2.style("opacity", "0")
      imgV3.style("opacity", "0")
      imgV4.style("opacity", "0")
      imgV5.style("opacity", "0")
      imgV6.style("opacity", "0")
      imgV7.style("opacity", "0")
      imgV8.style("opacity", "0")
      imgV9.style("opacity", "0")
      imgV10.style("opacity", "0")
      imgV11.style("opacity", "0")
      imgV12.style("opacity", "0")
      imgV13.style("opacity", "0")
      imgV14.style("opacity", "0")
      imgV15.style("opacity", "0")
      imgV16.style("opacity", "0")
      imgV17.style("opacity", "0")
      imgV18.style("opacity", "0")
      imgV19.style("opacity", "0")
      imgV20.style("opacity", "0")
      imgV21.style("opacity", "0")
      imgV22.style("opacity", "0")
      imgV23.style("opacity", "0")
      imgV24.style("opacity", "0")
      imgV25.style("opacity", "0")
    break;

    case 1:
      imgV1.style("opacity", "0")
      imgV2.style("opacity", "1")
      imgV3.style("opacity", "0")
      imgV4.style("opacity", "0")
      imgV5.style("opacity", "0")
      imgV6.style("opacity", "0")
      imgV7.style("opacity", "0")
      imgV8.style("opacity", "0")
      imgV9.style("opacity", "0")
      imgV10.style("opacity", "0")
      imgV11.style("opacity", "0")
      imgV12.style("opacity", "0")
      imgV13.style("opacity", "0")
      imgV14.style("opacity", "0")
      imgV15.style("opacity", "0")
      imgV16.style("opacity", "0")
      imgV17.style("opacity", "0")
      imgV18.style("opacity", "0")
      imgV19.style("opacity", "0")
      imgV20.style("opacity", "0")
      imgV21.style("opacity", "0")
      imgV22.style("opacity", "0")
      imgV23.style("opacity", "0")
      imgV24.style("opacity", "0")
      imgV25.style("opacity", "0")
    break;

    case 2:
      imgV1.style("opacity", "0")
      imgV2.style("opacity", "0")
      imgV3.style("opacity", "1")
      imgV4.style("opacity", "0")
      imgV5.style("opacity", "0")
      imgV6.style("opacity", "0")
      imgV7.style("opacity", "0")
      imgV8.style("opacity", "0")
      imgV9.style("opacity", "0")
      imgV10.style("opacity", "0")
      imgV11.style("opacity", "0")
      imgV12.style("opacity", "0")
      imgV13.style("opacity", "0")
      imgV14.style("opacity", "0")
      imgV15.style("opacity", "0")
      imgV16.style("opacity", "0")
      imgV17.style("opacity", "0")
      imgV18.style("opacity", "0")
      imgV19.style("opacity", "0")
      imgV20.style("opacity", "0")
      imgV21.style("opacity", "0")
      imgV22.style("opacity", "0")
      imgV23.style("opacity", "0")
      imgV24.style("opacity", "0")
      imgV25.style("opacity", "0")
    break;

    case 3:
      imgV1.style("opacity", "0")
      imgV2.style("opacity", "0")
      imgV3.style("opacity", "0")
      imgV4.style("opacity", "1")
      imgV5.style("opacity", "0")
      imgV6.style("opacity", "0")
      imgV7.style("opacity", "0")
      imgV8.style("opacity", "0")
      imgV9.style("opacity", "0")
      imgV10.style("opacity", "0")
      imgV11.style("opacity", "0")
      imgV12.style("opacity", "0")
      imgV13.style("opacity", "0")
      imgV14.style("opacity", "0")
      imgV15.style("opacity", "0")
      imgV16.style("opacity", "0")
      imgV17.style("opacity", "0")
      imgV18.style("opacity", "0")
      imgV19.style("opacity", "0")
      imgV20.style("opacity", "0")
      imgV21.style("opacity", "0")
      imgV22.style("opacity", "0")
      imgV23.style("opacity", "0")
      imgV24.style("opacity", "0")
      imgV25.style("opacity", "0")
    break;

    case 4:
      imgV1.style("opacity", "0")
      imgV2.style("opacity", "0")
      imgV3.style("opacity", "0")
      imgV4.style("opacity", "0")
      imgV5.style("opacity", "1")
      imgV6.style("opacity", "0")
      imgV7.style("opacity", "0")
      imgV8.style("opacity", "0")
      imgV9.style("opacity", "0")
      imgV10.style("opacity", "0")
      imgV11.style("opacity", "0")
      imgV12.style("opacity", "0")
      imgV13.style("opacity", "0")
      imgV14.style("opacity", "0")
      imgV15.style("opacity", "0")
      imgV16.style("opacity", "0")
      imgV17.style("opacity", "0")
      imgV18.style("opacity", "0")
      imgV19.style("opacity", "0")
      imgV20.style("opacity", "0")
      imgV21.style("opacity", "0")
      imgV22.style("opacity", "0")
      imgV23.style("opacity", "0")
      imgV24.style("opacity", "0")
      imgV25.style("opacity", "0")
    break;

    case 5:
      imgV1.style("opacity", "0")
      imgV2.style("opacity", "0")
      imgV3.style("opacity", "0")
      imgV4.style("opacity", "0")
      imgV5.style("opacity", "0")
      imgV6.style("opacity", "1")
      imgV7.style("opacity", "0")
      imgV8.style("opacity", "0")
      imgV9.style("opacity", "0")
      imgV10.style("opacity", "0")
      imgV11.style("opacity", "0")
      imgV12.style("opacity", "0")
      imgV13.style("opacity", "0")
      imgV14.style("opacity", "0")
      imgV15.style("opacity", "0")
      imgV16.style("opacity", "0")
      imgV17.style("opacity", "0")
      imgV18.style("opacity", "0")
      imgV19.style("opacity", "0")
      imgV20.style("opacity", "0")
      imgV21.style("opacity", "0")
      imgV22.style("opacity", "0")
      imgV23.style("opacity", "0")
      imgV24.style("opacity", "0")
      imgV25.style("opacity", "0")
    break;

    case 6:
      imgV1.style("opacity", "0")
      imgV2.style("opacity", "0")
      imgV3.style("opacity", "0")
      imgV4.style("opacity", "0")
      imgV5.style("opacity", "0")
      imgV6.style("opacity", "0")
      imgV7.style("opacity", "1")
      imgV8.style("opacity", "0")
      imgV9.style("opacity", "0")
      imgV10.style("opacity", "0")
      imgV11.style("opacity", "0")
      imgV12.style("opacity", "0")
      imgV13.style("opacity", "0")
      imgV14.style("opacity", "0")
      imgV15.style("opacity", "0")
      imgV16.style("opacity", "0")
      imgV17.style("opacity", "0")
      imgV18.style("opacity", "0")
      imgV19.style("opacity", "0")
      imgV20.style("opacity", "0")
      imgV21.style("opacity", "0")
      imgV22.style("opacity", "0")
      imgV23.style("opacity", "0")
      imgV24.style("opacity", "0")
      imgV25.style("opacity", "0")
    break;

    case 7:
      imgV1.style("opacity", "0")
      imgV2.style("opacity", "0")
      imgV3.style("opacity", "0")
      imgV4.style("opacity", "0")
      imgV5.style("opacity", "0")
      imgV6.style("opacity", "0")
      imgV7.style("opacity", "0")
      imgV8.style("opacity", "1")
      imgV9.style("opacity", "0")
      imgV10.style("opacity", "0")
      imgV11.style("opacity", "0")
      imgV12.style("opacity", "0")
      imgV13.style("opacity", "0")
      imgV14.style("opacity", "0")
      imgV15.style("opacity", "0")
      imgV16.style("opacity", "0")
      imgV17.style("opacity", "0")
      imgV18.style("opacity", "0")
      imgV19.style("opacity", "0")
      imgV20.style("opacity", "0")
      imgV21.style("opacity", "0")
      imgV22.style("opacity", "0")
      imgV23.style("opacity", "0")
      imgV24.style("opacity", "0")
      imgV25.style("opacity", "0")
    break;

    case 8:
      imgV1.style("opacity", "0")
      imgV2.style("opacity", "0")
      imgV3.style("opacity", "0")
      imgV4.style("opacity", "0")
      imgV5.style("opacity", "0")
      imgV6.style("opacity", "0")
      imgV7.style("opacity", "0")
      imgV8.style("opacity", "0")
      imgV9.style("opacity", "1")
      imgV10.style("opacity", "0")
      imgV11.style("opacity", "0")
      imgV12.style("opacity", "0")
      imgV13.style("opacity", "0")
      imgV14.style("opacity", "0")
      imgV15.style("opacity", "0")
      imgV16.style("opacity", "0")
      imgV17.style("opacity", "0")
      imgV18.style("opacity", "0")
      imgV19.style("opacity", "0")
      imgV20.style("opacity", "0")
      imgV21.style("opacity", "0")
      imgV22.style("opacity", "0")
      imgV23.style("opacity", "0")
      imgV24.style("opacity", "0")
      imgV25.style("opacity", "0")
    break;

    case 9:
      imgV1.style("opacity", "0")
      imgV2.style("opacity", "0")
      imgV3.style("opacity", "0")
      imgV4.style("opacity", "0")
      imgV5.style("opacity", "0")
      imgV6.style("opacity", "0")
      imgV7.style("opacity", "0")
      imgV8.style("opacity", "0")
      imgV9.style("opacity", "0")
      imgV10.style("opacity", "1")
      imgV11.style("opacity", "0")
      imgV12.style("opacity", "0")
      imgV13.style("opacity", "0")
      imgV14.style("opacity", "0")
      imgV15.style("opacity", "0")
      imgV16.style("opacity", "0")
      imgV17.style("opacity", "0")
      imgV18.style("opacity", "0")
      imgV19.style("opacity", "0")
      imgV20.style("opacity", "0")
      imgV21.style("opacity", "0")
      imgV22.style("opacity", "0")
      imgV23.style("opacity", "0")
      imgV24.style("opacity", "0")
      imgV25.style("opacity", "0")
    break;

    case 10:
      imgV1.style("opacity", "0")
      imgV2.style("opacity", "0")
      imgV3.style("opacity", "0")
      imgV4.style("opacity", "0")
      imgV5.style("opacity", "0")
      imgV6.style("opacity", "0")
      imgV7.style("opacity", "0")
      imgV8.style("opacity", "0")
      imgV9.style("opacity", "0")
      imgV10.style("opacity", "0")
      imgV11.style("opacity", "11")
      imgV12.style("opacity", "0")
      imgV13.style("opacity", "0")
      imgV14.style("opacity", "0")
      imgV15.style("opacity", "0")
      imgV16.style("opacity", "0")
      imgV17.style("opacity", "0")
      imgV18.style("opacity", "0")
      imgV19.style("opacity", "0")
      imgV20.style("opacity", "0")
      imgV21.style("opacity", "0")
      imgV22.style("opacity", "0")
      imgV23.style("opacity", "0")
      imgV24.style("opacity", "0")
      imgV25.style("opacity", "0")
    break;

    case 11:
      imgV1.style("opacity", "0")
      imgV2.style("opacity", "0")
      imgV3.style("opacity", "0")
      imgV4.style("opacity", "0")
      imgV5.style("opacity", "0")
      imgV6.style("opacity", "0")
      imgV7.style("opacity", "0")
      imgV8.style("opacity", "0")
      imgV9.style("opacity", "0")
      imgV10.style("opacity", "0")
      imgV11.style("opacity", "0")
      imgV12.style("opacity", "1")
      imgV13.style("opacity", "0")
      imgV14.style("opacity", "0")
      imgV15.style("opacity", "0")
      imgV16.style("opacity", "0")
      imgV17.style("opacity", "0")
      imgV18.style("opacity", "0")
      imgV19.style("opacity", "0")
      imgV20.style("opacity", "0")
      imgV21.style("opacity", "0")
      imgV22.style("opacity", "0")
      imgV23.style("opacity", "0")
      imgV24.style("opacity", "0")
      imgV25.style("opacity", "0")
    break;

    case 12:
      imgV1.style("opacity", "0")
      imgV2.style("opacity", "0")
      imgV3.style("opacity", "0")
      imgV4.style("opacity", "0")
      imgV5.style("opacity", "0")
      imgV6.style("opacity", "0")
      imgV7.style("opacity", "0")
      imgV8.style("opacity", "0")
      imgV9.style("opacity", "0")
      imgV10.style("opacity", "0")
      imgV11.style("opacity", "0")
      imgV12.style("opacity", "0")
      imgV13.style("opacity", "1")
      imgV14.style("opacity", "0")
      imgV15.style("opacity", "0")
      imgV16.style("opacity", "0")
      imgV17.style("opacity", "0")
      imgV18.style("opacity", "0")
      imgV19.style("opacity", "0")
      imgV20.style("opacity", "0")
      imgV21.style("opacity", "0")
      imgV22.style("opacity", "0")
      imgV23.style("opacity", "0")
      imgV24.style("opacity", "0")
      imgV25.style("opacity", "0")
    break;

    case 13:
      imgV1.style("opacity", "0")
      imgV2.style("opacity", "0")
      imgV3.style("opacity", "0")
      imgV4.style("opacity", "0")
      imgV5.style("opacity", "0")
      imgV6.style("opacity", "0")
      imgV7.style("opacity", "0")
      imgV8.style("opacity", "0")
      imgV9.style("opacity", "0")
      imgV10.style("opacity", "0")
      imgV11.style("opacity", "0")
      imgV12.style("opacity", "0")
      imgV13.style("opacity", "0")
      imgV14.style("opacity", "1")
      imgV15.style("opacity", "0")
      imgV16.style("opacity", "0")
      imgV17.style("opacity", "0")
      imgV18.style("opacity", "0")
      imgV19.style("opacity", "0")
      imgV20.style("opacity", "0")
      imgV21.style("opacity", "0")
      imgV22.style("opacity", "0")
      imgV23.style("opacity", "0")
      imgV24.style("opacity", "0")
      imgV25.style("opacity", "0")
    break;

    case 14:
      imgV1.style("opacity", "0")
      imgV2.style("opacity", "0")
      imgV3.style("opacity", "0")
      imgV4.style("opacity", "0")
      imgV5.style("opacity", "0")
      imgV6.style("opacity", "0")
      imgV7.style("opacity", "0")
      imgV8.style("opacity", "0")
      imgV9.style("opacity", "0")
      imgV10.style("opacity", "0")
      imgV11.style("opacity", "0")
      imgV12.style("opacity", "0")
      imgV13.style("opacity", "0")
      imgV14.style("opacity", "0")
      imgV15.style("opacity", "1")
      imgV16.style("opacity", "0")
      imgV17.style("opacity", "0")
      imgV18.style("opacity", "0")
      imgV19.style("opacity", "0")
      imgV20.style("opacity", "0")
      imgV21.style("opacity", "0")
      imgV22.style("opacity", "0")
      imgV23.style("opacity", "0")
      imgV24.style("opacity", "0")
      imgV25.style("opacity", "0")
    break;

    case 15:
      imgV1.style("opacity", "0")
      imgV2.style("opacity", "0")
      imgV3.style("opacity", "0")
      imgV4.style("opacity", "0")
      imgV5.style("opacity", "0")
      imgV6.style("opacity", "0")
      imgV7.style("opacity", "0")
      imgV8.style("opacity", "0")
      imgV9.style("opacity", "0")
      imgV10.style("opacity", "0")
      imgV11.style("opacity", "0")
      imgV12.style("opacity", "0")
      imgV13.style("opacity", "0")
      imgV14.style("opacity", "0")
      imgV15.style("opacity", "0")
      imgV16.style("opacity", "1")
      imgV17.style("opacity", "0")
      imgV18.style("opacity", "0")
      imgV19.style("opacity", "0")
      imgV20.style("opacity", "0")
      imgV21.style("opacity", "0")
      imgV22.style("opacity", "0")
      imgV23.style("opacity", "0")
      imgV24.style("opacity", "0")
      imgV25.style("opacity", "0")
    break;

    case 16:
      imgV1.style("opacity", "0")
      imgV2.style("opacity", "0")
      imgV3.style("opacity", "0")
      imgV4.style("opacity", "0")
      imgV5.style("opacity", "0")
      imgV6.style("opacity", "0")
      imgV7.style("opacity", "0")
      imgV8.style("opacity", "0")
      imgV9.style("opacity", "0")
      imgV10.style("opacity", "0")
      imgV11.style("opacity", "0")
      imgV12.style("opacity", "0")
      imgV13.style("opacity", "0")
      imgV14.style("opacity", "0")
      imgV15.style("opacity", "0")
      imgV16.style("opacity", "0")
      imgV17.style("opacity", "1")
      imgV18.style("opacity", "0")
      imgV19.style("opacity", "0")
      imgV20.style("opacity", "0")
      imgV21.style("opacity", "0")
      imgV22.style("opacity", "0")
      imgV23.style("opacity", "0")
      imgV24.style("opacity", "0")
      imgV25.style("opacity", "0")
    break;

    case 17:
      imgV1.style("opacity", "0")
      imgV2.style("opacity", "0")
      imgV3.style("opacity", "0")
      imgV4.style("opacity", "0")
      imgV5.style("opacity", "0")
      imgV6.style("opacity", "0")
      imgV7.style("opacity", "0")
      imgV8.style("opacity", "0")
      imgV9.style("opacity", "0")
      imgV10.style("opacity", "0")
      imgV11.style("opacity", "0")
      imgV12.style("opacity", "0")
      imgV13.style("opacity", "0")
      imgV14.style("opacity", "0")
      imgV15.style("opacity", "0")
      imgV16.style("opacity", "0")
      imgV17.style("opacity", "0")
      imgV18.style("opacity", "1")
      imgV19.style("opacity", "0")
      imgV20.style("opacity", "0")
      imgV21.style("opacity", "0")
      imgV22.style("opacity", "0")
      imgV23.style("opacity", "0")
      imgV24.style("opacity", "0")
      imgV25.style("opacity", "0")
    break;

    case 18:
      imgV1.style("opacity", "0")
      imgV2.style("opacity", "0")
      imgV3.style("opacity", "0")
      imgV4.style("opacity", "0")
      imgV5.style("opacity", "0")
      imgV6.style("opacity", "0")
      imgV7.style("opacity", "0")
      imgV8.style("opacity", "0")
      imgV9.style("opacity", "0")
      imgV10.style("opacity", "0")
      imgV11.style("opacity", "0")
      imgV12.style("opacity", "0")
      imgV13.style("opacity", "0")
      imgV14.style("opacity", "0")
      imgV15.style("opacity", "0")
      imgV16.style("opacity", "0")
      imgV17.style("opacity", "0")
      imgV18.style("opacity", "0")
      imgV19.style("opacity", "1")
      imgV20.style("opacity", "0")
      imgV21.style("opacity", "0")
      imgV22.style("opacity", "0")
      imgV23.style("opacity", "0")
      imgV24.style("opacity", "0")
      imgV25.style("opacity", "0")
    break;

    case 19:
      imgV1.style("opacity", "0")
      imgV2.style("opacity", "0")
      imgV3.style("opacity", "0")
      imgV4.style("opacity", "0")
      imgV5.style("opacity", "0")
      imgV6.style("opacity", "0")
      imgV7.style("opacity", "0")
      imgV8.style("opacity", "0")
      imgV9.style("opacity", "0")
      imgV10.style("opacity", "0")
      imgV11.style("opacity", "0")
      imgV12.style("opacity", "0")
      imgV13.style("opacity", "0")
      imgV14.style("opacity", "0")
      imgV15.style("opacity", "0")
      imgV16.style("opacity", "0")
      imgV17.style("opacity", "0")
      imgV18.style("opacity", "0")
      imgV19.style("opacity", "0")
      imgV20.style("opacity", "1")
      imgV21.style("opacity", "0")
      imgV22.style("opacity", "0")
      imgV23.style("opacity", "0")
      imgV24.style("opacity", "0")
      imgV25.style("opacity", "0")
    break;

    case 20:
      imgV1.style("opacity", "0")
      imgV2.style("opacity", "0")
      imgV3.style("opacity", "0")
      imgV4.style("opacity", "0")
      imgV5.style("opacity", "0")
      imgV6.style("opacity", "0")
      imgV7.style("opacity", "0")
      imgV8.style("opacity", "0")
      imgV9.style("opacity", "0")
      imgV10.style("opacity", "0")
      imgV11.style("opacity", "0")
      imgV12.style("opacity", "0")
      imgV13.style("opacity", "0")
      imgV14.style("opacity", "0")
      imgV15.style("opacity", "0")
      imgV16.style("opacity", "0")
      imgV17.style("opacity", "0")
      imgV18.style("opacity", "0")
      imgV19.style("opacity", "0")
      imgV20.style("opacity", "0")
      imgV21.style("opacity", "1")
      imgV22.style("opacity", "0")
      imgV23.style("opacity", "0")
      imgV24.style("opacity", "0")
      imgV25.style("opacity", "0")
    break;

    case 21:
      imgV1.style("opacity", "0")
      imgV2.style("opacity", "0")
      imgV3.style("opacity", "0")
      imgV4.style("opacity", "0")
      imgV5.style("opacity", "0")
      imgV6.style("opacity", "0")
      imgV7.style("opacity", "0")
      imgV8.style("opacity", "0")
      imgV9.style("opacity", "0")
      imgV10.style("opacity", "0")
      imgV11.style("opacity", "0")
      imgV12.style("opacity", "0")
      imgV13.style("opacity", "0")
      imgV14.style("opacity", "0")
      imgV15.style("opacity", "0")
      imgV16.style("opacity", "0")
      imgV17.style("opacity", "0")
      imgV18.style("opacity", "0")
      imgV19.style("opacity", "0")
      imgV20.style("opacity", "0")
      imgV21.style("opacity", "0")
      imgV22.style("opacity", "1")
      imgV23.style("opacity", "0")
      imgV24.style("opacity", "0")
      imgV25.style("opacity", "0")
    break;

    case 22:
      imgV1.style("opacity", "0")
      imgV2.style("opacity", "0")
      imgV3.style("opacity", "0")
      imgV4.style("opacity", "0")
      imgV5.style("opacity", "0")
      imgV6.style("opacity", "0")
      imgV7.style("opacity", "0")
      imgV8.style("opacity", "0")
      imgV9.style("opacity", "0")
      imgV10.style("opacity", "0")
      imgV11.style("opacity", "0")
      imgV12.style("opacity", "0")
      imgV13.style("opacity", "0")
      imgV14.style("opacity", "0")
      imgV15.style("opacity", "0")
      imgV16.style("opacity", "0")
      imgV17.style("opacity", "0")
      imgV18.style("opacity", "0")
      imgV19.style("opacity", "0")
      imgV20.style("opacity", "0")
      imgV21.style("opacity", "0")
      imgV22.style("opacity", "0")
      imgV23.style("opacity", "1")
      imgV24.style("opacity", "0")
      imgV25.style("opacity", "0")
    break;

    case 23:
      imgV1.style("opacity", "0")
      imgV2.style("opacity", "0")
      imgV3.style("opacity", "0")
      imgV4.style("opacity", "0")
      imgV5.style("opacity", "0")
      imgV6.style("opacity", "0")
      imgV7.style("opacity", "0")
      imgV8.style("opacity", "0")
      imgV9.style("opacity", "0")
      imgV10.style("opacity", "0")
      imgV11.style("opacity", "0")
      imgV12.style("opacity", "0")
      imgV13.style("opacity", "0")
      imgV14.style("opacity", "0")
      imgV15.style("opacity", "0")
      imgV16.style("opacity", "0")
      imgV17.style("opacity", "0")
      imgV18.style("opacity", "0")
      imgV19.style("opacity", "0")
      imgV20.style("opacity", "0")
      imgV21.style("opacity", "0")
      imgV22.style("opacity", "0")
      imgV23.style("opacity", "0")
      imgV24.style("opacity", "1")
      imgV25.style("opacity", "0")
    break;

    case 24:
      imgV1.style("opacity", "0")
      imgV2.style("opacity", "0")
      imgV3.style("opacity", "0")
      imgV4.style("opacity", "0")
      imgV5.style("opacity", "0")
      imgV6.style("opacity", "0")
      imgV7.style("opacity", "0")
      imgV8.style("opacity", "0")
      imgV9.style("opacity", "0")
      imgV10.style("opacity", "0")
      imgV11.style("opacity", "0")
      imgV12.style("opacity", "0")
      imgV13.style("opacity", "0")
      imgV14.style("opacity", "0")
      imgV15.style("opacity", "0")
      imgV16.style("opacity", "0")
      imgV17.style("opacity", "0")
      imgV18.style("opacity", "0")
      imgV19.style("opacity", "0")
      imgV20.style("opacity", "0")
      imgV21.style("opacity", "0")
      imgV22.style("opacity", "0")
      imgV23.style("opacity", "0")
      imgV24.style("opacity", "0")
      imgV25.style("opacity", "1")
    break;

    default:
    // do nothing
  }

  // change the class of the step divs to indicate which step is active
  steps.classed('is-active', function (d, i) {
    return i === response.index;
  })

}

function init() {

  // 0. Display first image only once the all sizes are detected
  imgV1.style("opacity", "1")

  handleResize();

  // @TODO: Create the myScrollama.setup() function
  myScrollama.setup({
    step: '.step',
    offset: figureHeight * 0.5 + "px",
    // set to true to see debug horizontal line
    debug: false,
  }).onStepEnter(handleStepChange)
    
  // setup resize event
  window.addEventListener('resize', handleResize);
}

// kick things off
init();

// visualization 


// set the dimensions and margins of the graph
var width = document.querySelector("#my_dataviz").clientWidth;
var height = document.querySelector("#my_dataviz").clientHeight;
var margin = {top: height*0.1146};

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width)
    .attr("height", height);

// Read data
d3.csv("./data.csv", function(data) {

  // Size scale for countries
  var size = d3.scaleSqrt()
    .domain([3000, 492544275])
    .range([13,180])  

  var x = d3.scaleOrdinal()
    .domain([1, 0])
    .range([width / 15, width / 2])

  var color = d3.scaleOrdinal()
    .domain(["ad", "consulting", "data"])
    .range(["#ea3f05", "#0071df", "#00b190"]);

  // create a tooltip
  var Tooltip = d3.select("#my_dataviz")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("text-align", "center")

  // Three function that change the tooltip when user hover / move / leave a cell
  var mouseover = function(d) {

  // tooltip position
    let cx = +d3.select(this).attr("cx");
    let cy = +d3.select(this).attr("cy");
    // + "<br>" + d.breakdown + "<br>" + d.two + "<br>" + d.three + "<br>" + d.four + "<br>" + d.five + "<br>" + d.six
    Tooltip
      .html( "<h4 class=tool_title> Company: </h4>" + "<p>" + d.company + "</p>" + "<div class=tool_text_box>" + "<h4 class=tool_title> Received in total: </h4>" + "<p>" + "$ " + d.money +"</p>" + "<h4 class=tool_title> Service breakdown: </h4>" + "<div id=break>" + "<p>" + d.breakdown + "</p>" + "<p>" + d.two + "</p>" + "<p>" + d.three + "</p>" + "<p>" + d.four + "</p>" + "<p>" + d.five + "</p>" + "<p>" + d.six + "</p>" + "</div>")
      .style("opacity", 0.8)
      .style("left", `${cx}px`)
      .style("top", `${cy}px`)
      ;
    d3.select(this)
      .style("fill-opacity", 1)
      // .attr("stroke", "white")
      // .style("stroke-width", 2.5);
  }

  var mouseleave = function(d) {
    Tooltip
      .style("opacity", 0)
    d3.select(this)
      .style("fill-opacity", 0.6);
  }

  // website titles 

  var withweb = svg.append("text")
    .attr("x", width / 5.3)
    .attr("y", margin.top)
    .attr("text-anchor", "start")
    .attr("class", "web_title")
    .attr("opacity", 0)
    .text("More transparent companies");

  var withoutweb = svg.append("text")
    .attr("x", width / 1.6)
    .attr("y", margin.top)
    .attr("text-anchor", "start")
    .attr("class", "web_title")
    .attr("opacity", 0)
    .text("More opaque companies");

  // Initialize the circle: all located at the center of the svg area
  var node = svg.append("g")
    .selectAll("circle")
    .data(data)
    .enter()
    .append("svg:a")
      .attr("xlink:href", function(d){return d.url;}) 
      .append("circle")
      .attr("class", "node")
      .attr("r", 10)
      .attr("cx", width / 2)
      .attr("cy", height / 2)
      .style("fill", function(d){return color(d.category)})
      .style("fill-opacity", 0.6)
      // .attr("stroke", "white")
      // .style("stroke-width", 0.8)
      .on("mouseover", mouseover) // What to do when hovered
      // .on("mousemove", mousemove)
      .on("mouseleave", mouseleave)
      .call(d3.drag() // call specific function when circle is dragged
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));

  // Features of the forces applied to the nodes:
  var simulation = d3.forceSimulation()
    .force("center", d3.forceCenter().x(width / 2).y(height / 2)) // Attraction to the center of the svg area
  // .force("charge", d3.forceManyBody().strength(30)) // Nodes are attracted one each other of value is > 0
    .force("collide", d3.forceCollide().strength(1).radius(20)) // Force that avoids circle overlapping
  // Apply these forces to the nodes and update their positions.
  // Once the force algorithm is happy with positions ('alpha' value is low enough), simulations will stop.
  
  simulation
    .nodes(data)
    .on("tick", function(d){
      node
        .attr("cx", function(d){ return d.x; })
        .attr("cy", function(d){ return d.y; })
    });

  // What happens when a circle is dragged?
  function dragstarted(d) {
    if (!d3.event.active) simulation.alphaTarget(.03).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  function dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
  }

  function dragended(d) {
    if (!d3.event.active) simulation.alphaTarget(.03);
    d.fx = null;
    d.fy = null;
  }


  // Amount Button  

  d3.select("#amount").on("click", function() {

    let amountCircles = svg.selectAll("circle")
      .data(data, function(d) { return d.company; });

    amountCircles.transition() 
      .duration(1500)
      .attr("class", "amount")
      .style("fill", function(d){return color(d.category)})
      .attr("r", function(d) { return size(d.total)});

    simulation
      .force("center", d3.forceCenter().x(width / 2).y(height / 1.65))
      .force("charge", d3.forceManyBody().strength(0))
      .force("collide", d3.forceCollide().strength(1).radius(function(d){ return (size(d.total)+1) }))// Force that avoids circle overlapping

    simulation
      .nodes(data)
      .on("tick", function(d){
        amountCircles
          .attr("cx", function(d){ return d.x; })
          .attr("cy", function(d){ return d.y; })
      });

  });  

  /////// amount button end

  /// group button 

  d3.select("#group").on("click", function() {

    let groupCircles = svg.selectAll("circle")
      .data(data, function(d) { return d.company; });

    groupCircles.transition() 
      .duration(1500)
      .attr("class", "group")
      .style("fill", function(d){return color(d.category)})
      .attr("r", 10);

    simulation
        .force("x", d3.forceX().strength(0.5).x( function(d){ return x(d.web) } ))
        .force("y", d3.forceY().strength(0.1).y( height/2 ))
        .force("center", d3.forceCenter().x(width / 2).y(height / 1.65))
        .force("charge", d3.forceManyBody().strength(0))
        .force("collide", d3.forceCollide().strength(1).radius(20));

    simulation
      .nodes(data)
      .on("tick", function(d){
        groupCircles
          .attr("cx", function(d){ return d.x; })
          .attr("cy", function(d){ return d.y; })
      });

    withweb
      .transition()
      .delay(200)
      .duration(700)
      .attr("opacity", 1);

    withoutweb
      .transition()
      .delay(200)
      .duration(700)
      .attr("opacity", 1);

  });

  // group button end 

  // reset button 

  d3.select("#reset").on("click", function() {

    let resetCircles = svg.selectAll("circle")
      .data(data, function(d) { return d.company; });
  
    resetCircles.transition() 
      .duration(1500)
      .attr("class", "reset")
      .style("fill", function(d){return color(d.category)})
      .attr("r", 10);

    simulation
      .force("x", d3.forceX().strength(0).x(0))
      .force("y", d3.forceY().strength(0).y(0))
      .force("center", d3.forceCenter().x(width / 2).y(height / 1.65)) // Attraction to the center of the svg area
      .force("charge", d3.forceManyBody().strength(130)) // Nodes are attracted one each other of value is > 0
      .force("collide", d3.forceCollide().strength(1).radius(20)) // Force that avoids circle overlapping

    simulation
      .nodes(data)
      .on("tick", function(d){
        resetCircles
          .attr("cx", function(d){ return d.x; })
          .attr("cy", function(d){ return d.y; })
      });
  
    withweb
      .transition()
      .duration(700)
      .attr("opacity", 0);

    withoutweb
      .transition()
      .duration(700)
      .attr("opacity", 0);

  });
  // reset button end 
})