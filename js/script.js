// mvのスライダーアニメーションの記述

$(function () {
  $(".mv__slider").slick({
    autoplay: true, // 自動でスクロール
    autoplaySpeed: 3000, // 自動再生のスライド切り替えまでの時間を設定
    speed: 1500, // スライドが流れる速度を設定
    cssEase: "ease-in-out", // スライドの流れ方を等速に設定
    slidesToShow: 1, // 表示するスライドの数
    swipe: false, // 操作による切り替えはさせない
    arrows: false, // 矢印非表示
    pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
    pauseOnHover: false, // スライダーにマウスホバーした時にスライドを停止させるか
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3, // 画面幅750px以下でスライド3枚表示
        },
      },
    ],
  });
});

// topのスライダー
// script.js
$(document).ready(function () {
  var currentIndex = 0;
  var slides = $('.slider__list__item');
  var slideCount = slides.length;
  var slideWidth = $('.slider__list__item').width();

  function changeBackground() {
    currentIndex++;
    if (currentIndex < slideCount - 1) {
      $('.slider__list').css({
        'transform': 'translateX(' + (-100 * currentIndex) + '%)',
        'transition': 'transform 1s ease'
      });
    } else {
      $('.slider__list').css({
        'transform': 'translateX(' + (-100 * currentIndex) + '%)',
        'transition': 'transform 1s ease'
      });
      // 次のスライドへの移動が完了した後に先頭に戻る
      setTimeout(function () {
        $('.slider__list').css({
          'transform': 'translateX(0)',
          'transition': 'none'
        });
        currentIndex = 0;
      }, 1000); // アニメーションの時間に合わせる
    }
  }

  setInterval(changeBackground, 3000); // 3秒ごとにスライドを切り替え
});