import React from 'react';

function EditForm(){
    return (
        <form action="https://jsonplaceholder.typicode.com/posts" method="POST" className="edit-form col-12">
            <label className="label-form col-12"> Titulo </label>
                <input type="text" name="title" className="input-form col-11 col-md-6" required/>
            <label className="label-form col-12"> Contenido </label>
                <textarea name="body" cols="80" rows="10" className="input-form-des col-11 col-md-6" required></textarea>
            <p className="col-12"><input type="submit" value="Subir publicación" className="submit-form col-8 col-md-2"/></p>
        </form>
    )
}

export default EditForm;