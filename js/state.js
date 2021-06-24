class State{
    constructor(){

    }
    getState(){
        database.ref("state").on("value",() => {
            state = data.val()
        })
    }
    updateState(state){
        database.ref("/").update({
            state : state
        })
    }
}