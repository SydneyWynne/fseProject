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
  functions[rand]();
  noLoop();}

const a = function A(){
  line(0, 400, 200, 0);
  line(200, 0, 400, 400);
  line(100, 200, 300, 200);
}
const b = function B(){
  line(0, 0, 0, 400);
  line(0, 0, 200, 0);
  line(0, 200, 200, 200);
  line(0, 400, 200, 400);
  arc(200, 100, 200, 200, 4.71, 1.57);
  arc(200, 300, 200, 200, 4.71, 1.57);
}
const c = function C(){
  arc(200, 200, 400, 400, 0.8, 5.4);
}
function D(){}
function E(){}
function F(){}
function G(){}
function H(){}
function I(){
  line(200, 50, 200, 350);
  line(100, 50, 300, 50);
  line(100, 350, 300, 350);}
function J(){}
function K(){}
function L(){}
function M(){}
function N(){}
function O(){}
function P(){}
function Q(){}
function R(){}
function S(){}
function T(){}
function U(){}
function V(){}
function W(){}
function X(){}
function Y(){}
function Z(){}

const functions = {1: a, 2: b, 3: c, 4: d};
