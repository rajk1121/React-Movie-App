import React from 'react';
function ListGroup(props) {
    const { items, selectedItem, onItemSelect, valueProperty } = props;
    
    return (

        <ul className='list-group'>
            {/* {console.log(items)}
            {console.log(selectedItem)} */}
            
            {items.map((item,i) => {
                return (
                    <li key={i}
                        onClick={() => {
                            onItemSelect(item)
                        }}
                        className={
                            item.name === selectedItem.name ? 'list-group-item active' : 'list-group-item'
                        }

                    >
                        {/* {console.log(item)} */}
                        {item.name}
                    </li>
    
                )
               
            })}
        </ul>
    )
}
ListGroup.defaultProps = {
    textProperty: "name",
    valueProperty: "_id"
}
export default ListGroup;