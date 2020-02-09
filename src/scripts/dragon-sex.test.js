import functions, {Dragon, Hatchery} from './dragon-sex'

// test("hello world", () => {
//     functions.helloWorld()
// })

test("make a dragon", () => {
    const greenDragon = new Dragon(0, "greenDragon", 1, 2, 3, 4, true)

    expect(greenDragon.atk).toEqual(1)
    expect(greenDragon.def).toEqual(2)
    expect(greenDragon.spd).toEqual(3)
    expect(greenDragon.hp).toEqual(4)
    expect(greenDragon.isFemale).toEqual(true)
    
})

test("sexy time", () => {
    const hatchery = new Hatchery

    hatchery.add(greenDragon("greenDragon", 1, 2, 3, 4, true));
    expect(hatchery.greeDragon.key).toEqual(0);
    expect(hatchery.greeDragon.name).toEqual(greenDragon);
    expect(hatchery.greeDragon.key).toEqual(0);
})





