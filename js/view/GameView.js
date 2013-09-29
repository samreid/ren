define( function( require ) {
  'use strict';

  var Shape = require( 'KITE/Shape' );
  var Image = require( 'SCENERY/nodes/Image' );
  var Node = require( 'SCENERY/nodes/Node' );
  var inherit = require( 'PHET_CORE/inherit' );
  var ScreenView = require( 'JOIST/ScreenView' );
  var SimpleDragHandler = require( 'SCENERY/input/SimpleDragHandler' );
  var CharacterNode = require( 'view/CharacterNode' );
  var tileMap = require( 'image!REN/../images/Vikings_tilemaps_003.png' );
  var walkaboutImage = require( 'image!REN/../images/Vikings_walkabout_088.png' )

  function GameView( model ) {

    var gameView = this;
    ScreenView.call( this, {renderer: 'svg', rendererOptions: {cssTransform: true}} );

    var sources = {};
    var numSources = 0;
    var totalSources = 0;

    var toKey = function( i, j ) {return i + ',' + j;};

    //TODO: Perhaps a more spritesheet-ish strategy would work better here
    var createTile = function( i, j ) {
      var tileMapNode = new Image( tileMap );
      tileMapNode.toImage( function( image ) {

        sources[toKey( i, j )] = new Image( image );
        numSources = numSources + 1;
        if ( numSources === totalSources ) {
          finishInit();
        }
      }, -i * 20, -j * 20, 20, 20 );
    };

    var createTiles = function( tiles ) {
      totalSources = tiles.length;
      for ( var i = 0; i < tiles.length; i++ ) {
        createTile( tiles[i][0], tiles[i][1] );
      }
    };
    createTiles( [
      [0, 0],
      [5, 1],
      [5, 6]
    ] );

    var getTile = function( i, j ) { return sources[toKey( i, j ) ]; };

    this.touchArea = this.mouseArea = Shape.rect( 0, 0, 1024, 768 );
    var listener = new SimpleDragHandler( {
      allowTouchSnag: true,
//      translate: function( options ) {},
      start: function() {},
      end: function() { }
    } );
    this.addInputListener( listener );

    var finishInit = function() {

      var grass = getTile( 0, 0 );
      var leaves = getTile( 5, 1 );
      var path = getTile( 5, 6 );
      var background = new Node( {pickable: false} );
      for ( var i = 0; i < 30; i++ ) {
        for ( var k = 0; k < 15; k++ ) {
          var node = new Node( {children: [grass], x: i * 20, y: k * 20} );
          background.addChild( node );
        }
      }
      background.toImage( function( image ) {
        gameView.addChild( new Image( image, {scale: 2} ) );
        var characterNode = new CharacterNode( model.player, walkaboutImage );
        gameView.addChild( characterNode );
      } );
    };


  }

  return inherit( ScreenView, GameView );
} );