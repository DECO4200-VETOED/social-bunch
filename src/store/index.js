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
            icons: ["book", "paint", "cards", "camera", "cupcake", "knit", "microphone", "soccer", "trees"],
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
                        name: "Alice Thwaites",
                        avatar: "avatar-placeholder.png",
                        telephone: "0411232367",
                        email: "alicethw3@gmail.com"
                    }, {
                        name: "Doris Byrne",
                        avatar: "avatar-placeholder.png",
                        telephone: "0411222333",
                        email: "dbyrne@gmail.com"
                    }, {
                        name: "Karen Charles",
                        avatar: "avatar-placeholder.png",
                        telephone: "0412989113",
                        email: "karenc@gmail.com"
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
                        name: "Melissa Kravitz",
                        avatar: "avatar-placeholder.png",
                        telephone: "0484272325",
                        email: "mkrav@gmail.com"
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
        signOut(state) {
            state.data.settings.signedIn = false
        },
        toggleOnlyCalls(state) {
            state.data.settings.onlyCalls = !state.data.settings.onlyCalls
        },
        toggleShare(state) {
            state.data.profile.sharing = !state.data.profile.sharing
        },
        signIn(state) {
            state.data.settings.signedIn = true
        },
        createAccount(state) {
            state.data.settings.signedIn = true
            // TODO: Would go to a create account flow??
        },
        leaveGroup(state, index) {
            state.data.groups.splice(index, 1)
        },
        joinGroup(state, index) {
            console.log(index, state.data.groups, state.data.invites, index - state.data.groups.length)
            state.data.groups.push(state.data.invites[index - state.data.groups.length])
            console.log(index, state.data.groups, state.data.invites, index - state.data.groups.length)

            state.data.invites.splice(index - (state.data.groups.length - 1), 1)
            console.log(index, state.data.groups, state.data.invites, index - state.data.groups.length)


        },
        declineInvite(state, index) {
            state.data.invites.splice(index - state.data.groups.length - 1, 1)
        },
        createGroup(state, info) {
            let newGroup = {
                title: info.name,
                icon: state.data.icons[info.icon],
                admin: true,
                nextMeeting: {
                    happeningNow: false,
                    response: null,
                    time: null,
                    type: null,
                    location: null,
                    responses: []
                },
                members: [
                // {
                //     name: state.data.profile.name,
                //     avatar: state.data.profile.avatar,
                //     telephone: state.data.profile.telephone,
                //     email: state.data.profile.email
                // }
            ]
            }


            state.data.groups.push(newGroup)
        }

    },
    actions: {

    },
    getters: {
        members: state => state.data.members,
        signedIn: state => state.data.settings.signedIn,
        onlyCalls: state => state.data.settings.onlyCalls,
        profileData: state => state.data.profile,
        icons: state => state.data.icons,
        contacts: state => {
            let contacts = []
            let index = 0
            for (let i = 0; i < state.data.groups.length; i++) {
                for (let j = 0; j < state.data.groups[i].members.length; j++) {
                    if (!contacts.filter(e => e.email === state.data.groups[i].members[j].email).length > 0) {
                        contacts.push(state.data.groups[i].members[j])
                        Vue.set(contacts[contacts.length - 1], 'icons', [state.data.groups[i].icon])
                        Vue.set(contacts[contacts.length - 1], 'groups', [{
                            title: state.data.groups[i].title,
                            color: state.data.tabColors[i + 1]
                        }])
                        Vue.set(contacts[contacts.length - 1], 'color', state.data.tabColors[i + 1])
                        Vue.set(contacts[contacts.length - 1], 'id', index)
                        index += 1

                    } else {
                        contacts[contacts.filter(e => e.email === state.data.groups[i].members[j].email)[0].id].icons.push(state.data.groups[i].icon)
                        contacts[contacts.filter(e => e.email === state.data.groups[i].members[j].email)[0].id].groups.push({
                            title: state.data.groups[i].title,
                            color: state.data.tabColors[i + 1]
                        })
                    }
                }
            }

            contacts.sort(function compare(a, b) {
                return (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0;
            })

            console.log(contacts)

            return contacts
        },
        profileGroups: state => {
            var groups = []
            for (let i = 0; i < state.data.groups.length; i++) {
                groups.push({
                    invited: false,
                    title: state.data.groups[i].title,
                    icon: state.data.groups[i].icon,
                    index: i,
                    color: state.data.tabColors[i + 1]

                })
            }

            for (let i = 0; i < state.data.invites.length; i++) {
                groups.push({
                    invited: true,
                    title: state.data.invites[i].title,
                    icon: state.data.invites[i].icon,
                    index: i + state.data.groups.length,
                    color: 'red'
                })
            }

            console.log(groups)
            return groups

        },
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
            if (ind >= state.data.groups.length + 1) {
                return state.data.invites[ind - state.data.groups.length - 1]

            }
            return state.data.groups[ind - 1]

        },
        colorByGroup: (state) => (ind) => {
            return state.data.tabColors[ind]
        },
        nextTwoMeetings: state => {
            let meetings = []
            let lesser = 2
            if (state.data.groups.length < 2) {
                lesser = state.data.groups.length
            }

            for (let i = 0; i < lesser; i++) {
                meetings.push({
                    text: state.data.groups[i].title + ": " + state.data.groups[i].nextMeeting.time,
                    color: state.data.tabColors[i + 1],
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