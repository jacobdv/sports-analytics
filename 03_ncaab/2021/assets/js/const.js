// Essentially just the setup of the SVG and chart sizes.
const svgHeight = 700;
const svgWidth = 700;
const margin = { top:20, right:40, bottom:80, left:100 };
const chartHeight = svgHeight - (margin.top + margin.bottom);
const chartWidth = svgWidth - (margin.left + margin.right);

// Transition stuff.
const duration = 1500;

// Adding the SVG and chart to the HTML.
// SVG
const svg = d3 
    .select('#scatter')
    .append('svg')
    .attr('height', svgHeight)
    .attr('width', svgWidth);
// Chart Group to add axes and points to.
const chartGroup = svg 
    .append('g')
    .attr('transform',`translate(${margin.left}, ${margin.top})`);