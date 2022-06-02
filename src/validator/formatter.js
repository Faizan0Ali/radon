const str2 = "JavAScRipT Is a GrEaT LanGuage"
function trim(){
    console.log("after trim", str2.trim());
}

function lower(){
    console.log("string in lower case-", str2.toLowerCase());
}
function upper(){
    console.log("string in upper case-", str2.toUpperCase());
}
module.exports.trim=trim
module.exports.lower=upper
module.exports.upper=upper
