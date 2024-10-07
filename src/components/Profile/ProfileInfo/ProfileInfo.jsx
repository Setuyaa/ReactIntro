import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div >
                <img src='https://i.pinimg.com/originals/f7/5e/87/f75e87470f570d0a5b1d9686515d77c2.jpg' className={s.img1}/>
            </div>
            <div className={s.description}>
                <img src='https://yt3.googleusercontent.com/ytc/AL5GRJVM-YjoQigPQgxUb_e1kcidiv9ytsI3Mhk_uzdk=s900-c-k-c0x00ffffff-no-rj' className={s.img2} />
                + description
            </div>
            </div>
    );
}
export default ProfileInfo;