function accordion() {
  let allItem = document.querySelectorAll('.item')

  let accordion = Array.from(allItem)

  accordion.map((item) => {

    item.addEventListener('click', () => {

      item.classList.toggle('active')
    })


  })


}
export default accordion;