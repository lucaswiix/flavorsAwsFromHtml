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
                price: td[6].getElementsByTagName('div')[0].innerHTML.replace('&nbsp;&nbsp;&nbsp;', '').replace('$', ''),
                OsType: 'linux'
            };
            data.push(jsn);
    }
    // console.log(data);
    var sql = "INSERT INTO flavorsAws ('name', 'vCPU', 'memory', 'price', 'osType') VALUES ";
    data.forEach( function(x, index) {
        sql+="('"+x.name+"', ";
        sql+="'"+x.vCPU+"', ";
        sql+="'"+x.Memory+"', ";
        sql+="'"+x.price+"', ";
        sql+="'"+x.OsType+"'), ";
    });
    var nsql = sql.substr(0,(sql.length - 2));
       sql = nsql;
    sql+= ";";
    console.log(sql);

});