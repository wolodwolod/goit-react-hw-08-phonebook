import { Navigate, Route, Routes } from "react-router-dom";
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { current } from "./redux/auth/auth-operations";
import Navbar from "components/Navbar";
import HomePage from "pages/HomePages/HomePages";
import PublicRoute from "shared/components/PublicRoute";
import PrivateRoute from "shared/components/PrivateRoute";
import RegisterPage from "pages/RegisterPage";
import LoginPage from "pages/LoginPage";


import "./shared/styles/style.scss";
import ContactPage from "pages/ContactPage";



function App() {
  
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(current());
  }, [dispatch])

  return (
    <div className="App">
      <Navbar />
      <Routes>
            
                <Route path="/" element={<HomePage />} />
                <Route element={<PublicRoute />}>
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Route>
                <Route element={<PrivateRoute />}>
                    <Route path="/contacts" element={<ContactPage />} />
                   
                </Route>
                <Route path="*" element={<Navigate to="/" replace />} />
            
        </Routes>
    </div>
  );

   
//   const [filter, setFilter] = useState('');
  
//   const contacts = useSelector(getAllContacts, shallowEqual);
//   const loading = useSelector(getContactsLoading, shallowEqual);
//   const dispatch = useDispatch();
//   console.log(contacts);
  
    
//   useEffect(() => {
                 
//           const getContacts = () => dispatch(operations.fetchContacts());
//           getContacts();
//         }
//     , [dispatch]);
  
  
//   const addContact = (payload) => {
    
//     const { name, number } = payload;
    
//     const normalizedInputName = name.toLowerCase();
//     const findName = contacts.find(
//       contact => contact.name.toLowerCase() === normalizedInputName
//     );
//     if (findName) {
//       return alert(`${name} is already in contacts!`);
//     }
//     const findNumber = contacts.find(
//       contact => contact.number === number);
//     if (findNumber) {
//       return alert(`This phone number is already in contacts!`);
//     }
    
//     const action = operations.addContact(payload);
//     dispatch(action);
//   };
  
  
//   const deleteContact = (id) => {
//     const action = operations.removeContact(id);
//     dispatch(action);
//   };


//   const filterContacts = () => {
    
//     const normalizedFilter = filter.toLowerCase();
    
//       return filter !== "" ? contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)) : contacts
//     ;
//   };

//   const handleFilter = useCallback ( (e) => {
//     setFilter(e.currentTarget.value);
//     }, []);

//   console.log(filterContacts());
       
//   return (
//     <>
//       <Section className='PhonebookSection' title='Phonebook'>
//         <ContactForm onSubmit={addContact}/>
//       </Section>
      
//       <Section className='ContactsSection' title='Contacts'>
//         <Filter value={filter} onChange={handleFilter} />
//         <div style={{ height: '10px' }}>
//           {loading && <p>...Loading</p>}
//         </div>
//         <ContactList contacts={filterContacts ()} onDelete={deleteContact} />
//       </Section>
//     </>
//   );
  
};

export default App;