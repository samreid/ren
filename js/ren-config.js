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

    // plugins
    i18n: '../../sherpa/i18n-2.0.4',
    image: '../../chipper/requirejs-plugins/image',
    audio: '../../chipper/requirejs-plugins/audio'
  },
  urlArgs: new Date().getTime()
} );