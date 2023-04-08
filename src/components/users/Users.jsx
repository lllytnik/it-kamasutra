import React from "react";
import s from "./Users.module.css";
import usersPic from "../../images/dialog/user1.png";
import axios from 'axios';

class Users extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items);
        });
    }
    render() {
        return <div className={s.users}>
            {
                this.props.users.map(u => <div className={s.user} key={u.id}>
                    <div className={s.wrapper}>
                        <div className={s.avatar}>
                            <img src={u.photos.small != null ? u.photos.small : usersPic} alt="avatar" />
                        </div>
                        <div className={s.name}>{u.name}</div>
                        <div className={s.status}>{u.status}</div>
                        <div className={s.location}>
                            <div className={s.locationCountry}>{"u.location.country"}:&nbsp;</div>
                            <div className={s.locationCity}>{"u.location.city"}</div>
                        </div>
                    </div>

                    <div className={s.wrapBtn}>
                        {u.followed
                            ? <button className={s.btnUnfollow} onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                            : <button className={s.btnFollow} onClick={() => { this.props.follow(u.id) }}>Follow</button>}
                    </div>


                </div>)
            }
        </div >
    }
}

export default Users;