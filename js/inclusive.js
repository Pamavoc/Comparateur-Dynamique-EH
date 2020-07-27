var filters = {};

var $container = $('#grid-container');
var $filterDisplay = $('#filter-display');


$container.isotope({
    layoutMode: 'cellsByRow',
    itemSelector: '.grid-item',
    percentPosition: true,
    cellsByRow: {
        columnWidth: '.grid-sizer',
        rowHeight: '.grid-sizer'
    }
});


var filters = {};

$('.filter-container').on( 'change', function( event ) {
  var $select = $( event.target );
 
  var filterGroup = $select.attr('value-group');
  
  filters[ filterGroup ] = event.target.value;
 
  var filterValue = concatValues( filters );
 
  $container.isotope({ filter: filterValue });
});


function concatValues( obj ) {
  var value = '';
  for ( var prop in obj ) {
    value += obj[ prop ];
  }
  return value;  
}