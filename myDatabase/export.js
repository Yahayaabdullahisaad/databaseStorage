let imformation=[{id:1,name:'yahaya'},{id:2,name:'musa'},{id:3,name:'isah'}];
function Set(set){
    imformation.push(set)
}

function Onvalue(){
    return imformation
}

function Remove(index){
    for(let i=0; i<imformation.length;i++){
        if(Number(imformation[i].id)===Number(index)){
            imformation.splice(i,i+1)
        }
    }
    
}

function Update(index,update){
    for(let i=0; i<imformation.length;i++){
        if(Number(imformation[i].id)===Number(index)){
            imformation[i]=update;

        }
    }
}

export {Set,Onvalue,Remove,Update}
