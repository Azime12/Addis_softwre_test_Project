import { Link } from "react-router-dom";
// import { ArrowBackIcon } from "../Icons";

const Item = (props,props1) => {
  const { page,title } = props;
  if (title === "Home") {
    return <div id="page">{page}</div>;
  } else {
    return (
      <div id="page">
       
        
        {page}
      </div>
    );
  }
};

export default Item;
