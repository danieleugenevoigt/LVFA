import threesixty from '../../assets/scripts/threesixty.js-master/src/threesixty';
const threesixtyObj = new ThreeSixty(document.getElementById('threesixty'), {
  image: 'https://s3.eu-central-1.amazonaws.com/threesixty.js/watch.jpg',
  width: 320,
  height: 320,
  count: 31,
  perRow: 4,
  speed: 100,
  prev: document.getElementById('prev'),
  next: document.getElementById('next'),
});

threesixtyObj.play();
