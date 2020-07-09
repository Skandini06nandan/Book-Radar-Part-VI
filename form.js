class Form{
constructor(){
    //1st screen to be displayed
    this.input =createInput();
    this.button =createButton('Submit');
  
    this.greeting =createElement('h2');
this.title =createElement('h2')
}
display(){
this.title.html("Welcome to the Book Radar");
this.title.position(100,10);

this.button.position(470,210);
this.input.position(300,210);
 
this.greeting.html("Enter your name");
this.greeting.position(300,130);
//when user clicks the submit button
this.button.mousePressed(()=>{
this.input.hide();
this.button.hide();
this.greeting.hide();


});


}}