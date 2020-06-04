function copyElementText( element ) {
  // get the text of the element to copy
  let text = element.innerText;

  // create a text area (needed for copying)
  const elem = document.createElement( "textarea" );

  // add the textarea
  document.body.appendChild( elem );

  // add the text to the textarea
  elem.value = text;

  // select the textarea so the text can be copied
  elem.select();

  // copy the text
  document.execCommand( "copy" );

  // remove the textarea
  document.body.removeChild( elem );
}

allCode = document.getElementsByClassName( "highlight" );

for ( let i = 0; i < allCode.length; i++ ) {
  if ( allCode[ i ].nodeName == "DIV" ) {
  	allCode[i].onclick = () => {
    	copyElementText( allCode[ i ] );
      $('#textCopied').modal('toggle');
    }
  }
}
