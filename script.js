/**
 * DONE: Update the text in the "Formatted Text" section as a user type in the textarea
 * DONE: TOGETHER: Add a .bold, .italic classes to "Formatted Text" when the appropriate button is clicked
 * DONE: Add an .underline class to "Formatted text" when underline button is clicked
 * TODO: Toggle the align style for "Formatted Text" when the appropriate buttion is clicked
 */


 /**
  * Update the output text as a user type in the textarea
  * HINT: Use the onClick function inside HTML
  */
 function updateText(){
     //CODES GOES HERE
     let text = document.getElementById('text-input').value;
     document.getElementById('text-output').innerText = text;
 }

 /**
  * Toggle the sold class for the output text
  * HINT: Use the onclick function inside HTML
  * HINT: Look into using this keyword
  * HINT: Use the classlist property
  * HINT: Toggle .active class for the button
  */
 function makeBold(elem){
     // CODE GOES HERE
     elem.classList.toggle('active');
     document.getElementById('text-output').classList.toggle('bold');
 }

 /**
  * Toggle the italic class for the output text
  */
 function makeItalic(elem){    
    elem.classList.toggle('active');
    document.getElementById('text-output').classList.toggle('italic'); 
 }

 /**
  * Toggle the underline class for the output text
  * HINT: Toggle the .active class for the button
  * HINT: Use the classList properties
  * HINT: Use contains, remove, and add function
  */
 function makeUnderline(elem){
     //CODE GOES HERE
    elem.classList.toggle('active');
    let formattedText = document.getElementById('text-output');
    if(formattedText.classList.contains('underline')){
        formattedText.classList.remove('underline');
    } else {
        formattedText.classList.add('underline')
    }
 }

 /**
  * Toggle the style textAlign attribute
  * Toggle the active state for the align buttons
  * HINT: Use the style property of the emement to the
  * HINT: make sure to untoggle the active state for all other align button
  */
 function alignText(elem, alignType){
     //CODE GOES HERE
    elem.classList.toggle('active');
    document.getElementById('text-output').style.textAlign = alignType;
    let buttonList = document.getElementsByClassName('align');
    for(let i = 0; i < buttonList.length; i++){
        buttonList[i].classList.remove('active');
    }
    elem.classList.add('active');
 }