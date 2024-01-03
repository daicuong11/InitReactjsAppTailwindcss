import { forwardRef, useImperativeHandle, useRef } from 'react';
import video1 from '../../../videos/video-1.mp4';

function Video(props, ref) {

    const videoRef = useRef();

    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play();
        },
        pause() {
            videoRef.current.pause();
        }
    }))

    return (
        <video ref={videoRef} className='mx-auto mt-5' width={280} src={video1}></video>
    );
}

export default forwardRef(Video);