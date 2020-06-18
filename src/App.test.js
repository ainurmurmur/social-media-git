import React from 'react';
import ReactDOM  from 'react-dom';
import AppMain from './App';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppMain />, div);
  ReactDOM.unmountComponentAtNode(div);
});


// test('renders learn react link', () => {
//   const { getByText } = render(<AppMain />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

