import css from "./faal.module.css";
import Btn from "../../components/btn"
import Faalcmponent from "../../components/faalcmponent";
import Getfaal from "../../components/api/getfaal";
function Faal(){
    const { title, poem, voice, Interpretation } = Getfaal();

return(
<div>
<div className={css.fullScreen}>
        <div>
            <Faalcmponent
                 title={title}
                 poem={poem}
                 voice={voice}
                 Interpretation={Interpretation}
            />
        </div>
       </div> 
</div>

)
}
export default Faal;