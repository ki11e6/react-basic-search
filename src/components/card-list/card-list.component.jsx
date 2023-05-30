// import { Component } from 'react';

import CardContainer from '../card-container/card-container.component';

import './card-list.styles.css';

const CardList = (props) => {
  const { monsters } = props;
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <CardContainer className="card-container" item={monster} />;
      })}
    </div>
  );
};

// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;
//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           return <CardContainer className="card-container" item={monster} />;
//         })}
//       </div>
//     );
//   }
// }

export default CardList;
