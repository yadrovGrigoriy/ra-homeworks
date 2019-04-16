

const DateTimePretty = (Component) => {
    return class extends React.Component {

        formatTime = (propsDate) => {
            const date = new Date(propsDate);
            const today = new Date();
            let diffDay = today - date;
            const minute =  60 * 1000;    
            const hour = 60 * 60 * 1000;
            const day = 24 * 60 * 60 * 1000;
        
            if(diffDay < hour) return (diffDay / minute).toFixed(0) + " минут назад";   
            if(diffDay > day) return (diffDay / day).toFixed(0) + " дней назад";  
            if(diffDay > hour) return (diffDay / hour).toFixed(0) + " часов назад";
        };
        render(){
            return(
                <Component date={this.formatTime(this.props.date)}/>
            );
        }
    }
}
