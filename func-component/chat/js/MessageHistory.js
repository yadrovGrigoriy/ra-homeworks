'use strict';

const MessageHistory = ({list}) => {
    if(!list)return null
    return(
        <ul>
            {
                list.map( (item) => {
                    if(item.type === "response") {
                        return <Response key={item.id} from={item.from} message={item} />
                    }
                    if(item.type === "message") {
                        return <Message key={item.id} from={item.from} message={item} />
                    }
                    if(item.type === "typing") {
                        return <Typing key={item.id} from={item.from} message={item} />
                    }
                })
            }
        </ul>
    )
    

}
MessageHistory.defaultProps = {
    list:[]
}
