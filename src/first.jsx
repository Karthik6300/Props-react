import Second from "./second";
const First = ({ data }) => {
  return (
    <>
      <table border="5" cellPadding="10" cellSpacing="5" color="white">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Location</th>
          </tr>
        </tbody>
        <tbody>
          {data.map((item, index) => {
            return (
              <>
                {/* <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.location}</td>
                </tr> */}
                <Second item={item} index={index} />
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default First;
