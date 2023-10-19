function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  stroke('black');
  noFill();
  randomLetter();
}

function randomLetter(){
  let rand = Math.floor(Math.random() * (26 - 1 + 1) + 1);
  letterFuncs[rand]();
  noLoop();}

//Letter Functions ***********

const a_ = function A(){
  line(0, 400, 200, 0);
  line(200, 0, 400, 400);
  line(100, 200, 300, 200);
}
const b_ = function B(){
  line(0, 0, 0, 400);
  line(0, 0, 200, 0);
  line(0, 200, 200, 200);
  line(0, 400, 200, 400);
  arc(200, 100, 200, 200, 4.71, 1.57);
  arc(200, 300, 200, 200, 4.71, 1.57);
}
const c_ = function C(){
  arc(200, 200, 400, 400, 0.8, 5.4);
}
const d_ = function D(){
  line(0,0,0,400);
  line(0,0,100,0);
  line(0,400,100,400);
  arc(100,200,400,400,4.71,1.58);
}
const e_ = function E(){
  line(0,0,0,400);
  line(0,0,200,0);
  line(0,400,200,400);
  line(0,200,150,200);
}
const f_ = function F(){
  line(100, 50, 100, 350);
  line(100, 50, 300, 50);
  line(100, 200, 300, 200);
}
const g_ = function G(){
  arc(200, 200, 300, 300, 0, 5.4);
  line(350, 200, 200, 200);
}
const h_ = function H(){
  line(100, 200, 300, 200);
  line(100, 50, 100, 350);
  line(300, 50, 300, 350);
}
const i_ = function I(){
  line(200, 50, 200, 350);
  line(100, 50, 300, 50);
  line(100, 350, 300, 350);
}
const j_ = function J(){
  line(250, 80, 250, 300);
  arc(200,250,117,180,7,3);
}
const k_ = function K(){
  line(100,100,100,300);
  line(100,200,200,100);
  line(100,200,200,300);
}
const l_ = function L(){
  line(100,100,100,300);
  line(100,300,225,300);
}
const m_ = function M(){
  line(100,100,100,300);
  line(300,100,300,300);
  line(100,100,200,200);
  line(300,100,200,200);
}
const n_ = function N(){
  line(100,100,100,300);
  line(100,100,200,300);
  line(200,100,200,300);
}
const o_ = function O(){
  arc(200,200,200,225,1,0.99)
}
const p_ = function P(){
  line(150,100,150,300);
  arc(100,150,250,110,5.5,0.8);
}
const q_ = function Q(){
  arc(200,200,200,200,10,3.7);
  line(225,225,300,290);
}
const r_ = function R(){
  line(150,100,150,300);
  arc(100,150,250,110,5.5,0.8);
  line(150,200,245,300);
}
const s_ = function S(){
  arc(200, 100, 200, 150, HALF_PI+QUARTER_PI+0.1, TWO_PI);
  arc(200, 300, 200, 150, PI+HALF_PI+QUARTER_PI+0.1, PI);
  line(130, 153.5, 267, 244.5)
}
const t_ = function T(){
  line(75, 50, 325, 50);
  line(200, 50, 200, 350);
}
const u_ = function U(){
  arc(200, 300, 200, 150, 0, PI);
  line(100, 50, 100, 300);
  line(300, 50, 300, 300);
}
const v_ = function V(){
  line(200, 350, 350, 50);
  line(200, 350, 50, 50);
}
const w_ = function W(){
  line(50, 50, 150, 300);
  line(150, 300, 200, 125);
  line(200, 125, 250, 300);
  line(250, 300, 350, 50);
}
const x_ = function X(){
  line(75, 50, 325, 350);
  line(325, 50, 75, 350);
}
const y_ = function Y(){
  line(75, 50, 200, 200);
  line(325, 50, 200, 200);
  line(200, 200, 200, 375);
}
const z_ = function Z(){
  line(50, 50, 350, 50);
  line(50, 350, 350, 50);
  line(350, 350, 50, 350);
}

//array for switching letters using rand

const letterFuncs = {1: a_, 2: b_, 3: c_, 4: d_, 5: e_, 6: f_, 7: g_, 8: h_, 
                  9: i_, 10: j_, 11: k_, 12: l_, 13: m_, 14: n_, 15: o_,
                  16: p_, 17: q_, 18: r_, 19: s_, 20: t_, 21: u_, 22: v_, 
                  23: w_, 24: x_, 25: y_, 26: z_};
