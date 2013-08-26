define( function( require ) {
  'use strict';

  var
    Property = require( 'AXON/Property' ),
    PropertySet = require( 'AXON/PropertySet' ),
    inherit = require( 'PHET_CORE/inherit' );

  function GameModel() {
    var gameModel = this;

    PropertySet.call( this, {
      started: false,
      running: false
    } );
  }

  return inherit( PropertySet, GameModel, {step: function( dt ) {}} );
} );