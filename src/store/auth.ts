import createId from '@/lib/createId'

const state = {
    addDate: { addToggle: false, currentKind: undefined, type: "-", notes: "", number: '', createdAt: undefined } as addDate,
    DateList: [] as RecordItem[]
}
const getters = {
    DateList(state: any) {
        return state.DateList
    }
}
const mutations = {
    fetchDate(state: any) {
        state.DateList = JSON.parse(window.localStorage.getItem('dataSource') || '[]')
    },
    saveData(state: any) {
        const id = createId()
        const data = JSON.parse(JSON.stringify({ id, data: state.addDate }))
        state.DateList.push(data)
        window.localStorage.setItem('dataSource', JSON.stringify(state.DateList))
    },
    changeAddToggle(state: any) {
        state.addDate.addToggle = !state.addDate.addToggle;
    },
    changeCurrentKind(state: any, currentKind?: string) {
        console.log(currentKind)
        console.log('明明有提交')
        state.addDate.currentKind = currentKind;
    },
    changeType(state: any, type: string) {
        state.addDate.type = type;
    },
    changeNotes(state: any, notes: string) {
        state.addDate.notes = notes
    },
    changeNumber(state: any, number: string) {
        state.addDate.number = number
        state.addDate.createdAt = JSON.stringify(new Date())
    }
}

export default {
    state,
    getters,
    mutations
}