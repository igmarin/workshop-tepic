const stars_tag = document.getElementById('stars')
const star_other = 'holo';
const star = '<svg xmlns="http://www.w3.org/2000/svg" class="star" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>'

export const five_stars = () => {
  console.log(star_other)
  for (let index = 0; index < 5; index++) {
   stars_tag.innerHTML += star;
  }
}


