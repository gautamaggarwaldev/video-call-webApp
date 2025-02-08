import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";
function Room() {
    const { roomCode } = useParams();

    const myMeeting = async (element) =>{
        const appId = 2087594439;
        const serverSecret = "c8618aa29c7f8b7d9227e1df6b25b4e7"
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
