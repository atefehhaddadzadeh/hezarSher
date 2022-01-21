import css from "./btn.module.css"
function Btn(props){
    const {action , text , color} = props
return (
<button className={css[color]} onClick={action}>
    {text}
</button>
)
}
export default Btn;