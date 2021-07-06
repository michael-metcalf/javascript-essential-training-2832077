class Pen {
  constructor(
    type,
    penColor,
    multipleInkColors,
    inkColors,
    hasInk,
    rubberGrip
  ) {
    this.type = type;
    this.penColor = penColor;
    this.multipleInkColors = multipleInkColors;
    this.inkColors = inkColors;
    this.hasInk = hasInk;
    this.rubberGrip = rubberGrip;
  }
  changePenColor(newPenColor) {
    this.penColor = newPenColor;
  }
}

export default Pen;