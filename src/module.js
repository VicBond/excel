console.log('Module.js');

async function start() {
return await Promise.resolve('asynch works')
}

start().then(console.log);