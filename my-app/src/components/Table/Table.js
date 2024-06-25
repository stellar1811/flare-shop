import './Table.css';
import { IoMdCreate, IoMdTrash } from 'react-icons/io';

const Table = ({ products }) => {
    return (
        <table className="product-table">
            <thead>
                <tr className='table-line'>
                    <th>ID</th>
                    <th>Category</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{product.category}</td>
                        <td>{product.name}</td>
                        <td>{product.quantity}</td>
                        <td>{product.price}</td>
                        <td className="actions">
                            <IoMdCreate className="icon edit-icon" />
                            <IoMdTrash className="icon delete-icon" />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;