import tarh1 from "../../assets/tarh1.png";
import bookmg from "../../assets/bookmg.png";

import css from "./home.module.css";
function Home(){
return (
<div className={css.fullscreen}>
    <img src={tarh1} className={css.image2} />
    <div className={css.right}>

    <div className={css.image}>
                 <img   src={bookmg}/>
                </div>
                <div className={css.text}>
                <p>
                            تاریخ کهن ایران زمین با پیشینه ای غنی از فرهنگ و
                            هنر، از دیرباز با شعر و ادبیات درهم پیچیده و ایران،
                            مهد پرورش شاعران بزرگی بوده و در گیر و دار فراز و
                            نشیب هایی که در طول تاریخ بر آن گذشته، اما شاهنامه
                            وزین پارسی پرور فردوسی بزرگ، اشعار روح بخش مولانا و
                            عشق بازی اش با حق، غزل های عاشقانه و عارفانه عالم
                            گیر در دیوان حافظ، اندیشه ژرف و عرفان ناب عطار
                            نیشابوری همه و همه همچون مرهمی بر زخم های کوچک و
                            بزرگش تسکین داده اند.
                        </p>

                </div>
</div>
 </div>
    )
}
export default Home;