define( function( require ) {
  'use strict';

  var
    Property = require( 'AXON/Property' ),
    PropertySet = require( 'AXON/PropertySet' ),
    inherit = require( 'PHET_CORE/inherit' ),
    CharacterModel = require( 'model/CharacterModel' );

  function GameModel() {
    var gameModel = this;

    PropertySet.call( this, {
      started: false,
      running: false,
      time: 0
    } );

    this.player = new CharacterModel( this );
  }

  return inherit( PropertySet, GameModel, {
    step: function( dt ) {
      this.time = this.time + dt;
    }
  } );
} );