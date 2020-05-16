class Form {

  constructor() {
    this.input = createInput("Name");
    this.startButton = createButton('start');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
    this.sectionTitle= createElement("h2")
    this.descriptionTitle=createElement("h2")
    this.moviesButton=createButton('Movies')  
    this.scienceButton=createButton('Science')  
    this.tvButton=createButton('TV Serials')
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  displaySectionScreen(){

    this.input.hide();
      this.startButton.hide();
      this.title.hide();


    this.sectionTitle.html("quiz master");
    this.sectionTitle.position(displayWidth/2 - 50, 0);
  
    this.descriptionTitle.html("choose ur categories");
    this.descriptionTitle.position(displayWidth/2 - 100, displayHeight/4-100);

    this.greeting.html("Hello " + player.name)
    this.greeting.position(displayWidth/2 - 50, displayHeight/4);


    
    this.moviesButton.position(displayWidth/2 -100, displayHeight/2);
    this.scienceButton.position(displayWidth/2 , displayHeight/2);
    this.tvButton.position(displayWidth/2 + 100, displayHeight/2);
    
   
    this.moviesButton.mousePressed(()=>{
      this.greeting.hide();
      this.sectionTitle.hide();
      this.descriptionTitle.hide();
      this.moviesButton.hide();
      this.scienceButton.hide();
      this.tvButton.hide();
      gameState="movies"
    
    });
    this.scienceButton.mousePressed(()=>{
      this.greeting.hide();
      this.sectionTitle.hide();
      this.descriptionTitle.hide();
      this.moviesButton.hide();
      this.scienceButton.hide();
      this.tvButton.hide();
      gameState="science"
    
    });
    this.tvButton.mousePressed(()=>{
      this.greeting.hide();
      this.sectionTitle.hide();
      this.descriptionTitle.hide();
      this.moviesButton.hide();
      this.scienceButton.hide();
      this.tvButton.hide();
      gameState="tv"
    });



  }
  displayStartScreen(){
    this.title.html("quiz master");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.startButton.position(displayWidth/2 + 30, displayHeight/2);

    this.startButton.mousePressed(()=>{
      this.input.hide();
      this.startButton.hide();
      this.title.hide();
      player.name = this.input.value()
      gameState="section"
     
     
    });

  }
  displayMovies(){
    text("movie questions",displayWidth/2,displayHeight/2)
  }
  displayScience(){
    text("science questions",displayWidth/2,displayHeight/2)
  }
  displayTv(){
    text("tv questions",displayWidth/2,displayHeight/2)
  }
}
