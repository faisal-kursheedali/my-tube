

const viewFnc = (value) => {
    let count=Number(value);
    let countSnippet=""
    
    if(count>=1000){
        countSnippet=(count.toString().charAt(0)+"k")
    }
    if(count>=1000000){
        countSnippet=(count.toString().charAt(0)+"m")
      }
      if (count<1000) {
      countSnippet=(count.toString()) 
    }
    return countSnippet;
}

export default viewFnc