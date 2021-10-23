import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        data: {
            settings: {
                signedIn: false,
                onlyCalls: false,
            },
            tabColors: ["green", "yellow", "orange", "blue", "yellow", "orange", "blue", "yellow", "orange", "blue"],
            profile: {
                name: "Margaret O'Leary",
                avatar: "avatar-placeholder.png",
                telephone: "0412989113",
                email: "MargaretOl9@hotmail.com",
                sharing: false,
            },
            groups: [{
                    title: "Art club",
                    icon: "paint",
                    nextMeeting: {
                        happeningNow: true,
                        response: null,
                        time: "11:00am Fri 16th Oct",
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
                        happeningNow: false,
                        response: null,
                        time: "1:00pm Fri 16th Oct",
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
                }
            ],
            invites: [{
                title: "Plant Society",
                icon: "paint",
                nextMeeting: {
                    happeningNow: false,
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
        },
        toggleOnlyCalls(state) {
            state.data.settings.onlyCalls = !state.data.settings.onlyCalls
        }

    },
    actions: {

    },
    getters: {
        members: state => state.data.members,
        signedIn: state => state.data.settings.signedIn,
        onlyCalls: state => state.data.settings.onlyCalls,
        tabs: state => {
            let tabs = state.data.groups.map((g, index) => g[index] = {
                text: g.title,
                color: state.data.tabColors[index + 1]
            })
            tabs.unshift({
                text: "Home",
                color: 'green'
            })
            return tabs
        },
        groups: state => {
            return state.data.groups
        },
        tabColors: state => state.data.tabColors,
        groupByInd: (state) => (ind) => {
            return state.data.groups[ind-1]
        },
        colorByGroup: (state) => (ind) => {
            return state.data.tabColors[ind]
        },
        nextTwoMeetings: state => {
            let meetings = []

            for (let i = 0; i < 2; i++) {
                meetings.push({
                    text: state.data.groups[i].title + ": " + state.data.groups[i].nextMeeting.time,
                    color: state.data.tabColors[i+1],
                    happeningNow: state.data.groups[i].nextMeeting.happeningNow,
                    response: state.data.groups[i].nextMeeting.response,
                    groupInd: i + 1
                })
                
            }

            console.log(meetings)
            return meetings
        }

    }
})