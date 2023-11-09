import React, { useReducer } from 'react';

const formReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_FIELD': return { ...state, [action.field]: action.value };
    case 'SUBMIT':return { name: '', email: '',DOB:'',phone:'' ,city:'',comment: '' };
    default:return state;
  }
};

function Form() {
  const [store, dispatch] = useReducer(formReducer, {name: '', email: '',DOB:'', phone:'',city:'',comment: '', });

  return (
    <div>
      <h1>Simple Form with Reducer</h1>
      <form onSubmit={(evt) => {evt.preventDefault();
          console.log('Form data submitted:', store);
        }}>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" name="name" value={store.name} onChange={(evt) => dispatch({ type: 'INPUT_FIELD', field: 'name', value: evt.target.value })}/>
        </div>
        <div>
          <label htmlFor="DOB">DOB: </label>
          <input type="date" id="DOB" name="DOB" value={store.DOB} onChange={(evt) => dispatch({ type: 'INPUT_FIELD', field: 'DOB', value: evt.target.value })}/>
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" name="email" value={store.email} onChange={(evt) => dispatch({ type: 'INPUT_FIELD', field: 'email', value: evt.target.value })}/>
        </div>
        <div>
          <label htmlFor="gender">Gender: </label>
          <input type="checkbox" id="male" name="female" value={store.gender} onChange={(evt) => dispatch({ type: 'INPUT_FIELD', field: 'gender', value: evt.target.value })}/>
          <label htmlFor="male">Male</label>
          <input type="checkbox" id="female" name="male" value={store.gender} onChange={(evt) => dispatch({ type: 'INPUT_FIELD', field: 'gender', value: evt.target.value })}/>
          <label htmlFor="female">Female</label>
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input type="number" id="phone" name="phone" value={store.phone} onChange={(evt) => dispatch({ type: 'INPUT_FIELD', field: 'phone', value: evt.target.value })}/>
        </div>
        <div>
          <label htmlFor="city">Birth city:</label>
          <input type="city" id="city" name="city" value={store.city} onChange={(evt) => dispatch({ type: 'INPUT_FIELD', field: 'city', value: evt.target.value })}/>
        </div>
        <div>
          <label htmlFor="comment">Comment: </label>
          <textarea id="comment" name="comment" value={store.comment} onChange={(evt) => dispatch({ type: 'INPUT_FIELD', field: 'comment', value: evt.target.value })}/>
        </div>

        <button onClick={() => dispatch({ type: 'SUBMIT' })}>submit</button>
      </form>
    </div>
  );
}

export default Form;
