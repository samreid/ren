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
    i18n: '../../i18n/i18n'
  },
  urlArgs: new Date().getTime()
} );