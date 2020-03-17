let id = parseInt(window.localStorage.getItem('id')||'0')||0
export default function(){
    id++
    let f = window.localStorage.setItem('id', id.toString())
    console.log(f)
    return id.toString()
}