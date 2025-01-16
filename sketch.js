let lines;
let counts;
let field;
let button;
function preload() {
  lines = loadStrings('genesis.txt');
}
function setup() {
  createCanvas(400, 300);
  // join lines so we have a string, not an array
  // of strings!
  counts = RiTa.concordance(lines.join(" ")); 
  console.log(counts);

  // create UI
  field = createInput();
  button = createButton("Get word count");
  button.mousePressed(displayCount);

  // set drawing parameters
  background(50);
  textAlign(CENTER, CENTER);
  textSize(24);
  noStroke();
  fill(255);
  noLoop();
}
function draw() {
}
function displayCount() {
  background(50);
  let word = field.value();
  let wordCount = 0;
  if (counts.hasOwnProperty(word)) {
    wordCount = counts[word];
  }
  text(wordCount, wip-dth/2, height/2);
}
