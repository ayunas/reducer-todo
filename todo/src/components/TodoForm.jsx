import React from 'react';
import {withFormik, Form, Field} from 'formik';
import todoreducer, {initialState} from '../reducers/todoreducer';


function TodoForm(props) {
    
    React.useEffect(() => {
        if (props.status) {
            props.dispatch({type: "ADD_TODO", payload: props.status})
        }
    },[props.status])

 return (
    <Form>
        <Field name="todo" placeholder="Add Todo"/>
        <button type="submit">Add Todo</button>
    </Form>
)
}

const FormikTodoForm = withFormik({
    mapPropsToValues(values) {
        return { todo : values.todo || '' }
    },
    handleSubmit(values, formikBag) {
        formikBag.setStatus({...values, completed : false});
    }
})(TodoForm)

export default FormikTodoForm;




