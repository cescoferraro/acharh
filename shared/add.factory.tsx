import * as faker from "faker"

const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}
export const genericAddFactory = () => {
    return ({
        title: "PLACEHOLDER",
        website: "PLACEHOLDER",
        creator: "PLACEHOLDER",
        phones: [],
        images: [],
        description: "PLACEHOLDER",
        categories: [],
        confirmed: true,
        paid: true,
        address: {
            name: "PLACEHOLDER",
            number: 999,
            complemento: "PLACEHOLDER",
            bairro: "PLACEHOLDER",
            cep: 99999999,
            uf: 1,
            city: 1
        },
        social: {
            facebook: "hello123",
            instagram: "hello123",
            linkedin: "hello123",
            twitter: "hello123"
        }
    })
}

export const addFactory = (groups = [{ code: 3849, children: [{ code: 970 }] }]) => {
    return ({
        title: faker.commerce.productName(),
        website: faker.internet.url(),
        creator: faker.random.uuid(),
        phones: RandomSizeArray(phoneFactory),
        images: RandomSizeArray(imageFactory),
        description: faker.lorem.paragraph(),
        categories: CatRandomSizeArray(categoryFactory, groups),
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
        },
        social: socialFactory()
    })
}

const RandomSizeArray = (func) => {
    return Array.from({ length: getRandomIntInclusive(1, 2) }, () => (func()))
}

const CatRandomSizeArray = (func, groups) => {
    return Array.from({ length: getRandomIntInclusive(1, 2) }, () => (func(groups)))
}

export const socialFactory = (): ISocial => {
    const username = faker.internet.userName()
    return {
        facebook: username + faker.random.uuid().substring(1, 5),
        instagram: username + faker.random.uuid().substring(1, 5),
        linkedin: username + faker.random.uuid().substring(1, 5),
        twitter: username + faker.random.uuid().substring(1, 5)
    }
}

export const imageFactory = () => {
    return { url: faker.image.imageUrl(100, 100, "people") }
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
