const popUps = [
    {
    text: "",
    color: "#e0287d",
    top: 400,
    left: 800,
    size:"small"
    },
    {
    text: "",
    color: "#fb0102",
    top: 40,
    left: 80,
    size: "large"
    },
    {
    text: "",
    color: "#0301fc",
    top: 70,
    left: 900,
    size: "medium"
    }
];

const sizes = [
    "medium",
    "large",
    "small"
]

const colors = [
    "#f9fb00",
    "#02feff",
    "#01ff00",
    "#fd00fb",
    "#fb0102",
    "#0301fc"
];

const navButtons = [
    {
        name: "About",
        reference: "#about"
    },
    {
        name: "Videos",
        reference: "#videos"
    },
    {
        name: "Quiz",
        reference: "#quiz"
    },
    {
        name: "About Me",
        reference: "#aboutme"
    },
]

const aboutSections = [
    {
        title: "What is fake news?",
        subsections: [
            "Fake News” is a term you most likely have heard multiple times. But, how would you define the term fake news? What falls under and outside this category?",
             "1.	Fake news is false or misleading information that is presented as news."
        ],
        size: "15px",
        color: "#fb0102"
    },
    {
        title: "Why do people create fake news?",
        subsections: [
            "1. To manipulate public opinion:",
            "Fake news can be used as a tool to influence people's beliefs and attitudes towards a particular topic, candidate, or issue.",
            "",
            
            "2. To generate clicks and revenue:",
            "In some cases, fake news is created purely for financial gain. The more clicks an article receives, the more money can be made through advertising revenue. This is also known as clickbait.",
            "",
            
            "3. To promote a particular interest:",
            "Fake news can be used to promote a particular political or social interest, either by individuals or organizations seeking to advance their own agenda.",
            "",

            "4. To propagate discord and create chaos:",
            "Some people create fake news with the intention of causing confusion and chaos, and to undermine trust in established institutions.",
            "",
            
            "5. To gain attention:",
            "Some individuals create fake news simply to gain attention, recognition, or notoriety."
        ],
        size: "15px",
        color:  "#f9fb00"

    },
    {
        title: "Why is fake news an issue to society?",
        subsections: [
            "1. It can mislead and deceive people:",
            "Fake news can spread false or misleading information, which can have serious consequences. People may make decisions based on false information, which can lead to negative outcomes in their personal lives, or in society.",
            "",
            
            "2. It can undermine trust in institutions:",
            "When people are exposed to fake news, they may become skeptical of established institutions, such as the media, government, and scientific community. This can weaken public trust in these institutions, which are essential for maintaining a stable and functioning society.",
            "",
            
            "3. It can generate social and political divisions:",
            "Fake news can be used to spread hate and division, by promoting misinformation and false narratives. This can lead to increased social and political tensions, and even violence.",
            "",
            
            "4. It can interfere with democratic processes:",
            "In democratic societies, the free and fair exchange of ideas and information is essential for holding leaders accountable and making informed decisions. When fake news is used to influence elections or public opinion, it can undermine the integrity of democratic processes."
        ],
        size: "15px",
        color: "#fd00fb"
    },
    {
        title: "How not to be fooled by fake news?",
        subsections: [
            "1. Check the source:",
            "Before trusting a news story, check the source of the information. Is it a reputable news outlet or a blog with no known credentials? Exercise caution on websites with a political leaning and check their bias before accepting their reporting.",
            "",

            "2. Look for other sources and evidence:",
            "If a news story seems too good (or bad) to be true, look for other sources that corroborate the story. Reliable news outlets and fact-checking websites can be helpful in verifying the accuracy of a news story.",
            "",

            "3. Check the author's credentials:",
            "Before accepting the credibility of the author, check their credentials. Do they have a history of accurate reporting, or do they have a personal or political bias?",
            "",

            "4. Pay attention to the tone and language used in the article:",
            "Fake news often uses sensational language, over-the-top headlines, or persuasive tone to persuade readers to a particular viewpoint. Be aware of articles that use such techniques.",
            "",

            "5. Look for confirmation bias:",
            "It is easy to be fooled by fake news that supports our pre-existing beliefs. Be open to considering alternative perspectives and do not rely solely on news sources that confirm our biases.",
            "",

            "6. Check the date of the article:",
            "Sometimes, fake news articles can be old or out-of-date. Be sure to check the date of the article before accepting its claims."


        ],
        size: "15px",
        color: "#0301fc"
    },
    {
        title: "Conclusion",
        subsections: [
            "Overall, it is important to be skeptical of all sources of information and to verify any claims before accepting them as true. By applying critical thinking and using reliable sources, we can avoid being fooled by fake news."
        ],
        size: "15px",
        color: "#02feff"
    }
]

const videos = [
    {
        title: "What is your experience with fake news?",
        url: "https://www.youtube.com/embed/QXOoH4xW5Mc",
        img: "https://img.youtube.com/vi/QXOoH4xW5Mc/maxresdefault.jpg"
    },
    {
        title: "What is the history of fake news?",
        url: "https://www.youtube.com/watch?v=6PumXO_iTIA",
        img: "https://img.youtube.com/vi/6PumXO_iTIA/maxresdefault.jpg"
    },
    {
        title: "How do you identify fake news?",
        url: "https://www.youtube.com/embed/_7X-9dhK2g4",
        img: "https://img.youtube.com/vi/_7X-9dhK2g4/maxresdefault.jpg"
    },
    {
        title: "Why do people create fake news?",
        url: "https://www.youtube.com/embed/4J14pt9Od6c",
        img: "https://img.youtube.com/vi/4J14pt9Od6c/maxresdefault.jpg"
    },
    {
        title: "Why should people be aware of fake news?",
        url: "https://www.youtube.com/embed/iXpGUzGnMco",
        img: "https://img.youtube.com/vi/iXpGUzGnMco/maxresdefault.jpg"
    },
    {
        title: "Why is fake news harmful?",
        url: "https://www.youtube.com/embed/r_6vfu3BxcE",
        img: "https://img.youtube.com/vi/r_6vfu3BxcE/maxresdefault.jpg"
    },
    {
        title: "What challenges have you faced when educating others about fake news?",
        url: "https://www.youtube.com/embed/YCAHfwcOaV8",
        img: "https://img.youtube.com/vi/YCAHfwcOaV8/maxresdefault.jpg"
    }
]

