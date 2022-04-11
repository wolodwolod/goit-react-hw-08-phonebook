import {useState} from "react";
import {useDispatch} from "react-redux";

import { signup } from "../../redux/auth/auth-operations";

import { initialState } from "./initialState";
import s from "./reg-form.module.scss"

const RegisterForm = ()=> {
    const [form, setForm] = useState({...initialState});

    const dispatch = useDispatch();

    const handleChange = ({target}) => {
        const {name, value} = target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }))
    };

    const handleSubmit = (e)=> {
        e.preventDefault();
        dispatch(signup(form));
        setForm({...initialState});
    }

    return (
        <form className={s.form__box} onSubmit={handleSubmit}>
        
            <div className={s.form__wrap}>
                <label className={s.form__label} htmlFor="">Name</label>
                <input className={s.form__input} name="name" value={form.name} onChange={handleChange} type="text" required placeholder="Name" />
            </div>
            <div className={s.form__wrap}>
                <label className={s.form__label} htmlFor="">Email</label>
                <input className={s.form__input} name="email" value={form.email} onChange={handleChange} type="email" required placeholder="Email" />
            </div>
            <div className={s.form__wrap}>
                <label className={s.form__label} htmlFor="">Password</label>
                <input className={s.form__input} name="password" value={form.password} onChange={handleChange} type="password" required placeholder="Password" />
            </div>
            <div>
                <button className={s.form__submit} type="submit">Register</button>
            </div>
            
        </form>
    )
};

export default RegisterForm;