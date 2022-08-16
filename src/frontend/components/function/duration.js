

const durationFnc = (value) => {
    const duration=((value).split(""));
    let sec='';
    let min='';
    let hr='';
    let str="";
    duration.shift();
    duration.shift();
    duration.map((i)=>{
        if (i==='H') {
          // sethour(prev=>prev=true)
          hr=str;
          str=""
        }
        if (i==='M') {
          min=str;
          str="";
          return null;
        }
        if (i==='S') {
          sec=str;
          str="";
          return null;
          
        }
        str=str+i;
        return""
      })

return `${hr?hr.length>1?`${hr}:`:`0${hr}:`:""}${min?min.length>1?`${min}:`:`0${min}:`:"00:"}${sec?sec.length>1?`${sec}`:`0${sec}`:"00"}`
}

export default durationFnc