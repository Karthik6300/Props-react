import Third from "./third";

const Second = ({item,index}) => {
  return (
    <>
      <tr key={index}>
        <td>{item.name}</td>
        <td>{item.age}</td>
        <td>{item.location}</td>
      </tr>
    </>
  );
};
export default Second;
