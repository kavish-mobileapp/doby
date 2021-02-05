var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["6f383440-d349-4a36-ba63-a5e081f2ca74","74bee4bb-d3e1-42bd-b611-cf20b57e62ee","124f8405-3a3f-4078-a63f-bbf4dc3866b3","687a0409-67cc-4850-92d9-c9a789ec711a","21d268e0-3563-4419-80f2-a00feb6b54f5","92569241-86aa-4240-8eee-149a36bc8a61","937923bc-6e41-4af8-a10a-f8352247be1e","aa3c44d2-1370-4e21-bc97-fa249bc567e3","6e111620-b846-4497-b569-f54ee137a8da","0827938a-95d4-4c67-8af8-c7b72c9a5489","fff92c45-19f7-475a-a5f3-eab39b90ef8b","f30c283e-0d6c-4f1e-ae8b-0cf6b561cf01"],"propsByKey":{"6f383440-d349-4a36-ba63-a5e081f2ca74":{"name":"doby","sourceUrl":"assets/api/v1/animation-library/gamelab/89V4FB8QpN_aEUdjKIkRY58kY6L0Z.ym/category_characters/kid_2.png","frameSize":{"x":293,"y":412},"frameCount":1,"looping":true,"frameDelay":2,"version":"89V4FB8QpN_aEUdjKIkRY58kY6L0Z.ym","categories":["characters"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":293,"y":412},"rootRelativePath":"assets/api/v1/animation-library/gamelab/89V4FB8QpN_aEUdjKIkRY58kY6L0Z.ym/category_characters/kid_2.png"},"74bee4bb-d3e1-42bd-b611-cf20b57e62ee":{"name":"sunShine","sourceUrl":"assets/api/v1/animation-library/gamelab/aKdIMfQ6ZOpZAiQLYFZjgwSjbxifm1eU/category_backgrounds/sunshine_showers.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"aKdIMfQ6ZOpZAiQLYFZjgwSjbxifm1eU","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/aKdIMfQ6ZOpZAiQLYFZjgwSjbxifm1eU/category_backgrounds/sunshine_showers.png"},"124f8405-3a3f-4078-a63f-bbf4dc3866b3":{"name":"cactus_1","sourceUrl":"assets/api/v1/animation-library/gamelab/VYzliHlUTL2SWqwxkbMhDVVLcygS3g5r/category_obstacles/cactus.png","frameSize":{"x":117,"y":160},"frameCount":1,"looping":true,"frameDelay":2,"version":"VYzliHlUTL2SWqwxkbMhDVVLcygS3g5r","categories":["obstacles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":117,"y":160},"rootRelativePath":"assets/api/v1/animation-library/gamelab/VYzliHlUTL2SWqwxkbMhDVVLcygS3g5r/category_obstacles/cactus.png"},"687a0409-67cc-4850-92d9-c9a789ec711a":{"name":"doby1","sourceUrl":"assets/api/v1/animation-library/gamelab/ELZYpE7d5194Fj1d4Cp5B80PiWqbXZuq/category_characters/alienBlue_walk.png","frameSize":{"x":69,"y":98},"frameCount":2,"looping":true,"frameDelay":2,"version":"ELZYpE7d5194Fj1d4Cp5B80PiWqbXZuq","categories":["characters"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":138,"y":98},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ELZYpE7d5194Fj1d4Cp5B80PiWqbXZuq/category_characters/alienBlue_walk.png"},"21d268e0-3563-4419-80f2-a00feb6b54f5":{"name":"doby2","sourceUrl":"assets/api/v1/animation-library/gamelab/RNV_AFndfpZCAO2WgYfTcGwk3K2SP_kb/category_characters/alienPink_walk.png","frameSize":{"x":72,"y":98},"frameCount":2,"looping":true,"frameDelay":2,"version":"RNV_AFndfpZCAO2WgYfTcGwk3K2SP_kb","categories":["characters"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":144,"y":98},"rootRelativePath":"assets/api/v1/animation-library/gamelab/RNV_AFndfpZCAO2WgYfTcGwk3K2SP_kb/category_characters/alienPink_walk.png"},"92569241-86aa-4240-8eee-149a36bc8a61":{"name":"city_1","sourceUrl":"assets/api/v1/animation-library/gamelab/OGMmhuYDozWZhjtNHQkjhdvs2Ge_Q0UF/category_backgrounds/city.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"OGMmhuYDozWZhjtNHQkjhdvs2Ge_Q0UF","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/OGMmhuYDozWZhjtNHQkjhdvs2Ge_Q0UF/category_backgrounds/city.png"},"937923bc-6e41-4af8-a10a-f8352247be1e":{"name":"desert_1","sourceUrl":null,"frameSize":{"x":640,"y":960},"frameCount":1,"looping":true,"frameDelay":12,"version":"ScuUg6CMEq57UUaaOaytkmKRVNY5aK2g","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":640,"y":960},"rootRelativePath":"assets/937923bc-6e41-4af8-a10a-f8352247be1e.png"},"aa3c44d2-1370-4e21-bc97-fa249bc567e3":{"name":"monster_02_1","sourceUrl":"assets/api/v1/animation-library/gamelab/5Y28O_pxoeXEynI1cMG.QKBo6kHjppEI/category_fantasy/monster_02.png","frameSize":{"x":326,"y":391},"frameCount":1,"looping":true,"frameDelay":2,"version":"5Y28O_pxoeXEynI1cMG.QKBo6kHjppEI","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":326,"y":391},"rootRelativePath":"assets/api/v1/animation-library/gamelab/5Y28O_pxoeXEynI1cMG.QKBo6kHjppEI/category_fantasy/monster_02.png"},"6e111620-b846-4497-b569-f54ee137a8da":{"name":"zombi","sourceUrl":"assets/api/v1/animation-library/gamelab/l9wpOFX9zNsawNAqqiXDvX139CaABJG2/category_fantasy/monster_04.png","frameSize":{"x":268,"y":368},"frameCount":1,"looping":true,"frameDelay":2,"version":"l9wpOFX9zNsawNAqqiXDvX139CaABJG2","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":268,"y":368},"rootRelativePath":"assets/api/v1/animation-library/gamelab/l9wpOFX9zNsawNAqqiXDvX139CaABJG2/category_fantasy/monster_04.png"},"0827938a-95d4-4c67-8af8-c7b72c9a5489":{"name":"underground_1","sourceUrl":"assets/api/v1/animation-library/gamelab/hzoueTEpVpUpDkcmb6puB.nWTgQBwcqz/category_backgrounds/underground.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"hzoueTEpVpUpDkcmb6puB.nWTgQBwcqz","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/hzoueTEpVpUpDkcmb6puB.nWTgQBwcqz/category_backgrounds/underground.png"},"fff92c45-19f7-475a-a5f3-eab39b90ef8b":{"name":"pieceYellow_border10_1","sourceUrl":"assets/api/v1/animation-library/gamelab/99wrHeiqGHwoDISNoDJ6fXR84mqh8GYY/category_board_games_and_cards/pieceYellow_border10.png","frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":2,"version":"99wrHeiqGHwoDISNoDJ6fXR84mqh8GYY","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/api/v1/animation-library/gamelab/99wrHeiqGHwoDISNoDJ6fXR84mqh8GYY/category_board_games_and_cards/pieceYellow_border10.png"},"f30c283e-0d6c-4f1e-ae8b-0cf6b561cf01":{"name":"alienPink_jump_1","sourceUrl":"assets/api/v1/animation-library/gamelab/nB78r8U_PAmduNeUoO_d3kbqpIf5Bp54/category_fantasy/alienPink_jump.png","frameSize":{"x":67,"y":93},"frameCount":1,"looping":true,"frameDelay":2,"version":"nB78r8U_PAmduNeUoO_d3kbqpIf5Bp54","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":67,"y":93},"rootRelativePath":"assets/api/v1/animation-library/gamelab/nB78r8U_PAmduNeUoO_d3kbqpIf5Bp54/category_fantasy/alienPink_jump.png"}}};
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

  
  var doby,ground;
 var invisibleGround;
 var zombi,coinGroup,zombiGroup;
 var score = 0;
 var gameState = "Play";
 function setup() {
  createCanvas(400,400);
  
  ground = createSprite(0, 390, 450, 200);
 //ground.setAnimation("underground_1");
 ground.scale = 1.9;
 doby = createSprite(50, 300, 50, 50);
  doby.setAnimation("doby2");
  doby.scale = 0.9;
  invisibleGround = createSprite(150,310,400,15);
  invisibleGround.visible = false;
  
 coinGroup = createGroup();
  zombiGroup= createGroup();
}

function draw() {
  background("lightblue");
  
  fill("red");
  textSize(25)
  text("score = "+score,250,50);
  if(gameState === "Play"){
  ground.velocityX = -2;
  
  //to create infinet ground
  
  
if (ground.x <200) {
    ground.x = 400;
  }
    
  if(keyDown('left')){
    doby.x = doby.x-2;

  }
  if(keyDown('right')){
    doby.x = doby.x +2;
    
  }
  
  if(keyDown('space')){
    doby.velocityY = -9;
    
  }
  doby.velocityY = doby.velocityY + 0.6;
  
  if (coinGroup.isTouching(doby)) {
    score = score +5;
  playSound("assets/category_points/vibrant_game_ding_touch_1.mp3");
      
  }
  
  doby.collide(invisibleGround);
  spawnCoin();
  spawnZombi();
  
  if(zombiGroup.isTouching(doby)){
    gameState = "END";
   playSound("assets/category_hits/vibrant_game_deep_hit.mp3");
   
  }
  }
  if(gameState === "END"){
    ground.velocityX = 0;
    doby.velocityY = 0;
    
    textSize(30);
    fill("red");
   text("GAME OVER",130,130);  
    
    zombiGroup.setVelocityXEach(0);
    coinGroup.setVelocityXEach(0);
    
    zombiGroup.setLifetimeEach(-1);
    coinGroup.setLifetimeEach(-1);
    
    doby.setAnimation("alienPink_jump_1");
    
  }
  drawSprites();
}

function spawnCoin(){
  if(World.frameCount % 120 === 0) {
    var coin = createSprite(214,300,10,40);
    coin.y = randomNumber(200,320);
    coin.velocityX = -6;
    coin.setAnimation("pieceYellow_border10_1");
    coin.scale = 0.8;
    coinGroup.add(coin);
}
}
function spawnZombi(){
  if(World.frameCount % 120 === 0) {
     zombi = createSprite(400,300,10,40);
     zombi.y = randomNumber(260,350);
    zombi.velocityX = -6;
    zombi.setAnimation("zombi");
    zombi.scale = 0.2;
    zombiGroup.add(zombi);
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
