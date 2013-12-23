require.config( {
  deps: ['ren-main'],

  paths: {
    ASSERT: '../../assert/js',
    AXON: '../../axon/js',
    DOT: '../../dot/js',
    SCENERY: '../../scenery/js',
    SCENERY_PHET: '../../scenery-phet/js',
    KITE: '../../kite/js',
    PHET_CORE: '../../phet-core/js',
    SUN: '../../sun/js',
    JOIST: '../../joist/js',
    PHETCOMMON: '../../phetcommon/js',
    REN: '.',

    // plugins

    text: '../../sherpa/text',
    image: '../../chipper/requirejs-plugins/image',
    audio: '../../chipper/requirejs-plugins/audio',
    string: '../../chipper/requirejs-plugins/string'
  },
  urlArgs: new Date().getTime()
} );