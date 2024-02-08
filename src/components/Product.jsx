// export const Product = () => {
//     return (
//       <div>
//         <h2>Tacos</h2>
//               <p>Price: 999 credits</p>
//       </div>
//     );
//   };

export const Product = ({ name, imgUrl, price }) => {
  return (
    <div>
      <h2>{name}</h2>
			<img src={imgUrl} alt={name} width="480" />
			<p>Price: {price} credits</p>
    </div>
  );
  };