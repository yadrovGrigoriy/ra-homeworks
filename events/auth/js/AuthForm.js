'use strict';


const AuthForm = ({ onAuth }) => {

    const submitForm = (event) => {
        event.preventDefault();
        if(typeof onAuth !== 'function' || !onAuth) return

        const userName = event.currentTarget.querySelector('input[type=text]');
        const userEmail = event.currentTarget.querySelector('input[type=email]');
        const userPass = event.currentTarget.querySelector('input[type=password]');
        
        const user = {
            name: userName.value,
            email:userEmail.value,
            password:userPass.value
        }
        onAuth(user)
    }

    const handleInput = (event) => {
        if(event.currentTarget.type === 'email'){
            event.currentTarget.value = event.currentTarget.value.replace(/[^\w@.-]/gi, '') 
        }
        if(event.currentTarget.type === 'password'){
            event.currentTarget.value = event.currentTarget.value.replace(/\W/gi, '')
        }
        
    }
    return (
        <form className="ModalForm" onSubmit={submitForm} action="/404/auth/" method="POST" >
            <div className="Input">
                <input required type="text" placeholder="Имя"/>>
                <label></label>
            </div>
            <div className="Input">
                <input
                    onChange={handleInput}
                    type="email" 
                    placeholder="Электронная почта"/>
                <label></label>
            </div>
            <div className="Input">
                <input
                     required
                     type="password" 
                     placeholder="Пароль"
                     onChange={handleInput}
                />
                <label></label>
            </div>
            <button type="submit">
                <span>Войти</span>
                <i className="fa fa-fw fa-chevron-right"></i>
            </button>
        </form>
    );
};

