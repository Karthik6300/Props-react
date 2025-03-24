import First from "./first";
var Third = (props) => {
    // var naresh =propvalue ;
    // var naresh =pillabachha 
    var {
        wish: {
          wish: { wish, name },
        },
      } = props;
//   var wish = "upadated value";
//   var name = "karthik nayani";
  console.log(props);
 
  console.log(wish, name, "responce 3");

  // console.log("this is 3 responce",props);
  return (
    <>
      <h3>
        {wish}
        {name}This is third component
      </h3>
      {/* <First/> */}
    </>
  );
};
export default Third;
