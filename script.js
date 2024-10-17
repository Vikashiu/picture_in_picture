const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//prompt to select media stream, pass to video element, then play
async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;//mediastream is object so srcOject o.w. if mediaStream is video then we can simply videoElement.src = medi....

        videoElement.onloadedmetadata = () =>{
            videoElement.play();
        }
    }
    catch(error){
        console.log(error);
    }
}

button.addEventListener('click', async () =>{
    //disable button 
    button.ariaDisabled = true;
    //start picture in picture
    await videoElement.requestPictureInPicture();
    // reset Button
    button.disabled = false;
});

selectMediaStream();