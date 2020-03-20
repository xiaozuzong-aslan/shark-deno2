let id = parseInt(window.localStorage.getItem('id')||'0')||0
export default function(){
    id++
    window.localStorage.setItem('id', id.toString())
   
    return id.toString()
}