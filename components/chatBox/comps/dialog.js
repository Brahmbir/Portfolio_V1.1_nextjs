const chatMCQ = {
    "Hello ? . . .": {
        bot_replies: ["Hello! Welcome to my student software developer portfolio.",
            "I'm a chatbot designed to showcase my programming skills and projects.",
            "How can I assist you today?"],
        option: [
            { message: "Hi there! I'm excited to explore your portfolio.", removeThis: false },
            { message: "Can you tell me more about Brahmbir", removeThis: false },
            // { message: "Hi there! I'm excited to explore your portfolio.", removeThis: true },
            // { message: "Can you tell me more about Brahmbir", removeThis: false },
            // { message: "Can you tell me more about Brahmbir", removeThis: false },
        ]
    },
    "Hi there! I'm excited to explore your portfolio.": {
        bot_replies: ["I'm glad you're interested!",
            "I was created by Brahmbir, a passionate student software developer.",
            "How can I assist you today?"],
        option: [
            // { message: "Hi there! I'm excited to explore your portfolio.", removeThis: true },
            // { message: "Can you tell me more about Brahmbir", removeThis: false },
            // { message: "Can you tell me more about Brahmbir", removeThis: false },
        ]
    },
    "Can you tell me more about Brahmbir": {
        bot_replies: ["Brahmbir is a computer science student",
            "During his studies, he has gained experience in programming languages such as :",
            " Python ",
            " JavaScript ",
            " C++ ",
            " Rust ",
            "He also has a solid understanding of algorithms and database management."],
        option: [
            { message: "So, what kind of projects do you have", removeThis: false },
            { message: "How can I get in touch with him?", removeThis: false }
            // { message: "Can you tell me more about Brahmbir", removeThis: false },
            // { message: "Can you tell me more about Brahmbir", removeThis: false },
        ]
    },
    "So, what kind of projects do you have": {
        bot_replies: ["Brahmbir has worked on various exciting projects.",
            "One of the projects is my portfolio site.",
            "This site was built using React.js for the frontend, and Next.js for the backend.",
            "How can I assist you today?"],
        option: [
            // { message: "Hi there! I'm excited to explore your portfolio.", removeThis: true },
            // { message: "start", removeThis: false }
            // { message: "Can you tell me more about Brahmbir", removeThis: false },
            // { message: "Can you tell me more about Brahmbir", removeThis: false },
        ]
    },
    "How can I get in touch with him?": {
        bot_replies: [
            "You can easily get in touch with Brahmbir through the 'Contact' section in the portfolio.",
            "There, you'll find his email address",
            "And also links to his LinkedIn and GitHub profiles.",
            "He'll be thrilled to hear from you!"]
        , option: [
            { message: "Can you tell me the email address.", remove: false },
            // { message: "Looking for you", removeThis: false }
            // { message: "Can you tell me more about Brahmbir", removeThis: false },
            // { message: "Can you tell me more about Brahmbir", removeThis: false },
        ]
    },
    "Can you tell me the email address.": {
        bot_replies: ["Why not, here you go ",
            "' brahmbir68@gmail.com '"],
        option: []
    },
    // TODO : write replies
    "I just wanted to say hello": {
        bot_replies: [
            ["Well hello there!"],
            ["Thanks for saying hi 😁"],
            ["I hope you've enjoyed my work"],
            ["Can I help you with anything else?"]]
        , option: [
            // { message: "Can you tell me more about Brahmbir", removeThis: false },
            // { message: "Can you tell me more about Brahmbir", removeThis: false },
            // { message: "Can you tell me more about Brahmbir", removeThis: false },
        ]
    },
    "Wake up !": {
        bot_replies: [],
        option: [
            { message: "Hello ? . . .", remove: false },
            // { message: "Can you tell me more about Brahmbir", removeThis: false },
            // { message: "Can you tell me more about Brahmbir", removeThis: false },

        ]
    },
    "Thanks for all the information.": {
        bot_replies: [
            "You're welcome!",
            "If you have any more questions",
            "or need further assistance,",
            "feel free to ask.",
            " Enjoy exploring the portfolio!"
        ],
        option: []
    },
    //"": {bot_replies:[],option:[]}
}
export default chatMCQ