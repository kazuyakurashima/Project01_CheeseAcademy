// jsを記述する際はここに記載していく
// ページ内のIDが"heading1"または"heading2"の要素を取得して、headingという変数に入れる
const headings = document.querySelectorAll('#heading1, #heading2');

// keyframesは「アニメーションの動き」を決める部分です。具体的に、2つの動きが設定されています
const keyframes = {
    opacity: [0, 1],              // アニメーションの始めは透明（0）から、最後には完全に表示される（1）ように設定
    translate: ['0 50px', 0],     // アニメーションの始めは下に50pxずれた位置から、最終的には元の位置（0）に戻るように設定
};

const options = {
    duration: 4000,               // アニメーションが4000ミリ秒（4秒）で終わるように設定
    easing: 'ease',               // アニメーションの進行が「ease（滑らかに）」になるように設定
};

// 各heading要素に対してアニメーションを適用
headings.forEach((heading) => {
    heading.animate(keyframes, options);
});


const items = document.querySelectorAll('.img-item');

for (let i = 0; i < items.length; i++) {
    const keyframes = {
        opacity: [0, 1],
        rotate: ['5deg', 0],
        scale: [1.1, 1],
    };
    const options = {
        duration: 1000,
        delay: i * 300,
        fill: 'forwards',
    };
    items[i].animate(keyframes, options);
}
