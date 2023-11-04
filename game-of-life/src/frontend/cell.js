const Cell = ({ status }) => {
  return (
    <div className={`cell ${status === 1 ? "alive" : "dead"}`}>
      {/* You can style the cell based on its status */}
    </div>
  );
};

export default Cell;
