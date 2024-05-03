function getData(dataId, getNextData){
    setTimeout(
        () => {
        console.log("data", dataId);
        if(getNextData){
            getNextData();
        }
    }
    , 2000)
}

// this is callback hell
getData(1, () => {
    getData(2, () =>{
        getData(3, ()=>{
            getData(4, ()=> {
                getData(5);
            })
        })
    })
});