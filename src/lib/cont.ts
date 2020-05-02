function contNumber(string:string) {
  let flag = false;
  if (string[0] === "-") {
    string = string.slice(1);
    flag = true;
  }
  
  if (string.indexOf("+") >= 0) {
    const contList = string.split("+").filter(item=>item!=='');
    console.log(contList)
    if (flag) {
      if(contList.length<2){return contList[0] }
      return (-parseFloat(contList[0]) + parseFloat(contList[1])).toString();
    } else {
      
      if(contList.length<2){
        return contList[0]
       }
      return contList
        .reduce((total, item) => parseFloat(item) + total, 0)
        .toString();
    }

  }
  if (string.indexOf("-") >= 0) {
    const contList = string.split("-").filter(item=>item!=='');
    console.log(contList);
    if (flag) {
      if (contList.length < 2) {
        return "-" + contList[0];
      }
      return (-parseFloat(contList[0]) - parseFloat(contList[1])).toString();
    }
    if(contList.length<2){return contList[0] }
    return (parseFloat(contList[0]) - parseFloat(contList[1])).toString();
  }
  if(string.indexOf('-')<0&&string.indexOf('+')<0){
    if(flag){
      return '-'+string
    }else{
      return string
    }
    
  }else{
    return '0'
  }
}
export default contNumber;
