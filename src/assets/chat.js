// export const CHAT = {
//     user: { name: "User 1" },
//     messages: [{ text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint modi eius in eaque laboriosam eos eligendi impedit amet, nostrum beatae?", date: "1 Sep 2023", time: "01:00 PM", user: { name: "User 1", role: "user" } },
//     { text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint modi eius in eaque laboriosam eos eligendi impedit amet, nostrum beatae?", date: "1 Sep 2023", time: "01:00 PM", user: { name: "Agent 1", role: "agent" } },
//     { file: { URL: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg" }, date: "2 Sep 2023", time: "02:00 PM", user: { name: "User 1", role: "user" } },
//     { text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint modi eius in eaque laboriosam eos eligendi impedit amet, nostrum beatae?", date: "2 Sep 2023", time: "01:00 PM", user: { name: "Agent 1", role: "agent" } },
//     { file: { URL: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg" }, date: "3 Sep 2023", time: "02:00 PM", user: { name: "User 1", role: "user" } },
//     { file: { URL: "https://www.africau.edu/images/default/sample.pdf" }, date: "3 Sep 2023", time: "02:00 PM", user: { name: "User 1", role: "user" } },
//     { file: { URL: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg" }, date: "3 Sep 2023", time: "02:00 PM", user: { name: "User 1", role: "user" } },
//     { query: { status: "solved", rating: 4 }, date: "3 Sep 2023", time: "02:00 PM", user: { name: "User 1", role: "user" } },
//     ]
// }



