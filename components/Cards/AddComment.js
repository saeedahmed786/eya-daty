import React from 'react'

const AddComment = () => {
    return (
        <div className='AddComment'>
            <h3>Ajouter un commentaire</h3>
            <div className='my-2'>
                <label>Commentaire</label>
                <br />
                <textarea placeholder='Commentaire' />
            </div>
            <div>
                <button>Commenter</button>
            </div>
        </div>
    )
}

export default AddComment
