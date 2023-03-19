import React from "react";
import s from "./Users.module.css";
import usersPic from "../../images/dialog/user1.png";
let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            { id: 1, photoUrl: usersPic, followed: false, fullName: 'Dmitry', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' } },
            { id: 2, photoUrl: usersPic, followed: true, fullName: 'Sacha', status: 'I am a boss two', location: { city: 'Moscow', country: 'Russia' } }
        ]
        )
    }

    return <div className={s.users}>
        {
            props.users.map(u => <div className={s.user} key={u.id}>
                <div className={s.wrapper}>
                    <div className={s.avatar}>
                        <img src={u.photoUrl} alt="avatar" />
                    </div>
                    <div className={s.name}>{u.fullName}</div>
                    <div className={s.status}>{u.status}</div>
                    <div className={s.location}>
                        <div className={s.locationCountry}>{u.location.country}:&nbsp;</div>
                        <div className={s.locationCity}>{u.location.city}</div>
                    </div>
                </div>

                <div className={s.wrapBtn}>
                    {u.followed
                        ? <button className={s.btnUnfollow} onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                        : <button className={s.btnFollow} onClick={() => { props.follow(u.id) }}>Follow</button>}
                </div>


            </div>)
        }
    </div >
}
export default Users;