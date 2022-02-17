import PropTypes from 'prop-types';
import React, { Component } from 'react';
import s from './ContactForm.module.css';

class PhoneBook extends Component {
  state = {
      name: '',
      number: '',
      };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({ name: '', number: '' });
    }

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  render() {
    
    return (
        <form className={s.Form}
            onSubmit={this.handleSubmit}>
            <label className={s.Form__label}>
          Name
          <input className={s.Form__input}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
            </label>
            
            <label className={s.Form__label}>
            Number
            <input className={s.Form__input}
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}              
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
/>
            </label>
        
        <button className={s.Form__btn} type="submit">Add contact</button>
      </form>
    );
  }
}
export default PhoneBook;