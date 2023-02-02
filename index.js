const check = document.querySelector('#checking-button')
const date = document.querySelector('#date-input')
const luckynumber = document.querySelector('#lucky-input')
const result = document.querySelector('#showresult')


check.addEventListener('click',function showmessage(){
   const calculated =  date.value
   const casum = calculatebirthsum(calculated)
    if(casum% luckynumber.value === 0){
        console.log('done')
        result.innerText = "Birthdate is lucky"
    }else{
        result.innerText = "Not a lucky birthdate"
        console.log('notdone')
    }
})


function calculatebirthsum(calculated){
   const dob  = calculated.replace(/-/g,"");
    let sum =0;
    for(let i =0;i<dob.length;i++){
        sum = sum + Number(dob.charAt(i))
    }
    console.log('sumreturn')
    return sum

}
