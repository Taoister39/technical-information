const imageUrlToCanvas = (
  url: string,
  width: number,
  height: number
): HTMLCanvasElement => {
  const image = new Image();
  image.src = url;

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (ctx === null) {
    throw new Error("创建canvas失败");
  }

  canvas.width = width;
  canvas.height = height;

  ctx.drawImage(image, 0, 0, width, height);
  return canvas;
};

export default imageUrlToCanvas;
