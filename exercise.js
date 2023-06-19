const number = 9;

let test = new Promise((resolve , reject) =>{
    if(number > 10){
        resolve(true)
    }else {
        reject(false)
    }
})

async function result(){
    console.log(test);
}

test
 .then((val) => console.log(val))
 .catch((err) => console.error(err));


result()