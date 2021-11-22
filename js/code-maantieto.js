// load the map SVG file from a URL
fetch('https://simplemaps.com/static/svg/fi/fi.svg')
  // get the raw text content of SVG file as a string
  .then(response => response.text())
  .then((image) => {
    // This is a workaround for a strange behavior (a bug?)
    // of svg.js library
    let startOfSvg = image.indexOf('<svg')
    startOfSvg = startOfSvg >= 0 ? startOfSvg : 0

    // Draw the map
    const draw = SVG(image.slice(startOfSvg))
      .addTo('#map')
      .size('100%', '500')
      // Add zoom and pan capabilities with mouse wheel and mouse dragging
      .panZoom()
  
    // loop over all regions
    for (const region of draw.find('path')) {
      // paint each region blue
      region.fill('steelblue')
       
      // add a label to the center of each region
      draw.text(region.id())
        .font({
          size: '1.25em',
          family: 'sans-serif'
        })
        .center(region.cx(), region.cy())
    }
  })