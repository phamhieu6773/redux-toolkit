import { useState } from "react";
import { useDispatch } from "react-redux";
import Input from "../InputFields/input";
import "./Post.css";
import { createPost } from "../../redux/postSlice";

function MakePost(props) {
  const {setOpenPost} = props;
  const [title, setTitle] = useState("Add a title");
  const [desc, setDesc] = useState("Add a description");
  const [selectionIndex, setSelectionIndex] = useState(0);
  const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];
  const dispatch = useDispatch()
  const handlePost = () => {
    setOpenPost(false)
    const newPost = {
      title: title,
      description: desc,
      tag: selectionIndex,
    }
    dispatch(createPost(newPost))
  };
  return (
    <section className="makepost-container">
      <div className="makepost-navigation">
        <p className="makepost-save" onClick={handlePost}>
          Post
        </p>
      </div>
      <Input
        data={title}
        inputType="textarea"
        setData={setTitle}
        label="Title"
        className="makepost-title"
      />
      <Input
        data={desc}
        inputType="textarea"
        setData={setDesc}
        label="Descriptions"
        className="makepost-desc"
      />
      <label>Tags</label>
      <div className="makepost-tags">
        {tags.map((tag, index) => {
          return (
            <button
              key={index}
              className={`${
                selectionIndex === index
                  ? `makepost-tags-selected`
                  : `makepost-tags-${tag}`
              }`}
              onClick={() => setSelectionIndex(index)}
            >
              {tag}
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default MakePost;
