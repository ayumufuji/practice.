// スライド1枚あたりの幅（px）
const slideWidth = 400;

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

/**
 * selectorに該当するタブを表示する関数
 */
const showTab = (selector) => {
  // 引数selectorの中身をコンソールで確認する
  console.log(selector);

  /* 1. タブの選択状態のリセット */

  // いったん、すべての.tabs-menu > liからactiveクラスを削除する
  $('.tabs-menu > li').removeClass('active');

  // いったん、すべての.tabs-content > sectionを非表示にする
  $('.tabs-content > section').hide();

  /* 2. 選択されたタブの表示 */

  // .tabs-menu liのうち、selectorに該当するものにだけactiveクラスを付ける
  $(`.tabs-menu a[href="${selector}"]`)
    .parent('li')
    .addClass('active');

  // .tabs-content > sectionのうち、selectorに該当するものだけを表示する
  $(selector).show();
};

// タブがクリックされたらコンテンツを表示
$('.tabs-menu a').on('click', (e) => {
  // hrefへのページ遷移を止める
  e.preventDefault();

  // hrefの値を受け取った後、showTab()関数に渡す。e.targetはクリックされたタブ（.tabs-menu a）を表す
  const selector = $(e.target).attr('href');
  showTab(selector);
});

// 初期状態として1番目のタブを表示
showTab('#tabs-1');


 

