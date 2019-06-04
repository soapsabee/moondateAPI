var objectmoon = require('./moondate.json');

function findDay(req,res){
    let year = req.params.year;
    let month = req.params.month;
    let day = req.params.day;

   let result = find(year,month,day);
   if(result != null){
       res.status(200)
        .json({
            status: 'success',
            data:result,
            message: 'solaryear:'+result.solaryear+'solarmount:'+result.solarmount+'solarday:'+result.solarday+'moonmount:'+result.moonmount+'moontype:'+result.moontype+'moonday:'+result.moonday
        });
        
    }else{
        console.log('ERROR: happend on findDay function')

    }
}

function find(year, month, day) {

    var result = [];
        result = objectmoon.find(function (item) { return item.solaryear == year && item.solarmount == month && item.solarday == day });

      return result
}



module.exports = {
    findDay
}