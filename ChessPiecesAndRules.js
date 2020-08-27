(function () {
  ("use strict");

  let findPiece = (icon) => {
    /*
    ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"],
    ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],

    ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
    ["♟︎", "♟︎", "♟︎", "♟︎", "♟︎", "♟︎", "♟︎", "♟︎"],
    */
    switch (icon) {
      case "♖":
        return "benteng-putih";
      case "♘":
        return "kuda-putih";
      case "♗":
        return "rencong-putih";
      case "♕":
        return "ratu-putih";
      case "♔":
        return "raja-putih";
      case "♙":
        return "pion-putih";
      case "♜":
        return "benteng-hitam";
      case "♞":
        return "kuda-hitam";
      case "♝":
        return "rencong-hitam";
      case "♛":
        return "ratu-hitam";
      case "♚":
        return "raja-hitam";
      case "♟︎":
        return "pion-hitam";
      default:
        return;
    }
  };
})();
