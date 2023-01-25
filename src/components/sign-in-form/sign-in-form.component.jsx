import {useState} from 'react'
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";



const SignInForm = () => {
    const defaultFormFields = {
        email: '',
        password: ''
    }

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormFields({...formFields, [name]: value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()

    }

    return (
        <div className='sign-in-container'>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Email'
                    type='email'
                    required
                    onChange={handleChange}
                    name='email'
                    value={email}
                />

                <FormInput
                    label='Password'
                    type='password'
                    required
                    onChange={handleChange}
                    name='password'
                    value={password}
                />
                <Button type='submit'>Sign Up</Button>
            </form>
        </div>
    );
};

export default SignInForm;
