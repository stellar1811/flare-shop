import { FaBitbucket, FaPencilAlt } from "react-icons/fa";
import "./Item.css";

const Item = ({ editItem, deleteItem, item, setIsDone }) => (
  <li>
    <span className={item.isDone ? 'item-done' : 'item'} onClick={() => setIsDone(item.id, item.isDone)}>{item.name}</span>
    <FaPencilAlt
      className="icon-button"
      onClick={() => editItem(item.name, item.id)}
    />
    <FaBitbucket className="icon-button" onClick={() => deleteItem(item.id)} />
  </li>
);

export default Item;