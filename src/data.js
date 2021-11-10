    const data = {
        settings: {
            signedIn: false,
            onlyCalls: false,
            activeContact: null,
            viewHelp: false,
        },
        icons: ["book", "paint", "cards", "camera", "cupcake", "knit", "microphone", "soccer", "trees", "bike", "console", "fish", "pingpong", "bowling"],
        tabColors: ["green", "yellow", "orange", "blue", "yellow", "orange", "blue", "yellow", "orange", "blue"],
        profile: {
            name: "Margaret O'Leary",
            avatar: "cat.png",
            telephone: "0412989113",
            email: "margareto45@hotmail.com",
            sharing: false,
        },
        groups: [{
                title: "Art club",
                icon: "paint",
                nextMeeting: {
                    happeningNow: true,
                    response: null,
                    time: "11:00am Fri 5th Nov",
                    type: "video",
                    location: null,
                },
                members: [{
                        name: "Betty Augustine",
                        avatar: "dp1.jpeg",
                        telephone: "0499836725",
                        email: "betty.a23@gmail.com",
                        attending: true

                    }, {
                        name: "Alice Clooney",
                        avatar: "dp2.jpeg",
                        telephone: "0411232367",
                        email: "alice3@hotmail.com",
                        attending: true

                    }, {
                        name: "Doris Byrne",
                        avatar: "dp3.jpeg",
                        telephone: "0465177281",
                        email: "dbyrne@gmail.com",
                        attending: true

                    },
                    {
                        name: "Samantha Everett",
                        avatar: "dp4.jpeg",
                        telephone: "0433182221",
                        email: "severett@gmail.com",
                        attending: false

                    },
                    {
                        name: "Agnes Smith",
                        avatar: "dp5.jpeg",
                        telephone: "0487665524",
                        email: "agnessmith123@outlook.com",
                        attending: false

                    },
                    {
                        name: "Mary Barnes",
                        avatar: "dp6.jpg",
                        telephone: "0411223332",
                        email: "marybarney@live.com.au",
                        attending: true

                    },
                    {
                        name: "Vera Jones",
                        avatar: "dp7.jpeg",
                        telephone: "0443565575",
                        email: "veryvera@hotmail.com",
                        attending: null

                    }, {
                        name: "Karen Charles",
                        avatar: "dp8.jpeg",
                        telephone: "0422123332",
                        email: "karenc@gmail.com",
                        attending: null

                    }, {
                        name: "Sarah Bridges",
                        avatar: "dp9.jpg",
                        telephone: "0411222333",
                        email: "sbridges@gmail.com",
                    },
                ],
                messages: [

                    {
                        posterName: "Karen Charles",
                        posterAvatar: "dp8.jpeg",
                        date: "01/11/21",
                        title: "Can anyone suggest a good all-round brush for oil, watercolour, and acrylic?",
                        content: "I’m running short of space on my desk and wondering if I can downsize my brush collection. Let me know if there are any good brands out there.",
                        image: "",
                        comments: [{
                                posterName: "Doris Byrne",
                                posterAvatar: "dp3.jpeg",
                                date: "01/11/21",
                                content: "It might depend on what kind of work you currently do and what you use at the moment – there is a lot of variation in different art styles!",
                            },
                            {
                                posterName: "Mary Barnes",
                                posterAvatar: "dp6.jpg",
                                date: "02/11/21",
                                content: "I have somewhere around 100 brushes. I do oil painting and it depends on the picture that I am painting which brush I will use most. Right now I'm doing a painting with lots of detail so I'm using small fine pointed round brushes mostly. For a country scene I would use much different brushes, larger brushes and bristle instead of soft. I find I need every kind of brush at one time or another, all sizes, all types. \
                                If you are just starting out I would suggest getting a set of flat brushes, a couple of fine pointed round brushes, a thin strip liner, a bristle fan brush, a one inch bristle brush. That will get your feet wet and as you paint you'll find out what you need."
                            },
                            {
                                posterName: "Sarah Bridges",
                                posterAvatar: "dp9.jpg",
                                date: "02/11/21",
                                content: "I USE SYNTHETIC SABLE ROUND BRUSHES FOR MY WATERCOLOURS. FOR ACRYLIC I USE FLAT NYLON BRUSHES. SARAH. X",
                            },
                            {
                                posterName: "Karen Charles",
                                posterAvatar: "dp8.jpeg",
                                date: "03/11/21",
                                content: "Appreciate all the wonderful comments! You’ve given me some great things to think about",
                            },


                        ],
                    },

                    {
                        posterName: "Sarah Bridges",
                        posterAvatar: "dp9.jpg",
                        date: "26/10/21",
                        title: "WOULD YOU BUY PRE-FRAMED BOARDS?!",
                        content: "IS IT BETTER TO FRAME THEM YOURSELF OR DO YOU PREFER TO SAVE THE EFFORT BUT SPEND THE MONEY! LET ME KNOW PLEASE. SARAH. X ",
                        image: "",
                        comments: [{
                            posterName: "Vera Jones",
                            posterAvatar: "dp7.jpeg",
                            date: "27/10/21",
                            content: "I get a little bit sick of waiting for my works to be framed so I just buy them pre-framed!",
                        }, ],
                    },

                    {
                        posterName: "Doris Byrne",
                        posterAvatar: "dp3.jpeg",
                        date: "22/10/21",
                        title: "Looking for some feedback on my bird piece",
                        content: "Thinking we could use this image:",
                        image: "https://images.unsplash.com/photo-1579965342575-16428a7c8881?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=924&q=80",
                        comments: [{
                            posterName: "Vera Jones",
                            posterAvatar: "dp7.jpeg",
                            date: "22/10/21",
                            content: "I like the birds – are those your birds, Doris? ",
                        }, {
                            posterName: "Doris Byrne",
                            posterAvatar: "dp3.jpeg",
                            date: "22/10/21",
                            content: "Thank you Vera, yes that’s my little Peaches and Willie! Embellished the background a bit x",
                        }, ],
                    },

                    {
                        posterName: "Doris Byrne",
                        posterAvatar: "dp3.jpeg",
                        date: "21/10/21",
                        title: "Pan Pastels",
                        content: "Anyone here used pan pastels? How do you like them?",
                        image: "",
                        comments: [{
                            posterName: "Vera Jones",
                            posterAvatar: "dp7.jpeg",
                            date: "21/10/21",
                            content: "Pan pastels are excellent, as well as Sennelier or Rembrandt. Can't really go wrong with any of those choices. If you haven’t given them a try I recommend it",
                        }, {
                            posterName: "Doris Byrne",
                            posterAvatar: "dp3.jpeg",
                            date: "28/10/21",
                            content: "Its my favourite medium - for underpaintings. Check out this quick video I found on You Tube on a Sunset painting in pastels, using Panpastels for the underpainting: https://www.youtube.com/watch?v=mFAy6QkN1ts&ab_channel=MonikaGuptaFineArt",
                        }, ],
                    },

                ]
            },
            {
                title: "Book club",
                icon: "book",
                nextMeeting: {
                    happeningNow: false,
                    response: null,
                    time: "1:00pm Fri 5th Nov",
                    type: "video",
                    location: null,
                },
                members: [{
                        name: "Betty Augustine",
                        avatar: "dp1.jpeg",
                        telephone: "0499836725",
                        email: "betty.a23@gmail.com",
                        attending: null

                    }, {
                        name: "Sarah Bridges",
                        avatar: "dp9.jpg",
                        telephone: "0411222333",
                        email: "sbridges@gmail.com",
                    },

                    {
                        name: "Victoria Striker",
                        avatar: "dp10.jpeg",
                        telephone: "0465177281",
                        email: "victoriastr@gmail.com",
                        attending: false

                    },

                    {
                        name: "Anne Karolewski",
                        avatar: "dp11.jpeg",
                        telephone: "0465177281",
                        email: "akro33@gmail.com",
                        attending: true

                    },
                    {
                        name: "Alice Clooney",
                        avatar: "dp2.jpeg",
                        telephone: "0411232367",
                        email: "alice3@hotmail.com",
                        attending: null

                    }, {
                        name: "Doris Byrne",
                        avatar: "dp3.jpeg",
                        telephone: "0465177281",
                        email: "dbyrne@gmail.com",
                        attending: true

                    },
                ],

                messages: [

                    {
                        posterName: "Anne Karolewski",
                        posterAvatar: "dp11.jpeg",
                        date: "01/11/21",
                        title: "Cosy novels?",
                        content: "I’ve been reading (a lot of thrillers lately and I’m looking for a palette cleanser. I’d like something cosy and happy and light. I love Jenny Colgan’s novels. So, something similar. Not necessarily steamy romance but something nice and light. Thank you.",
                        image: "",
                        comments: [{
                                posterName: "Victoria Striker",
                                posterAvatar: "dp10.jpeg",
                                date: "01/11/21",
                                content: "The No 1 Ladies Detective Agency Series by Alexander Mccall Smith",
                            },
                            {
                                posterName: "Doris Byrne",
                                posterAvatar: "dp3.jpeg",
                                date: "03/11/21",
                                content: "Anything by Lisa Kleypas!",
                            },
                            {
                                posterName: "Anne Karolewski",
                                posterAvatar: "dp11.jpeg",
                                date: "04/11/21",
                                content: "Thanks guys – just about to dig into Devil in Winter so I will keep everybody updated here. Let me know if anyone wants to be a reading buddy on this one",
                            },
                        ],
                    },

                    {
                        posterName: "Betty Augustine",
                        posterAvatar: "dp1.jpeg",
                        date: "25/10/21",
                        title: "Suggestion for our next book of the week!",
                        content: "I'd like to start reading 'The Poppy War' by R. F. Kuang. But I'm afraid I won't be able to read it by myself. I think it'll be fun to discuss and share opinions about the chapters that we read, I think it would be a good candidate for the club. It'll also help me stay accountable and not to give up on it. Thoughts?",
                        image: "",
                        comments: [{
                                posterName: "Anne Karolewski",
                                posterAvatar: "dp11.jpeg",
                                date: "26/10/21",
                                content: "I read it recently – not ready for it again just yet but maybe in a few months! I do recommend it though",
                            },
                            {
                                posterName: "Sarah Bridges",
                                posterAvatar: "dp7.jpeg",
                                date: "27/10/21",
                                content: "I would love to do that as one of our next books",
                            },
                            {
                                posterName: "Doris Byrne",
                                posterAvatar: "dp3.jpeg",
                                date: "27/10/21",
                                content: "If the group doesn’t want to read it all together I’m happy to readd it alongside you – we can discuss it in our weekly call xx",
                            },
                            {
                                posterName: "Victoria Striker",
                                posterAvatar: "dp10.jpeg",
                                date: "27/10/21",
                                content: "Terrible! NEXT!",
                            },
                        ],
                    },

                    {
                        posterName: "Victoria Striker",
                        posterAvatar: "dp10.jpeg",
                        date: "02/11/21",
                        title: "Dragon Keeper by Robin Hobb",
                        content: "I am starting Dragon Keeper, and I would love to discuss. I love anything Robin Hobb writes, and the Realm of of Elderlings is my favorite series right now. Anyone else read it? Thanks, Margaret",
                        image: "",
                        comments: [{
                            posterName: "Sarah Bridges",
                            posterAvatar: "dp9.jpg",
                            date: "02/11/21",
                            content: "Not there yet…just finishing up the Farseer Trilogy… I'll get there eventually… Enjoy! X",
                        }, {
                            posterName: "Doris Byrne",
                            posterAvatar: "dp3.jpeg",
                            date: "02/11/21",
                            content: "A FAVOURITE OF MY GRANDDAUGHTER IF I REMEMBER CORRECTLY. I CAN SEE IF SHE CAN GIVE ME ANY FEEDBACK WHEN I CALL HER ON SUNDAY. IF I FORGET DON’T REMIND ME X",
                        }, ],
                    },

                    {
                        posterName: "Alice Clooney",
                        posterAvatar: "dp2.jpeg",
                        date: "04/11/21",
                        title: "",
                        content: "Hi Book Club, Sorry everybody, but I can’t make the next meeting because I have a dental appointment that I can’t move. See you all next time - Thank you, Alice.",
                        image: "",
                        comments: [],
                    },

                    {
                        posterName: "Betty Augustine",
                        posterAvatar: "dp1.jpeg",
                        date: "03/11/21",
                        title: "What do you do with old unloved books?",
                        content: "They just sit there taking up space I could use for books I do actually read and I'm tired of lugging them around every time I move. So I want to get rid of them but...sentiment",
                        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1798&q=80",
                        comments: [{
                                posterName: "Doris Byrne",
                                posterAvatar: "dp3.jpeg",
                                date: "04/11/21",
                                content: "I like to donate them to a younger member of the family so that I know they are still loved, and I can share the joy of those books with my relatives! Also helps encourage the younger generations to read something….",
                            },
                            {
                                posterName: "Victoria Striker",
                                posterAvatar: "dp10.jpeg",
                                date: "04/11/21",
                                content: "I’ll take some of those off your hands :D ",
                            },
                        ],
                    },







                ]
            }
        ],
        invites: [{
            title: "Plant Society",
            icon: "trees",
            nextMeeting: {
                happeningNow: false,
                response: null,
                time: "11:00am Sat 17th Dec",
                type: "video",
                location: null,

            },
            members: [{
                    name: "Victoria Striker",
                    avatar: "dp10.jpeg",
                    telephone: "0465177281",
                    email: "victoriastr@gmail.com",
                    attending: null

                }, {
                    name: "Francis Hayes",
                    avatar: "dp12.jpeg",
                    telephone: "0411232343",
                    email: "fmhayes@yahoo.com",
                    attending: null

                }, {
                    name: "Martha Hendrick",
                    avatar: "dp13.jpeg",
                    telephone: "0411232367",
                    email: "martyhend@hotmail.com",
                    attending: false

                }, {
                    name: "Rebecca Partington",
                    avatar: "dp14.jpeg",
                    telephone: "0411222333",
                    email: "rebpartington@aol.com",
                    attending: false

                },
                {
                    name: "Sarah Bridges",
                    avatar: "dp9.jpg",
                    telephone: "0411222333",
                    email: "sbridges@gmail.com",
                    attending: true

                },
                {
                    name: "Kate Winters",
                    avatar: "dp15.jpeg",
                    telephone: "0411222333",
                    email: "kwinters@outlook.com",
                    attending: true

                },
            ],

            messages: [

                {
                    posterName: "Kate Winters",
                    posterAvatar: "dp15.jpeg",
                    date: "04/11/21",
                    title: "",
                    content: "Hi everyone, I can’t make the next meeting because I have a hair appointment that I can’t move. See you all next time - Thank you, Kate.",
                    image: "",
                    comments: [],
                },

                {
                    posterName: "Rebecca Partington",
                    posterAvatar: "dp14.jpeg",
                    date: "03/11/21",
                    title: "What are some suggestions for summer plant box colours?",
                    content: "I'm redoing the pots on my front balcony, and was wondering if anyone had any experience with which colours look best over summer in the sun. I'm worried that the colour will fase so leaning towards something richer but I can't stop thinking of a really vibrant pink! What do you think?",
                    image: "https://images.unsplash.com/photo-1534344624678-7bbcc76f048d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGluayUyMHBsYW50JTIwcG90fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
                    comments: [{
                            posterName: "Martha Hendrick",
                            posterAvatar: "dp13.jpeg",
                            date: "04/11/21",
                            content: "I absolutely love this idea! I'm thinking of doign something similar...",
                        },
                        {
                            posterName: "Victoria Striker",
                            posterAvatar: "dp10.jpeg",
                            date: "04/11/21",
                            content: "I'm partial to a good blue but the pink goes well with your front room and the awning you put up last summer!",
                        },
                    ],
                },
            ]
        }],

        faqs: [{
                title: "How do I create a new group?",
                body: "On your home page, there is a green button called “create a group”. This can be found above ‘Your Groups’. Pressing this button will take you to the ‘Create A Group’ page. Fill in your group name. Choose a group icon. Click ‘Finish’. And that’s it!"
            },

            {
                title: "How can I check when my next video meeting is on?",
                body: "This can be found on your group page. The time and date of your next video meeting will be shown on the left hand side of the screen. A join button will appear at the time of the meeting. You can also view your overall upcoming meetings on the home page at the bottom of the screen. If the meeting is soon, you can also join the call from here or notify your members whether you will be attending or not."
            },

            {
                title: "How can I leave my group?",
                body: "Go to ‘My Profile’. At the bottom of the page you can see ‘My groups’. Click ‘edit’ and then ‘quit’ for the groups you’d like to leave."
            },

            {
                title: "How do I create a new post in the message board?",
                body: "There is a ‘plus’ icon underneath the ‘search’ bar. Click this and you can show your group friends what you’ve been up to!"
            },

            {
                title: "How do I notify my group that I can’ t attend the next meeting?",
                body: "In your group page, there is a thumbs up and a thumbs down on the left hand side of the screen. You can click either to let your friends know whether you will be attending the next group meeting!"
            },

            {
                title: "How can I see who is in my group?",
                body: "In your groups page, there is a button that says 'members’ on the right hand side of the screen. ‘Click’ that button to see who is a part of the group."
            },

            {
                title: "How can I contact my group friends?",
                body: "At the top of the page is a 'contacts’ button. ‘Click’ this so you can scroll through the contacts for people in your different groups. You can also use the ‘search’ bar to find specific people if you don’t want to scroll."
            }
        ]

    }

    export default data;