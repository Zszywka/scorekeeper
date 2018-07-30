// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
//
// //smoke test(they only check if the component renders at all/without expect...)
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   //clean <div></div>
//   ReactDOM.unmountComponentAtNode(div);
// });

//the same
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});

// return (
//   <div>
//     <Button />
//   <div>
// )
//shallow render:
// <div>
//   <Button />
// <div>
//mount render:
// <MyApp>
//   <div>
//     <Button>
//       <button>
//         click me!
//       </button>
//     </Button>
//   </div>
// </MyApp>
