// スライド1枚あたりの幅（px）
const slideWidth = 500;

// 現在表示中のスライドが何番目か（0から数え始める）
let currentSlide = 0;

// スライドの全枚数
let numSlides;

// index（0から始まる）番目のスライドを表示する関数
const showSlide = (index) => {
  // 1番目のスライドでは左矢印を非表示
  if (index === 0) {
    $('.carousel-control-prev').hide();
  } else {
    $('.carousel-control-prev').show();
  }

  // 最後のスライドでは右矢印を非表示
  if (index === numSlides - 1) {
    $('.carousel-control-next').hide();
  } else {
    $('.carousel-control-next').show();
  }

  // 実行中のアニメーションがあればキャンセルした後、
  // leftを変化させるアニメーションを開始
  $('.slides')
    .stop()
    .animate(
      {
       left: `${-slideWidth * index}px`,
      },
      600,
    );
};

// 左矢印がクリックされたら1つ前のスライドを表示
$('.carousel-control-prev').on('click', (e) => {
  e.preventDefault();

  currentSlide -= 1;
  showSlide(currentSlide);
});

// 右矢印がクリックされたら1つ後のスライドを表示
$('.carousel-control-next').on('click', (e) => {
  e.preventDefault();

  currentSlide += 1;
  showSlide(currentSlide);
});

// スライドが全部で何枚あるか取得
numSlides = $('.slides > li').length;

// 最初のスライドを表示
showSlide(currentSlide);

const $box = $('.box');

$('.my-button-in').on('click', () => {
  $box.fadeIn();
});

$('.my-button-out').on('click', () => {
  $box.fadeOut();
});

const $box2 = $('.box2');

$('.my-button-in2').on('click', () => {
  $box2.fadeIn();
});

$('.my-button-out2').on('click', () => {
  $box2.fadeOut();
});

var img = new Array();

img[0] = new Image();
img[0].src = "../images/img7.jpg";
img[1] = new Image();
img[1].src = "../images/img8.jpg";
img[2] = new Image();
img[2].src=  "../images/img9.jpg";
img[3] = new Image();
img[3].src=  "../images/img10.jpg";
img[4] = new Image();
img[4].src=  "../images/img11.jpg";



//画像番号用のグローバル変数
var cnt=0;


//画像切り替え関数
function changeIMG(){
  
  //画像番号を進める
  if (cnt == 3)
  { cnt=0; }
  else
  { cnt++; }
  
  //画像を切り替える
  document.getElementById("gazo").src=img[cnt].src;
}

