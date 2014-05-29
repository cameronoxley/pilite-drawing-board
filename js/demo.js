var client = new ZeroClipboard( $('#copybutton') );

  client.on( 'load', function(client) {
     alert( "movie is loaded" );

    client.on( 'datarequested', function(client) {
      client.setText(this.innerHTML);
    } );

    client.on( 'complete', function(client, args) {
      alert("Copied text to clipboard: " + args.text );
    } );
  } );

  client.on( 'wrongflash noflash', function() {
    ZeroClipboard.destroy();
  } );
