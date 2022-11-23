// by SamuelYAN
// more works //
// https://twitter.com/SamuelAnn0924
// https://www.instagram.com/samuel_yan_1990/

var seed = Math.random() * 1341;
var t;
var num, vNum;
var radius, mySize;
var sizes = [];

let colors = [];
let colors0 = "202020-202020-202020".split("-").map((a) => "#" + a);
let colors7 = "fefefe-fffffb-fafdff-fef9fb-f7fcfe".split("-").map((a) => "#" + a);
// new plette 20220609
let colors3 = "80848C-BFCDD9-D9CAAD-A67A46-BFAE99".split("-").map((a) => "#" + a);
let colors4 = "F28DC4-5EF2E3-F2CB07-F2B807-F2A7A7".split("-").map((a) => "#" + a);
let colors5 = "2D2E40-5B66A6-F27405-F25C05-F2C5BB".split("-").map((a) => "#" + a);
let colors6 = "F2B279-D9936A-BF8069-BF604B-8C665E".split("-").map((a) => "#" + a);
let colors2 = "7ABF85-95BF98-ADBF26-D8D9D0-6F7302".split("-").map((a) => "#" + a);

let colors_cyber = "ee0cf2-352ef2-1df252-f2e41d".split("-").map((a) => "#" + a);
var color_setup1, color_setup2;
let color_bg;
let v_planet = [];

function setup() {
	randomSeed(seed);
	// pixelDensity(5);
	mySize = min(windowWidth, windowHeight);
	// createCanvas(windowWidth, windowHeight);
	createCanvas(mySize, mySize);
	color_setup1 = colors7;
	color_setup2 = random([colors2, colors3, colors4, colors5, colors6]);
	color_bg = random(colors0);
	colors[0] = random(color_setup2);
	colors[1] = random(colors_cyber);
	colors[2] = random(colors_cyber);
	colors[3] = random(colors_cyber);
	background(color_bg);
	num = int(random(20, 10));
	radius = mySize * 0.5;
	for (let a = 0; a < TAU; a += TAU / num) {
		sizes.push(random(0.1, 1))
	}
	t = 0;

}

function draw() {
	// blendMode(BLEND);
	// background(color_bg);
	randomSeed(seed);
	
	// background
  blendMode(BLEND);
  noStroke();
  fill(0);
  let grad = drawingContext.createRadialGradient(0, 0, 0, 0, 0, mySize);
  grad.addColorStop(0, "#141A26");
  grad.addColorStop(1, "#0D0D0D1a");
  drawingContext.fillStyle = grad;
  push();
  translate(width / 2, height / 2);
  circle(0, 0, mySize * 4);
  pop();
  let grid_num = 50;
  let grid_size = mySize / grid_num;
  stroke(str(random(colors))+"07");
  for (let i = 0; i < grid_num; i++) {
    for (let j = 0; j < grid_num; j++) {
      push();
      translate(grid_size * i, grid_size * j);
      noFill();
      
      strokeWeight(grid_size / 100);
      rectMode(CENTER);
      square(0, 0, grid_size);
      pop();
    }
  }
	
	//Asteroid belt
	blendMode(ADD);
	blendMode(ADD);
	blendMode(SCREEN);
	blendMode(SCREEN);
	for (let i = 0; i < num; i++) {
		let a = (TAU / num) * i + t
		let x = radius * sin(a - t) / random(5, 2);
		let y = radius * cos(a - t) / random(2, 5);
		v_planet[i] = createVector(x, y);
	}

	push();
	translate(width / 2, height / 2);
	noStroke();
	fill(random(colors7));
	// circle(0,0,radius*0.75);
	rotate(random(TAU) + t);
	for (let i = 0; i < num; i++) {
		let d = random(radius / 10, radius / 5);
		drawingContext.shadowColor = "#202020";
		drawingContext.shadowOffsetX = 1;
		drawingContext.shadowOffsetY = 1;
		drawingContext.shadowBlur = 0;
		
		let x_plus = 2 * random(-d, d);

		push();
		translate(v_planet[i].x, v_planet[i].y);
		rotate(random(TAU) + t);
		noFill();
		stroke(random(colors));
		if (i > 3) {
			strokeWeight(sizes[i] / 1.5);
			line(v_planet[i - 3].x, v_planet[i - 3].y, v_planet[i - 2].x, v_planet[i - 2].y);
			line(v_planet[i - 1].x, v_planet[i - 1].y, v_planet[i - 2].x, v_planet[i - 2].y);
			line(v_planet[i - 1].x, v_planet[i - 1].y, v_planet[i].x, v_planet[i].y);

			noStroke();
			fill(random(colors));
			rectMode(CENTER);
			rect(v_planet[i - 3].x, v_planet[i - 3].y, d / random(5, 10));
			fill(random(colors));
			rect(v_planet[i - 1].x, v_planet[i - 1].y, d / random(8, 15));
			fill(random(colors));
			circle(v_planet[i - 2].x, v_planet[i - 2].y, d / random(6, 12));
			fill(random(colors));
			circle(v_planet[i].x, v_planet[i].y, d / random(7, 14));
		}
		pop();

		noFill();
		stroke(random(colors));
		if (num % 2 == 0) {
			push();
			translate(v_planet[i].x, v_planet[i].y);
			rotate(random(TAU) - t);
			strokeWeight(sizes[i] / 1.25);
			square(random((v_planet[i].x) / 3 * 4, (v_planet[i].x) / 3), random((v_planet[i].y) / 3 * 4, (v_planet[i].y)), random(d / 10));
			pop();
		}

		if (num % 2 == 1) {
			push();
			translate(v_planet[i].x, v_planet[i].y);
			rotate(random(TAU) + random(-t, t));
			strokeWeight(sizes[i] / 0.25);
			ellipse(random((v_planet[i].x) / 2 * 3, (v_planet[i].x) / 2), random((v_planet[i].y) / 2 * 3, (v_planet[i].y)), random(d / 4), random(d / 4));
			pop();
		}
	}
	pop();
	t += random(0.001, 0.0005);
}

function keyTyped() {
	if (key === "s" || key === "S") {
		saveCanvas("0611_NoisePlanet_Asteroidbelt_2.0_2022", "png");
	}
}