import React, { useReducer } from 'react';

const formReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_FIELD':
      return { ...state, [action.field]: action.value };
    case 'SUBMIT':
      return {
        name: '',
        email: '',
        DOB: '',
        phone: '',
        city: '',
        comment: '',
        gender: '', // Added gender
      };
    default:
      return state;
  }
};

function Form() {
  const [store, dispatch] = useReducer(formReducer, {
    name: '',
    email: '',
    DOB: '',
    phone: '',
    city: '',
    comment: '',
    gender: '', // Added gender
  });

  const [isSubmitted, setIsSubmitted] = React.useState(false);

  return (
    <div>
      <h1>Simple Form with Reducer</h1>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          setIsSubmitted(true);
          dispatch({ type: 'SUBMIT' });
        }}
      >
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={store.name}
            onChange={(evt) =>
              dispatch({ type: 'INPUT_FIELD', field: 'name', value: evt.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="DOB">DOB: </label>
          <input
            type="date"
            id="DOB"
            name="DOB"
            required
            value={store.DOB}
            onChange={(evt) =>
              dispatch({ type: 'INPUT_FIELD', field: 'DOB', value: evt.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={store.email}
            onChange={(evt) =>
              dispatch({ type: 'INPUT_FIELD', field: 'email', value: evt.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="gender">Gender: </label>
          <input
            type="checkbox"
            id="male"
            name="gender"
            value="male"
            onChange={(evt) =>
              dispatch({ type: 'INPUT_FIELD', field: 'gender', value: evt.target.value })
            }
          />
          <label htmlFor="male">Male</label>
          <input
            type="checkbox"
            id="female"
            name="gender"
            value="female"
            
            onChange={(evt) =>
              dispatch({ type: 'INPUT_FIELD', field: 'gender', value: evt.target.value })
            }
          />
          <label htmlFor="female">Female</label>
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="number"
            id="phone"
            name="phone"
            value={store.phone}
            onChange={(evt) =>
              dispatch({ type: 'INPUT_FIELD', field: 'phone', value: evt.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="city">Birth city:</label>
          <input
            type="text"
            id="city"
            name="city"
            required
            value={store.city}
            onChange={(evt) =>
              dispatch({ type: 'INPUT_FIELD', field: 'city', value: evt.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="comment">Comment: </label>
          <textarea
            id="comment"
            name="comment"
            value={store.comment}
            onChange={(evt) =>
              dispatch({ type: 'INPUT_FIELD', field: 'comment', value: evt.target.value })
            }
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {isSubmitted && (
        <div className='data'>
          <h2>Submitted Values:</h2>
          <p>Name: {store.name}</p>
          <p>Phone: {store.phone}</p>
          <p>Email: {store.email}</p>
          <p>Gender: {store.gender}</p>
          <p>Birth city: {store.city}</p>
          <p>DOB: {store.DOB}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
