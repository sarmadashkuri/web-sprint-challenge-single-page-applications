import { useState } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import formSchema from './formSchema';

const initialFormValues = {
    name: "",
    size: "",
    pepperoni: false,
    onions: false,
    pineapple: false,
    mushroom: false,
    special: ""
}

const initialFormErrors = {
    name: "",
}

export default function PizzaForm () {

    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);

    const validate = (name, value) => {
        yup
            .reach(formSchema, name)
            .validate(value)
            .then(() => setFormErrors({ ...formErrors, [name]: "" }))
            .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
    }

   const onChange = (e) => {
    const { name, value, checked, type } = e.target;
    const valueToUse = type === "checkbox" ? checked : value;
    validate(name, valueToUse);
    setFormValues({ ...formValues, [name]: valueToUse })
   }

    const onSubmit = (e) => {
        e.preventDefault()
        // console.log(formValues);
        axios.post('https://reqres.in/api/orders', formValues)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.error(err))
            .finally(setFormValues(initialFormValues))
    }

    return (
        <div>
            Build your own pizza!
            <form id="pizza-form" onSubmit={onSubmit}>
                <label>Name&nbsp;
                    <input 
                        id='name-input'
                        name='name'
                        type='text'
                        value={formValues.name}
                        onChange={onChange}
                    />
                </label>
                <div>{formErrors.name}</div>
                <label>Size&nbsp;
                    <select id="size-dropdown" value={formValues.size} name="size" onChange={onChange}>
                        <option value="">---Select size---</option>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                    </select>
                </label>
                <label>Pepperoni&nbsp;
                    <input 
                        type="checkbox"
                        name="pepperoni"
                        checked={formValues.pepperoni}
                        onChange={onChange}
                    />
                </label>
                <label>Onions&nbsp;
                    <input 
                        type="checkbox"
                        name="onions"
                        checked={formValues.onions}
                        onChange={onChange}
                    />
                </label>
                <label>Pineapple&nbsp;
                    <input 
                        type="checkbox"
                        name="pineapple"
                        checked={formValues.pineapple}
                        onChange={onChange}
                    />
                </label>
                <label>Mushroom&nbsp;
                    <input 
                        type="checkbox"
                        name="mushroom"
                        checked={formValues.mushroom}
                        onChange={onChange}
                    />
                </label>
                <label>Special instructions
                    <input 
                            id='special-text'
                            name='special'
                            type='text'
                            value={formValues.special}
                            onChange={onChange}
                        />
                </label>
                <button id="order-button">Submit</button>
            </form>
        </div>
        
    )
}