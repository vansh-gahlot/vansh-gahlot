export const Button = ({val, classname, fn})=>{
    const clicked = ()=>{
        fn(val); // Parent Fn call and pass val (+, -)
        console.log('Clicked Happen ', val);
    }
    return (<button onClick={clicked} className = {classname}>{val}</button>)
}