define( function( require ) {
  'use strict';

  var
    Property = require( 'AXON/Property' ),
    PropertySet = require( 'AXON/PropertySet' ),
    inherit = require( 'PHET_CORE/inherit' );

  function CharacterModel( model ) {
    var characterModel = this;
    this.model = model;

    PropertySet.call( this, {
      x: 0,
      y: 0
    } );
  }

  return inherit( PropertySet, CharacterModel );
} );