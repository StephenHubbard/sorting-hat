const {Howl} = require('howler');

module.exports = {
        randomHouse: (updateFn, nextPageFn) => {
        // generate a random number between 1-4
        const randomNum = Math.ceil(Math.random() * 4)
        // use random number to assign a House
        const house = randomNum === 1 ? 'Gryffindor' : randomNum === 2 ? 'Hufflepuff' : randomNum === 3 ? 'Slytherin' : 'Ravenclaw'
        const mainColor = randomNum === 1 ? '#d3a625' : randomNum === 2 ? '#372e29' : randomNum === 3 ? '#EAEAEA' : '#E2E2E2'
        const secondaryColor = randomNum === 1 ? '#740001' : randomNum === 2 ? '    #ecb939' : randomNum === 3 ? '#2a623d' : '#000a90'
        const audio = randomNum === 1 ? '/gryffindor.mp4' : randomNum === 2 ? '/hufflepuff.mp4' : randomNum === 3 ? '/slytherin.mp4' : '/ravenclaw.mp4'
        updateFn({house, mainColor, secondaryColor, audio})
        nextPageFn(`/house/${house}`)

        let sound = new Howl({
            src: [audio]
        })
        sound.play();
    }
}
