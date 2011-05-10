/**
* jquery.unselectable 1
*
* This ECMA script disable text selection on HTML elements
*
* to go:
*   
*   $('any selector').unselectable();
*
* p.s.:
*   don't forget to import the .js file !
*
* @license MIT <http://iceon.me/mit.txt>
* @license GPL <http://iceon.me/gpl.txt>
* @author Stéfano Stypulkowski <iceon.me>
* @require jquery 1.4+
*/

jQuery.fn.unselectable = function() {

  $(this).each(function (){
    
    var element = $(this)[0];

    try{
      if (element.onselectstart){
        element.onselectstart = function (e){
          e.preventDefault();
          return false;
        };
      }
    }catch(e){}

    try{
      if (element.onmousedown){
        element.onmousedown = function (e){
          e.preventDefault();
          return false;
        };
      }
    }catch(e){}
    
  });
};