const questions = [
    {
    numb: 1,
    photo: "../assets/q1.jpeg",
    explanation: "BBC is a well-known and reliable news channel. Although there were rumors about the status of Queen Elizabeth's health leading up to her death, her passing was covered by many well-known news sources around the world as she was a public figure. PS: Rumors are typically not found in large, reputable news channels. ",
    question: "Reliable source",
    answer: 1,
    options: [
      "True",
      "False"
    ]
  },
    {
    numb: 2,
    photo: "assets/game/q2.jpeg",
    question: "Confirmation Bias and Phrasing",
    explanation: "The previous article contains leading vocabulary that favors a certain viewpoint when stating that 'Lockdowns ruined industries in America'.The wording subconsciously makes people associate lockdowns with something harmful, even though its purpose was to control covid spread at the time of the pandemic. This is an example of Confirmation Bias, the human tendency to search for, favor, and use information that confirms one's pre-existing views on a certain topic.",
    answer: 0,
    options: [
      "True",
      "False"
    ]
  },
    {
    numb: 3,
    photo: "assets/game/q3.png",
    question: "If it is too good to be true, then it probably is",
    explanation: "Fake news can be generated as a criticism of a company or idea in order to DISRUPT their work or spark debate. Ely Lilly, One of the largest producers of insulin in the world,  was the target of a fake twitter account. The false tweet claiming insulin was free caused ely lilly's stocks to drop 6% within 24 hours.",
    answer: 0,
    options: [
      "True",
      "False"
    ]
  },
    {
    numb: 4,
    photo: "assets/game/q4.png",
    question: "Do not believe everything you read on Twitter",
    explanation: "Not every form of mass communication is trustworthy, particularly those that allow private accounts and serve as social media This tweet allegedly sent by the Syrian electronic army was from a hacked twitter account posing as the Associated Press How do you prevent falling for fake news on twitter? Simply search for validation of the news you read across multiple sources (Google it, for instance)",
    answer: 0,
    options: [
      "True",
      "False"
    ]
  },
    {
    numb: 5,
    photo: "assets/game/q5.png",
    question: "Is it a joke?",
    explanation: "This meme started with the 'one word' trend on twitter in which brands posted one word that defined them. However, some people saw the chance to play pranks on individuals and companies by emulating the trend. In the quiz example, the tweet impersonates Matt Gaetz following accusations and a federal investigation about his involvement in sex trafficking minors, although Gaetz was not charged in the case.",
    answer: 0,
    options: [
      "True",
      "False"
    ]
  },
  

     {
     numb: 6,
     photo: "assets/game/q6.png",
     question: "clear headlines and no bias",
     explanation: "This is an unfortunate article; however, it is purely presenting facts about what happened to Bed Bath & Beyond. The phrasing does not lead to bias nor does it advertise competitors of Bed Bath & Beyond.",
     answer: 1,
     options: [
       "True",
       "False"
    ]
   },

   {
    numb: 7,
    photo: "assets/game/q7.jpeg",
    question: "KEEP An eye out FOR TYPOS AND grammatical errors",
    explanation: "In this article, there was a typo, instead of 'Obama' it should have read 'Osama' Even though the news was in a reliable channel, the error could result in misunderstandings about events. Poorly edited articles or news with frequent misspellings and grammatical errors is often a sign of fake news. PS: ex-president Obama is still alive",
    answer: 0,
    options: [
      "True",
      "False"
   ]
  },

  {
    numb: 8,
    photo: "assets/game/q8.png",
    question: "HAVE YOU EVER HEARD ABOUT CLICK BAIT?",
    explanation: "Click Bait is a term that characterizes sensationalistic news that intrigues people to click and try to understand the misleading or shocking headline. They are usually present at the end of websites or on social media platforms where they profit from clicks and views. Click bait is usually phrased in a provoking way, relies on exaggerated claims, or leaves out key information. Most of the time, click bait does not sound realistic.",
    answer: 0,
    options: [
      "True",
      "False"
   ]
  },
];

const instructions = {
    title: "Instructions",
    rules: "You will be presented with a series of news excerpts. For each option, select whether it is TRUE (news) or FALSE (fake news)."
};

const bio = [
    "Carolina developed this project as a Public Humanities Fellow at Penn State’s Humanities Institute. She is a graduate in Industrial Engineering with a minor in French and Francophonic Studies from the Pennsylvania State University. She was born in Brasília, Brazil and has Greek origins from her mother's family side. Due to her bicultural environment while growing up, she became passionate about traveling and learning about new cultures. And this passion led her to study abroad in different countries, such as the United States, United Kingdom, Switzerland and Chile.",

    "Her interest in the topic of fake news arose during 2022 elections in Brazil. 'My family´s group chat would be loaded of fake news regarding the politic scenario, a lot of bias, exaggerated predictions about the new government and many unrealistic headlines.'",
    
    "With this website, she hopes to provide a new resource of media literacy and reduce, to some extent, the mass spread of fake news."
];

export {popUps,colors, navButtons, sizes, aboutSections, videos, questions, bio, instructions};