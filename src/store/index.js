import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        data: {
            settings: {
                signedIn: true,
                onlyCalls: false,
            },
            currentPage: "home",
            colors: ["green", "yellow", "orange", "blue"],
            profile: {
                name: "Margaret O'Leary",
                avatar: "avatar-placeholder.png",
                telephone: "0412989113",
                email: "MargaretOl9@hotmail.com",
                sharing: false,
            },
            groups: [{
                title: "Art club",
                icon: "easel",
                nextMeeting: {
                    response: null,
                    time: "10:00am Fri 16th Oct",
                    type: "video",
                    location: null,
                    responses: [{
                            name: "Betty Augustine",
                            attending: false
                        },
                        {
                            name: "Doris Byrne",
                            attending: true
                        },
                        {
                            name: "Karen Charles",
                            attending: null
                        },
                    ]
                },
                members: [{
                    name: "Betty Augustine",
                    avatar: "avatar-placeholder.png",
                    telephone: "0411232343",
                    email: "betty.a23@gmail.com"
                }, {
                    name: "Doris Byrne",
                    avatar: "avatar-placeholder.png",
                    telephone: "0411222333",
                    email: "dbyrne@gmail.com"
                }],
            },
            {
                title: "Book club",
                icon: "book",
                nextMeeting: {
                    response: null,
                    time: "10:00am Fri 16th Oct",
                    type: "video",
                    location: null,
                    responses: [{
                            name: "Betty Augustine",
                            attending: false
                        },
                        {
                            name: "Doris Byrne",
                            attending: true
                        },
                        {
                            name: "Karen Charles",
                            attending: null
                        },
                    ]
                },
                members: [{
                    name: "Betty Augustine",
                    avatar: "avatar-placeholder.png",
                    telephone: "0411232343",
                    email: "betty.a23@gmail.com"
                }, {
                    name: "Doris Byrne",
                    avatar: "avatar-placeholder.png",
                    telephone: "0411222333",
                    email: "dbyrne@gmail.com"
                }],
            }],
            invites: [{
                title: "Plant Society",
                icon: "easel",
                nextMeeting: {
                    response: null,
                    time: "11:00am Sat 17th Oct",
                    type: "video",
                    location: null,
                    responses: [{
                            name: "Betty Augustine",
                            attending: true
                        },
                        {
                            name: "Doris Byrne",
                            attending: true
                        },
                        {
                            name: "Karen Charles",
                            attending: null
                        },
                    ]
                },
                members: [{
                    name: "Betty Augustine",
                    avatar: "avatar-placeholder.png",
                    telephone: "0411232343",
                    email: "betty.a23@gmail.com"
                }, {
                    name: "Doris Byrne",
                    avatar: "avatar-placeholder.png",
                    telephone: "0411222333",
                    email: "dbyrne@gmail.com"
                }],
            }]



        }
    },
    mutations: {
        loadState(state) {
            Vue.set(state, 'data', {
                members: ["Hello 1", "Hello 2", "Forris Byrne", "Margaux Thwaites", "Veronica Mars", "Thelma Louise", "Thelma Louise", "Thelma Louise", "Thelma Louise", "Thelma Louise Thelma Louise Thelma Louise"],
                // tabs: [{text: "Home", color: red}, "Book club", "Art club", "Quilter's super awesome awesome club"]
                tabs: [{
                    text: "Home",
                    color: "green"
                }, {
                    text: "Art club",
                    color: "yellow"
                }, {
                    text: "Book club",
                    color: "orange"
                }],
            })
        }

    },
    actions: {

    },
    getters: {
        members: state => state.data.members,
        tabs: state => state.data.tabs,
    }
})