export const Buttons: React.FC = () => {
    Abc()

    return <>
        <button>click me</button>
        
        <Abc />
        <Abc />

    </>
}

const Abc = () => {
    var data="something"
    console.log("hello im working")
    return <>
        <h1>{data}</h1>
    </>
}
