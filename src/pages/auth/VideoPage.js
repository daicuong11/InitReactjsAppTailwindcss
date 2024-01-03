import { useRef } from 'react';
import Video from '../../components/project/video';

function VideoPage() {

    const videoRef = useRef();

    const handlePlayVideo = () => {
        videoRef.current.play();
    }

    const handlePauseVideo = () => {
        videoRef.current.pause();
    }

    return (
        <div className="">
            <Video ref={videoRef} />
            <button onClick={handlePlayVideo} className='px-3 py-[6px] rounded-md bg-gray-500 hover:bg-gray-600'>Play</button>
            <button onClick={handlePauseVideo} className='px-3 py-[6px] rounded-md bg-gray-500 hover:bg-gray-600'>Pause</button>
        </div>
    );
}

export default VideoPage;