import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://yt3.googleusercontent.com/ytc/AL5GRJVM-YjoQigPQgxUb_e1kcidiv9ytsI3Mhk_uzdk=s900-c-k-c0x00ffffff-no-rj' className={s.img} />
            {props.message}
            <div>
                <span> Like </span>
            </div>
        </div>
    );
}
export default Post;