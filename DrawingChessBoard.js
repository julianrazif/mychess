(function () {
  ("use strict");

  //    a, b, c, d, e, f, g, h
  // 8  ♜, ♞, ♝, ♛, ♚, ♝, ♞, ♜
  // 7  ♟︎, ♟︎, ♟︎, ♟︎, ♟︎, ♟︎, ♟︎, ♟︎
  // 6
  // 5
  // 4
  // 3
  // 2  ♙, ♙, ♙, ♙, ♙, ♙, ♙, ♙
  // 1  ♖, ♘, ♗, ♕, ♔, ♗, ♘, ♖
  //    a, b, c, d, e, f, g, h

  const papan = [
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
  ];

  const putih = [
    ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"],
    ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
  ];

  const hitam = [
    ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
    ["♟︎", "♟︎", "♟︎", "♟︎", "♟︎", "♟︎", "♟︎", "♟︎"],
  ];

  // fungsi utama untuk membuat tampilan chess board
  // akan me-return element-element yang berhasil dibuat dari hasil
  // looping variable array (putih) dan variable array (hitam)
  // kedalam variable array (papan) hingga membentuk papan catur
  // beserta bidak bidaknya
  let render = () => {
    // mengisi papan dengan bidak hitam
    for (let y = 0; y < hitam.length; y++) {
      for (let x = 0; x < papan[y].length; x++) {
        papan[y][x] = hitam[y][x];
      }
    }

    // mengisi papan dengan bidak putih
    for (let y = papan.length; y > papan.length - putih.length; y--) {
      for (let x = 0; x < papan[y - 1].length; x++) {
        papan[y - 1][x] = putih[papan.length - y][x];
      }
    }

    // fungsi menentukan warna petak di papan dan posisi bidak
    let initpapan = (index, bidak) => {
      if (index === 0) {
        return `<div class="col square white span-1-of-8">${bidak}</div>`;
      } else {
        return `<div class="col square black span-1-of-8">${bidak}</div>`;
      }
    };

    let str = "";

    for (let i = 0; i < papan.length; i++) {
      str += `<div class="row">`;
      for (let j = 0; j < papan[i].length; j++) {
        str += initpapan((j % 2) - (i % 2), papan[i][j]);
      }
      str += `</div>`;
    }

    return str;
  };

  // mendapatkan element chessboard di dalam div tag html dengan id = 'chessboard'
  let element = document.getElementById("chessboard");

  // memberikan element baru kedalam div tag html tsb
  element.innerHTML = render();
})();
