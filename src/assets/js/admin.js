$(function() {  

  $('.date-of-birth').daterangepicker({
    singleDatePicker: true,
    showDropdowns: true
  });

  $( '#editor' ).ckeditor({
    toolbar: 
    [
    ['Source','Save','NewPage','Preview','Templates','Cut','Copy','Paste'],
    ['Undo','Redo','Find','Replace','SelectAll','Bold','Italic','Underline'],
    ['Subscript','Superscript','Blockquote','JustifyLeft','JustifyCenter'],
    ['JustifyBlock','Image','Styles','Format','Font','FontSize','TextColor','BGColor']             
    ]           
      }); 

});
