const today = new Date();

const printDate = () => {
    console.log(`todays Current date is: ${today.getDate()}\n`);
}

const printMonth =()=>{
    console.log(`this is shows current month: ${today.getMonth()} \n`);
}

const getBatchInfo = () =>{
    console.log(`Radon, W3_D3, the topic for for today is Nodejs Module System, NPM, istall some package, some git commands to stash, git fetch etc. \n`);
}

module.exports.printDate = printDate;
module.exports.printMonth = printMonth;
module.exports.getBatchInfo = getBatchInfo;