import { mystyle1 } from "./style"

export const Mystyle:React.FC<{}>=()=>{
    var mystyle={backgroundColor:'red'}
    return <>
    <h1 style={{backgroundColor:'red'}}>im css topic</h1>
    <h1 style={mystyle}>im css in page</h1>
    <h1 style={mystyle1}>im css in page</h1>
    </>
}