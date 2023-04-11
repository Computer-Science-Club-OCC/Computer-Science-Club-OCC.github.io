import "./resources.css";

function Tags ({tags}){
  return (
    <>
        {tags.map((tag, i) => {
            return <p className='tag' key={i}>
            {tag}
        </p>
        })}
    </>    
  )
}

export default Tags;