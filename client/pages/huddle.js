import { HuddleIframe } from "@huddle01/huddle01-iframe";

const iframeConfig = {
    roomUrl: "https://iframe.huddle01.com/123",
    height: "630px",
    width: "100%",
    noBorder: false, // false by default
  };


  export default function Huddle(){
    return (
      
<HuddleIframe config={iframeConfig} />
    )
  }
