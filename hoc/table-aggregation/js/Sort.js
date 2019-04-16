

const Sort = (Component, format) => {
    return class extends React.Component {
        sortedList = (list) => {
            if(format === 'simlpeSort'){
                return list.sort((a, b) => new Date(b.date) - new Date(a.date)  );
            }  
            if(format === 'byYear'){
                const sortListByYaer = list.sort( (a,b) => new Date(a.date).getFullYear() - new Date(b.date).getFullYear() )
                return sortListByYaer.map( item => {
                    return {
                        year:new Date(item.date).getFullYear(),
                        amount:item.amount
                    };
                })
            }
            if(format === 'byMonth'){
                const currentYear = new Date('2018').getFullYear();
                const listByCurrentYear = list.filter(item => new Date(item.date).getFullYear() === currentYear);
                const sortListByMonth =  listByCurrentYear.sort( (a, b) => new Date(a.date).getMonth() - new Date(b.date).getMonth());

                
                return sortListByMonth.map( item => {
                    return {
                        month:new Date(item.date).toLocaleDateString('en-US', {month: 'short'}),
                        amount:item.amount
                    }
                })
            }
            
        }

        render(){
            
            return (
                
                <Component  list={this.sortedList(this.props.list)}/>
            );
        }    
    }
    
};

