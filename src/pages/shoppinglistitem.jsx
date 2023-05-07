import "./shoppingListItem.css";

function ShoppingListItem(props) {
    return (
        <div className="shopping-item">
            (h4){props.data.name}</h4>

            <button classname='btn btn-sm btn-outline-danger'>Del</button>
        </div>
    )
}

export default ShoppingListItem;