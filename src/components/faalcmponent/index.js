import css from "./faalcmponent.module.css";
import Btn from "../btn";
import {router} from "../router"
import FaalSher from "../faalSher";
function Faalcmponent(props){
    const { title, poem, voice, Interpretation } =
    props;
    return(
        <div className={css.container}>
        <div className={css.poem}>
            <div>
                <FaalSher title={title} poem={poem} />
            </div>
            <audio src={voice} controls></audio>

        </div>
        <div className={css.interpretationMain}>
            <p className={css.title}>ای صاحب فال:</p>
            <p className={css.interrpretation}>
                {Interpretation}
            </p>
        </div>
        <Btn
            text="بازگشت به صفحه اصلی"
            color = "gray" 
            action={()=> window.open('/', "_self")}                        
        />
</div>
    )
}
export default Faalcmponent;