import React from 'react';

function EditForm(){
    return (
        <form action="/edit/:id" method="POST" className="edit-form col-12">
            <label className="label-form col-12"> Titulo
                <input type="text" name="titulo" className="input-form"/>
            </label>
            <label className="label-form col-12"> Descripción
                <input type="text" name="description" className="input-form"/>
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default EditForm;
