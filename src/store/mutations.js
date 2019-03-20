
const mutations = {
    addPatient (state, payload) {
        state.patientList.push(payload) 
    },
    setUserInfor(state,payload){
        state.userInfor=payload
    }
}

export default mutations 