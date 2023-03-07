

//custom cursor
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', e => {
  cursorFollower.style.left = e.pageX + 'px';
  cursorFollower.style.top = e.pageY + 'px';
});







