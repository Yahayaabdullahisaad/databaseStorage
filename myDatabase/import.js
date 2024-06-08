import {Set,Onvalue,Remove,Update} from './export.js'







const fullName=document.querySelector('.fullName');
const id=document.querySelector('.id');



const set_button=document.querySelector('.set_button');
const remove_button=document.querySelector('.remove_button');
const update_button=document.querySelector('.update_button');

set_button.addEventListener('click',()=>{
    Set({'id':id.value,'name':fullName.value})
    let a=Onvalue();
    console.log(a)
})
remove_button.addEventListener('click',()=>{
    Remove(id.value)
    let a=Onvalue();
    console.log(a)
})
update_button.addEventListener('click',()=>{
    Update(id.value,{'id':id.value,'name':fullName.value})
    let a=Onvalue();
    console.log(a)
})












