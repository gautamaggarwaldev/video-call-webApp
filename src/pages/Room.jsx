import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";
function Room() {
    const { roomCode } = useParams();
    const serversecret = import.meta.env.VITE_SERVER_SECRET;

    const myMeeting = async (element) =>{
        const appId = 2087594439
        const serverSecret = serversecret;
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appId, serverSecret, roomCode, Date.now().toString(), 'Gautam_Aggarwal');
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            scenario:{
                mode: ZegoUIKitPrebuilt.VideoConference,
            }
        });
    };
    
  return (
    <div>
        <div ref={myMeeting}></div>
    </div>
  )
}

export default Room;
