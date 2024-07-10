import './Form.css';

const Form = ({ title, onCancel}) => {
  return (
    <div className="form-modal">
      <div className="form-content">
        <h2>{title}</h2>
        <label>
          Category
          <input type="text" />
        </label>
        <label>
          Name
          <input type="text" />
        </label>
        <label>
          Quantity
          <input type="number"/>
        </label>
        <label>
          Price
          <input type="number" />
        </label>
        <label>
          Description
          <textarea></textarea>
        </label>
        <div className="form-buttons">
          <button onClick={onCancel}>Cancel</button>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Form;