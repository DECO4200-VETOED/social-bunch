import Vue from 'vue'
import Vuex from 'vuex'
import data from '../data'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        data: data
    },
    mutations: {
        signOut(state) {
            state.data.settings.signedIn = false
        },
        setActiveContact(state, id) {
            state.data.settings.activeContact = id
        },
        toggleOnlyCalls(state) {
            state.data.settings.onlyCalls = !state.data.settings.onlyCalls
        },
        resetOnlyCalls(state) {
            state.data.settings.onlyCalls = false

        },
        toggleShare(state) {
            state.data.profile.sharing = !state.data.profile.sharing
        },
        setHelp(state, value) {
            state.data.settings.viewHelp = value
        },
        signIn(state) {
            state.data.settings.signedIn = true
        },
        createAccount(state) {
            state.data.settings.signedIn = true
            // TODO: Would go to a create account flow??
        },
        postReply(state, {
            reply,
            message,
            group
        }) {
            state.data.groups[group - 1].messages[message].comments.push({
                posterName: state.data.profile.name,
                posterAvatar: state.data.profile.avatar,
                date: "05/11/21",
                content: reply
            })
        },
        makePost(state, {
            title,
            content,
            img,
            group
        }) {
            state.data.groups[group - 1].messages.splice(0, 0, {
                posterName: state.data.profile.name,
                posterAvatar: state.data.profile.avatar,
                date: "05/11/21",
                title: title,
                content: content,
                image: img,
                comments: []
            })
        },
        leaveGroup(state, index) {
            state.data.groups.splice(index, 1)
        },
        joinGroup(state, index) {
            state.data.groups.push(state.data.invites[index - state.data.groups.length])
            state.data.invites.splice(index - (state.data.groups.length - 1), 1)

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
                },
                members: []
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
        activeContact: state => state.data.settings.activeContact,
        viewHelp: state => state.data.settings.viewHelp,
        faqs: state => state.data.faqs,
        invites: state => state.data.invites,
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

            return meetings
        }

    }
})