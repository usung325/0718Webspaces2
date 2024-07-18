const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const im1 = new Image();
im1.src = "./im2.jpeg"

im1.onload = function initialize(){
    canvas.width = im1.width;
    canvas.height = im1.height;
    ctx.drawImage(im1, 0, 0);
    // const cellSize = 10;
    const imData = ctx.getImageData(0, 0, im1.width, im1.height);
    const pixelAvg = 0;
    console.log(imData.data);

    for (var y = 0; y < imData.height; y += 1){
        for (var x = 0; x < imData.width; x += 1){
            var i = (y * imData.width + x) * 4; 
            //need on both 4y and 4x because 
            //4y * imData.width gives rgba for entire width worth of pixels. so its widthpixels * 4 (to account for rgba).
            //4x is now to increment per pixel.
            var averageCol = Math.floor((imData.data[i] + imData.data[i+1] + imData.data[i+2])/3);
            // pixelAvg += imData.data[i];
            // pixelAvg += imData.data[i+1];
            // pixelAvg += imData.data[i+2];
            imData.data[i] = averageCol;
            imData.data[i+1] = averageCol;
            imData.data[i+2] = averageCol;
        }
    }
    ctx.putImageData(imData, -0, 0, 0, 0, imData.width , imData.height);
}


// im1.addEventListener("load", function(){
    
    
//     // console.log(imData);
// })


