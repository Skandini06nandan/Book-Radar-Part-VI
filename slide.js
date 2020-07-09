class Slide{
    constructor(){
    
        this.button1 =createButton('Create your 1st Record')
        this.button2 =createButton('+');
        this.greeting =createElement('h2');
    this.title =createElement('h2')
    }
    display(){
    this.title.html("Good evening + name");
    this.title.position(100,10);
    
    
    this.button1.position(100,200);
    this.button2.position(10,70);
    //this.input.position(300,210);

    this.button1.mousePressed(()=>{
   
    this.greeting.hide();
    this.record1 =new Record();
   
    this.button2.hide();
    this.button1.hide();
    });
    
    
    }}