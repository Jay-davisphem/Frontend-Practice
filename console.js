if( ( /android/gi ).test( navigator.appVersion ) ) {
  console = {
    "_log" : [],
    "log" : function() {
      var arr = [];
      for ( var i = 0; i  \"" + value + "\"" );
      }
    },
    "show" : function() {
      alert( this._log.join( "\n" ) );
      this._log = [];
    }
  };

  window.onerror = function( msg, url, line ) {
    console.log("ERROR: \"" + msg + "\" at \"" + "\", line " + line);
  }

  window.addEventListener( "touchstart", function( e ) {
    if( e.touches.length === 3 ) {
      console.show();
    }
  } );
}
