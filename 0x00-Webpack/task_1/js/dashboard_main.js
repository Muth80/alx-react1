import $ from 'jquery';
import _ from 'lodash';

$('body').append(
  `<p>Holberton Dashboard</p>
   <p>Dashboard data for the students</p>
   <button>Click here to get started</button>
   <p id='count'></p>
   <p>Copyright - Holberton School</p>`
);

let count = 0;
const updateCounter = () => {
  count += 1;
  $('#count').html(`${count} clicks on the button`);
};
$('button').on('click', _.debounce(updateCounter, 1000));
