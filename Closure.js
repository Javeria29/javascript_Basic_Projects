function outer(){
    let name="javeria"
    function inner(){
        console.log(name)
    }
   return  inner;
}
const myfun=outer();
myfun();