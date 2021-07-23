const Alert = ({ alert, setAlert }) => {
    return (
        alert && (
            <div className={ `alert alert-${ alert.type } alert-dismissible fade show` } role="alert">
                { alert.message }
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={ () => setAlert(false) }></button>
            </div>
        )
    )
}

export default Alert