export const UserChat = [
    {
        "id": "0",
        "name": "Shivang Dubey",
        "MobileNumber": "+91 8947389698",
        "EmailId": "shivang2@gmail.com",
        //last seen
        "LastMessageTime": "9:45 AM",
        "LastMessageType": "Image",

        "AdminName":"Rakesh Sharma",
        "AdminUrl":"https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg",

        "UserMessage" : [
        {
            "AgentMessage": "Hey there, I'm experiencing some issues with my account. Can you help me out?",
            "UserMessage": "Sure, John! I'd be happy to assist you. What seems to be the problem?"
        }, {
            "AgentMessage": "I can't seem to access my recent transactions. It shows an error message.",
            "UserMessage": "Let me look into that for you. Could you provide me with your account details or email address?"
        }, {
            "AgentMessage": "Sure",
            "UserMessage": "Thank you. I'll check your account and get back to you shortly."
        }, {
            "AgentMessage": "Okay",
            "UserMessage": "It appears to be a technical glitch on our end. "
        }, {
            "AgentMessage": "Thank you for your quick response! I'll check in a bit. Appreciate your help.",
            "UserMessage": "You're welcome, John! Let us know if you encounter any further issues."
        }
        ],

        //side m icon bhi show krenge
        "avatarUrl": "https://thumbs.dreamstime.com/z/male-avatar-icon-portrait-handsome-young-man-face-businessman-suit-necktie-vector-illustration-%D0%B3%D1%9F%D0%B3%D2%91%D0%B3%C2%B7%D0%B3-%D0%B3%D1%96%D0%B3%D1%98-187127093.jpg",

        "AgentAvatar": "",
        "AgentLastTime": "9:12 AM"
    },
    {
        "id": "1",
        "name": "Manoj Kumar",
        "MobileNumber": "+91 6989889473",
        "EmailId": "manoj61@gmail.com",

        "AdminName":"Rakesh Sharma",
        "AdminUrl":"https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg",


        "LastMessageTime": "11:05 AM",
        "LastMessageType": "text",
        "Last Message": "Hi!! I recently submitted my app...",
        "avatarUrl": "https://static.vecteezy.com/system/resources/previews/024/183/502/original/male-avatar-portrait-of-a-young-man-with-a-beard-illustration-of-male-character-in-modern-color-style-vector.jpg",

        "UserMessage" : [
            {
                "AgentMessage": "Hi, I'm having trouble updating my profile picture. It's not saving the changes.",
                "UserMessage": "Hello, Emily! I'll investigate this for you. Could you try re-uploading the image and let me know if you encounter any error message?"
            }, {
                "AgentMessage": "I've tried that a couple of times. Still no luck.",
                "UserMessage": "I'll check the backend settings. Please hold on for a moment."
            }, {
                "AgentMessage": "okay",
                "UserMessage": "It seems there's a temporary issue with the image upload server. We're fixing it right away. Your patience is appreciated."
            }, {
                "AgentMessage": "No problem. Thank you for looking into this!",
                "UserMessage": "The issue should be resolved now. Please try updating your profile picture again."
            }, {
                "AgentMessage": "It worked! Thank you for your help. I've updated it successfully.",
                "UserMessage": "Great to hear! If you need further assistance, feel free to reach out."
            }
            ],

        "AgentAvatar": "",
        "AgentLastTime": "9:12 AM"
    },
    {
        "id": "2",
        "name": "Nishi Dikshit",
        "MobileNumber": "+91 4738969898",
        "EmailId": "nishi5@gmail.com",

        "AdminName":"Rakesh Sharma",
        "AdminUrl":"https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg",
        "LastMessageTime": "02:25 PM",
        "LastMessageType": "text",
        "Last Message": "Hi!! I recently submitted my app...",
        "avatarUrl":"https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg",

        "UserMessage" : [
            {
                "AgentMessage": "Hey, I think there's a billing discrepancy in my recent statement.",
                "UserMessage": "Hi David, I'll review your billing history now. Could you provide your account details or any specific transaction reference?"
            }, {
                "AgentMessage": "Sure, my account number is 987654321.",
                "UserMessage": "Thank you. I'm checking your billing history to identify any discrepancies."
            }, {
                "AgentMessage": "okay",
                "UserMessage": "I found an error in the billing system. We'll rectify it and ensure your statement reflects the correct charges."
            }, {
                "AgentMessage": "Thank you",
                "UserMessage": "Your Welcome David! Let us know if you encounter any further issues."
            }
            ],

        "AgentAvatar": "",
        "AgentLastTime": "7:12 AM"
    },
    {
        "id": "3",
        "name": "Vikash Sharma",
        "MobileNumber": "+91 7389698894",
        "EmailId": "vikash14@gmail.com",

        "AdminName":"Rakesh Sharma",
        "AdminUrl":"https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg",

        "LastMessageTime": "yesterday",
        "LastMessageType": "text",
        "Last Message": "send me the notification...",
        "avatarUrl": "https://img.freepik.com/premium-vector/man-character_665280-46970.jpg",

        "UserMessage" : [
            {
                "AgentMessage": "Hi, I'm having trouble updating my profile picture. It's not saving the changes.",
                "UserMessage": "Hello, Emily! I'll investigate this for you. Could you try re-uploading the image and let me know if you encounter any error message?"
            }, {
                "AgentMessage": "I've tried that a couple of times. Still no luck.",
                "UserMessage": "I'll check the backend settings. Please hold on for a moment."
            }, {
                "AgentMessage": "okay",
                "UserMessage": "It seems there's a temporary issue with the image upload server. We're fixing it right away. Your patience is appreciated."
            },
            {
                "AgentMessage": "No problem. Thank you for looking into this!",
                "UserMessage": "The issue should be resolved now. Please try updating your profile picture again."
            }, {
                "AgentMessage": "It worked! Thank you for your help.",
                "UserMessage": "Great to hear! If you need further assistance, feel free to reach out."
            }
            ],


        "AgentAvatar": "",
        "AgentLastTime": "12:12 PM"
    },
    {
        "id": "4",
        "name": "Shrikant Verma",
        "MobileNumber": "+91 9697388894",
        "EmailId": "shri41@gmail.com",

        "AdminName":"Rakesh Sharma",
        "AdminUrl":"https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg",

        "LastMessageTime": "29-10-2022",
        "LastMessageType": "text",
        "Last Message": "Okay,I will let you know...",
        "avatarUrl": "https://cdn1.vectorstock.com/i/1000x1000/90/35/avatar-men-design-vector-14499035.jpg",

        "UserMessage" : [
            {
                "AgentMessage": "Hi, I'm unable to access the new feature that was rolled out. Is there a specific requirement to enable it?",
                "UserMessage": "Hello, Sophie! Let me check the feature settings for your account. It might require a certain permission level. One moment, please."
            }, {
                "AgentMessage": "yeah sure,",
                "UserMessage": "It seems there was a slight oversight in enabling the feature for your user type. I've adjusted the settings. Please try accessing it now. "
            }, {
                "AgentMessage": "It's working perfectly now! Thank you for your assistance.",
                "UserMessage": "You're welcome, Sophie! If you encounter any further issues or need help with anything else, feel free to ask."
            }
            ],

        "AgentAvatar": "",
        "AgentLastTime": "9:12 AM"
    },
    {
        "id": "5",
        "name": "Ravi Kumar",
        "MobileNumber": "+91 3878949698",
        "EmailId": "ravikumar21@gmail.com",

        "AdminName":"Rakesh Sharma",
        "AdminUrl":"https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg",

        "LastMessageTime": "27-10-2022",
        "LastMessageType": "audio",
        //side m icon bhi show krenge
        "avatarUrl": "https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg",

        
        "UserMessage" : [
            {
                "AgentMessage": "Hello, I'm trying to make a purchase, but the payment is not going through.",
                "UserMessage": "Hi, Michael! I'll look into this for you. Could you provide the details of the transaction or any error messages you're receiving?."
            }, {
                "AgentMessage": "The payment gets declined without any specific error message.",
                "UserMessage": "I'll check our payment gateway and verify the issue. Please bear with me for a moment."
            },
            {
                "AgentMessage": "yeah sure",
                "UserMessage": "There was a connectivity issue with the payment gateway. It's resolved now. Please proceed with the purchase; it should go through smoothly."
            }, {
                "AgentMessage": "It worked! Thank you for fixing that so quickly.",
                "UserMessage": "Glad to hear that, Michael! If there's anything else we can assist you with, don't hesitate to reach out."
            }
            ],


        "AgentAvatar": "",
        "AgentLastTime": "9:12 AM"
    }
]