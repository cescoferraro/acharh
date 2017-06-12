import * as faker from "faker"

const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}
export const addFactory = (groups = [{ code: 3849, children: [{ code: 970 }] }]) => {
    return ({
        title: faker.commerce.productName(),
        website: faker.internet.url(),
        phones: [phoneFactory()],
        images: [imageFactory()],
        description: faker.lorem.paragraph(),
        categories: [categoryFactory(groups)],
        confirmed: Math.random() >= 0.5,
        paid: Math.random() >= 0.5,
        address: {
            name: faker.address.streetName(),
            number: parseInt(faker.address.zipCode(), 10),
            complemento: faker.address.secondaryAddress(),
            bairro: faker.address.county(),
            cep: parseInt(faker.address.zipCode(), 10),
            uf: getRandomIntInclusive(1, 27),
            city: getRandomIntInclusive(1, 27)
        }
    })
}

export const imageFactory = () => {
    return { url: faker.image.imageUrl(100, 100, "people"), default: Math.random() >= 0.5 }
}

export const phoneFactory = () => {
    const numberLenght = 9
    return {
        ddd: getRandomIntInclusive(11, 99),
        number: Math.floor(Math.pow(10, numberLenght - 1) + Math.random() * 9 * Math.pow(10, numberLenght - 1))
    }
}

export const categoryFactory = (groups) => {
    const randomGroup = groups.map((group) => (group.code))[Math.floor(Math.random() * groups.length)]
    const childrens = groups.filter((group) => (group.code === randomGroup))[0].children
    const randomCategory = childrens[Math.floor(Math.random() * childrens.length)].code
    return ({ main: randomGroup, sub: randomCategory })
}
