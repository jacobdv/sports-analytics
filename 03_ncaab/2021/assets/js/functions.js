// Functions for rendering the chart.
// Scope for x.
function xSetUp(data, xVariable) {
    const xScale = d3
        .scaleLinear()
        .domain([d3.min(data, d => d[xVariable]) * 0.8,
             d3.max(data, d => d[xVariable]) * 1.2])
        .range([0, chartWidth]);
    return xScale;
};
// Scope for y.
function ySetUp(data, yVariable) {
    const yScale = d3 
        .scaleLinear()
        .domain([d3.min(data, d => d[yVariable]) * 0.8,
             d3.max(data, d => d[yVariable]) * 1.2])
        .range([chartHeight, 0]);
    return yScale;
};
// X axis.
function renderXAxis(xNewSetUp, xAxis) {
    const bottomAxis = d3
        .axisBottom(xNewSetUp);
    xAxis
        .transition()
        .duration(duration)
        .call(bottomAxis);
    return xAxis;
};
// Y axis.
function renderYAxis(yNewSetUp, yAxis) {
    const leftAxis = d3
        .axisLeft(yNewSetUp);
    yAxis
        .transition()
        .duration(duration)
        .call(leftAxis);
    return yAxis;
};
// Circles.
function renderCircles(circlesGroup, xNewSetUp, yNewSetUp, xVariable, yVariable) {
    circlesGroup
        .transition()
        .duration(duration)
        .attr('cx', d => xNewSetUp(d[xVariable]))
        .attr('cy', d => yNewSetUp(d[yVariable]));
    return circlesGroup;
}
