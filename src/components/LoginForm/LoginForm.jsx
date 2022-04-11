import {useState, useEffect} from "react";
import {useSelector, shallowEqual, useDispatch} from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { login } from "../../redux/auth/auth-operations";

import { getIslogin } from "../../redux/auth/auth-selectors";

import { initialState } from "./initialState";

import s from "./log-form.module.scss"

const LoginForm = ()=> {
    const [form, setForm] = useState({...initialState});
    const isLogin = useSelector(getIslogin, shallowEqual);

    const navigate = useNavigate();

    const location = useLocation();

    const dispatch = useDispatch();

    useEffect(()=> {
        if(isLogin) {
            const from = location.state?.from || "/contacts";
            navigate(from);
        }
    }, [isLogin, location.state?.from, navigate]);

    const handleChange = ({target}) => {
        const {name, value} = target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }))
    };

    const handleSubmit = (e)=> {
        e.preventDefault();
        dispatch(login(form));
        setForm({ ...initialState });
        
    }

    return (
        <form className={s.form__box} onSubmit={handleSubmit}>
            <div className={s.form__wrap}>
                <label className={s.form__label} htmlFor="">Email</label>
                <input className={s.form__input} name="email" value={form.email} onChange={handleChange} type="email" required placeholder="Email" />
            </div>
            <div className={s.form__wrap}>
                <label className={s.form__label} htmlFor="">Password</label>
                <input className={s.form__input} name="password" value={form.password} onChange={handleChange} type="password" required placeholder="Password" />
            </div>
            <div>
                <button className={s.form__submit} type="submit">Login</button>
            </div>
        </form>
    )
};

export default LoginForm;