import css from "./faal.module.css";
import Btn from "../../components/btn"
function Faal(){

return(
<div>
<div className={css.fullScreen}>
        <div className={css.backYelow}>
            <Btn color="gray" text="بازگشت به صفحه اصلی " action={()=> window.open('/faal', "_self")} />
        </div>
       </div> 
</div>

)
}
export default Faal;