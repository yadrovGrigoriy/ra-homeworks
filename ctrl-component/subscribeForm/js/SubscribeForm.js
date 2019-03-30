


class SubscribeForm extends React.Component {
    
    state = {
        isError:false
    }

    handleEmail = (event) => {
        const inputIsValid = event.currentTarget.validity.valid
        
        if(!inputIsValid){
            this.setState({
                isError:true
            })
        } else {
            this.setState({
                isError:false
            })
        }
    }


    render(){
        return (
            <div className="subscribe__form ">
                <form className={this.state.isError? "form form--subscribe is-error" : "form form--subscribe is-valid"}>
                    <h4 className="form-title">Подписаться:</h4>
                    <div className="form-group">
                    <label htmlFor="input-email" className="sr-only">Email</label>
                    <input 
                        className="form-control"
                        type="email" 
                        id="input-email" 
                        placeholder="Email"
                        onChange={this.handleEmail}
                    />
                    <div className="form-error">Пожалуйста, проверьте корректность адреса электронной почты</div>
                    <button type="submit" className="form-next">
                        <i className="material-icons">keyboard_arrow_right</i>
                    </button>
                    </div>
                </form>
            </div>
        )

    }
};