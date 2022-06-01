// Initial chart parameters.
let xVariable = 'fg_pct';
let yVariable = 'w_pct';

// Data Stuff
d3.csv('data/cs.csv').then(data => {
    // Retyping necessary data.
    data.forEach(d => {
        d.fg_pct = +d.fg_pct;
        d.w_pct = +d.w_pct;
    });

    // Renders initial x-axis.
    let xScale = xSetUp(data, xVariable);
    const bottomAxis = d3
        .axisBottom(xScale);
    let xAxis = chartGroup
        .append('g')
        .classed('x-axis', true)
        .attr('transform', `translate(0, ${chartHeight})`)
        .call(bottomAxis);

    // Renders initial y-axis.
    let yScale = ySetUp(data, yVariable);
    const leftAxis = d3
        .axisLeft(yScale);
    let yAxis = chartGroup
        .append('g')
        .classed('y-axis', true)
        .call(leftAxis);

    // Renders initial circles.
    let circlesGroup = chartGroup
        .selectAll('circle')
        .data(data)
        .join('circle')
        .attr('cx', d => xScale(d[xVariable]))
        .attr('cy', d => yScale(d[yVariable]))
        .attr('r', '10')
        .attr('fill','steelblue')
        .attr('opacity', 1)
        .attr('stroke','black')
        .attr('stroke-width', 1);

    // Labels for the x-axis.
    const xGroup = chartGroup
        .append('g')
        .attr('transform', `translate(${chartWidth / 2}, ${chartHeight + 20})`);
    const xFGPctLabel = xGroup
        .append('text')
        .attr('x', 0)
        .attr('y', 20)
        .attr('value', 'fg_pct')
        .classed('active', true)
        .text('Field Goal Percentage');
    const xFTPctLabel = xGroup  
        .append('text')
        .attr('x', 0)
        .attr('y', 45)
        .attr('value', 'ft_pct')
        .classed('inactive', true)
        .text('Free Throw Percentage');

    // Labels for the y-axis.
    const yGroup = chartGroup
        .append('g')
        .attr('transform', `translate(${- 50},${chartHeight / 2})`);
    const yWPctLabel = yGroup
        .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('x', 0)
        .attr('y', 0)
        .attr('value','w_pct')
        .classed('active', true)
        .text('Win Percentage');
    const yPaceLabel = yGroup
        .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('x', 0)
        .attr('y', -25)
        .attr('value','pace')
        .classed('inactive', true)
        .text('Pace'); 

    // Event listener for the x-axis.
    xGroup
        .selectAll('text')
        .on('click', function() {
            const xSelection = d3
                .select(this)
                .attr('value');
            if (xSelection !== xVariable) {
                xVariable = xSelection;
                xScale = xSetUp(data, xVariable);
                xAxis = renderXAxis(xScale, xAxis);
                circlesGroup = renderCircles(circlesGroup, xScale, yScale, xVariable, yVariable);
                if (xVariable === 'fg_pct') {
                    xFGPctLabel
                        .classed('active', true)
                        .classed('inactive', false);
                    xFTPctLabel
                        .classed('active', false)
                        .classed('inactive', true);
                } else if (xVariable === 'ft_pct') {
                    xFGPctLabel
                        .classed('active', false)
                        .classed('inactive', true);
                    xFTPctLabel
                        .classed('active', true)
                        .classed('inactive', false);
                }
            }
        })
    yGroup
        .selectAll('text')
        .on('click', function() {
            const ySelection = d3 
                .select(this)
                .attr('value');
            if (ySelection !== yVariable) {
                yVariable = ySelection;
                yScale = ySetUp(data, yVariable);
                yAxis = renderYAxis(yScale, yAxis);
                circlesGroup = renderCircles(circlesGroup, xScale, yScale, xVariable, yVariable);
                if (yVariable === 'w_pct') {
                    yWPctLabel
                        .classed('active', true)
                        .classed('inactive', false);
                    yPaceLabel
                        .classed('active', false)
                        .classed('inactive', true);
                } else if (yVariable === 'pace') {
                    yWPctLabel
                        .classed('active', false)
                        .classed('inactive', true);
                    yPaceLabel
                        .classed('active', true)
                        .classed('inactive', false);
                }
            }
        })

}).catch(error => console.log(error));