function startTime()
      {
        
        var tm=new Date();
        var h=tm.getHours();
        var m=tm.getMinutes();
        m=checkTime(m);
        document.getElementById('h').innerHTML=h;
        document.getElementById('m').innerHTML=m;
        //return h;
      }
function checkTime(i)
      {
        if (i<10)
        {
          i="0" + i;
        }
        return i;
      }
setInterval(
        
        () => startTime(), 1000
     );
