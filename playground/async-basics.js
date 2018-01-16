console.log('Starting app...');

setTimeout(()=>{
    console.log('Callback Fired');
}, 2000);

setTimeout(()=>{
    console.log('0ms Fired');
}, 0);

console.log('Finishing app...');