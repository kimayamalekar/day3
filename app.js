//Callback example

function fetchDataWithCallback(callback){
    setTimeout(() => {
        console.warn("Some delay expected");
        const data = 'Data fetched with callback';
        callback(data);
    }, 2000);
}

function runCallbackExample (){
    console.log("Hello from the other side");
    const output = document.getElementById('callback-output');
    fetchDataWithCallback((data)=>{
        output.textContent = data;
    });

}
//promise example
function fetchDataWithPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const success = true;
            if(success){
                resolve('data fetched with promise');
            }else{
                reject('error fetching data');
            }
        },2000);
    });
}
function runPromiseExample(){
    const output = document.getElementById('promise-output');
    console.log("starting with the promise");
    fetchDataWithPromise()
    .then(data =>{
        console.log("promise resolved with data",data);
        output.textContent=data;
    })
    .catch(error => {
        console.error("promise rejected with error",error);
        output.textContent=error;
    }).finally(() =>{
        console.log("promise example complete");
    });
}


//async example
function fetchData(){
    return new Promise((resolve,reject)=> {
        setTimeout(()=>{
            resolve('data fetched with async/await');
        },2000);
    });
}
async function runAsyncAwaitExample(){
    const output = document.getElementById("async-output");
    try{
        const data = await fetchData();
        output.textContent= data;
    }catch(error){
        output.textContent=error;
    }

}
function fetchWithPromises(){
    const output = document.getElementById('fetch-promises-output');
    output.innerHTML = '';
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        data.slice(0,5).forEach(post => {
            const li = document.createElement('li');
            li.textContent = post.title;
            output.appendChild(li);

        });

    }).catch(error => {
        console.error('Error',error);
    });
}