


	var myVoice = new p5.Speech(); // new P5.Speech object

	var listbutton; // button

	function setup()
	{
		// graphics stuff:
		createCanvas(windowWidth , windowHeight) ;


    input = createInput();
    input.position(20, 80);
    //input.size(10000000);

    button = createButton( "klick me" );
    button.position(200, 80);
    button.mouseClicked(talk);
    myVoice.setRate(0.9);

	}


  function websiteVisits(response) {
    document.querySelector("#visits").textContent = response.value;
}

	function draw()
	{
    
		
	}

  function talk(){
    
    x = input.value();
    const myArray = x.split(" ");

    for(let i = 2; i < myArray.length; i+=3){
      myArray[i] = "rats";
    }

    str = "";
    for(let j = 0; j < myArray.length; j++){
      str += myArray[j] + " ";
    }
    
    myVoice.speak(str);
    
  }




  function keyPressed() {

    
    x = input.value();
    const myArray = x.split(" ");

    for(let i = 2; i < myArray.length; i+=3){
      myArray[i] = "rats";
    }

    str = "";
    for(let j = 0; j < myArray.length; j++){
      str += myArray[j] + " ";
    }
    if(key == 'S'){
      myVoice.speak(str);
    }
}

