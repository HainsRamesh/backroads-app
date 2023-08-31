const Title = ({ firstName, lastName }) => {
  return (
    <div className="section-title">
      <h2>
        {firstName} <span>{lastName}</span>
      </h2>
    </div>
  );
};
export default Title;
