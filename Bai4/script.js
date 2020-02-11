function Rectangle(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
}
function creatRectangle() {
    let ctx = document.getElementById(`myCanvas`).getContext("2d");
    let rectangle = new Rectangle(10,10,200,100, `#088A08`);
    ctx.fillStyle = `#088A08`;
    ctx.beginPath();
    ctx.rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    ctx.fill();
}
creatRectangle();