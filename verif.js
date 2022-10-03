let day = new Date().getDay()
let hours = new Date().getHours()

console.log(hours)

function verif (req,res,next){
if (day>0 && day<6 && hours>9 && hours <17)
next()
else(res.send('<h1>welcome => service cloused now <h1/>'))

}

module.exports = verif1;