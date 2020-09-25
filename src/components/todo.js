import React from 'react'

const todo = ({onClick, complete, txt}) => {
    return (<div onClick={() => onClick()} style={{textDecoration: complete? 'line-through': 'none'}}> 
        {'asdf' + txt}
    </div>)
}

export default todo