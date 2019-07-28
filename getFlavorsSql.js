$( document ).ready(function(){
    var data = [];
    var html = document.getElementsByClassName('RowSelectable');
    for (var i = 0; i < html.length; i++) {
        // console.log(html[i]);
        var td = html[i].getElementsByTagName('td');					
            let jsn = {
                name: td[1].getElementsByTagName('div')[0].innerHTML.replace('&nbsp;', ''),
                vCPU: td[2].getElementsByTagName('div')[0].innerHTML.replace('&nbsp;', ''),
                Memory: parseFloat(td[3].getElementsByTagName('div')[0].innerHTML.replace('&nbsp;', ''))*1000,
                price: td[6].getElementsByTagName('div')[0].innerHTML.replace('&nbsp;&nbsp;&nbsp;', '').replace('$', '').replace('&nbsp;&nbsp;', ''),
                OsType: 'linux'
            };
            data.push(jsn);
    }
    // console.log(data);
    var sql = "INSERT INTO flavorsws (name, vCPU, memory, price, versionDate, osType) VALUES ";
    data.forEach( function(x, index) {
        sql+="('"+x.name+"', ";
        sql+="'"+x.vCPU+"', ";
        sql+="'"+x.Memory+"', ";
        sql+="'"+x.price+"', ";
        sql+="'"+moment().format('YYYY-MM-DD HH:mm:ss')+"',";
        sql+="'"+x.OsType+"'), ";
    });
    var nsql = sql.substr(0,(sql.length - 2));
       sql = nsql;
    sql+= ";";
    console.log(sql);

});

/*
 CREATE TABLE `flavorsaws` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `vCPU` bigint(20) DEFAULT NULL,
  `memory` bigint(20) DEFAULT NULL,
  `osType` varchar(255) DEFAULT NULL,
  `price` decimal(19,6) DEFAULT NULL,
  `versionDate` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53011 DEFAULT CHARSET=latin1
*/
/*
*/
