import * as faker from "faker"

const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}
export const addFactory = (groups = [{ code: 3849, children: [{ code: 970 }] }]) => {
    return ({
        title: faker.commerce.productName(),
        description: faker.lorem.paragraph(),
        categories: [categoryFactory(groups)],
        uf: getRandomIntInclusive(1, 27),
        city: getRandomIntInclusive(1, 27),
        confirmed: Math.random() >= 0.5,
        paid: Math.random() >= 0.5
    })
}
export const categoryFactory = (groups) => {
    const randomGroup = groups.map((group) => (group.code))[Math.floor(Math.random() * groups.length)]
    const childrens = groups.filter((group) => (group.code === randomGroup))[0].children
    const randomCategory = childrens[Math.floor(Math.random() * childrens.length)].code
    return (
        {
            main: randomGroup,
            sub: randomCategory
        }
    )
}
