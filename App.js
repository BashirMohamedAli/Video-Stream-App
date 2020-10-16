navigator.mediaDevices.getUserMedia({
    video: {
        width: {
            min: 640,
            max: 1280
        },
        height: {
            min: 480,
            max: 720
        },
    }
})
.then(stream => {
    document.getElementById("bashir").srcObject = stream;
})