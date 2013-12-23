define( function( require ) {
  'use strict';

  var Shape = require( 'KITE/Shape' );
  var Image = require( 'SCENERY/nodes/Image' );
  var Node = require( 'SCENERY/nodes/Node' );
  var inherit = require( 'PHET_CORE/inherit' );
  var SimpleDragHandler = require( 'SCENERY/input/SimpleDragHandler' );

  function CharacterNode( characterModel, image ) {

    var characterNode = this;
    Node.call( this, {renderer: 'svg', cursor: 'pointer'} );

    var sources = {};
    var numSources = 0;
    var totalSources = 0;

    var toKey = function( i, j ) {return i + ',' + j;};

    //TODO: Perhaps a more spritesheet-ish strategy would work better here
    var createTile = function( i, j ) {
      var tileMapNode = new Image( image );
      tileMapNode.toImage( function( image ) {

        sources[toKey( i, j )] = new Image( image, {scale: 2} );
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
      [4, 0],
      [5, 0],
      [6, 0]
    ] );

    var getTile = function( i, j ) { return sources[toKey( i, j ) ]; };


    characterModel.on( 'moved', function() {
      characterNode.setTranslation( characterModel.x, characterModel.y );
    } );
    this.touchArea = this.mouseArea = Shape.rect( 0, 0, 1024, 768 );
    var listener = new SimpleDragHandler( {
      allowTouchSnag: true,
      translate: function( args ) {
        characterModel.x = characterModel.x + args.delta.x;
        characterModel.y = characterModel.y + args.delta.y;
        characterModel.trigger( 'moved' );
      },
      drag: function( event, trail ) {
//        characterModel.x = event.pointer.point.x;
//        characterModel.y = event.pointer.point.y;
//        characterModel.trigger( 'moved' );
      },
      start: function() {
        console.log( 'd;' );
      },
      end: function() { }
    } );
    this.addInputListener( listener );

    var finishInit = function() {
      var forward1 = getTile( 4, 0 );
      var forward2 = getTile( 5, 0 );
      characterNode.addChild( forward1 );
      characterNode.addChild( forward2 );
      characterModel.model.timeProperty.link( function( time ) {
        var timefloor = Math.floor( time * 1.5 );
        if ( timefloor % 2 === 0 ) {
          forward1.visible = true;
          forward2.visible = false;
        }
        else {
          forward1.visible = false;
          forward2.visible = true;
        }
      } );
    };
  }

  return inherit( Node, CharacterNode );
} );