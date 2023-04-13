const onChange = (e) => {
    // const { name, value } = e.target;
    // // validate(name, value)
    if (e.target.type === "checkbox") {
        console.log(e.target.name)
        if (formValues.toppings.includes(e.target.name)) {
           const newToppings = [...formValues.toppings]
           const index = newToppings.indexOf(e.target.name)
           newToppings.splice(index, 1)
           setFormValues({...formValues, toppings: newToppings})
        }else {
            const toppingName = e.target.name;
            console.log(e.target.name, 'byeworld');
            setFormValues({...formValues, toppings: [...formValues.toppings, e.target.name]})
        }
    }else {
        // validate(e.target.name, e.target.value)
        setFormValues({...formValues, [e.target.name]: e.target.value})
    }
}

<form id="pizza-form" onSubmit={onSubmit}>
                <label>Name&nbsp;
                    <input 
                        id='name-input'
                        name='name'
                        type='text'
                        value={formValues.name}
                        onChange={onChange}
                        // {formErrors.name}
                    />
                </label>
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
                        checked={formValues.toppings.includes('pepperoni')}
                        onChange={onChange}
                    />
                </label>
                <label>Onions&nbsp;
                    <input 
                        type="checkbox"
                        name="onions"
                        checked={formValues.toppings.includes('onions')}
                        onChange={onChange}
                    />
                </label>
                <label>Green peppers&nbsp;
                    <input 
                        type="checkbox"
                        name="green peppers"
                        checked={formValues.toppings.includes('green peppers')}
                        onChange={onChange}
                    />
                </label>
                <label>Mushroom&nbsp;
                    <input 
                        type="checkbox"
                        name="mushroom"
                        checked={formValues.toppings.includes('mushroom')}
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