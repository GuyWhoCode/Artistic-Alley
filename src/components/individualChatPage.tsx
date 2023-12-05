// // used for the individual chatting page
// // this page is used to show what a full chat would look like
// // new messages can be entered below and are displayed to the screen
// this sample chat page currently doesn't work rn
// import React from "react";
// import Message from "../app/messaging/[chat]/message";
// import ChatHeader from "./chatHeader";
// import { createImageSource } from "@/lib/image";

// const individualChatPage = () => {
//     // these image links are from images stored on cloudinary but any image link also works
//     // this is the user that is logged in
//     const user1 = {
//         username: "Fiasco",
//         isMyMessage: true,
//         profile: createImageSource(
//             "/v1701058704/artistic-alley-uploads/obzu8iutitw6rjzytxao.jpg"
//         ),
//     };
//     // this is the user that is being messaged
//     const user2 = {
//         username: "Mocha",
//         profile: createImageSource(
//             "/v1701058862/artistic-alley-uploads/rd7zyg7s2czx91oxoer4.jpg"
//         ),
//     };

//     return (
//         <>
//             <ChatHeader username={user2.username} />
//             <div className="p-5">
//                 <Message user={user1}>Hello, how are you?</Message>
//                 <Message user={user2}>Good.</Message>
//                 <Message user={user1}>Are your comissions open?</Message>
//                 <Message user={user2}>Yes they are.</Message>
//                 <Message user={user2}>
//                     What type of art are you looking for?
//                 </Message>
//                 <Message user={user1}>
//                     I want a 10x10 cm black and white digital Christmas themed
//                     artwork inspired by my pfp.
//                 </Message>
//                 <Message
//                     user={user1}
//                     images={[
//                         createImageSource(
//                             "/v1701058704/artistic-alley-uploads/obzu8iutitw6rjzytxao.jpg"
//                         ),
//                     ]}
//                 />
//                 <Message user={user1}>
//                     Make it like a snowman of the dog and put a christmas hat on
//                     it.
//                 </Message>
//                 <Message user={user2}>
//                     I can do something like that for sure.
//                 </Message>
//                 <Message user={user2}>
//                     I will have your art done within a month. It will cost $25.
//                 </Message>
//                 <Message user={user1}>Sounds good. Keep me updated.</Message>
//                 <Message user={user2}>Will do.</Message>
//                 <Message
//                     user={user1}
//                     images={[
//                         createImageSource(
//                             "/v1701737334/artistic-alley-uploads/pkkv0tztkiqlznjnfysm.jpg"
//                         ),
//                     ]}
//                 />
//             </div>
//         </>
//     );
// };

// export default individualChatPage;
