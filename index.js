
//take a callback function as an argument & call the callback function
function receivesAFunction(callback){
    callback()
}

//take no arguments & return a named function
function returnsANamedFunction(){
  return function name(){
    //return 'hi im dorahely'
  }
}

//take no arguments return an anonymous function
function returnsAnAnonymousFunction(){
  return function(){
  }
}















//-------------------- end of lab------------------

//-------------lesson---------------------

// first class functions

//Imagine an exercise routine: every morning, we run 5 miles.
//But afterwards — depending on the day — we might lift weights, 
//go for a swim, 
//or run an extra 5 miles.

/*
// we could write a function like this:
function Monday() {
  console.log("Go for a five-mile run");
  console.log("Pump iron");
}

function Tuesday() {
  console.log("Go for a five-mile run");
  console.log("Swim 40 laps");
}

function Wednesday() {
  console.log("Go for a five-mile run");
  console.log("Go for a five-mile run");
}

function Thursday() {
  console.log("Go for a five-mile run");
  console.log("Pump iron");
}

function Friday() {
  console.log("Go for a five-mile run");
  console.log("Swim 40 laps");
}
*/
/*
// but that's too repetitive, what if we pull each activity as it's own function?
function runFiveMiles() {
    console.log("Go for a five-mile run");
  }
function liftWeights() {
    console.log("Pump iron");
  }
  
function swimFortyLaps() {
    console.log("Swim 40 laps");
  }
//and we can also pull the days to look like this:
function Monday() {
    runFiveMiles();
    liftWeights();
}
*/