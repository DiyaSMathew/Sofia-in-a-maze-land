var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//creating the player Sofia 
var Sofia = createSprite(50, 50, 10, 10);
   

//creating the maze walls (wall1 - wall2)
  var wall1 =createSprite(10, 70, 100, 20);
  var wall2 =createSprite(100, 3, 20, 200);
  var wall3 =createSprite(150, 50, 100, 20);
  var wall4 =createSprite(250, 100, 100, 20);
  var wall5 =createSprite(30, 150, 100, 20);
  var wall6 =createSprite(90, 300, 20, 100);
  var wall7 =createSprite(300, 100, 20, 130);
  var wall8 =createSprite(400, 56, 100, 20);
  var wall9 =createSprite(150, 200, 20, 100);
  var wall10 =createSprite(250, 200, 20, 100);
  var wall11 =createSprite(170, 200, 50, 20);
  var wall12 =createSprite(300, 300, 100, 20);
  var wall13 =createSprite(200, 350, 20, 100);
  var wall14 =createSprite(200, 350, 100, 20);
  var wall15 =createSprite(350, 100, 100, 20);
  var wall16 =createSprite(350, 250, 100, 20);
  var wall17 =createSprite(50, 300, 100, 20);
  var wall18 =createSprite(400, 10, 100, 20);
  var wall19 =createSprite(30, 400, 100, 20);
  var wall20 =createSprite(40, 249, 20, 100);
  var wall21 =createSprite(10, 70, 100, 20);
  var wall22 =createSprite(10, 70, 100, 20);

//create cup
var cup = createSprite(347, 400, 100, 20)
  cup.shapeColor = "yellow"
  
function draw() {
  //setting the background color to violet
  background("violet");
  
  Sofia.shapeColor = "white";


drawSprites();

if (keyDown(UP_ARROW)) {
  
Sofia.velocityX =0;
Sofia.velocityY =-4;
}

if (keyDown(LEFT_ARROW)) {
  
  Sofia.velocityX =-4;
Sofia.velocityY = 0;
}

if (keyDown(RIGHT_ARROW)) {
  
Sofia.velocityX =4;
Sofia.velocityY =0;
}
checkwin()
if (keyDown(DOWN_ARROW)) {
  
  Sofia.velocityX =0;
Sofia.velocityY = 4;
}
 createEdgeSprites();
 Sofia.bounceOff(edges);
 
 
Sofia.bounceOff(wall1);
Sofia.bounceOff(wall2);
Sofia.bounceOff(wall3);
Sofia.bounceOff(wall4);
Sofia.bounceOff(wall5);
Sofia.bounceOff(wall6);
Sofia.bounceOff(wall7);
Sofia.bounceOff(wall8);
Sofia.bounceOff(wall9);
Sofia.bounceOff(wall10);
Sofia.bounceOff(wall11);
Sofia.bounceOff(wall12);
Sofia.bounceOff(wall13);
Sofia.bounceOff(wall14);
Sofia.bounceOff(wall15);
Sofia.bounceOff(wall16);
Sofia.bounceOff(wall17);
Sofia.bounceOff(wall18);
Sofia.bounceOff(wall19);
Sofia.bounceOff(wall20);
Sofia.bounceOff(wall21);
Sofia.bounceOff(wall22);
 

}






function resetSofia()
{
  
}

function checkwin()
{
  if ( Sofia.isTouching(cup))  
{
  textSize(40);
  stroke("black");
  text("You Win", 200,200);
  }
}























// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
