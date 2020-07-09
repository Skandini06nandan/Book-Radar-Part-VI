class Record{
   constructor(){
        this.b =createInput();
        this.a =createInput();
        this.p =createInput();
        this.s =createInput();
        this.specific =createInput('Anything specific');
        this.input5 =createInput('(optional)');

        this.book =createButton('Book"s Name');
        this.author=createButton('Authors Name');
        this.page =createButton('Total Pages')
        this.shelf= createButton('Shelf no.');
        this.extras =createButton('for adding more books/files');
        this.add =createButton('+')
        this.save=createButton('Śave');
        
        this.greeting =createElement('h2');
        this.title =createElement('h2')

        this.number =createInput();
    }
    display(){
    this.title.html("Record I");
    this.title.position(100,10);
    
    this.book.position(80,80);
    this.author.position(80,120);
    this.page.position(80,160);
    this.shelf.position(80,200);
    this.save.position(80,400);
    this.extras.position(180,300);

    this.b.position(200,80);
    this.a.position(200,120);
    this.p.position(200,160);
    this.s.position(200,200);
    this.save.position(240,350);

    this.specific.position(80,240);
    this.input5.position(200,240);
    this.add.position(250,280);

    this.save.mousePressed(()=>{
        book.name = this.book.value();
        recordCount+=1;
    
        recordCount.update();
        book.updateCount(recordCount);
        
      });
    
    }}