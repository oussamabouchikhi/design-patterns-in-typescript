// The Template Pattern Use Case Example

import TextDocument from './text-document';
import HTMLDocument from './html-document';

const TEXT_DOCUMENT = new TextDocument();
TEXT_DOCUMENT.createDocument('Some Text');

const HTML_DOCUMENT = new HTMLDocument();
HTML_DOCUMENT.createDocument('Line 1\nLine 2');

/*
~ node ./dist/behavioural/template/client.js

----------------------
title   : New Text Document
bg-col  : white
text    : Some Text
footer  : -- Page 1 --

<html>
  <head>
    <title>New HTML Document</title>
    <style>
      body {
        background-color: white;
      }
    </style>
  </head>
  <body>
    <p>Line 1</p>
    <p>Line 2</p>
  </body>
</html>

*/
