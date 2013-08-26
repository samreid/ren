/**
 * Main launch file
 *
 * @author Sam Reid
 */
require( [
  'Game',
  'JOIST/SimLauncher',
  'ren-images',
  'model/GameModel',
  'view/GameView',
  'SCENERY/nodes/Rectangle'
], function( Game, SimLauncher, images, GameModel, GameView, Rectangle ) {
  'use strict';

  SimLauncher.launch( images, function() {
    new Game( 'game', [
      {
        name: 'game',
        icon: new Rectangle( 0, 0, 0, 0 ),
        createModel: function() {return new GameModel();},
        createView: function( model ) {return new GameView( model );}
      }
    ] ).start();
  } );
  console.log( 'hello' );
} );