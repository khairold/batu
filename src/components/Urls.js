import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
export const fields = ['firstName', 'lastName', 'email', 'sex', 'favoriteColor', 'employed', 'notes'];

class SimpleForm extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired
  };

  render() {
    const {
      fields: {firstName, lastName, email, sex, favoriteColor, employed, notes},
      handleSubmit,
      resetForm
      } = this.props;
    return (<form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <div>
            <input type="text" placeholder="First Name" {...firstName}/>
          </div>
        </div>
        <div>
          <label>Last Name</label>
          <div>
            <input type="text" placeholder="Last Name" {...lastName}/>
          </div>
        </div>
        <div>
          <label>Email</label>
          <div>
            <input type="email" placeholder="Email" {...email}/>
          </div>
        </div>
        <div>
          <label>Sex</label>
          <div>
            <label>
              <input type="radio" {...sex} value="male" checked={sex.value === 'male'}/> Male
            </label>
            <label>
              <input type="radio" {...sex} value="female" checked={sex.value === 'female'}/> Female
            </label>
          </div>
        </div>
        <div>
          <label>Favorite Color</label>
          <div>
            <select {...favoriteColor}>
              <option></option>
              <option value="ff0000">Red</option>
              <option value="00ff00">Green</option>
              <option value="0000ff">Blue</option>
            </select>
          </div>
        </div>
        <div>
          <label>
            <input type="checkbox" {...employed}/> Employed
          </label>
        </div>
        <div>
          <label>Notes</label>
          <div>
            <textarea {...notes}/>
          </div>
        </div>
        <div>
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={resetForm}>Clear Values</button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'simple',
  fields: ['firstName', 'lastName', 'email', 'sex', 'favoriteColor', 'employed', 'notes']
})(SimpleForm);



// class Urls extends Component {
//   render() {
//     const {fields: {firstName, lastName, email}, handleSubmit} = this.props;

//     const { urls, addUrl } = this.props
//     const urlsNode = urls.map(url => {
//     	return <p key={url.uri} >{url.uri}</p>
//     })
//     return (
//       <div>
//         {urlsNode}

//         <div>
//           <button onClick={() => addUrl('lala')}>Add URL</button>
//         </div>

//         <div>

//           <ContactForm />


//         </div>
//       </div>
//     )
//   }
// }


export default SimpleForm
