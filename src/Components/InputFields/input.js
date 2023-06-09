import "../Edit/Edit.css"
import "../Posts/Post.css"

function Input(props) {
  const { inputType, classType, data, setData, label } = props;
  return (
    <>
      <label>{label}</label>
      {inputType === "textarea" ? (
        <textarea  
          type="text"
          className={classType}
          placeholder={data}
          onChange={(e) => setData(e.target.value)}
        />
      ) : (
        <input
          type={"text"}
          placeholder={data}
          onChange={(e) => setData(e.target.value)}
        />
      )}
    </>
  );
}

export default Input;
